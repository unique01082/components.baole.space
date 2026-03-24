# Checkbox

## Purpose

Allow users to select one or multiple options from a set. Checkboxes represent binary (on/off) states and can be used independently or in groups.

## When to Use

- **Multiple selections** - Select multiple items from a list
- **Accept terms** - Agree to terms and conditions
- **Toggle features** - Enable/disable features in settings
- **Task lists** - Todo items, completion status

### What NOT to Use Checkbox For

- **Single exclusive choice** - Use RadioGroup
- **Binary toggle (on/off)** - Use Switch
- **Action trigger** - Use Button

---

## Installation

```typescript
import { Checkbox } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| "indeterminate"` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled default state |
| `onCheckedChange` | `(checked: boolean) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field |
| `name` | `string` | - | Form field name |
| `value` | `string` | - | Form field value |

---

## Examples

### Basic Usage

```tsx
<Checkbox />
```

### With Label

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

### Controlled Checkbox

```tsx
import { useState } from 'react'

function ControlledCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Label>Checked: {checked ? 'Yes' : 'No'}</Label>
    </div>
  )
}
```

### Checkbox Group

```tsx
function CheckboxGroup() {
  const [selected, setSelected] = useState<string[]>([])

  const options = [
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'angular', label: 'Angular' },
  ]

  const toggleOption = (id: string) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-2">
      {options.map(option => (
        <div key={option.id} className="flex items-center gap-2">
          <Checkbox
            id={option.id}
            checked={selected.includes(option.id)}
            onCheckedChange={() => toggleOption(option.id)}
          />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </div>
  )
}
```

### Indeterminate State (Select All)

```tsx
function SelectAllCheckbox() {
  const [items, setItems] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ])

  const allChecked = items.every(item => item.checked)
  const someChecked = items.some(item => item.checked)
  const indeterminate = someChecked && !allChecked

  const toggleAll = () => {
    setItems(items.map(item => ({ ...item, checked: !allChecked })))
  }

  const toggleItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 border-b pb-2">
        <Checkbox
          checked={allChecked ? true : indeterminate ? 'indeterminate' : false}
          onCheckedChange={toggleAll}
        />
        <Label className="font-medium">Select All</Label>
      </div>
      
      {items.map(item => (
        <div key={item.id} className="flex items-center gap-2 ml-6">
          <Checkbox
            checked={item.checked}
            onCheckedChange={() => toggleItem(item.id)}
          />
          <Label>Item {item.id}</Label>
        </div>
      ))}
    </div>
  )
}
```

### Disabled State

```tsx
<div className="space-y-2">
  <div className="flex items-center gap-2">
    <Checkbox disabled />
    <Label className="text-[var(--color-text-disabled)]">Disabled unchecked</Label>
  </div>
  
  <div className="flex items-center gap-2">
    <Checkbox checked disabled />
    <Label className="text-[var(--color-text-disabled)]">Disabled checked</Label>
  </div>
</div>
```

---

## Do's and Don'ts

### ✅ Do

- Always provide clear labels
- Use for multiple independent choices
- Show indeterminate state for partial selection
- Group related checkboxes together

```tsx
// ✅ Good
<div className="space-y-3">
  <Label className="font-medium">Notifications</Label>
  <div className="space-y-2 ml-2">
    <div className="flex items-center gap-2">
      <Checkbox id="email" />
      <Label htmlFor="email">Email notifications</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="push" />
      <Label htmlFor="push">Push notifications</Label>
    </div>
  </div>
</div>
```

### ❌ Don't

- Don't use for mutually exclusive options (use RadioGroup)
- Don't use for on/off settings (use Switch)
- Don't forget labels

```tsx
// ❌ Bad - Mutually exclusive (use RadioGroup)
<Checkbox /> Option A
<Checkbox /> Option B  // Only one should be selected

// ✅ Better
<RadioGroup>
  <RadioGroupItem value="a" label="Option A" />
  <RadioGroupItem value="b" label="Option B" />
</RadioGroup>
```

---

## Common Patterns

### Terms Agreement

```tsx
<div className="flex items-start gap-2">
  <Checkbox id="terms" required />
  <Label htmlFor="terms" className="text-sm">
    I agree to the{' '}
    <a href="/terms" className="text-[var(--color-primary)] underline">
      Terms of Service
    </a>
    {' '}and{' '}
    <a href="/privacy" className="text-[var(--color-primary)] underline">
      Privacy Policy
    </a>
  </Label>
</div>
```

### Settings Panel

```tsx
<Card>
  <CardHeader>
    <CardTitle>Email Preferences</CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    <div className="flex items-center gap-2">
      <Checkbox id="marketing" defaultChecked />
      <Label htmlFor="marketing">Marketing emails</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="updates" defaultChecked />
      <Label htmlFor="updates">Product updates</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">Weekly newsletter</Label>
    </div>
  </CardContent>
</Card>
```

---

**Related Components:**
- [RadioGroup](./radio-group.md) - For single selection
- [Switch](./switch.md) - For on/off toggle
- [Select](./select.md) - For dropdown selection
