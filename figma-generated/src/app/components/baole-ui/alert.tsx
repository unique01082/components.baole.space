import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import { cn } from "./utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 backdrop-blur-[var(--blur-glass)] transition-all duration-200",
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-bg-glass)] border-[var(--color-border)]",
          "text-[var(--color-text)]",
        ],
        info: [
          "bg-blue-500/10 border-blue-500/30",
          "text-blue-200",
          "[&>svg]:text-blue-400",
        ],
        success: [
          "bg-emerald-500/10 border-emerald-500/30",
          "text-emerald-200",
          "[&>svg]:text-emerald-400",
        ],
        warning: [
          "bg-amber-500/10 border-amber-500/30",
          "text-amber-200",
          "[&>svg]:text-amber-400",
        ],
        error: [
          "bg-red-500/10 border-red-500/30",
          "text-red-200",
          "[&>svg]:text-red-400",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "default",
      title,
      icon,
      dismissible,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    if (dismissed) return null;

    const Icon = iconMap[variant || "default"];
    const showIcon = icon !== null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-start gap-3">
          {showIcon && (
            <div className="mt-0.5 shrink-0">
              {icon || <Icon className="h-5 w-5" />}
            </div>
          )}
          <div className="flex-1 space-y-1">
            {title && (
              <h5 className="font-semibold leading-none tracking-tight">
                {title}
              </h5>
            )}
            {children && (
              <div className="text-sm opacity-90 [&_p]:leading-relaxed">
                {children}
              </div>
            )}
          </div>
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm opacity-90 [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
