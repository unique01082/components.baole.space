import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const headingVariants = cva("font-bold tracking-tight text-[var(--color-text)]", {
  variants: {
    level: {
      h1: "text-5xl md:text-6xl",
      h2: "text-4xl md:text-5xl",
      h3: "text-3xl md:text-4xl",
      h4: "text-2xl md:text-3xl",
      h5: "text-xl md:text-2xl",
      h6: "text-lg md:text-xl",
    },
    gradient: {
      true: "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    level: "h2",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, gradient, as, ...props }, ref) => {
    const Component = as || level || "h2";

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level: level || (as as typeof level), gradient }), className)}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

const textVariants = cva("text-[var(--color-text)]", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    variant: {
      default: "text-[var(--color-text)]",
      secondary: "text-[var(--color-text-secondary)]",
      muted: "text-[var(--color-text-muted)]",
      placeholder: "text-[var(--color-text-placeholder)]",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    variant: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, variant, as = "p", ...props }, ref) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, variant }), className)}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Heading, Text, headingVariants, textVariants };
