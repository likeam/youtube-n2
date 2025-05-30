import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import { FC } from 'react'

const headingVariants = cva(" text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter  ", {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  });

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }) => {
    return <h1 {...props} className={cn(headingVariants({size, className}))}  >{children}</h1>
  }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
