import { authMiddleware } from "@clerk/nextjs";

// Define the authentication middleware
export default authMiddleware({
  publicRoutes: [
    '/',
    
    '/projects/:id', // Keep this if you want it to be accessible to both signed-in and signed-out user
    '/api/uploadthing',
    '/api/webhook/clerk',
    '/resource', // Keep this if you want it to be accessible to both signed-in and signed-out users
    '/about', // Keep this if you want it to be accessible to both signed-in and signed-out users
    '/blog', // Keep this if you want it to be accessible to both signed-in and signed-out users
    '/community' // Option 1: Make the route accessible to both signed-in and signed-out users
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/uploadthing',
    '/resource', // Keep this if you want to prevent Clerk authentication for this route
    '/about', // Keep this if you want to prevent Clerk authentication for this route
    '/blog', // Keep this if you want to prevent Clerk authentication for this route
    '/community',
     // Option 2: Prevent Clerk authentication from running at all for the route
  ],

});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
