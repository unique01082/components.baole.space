import * as React from "react";
import { cn } from "../utils";

export interface TimelineItem {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "error";
}

export interface TimelineProps {
  items: TimelineItem[];
  variant?: "default" | "gradient";
  className?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, variant = "default", className }, ref) => {
    const getColorClass = (color?: string) => {
      switch (color) {
        case "primary":
          return "border-[var(--color-primary)] bg-[var(--color-primary)]";
        case "success":
          return "border-green-500 bg-green-500";
        case "warning":
          return "border-yellow-500 bg-yellow-500";
        case "error":
          return "border-red-500 bg-red-500";
        default:
          return "border-[var(--color-border-strong)] bg-[var(--color-bg-glass)]";
      }
    };

    return (
      <div ref={ref} className={cn("relative", className)}>
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Timeline Line */}
            {index < items.length - 1 && (
              <div
                className={cn(
                  "absolute left-[19px] top-[32px] bottom-0 w-[2px]",
                  variant === "gradient"
                    ? "bg-gradient-to-b from-[var(--color-primary)] to-[#ec4899]"
                    : "bg-[var(--color-border)]",
                )}
              />
            )}

            {/* Timeline Dot */}
            <div className="relative z-10 flex shrink-0">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2",
                  getColorClass(item.color),
                  item.icon && "text-white",
                )}
              >
                {item.icon || (
                  <div className="h-3 w-3 rounded-full bg-current" />
                )}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold text-[var(--color-text)]">
                  {item.title}
                </h4>
                {item.timestamp && (
                  <time className="text-xs text-[var(--color-text-muted)]">
                    {item.timestamp}
                  </time>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  },
);
Timeline.displayName = "Timeline";

export { Timeline };
