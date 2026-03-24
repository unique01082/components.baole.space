import * as React from "react";
import { cn } from "../../lib/baole-utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rect" | "circle" | "text" | "card";
  lines?: number;
  animated?: boolean;
  width?: string | number;
  height?: string | number;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "rect",
      lines = 3,
      animated = true,
      width,
      height,
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "bg-white/8 rounded-md",
      animated && "animate-pulse animate-shimmer"
    );

    if (variant === "text" && lines > 1) {
      return (
        <div className={cn("space-y-2", className)} ref={ref} {...props}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={baseStyles}
              style={{
                height: "0.75rem",
                width: i === lines - 1 ? "80%" : "100%",
              }}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variant === "circle" && "rounded-full",
          variant === "card" && "h-32 w-full",
          className
        )}
        style={{
          width,
          height: variant === "text" ? "0.75rem" : height,
          ...style,
        }}
        data-slot="skeleton"
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
