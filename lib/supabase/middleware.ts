import { type NextRequest, NextResponse } from 'next/server';

import { type CookieOptions, createServerClient } from '@supabase/ssr';
import type { Database } from '@/lib/types/supabase';

export const updateSession = async (request: NextRequest) => {
  // const res =  await updateSession(request);

  const isRoute = (route: string) => request.nextUrl.pathname.startsWith(route);
  // return res

  const requestHeaders = new Headers(request.headers);

  const pathname = request.nextUrl.pathname;
  requestHeaders.set('x-url', pathname);

  let response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },

        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options
          });

          response = NextResponse.next({
            request: {
              headers: requestHeaders
            }
          });

          response.cookies.set({
            name,
            value,
            ...options
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options
          });

          response = NextResponse.next({
            request: {
              headers: requestHeaders
            }
          });

          response.cookies.set({
            name,
            value: '',
            ...options
          });
        }
      }
    }
  );
  // const supabase = createServerClient<Database>(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return request.cookies.get(name)?.value;
  //       },
  //       set(name: string, value: string, options: CookieOptions) {
  //         request.cookies.set({
  //           name,
  //           value,
  //           ...options
  //         });
  //         response = NextResponse.next({
  //           request: {
  //             headers: request.headers
  //           }
  //         });
  //         response.cookies.set({
  //           name,
  //           value,
  //           ...options
  //         });
  //       },
  //       remove(name: string, options: CookieOptions) {
  //         request.cookies.set({
  //           name,
  //           value: "",
  //           ...options
  //         });
  //         response = NextResponse.next({
  //           request: {
  //             headers: request.headers
  //           }
  //         });
  //         response.cookies.set({
  //           name,
  //           value: "",
  //           ...options
  //         });
  //       }
  //     }
  //   }
  // );

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();

  if (isRoute('/home') && (error || !user)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
};
