# Select

## Purpose

Dropdown menus for selecting a single option from a list. Provides a space-efficient way to present multiple options.

## When to Use

- **Single selection** - Choose one option from many
- **Space-constrained forms** - Save vertical space
- **Predetermined options** - Fixed list of choices
- **Categories/filters** - Category selection, status filters

### What NOT to Use Select For

- **Multiple selections** - Use Checkbox group or multi-select
- **Free text input** - Use Input or AutoComplete
- **Very short lists** - Use RadioGroup (3-5 options)
- **Very long lists** - Use AutoComplete with search

---

## Installation

```typescript
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@baole/ui'
```

---

## Props API

### Select

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Uncontrolled default value |
| `onValueChange` | `(value: string) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disabled state |

---

## Examples

### Basic Usage

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Controlled Select

```tsx
import { useState } from 'react'

function ControlledSelect() {
  const [value, setValue] = useState('')

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Choose..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### With Label

```tsx
import { Label } from '@baole/ui'

<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
    </SelectContent>
  </Select>
</div>
```

### With Groups

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Backend</SelectLabel>
      <SelectItem value="node">Node.js</SelectItem>
      <SelectItem value="django">Django</SelectItem>
      <SelectItem value="rails">Rails</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Disabled State

```tsx
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

### Disabled Options

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="available">Available Option</SelectItem>
    <SelectItem value="unavailable" disabled>
      Unavailable Option
    </SelectItem>
  </SelectContent>
</Select>
```

### In Form

```tsx
<Form className="space-y-4">
  <FormItem label="Department" required>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select department" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="engineering">Engineering</SelectItem>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="marketing">Marketing</SelectItem>
      </SelectContent>
    </Select>
  </FormItem>
  
  <Button type="submit" variant="gradient">
    Submit
  </Button>
</Form>
```

---

## Do's and Don'ts

### ✅ Do

- Use clear, descriptive labels
- Provide meaningful placeholder text
- Order options logically (alphabetical, frequency, etc.)
- Use SelectGroup for categorization
- Keep option text concise

```tsx
// ✅ Good - Clear structure
<div className="space-y-2">
  <Label>Priority</Label>
  <Select defaultValue="medium">
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="low">Low</SelectItem>
      <SelectItem value="medium">Medium</SelectItem>
      <SelectItem value="high">High</SelectItem>
    </SelectContent>
  </Select>
</div>
```

### ❌ Don't

- Don't use for 2-3 options (use RadioGroup)
- Don't use for very long lists without search
- Don't forget placeholder text
- Don't use unclear option labels

```tsx
// ❌ Bad - Only 2 options
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="yes">Yes</SelectItem>
    <SelectItem value="no">No</SelectItem>
  </SelectContent>
</Select>

// ✅ Better - Use RadioGroup for few options
<RadioGroup defaultValue="yes">
  <RadioGroupItem value="yes" label="Yes" />
  <RadioGroupItem value="no" label="No" />
</RadioGroup>
```

---

## Common Patterns

### Filter Dropdown

```tsx
function StatusFilter() {
  const [status, setStatus] = useState('all')

  return (
    <Select value={status} onValueChange={setStatus}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Statuses</SelectItem>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Form Field

```tsx
<FormItem label="Role" name="role" required>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a role" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Administrator</SelectItem>
      <SelectItem value="editor">Editor</SelectItem>
      <SelectItem value="viewer">Viewer</SelectItem>
    </SelectContent>
  </Select>
</FormItem>
```

---

**Related Components:**
- [RadioGroup](./radio-group.md) - For 2-5 visible options
- [AutoComplete](./auto-complete.md) - For searchable selection
- [Checkbox](./checkbox.md) - For multiple selections
