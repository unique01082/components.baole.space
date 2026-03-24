import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const spaceVariants = cva("inline-flex", {
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  compoundVariants: [
    // Horizontal spacing
    { direction: "horizontal", size: "xs", class: "gap-1" },
    { direction: "horizontal", size: "sm", class: "gap-2" },
    { direction: "horizontal", size: "md", class: "gap-4" },
    { direction: "horizontal", size: "lg", class: "gap-6" },
    { direction: "horizontal", size: "xl", class: "gap-8" },
    // Vertical spacing
    { direction: "vertical", size: "xs", class: "gap-1" },
    { direction: "vertical", size: "sm", class: "gap-2" },
    { direction: "vertical", size: "md", class: "gap-4" },
    { direction: "vertical", size: "lg", class: "gap-6" },
    { direction: "vertical", size: "xl", class: "gap-8" },
  ],
  defaultVariants: {
    direction: "horizontal",
    size: "md",
  },
});

export interface SpaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spaceVariants> {
  split?: React.ReactNode;
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  ({ className, direction, size, align, wrap, split, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children).filter(Boolean);

    return (
      <div
        ref={ref}
        className={cn(spaceVariants({ direction, size, align, wrap }), className)}
        {...props}
      >
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {split && index < childrenArray.length - 1 && (
              <span className="select-none">{split}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);
Space.displayName = "Space";

export { Space, spaceVariants };
