import * as React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "../utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";

export interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
}

export interface CascaderProps {
  options: CascaderOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
  changeOnSelect?: boolean;
  className?: string;
}

const Cascader = React.forwardRef<HTMLDivElement, CascaderProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = [],
      onChange,
      placeholder = "Please select",
      disabled,
      changeOnSelect = false,
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] =
      React.useState<string[]>(defaultValue);
    const [open, setOpen] = React.useState(false);
    const [activeMenus, setActiveMenus] = React.useState<CascaderOption[][]>([
      options,
    ]);

    const value = controlledValue ?? internalValue;

    const getSelectedOptions = (vals: string[]): CascaderOption[] => {
      const result: CascaderOption[] = [];
      let currentOptions = options;

      for (const val of vals) {
        const option = currentOptions.find((opt) => opt.value === val);
        if (!option) break;
        result.push(option);
        currentOptions = option.children || [];
      }

      return result;
    };

    const handleSelect = (option: CascaderOption, level: number) => {
      if (option.disabled) return;

      const newValue = [...value.slice(0, level), option.value];

      if (option.children && option.children.length > 0) {
        setActiveMenus([...activeMenus.slice(0, level + 1), option.children]);

        if (changeOnSelect) {
          setInternalValue(newValue);
          onChange?.(newValue, getSelectedOptions(newValue));
        }
      } else {
        setInternalValue(newValue);
        onChange?.(newValue, getSelectedOptions(newValue));
        setOpen(false);
        setActiveMenus([options]);
      }
    };

    const displayLabel = React.useMemo(() => {
      const selectedOptions = getSelectedOptions(value);
      return selectedOptions.length > 0
        ? selectedOptions.map((opt) => opt.label).join(" / ")
        : placeholder;
    }, [value, options, placeholder]);

    return (
      <div ref={ref} className={cn("", className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              disabled={disabled}
              className={cn(
                "w-full justify-between",
                !value.length && "text-[var(--color-text-muted)]",
              )}
            >
              <span className="truncate">{displayLabel}</span>
              <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="flex">
              {activeMenus.map((menu, level) => (
                <div
                  key={level}
                  className={cn(
                    "w-40 max-h-64 overflow-y-auto",
                    level > 0 && "border-l border-[var(--color-border)]",
                  )}
                >
                  {menu.map((option) => {
                    const isSelected = value[level] === option.value;
                    const hasChildren =
                      option.children && option.children.length > 0;

                    return (
                      <div
                        key={option.value}
                        onClick={() => handleSelect(option, level)}
                        className={cn(
                          "flex items-center justify-between px-3 py-2 cursor-pointer transition-colors text-sm",
                          isSelected
                            ? "bg-[var(--color-bg-glass)] text-[var(--color-primary)]"
                            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-glass-hover)] hover:text-[var(--color-text)]",
                          option.disabled && "opacity-50 cursor-not-allowed",
                        )}
                      >
                        <span className="truncate">{option.label}</span>
                        {hasChildren && (
                          <ChevronRight className="h-4 w-4 shrink-0 ml-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
Cascader.displayName = "Cascader";

export { Cascader };
