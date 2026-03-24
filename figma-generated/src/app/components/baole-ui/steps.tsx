import * as React from "react";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const stepsVariants = cva("flex w-full", {
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    direction: "horizontal",
    size: "md",
  },
});

export interface StepItem {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  subTitle?: string;
}

export interface StepsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepsVariants> {
  current?: number;
  status?: "wait" | "process" | "finish" | "error";
  items: StepItem[];
  onChange?: (current: number) => void;
  type?: "default" | "navigation" | "inline";
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      className,
      direction = "horizontal",
      size = "md",
      current = 0,
      status = "process",
      items,
      onChange,
      type = "default",
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      sm: { circle: "h-6 w-6 text-xs", title: "text-xs", description: "text-xs" },
      md: { circle: "h-8 w-8 text-sm", title: "text-sm", description: "text-xs" },
      lg: { circle: "h-10 w-10 text-base", title: "text-base", description: "text-sm" },
    };

    const sizes = sizeMap[size];

    const getStepStatus = (index: number): "wait" | "process" | "finish" | "error" => {
      if (index < current) return "finish";
      if (index === current) return status;
      return "wait";
    };

    const renderStepIcon = (index: number, item: StepItem) => {
      const stepStatus = getStepStatus(index);

      const iconClasses = cn(
        "flex items-center justify-center rounded-full border-2 transition-all",
        sizes.circle,
        stepStatus === "finish" && [
          "bg-[var(--color-primary)] border-[var(--color-primary)] text-white",
        ],
        stepStatus === "process" && [
          "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-bg-glass)]",
        ],
        stepStatus === "error" && [
          "bg-red-500 border-red-500 text-white",
        ],
        stepStatus === "wait" && [
          "border-[var(--color-border)] text-[var(--color-text-muted)] bg-transparent",
        ]
      );

      return (
        <div className={iconClasses}>
          {stepStatus === "finish" ? (
            <Check className="h-4 w-4" />
          ) : item.icon ? (
            item.icon
          ) : (
            <span className="font-semibold">{index + 1}</span>
          )}
        </div>
      );
    };

    const renderStep = (item: StepItem, index: number) => {
      const stepStatus = getStepStatus(index);
      const isLast = index === items.length - 1;
      const isClickable = onChange && index < items.length;

      return (
        <div
          key={index}
          className={cn(
            "flex flex-1",
            direction === "horizontal" ? "flex-col items-center" : "flex-row",
            isClickable && "cursor-pointer"
          )}
          onClick={() => isClickable && onChange(index)}
        >
          <div
            className={cn(
              "flex items-center",
              direction === "horizontal" ? "flex-col" : "flex-row gap-3"
            )}
          >
            {/* Icon */}
            <div className="relative">
              {renderStepIcon(index, item)}
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex flex-col",
                direction === "horizontal" ? "items-center mt-2 text-center" : "items-start flex-1"
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "font-medium",
                    sizes.title,
                    stepStatus === "process" && "text-[var(--color-text)]",
                    stepStatus === "finish" && "text-[var(--color-text)]",
                    stepStatus === "wait" && "text-[var(--color-text-muted)]",
                    stepStatus === "error" && "text-red-500"
                  )}
                >
                  {item.title}
                </span>
                {item.subTitle && (
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {item.subTitle}
                  </span>
                )}
              </div>
              {item.description && (
                <span
                  className={cn(
                    "text-[var(--color-text-muted)] mt-1",
                    sizes.description
                  )}
                >
                  {item.description}
                </span>
              )}
            </div>
          </div>

          {/* Connector */}
          {!isLast && (
            <div
              className={cn(
                "transition-all",
                direction === "horizontal"
                  ? "h-[2px] flex-1 mx-4 mt-4"
                  : "w-[2px] h-8 ml-4 my-2",
                index < current
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-border)]"
              )}
            />
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(stepsVariants({ direction }), className)}
        {...props}
      >
        {items.map((item, index) => renderStep(item, index))}
      </div>
    );
  }
);
Steps.displayName = "Steps";

export { Steps, stepsVariants };
