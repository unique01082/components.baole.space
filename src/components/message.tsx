import * as React from "react";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "../utils";

export type MessageType = "success" | "error" | "warning" | "info" | "loading";

export interface MessageProps {
  type?: MessageType;
  content: React.ReactNode;
  duration?: number;
  onClose?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  (
    { type = "info", content, duration = 3000, onClose, icon, className },
    ref,
  ) => {
    React.useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          onClose?.();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    const icons = {
      success: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      error: <XCircle className="h-5 w-5 text-red-500" />,
      warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
      info: <Info className="h-5 w-5 text-blue-500" />,
      loading: (
        <Loader2 className="h-5 w-5 text-[var(--color-primary)] animate-spin" />
      ),
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg",
          "bg-[var(--color-bg-elevated)] backdrop-blur-[var(--blur-glass)]",
          "border border-[var(--color-border)]",
          "shadow-[var(--shadow-elevated)]",
          "animate-in fade-in slide-in-from-top-4",
          className,
        )}
      >
        {icon || icons[type]}
        <span className="flex-1 text-sm text-[var(--color-text)]">
          {content}
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  },
);
Message.displayName = "Message";

// Message Manager
interface MessageInstance {
  id: string;
  type: MessageType;
  content: React.ReactNode;
  duration?: number;
}

let messageContainer: HTMLDivElement | null = null;
let messageInstances: MessageInstance[] = [];
let updateCallback: (() => void) | null = null;

const getContainer = (): HTMLDivElement => {
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    messageContainer.className =
      "fixed top-4 left-1/2 -translate-x-1/2 z-[10000] flex flex-col gap-2";
    document.body.appendChild(messageContainer);
  }
  return messageContainer;
};

const show = (type: MessageType, content: React.ReactNode, duration = 3000) => {
  const id = Math.random().toString(36).substring(7);
  const instance: MessageInstance = { id, type, content, duration };
  messageInstances.push(instance);
  updateCallback?.();

  if (duration > 0) {
    setTimeout(() => {
      close(id);
    }, duration);
  }

  return id;
};

const close = (id: string) => {
  messageInstances = messageInstances.filter((msg) => msg.id !== id);
  updateCallback?.();
};

export const MessageManager = {
  success: (content: React.ReactNode, duration?: number) =>
    show("success", content, duration),
  error: (content: React.ReactNode, duration?: number) =>
    show("error", content, duration),
  warning: (content: React.ReactNode, duration?: number) =>
    show("warning", content, duration),
  info: (content: React.ReactNode, duration?: number) =>
    show("info", content, duration),
  loading: (content: React.ReactNode, duration?: number) =>
    show("loading", content, duration),
  destroy: (id?: string) => {
    if (id) {
      close(id);
    } else {
      messageInstances = [];
      updateCallback?.();
    }
  },
};

export const MessageContainer: React.FC = () => {
  const [messages, setMessages] = React.useState<MessageInstance[]>([]);

  React.useEffect(() => {
    updateCallback = () => {
      setMessages([...messageInstances]);
    };
    return () => {
      updateCallback = null;
    };
  }, []);

  if (messages.length === 0) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] flex flex-col gap-2">
      {messages.map((msg) => (
        <Message
          key={msg.id}
          type={msg.type}
          content={msg.content}
          duration={0}
          onClose={() => MessageManager.destroy(msg.id)}
        />
      ))}
    </div>
  );
};

export { Message };
