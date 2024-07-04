import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/utils/cn';

const badgeVariants = tv({
  base: cn(
    'inline-flex w-fit items-center justify-center rounded-lg px-2.5 py-1 text-xs font-bold'
  ),

  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',

      secondary: 'bg-muted/20 text-muted-foreground',

      brand: 'bg-brand text-brand-foreground',

      destructive: 'bg-destructive text-destructive-foreground',

      outline: 'border border-secondary bg-transparent text-primary',

      ghost: 'bg-transparent text-primary',

      transparent: 'bg-transparent text-muted'
    },

    position: {
      'top-right': 'absolute end-0 top-0 -me-2 -mt-1 flex size-3 p-0'
    }
  },

  defaultVariants: {
    variant: 'default'
  }
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeVariants {}

export const Badge = forwardRef<HTMLDivElement, React.PropsWithChildren<BadgeProps>>(
  ({ className, children, variant, position, ...props }, ref) => {
    return (
      <div {...props} className={cn(badgeVariants({ variant, position }), className)} ref={ref}>
        {children ? (
          children
        ) : (
          <span className="relative h-full animate-ping rounded-full bg-inherit" />
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
