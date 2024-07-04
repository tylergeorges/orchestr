import { forwardRef } from 'react';

import { cn } from '@/utils/cn';
import { tv, VariantProps } from 'tailwind-variants';

export const inputVariants = tv({
  base: 'focus- flex h-10 w-full gap-2 rounded-sm bg-accent px-2 py-3.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',

  variants: {
    variant: {
      default: 'focus:ring-2 focus-visible:ring-brand',

      ghost: 'bg-transparent focus:border-brand'
    },

    color: {
      default: '',
      destructive: 'bg-destructive/10 ring-1 ring-destructive/70 placeholder:text-destructive/70'
    }
  }
});

export type InputVariants = VariantProps<typeof inputVariants>;

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>,
    InputVariants {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, color, ...props }, ref) => {
    return (
      <input type={type} className={cn(inputVariants({ color }), className)} ref={ref} {...props} />
    );
  }
);

Input.displayName = 'Input';

interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>,
    InputVariants {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, color, ...props }, ref) => {
    return (
      <textarea
        className={cn(inputVariants({ color }), '', className)}
        ref={ref}
        {...props}
        rows={1}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
