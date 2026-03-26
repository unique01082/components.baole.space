import * as React from "react";
import { Upload as UploadIcon, X, FileIcon } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./button";

export interface UploadFile {
  uid: string;
  name: string;
  status: "uploading" | "done" | "error";
  url?: string;
  percent?: number;
}

export interface UploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  maxCount?: number;
  fileList?: UploadFile[];
  onChange?: (fileList: UploadFile[]) => void;
  onRemove?: (file: UploadFile) => void;
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  customRequest?: (file: File) => Promise<{ url: string }>;
  disabled?: boolean;
  listType?: "text" | "picture";
  className?: string;
}

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      accept,
      multiple = false,
      maxSize,
      maxCount,
      fileList = [],
      onChange,
      onRemove,
      beforeUpload,
      customRequest,
      disabled = false,
      listType = "text",
      className,
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [files, setFiles] = React.useState<UploadFile[]>(fileList);

    React.useEffect(() => {
      setFiles(fileList);
    }, [fileList]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);

      for (const file of selectedFiles) {
        // Check max size
        if (maxSize && file.size > maxSize) {
          console.error(`File ${file.name} exceeds max size`);
          continue;
        }

        // Check max count
        if (maxCount && files.length >= maxCount) {
          console.error("Maximum file count reached");
          break;
        }

        // Before upload hook
        if (beforeUpload) {
          const shouldUpload = await beforeUpload(file);
          if (!shouldUpload) continue;
        }

        const newFile: UploadFile = {
          uid: `${Date.now()}-${file.name}`,
          name: file.name,
          status: "uploading",
          percent: 0,
        };

        const newFiles = [...files, newFile];
        setFiles(newFiles);
        onChange?.(newFiles);

        // Simulate upload or use custom request
        try {
          if (customRequest) {
            const response = await customRequest(file);
            newFile.url = response.url;
          } else {
            // Simulate upload
            newFile.url = URL.createObjectURL(file);
          }
          newFile.status = "done";
          newFile.percent = 100;
        } catch (error) {
          newFile.status = "error";
        }

        const updatedFiles = newFiles.map((f) =>
          f.uid === newFile.uid ? newFile : f,
        );
        setFiles(updatedFiles);
        onChange?.(updatedFiles);
      }

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    const handleRemove = (file: UploadFile) => {
      const newFiles = files.filter((f) => f.uid !== file.uid);
      setFiles(newFiles);
      onChange?.(newFiles);
      onRemove?.(file);
    };

    const handleClick = () => {
      inputRef.current?.click();
    };

    return (
      <div ref={ref} className={cn("space-y-4", className)}>
        <div
          onClick={handleClick}
          className={cn(
            "border-2 border-dashed border-[var(--color-border)] rounded-lg p-6",
            "hover:border-[var(--color-primary)] transition-colors cursor-pointer",
            "flex flex-col items-center justify-center gap-2",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <UploadIcon className="h-8 w-8 text-[var(--color-text-muted)]" />
          <div className="text-sm text-[var(--color-text-muted)]">
            Click to upload or drag and drop
          </div>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.uid}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)]",
                  "bg-[var(--color-bg-glass)]",
                )}
              >
                {listType === "picture" && file.url ? (
                  <img
                    src={file.url}
                    alt={file.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                ) : (
                  <FileIcon className="h-8 w-8 text-[var(--color-text-muted)]" />
                )}

                <div className="flex-1 min-w-0">
                  <div className="text-sm text-[var(--color-text)] truncate">
                    {file.name}
                  </div>
                  {file.status === "uploading" && (
                    <div className="text-xs text-[var(--color-text-muted)]">
                      Uploading... {file.percent}%
                    </div>
                  )}
                  {file.status === "error" && (
                    <div className="text-xs text-red-500">Upload failed</div>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(file);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
Upload.displayName = "Upload";

export { Upload };
