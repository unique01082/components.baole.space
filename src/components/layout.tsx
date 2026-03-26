import * as React from "react";
import { cn } from "../utils";

const Layout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex min-h-screen", className)} {...props} />
));
Layout.displayName = "Layout";

const LayoutHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "border-b border-[var(--color-border)]",
      "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
      "sticky top-0 z-40",
      className,
    )}
    {...props}
  />
));
LayoutHeader.displayName = "LayoutHeader";

const LayoutSider = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    width?: string | number;
    collapsed?: boolean;
    collapsedWidth?: string | number;
  }
>(
  (
    {
      className,
      width = 256,
      collapsed = false,
      collapsedWidth = 80,
      style,
      ...props
    },
    ref,
  ) => (
    <aside
      ref={ref}
      className={cn(
        "border-r border-[var(--color-border)]",
        "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
        "transition-all duration-300",
        className,
      )}
      style={{
        width: collapsed
          ? typeof collapsedWidth === "number"
            ? `${collapsedWidth}px`
            : collapsedWidth
          : typeof width === "number"
            ? `${width}px`
            : width,
        ...style,
      }}
      {...props}
    />
  ),
);
LayoutSider.displayName = "LayoutSider";

const LayoutContent = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn("flex-1 overflow-auto", className)}
    {...props}
  />
));
LayoutContent.displayName = "LayoutContent";

const LayoutFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn(
      "border-t border-[var(--color-border)]",
      "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
      className,
    )}
    {...props}
  />
));
LayoutFooter.displayName = "LayoutFooter";

export { Layout, LayoutHeader, LayoutSider, LayoutContent, LayoutFooter };
