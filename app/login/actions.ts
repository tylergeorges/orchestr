'use server';

import { createClient } from '@/lib/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signInWithEmail = async (email: string) => {
  const origin = headers().get('origin');
  const supabase = await createClient();

  if (!email.trim()) {
    return {
      message: 'Email is required'
    };
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,

    options: {
      emailRedirectTo: `${origin}/auth/callback`
    }
  });

  if (error) {
    return {
      message: error.message
    };
  }

  return redirect('/home');
};
