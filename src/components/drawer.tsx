import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { X } from "lucide-react";
import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

type DrawerDirection = "left" | "right" | "top" | "bottom";

interface DrawerContextType {
  direction?: DrawerDirection;
}

const DrawerContext = React.createContext<DrawerContextType>({});

interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  shouldScaleBackground?: boolean;
  direction?: DrawerDirection;
  modal?: boolean;
  dismissible?: boolean;
  onDrag?: (event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => void;
  onRelease?: (event: React.PointerEvent<HTMLDivElement>, open: boolean) => void;
  children?: React.ReactNode;
}

const Drawer = ({
  shouldScaleBackground = true,
  direction = "right",
  ...props
}: DrawerProps) => (
  <DrawerContext.Provider value={{ direction }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      direction={direction === "bottom" || direction === "top" ? direction : "right"}
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-[var(--color-bg-overlay)] backdrop-blur-sm",
      className,
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva(
  "fixed z-50 flex flex-col border border-[var(--color-border)] bg-[var(--color-bg-secondary)] backdrop-blur-[var(--blur-heavy)] shadow-[var(--shadow-elevated)]",
  {
    variants: {
      direction: {
        left: "inset-y-0 left-0 h-full w-[378px] border-r rounded-r-xl",
        right: "inset-y-0 right-0 h-full w-[378px] border-l rounded-l-xl",
        top: "inset-x-0 top-0 w-full h-[378px] border-b rounded-b-xl",
        bottom: "inset-x-0 bottom-0 w-full h-auto max-h-[80vh] border-t rounded-t-xl",
      },
    },
    defaultVariants: {
      direction: "right",
    },
  },
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, direction, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  const finalDirection = direction || context.direction || "right";

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(drawerContentVariants({ direction: finalDirection }), className)}
        {...props}
      >
        {finalDirection === "bottom" && (
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-[var(--color-border)]" />
        )}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-2 p-6 border-b border-[var(--color-border)]", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-6 border-t border-[var(--color-border)]", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-[var(--color-text)]",
      className,
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[var(--color-text-muted)]", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
