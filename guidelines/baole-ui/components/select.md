# Select

## Purpose

A styled dropdown select built on Radix UI Select. Supports single-value selection, grouped options, placeholder, and async-friendly loading state.

## When to Use

### ✅ Use Select when:

- User picks exactly one value from 5–20 known options
- Enumerated choices (status, category, country)
- Space-efficient alternative to radio groups with many options

### ❌ Don't use Select when:

- Multiple items can be selected → Use `MultiSelect` or `Checkbox` group
- User types to search/filter options → Use `Combobox` or `AutoComplete`
- Fewer than 4 options → Consider `RadioGroup` for better discoverability
- Options are loaded dynamically and need search → Use `AutoComplete`

## Installation

```typescript
import { Select } from "@baolq/ui";
```

## Props API

| Prop            | Type                       | Default       | Description                                       |
| --------------- | -------------------------- | ------------- | ------------------------------------------------- |
| `options`       | `SelectOption[]`           | –             | Array of `{ label, value, disabled? }`            |
| `groups`        | `SelectGroup[]`            | –             | Array of `{ label, options }` for grouped display |
| `value`         | `string`                   | –             | Controlled selected value                         |
| `onValueChange` | `(value: string) => void`  | –             | Called when selection changes                     |
| `placeholder`   | `string`                   | `"Select..."` | Placeholder text                                  |
| `label`         | `string`                   | –             | Label above the select                            |
| `error`         | `string`                   | –             | Validation error message                          |
| `helperText`    | `string`                   | –             | Helper text below                                 |
| `size`          | `"sm"` \| `"md"` \| `"lg"` | `"md"`        | Trigger height                                    |
| `disabled`      | `boolean`                  | `false`       | Disables the select                               |
| `loading`       | `boolean`                  | `false`       | Shows loading spinner                             |
| `className`     | `string`                   | –             | Additional CSS classes                            |

## Examples

```tsx
// Basic
<Select
  label="Status"
  options={[
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
  ]}
  onValueChange={(v) => setStatus(v)}
/>

// Grouped
<Select
  label="Region"
  groups={[
    { label: 'Asia', options: [{ label: 'Vietnam', value: 'vn' }, { label: 'Japan', value: 'jp' }] },
    { label: 'Europe', options: [{ label: 'Germany', value: 'de' }] },
  ]}
/>

// Controlled
<Select value={value} onValueChange={setValue} options={options} />
```

## Do's and Don'ts

### ✅ Do

- Always include a meaningful `placeholder` for optional fields
- Use `groups` to organize 10+ options into logical categories

### ❌ Don't

- Don't use for boolean toggles — use `Switch` instead
- Don't use more than 3 levels of grouping
