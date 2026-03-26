import * as React from "react";
import { cn } from "../utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center py-12 px-4 text-center",
          className,
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 text-[var(--color-text-muted)] opacity-50">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[var(--color-text-muted)] max-w-sm mb-6">
            {description}
          </p>
        )}
        {action && <div>{action}</div>}
      </div>
    );
  },
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
