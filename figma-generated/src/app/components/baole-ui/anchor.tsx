import * as React from "react";
import { cn } from "./utils";

export interface AnchorLink {
  key: string;
  href: string;
  title: string;
  children?: AnchorLink[];
}

export interface AnchorProps {
  links: AnchorLink[];
  activeLink?: string;
  onChange?: (currentActiveLink: string) => void;
  offsetTop?: number;
  targetOffset?: number;
  className?: string;
}

const Anchor = React.forwardRef<HTMLDivElement, AnchorProps>(
  (
    {
      links,
      activeLink: controlledActiveLink,
      onChange,
      offsetTop = 0,
      targetOffset,
      className,
    },
    ref
  ) => {
    const [internalActiveLink, setInternalActiveLink] = React.useState<string>("");
    const activeLink = controlledActiveLink ?? internalActiveLink;

    React.useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + (targetOffset ?? window.innerHeight / 2);

        // Find all anchor targets
        const sections = links.flatMap((link) => {
          const main = { href: link.href, el: document.querySelector(link.href) };
          const children = link.children?.map((child) => ({
            href: child.href,
            el: document.querySelector(child.href),
          })) || [];
          return [main, ...children];
        });

        // Find the current section
        let current = "";
        for (const section of sections) {
          if (section.el) {
            const rect = section.el.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            if (top <= scrollPosition) {
              current = section.href;
            }
          }
        }

        if (current && current !== activeLink) {
          setInternalActiveLink(current);
          onChange?.(current);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener("scroll", handleScroll);
    }, [links, activeLink, onChange, targetOffset]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - offsetTop;
        window.scrollTo({ top, behavior: "smooth" });
        setInternalActiveLink(href);
        onChange?.(href);
      }
    };

    const renderLink = (link: AnchorLink, level: number = 0) => {
      const isActive = activeLink === link.href;

      return (
        <div key={link.key}>
          <a
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={cn(
              "block py-1 text-sm transition-colors border-l-2",
              level === 0 ? "pl-4" : "pl-8",
              isActive
                ? "border-[var(--color-primary)] text-[var(--color-primary)] font-medium"
                : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-border-strong)]"
            )}
          >
            {link.title}
          </a>
          {link.children && link.children.length > 0 && (
            <div className="ml-2">
              {link.children.map((child) => renderLink(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn("space-y-1", className)}
        style={{ position: "sticky", top: offsetTop }}
      >
        {links.map((link) => renderLink(link))}
      </div>
    );
  }
);
Anchor.displayName = "Anchor";

export { Anchor };
