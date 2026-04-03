import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--color-bg-secondary)] group-[.toaster]:backdrop-blur-[var(--blur-heavy)] group-[.toaster]:text-[var(--color-text)] group-[.toaster]:border-[var(--color-border)] group-[.toaster]:shadow-[var(--shadow-elevated)] group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-[var(--color-text-muted)]",
          actionButton:
            "group-[.toast]:bg-[var(--color-primary)] group-[.toast]:text-white group-[.toast]:rounded-md",
          cancelButton:
            "group-[.toast]:bg-[var(--color-bg-glass)] group-[.toast]:text-[var(--color-text-muted)] group-[.toast]:rounded-md",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
