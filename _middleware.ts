// import { updateSession } from '@/lib/supabase/middleware';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Also, disable the middleware on prefetch calls.
//      * Feel free to modify this pattern to include more paths.
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',

//     {
//       source: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
//       // missing: [
//       //   { type: 'header', key: 'next-router-prefetch' },
//       //   { type: 'header', key: 'purpose', value: 'prefetch' }
//       // ]
//     }
//   ]
// };
