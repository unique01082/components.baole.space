# Label

## Purpose

Accessible form field label with variant styles and an optional required indicator. Associates with a form control via `htmlFor`.

## When to Use

### ✅ Use Label when:

- Labeling any form input (Input, Select, Checkbox, etc.)
- Indicating required fields with a visual asterisk
- Providing muted or error state labels for dynamic feedback

### ❌ Don't use Label when:

- The input has a built-in `label` prop — use that instead to avoid duplication
- The text is purely decorative — use a `<p>` or `<span>`

## Installation

```typescript
import { Label } from "@baolq/ui";
```

## Props API

| Prop        | Type                                  | Default     | Description                              |
| ----------- | ------------------------------------- | ----------- | ---------------------------------------- |
| `htmlFor`   | `string`                              | –           | ID of the associated form control        |
| `variant`   | `"default"` \| `"muted"` \| `"error"` | `"default"` | Visual style                             |
| `required`  | `boolean`                             | `false`     | Shows a red `*` indicator after the text |
| `className` | `string`                              | –           | Additional CSS classes                   |
| ...props    | `HTMLLabelAttributes`                 | –           | All standard label props                 |

## Examples

### Basic Usage

```tsx
<div className="space-y-1">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Required Field

```tsx
<div className="space-y-1">
  <Label htmlFor="username" required>
    Username
  </Label>
  <Input id="username" placeholder="johndoe" />
</div>
```

### Error State

```tsx
<div className="space-y-1">
  <Label htmlFor="password" variant="error">
    Password
  </Label>
  <Input id="password" type="password" status="error" />
  <p className="text-xs text-red-400">Must be at least 8 characters</p>
</div>
```

### Muted Variant

```tsx
<div className="space-y-1">
  <Label htmlFor="bio" variant="muted">
    Bio (optional)
  </Label>
  <Textarea id="bio" placeholder="Tell us about yourself" />
</div>
```

## Do's and Don'ts

### ✅ Do

- Always provide `htmlFor` matching the input's `id` for accessibility
- Use `required` to visually mark mandatory fields
- Pair with form validation messages below the input

### ❌ Don't

- Don't use Label without `htmlFor` — screen readers won't associate it
- Don't use Label for section headings — use `<h2>`–`<h6>` instead
- Don't skip labels on icon-only inputs — use `aria-label` on the input instead

## Accessibility

- Clicking a Label focuses/activates the associated control via `htmlFor`
- The `required` asterisk is decorative; set `aria-required="true"` on the input itself when required
