import * as React from "react";
import { CheckCircle2, XCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "../utils";

export interface ResultProps {
  status?: "success" | "error" | "warning" | "info";
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
}

const Result = React.forwardRef<HTMLDivElement, ResultProps>(
  ({ status = "info", title, subtitle, icon, extra, className }, ref) => {
    const defaultIcons = {
      success: <CheckCircle2 className="h-16 w-16 text-green-500" />,
      error: <XCircle className="h-16 w-16 text-red-500" />,
      warning: <AlertCircle className="h-16 w-16 text-yellow-500" />,
      info: <Info className="h-16 w-16 text-[var(--color-primary)]" />,
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center py-12 px-4",
          className,
        )}
      >
        <div className="mb-6">{icon || defaultIcons[status]}</div>
        <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[var(--color-text-secondary)] max-w-md mb-6">
            {subtitle}
          </p>
        )}
        {extra && <div className="flex gap-3">{extra}</div>}
      </div>
    );
  },
);
Result.displayName = "Result";

export { Result };
