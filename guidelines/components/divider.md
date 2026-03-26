# Divider

## Purpose

A horizontal or vertical rule that visually separates sections of content. Supports an optional centered label and a gradient variant for decorative use.

## When to Use

### ✅ Use Divider when:

- Separating logical sections within a card, page, or form
- Adding a decorative "or" divider between sign-in options
- Separating items in a list or menu (use `ContextMenuSeparator` / `DropdownMenuSeparator` for those)

### ❌ Don't use Divider when:

- Spacing alone is sufficient → Use padding/margin utilities
- Inside DropdownMenu or ContextMenu → Use their built-in Separator components
- Grid or card borders already provide visual separation

## Installation

```typescript
import { Divider } from "@baolq/ui";
```

## Props API

| Prop          | Type                           | Default        | Description            |
| ------------- | ------------------------------ | -------------- | ---------------------- |
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Divider direction      |
| `variant`     | `"default"` \| `"gradient"`    | `"default"`    | Visual style           |
| `label`       | `string` \| `React.ReactNode`  | –              | Centered label text    |
| `className`   | `string`                       | –              | Additional CSS classes |

## Examples

### Default Horizontal Divider

```tsx
<Divider />
```

### Gradient Divider (Decorative)

```tsx
<Divider variant="gradient" />
```

### With Label

```tsx
<Divider label="or" />
```

### Auth Form "or" Divider

```tsx
<div className="space-y-4">
  <Button className="w-full" variant="outline">
    Continue with Google
  </Button>

  <Divider label="or continue with email" />

  <Input type="email" placeholder="Email" />
  <Input type="password" placeholder="Password" />
  <Button className="w-full">Sign In</Button>
</div>
```

### Section Divider with Label

```tsx
<div className="space-y-6">
  <section>
    <h2 className="text-white text-xl font-semibold mb-4">Personal Info</h2>
    {/* form fields */}
  </section>

  <Divider label="Preferences" />

  <section>{/* preference fields */}</section>
</div>
```

### Vertical Divider (Inside Row)

```tsx
<div className="flex items-center gap-4 h-6">
  <span className="text-white/60 text-sm">12 min read</span>
  <Divider orientation="vertical" />
  <span className="text-white/60 text-sm">March 26, 2026</span>
  <Divider orientation="vertical" />
  <span className="text-white/60 text-sm">Design</span>
</div>
```

### Gradient Section Break

```tsx
<section>
  <FeaturesSection />
</section>
<Divider variant="gradient" className="my-12" />
<section>
  <PricingSection />
</section>
```

## Do's and Don'ts

### ✅ Do

- Use `variant="gradient"` for landing pages and decorative separations
- Use `label` to add contextual meaning to the separator
- Use `orientation="vertical"` inside flex rows for inline separation

### ❌ Don't

- Don't add Dividers between every section — space alone is often sufficient
- Don't use a horizontal Divider inside a vertical DropdownMenu — use its built-in Separator

## Accessibility

- Renders as `<hr>` for horizontal and `<div role="separator">` for vertical
- Labeled dividers have `aria-label` if the label is decorative
