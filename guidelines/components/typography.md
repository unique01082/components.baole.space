# Typography

## Purpose

Semantic heading and body text components with consistent styling, gradient text support, and polymorphic rendering (`as` prop). Provides `Heading` (h1–h6) and `Text` with size, weight, and variant control.

## When to Use

### ✅ Use Typography when:

- Creating page headings with consistent sizing and weight
- Rendering gradient or accent text for visual emphasis
- Building article/prose content with semantic text hierarchy

### ❌ Don't use Typography when:

- Text inside a button or badge — those components handle their own typography
- Only a Tailwind `text-*` class is needed — use it directly
- Complex rich text / markdown — use a markdown renderer

## Installation

```typescript
import { Heading, Text } from "@baolq/ui";
```

## Props API

### Heading

| Prop        | Type                                   | Default      | Description                                        |
| ----------- | -------------------------------------- | ------------ | -------------------------------------------------- |
| `level`     | `1` \| `2` \| `3` \| `4` \| `5` \| `6` | `2`          | Heading level (h1–h6)                              |
| `gradient`  | `boolean`                              | `false`      | Applies branded gradient text color                |
| `as`        | `ElementType`                          | –            | Override rendered element (e.g. `"p"` or `"span"`) |
| `className` | `string`                               | –            | Additional CSS classes                             |
| `children`  | `React.ReactNode`                      | **required** | Heading text                                       |

### Text

| Prop        | Type                                                   | Default      | Description               |
| ----------- | ------------------------------------------------------ | ------------ | ------------------------- |
| `size`      | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`         | `"md"`       | Font size                 |
| `weight`    | `"normal"` \| `"medium"` \| `"semibold"` \| `"bold"`   | `"normal"`   | Font weight               |
| `variant`   | `"default"` \| `"muted"` \| `"accent"` \| `"gradient"` | `"default"`  | Color/style variant       |
| `as`        | `ElementType`                                          | `"p"`        | Override rendered element |
| `className` | `string`                                               | –            | Additional CSS classes    |
| `children`  | `React.ReactNode`                                      | **required** | Text content              |

## Examples

### Page Title

```tsx
<Heading level={1}>Getting Started with Baole UI</Heading>
```

### Gradient Hero Heading

```tsx
<Heading level={1} gradient className="text-5xl font-bold">
  Build Beautiful Interfaces
</Heading>
```

### Section Headings

```tsx
<div className="space-y-8">
  <Heading level={2}>Components</Heading>

  <div>
    <Heading level={3}>Buttons</Heading>
    <Text variant="muted">
      Primary interaction elements for forms and actions.
    </Text>
  </div>

  <div>
    <Heading level={3}>Forms</Heading>
    <Text variant="muted">
      Controlled input components with validation support.
    </Text>
  </div>
</div>
```

### Text Variants

```tsx
<div className="space-y-2">
  <Text variant="default">Default text — main content color.</Text>
  <Text variant="muted">Muted text — secondary descriptions and captions.</Text>
  <Text variant="accent">Accent text — highlighted or featured content.</Text>
  <Text variant="gradient">Gradient text — brand-colored keywords.</Text>
</div>
```

### Text Sizes and Weights

```tsx
<div className="space-y-1">
  <Text size="xl" weight="bold">
    Extra large bold
  </Text>
  <Text size="lg" weight="semibold">
    Large semibold
  </Text>
  <Text size="md">Medium regular (default)</Text>
  <Text size="sm" variant="muted">
    Small muted
  </Text>
  <Text size="xs" variant="muted">
    Extra small muted
  </Text>
</div>
```

### Polymorphic Usage (span inside a paragraph)

```tsx
<p className="text-white/70">
  Install using{" "}
  <Text as="span" variant="accent" weight="medium">
    pnpm
  </Text>{" "}
  for the best experience.
</p>
```

## Do's and Don'ts

### ✅ Do

- Use correct `level` for semantic HTML (h1 once per page, h2 for sections, etc.)
- Use `as` to decouple visual styling from HTML semantics when needed
- Reserve `gradient` for important headlines — don't overuse it

### ❌ Don't

- Don't skip heading levels (h1 → h3) — this breaks screen reader navigation
- Don't use `Text variant="gradient"` for body copy — save gradient for emphasis
- Don't manually replicate Heading styles — use the component

## Accessibility

- Heading renders the semantically correct `<h1>`–`<h6>` element
- Text renders as `<p>` by default but can be overridden with `as`
- Gradient text uses CSS only — readable by screen readers normally
