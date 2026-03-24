# Textarea

## Purpose

Multi-line text input with auto-resize support, character count, and the same label/error/helper text API as `Input`.

## When to Use

### ✅ Use Textarea when:

- Collecting multi-line text (bio, description, message, notes)
- Rich body content or comments
- Any input where line breaks are expected

### ❌ Don't use Textarea when:

- Only one line of input is needed → Use `Input`
- The content requires formatting → Use a rich-text editor

## Installation

```typescript
import { Textarea } from "@baole/ui";
```

## Props API

| Prop         | Type                     | Default | Description                              |
| ------------ | ------------------------ | ------- | ---------------------------------------- |
| `label`      | `string`                 | –       | Label above the textarea                 |
| `helperText` | `string`                 | –       | Helper text below                        |
| `error`      | `string`                 | –       | Validation error message                 |
| `autoResize` | `boolean`                | `false` | Grow vertically as content is added      |
| `maxLength`  | `number`                 | –       | Character limit (shows counter when set) |
| `showCount`  | `boolean`                | `false` | Always show character count              |
| `rows`       | `number`                 | `4`     | Initial row count                        |
| `disabled`   | `boolean`                | `false` | Disables the textarea                    |
| `className`  | `string`                 | –       | Additional CSS classes                   |
| ...props     | `TextareaHTMLAttributes` | –       | All standard textarea props              |

## Examples

```tsx
// Basic
<Textarea label="Bio" placeholder="Tell us about yourself..." />

// Auto-resize with character limit
<Textarea
  label="Message"
  autoResize
  maxLength={500}
  showCount
  placeholder="Type your message..."
/>

// Error state
<Textarea label="Description" error="Description is required" />
```

## Do's and Don'ts

### ✅ Do

- Use `autoResize` for comment boxes and description fields — prevents scrollbar flash
- Show `maxLength` + `showCount` on any field with a real character limit

### ❌ Don't

- Don't set `rows` too high on mobile — vertical space is precious
- Don't provide `resize` CSS override; `autoResize` handles it
