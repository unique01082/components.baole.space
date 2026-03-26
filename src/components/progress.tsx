import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../utils";

export interface ProgressProps extends React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  label?: string;
  showValue?: boolean;
  variant?: "default" | "gradient";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { className, value = 0, label, showValue, variant = "default", ...props },
    ref,
  ) => {
    const progressValue = Math.min(Math.max(value ?? 0, 0), 100);

    return (
      <div className="w-full space-y-2">
        {(label || showValue) && (
          <div className="flex items-center justify-between">
            {label && (
              <span className="text-sm font-medium text-[var(--color-text)]">
                {label}
              </span>
            )}
            {showValue && (
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                {progressValue}%
              </span>
            )}
          </div>
        )}
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-input)] backdrop-blur-[var(--blur-glass)]",
            className,
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              "h-full w-full flex-1 transition-all duration-300 ease-out",
              variant === "gradient"
                ? "bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]"
                : "bg-[var(--color-primary)]",
            )}
            style={{ transform: `translateX(-${100 - progressValue}%)` }}
          />
        </ProgressPrimitive.Root>
      </div>
    );
  },
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
