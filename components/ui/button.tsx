import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const buttonVariants = tv({
  base: cn(
    "relative inline-flex items-center justify-center rounded-sm whitespace-nowrap text-center font-semibold text-xs transition duration-200 ease-out",
    "outline-none focus-visible:ring-2 ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ),

  variants: {
    variant: {
      default:
        "bg-secondary text-secondary-foreground enabled:hover:bg-secondary-foreground enabled:hover:bg-secondary/80",

      primary: "bg-primary text-primary-foreground enabled:hover:bg-opacity-80",

      brand: "bg-brand text-brand-foreground enabled:hover:bg-brand/80",

      destructive:
        "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/80",

      link: "bg-transparent text-primary enabled:hover:underline",

      outline:
        "border border-secondary bg-transparent text-primary enabled:hover:bg-secondary",

      ghost: "bg-transparent text-primary enabled:hover:bg-secondary",

      transparent:
        "bg-transparent text-muted enabled:hover:bg-secondary enabled:hover:text-primary",

      icon: "",
    },

    size: {
      xs: "w-[52px]  min-w-[52px] h-5 gap-1 px-2 py-2",
      sm: "w-[60px]  min-w-[60px] h-9 gap-1 px-4 py-2",
      md: "w-[96px]  min-w-[96px] h-9 gap-2 px-4 py-2 text-sm",
      lg: "w-[130px] min-w-[130px] min-h-[2.5rem] h-10 gap-2 px-6 py-2 text-sm",
    },

    fill: {
      true: "w-full",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ className, children, variant, fill, size, ...props }, ref) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, fill, size }), className)}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
