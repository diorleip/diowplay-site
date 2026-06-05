import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("diow_user");

  const pathname = request.nextUrl.pathname;

  // ROTAS PROTEGIDAS
  const protectedRoutes = ["/dashboard"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // SE NÃO ESTIVER LOGADO
  if (isProtected && !cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // SE JÁ ESTIVER LOGADO E TENTAR VOLTAR PRO LOGIN
  if (pathname === "/login" && cookie) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};