import * as React from "react";
import { cn } from "./utils";

export interface ListItem {
  id: string;
  title: string;
  description?: string;
  avatar?: React.ReactNode;
  actions?: React.ReactNode;
  extra?: React.ReactNode;
}

export interface ListProps {
  items: ListItem[];
  bordered?: boolean;
  hoverable?: boolean;
  divided?: boolean;
  onItemClick?: (item: ListItem) => void;
  className?: string;
  itemClassName?: string;
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  (
    {
      items,
      bordered = false,
      hoverable = true,
      divided = true,
      onItemClick,
      className,
      itemClassName,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg",
          bordered && "border border-[var(--color-border)]",
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className={cn(
              "flex items-center gap-4 p-4",
              hoverable && "transition-colors hover:bg-[var(--color-bg-glass-hover)]",
              onItemClick && "cursor-pointer",
              divided && index < items.length - 1 && "border-b border-[var(--color-border)]",
              itemClassName
            )}
          >
            {/* Avatar */}
            {item.avatar && (
              <div className="shrink-0">{item.avatar}</div>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[var(--color-text)]">
                {item.title}
              </div>
              {item.description && (
                <div className="text-sm text-[var(--color-text-muted)] mt-1">
                  {item.description}
                </div>
              )}
            </div>

            {/* Extra Content */}
            {item.extra && (
              <div className="shrink-0 text-[var(--color-text-secondary)]">
                {item.extra}
              </div>
            )}

            {/* Actions */}
            {item.actions && (
              <div className="shrink-0 flex items-center gap-2">
                {item.actions}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
);
List.displayName = "List";

export { List };
export type { ListItem };
