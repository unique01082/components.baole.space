import * as React from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "./utils";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
  onError?: () => void;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      src,
      alt = "",
      fallback,
      onError,
      aspectRatio = "auto",
      objectFit = "cover",
      ...props
    },
    ref
  ) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const aspectRatioClasses = {
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
      auto: "",
    };

    const objectFitClasses = {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down",
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
      onError?.();
    };

    const handleLoad = () => {
      setLoading(false);
    };

    if (error || !src) {
      return (
        <div
          className={cn(
            "flex items-center justify-center bg-[var(--color-bg-glass)] rounded-md",
            aspectRatioClasses[aspectRatio],
            className
          )}
        >
          {fallback || (
            <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
              <ImageIcon className="h-8 w-8" />
              <span className="text-xs">Image not available</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-md",
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-glass)] animate-pulse">
            <ImageIcon className="h-8 w-8 text-[var(--color-text-muted)]" />
          </div>
        )}
        <img
          ref={ref}
          src={src}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          className={cn(
            "h-full w-full transition-opacity duration-300",
            objectFitClasses[objectFit],
            loading ? "opacity-0" : "opacity-100"
          )}
          {...props}
        />
      </div>
    );
  }
);
Image.displayName = "Image";

export { Image };
