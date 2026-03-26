# Stack

## Purpose

A one-dimensional flexbox layout component for arranging children in a row or column with consistent spacing, alignment, and wrap behavior. Replaces manual `flex gap-*` class combinations.

## When to Use

### ✅ Use Stack when:

- Arranging buttons, badges, or icons in a row
- Stacking cards or sections vertically
- Building toolbar/action rows with consistent spacing

### ❌ Don't use Stack when:

- Two-dimensional layout is needed → Use `Grid`
- Inline content within text is needed → Use `Space`
- The layout is complex with different per-item spans → Use `Grid`

## Installation

```typescript
import { Stack } from "@baolq/ui";
```

## Props API

| Prop        | Type                                                                          | Default     | Description                         |
| ----------- | ----------------------------------------------------------------------------- | ----------- | ----------------------------------- |
| `direction` | `"row"` \| `"column"` \| `"row-reverse"` \| `"column-reverse"`                | `"column"`  | Flex direction                      |
| `spacing`   | `"none"` \| `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"`         | `"md"`      | Gap between children                |
| `align`     | `"start"` \| `"center"` \| `"end"` \| `"stretch"` \| `"baseline"`             | `"stretch"` | Cross-axis alignment                |
| `justify`   | `"start"` \| `"center"` \| `"end"` \| `"between"` \| `"around"` \| `"evenly"` | `"start"`   | Main-axis distribution              |
| `wrap`      | `boolean`                                                                     | `false`     | Allow children to wrap to next line |
| `className` | `string`                                                                      | –           | Additional CSS classes              |
| `children`  | `React.ReactNode`                                                             | –           | Stack content                       |

## Examples

### Vertical Stack (Default)

```tsx
<Stack spacing="lg">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Stack>
```

### Horizontal Button Row

```tsx
<Stack direction="row" spacing="sm" align="center" justify="end">
  <Button variant="ghost">Cancel</Button>
  <Button variant="outline">Save Draft</Button>
  <Button>Publish</Button>
</Stack>
```

### Centered Hero Content

```tsx
<Stack
  direction="column"
  align="center"
  justify="center"
  spacing="lg"
  className="min-h-screen"
>
  <h1 className="text-5xl font-bold text-white">Welcome</h1>
  <p className="text-white/60 text-lg max-w-md text-center">
    Build beautiful UIs with consistent components.
  </p>
  <Stack direction="row" spacing="sm">
    <Button size="lg">Get Started</Button>
    <Button size="lg" variant="outline">
      Learn More
    </Button>
  </Stack>
</Stack>
```

### Wrapping Tag Group

```tsx
<Stack direction="row" wrap spacing="xs">
  {tags.map((tag) => (
    <Tag key={tag} closable onClose={() => removeTag(tag)}>
      {tag}
    </Tag>
  ))}
</Stack>
```

### Form Field Group

```tsx
<Stack spacing="md">
  <Stack direction="row" spacing="md">
    <Input placeholder="First name" />
    <Input placeholder="Last name" />
  </Stack>
  <Input placeholder="Email" />
  <Textarea placeholder="Message" />
</Stack>
```

## Do's and Don'ts

### ✅ Do

- Use `direction="row"` + `align="center"` for horizontal toolbars
- Use `justify="between"` to push items to opposite ends (label + badge pairs)
- Use `wrap` when the number of items is dynamic and may overflow

### ❌ Don't

- Don't nest multiple stacks when a single Grid would be cleaner
- Don't use Stack for inline text content — use `Space` or flex utilities

## Accessibility

- Stack renders as a `<div>` — no accessibility properties needed
- Content should have proper heading/landmark structure regardless of Stack layout
