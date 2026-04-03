import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./button";

export interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string | number;
  centered?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  className?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      onOpenChange,
      title,
      children,
      footer,
      width = 520,
      centered = true,
      closable = true,
      maskClosable = true,
      className,
    },
    ref,
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

    return (
      <>
        {/* Mask */}
        <div
          role="presentation"
          className={cn(
            "fixed inset-0 z-50 bg-[var(--color-bg-overlay)] backdrop-blur-sm",
            "animate-in fade-in",
          )}
          onClick={handleMaskClick}
        />

        {/* Modal */}
        <div
          className={cn(
            "fixed z-50",
            centered
              ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              : "left-1/2 top-[100px] -translate-x-1/2",
            "animate-in fade-in zoom-in-95",
          )}
        >
          <div
            ref={ref}
            className={cn(
              "flex flex-col rounded-xl border border-[var(--color-border)]",
              "bg-[var(--color-bg-secondary)] backdrop-blur-[var(--blur-heavy)]",
              "shadow-[var(--shadow-elevated)]",
              className,
            )}
            style={{ width: typeof width === "number" ? `${width}px` : width }}
            onClick={(e) => e.stopPropagation()}
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
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[var(--color-border)]">
                {footer}
              </div>
            )}
          </div>
        </div>
      </>
    );
  },
);
Modal.displayName = "Modal";

export { Modal };
