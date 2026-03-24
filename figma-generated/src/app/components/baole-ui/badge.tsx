import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/baole-utils";

const badgeVariants = cva(
  "inline-flex items-center font-medium transition-colors border",
  {
    variants: {
      variant: {
        default: "bg-white/5 border-white/10 text-white/90",
        gradient:
          "bg-gradient-to-r from-purple-500 to-fuchsia-500 border-purple-400/30 text-white",
        outline: "bg-transparent border-white/10 text-white/80",
        success: "bg-emerald-500/10 border-emerald-400/30 text-emerald-100",
        warning: "bg-amber-500/10 border-amber-400/30 text-amber-100",
        destructive: "bg-rose-500/10 border-rose-400/30 text-rose-100",
        info: "bg-blue-500/10 border-blue-400/30 text-blue-100",
        secondary: "bg-white/8 border-white/10 text-white/70",
      },
      size: {
        sm: "text-xs px-1.5 py-0.5 gap-0.5 rounded-md",
        md: "text-xs px-2 py-1 gap-1 rounded-md",
        lg: "text-sm px-2.5 py-1 gap-1 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      dot = false,
      removable = false,
      onRemove,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        data-slot="badge"
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "size-1.5 rounded-full",
              variant === "success" && "bg-emerald-400",
              variant === "warning" && "bg-amber-400",
              variant === "destructive" && "bg-rose-400",
              variant === "info" && "bg-blue-400",
              variant === "gradient" && "bg-white",
              (!variant || variant === "default" || variant === "outline" || variant === "secondary") &&
                "bg-white/50"
            )}
          />
        )}
        {children}
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="ml-0.5 hover:text-white transition-colors"
          >
            <X size={12} />
          </button>
        )}
      </Comp>
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
