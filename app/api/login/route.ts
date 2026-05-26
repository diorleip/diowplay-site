import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // RECEBE DADOS
    const body = await req.json();

    const username = body.username?.trim();
    const password = body.password?.trim();

    // VALIDA CAMPOS
    if (!username || !password) {
      return NextResponse.json(
        {
          error: "Preencha usuário e senha IPTV.",
        },
        { status: 400 }
      );
    }

    // URL IPTV
    const url =
      `http://pc123.xyz:80/player_api.php?username=${username}&password=${password}`;

    console.log("URL IPTV:", url);

    // FETCH IPTV
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    // TEXTO BRUTO
    const text = await response.text();

    console.log("RESPOSTA IPTV:", text);

    // SE RETORNAR HTML
    if (
      text.startsWith("<") ||
      text.includes("DOCTYPE") ||
      text.includes("html")
    ) {
      return NextResponse.json(
        {
          error:
            "Servidor IPTV retornou HTML ao invés de JSON.",
        },
        { status: 500 }
      );
    }

    // CONVERTE JSON
    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      console.log("ERRO JSON:", e);

      return NextResponse.json(
        {
          error:
            "Servidor IPTV retornou resposta inválida.",
        },
        { status: 500 }
      );
    }

    // USUÁRIO INVÁLIDO
    if (!data?.user_info) {
      return NextResponse.json(
        {
          error: "Usuário IPTV inválido.",
        },
        { status: 401 }
      );
    }

    // STATUS
    if (data.user_info.status !== "Active") {
      return NextResponse.json(
        {
          error: "Usuário IPTV desativado.",
        },
        { status: 401 }
      );
    }

    // TOKEN
    const token = Buffer.from(username).toString("base64");

    // RESPOSTA
    const res = NextResponse.json({
      success: true,
      token,
      user: data.user_info,
      server: data.server_info,
    });

    // COOKIE
    res.cookies.set("diow_user", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (error) {
    console.log("ERRO IPTV:", error);

    return NextResponse.json(
      {
        error:
          "Erro ao conectar ao servidor IPTV.",
      },
      { status: 500 }
    );
  }
}