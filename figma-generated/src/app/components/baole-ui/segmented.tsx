import * as React from "react";
import { cn } from "./utils";

export interface SegmentedOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  disabled?: boolean;
  className?: string;
}

const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      size = "md",
      block = false,
      disabled = false,
      className,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue || options[0]?.value || ""
    );

    const value = controlledValue ?? internalValue;

    const handleChange = (newValue: string) => {
      if (disabled) return;
      
      const option = options.find((opt) => opt.value === newValue);
      if (option?.disabled) return;

      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const sizeClasses = {
      sm: "h-7 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 p-1 rounded-lg",
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "border border-[var(--color-border)]",
          block && "flex w-full",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <button
              key={option.value}
              type="button"
              disabled={isDisabled}
              onClick={() => handleChange(option.value)}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-3 rounded-md font-medium transition-all",
                sizeClasses[size],
                block && "flex-1",
                isActive && [
                  "bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]",
                  "text-white shadow-[var(--glow-primary)]",
                ],
                !isActive && [
                  "text-[var(--color-text-secondary)]",
                  "hover:text-[var(--color-text)]",
                  "hover:bg-[var(--color-bg-glass-hover)]",
                ],
                isDisabled && "cursor-not-allowed opacity-50"
              )}
            >
              {option.icon && (
                <span className="shrink-0">{option.icon}</span>
              )}
              {option.label}
            </button>
          );
        })}
      </div>
    );
  }
);
Segmented.displayName = "Segmented";

export { Segmented };
