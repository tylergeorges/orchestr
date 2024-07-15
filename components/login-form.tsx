'use client';

import { useState } from 'react';
import type { Provider } from '@supabase/supabase-js';
import { toast } from 'sonner';

import { useSupabaseBrowser } from '@/lib/supabase/client';
import { getBaseUrl } from '@/utils/get-base-url';

import { Icons } from '@/components/icons';
import { Divider } from '@/components/ui/divider';
import { Input } from '@/components/ui/input';
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
        redirectTo: `${getBaseUrl()}/auth/callback`,
        
      }
    });
  };

  const handleEmailAuthClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    toast.warning('Email auth not yet supported.');
  };

  return (
    <form className="w-full animate-fade-up gap-4 text-foreground center-v vertical">
      <div className="gap-2 vertical">
        <Input
          id="email"
          autoComplete="email"
          onClick={handleEmailAuthClick}
          type="email"
          placeholder="name@example.com"
          color="default"
          disabled
        />
      </div>

      <SubmitButton  color="brand" onClick={handleEmailAuthClick}>
        Sign In with Email
      </SubmitButton>

      <Divider className="uppercase">or continue with</Divider>

      <SubmitButton
        onClick={e => {
          e.preventDefault();

          signInWith('google');
        }}
        loading={isProviderLoading}
      >
        <Icons.google className="h-4 w-4" />
        Google
      </SubmitButton>
    </form>
  );
};
