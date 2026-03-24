import * as React from "react";
import { cn } from "./utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  status?: "default" | "error" | "success" | "warning";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      hint,
      status = "default",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    const hasError = status === "error" || !!error;

    const statusStyles = {
      default: "border-[var(--color-border)] focus:border-[var(--color-border-focus)]",
      error: "border-[var(--color-border-error)] focus:border-[var(--color-border-error)]",
      success: "border-[var(--color-border-success)] focus:border-[var(--color-border-success)]",
      warning: "border-[var(--color-border-warning)] focus:border-[var(--color-border-warning)]",
    };

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[var(--color-text)]"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-lg border px-4 py-3",
            "bg-[var(--color-bg-input)] backdrop-blur-[var(--blur-glass)]",
            "text-[var(--color-text)] placeholder:text-[var(--color-text-placeholder)]",
            "transition-all duration-200",
            "hover:bg-[var(--color-bg-input-hover)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-y",
            statusStyles[hasError ? "error" : status],
            className
          )}
          ref={ref}
          disabled={disabled}
          aria-invalid={hasError ? "true" : "false"}
          aria-describedby={
            error ? errorId : hint ? hintId : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={errorId}
            className="text-sm text-[var(--color-destructive)]"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="text-sm text-[var(--color-text-muted)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
