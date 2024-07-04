import { forwardRef } from 'react';
import Image from 'next/image';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '@/utils/cn';

const avatar = tv({
  base: 'relative  rounded-full ',

  variants: {
    size: {
      xs: 'w-2 h-2',
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-[28px] h-[28px]',
      xl: 'w-[36px] h-[36px]',

      '2xl': 'w-10 h-10'
    }
  },

  defaultVariants: {
    size: 'md'
  }
});

export type AvatarVariants = VariantProps<typeof avatar>;

interface AvatarProps extends React.ComponentProps<'div'>, AvatarVariants {}

export const Avatar = forwardRef<HTMLDivElement, WithChildren<AvatarProps>>(
  ({ className, children, size, ...props }, ref) => (
    <div {...props} className={cn(avatar({ size }), className)} ref={ref}>
      {children}
    </div>
  )
);

Avatar.displayName = 'Avatar';

interface AvatarImageProps extends React.ComponentProps<typeof Image>, AvatarVariants {}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, width = 16, height = 16, alt = '', ...props }, ref) => (
    <Image
      referrerPolicy="no-referrer" // load images
      alt={alt}
      width={width}
      height={height}
      unoptimized
      // quality={100}
      {...props}
      className={cn(
        'h-full w-auto rounded-full',
        // avatar({ size }),
        className
      )}
      ref={ref}
    />
  )
);

AvatarImage.displayName = 'AvatarImage';

interface AvatarFallbackProps extends React.ComponentProps<'div'>, AvatarVariants {}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      className={cn(
        'flex h-full w-auto items-center justify-center rounded-full bg-muted',
        // avatar({ size }),
        className
      )}
      ref={ref}
    />
  )
);

AvatarFallback.displayName = 'AvatarFallback';
