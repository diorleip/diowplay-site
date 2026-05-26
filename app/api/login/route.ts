import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const response = await fetch(
      `http://pc123.xyz.lat:80/player_api.php?username=${username}&password=${password}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json();

    // LOGIN REAL
    if (
      data?.user_info &&
      String(data.user_info.auth) === "1"
    ) {
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

    // LOGIN ERRADO
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
    console.log(error);

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