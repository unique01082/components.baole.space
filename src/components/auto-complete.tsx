import * as React from "react";
import { cn } from "../utils";
import { Input } from "./input";

export interface AutoCompleteOption {
  value: string;
  label: string;
}

export interface AutoCompleteProps {
  options: AutoCompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (value: string, option: AutoCompleteOption) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const AutoComplete = React.forwardRef<HTMLInputElement, AutoCompleteProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = "",
      onChange,
      onSelect,
      placeholder,
      disabled,
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const value = controlledValue ?? internalValue;

    const filteredOptions = React.useMemo(() => {
      if (!value) return options;
      return options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase()),
      );
    }, [options, value]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (newValue: string) => {
      setInternalValue(newValue);
      onChange?.(newValue);
      setOpen(true);
      setActiveIndex(0);
    };

    const handleSelect = (option: AutoCompleteOption) => {
      setInternalValue(option.value);
      onChange?.(option.value);
      onSelect?.(option.value, option);
      setOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!open || filteredOptions.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredOptions[activeIndex]) {
            handleSelect(filteredOptions[activeIndex]);
          }
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    };

    return (
      <div ref={containerRef} className={cn("relative", className)}>
        <Input
          ref={ref}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
        />

        {open && filteredOptions.length > 0 && (
          <div
            className={cn(
              "absolute z-50 w-full mt-1 max-h-60 overflow-auto rounded-lg border border-[var(--color-border)]",
              "bg-[var(--color-popover)] backdrop-blur-[var(--blur-glass)]",
              "shadow-[var(--shadow-glass)]",
              "animate-in fade-in-0 zoom-in-95",
            )}
          >
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cn(
                  "px-3 py-2 cursor-pointer transition-colors text-sm",
                  index === activeIndex
                    ? "bg-[var(--color-bg-glass-hover)] text-[var(--color-text)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-glass-hover)] hover:text-[var(--color-text)]",
                )}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
AutoComplete.displayName = "AutoComplete";

export { AutoComplete };
