import * as React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "./utils";

export interface StatisticProps {
  title: string;
  value: string | number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: string | number;
  valueClassName?: string;
  className?: string;
}

const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>(
  (
    {
      title,
      value,
      prefix,
      suffix,
      trend,
      trendValue,
      valueClassName,
      className,
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        <div className="text-sm text-[var(--color-text-muted)]">{title}</div>
        <div className="flex items-baseline gap-2">
          <div
            className={cn(
              "text-3xl font-bold text-[var(--color-text)]",
              valueClassName
            )}
          >
            {prefix && <span className="mr-1">{prefix}</span>}
            {value}
            {suffix && <span className="ml-1">{suffix}</span>}
          </div>
          {trend && (
            <div
              className={cn(
                "flex items-center text-sm font-medium",
                trend === "up"
                  ? "text-green-500"
                  : "text-red-500"
              )}
            >
              {trend === "up" ? (
                <ArrowUp className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 mr-1" />
              )}
              {trendValue}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Statistic.displayName = "Statistic";

export { Statistic };
