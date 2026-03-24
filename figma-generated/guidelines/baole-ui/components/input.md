# Input

## Purpose

The Input component is a styled text input field with support for labels, helper text, error states, prefixes/suffixes, and icons. It wraps the native `<input>` element with @baole/ui's glassmorphism styling.

## When to Use

### ✅ Use Input when:

- Collecting a single line of text (name, email, search query, URL, etc.)
- Forms require user-entered data
- Search fields or filter bars

### ❌ Don't use Input when:

- Multi-line text is needed → Use `Textarea`
- User selects from options → Use `Select` or `Combobox`
- Only numeric input is needed → Use `InputNumber`

## Installation

```typescript
import { Input } from "@baole/ui";
```

## Props API

| Prop         | Type                       | Default | Description                                      |
| ------------ | -------------------------- | ------- | ------------------------------------------------ |
| `label`      | `string`                   | –       | Label text shown above the input                 |
| `helperText` | `string`                   | –       | Helper or description text below the input       |
| `error`      | `string`                   | –       | Error message (replaces helperText, red styling) |
| `prefix`     | `React.ReactNode`          | –       | Element rendered inside the left edge            |
| `suffix`     | `React.ReactNode`          | –       | Element rendered inside the right edge           |
| `leftIcon`   | `React.ReactNode`          | –       | Icon left of the input text                      |
| `rightIcon`  | `React.ReactNode`          | –       | Icon right of the input text                     |
| `size`       | `"sm"` \| `"md"` \| `"lg"` | `"md"`  | Input height variant                             |
| `disabled`   | `boolean`                  | `false` | Disables the input                               |
| `className`  | `string`                   | –       | Additional CSS classes on the input element      |
| ...props     | `InputHTMLAttributes`      | –       | All standard input HTML props                    |

## Examples

```tsx
// Basic
<Input label="Email" type="email" placeholder="you@example.com" />

// With error
<Input label="Username" error="Username is already taken" value="baole" />

// With icons
<Input leftIcon={<Search size={16} />} placeholder="Search components..." />

// With prefix/suffix
<Input prefix="https://" suffix=".baole.space" placeholder="subdomain" />
```

## Do's and Don'ts

### ✅ Do

- Always provide a `label` for accessibility (or `aria-label` if no visible label)
- Use `error` prop for validation messages — don't render separate error text
- Use `type="email"`, `type="url"`, `type="password"` for semantic clarity

### ❌ Don't

- Don't use placeholder text as a substitute for a label
- Don't nest interactive elements inside `prefix`/`suffix`
