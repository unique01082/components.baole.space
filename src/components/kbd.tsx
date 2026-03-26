import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const kbdVariants = cva(
  "inline-flex items-center justify-center rounded border font-mono text-xs font-medium",
  {
    variants: {
      size: {
        sm: "h-5 min-w-5 px-1",
        md: "h-6 min-w-6 px-1.5",
        lg: "h-7 min-w-7 px-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          kbdVariants({ size }),
          "border-[var(--color-border)] bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "text-[var(--color-text)] shadow-sm",
          className,
        )}
        {...props}
      />
    );
  },
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
