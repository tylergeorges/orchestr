'use client';

import { useFormStatus } from 'react-dom';

import { Icons } from '@/components/icons';
import { Button } from '@components/ui/button';

interface Props extends React.ComponentProps<typeof Button> {
  loading?: boolean;
}

export function SubmitButton({ children, loading, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = loading || (pending && action === props.formAction);

  return (
    <Button
      fill
      type="submit"
      disabled={loading || pending}
      aria-disabled={loading || pending}
      className="justify-center"
      {...props}
    >
      {isPending ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : children}
    </Button>
  );
}
