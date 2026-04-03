import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-all",
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "border border-[var(--color-border)]",
          "text-[var(--color-text)]",
        ],
        gradient: [
          "bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]",
          "text-white shadow-[var(--glow-primary)]",
        ],
        solid: ["bg-[var(--color-bg-elevated)]", "text-[var(--color-text)]"],
      },
      clickable: {
        true: "cursor-pointer hover:scale-105 active:scale-95",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ChipProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRemove?: () => void;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      variant,
      clickable,
      leftIcon,
      rightIcon,
      children,
      onClick,
      onRemove,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          chipVariants({ variant, clickable: clickable || !!onClick }),
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {leftIcon && <span className="mr-1.5">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-1.5">{rightIcon}</span>}
        {onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-1.5 inline-flex items-center justify-center rounded-full hover:bg-[var(--color-bg-glass-hover)] p-0.5 transition-colors"
            aria-label="Remove"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
