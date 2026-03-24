import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

export interface InputNumberProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  onChange?: (value: number | undefined) => void;
  formatter?: (value: number | undefined) => string;
  parser?: (displayValue: string) => number;
  controls?: boolean;
  disabled?: boolean;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      min = -Infinity,
      max = Infinity,
      step = 1,
      precision,
      onChange,
      formatter,
      parser,
      controls = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<number | undefined>(defaultValue);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const value = controlledValue ?? internalValue;

    const formatValue = (val: number | undefined): string => {
      if (val === undefined) return "";
      if (formatter) return formatter(val);
      if (precision !== undefined) return val.toFixed(precision);
      return String(val);
    };

    const parseValue = (displayValue: string): number | undefined => {
      if (!displayValue) return undefined;
      if (parser) return parser(displayValue);
      const parsed = parseFloat(displayValue);
      return isNaN(parsed) ? undefined : parsed;
    };

    const clampValue = (val: number | undefined): number | undefined => {
      if (val === undefined) return undefined;
      let clamped = Math.max(min, Math.min(max, val));
      if (precision !== undefined) {
        clamped = parseFloat(clamped.toFixed(precision));
      }
      return clamped;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseValue(e.target.value);
      const clamped = clampValue(parsed);
      setInternalValue(clamped);
      onChange?.(clamped);
    };

    const handleStep = (direction: "up" | "down") => {
      const currentValue = value ?? 0;
      const newValue = direction === "up" ? currentValue + step : currentValue - step;
      const clamped = clampValue(newValue);
      setInternalValue(clamped);
      onChange?.(clamped);
    };

    const canStepUp = value === undefined || value + step <= max;
    const canStepDown = value === undefined || value - step >= min;

    return (
      <div
        className={cn(
          "relative flex items-center",
          "rounded-md border border-[var(--color-border)]",
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "transition-colors",
          "focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <input
          ref={inputRef}
          type="text"
          value={formatValue(value)}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            "flex-1 bg-transparent px-3 py-2 text-sm",
            "text-[var(--color-text)] placeholder:text-[var(--color-text-placeholder)]",
            "focus:outline-none",
            controls && "pr-0"
          )}
          {...props}
        />

        {controls && (
          <div className="flex flex-col border-l border-[var(--color-border)]">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              disabled={disabled || !canStepUp}
              onClick={() => handleStep("up")}
              className="h-5 w-7 rounded-none rounded-tr-md border-b border-[var(--color-border)] hover:bg-[var(--color-bg-glass-hover)]"
            >
              <Plus className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              disabled={disabled || !canStepDown}
              onClick={() => handleStep("down")}
              className="h-5 w-7 rounded-none rounded-br-md hover:bg-[var(--color-bg-glass-hover)]"
            >
              <Minus className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    );
  }
);
InputNumber.displayName = "InputNumber";

export { InputNumber };
