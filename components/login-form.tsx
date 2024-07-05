'use client';

import { useState } from 'react';
import type { Provider } from '@supabase/supabase-js';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { signInWithEmail } from '@/app/login/actions';
import { emailAuthSchema } from '@/lib/validations/auth';
import { useSupabaseBrowser } from '@/lib/supabase/client';
import { getBaseUrl } from '@/utils/get-base-url';

import { Icons } from '@/components/icons';
import { Divider } from '@/components/ui/divider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/submit-button';

type FormData = z.infer<typeof emailAuthSchema>;

export const LoginForm = () => {
  const [isProviderLoading, setIsProviderLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(emailAuthSchema)
  });

  const emailSignIn = async (data: FormData) => {
    if (isProviderLoading) return;

    setIsProviderLoading(true);

    const result = await signInWithEmail(data.email.toLowerCase());

    if (result.message) {
      setIsProviderLoading(false);

      setError('email', { message: result.message });

      return toast.error('Uh oh! Something went wrong.', {
        description: result.message
      });
    }

    setIsProviderLoading(false);

    return toast.success('Check your email', {
      description: 'We sent you a login link. Be sure to check your spam too.'
    });
  };

  const supabase = useSupabaseBrowser();

  const isLoading = isProviderLoading;

  const signInWith = async (provider: Provider) => {
    if (isLoading) return;

    setIsProviderLoading(true);

    await supabase.auth.signInWithOAuth({
      provider,

      options: {
        redirectTo: `${getBaseUrl()}/auth/callback`
      }
    });
  };

  return (
    <form
      className="w-full animate-fade-up gap-4 text-foreground center-v vertical"
      onSubmit={handleSubmit(emailSignIn)}
    >
      <span className="gap-2 vertical">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          autoComplete="email"
          type="email"
          placeholder="name@example.com"
          disabled={isLoading}
          color={errors?.email?.message ? 'destructive' : 'default'}
          {...register('email')}
        />

        {errors?.email?.message && (
          <span className="text-sm font-semibold text-destructive/80">
            {errors?.email?.message}
          </span>
        )}
      </span>

      <SubmitButton color="brand" loading={isLoading}>
        Sign In
      </SubmitButton>

      <Divider className="uppercase">or</Divider>

      <SubmitButton
        onClick={e => {
          e.preventDefault();

          signInWith('google');
        }}
        loading={isLoading}
      >
        <Icons.google className="h-4 w-4" />
        Google
      </SubmitButton>
    </form>
  );
};
