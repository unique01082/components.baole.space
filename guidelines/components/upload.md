# Upload

## Purpose

A file upload component with drag-and-drop support, file validation, upload list display, and custom request handling. Supports single file, multi-file, and image preview upload patterns.

## When to Use

### ✅ Use Upload when:

- Users need to upload files (profile photo, CSV import, document attachment)
- A dropzone interface with validation feedback is needed
- Multiple files need to be queued and tracked

### ❌ Don't use Upload when:

- Only a URL or text input is needed → Use Input
- The upload is triggered programmatically without user interaction

## Installation

```typescript
import { Upload } from "@baolq/ui";
```

## Props API

| Prop            | Type                                          | Default  | Description                                                 |
| --------------- | --------------------------------------------- | -------- | ----------------------------------------------------------- |
| `accept`        | `string`                                      | –        | MIME types or extensions (e.g. `"image/*"`, `".pdf,.docx"`) |
| `multiple`      | `boolean`                                     | `false`  | Allow multiple file selection                               |
| `maxSize`       | `number`                                      | –        | Maximum file size in bytes                                  |
| `maxCount`      | `number`                                      | –        | Maximum number of files                                     |
| `fileList`      | `UploadFile[]`                                | –        | Controlled file list                                        |
| `onChange`      | `(files: UploadFile[]) => void`               | –        | Called when file list changes                               |
| `onRemove`      | `(file: UploadFile) => void`                  | –        | Called when a file is removed                               |
| `beforeUpload`  | `(file: File) => boolean \| Promise<boolean>` | –        | Validate before adding to list                              |
| `customRequest` | `(options: UploadRequestOption) => void`      | –        | Custom upload handler                                       |
| `disabled`      | `boolean`                                     | `false`  | Disables the component                                      |
| `listType`      | `"text"` \| `"picture"`                       | `"text"` | How uploaded files are listed                               |
| `className`     | `string`                                      | –        | Additional CSS classes                                      |

### UploadFile

```typescript
interface UploadFile {
  uid: string;
  name: string;
  status?: "uploading" | "done" | "error" | "removed";
  url?: string;
  percent?: number;
  error?: string;
}
```

## Examples

### Single File Upload

```tsx
<Upload
  accept=".pdf,.docx"
  maxSize={5 * 1024 * 1024} // 5MB
  onChange={(files) => setDocument(files[0])}
>
  <Button variant="outline">
    <Upload size={16} className="mr-2" />
    Upload Document
  </Button>
</Upload>
```

### Image Upload with Preview

```tsx
const [fileList, setFileList] = useState<UploadFile[]>([])

<Upload
  accept="image/*"
  multiple
  maxCount={5}
  maxSize={2 * 1024 * 1024}
  listType="picture"
  fileList={fileList}
  onChange={setFileList}
  onRemove={(file) => setFileList(prev => prev.filter(f => f.uid !== file.uid))}
>
  <div className="flex flex-col items-center p-8 border-2 border-dashed border-white/20 rounded-xl hover:border-white/40 transition cursor-pointer">
    <ImageIcon size={32} className="text-white/40 mb-2" />
    <p className="text-white/60 text-sm">Drag & drop images, or click to select</p>
    <p className="text-white/30 text-xs mt-1">PNG, JPG, WebP up to 2MB</p>
  </div>
</Upload>
```

### With Validation (beforeUpload)

```tsx
<Upload
  accept="image/*"
  beforeUpload={(file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      MessageManager.error("Only image files are allowed.");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      MessageManager.error("File must be smaller than 2MB.");
      return false;
    }
    return true;
  }}
>
  <Button>Upload Avatar</Button>
</Upload>
```

### Custom Upload Request

```tsx
<Upload
  customRequest={async ({ file, onProgress, onSuccess, onError }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await uploadToS3(formData, (percent) =>
        onProgress?.({ percent }),
      );
      onSuccess?.(response);
    } catch (err) {
      onError?.(err);
    }
  }}
>
  <Button>Upload to S3</Button>
</Upload>
```

## Do's and Don'ts

### ✅ Do

- Always set `accept` to restrict file types and prevent confusion
- Set `maxSize` to prevent oversized uploads
- Use `beforeUpload` for client-side validation before any upload attempt
- Show upload progress via `fileList` status and `percent`

### ❌ Don't

- Don't rely solely on client-side validation — validate file types/sizes server-side too
- Don't accept executables (`.exe`, `.sh`) without explicit security controls
- Don't allow unlimited `maxCount` — set a reasonable limit

## Accessibility

- Upload area has `role="button"` and `aria-label="Upload file"`
- File input is hidden but accessible via keyboard (Enter/Space activates)
- Uploaded file list items have remove buttons with `aria-label="Remove {filename}"`
