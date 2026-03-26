import * as React from "react";
import { Clock } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";

export interface TimePickerProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (time: Date | undefined) => void;
  format?: "12" | "24";
  minuteStep?: number;
  secondStep?: number;
  showSecond?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const TimePicker = React.forwardRef<HTMLButtonElement, TimePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      format = "24",
      minuteStep = 1,
      secondStep = 1,
      showSecond = false,
      disabled,
      placeholder = "Select time",
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<Date | undefined>(
      defaultValue,
    );
    const [open, setOpen] = React.useState(false);

    const value = controlledValue ?? internalValue;

    const hours =
      format === "12"
        ? Array.from({ length: 12 }, (_, i) => i + 1)
        : Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from(
      { length: 60 / minuteStep },
      (_, i) => i * minuteStep,
    );
    const seconds = Array.from(
      { length: 60 / secondStep },
      (_, i) => i * secondStep,
    );

    const getDisplayTime = (): string => {
      if (!value) return placeholder;

      let h = value.getHours();
      const m = value.getMinutes();
      const s = value.getSeconds();

      let period = "";
      if (format === "12") {
        period = h >= 12 ? " PM" : " AM";
        h = h % 12 || 12;
      }

      const timeStr = showSecond
        ? `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
        : `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

      return timeStr + period;
    };

    const handleTimeSelect = (
      type: "hour" | "minute" | "second",
      val: number,
    ) => {
      const newTime = value ? new Date(value) : new Date();

      if (type === "hour") {
        if (format === "12") {
          const isPM = newTime.getHours() >= 12;
          const hour24 = val === 12 ? (isPM ? 12 : 0) : val + (isPM ? 12 : 0);
          newTime.setHours(hour24);
        } else {
          newTime.setHours(val);
        }
      } else if (type === "minute") {
        newTime.setMinutes(val);
      } else if (type === "second") {
        newTime.setSeconds(val);
      }

      setInternalValue(newTime);
      onChange?.(newTime);
    };

    const handlePeriodToggle = () => {
      if (!value || format !== "12") return;

      const newTime = new Date(value);
      const currentHours = newTime.getHours();
      newTime.setHours((currentHours + 12) % 24);

      setInternalValue(newTime);
      onChange?.(newTime);
    };

    const getCurrentHour = (): number => {
      if (!value) return format === "12" ? 12 : 0;
      const h = value.getHours();
      return format === "12" ? h % 12 || 12 : h;
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-[var(--color-text-muted)]",
              className,
            )}
          >
            <Clock className="mr-2 h-4 w-4" />
            {getDisplayTime()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex">
            {/* Hours */}
            <ScrollArea className="h-64 w-20">
              <div className="p-1">
                {hours.map((hour) => (
                  <button
                    key={hour}
                    onClick={() => handleTimeSelect("hour", hour)}
                    className={cn(
                      "w-full px-3 py-2 text-sm rounded-md transition-colors text-center",
                      getCurrentHour() === hour
                        ? "bg-[var(--color-primary)] text-white"
                        : "hover:bg-[var(--color-bg-glass-hover)]",
                    )}
                  >
                    {String(hour).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </ScrollArea>

            {/* Minutes */}
            <ScrollArea className="h-64 w-20 border-l border-[var(--color-border)]">
              <div className="p-1">
                {minutes.map((minute) => (
                  <button
                    key={minute}
                    onClick={() => handleTimeSelect("minute", minute)}
                    className={cn(
                      "w-full px-3 py-2 text-sm rounded-md transition-colors text-center",
                      value?.getMinutes() === minute
                        ? "bg-[var(--color-primary)] text-white"
                        : "hover:bg-[var(--color-bg-glass-hover)]",
                    )}
                  >
                    {String(minute).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </ScrollArea>

            {/* Seconds */}
            {showSecond && (
              <ScrollArea className="h-64 w-20 border-l border-[var(--color-border)]">
                <div className="p-1">
                  {seconds.map((second) => (
                    <button
                      key={second}
                      onClick={() => handleTimeSelect("second", second)}
                      className={cn(
                        "w-full px-3 py-2 text-sm rounded-md transition-colors text-center",
                        value?.getSeconds() === second
                          ? "bg-[var(--color-primary)] text-white"
                          : "hover:bg-[var(--color-bg-glass-hover)]",
                      )}
                    >
                      {String(second).padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            )}

            {/* AM/PM Toggle */}
            {format === "12" && (
              <div className="flex flex-col border-l border-[var(--color-border)] p-1">
                <button
                  onClick={handlePeriodToggle}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    value && value.getHours() < 12
                      ? "bg-[var(--color-primary)] text-white"
                      : "hover:bg-[var(--color-bg-glass-hover)]",
                  )}
                >
                  AM
                </button>
                <button
                  onClick={handlePeriodToggle}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors mt-1",
                    value && value.getHours() >= 12
                      ? "bg-[var(--color-primary)] text-white"
                      : "hover:bg-[var(--color-bg-glass-hover)]",
                  )}
                >
                  PM
                </button>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);
TimePicker.displayName = "TimePicker";

export { TimePicker };
