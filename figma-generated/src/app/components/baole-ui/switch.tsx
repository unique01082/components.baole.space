import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "./utils";

export interface SwitchProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    "asChild"
  > {
  label?: string;
  description?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, label, description, id, ...props }, ref) => {
  const generatedId = React.useId();
  const switchId = id || generatedId;

  const switchElement = (
    <SwitchPrimitives.Root
      id={switchId}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
        "bg-[var(--color-bg-input)] backdrop-blur-[var(--blur-glass)]",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-[var(--color-primary)]",
        "data-[state=checked]:shadow-[var(--glow-primary)]",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0",
          "transition-transform duration-200",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  );

  if (label || description) {
    return (
      <div className="flex items-start gap-3">
        {switchElement}
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={switchId}
              className="text-sm font-medium text-[var(--color-text)] cursor-pointer select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-[var(--color-text-muted)]">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return switchElement;
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
