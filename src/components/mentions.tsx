import * as React from "react";
import { cn } from "../utils";
import { Textarea } from "./textarea";

export interface MentionOption {
  value: string;
  label: string;
  avatar?: string;
}

export interface MentionsProps {
  options: MentionOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: MentionOption) => void;
  prefix?: string;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

const Mentions = React.forwardRef<HTMLTextAreaElement, MentionsProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = "",
      onChange,
      onSelect,
      prefix = "@",
      placeholder,
      disabled,
      rows = 3,
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);
    const [mentionSearch, setMentionSearch] = React.useState("");
    const [mentionPosition, setMentionPosition] = React.useState({
      top: 0,
      left: 0,
    });
    const [activeIndex, setActiveIndex] = React.useState(0);
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const value = controlledValue ?? internalValue;

    const filteredOptions = React.useMemo(() => {
      if (!mentionSearch) return options;
      return options.filter((option) =>
        option.label.toLowerCase().includes(mentionSearch.toLowerCase()),
      );
    }, [options, mentionSearch]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);

      // Check for mention trigger
      const cursorPosition = e.target.selectionStart;
      const textBeforeCursor = newValue.slice(0, cursorPosition);
      const mentionMatch = textBeforeCursor.match(
        new RegExp(`${prefix}(\\w*)$`),
      );

      if (mentionMatch) {
        setMentionSearch(mentionMatch[1]);
        setOpen(true);
        setActiveIndex(0);
      } else {
        setOpen(false);
      }
    };

    const handleSelect = (option: MentionOption) => {
      if (!textareaRef.current) return;

      const cursorPosition = textareaRef.current.selectionStart;
      const textBeforeCursor = value.slice(0, cursorPosition);
      const textAfterCursor = value.slice(cursorPosition);

      const mentionMatch = textBeforeCursor.match(
        new RegExp(`${prefix}(\\w*)$`),
      );
      if (!mentionMatch) return;

      const beforeMention = textBeforeCursor.slice(0, -mentionMatch[0].length);
      const newValue = `${beforeMention}${prefix}${option.value} ${textAfterCursor}`;

      setInternalValue(newValue);
      onChange?.(newValue);
      onSelect?.(option);
      setOpen(false);

      // Set cursor position after mention
      setTimeout(() => {
        const newPosition =
          beforeMention.length + prefix.length + option.value.length + 1;
        textareaRef.current?.setSelectionRange(newPosition, newPosition);
        textareaRef.current?.focus();
      }, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!open || filteredOptions.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1,
          );
          break;
        case "Enter":
          if (filteredOptions[activeIndex]) {
            e.preventDefault();
            handleSelect(filteredOptions[activeIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          setOpen(false);
          break;
      }
    };

    return (
      <div ref={containerRef} className={cn("relative", className)}>
        <Textarea
          ref={(node) => {
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
            textareaRef.current = node;
          }}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
        />

        {open && filteredOptions.length > 0 && (
          <div
            className={cn(
              "absolute z-50 w-64 max-h-60 overflow-auto rounded-lg border border-[var(--color-border)]",
              "bg-[var(--color-popover)] backdrop-blur-[var(--blur-glass)]",
              "shadow-[var(--shadow-glass)]",
              "animate-in fade-in-0 zoom-in-95",
            )}
            style={{
              top: "100%",
              marginTop: "4px",
            }}
          >
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors",
                  index === activeIndex
                    ? "bg-[var(--color-bg-glass-hover)] text-[var(--color-text)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-glass-hover)] hover:text-[var(--color-text)]",
                )}
              >
                {option.avatar && (
                  <img
                    src={option.avatar}
                    alt={option.label}
                    className="h-6 w-6 rounded-full"
                  />
                )}
                <div className="flex-1 text-sm">{option.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
Mentions.displayName = "Mentions";

export { Mentions };
