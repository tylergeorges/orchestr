import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

const inputVariants = tv({
  base: "flex  w-full rounded-sm border  bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50  h-9",

  variants: {},
});

type InputVariants = VariantProps<typeof inputVariants>;

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariants {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
