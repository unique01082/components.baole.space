# Checkbox

## Purpose

A styled checkbox built on Radix UI Checkbox. Supports indeterminate state, descriptive text, and group usage via `CheckboxGroup`.

## When to Use

### ✅ Use Checkbox when:

- Multiple independent options can all be on/off (non-exclusive)
- User needs to accept terms or toggle a boolean setting
- Part of a multi-select list (table row selection, filter options)

### ❌ Don't use Checkbox when:

- Only one option can be true at a time → Use `RadioGroup`
- It's an on/off toggle with immediate effect → Use `Switch`

## Installation

```typescript
import { Checkbox } from "@baole/ui";
```

## Props API

| Prop              | Type                                            | Default | Description                       |
| ----------------- | ----------------------------------------------- | ------- | --------------------------------- |
| `checked`         | `boolean \| "indeterminate"`                    | –       | Controlled checked state          |
| `onCheckedChange` | `(checked: boolean \| "indeterminate") => void` | –       | Change handler                    |
| `label`           | `string`                                        | –       | Label text next to the checkbox   |
| `description`     | `string`                                        | –       | Sub-label description             |
| `disabled`        | `boolean`                                       | `false` | Disables interaction              |
| `id`              | `string`                                        | –       | Explicit id for label association |
| `className`       | `string`                                        | –       | Additional CSS classes            |
| ...props          | `CheckboxProps`                                 | –       | Radix Checkbox primitive props    |

## Examples

```tsx
// Basic
<Checkbox label="Remember me" />

// With description
<Checkbox
  label="Marketing emails"
  description="Receive updates about new features and announcements"
/>

// Controlled indeterminate (parent of sub-items)
<Checkbox
  checked={allChecked ? true : someChecked ? 'indeterminate' : false}
  onCheckedChange={handleSelectAll}
  label="Select all"
/>

// With react-hook-form
<Controller
  name="terms"
  control={control}
  render={({ field }) => (
    <Checkbox
      label="I agree to the Terms of Service"
      checked={field.value}
      onCheckedChange={field.onChange}
    />
  )}
/>
```

## Do's and Don'ts

### ✅ Do

- Always pair with a visible `label` or `aria-label`
- Use `indeterminate` for "select all" patterns when some items are selected
- Use `description` to clarify what the option affects

### ❌ Don't

- Don't use a checkbox for an action that takes immediate effect — use `Switch`
- Don't put more than ~8 checkboxes without a `CheckboxGroup` wrapper
