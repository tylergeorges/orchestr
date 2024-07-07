'use server';

import { createClient } from '@/lib/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signIn = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/home');
};

export const signInWithEmail = async (email: string) => {
  const origin = headers().get('origin');
  const supabase = await createClient();

  if (!email.trim()) {
    return {
      message: 'Email is required'
    };
  }

  const { error } = await supabase.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${origin}/auth/callback`
  });

  if (error) {
    return {
      message: error.message
    };
  }

  return redirect('/home');
};
