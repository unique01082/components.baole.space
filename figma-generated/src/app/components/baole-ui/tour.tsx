import * as React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

export interface TourStep {
  target: string | (() => HTMLElement | null);
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
  cover?: React.ReactNode;
}

export interface TourProps {
  steps: TourStep[];
  open?: boolean;
  current?: number;
  onClose?: () => void;
  onChange?: (current: number) => void;
  onFinish?: () => void;
  className?: string;
}

const Tour = React.forwardRef<HTMLDivElement, TourProps>(
  (
    {
      steps,
      open = false,
      current: controlledCurrent = 0,
      onClose,
      onChange,
      onFinish,
      className,
    },
    ref
  ) => {
    const [internalCurrent, setInternalCurrent] = React.useState(0);
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
    const [targetRect, setTargetRect] = React.useState<DOMRect | null>(null);

    const current = controlledCurrent ?? internalCurrent;
    const currentStep = steps[current];

    React.useEffect(() => {
      if (!open || !currentStep) return;

      const updatePosition = () => {
        const target =
          typeof currentStep.target === "string"
            ? document.querySelector(currentStep.target)
            : currentStep.target();

        if (!target) return;

        const rect = target.getBoundingClientRect();
        setTargetRect(rect);

        const placement = currentStep.placement || "bottom";
        let top = 0;
        let left = 0;

        switch (placement) {
          case "top":
            top = rect.top - 200;
            left = rect.left + rect.width / 2;
            break;
          case "bottom":
            top = rect.bottom + 10;
            left = rect.left + rect.width / 2;
            break;
          case "left":
            top = rect.top + rect.height / 2;
            left = rect.left - 320;
            break;
          case "right":
            top = rect.top + rect.height / 2;
            left = rect.right + 10;
            break;
        }

        setPosition({ top, left });

        // Highlight target
        target.classList.add("tour-target");
      };

      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition);

      return () => {
        window.removeEventListener("resize", updatePosition);
        window.removeEventListener("scroll", updatePosition);
        
        // Remove highlight
        const target =
          typeof currentStep.target === "string"
            ? document.querySelector(currentStep.target)
            : currentStep.target();
        target?.classList.remove("tour-target");
      };
    }, [open, current, currentStep]);

    if (!open || !currentStep) return null;

    const handlePrevious = () => {
      const newCurrent = Math.max(0, current - 1);
      setInternalCurrent(newCurrent);
      onChange?.(newCurrent);
    };

    const handleNext = () => {
      if (current === steps.length - 1) {
        onFinish?.();
        onClose?.();
      } else {
        const newCurrent = Math.min(steps.length - 1, current + 1);
        setInternalCurrent(newCurrent);
        onChange?.(newCurrent);
      }
    };

    return (
      <>
        {/* Overlay */}
        <div
          className="fixed inset-0 z-[9998]"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            pointerEvents: "none",
          }}
        />

        {/* Target highlight */}
        {targetRect && (
          <div
            className="fixed z-[9999] pointer-events-none"
            style={{
              top: targetRect.top - 4,
              left: targetRect.left - 4,
              width: targetRect.width + 8,
              height: targetRect.height + 8,
              border: "2px solid var(--color-primary)",
              borderRadius: "8px",
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
            }}
          />
        )}

        {/* Tour card */}
        <div
          ref={ref}
          className={cn(
            "fixed z-[10000] w-80 rounded-lg border border-[var(--color-border)]",
            "bg-[var(--color-bg-secondary)] backdrop-blur-[var(--blur-heavy)]",
            "shadow-[var(--shadow-elevated)]",
            "animate-in fade-in zoom-in-95",
            className
          )}
          style={{
            top: position.top,
            left: position.left,
            transform: "translateX(-50%)",
          }}
        >
          {currentStep.cover && (
            <div className="rounded-t-lg overflow-hidden">
              {currentStep.cover}
            </div>
          )}

          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {currentStep.title}
              </h3>
              <button
                onClick={onClose}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              {currentStep.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-xs text-[var(--color-text-muted)]">
                {current + 1} / {steps.length}
              </div>

              <div className="flex gap-2">
                {current > 0 && (
                  <Button variant="outline" size="sm" onClick={handlePrevious}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                )}
                <Button variant="gradient" size="sm" onClick={handleNext}>
                  {current === steps.length - 1 ? "Finish" : "Next"}
                  {current < steps.length - 1 && (
                    <ChevronRight className="h-4 w-4 ml-1" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .tour-target {
            position: relative;
            z-index: 9999;
          }
        `}</style>
      </>
    );
  }
);
Tour.displayName = "Tour";

export { Tour };
