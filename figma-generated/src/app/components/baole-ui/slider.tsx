import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "./utils";

export interface SliderProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    "asChild"
  > {
  label?: string;
  showValue?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, showValue, ...props }, ref) => {
  const value = props.value || props.defaultValue || [0];
  const displayValue = Array.isArray(value) ? value[0] : value;

  return (
    <div className="w-full space-y-3">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <label className="text-sm font-medium text-[var(--color-text)]">
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              {displayValue}
            </span>
          )}
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[var(--color-bg-input)] backdrop-blur-[var(--blur-glass)]">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[var(--color-primary)] bg-white shadow-lg transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    </div>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
