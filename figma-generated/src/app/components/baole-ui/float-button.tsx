import * as React from "react";
import { Plus, X } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

export interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  description?: string;
  tooltip?: string;
  shape?: "circle" | "square";
  type?: "default" | "primary";
  badge?: {
    count?: number;
    dot?: boolean;
  };
}

const FloatButton = React.forwardRef<HTMLButtonElement, FloatButtonProps>(
  (
    {
      className,
      icon,
      description,
      tooltip,
      shape = "circle",
      type = "default",
      badge,
      ...props
    },
    ref
  ) => {
    const button = (
      <Button
        ref={ref}
        variant={type === "primary" ? "gradient" : "outline"}
        size="icon"
        className={cn(
          "relative h-12 w-12 shadow-[var(--shadow-elevated)]",
          shape === "circle" && "rounded-full",
          shape === "square" && "rounded-lg",
          description && "h-auto w-auto px-4 py-3 flex-col gap-1",
          className
        )}
        {...props}
      >
        {icon}
        {description && (
          <span className="text-xs whitespace-nowrap">{description}</span>
        )}
        {badge && (badge.dot || (badge.count && badge.count > 0)) && (
          <span
            className={cn(
              "absolute -top-1 -right-1 flex items-center justify-center",
              "bg-red-500 text-white text-xs font-medium",
              badge.dot ? "h-2 w-2 rounded-full" : "h-5 min-w-[20px] px-1 rounded-full"
            )}
          >
            {!badge.dot && badge.count && (badge.count > 99 ? "99+" : badge.count)}
          </span>
        )}
      </Button>
    );

    if (tooltip) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side="left">{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return button;
  }
);
FloatButton.displayName = "FloatButton";

export interface FloatButtonGroupProps {
  trigger?: "click" | "hover";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const FloatButtonGroup = React.forwardRef<HTMLDivElement, FloatButtonGroupProps>(
  (
    {
      trigger = "click",
      open: controlledOpen,
      onOpenChange,
      icon = <Plus className="h-5 w-5" />,
      children,
      className,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const open = controlledOpen ?? internalOpen;

    const handleToggle = () => {
      const newOpen = !open;
      setInternalOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    const handleMouseEnter = () => {
      if (trigger === "hover") {
        setInternalOpen(true);
        onOpenChange?.(true);
      }
    };

    const handleMouseLeave = () => {
      if (trigger === "hover") {
        setInternalOpen(false);
        onOpenChange?.(false);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex flex-col-reverse items-center gap-3", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Children buttons */}
        {open && (
          <div className="flex flex-col-reverse items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
            {children}
          </div>
        )}

        {/* Trigger button */}
        <FloatButton
          icon={open ? <X className="h-5 w-5" /> : icon}
          type="primary"
          onClick={trigger === "click" ? handleToggle : undefined}
          className={cn("transition-transform", open && "rotate-45")}
        />
      </div>
    );
  }
);
FloatButtonGroup.displayName = "FloatButtonGroup";

export { FloatButton, FloatButtonGroup };
