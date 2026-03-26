import * as React from "react";
import { cn } from "../utils";

export interface WatermarkProps {
  children?: React.ReactNode;
  content?: string | string[];
  width?: number;
  height?: number;
  rotate?: number;
  zIndex?: number;
  image?: string;
  font?: {
    color?: string;
    fontSize?: number;
    fontWeight?: "normal" | "light" | "bold";
    fontFamily?: string;
  };
  gap?: [number, number];
  offset?: [number, number];
  className?: string;
}

const Watermark = React.forwardRef<HTMLDivElement, WatermarkProps>(
  (
    {
      children,
      content = "",
      width = 120,
      height = 64,
      rotate = -22,
      zIndex = 9,
      image,
      font = {},
      gap = [100, 100],
      offset = [0, 0],
      className,
    },
    ref,
  ) => {
    const {
      color = "rgba(0,0,0,.15)",
      fontSize = 16,
      fontWeight = "normal",
      fontFamily = "sans-serif",
    } = font;

    const [base64Url, setBase64Url] = React.useState("");

    React.useEffect(() => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const ratio = window.devicePixelRatio || 1;
      const canvasWidth = (width + gap[0]) * ratio;
      const canvasHeight = (height + gap[1]) * ratio;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.translate(offset[0] * ratio, offset[1] * ratio);
      ctx.rotate((Math.PI / 180) * rotate);

      if (image) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width * ratio, height * ratio);
          setBase64Url(canvas.toDataURL());
        };
        img.src = image;
      } else {
        ctx.font = `${fontWeight} ${fontSize * ratio}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        const contents = Array.isArray(content) ? content : [content];
        contents.forEach((text, index) => {
          ctx.fillText(text, 0, index * (fontSize * ratio + 10));
        });

        setBase64Url(canvas.toDataURL());
      }
    }, [
      content,
      width,
      height,
      rotate,
      image,
      color,
      fontSize,
      fontWeight,
      fontFamily,
      gap,
      offset,
    ]);

    return (
      <div ref={ref} className={cn("relative", className)}>
        {children}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex,
            backgroundImage: `url(${base64Url})`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>
    );
  },
);
Watermark.displayName = "Watermark";

export { Watermark };
