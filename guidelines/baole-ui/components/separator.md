# Separator

## Purpose

A visual dividing line between sections or items. Supports horizontal and vertical orientations, a gradient variant, and an optional centered text label.

## When to Use

### ✅ Use Separator when:

- Visually separating groups of content within a card or layout
- Dividing form sections with labels ("or continue with")
- Adding structure between list items or menu groups

### ❌ Don't use Separator when:

- Spacing alone is sufficient — use `mt-*` / `pt-*` Tailwind classes instead
- You need a decorative border — use `border` CSS directly
- Inside DropdownMenu or Menubar — use their dedicated `Separator` sub-components

## Installation

```typescript
import { Separator } from "@baolq/ui";
```

## Props API

| Prop          | Type                           | Default        | Description                                 |
| ------------- | ------------------------------ | -------------- | ------------------------------------------- |
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Line direction                              |
| `variant`     | `"default"` \| `"gradient"`    | `"default"`    | Visual style                                |
| `label`       | `string`                       | –              | Centered text label                         |
| `decorative`  | `boolean`                      | `true`         | When `true`, hidden from accessibility tree |
| `className`   | `string`                       | –              | Additional CSS classes                      |

## Examples

### Basic Horizontal

```tsx
<Separator />
```

### With Label

```tsx
<Separator label="or" />

<Separator label="Section 2" />
```

### Gradient Variant

```tsx
<Separator variant="gradient" />
```

### Vertical (between inline elements)

```tsx
<div className="flex items-center h-6 gap-4">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>About</span>
  <Separator orientation="vertical" />
  <span>Contact</span>
</div>
```

### Auth Form Divider

```tsx
<div className="space-y-4">
  <Button variant="outline" fullWidth>
    Continue with Google
  </Button>
  <Separator label="or" />
  <Input label="Email" placeholder="you@example.com" />
</div>
```

## Do's and Don'ts

### ✅ Do

- Use `label` for functional separation ("or", "and", section names)
- Use `variant="gradient"` for decorative hero sections
- Set `decorative={false}` only when the separator carries semantic meaning

### ❌ Don't

- Don't stack multiple separators — use spacing instead
- Don't use horizontal separators inside flex rows — use vertical or spacing
- Don't use as the only visual hierarchy — combine with heading levels

## Accessibility

- When `decorative={true}` (default), renders as `role="none"` — invisible to screen readers
- Set `decorative={false}` if the separator indicates a functional boundary (e.g., separating sections with distinct meanings)
