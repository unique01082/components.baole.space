import * as React from "react";
import { cn } from "../utils";

export interface AffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  target?: () => HTMLElement | Window;
  onChange?: (affixed: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

const Affix = React.forwardRef<HTMLDivElement, AffixProps>(
  ({ offsetTop, offsetBottom, target, onChange, className, children }, ref) => {
    const [affixed, setAffixed] = React.useState(false);
    const [styles, setStyles] = React.useState<React.CSSProperties>({});
    const placeholderRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const getTarget = target ? target() : window;

      const handleScroll = () => {
        if (!placeholderRef.current || !contentRef.current) return;

        const placeholderRect = placeholderRef.current.getBoundingClientRect();
        const contentHeight = contentRef.current.offsetHeight;

        let newAffixed = false;
        let newStyles: React.CSSProperties = {};

        if (offsetTop !== undefined) {
          if (placeholderRect.top <= offsetTop) {
            newAffixed = true;
            newStyles = {
              position: "fixed",
              top: offsetTop,
              left: placeholderRect.left,
              width: placeholderRect.width,
            };
          }
        }

        if (offsetBottom !== undefined) {
          const viewportHeight = window.innerHeight;
          if (placeholderRect.bottom >= viewportHeight - offsetBottom) {
            newAffixed = true;
            newStyles = {
              position: "fixed",
              bottom: offsetBottom,
              left: placeholderRect.left,
              width: placeholderRect.width,
            };
          }
        }

        if (newAffixed !== affixed) {
          setAffixed(newAffixed);
          onChange?.(newAffixed);
        }

        setStyles(newStyles);
      };

      if (getTarget instanceof Window) {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleScroll);
        };
      } else {
        getTarget.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => getTarget.removeEventListener("scroll", handleScroll);
      }
    }, [offsetTop, offsetBottom, target, affixed, onChange]);

    return (
      <>
        <div
          ref={placeholderRef}
          style={
            affixed ? { height: contentRef.current?.offsetHeight } : undefined
          }
        />
        <div
          ref={contentRef}
          className={cn(className)}
          style={affixed ? styles : undefined}
        >
          {children}
        </div>
      </>
    );
  },
);
Affix.displayName = "Affix";

export { Affix };
