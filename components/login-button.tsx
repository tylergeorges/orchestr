'use client';

import { ButtonLink, ButtonVariants } from '@/components/ui/button';
import { useCurrentPath } from '@/hooks/use-current-path';

interface LoginButtonProps extends ButtonVariants {}

export const LoginButton = ({ ...props }: LoginButtonProps) => {
  const path = useCurrentPath();

  if (path === 'login') return null;

  return (
    <ButtonLink
      href="/login"
      color="brand"
      variant="outline"
      className="group"
      size="md"
      {...props}
    >
      Login
    </ButtonLink>
  );
};
