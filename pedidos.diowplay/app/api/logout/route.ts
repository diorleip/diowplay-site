import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    new URL("/login", process.env.NEXT_PUBLIC_SITE_URL || "https://pedidos.diowplay.com")
  );

  response.cookies.set("diow_user", "", {
    expires: new Date(0),
    path: "/",
  });

  return response;
}