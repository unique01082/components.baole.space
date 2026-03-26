import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../utils";

export interface Step {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "gradient";
  className?: string;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      currentStep,
      orientation = "horizontal",
      variant = "default",
      className,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col",
          className,
        )}
      >
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <React.Fragment key={index}>
              <div
                className={cn(
                  "flex items-center",
                  orientation === "vertical" ? "flex-row" : "flex-col",
                )}
              >
                {/* Step Circle */}
                <div
                  className={cn(
                    "flex items-center justify-center rounded-full border-2 transition-all",
                    "h-10 w-10 shrink-0",
                    isCompleted &&
                      variant === "gradient" &&
                      "bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899] border-transparent text-white",
                    isCompleted &&
                      variant === "default" &&
                      "bg-[var(--color-primary)] border-[var(--color-primary)] text-white",
                    isCurrent &&
                      "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-bg-glass)]",
                    isUpcoming &&
                      "border-[var(--color-border)] text-[var(--color-text-muted)] bg-transparent",
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : step.icon ? (
                    step.icon
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>

                {/* Step Content */}
                <div
                  className={cn(
                    "flex flex-col",
                    orientation === "horizontal"
                      ? "items-center mt-2"
                      : "items-start ml-4",
                  )}
                >
                  <div
                    className={cn(
                      "text-sm font-medium",
                      isCurrent && "text-[var(--color-text)]",
                      isCompleted && "text-[var(--color-text)]",
                      isUpcoming && "text-[var(--color-text-muted)]",
                    )}
                  >
                    {step.title}
                  </div>
                  {step.description && (
                    <div className="text-xs text-[var(--color-text-muted)] mt-1">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "transition-all",
                    orientation === "horizontal"
                      ? "h-[2px] flex-1 mx-2"
                      : "w-[2px] h-8 ml-5",
                    index < currentStep
                      ? variant === "gradient"
                        ? "bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]"
                        : "bg-[var(--color-primary)]"
                      : "bg-[var(--color-border)]",
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  },
);
Stepper.displayName = "Stepper";

export { Stepper };
