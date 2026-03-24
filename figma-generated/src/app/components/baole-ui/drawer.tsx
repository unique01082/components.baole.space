import * as React from "react";
import { X } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

export interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: "left" | "right" | "top" | "bottom";
  width?: string | number;
  height?: string | number;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  className?: string;
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open = false,
      onOpenChange,
      placement = "right",
      width = 378,
      height = 378,
      title,
      children,
      footer,
      closable = true,
      mask = true,
      maskClosable = true,
      className,
    },
    ref
  ) => {
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    const handleMaskClick = () => {
      if (maskClosable) {
        onOpenChange?.(false);
      }
    };

    const handleClose = () => {
      onOpenChange?.(false);
    };

    if (!open) return null;

    const placementStyles = {
      left: {
        left: 0,
        top: 0,
        bottom: 0,
        width: typeof width === "number" ? `${width}px` : width,
        transform: open ? "translateX(0)" : "translateX(-100%)",
      },
      right: {
        right: 0,
        top: 0,
        bottom: 0,
        width: typeof width === "number" ? `${width}px` : width,
        transform: open ? "translateX(0)" : "translateX(100%)",
      },
      top: {
        left: 0,
        top: 0,
        right: 0,
        height: typeof height === "number" ? `${height}px` : height,
        transform: open ? "translateY(0)" : "translateY(-100%)",
      },
      bottom: {
        left: 0,
        bottom: 0,
        right: 0,
        height: typeof height === "number" ? `${height}px` : height,
        transform: open ? "translateY(0)" : "translateY(100%)",
      },
    };

    return (
      <>
        {/* Mask */}
        {mask && (
          <div
            className={cn(
              "fixed inset-0 z-50 bg-[var(--color-bg-overlay)] backdrop-blur-sm",
              "animate-in fade-in"
            )}
            onClick={handleMaskClick}
          />
        )}

        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed z-50 flex flex-col",
            "bg-[var(--color-bg-secondary)] backdrop-blur-[var(--blur-heavy)]",
            "border-[var(--color-border)] shadow-[var(--shadow-elevated)]",
            placement === "left" && "border-r",
            placement === "right" && "border-l",
            placement === "top" && "border-b",
            placement === "bottom" && "border-t",
            "transition-transform duration-300",
            className
          )}
          style={placementStyles[placement]}
        >
          {/* Header */}
          {(title || closable) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
              {title && (
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {title}
                </h3>
              )}
              {closable && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="ml-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="px-6 py-4 border-t border-[var(--color-border)]">
              {footer}
            </div>
          )}
        </div>
      </>
    );
  }
);
Drawer.displayName = "Drawer";

export { Drawer };
