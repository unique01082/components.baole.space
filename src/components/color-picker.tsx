import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../utils";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  presetColors?: string[];
  showInput?: boolean;
  disabled?: boolean;
  className?: string;
}

const defaultPresetColors = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
  "#000000",
];

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value = "#000000",
      onChange,
      presetColors = defaultPresetColors,
      showInput = true,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(value);

    React.useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const handleChange = (color: string) => {
      setInternalValue(color);
      onChange?.(color);
    };

    return (
      <div ref={ref} className={cn("inline-block", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              disabled={disabled}
              className={cn(
                "h-10 w-10 rounded-md border-2 border-[var(--color-border)] transition-all",
                "hover:border-[var(--color-border-strong)]",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className,
              )}
              style={{ backgroundColor: internalValue }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-4">
              {showInput && (
                <div className="flex items-center gap-2">
                  <Input
                    value={internalValue}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="#000000"
                    className="flex-1"
                  />
                  <div
                    className="h-10 w-10 rounded-md border border-[var(--color-border)]"
                    style={{ backgroundColor: internalValue }}
                  />
                </div>
              )}

              <div className="grid grid-cols-6 gap-2">
                {presetColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={cn(
                      "h-8 w-8 rounded-md border border-[var(--color-border)] transition-all",
                      "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                      "flex items-center justify-center",
                    )}
                    style={{ backgroundColor: color }}
                    onClick={() => handleChange(color)}
                  >
                    {internalValue.toLowerCase() === color.toLowerCase() && (
                      <Check className="h-4 w-4 text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
