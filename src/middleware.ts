import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  const Admintoken = request.cookies.get("admintoken")?.value || "";
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/user/signup" || path === "/user/login";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }
  const protectedPath =
    path === "/admin/home_page_projects" || path === "/admin/about_page_samples" || path === "/admin"
  if (protectedPath && !Admintoken) {
    return NextResponse.redirect(new URL("/admin/admin_login", request.url));
  }

  const loginPath =
    path === "/admin/admin_login"
  if (loginPath && Admintoken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
  matcher: [
    "/user/profile",
    "/user/login",
    "/user/signup",
    "/admin/home_page_projects",
    "/admin/admin_login",
    "/admin",
    "/admin/about_page_samples",
  ],
};
