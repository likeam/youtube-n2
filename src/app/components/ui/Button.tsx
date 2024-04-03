import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {}

export const buttonVariants = cva(
  " active:scale-95 inlin-flex item-center justify-center rounded-md text-sm font-medium transition-color focus:outline-non focus:ring-2 focus:ring-salte-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-non dark:focus:ring-offset-900",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        outline:
          "bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border-slate-200 hover:bg-slate-100 dark:border-slate-700",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:bg-slate-800 dark:bg-slate-400 date-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transpaert undrling-offset-4 hover:underlie text-slate-900 dark:text-slate-100 hover:bg-transparent dark:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading}
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {isLoading ? <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
