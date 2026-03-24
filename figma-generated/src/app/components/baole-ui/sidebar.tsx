import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  width?: number;
  collapsedWidth?: number;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      collapsible = false,
      defaultCollapsed = false,
      collapsed: controlledCollapsed,
      onCollapsedChange,
      width = 256,
      collapsedWidth = 64,
      children,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed);
    const collapsed = controlledCollapsed ?? internalCollapsed;

    const handleToggle = () => {
      const newCollapsed = !collapsed;
      setInternalCollapsed(newCollapsed);
      onCollapsedChange?.(newCollapsed);
    };

    return (
      <aside
        ref={ref}
        className={cn(
          "relative flex flex-col",
          "border-r border-[var(--color-border)]",
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "transition-all duration-300",
          className
        )}
        style={{
          width: collapsed ? collapsedWidth : width,
        }}
        {...props}
      >
        {children}
        
        {collapsible && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            className={cn(
              "absolute -right-3 top-6 z-10 h-6 w-6 rounded-full",
              "border border-[var(--color-border)]",
              "bg-[var(--color-bg-elevated)]",
              "shadow-sm"
            )}
          >
            {collapsed ? (
              <ChevronRight className="h-3 w-3" />
            ) : (
              <ChevronLeft className="h-3 w-3" />
            )}
          </Button>
        )}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-16 items-center border-b border-[var(--color-border)] px-4", className)}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto py-4", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t border-[var(--color-border)] p-4", className)}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-3 py-2", className)}
    {...props}
  />
));
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-3 py-2 text-xs font-medium uppercase tracking-wider",
      "text-[var(--color-text-muted)]",
      className
    )}
    {...props}
  />
));
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-1", className)}
    {...props}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
}

const SidebarMenuItem = React.forwardRef<HTMLAnchorElement, SidebarMenuItemProps>(
  ({ className, icon, active, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-[var(--color-bg-glass)] text-[var(--color-text)] font-medium"
          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-glass-hover)] hover:text-[var(--color-text)]",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </a>
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
};
