import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const response = await fetch(
      `http://pc123.xyz/player_api.php?username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Servidor IPTV retornou ${response.status}`);
    }

    const data = await response.json();

    if (data?.user_info?.auth == 1) {
      const res = NextResponse.json({
        success: true,
      });

      res.cookies.set("diow_user", username, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      return res;
    }

    return NextResponse.json(
      {
        success: false,
        message: "Usuário ou senha inválidos",
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    console.error("ERRO LOGIN IPTV:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao conectar servidor IPTV",
      },
      {
        status: 500,
      }
    );
  }
}
