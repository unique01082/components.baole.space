import * as React from "react";
import { X, CheckCircle2, XCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "../utils";

export interface NotificationProps {
  id: string;
  type?: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  ({ id, type = "info", title, description, onClose }, ref) => {
    const icons = {
      success: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      error: <XCircle className="h-5 w-5 text-red-500" />,
      warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
      info: <Info className="h-5 w-5 text-[var(--color-primary)]" />,
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-3 p-4 rounded-lg border border-[var(--color-border)]",
          "bg-[var(--color-bg-secondary)] backdrop-blur-[var(--blur-heavy)]",
          "shadow-[var(--shadow-elevated)]",
          "animate-in slide-in-from-right-full",
        )}
      >
        <div className="shrink-0">{icons[type]}</div>
        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold text-[var(--color-text)]">
            {title}
          </div>
          {description && (
            <div className="text-sm text-[var(--color-text-secondary)]">
              {description}
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  },
);
Notification.displayName = "Notification";

// Notification Manager
type NotificationManagerProps = {
  notifications: NotificationProps[];
  onRemove: (id: string) => void;
};

export const NotificationManager: React.FC<NotificationManagerProps> = ({
  notifications,
  onRemove,
}) => {
  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 max-w-md">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => onRemove(notification.id)}
        />
      ))}
    </div>
  );
};

export { Notification };
