# QRCode

## Purpose

Generates a QR code image from a given string value. Used for sharing URLs, contact info, authentication, and payment flows.

## When to Use

### ✅ Use QRCode when:

- Sharing a URL that users can scan with a phone
- Enabling mobile login via QR auth flows
- Displaying payment wallet addresses
- Embedding contact info or short links for print materials

### ❌ Don't use QRCode when:

- The user needs to copy, not scan — show a copyable URL instead
- The value is too long — QR codes with very long values are harder to scan

## Installation

```typescript
import { QRCode } from "@baolq/ui";
```

## Props API

| Prop            | Type                             | Default      | Description                |
| --------------- | -------------------------------- | ------------ | -------------------------- |
| `value`         | `string`                         | **required** | Data to encode             |
| `size`          | `number`                         | `128`        | Width and height in pixels |
| `level`         | `"L"` \| `"M"` \| `"Q"` \| `"H"` | `"M"`        | Error correction level     |
| `bgColor`       | `string`                         | `"#ffffff"`  | Background color           |
| `fgColor`       | `string`                         | `"#000000"`  | Foreground (pattern) color |
| `imageSettings` | `QRImageSettings`                | –            | Embed a logo in the center |
| `className`     | `string`                         | –            | Applied to the container   |

### QRImageSettings

```typescript
interface QRImageSettings {
  src: string; // Logo image URL
  height: number; // Logo height
  width: number; // Logo width
  excavate?: boolean; // Clear QR modules under the logo
}
```

### Error Correction Levels

| Level | Recovery | Use Case                                     |
| ----- | -------- | -------------------------------------------- |
| `L`   | ~7%      | Clean environments, minimal redundancy       |
| `M`   | ~15%     | Standard use (default)                       |
| `Q`   | ~25%     | Print materials with risk of damage          |
| `H`   | ~30%     | Logos with image overlay, dirty environments |

## Examples

### Basic QR Code

```tsx
<QRCode value="https://baole.space" size={200} />
```

### Dark Theme QR

```tsx
<QRCode
  value="https://baole.space"
  size={200}
  bgColor="#0a0a0a"
  fgColor="#ffffff"
/>
```

### With Logo in Center

```tsx
<QRCode
  value="https://baole.space"
  size={200}
  level="H"
  imageSettings={{
    src: "/logo.png",
    width: 40,
    height: 40,
    excavate: true,
  }}
/>
```

### Shareable URL Card

```tsx
function ShareCard({ url }: { url: string }) {
  return (
    <Card className="inline-flex flex-col items-center gap-4 p-6">
      <QRCode value={url} size={160} />
      <p className="text-white/50 text-sm text-center">Scan to open</p>
      <Code>{url}</Code>
    </Card>
  );
}
```

### Download Button

```tsx
function DownloadableQR({ value }: { value: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "qrcode.png";
    a.href = url;
    a.click();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <QRCode value={value} size={200} />
      <Button variant="outline" size="sm" onClick={handleDownload}>
        Download PNG
      </Button>
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Use `level="H"` when embedding a logo (`imageSettings`) for better decode reliability
- Test the generated QR code with multiple devices before shipping
- Provide sufficient white/dark border (quiet zone) around the code

### ❌ Don't

- Don't encode secrets or passwords in QR codes
- Don't use custom `fgColor` that doesn't have sufficient contrast against `bgColor`
- Don't shrink the QR below 100px — scanning accuracy degrades significantly

## Accessibility

- QR code image has `alt` attribute describing the encoded value
- Always provide the URL/value as visible or copyable text alongside the QR code
