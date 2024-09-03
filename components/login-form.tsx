'use client';

import { useState } from 'react';
import type { Provider } from '@supabase/supabase-js';

import { useSupabaseBrowser } from '@/lib/supabase/client';
import { getBaseUrl } from '@/utils/get-base-url';

import { SubmitButton } from '@/components/submit-button';

export const LoginForm = () => {
  const [isProviderLoading, setIsProviderLoading] = useState(false);

  const supabase = useSupabaseBrowser();

  const signInWith = async (provider: Provider) => {
    if (isProviderLoading) return;

    setIsProviderLoading(true);

    await supabase.auth.signInWithOAuth({
      provider,

      options: {
        redirectTo: `${getBaseUrl()}/auth/callback`
      }
    });
  };

  return (
    <form className="w-full animate-fade-up gap-4 text-foreground center-v vertical">
      <SubmitButton
        color="brand"
        onClick={e => {
          e.preventDefault();

          signInWith('google');
        }}
        loading={isProviderLoading}
      >
        Sign in
      </SubmitButton>
    </form>
  );
};
