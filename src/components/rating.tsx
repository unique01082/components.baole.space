import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "../utils";

export interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  readonly?: boolean;
  disabled?: boolean;
  allowHalf?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value = 0,
      onChange,
      max = 5,
      readonly = false,
      disabled = false,
      allowHalf = false,
      size = "md",
      className,
    },
    ref,
  ) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    };

    const handleClick = (index: number, isHalf: boolean) => {
      if (readonly || disabled) return;
      const newValue = isHalf ? index + 0.5 : index + 1;
      onChange?.(newValue);
    };

    const handleMouseEnter = (index: number, isHalf: boolean) => {
      if (readonly || disabled) return;
      const newValue = isHalf ? index + 0.5 : index + 1;
      setHoverValue(newValue);
    };

    const handleMouseLeave = () => {
      setHoverValue(null);
    };

    const displayValue = hoverValue ?? value;

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1",
          (readonly || disabled) && "pointer-events-none",
          disabled && "opacity-50",
          className,
        )}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: max }).map((_, index) => {
          const isFilled = index < Math.floor(displayValue);
          const isHalfFilled =
            allowHalf &&
            index === Math.floor(displayValue) &&
            displayValue % 1 !== 0;

          return (
            <div key={index} className="relative inline-flex cursor-pointer">
              {/* Half star support */}
              {allowHalf && (
                <div
                  className="absolute inset-0 w-1/2 z-10"
                  onClick={() => handleClick(index, true)}
                  onMouseEnter={() => handleMouseEnter(index, true)}
                />
              )}
              <div
                className="relative"
                onClick={() => handleClick(index, false)}
                onMouseEnter={() => handleMouseEnter(index, false)}
              >
                <Star
                  className={cn(
                    sizeClasses[size],
                    "transition-all",
                    isFilled || isHalfFilled
                      ? "fill-[var(--color-primary)] text-[var(--color-primary)]"
                      : "text-[var(--color-border-strong)]",
                  )}
                />
                {isHalfFilled && (
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star
                      className={cn(
                        sizeClasses[size],
                        "fill-[var(--color-primary)] text-[var(--color-primary)]",
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
Rating.displayName = "Rating";

export { Rating };
