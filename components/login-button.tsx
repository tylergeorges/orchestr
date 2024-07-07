'use client';

import { useCurrentPath } from '@/hooks/use-current-path';
import { ButtonLink, ButtonVariants } from '@/components/ui/button';

interface LoginButtonProps extends ButtonVariants {}

export const LoginButton = ({ ...props }: LoginButtonProps) => {
  const path = useCurrentPath();

  if (path === 'login') return null;

  return (
    <ButtonLink href="/login" variant="ghost" className="group" size="md" {...props}>
      Login
    </ButtonLink>
  );
};
