import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../utils";

interface SeparatorProps extends React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> {
  variant?: "default" | "gradient";
  label?: string;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      variant = "default",
      label,
      ...props
    },
    ref,
  ) => {
    if (label) {
      return (
        <div className="relative flex items-center">
          <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
              "flex-1",
              variant === "default" && "bg-white/10",
              variant === "gradient" &&
                "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              orientation === "horizontal" && "h-px",
              orientation === "vertical" && "w-px",
              className,
            )}
            {...props}
          />
          <span className="px-2 text-xs text-white/50">{label}</span>
          <SeparatorPrimitive.Root
            decorative={decorative}
            orientation={orientation}
            className={cn(
              "flex-1",
              variant === "default" && "bg-white/10",
              variant === "gradient" &&
                "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              orientation === "horizontal" && "h-px",
              orientation === "vertical" && "w-px",
            )}
          />
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          variant === "default" && "bg-white/10",
          variant === "gradient" &&
            "bg-gradient-to-r from-transparent via-white/20 to-transparent",
          orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
          className,
        )}
        data-slot="separator"
        {...props}
      />
    );
  },
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
