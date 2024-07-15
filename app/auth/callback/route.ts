import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(req: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const { searchParams, origin } = new URL(req.url);

  const code = searchParams.get('code');

  const supabase = await createClient();

  if (code) {
    const { error,data } = await supabase.auth.exchangeCodeForSession(code);

    // URL to redirect to after sign up process completes
    if (error) {
      return NextResponse.redirect(`${origin}/login?message=$${error.message}`);
    }

    return NextResponse.redirect(`${origin}/home`);
  }

  return NextResponse.redirect(`${origin}/login`);
}
