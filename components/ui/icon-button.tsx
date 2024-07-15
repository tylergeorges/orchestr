import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/utils/cn';

const iconButtonVariants = tv({
  base: 'horizontal center',

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

      transparent: 'bg-transparent'
    },

    size: {
      xs: 'size-6 p-1 text-xs',

      sm: 'size-8 text-xs',

      md: 'size-10 text-sm',

      lg: 'size-11 text-lg',

      xl: 'size-14 text-lg'
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
  }
});

type IconButtonVariants = VariantProps<typeof iconButtonVariants>;

interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    IconButtonVariants {}

export const IconButton = forwardRef<HTMLButtonElement, React.PropsWithChildren<IconButtonProps>>(
  ({ className, children, variant, color, fill, size, round, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(iconButtonVariants({ variant, color, round, fill, size }), className)}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
