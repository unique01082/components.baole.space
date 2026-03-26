import * as React from "react";
import { cn } from "../utils";

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  block?: boolean;
  language?: string;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, block, language, children, ...props }, ref) => {
    if (block) {
      return (
        <pre
          className={cn(
            "relative rounded-lg border border-[var(--color-border)] p-4",
            "bg-[var(--color-bg-elevated)] backdrop-blur-[var(--blur-glass)]",
            "overflow-x-auto",
            className,
          )}
        >
          {language && (
            <span className="absolute top-2 right-2 text-xs text-[var(--color-text-muted)]">
              {language}
            </span>
          )}
          <code
            ref={ref}
            className="text-sm text-[var(--color-text)] font-mono"
            {...props}
          >
            {children}
          </code>
        </pre>
      );
    }

    return (
      <code
        ref={ref}
        className={cn(
          "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
          "bg-[var(--color-bg-glass)] border border-[var(--color-border)]",
          "text-[var(--color-text)]",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
);
Code.displayName = "Code";

export { Code };
