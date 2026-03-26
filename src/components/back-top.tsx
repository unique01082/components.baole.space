import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./button";

export interface BackTopProps {
  visibilityHeight?: number;
  target?: () => HTMLElement | Window;
  onClick?: () => void;
  className?: string;
}

const BackTop = React.forwardRef<HTMLDivElement, BackTopProps>(
  ({ visibilityHeight = 400, target, onClick, className }, ref) => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      const getTarget = target ? target() : window;

      const handleScroll = () => {
        if (getTarget instanceof Window) {
          setVisible(window.scrollY > visibilityHeight);
        } else {
          setVisible(getTarget.scrollTop > visibilityHeight);
        }
      };

      if (getTarget instanceof Window) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        getTarget.addEventListener("scroll", handleScroll);
        return () => getTarget.removeEventListener("scroll", handleScroll);
      }
    }, [visibilityHeight, target]);

    const scrollToTop = () => {
      const getTarget = target ? target() : window;

      if (getTarget instanceof Window) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        getTarget.scrollTo({ top: 0, behavior: "smooth" });
      }

      onClick?.();
    };

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-8 right-8 z-50",
          "animate-in fade-in slide-in-from-bottom-4",
          className,
        )}
      >
        <Button
          variant="gradient"
          size="icon"
          className="h-12 w-12 rounded-full shadow-[var(--shadow-elevated)]"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    );
  },
);
BackTop.displayName = "BackTop";

export { BackTop };
