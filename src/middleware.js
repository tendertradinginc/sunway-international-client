import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const AuthRoutes = ["/login", "/registration"];

const roleBasedPrivateRoutes = {
  user: [/^\/dashboard$/],
  driver: [/^\/dashboard\/driver/],
  admin: [/^\/dashboard\/admin/],
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (AuthRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const accessToken = cookies().get("accessToken")?.value;
  console.log("token", accessToken);
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let decodedData = null;
  try {
    decodedData = jwtDecode(accessToken);
    console.log("data", decodedData);
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role;
  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url)); // Redirect to home if the user is unauthorized
}

export const config = {
  matcher: ["/login", "/registration", "/dashboard/:page*"],
};
