import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-medium transition-all",
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "border border-[var(--color-border)]",
          "text-[var(--color-text)]",
        ],
        solid: [
          "bg-[var(--color-bg-elevated)]",
          "text-[var(--color-text)]",
        ],
        gradient: [
          "bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]",
          "text-white shadow-[var(--glow-primary)]",
        ],
        success: [
          "bg-green-500/20 border border-green-500/50",
          "text-green-500",
        ],
        warning: [
          "bg-yellow-500/20 border border-yellow-500/50",
          "text-yellow-500",
        ],
        error: [
          "bg-red-500/20 border border-red-500/50",
          "text-red-500",
        ],
        info: [
          "bg-blue-500/20 border border-blue-500/50",
          "text-blue-500",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      closable,
      onClose,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant }), className)}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {closable && (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 hover:opacity-70 transition-opacity"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </span>
    );
  }
);
Tag.displayName = "Tag";

export { Tag, tagVariants };
