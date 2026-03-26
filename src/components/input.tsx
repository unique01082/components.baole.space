import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, Loader2 } from "lucide-react";
import { cn } from "../utils";

const inputVariants = cva(
  "w-full rounded-lg border bg-[var(--color-bg-input)] text-white placeholder:text-[var(--color-text-placeholder)] transition-all duration-200 outline-none",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
      status: {
        default:
          "border-white/10 focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/20",
        error:
          "border-red-400/70 focus:border-red-400/70 focus:ring-2 focus:ring-red-400/20",
        warning:
          "border-amber-400/70 focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20",
        success:
          "border-emerald-400/70 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/20",
      },
    },
    defaultVariants: {
      size: "md",
      status: "default",
    },
  },
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
    VariantProps<typeof inputVariants> {
  label?: string;
  hint?: string;
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  loading?: boolean;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      size,
      status: statusProp,
      label,
      hint,
      error,
      prefix,
      suffix,
      leftIcon,
      rightIcon,
      clearable = false,
      onClear,
      loading = false,
      wrapperClassName,
      value,
      ...props
    },
    ref,
  ) => {
    const status = error ? "error" : statusProp || "default";
    const showClear = clearable && value && !loading;

    const input = (
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-white/40 pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ size, status }),
            leftIcon && "pl-9",
            (rightIcon || loading || showClear) && "pr-9",
            className,
          )}
          ref={ref}
          value={value}
          data-slot="input"
          {...props}
        />
        {loading && (
          <div className="absolute right-3 text-white/40">
            <Loader2 size={16} className="animate-spin" />
          </div>
        )}
        {!loading && showClear && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onClear?.();
            }}
            className="absolute right-3 text-white/40 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        )}
        {!loading && !showClear && rightIcon && (
          <div className="absolute right-3 text-white/40 pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
    );

    if (label || hint || error || prefix || suffix) {
      return (
        <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
          {label && (
            <label className="text-sm font-medium text-white/80">{label}</label>
          )}
          {prefix || suffix ? (
            <div className="flex items-center gap-2">
              {prefix && (
                <span className="text-sm text-white/60 whitespace-nowrap">
                  {prefix}
                </span>
              )}
              {input}
              {suffix && (
                <span className="text-sm text-white/60 whitespace-nowrap">
                  {suffix}
                </span>
              )}
            </div>
          ) : (
            input
          )}
          {(hint || error) && (
            <p
              className={cn(
                "text-xs",
                error ? "text-rose-400" : "text-white/50",
              )}
            >
              {error || hint}
            </p>
          )}
        </div>
      );
    }

    return input;
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
