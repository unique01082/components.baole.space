# Watermark

## Purpose

Overlays a repeating text or image watermark on a section of the UI. Used to mark content as confidential, draft, or copyrighted, or to brand screenshots and exported views.

## When to Use

### ✅ Use Watermark when:

- Marking documents, reports, or dashboards as "Confidential" or "Draft"
- Branding exported screenshots or PDF views
- Protecting content against unauthorized screenshots or distribution

### ❌ Don't use Watermark when:

- The watermark would obscure critical interactive content
- A simple label or badge communicates status adequately → Use `Badge` or `Alert`

## Installation

```typescript
import { Watermark } from "@baolq/ui";
```

## Props API

| Prop        | Type                   | Default      | Description                                      |
| ----------- | ---------------------- | ------------ | ------------------------------------------------ |
| `children`  | `React.ReactNode`      | **required** | Content to watermark                             |
| `content`   | `string` \| `string[]` | –            | Text watermark content (array = multiline)       |
| `image`     | `string`               | –            | Image URL watermark (overrides text if both set) |
| `width`     | `number`               | `120`        | Width of a single watermark tile                 |
| `height`    | `number`               | `64`         | Height of a single watermark tile                |
| `rotate`    | `number`               | `-22`        | Rotation angle in degrees                        |
| `zIndex`    | `number`               | `9`          | z-index of the watermark overlay                 |
| `gap`       | `[number, number]`     | `[100, 100]` | Horizontal and vertical gap between tiles        |
| `offset`    | `[number, number]`     | –            | Starting offset for the first tile               |
| `font`      | `WatermarkFont`        | –            | Font settings for text watermark                 |
| `className` | `string`               | –            | Applied to the container                         |

### WatermarkFont

```typescript
interface WatermarkFont {
  color?: string; // Default: 'rgba(0,0,0,0.1)'
  fontSize?: number; // Default: 16
  fontFamily?: string; // Default: sans-serif
  fontWeight?: string | number;
  fontStyle?: string;
}
```

## Examples

### Text Watermark

```tsx
<Watermark content="CONFIDENTIAL">
  <div className="p-8 min-h-[400px]">
    <h1 className="text-white text-2xl">Internal Report Q1 2026</h1>
    <p className="text-white/60">
      This document contains sensitive financial data...
    </p>
  </div>
</Watermark>
```

### Draft Watermark

```tsx
<Watermark
  content="DRAFT"
  font={{ color: "rgba(239,68,68,0.15)", fontSize: 20, fontWeight: "bold" }}
  rotate={-30}
>
  <div className="p-6">{documentContent}</div>
</Watermark>
```

### Multiline Text Watermark

```tsx
<Watermark
  content={["Company Confidential", "Do Not Distribute"]}
  font={{ color: "rgba(255,255,255,0.08)", fontSize: 14 }}
>
  {children}
</Watermark>
```

### Image Watermark

```tsx
<Watermark
  image="/logo-watermark.png"
  width={80}
  height={40}
  gap={[150, 120]}
  rotate={-15}
>
  {children}
</Watermark>
```

### Branded Export Panel

```tsx
function ExportableReport({ children }: { children: React.ReactNode }) {
  return (
    <Watermark
      content={`© ${new Date().getFullYear()} Acme Corp`}
      font={{ color: "rgba(99,102,241,0.12)", fontSize: 13 }}
      rotate={-22}
      gap={[120, 80]}
    >
      {children}
    </Watermark>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Use low-opacity font color (8–15% alpha) to avoid obscuring content
- Test on both light and dark backgrounds
- Use `zIndex` carefully — ensure the watermark doesn't block interactive elements

### ❌ Don't

- Don't use watermarks as a security mechanism — they're visual only and can be removed
- Don't use dark opaque watermarks that make content unreadable
- Don't watermark purely decorative areas where it has no value

## Accessibility

- The watermark overlay is `aria-hidden={true}` — screen readers ignore it
- Underlying content remains fully accessible
