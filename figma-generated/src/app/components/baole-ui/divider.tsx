import * as React from "react";
import { cn } from "./utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "gradient";
  label?: string;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "default",
      label,
      ...props
    },
    ref
  ) => {
    if (label) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center gap-3 my-4",
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "flex-1 h-px",
              variant === "gradient"
                ? "bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"
                : "bg-[var(--color-border)]"
            )}
          />
          <span className="text-sm text-[var(--color-text-muted)]">{label}</span>
          <div
            className={cn(
              "flex-1 h-px",
              variant === "gradient"
                ? "bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"
                : "bg-[var(--color-border)]"
            )}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          orientation === "horizontal"
            ? "w-full h-px"
            : "h-full w-px",
          variant === "gradient"
            ? orientation === "horizontal"
              ? "bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"
              : "bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent"
            : "bg-[var(--color-border)]",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider };
