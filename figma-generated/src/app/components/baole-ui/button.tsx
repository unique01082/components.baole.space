import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/baole-utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-white/20 bg-white/5 text-white hover:border-purple-400/50 hover:bg-white/10 backdrop-blur-sm",
        ghost:
          "bg-transparent text-white/80 hover:bg-white/10 hover:text-white",
        destructive:
          "bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-[var(--glow-danger)] hover:scale-[1.02] active:scale-[0.98]",
        success:
          "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-[var(--glow-success)] hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-white/8 text-white/90 hover:bg-white/12 border border-white/10",
        link: "text-purple-400 hover:text-purple-300 underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-6 px-2.5 text-xs rounded-md gap-1",
        sm: "h-8 px-3 text-sm rounded-md gap-1.5",
        md: "h-9 px-4 text-sm rounded-lg gap-2",
        lg: "h-11 px-6 text-base rounded-lg gap-2",
        xl: "h-13 px-8 text-lg rounded-xl gap-3",
        icon: "size-9 rounded-lg p-0",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    const content = (
      <>
        {loading && <Loader2 className="animate-spin" size={16} />}
        {!loading && leftIcon && leftIcon}
        {children}
        {!loading && rightIcon && rightIcon}
      </>
    );

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          fullWidth && "w-full",
          loading && "pointer-events-none opacity-70"
        )}
        ref={ref}
        disabled={isDisabled}
        data-slot="button"
        {...props}
      >
        {content}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
