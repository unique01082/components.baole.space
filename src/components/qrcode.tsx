import * as React from "react";
import { cn } from "../utils";

export interface QRCodeProps {
  value: string;
  size?: number;
  level?: "L" | "M" | "Q" | "H";
  bgColor?: string;
  fgColor?: string;
  includeMargin?: boolean;
  imageSettings?: {
    src: string;
    height: number;
    width: number;
    excavate?: boolean;
  };
  className?: string;
}

// Simple QR Code generator (basic implementation)
// In production, use a library like 'qrcode.react' or 'qrcode'
const QRCode = React.forwardRef<HTMLDivElement, QRCodeProps>(
  (
    {
      value,
      size = 128,
      level = "M",
      bgColor = "#FFFFFF",
      fgColor = "#000000",
      includeMargin = false,
      imageSettings,
      className,
    },
    ref,
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Simple placeholder implementation
      // In production, use a proper QR code library
      canvas.width = size;
      canvas.height = size;

      // Background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      // Foreground (simplified pattern)
      ctx.fillStyle = fgColor;
      const cellSize = size / 25; // 25x25 grid for simplicity
      const margin = includeMargin ? cellSize : 0;

      // Create a simple pattern based on value hash
      const hash = value
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);

      for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++) {
          // Pseudo-random pattern based on position and hash
          if ((i * 25 + j + hash) % 3 === 0) {
            ctx.fillRect(
              margin + i * cellSize,
              margin + j * cellSize,
              cellSize,
              cellSize,
            );
          }
        }
      }

      // Add corners (finder patterns)
      const cornerSize = cellSize * 7;
      const corners = [
        [margin, margin],
        [size - cornerSize - margin, margin],
        [margin, size - cornerSize - margin],
      ];

      corners.forEach(([x, y]) => {
        ctx.fillStyle = fgColor;
        ctx.fillRect(x, y, cornerSize, cornerSize);
        ctx.fillStyle = bgColor;
        ctx.fillRect(
          x + cellSize,
          y + cellSize,
          cornerSize - 2 * cellSize,
          cornerSize - 2 * cellSize,
        );
        ctx.fillStyle = fgColor;
        ctx.fillRect(
          x + 2 * cellSize,
          y + 2 * cellSize,
          cornerSize - 4 * cellSize,
          cornerSize - 4 * cellSize,
        );
      });

      // Add image in center if provided
      if (imageSettings) {
        const img = new Image();
        img.onload = () => {
          const imgX = (size - imageSettings.width) / 2;
          const imgY = (size - imageSettings.height) / 2;

          if (imageSettings.excavate) {
            ctx.fillStyle = bgColor;
            ctx.fillRect(
              imgX - 5,
              imgY - 5,
              imageSettings.width + 10,
              imageSettings.height + 10,
            );
          }

          ctx.drawImage(
            img,
            imgX,
            imgY,
            imageSettings.width,
            imageSettings.height,
          );
        };
        img.src = imageSettings.src;
      }
    }, [value, size, level, bgColor, fgColor, includeMargin, imageSettings]);

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center p-4 rounded-lg",
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          "border border-[var(--color-border)]",
          className,
        )}
      >
        <canvas ref={canvasRef} className="rounded" />
      </div>
    );
  },
);
QRCode.displayName = "QRCode";

export { QRCode };
