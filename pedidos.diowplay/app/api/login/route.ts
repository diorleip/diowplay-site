import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const SERVER = "http://pc123.xyz.lat:80";

    const response = await fetch(
      `${SERVER}/player_api.php?username=${username}&password=${password}`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    // LOGIN VÁLIDO
    if (data?.user_info?.auth == 1) {
      const res = NextResponse.json({
        success: true,
        username: data.user_info.username,
        status: data.user_info.status,
        exp_date: data.user_info.exp_date,
      });

      // COOKIE DE LOGIN
      res.cookies.set("diow_user", username, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      return res;
    }

    // LOGIN INVÁLIDO
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