import * as React from "react";
import { cn } from "../utils";

export interface DescriptionItem {
  label: string;
  content: React.ReactNode;
  span?: number;
}

export interface DescriptionsProps {
  title?: string;
  items: DescriptionItem[];
  columns?: 1 | 2 | 3 | 4;
  bordered?: boolean;
  layout?: "horizontal" | "vertical";
  className?: string;
}

const Descriptions = React.forwardRef<HTMLDivElement, DescriptionsProps>(
  (
    {
      title,
      items,
      columns = 3,
      bordered = false,
      layout = "horizontal",
      className,
    },
    ref,
  ) => {
    const gridCols = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    };

    if (bordered) {
      return (
        <div ref={ref} className={cn("rounded-lg overflow-hidden", className)}>
          {title && (
            <div className="px-4 py-3 bg-[var(--color-bg-glass)] border border-[var(--color-border)] font-semibold text-[var(--color-text)]">
              {title}
            </div>
          )}
          <div className="border border-[var(--color-border)] border-t-0">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "grid",
                  layout === "horizontal"
                    ? "grid-cols-[200px_1fr]"
                    : "grid-cols-1",
                )}
              >
                <div className="px-4 py-3 bg-[var(--color-bg-glass)]/50 border-b border-r border-[var(--color-border)] text-sm font-medium text-[var(--color-text)]">
                  {item.label}
                </div>
                <div className="px-4 py-3 border-b border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("", className)}>
        {title && (
          <div className="mb-4 text-lg font-semibold text-[var(--color-text)]">
            {title}
          </div>
        )}
        <div className={cn("grid gap-4", gridCols[columns])}>
          {items.map((item, index) => (
            <div
              key={index}
              className={cn("space-y-1", item.span && `col-span-${item.span}`)}
            >
              <div className="text-sm font-medium text-[var(--color-text-muted)]">
                {item.label}
              </div>
              <div className="text-sm text-[var(--color-text)]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
Descriptions.displayName = "Descriptions";

export { Descriptions };
