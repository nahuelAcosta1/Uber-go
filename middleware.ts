import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Evitar proteger las rutas de autenticación
     */
    "/((?!_next|static|.*\\..*|sign-in|sign-up).*)",
  ],
};
