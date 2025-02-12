import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import Link from 'next/link';

import { cn } from '@/utils/cn';

const buttonVariants = tv({
  base: cn(
    'relative inline-flex items-center whitespace-nowrap rounded-md px-4 py-2 text-center text-sm transition duration-300 ease-out',
    'outline-none ring-border focus-visible:ring-2',
    'items-center justify-center overflow-hidden align-middle font-semibold disabled:cursor-not-allowed disabled:opacity-50'
  ),

  variants: {
    color: {
      default: 'bg-secondary text-primary hover:enabled:bg-accent',

      primary:
        'bg-primary text-primary-foreground selection:bg-primary-foreground selection:text-primary hover:enabled:bg-primary/80',

      brand: 'bg-brand text-brand-foreground ring-brand/70 hover:enabled:bg-brand/80',

      destructive: 'bg-destructive text-destructive-foreground hover:enabled:bg-destructive/80'
    },

    variant: {
      default: '',

      link: 'bg-transparent hover:underline',

      outline:
        'border border-border bg-transparent text-primary hover:bg-secondary hover:text-secondary-foreground',

      ghost: 'border-none bg-transparent text-primary hover:bg-accent',

      transparent: 'bg-transparent'
    },

    size: {
      xs: 'w-[52px] min-w-[52px] gap-1 p-1 text-xs',

      sm: 'h-9 gap-1 px-3 py-2 text-xs',

      md: 'h-10 gap-2 px-6 py-3 text-sm',

      lg: 'h-11 gap-3 px-7 py-3.5 text-base',

      xl: 'h-14 gap-2 rounded-lg px-6 text-base',

      icon: 'size-10 p-0'
    },

    round: {
      true: 'rounded-full'
    },

    fill: {
      true: 'w-full'
    }
  },

  defaultVariants: {
    color: 'default',
    variant: 'default',
    size: 'md'
  },

  compoundVariants: [
    {
      color: 'brand',
      variant: 'outline',
      className:
        'border border-brand bg-transparent text-brand hover:bg-brand hover:text-brand-foreground'
    },
    {
      color: 'primary',
      variant: 'outline',
      className:
        'border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground'
    },
    {
      color: 'destructive',
      variant: 'outline',
      className:
        'border border-destructive bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground'
    },
    {
      color: 'default',
      variant: 'outline',
      className: 'border border-accent bg-transparent text-primary hover:bg-accent'
    },

    {
      color: 'brand',
      variant: 'ghost',
      className: 'bg-transparent text-brand hover:bg-brand hover:text-brand-foreground'
    },
    {
      color: 'primary',
      variant: 'ghost',
      className:
        'bg-transparent text-primary-foreground hover:bg-primary hover:text-primary-foreground'
    },
    {
      color: 'destructive',
      variant: 'ghost',
      className:
        'bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground'
    },
    {
      color: 'default',
      variant: 'ghost',
      className: 'bg-transparent text-primary hover:bg-accent'
    }
  ]
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariants {}

export const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  ({ className, children, variant, color, fill, size, round, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(buttonVariants({ variant, color, round, fill, size }), className)}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

type ButtonLinkProps = Omit<React.ComponentProps<typeof Link>, 'color'> &
  ButtonVariants & {
    active?: boolean;
    className?: string;
  };

export const ButtonLink = forwardRef<HTMLAnchorElement, React.PropsWithChildren<ButtonLinkProps>>(
  ({ className, children, color, active, variant, fill, round, size, ...props }, ref) => {
    const watchActiveState = typeof active !== 'undefined';

    return (
      <Link
        {...props}
        className={cn(
          'cursor-pointer',
          buttonVariants({
            variant: watchActiveState ? (active ? 'default' : 'ghost') : variant,
            fill,
            round,
            color,
            size
          }),
          className
        )}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';
