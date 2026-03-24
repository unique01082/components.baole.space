# RadioGroup

## Purpose

Allow users to select exactly one option from a set of mutually exclusive choices. Radio buttons make all options visible and clarify that only one selection is allowed.

## When to Use

- **Single selection required** - Choose one from 2-5 options
- **Mutually exclusive choices** - Options that cannot coexist
- **All options visible** - Show all choices at once
- **Settings and preferences** - Configuration options

### What NOT to Use RadioGroup For

- **Multiple selections** - Use Checkbox group
- **Many options (6+)** - Use Select dropdown
- **Binary choice** - Use Switch for on/off

---

## Installation

```typescript
import { RadioGroup, RadioGroupItem } from '@baole/ui'
```

---

## Props API

### RadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Uncontrolled default |
| `onValueChange` | `(value: string) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field |

### RadioGroupItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Option value |
| `id` | `string` | - | Input ID |
| `disabled` | `boolean` | `false` | Disabled state |

---

## Examples

### Basic RadioGroup

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option3" id="opt3" />
    <Label htmlFor="opt3">Option 3</Label>
  </div>
</RadioGroup>
```

### Controlled RadioGroup

```tsx
import { useState } from 'react'

function ControlledRadio() {
  const [value, setValue] = useState('monthly')

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="monthly" id="monthly" />
        <Label htmlFor="monthly">Monthly ($10/mo)</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="yearly" id="yearly" />
        <Label htmlFor="yearly">Yearly ($100/yr)</Label>
      </div>
    </RadioGroup>
  )
}
```

### With Descriptions

```tsx
<RadioGroup defaultValue="basic">
  <div className="flex items-start gap-2">
    <RadioGroupItem value="basic" id="basic" className="mt-1" />
    <div>
      <Label htmlFor="basic" className="font-medium">Basic Plan</Label>
      <p className="text-sm text-[var(--color-text-muted)]">
        Perfect for individuals. $10/month.
      </p>
    </div>
  </div>
  
  <div className="flex items-start gap-2">
    <RadioGroupItem value="pro" id="pro" className="mt-1" />
    <div>
      <Label htmlFor="pro" className="font-medium">Pro Plan</Label>
      <p className="text-sm text-[var(--color-text-muted)]">
        For teams and businesses. $30/month.
      </p>
    </div>
  </div>
</RadioGroup>
```

### In Cards

```tsx
<RadioGroup defaultValue="card1">
  <div className="space-y-3">
    {[
      { value: 'card1', title: 'Starter', price: '$10', features: '1 user' },
      { value: 'card2', title: 'Team', price: '$30', features: '5 users' },
      { value: 'card3', title: 'Enterprise', price: '$100', features: 'Unlimited' },
    ].map(plan => (
      <label
        key={plan.value}
        htmlFor={plan.value}
        className="flex items-center gap-3 p-4 border border-[var(--color-border)] rounded-lg cursor-pointer hover:border-[var(--color-primary)] transition-colors"
      >
        <RadioGroupItem value={plan.value} id={plan.value} />
        <div className="flex-1">
          <div className="font-medium">{plan.title}</div>
          <div className="text-sm text-[var(--color-text-muted)]">{plan.features}</div>
        </div>
        <div className="font-bold text-lg">{plan.price}</div>
      </label>
    ))}
  </div>
</RadioGroup>
```

### Disabled Options

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Available Option</Label>
  </div>
  <div className="flex items-center gap-2 opacity-50">
    <RadioGroupItem value="option2" id="opt2" disabled />
    <Label htmlFor="opt2">Unavailable Option</Label>
  </div>
</RadioGroup>
```

### Horizontal Layout

```tsx
<RadioGroup defaultValue="left" className="flex gap-4">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="left" id="left" />
    <Label htmlFor="left">Left</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="center" id="center" />
    <Label htmlFor="center">Center</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="right" id="right" />
    <Label htmlFor="right">Right</Label>
  </div>
</RadioGroup>
```

---

## Do's and Don'ts

### ✅ Do

- Use for 2-5 mutually exclusive options
- Always provide labels
- Show all options at once
- Use for settings and preferences
- Provide default selection when appropriate

```tsx
// ✅ Good - Clear labels and default
<RadioGroup defaultValue="email">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="email" id="email" />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sms" id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
</RadioGroup>
```

### ❌ Don't

- Don't use for many options (use Select)
- Don't use for multiple selections (use Checkbox)
- Don't use for binary on/off (use Switch)
- Don't forget labels

```tsx
// ❌ Bad - Too many options
<RadioGroup>
  <RadioGroupItem value="1" />
  <RadioGroupItem value="2" />
  {/* ... 20 more options ... */}
</RadioGroup>

// ✅ Better - Use Select for many options
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  <SelectContent>
    {/* Many options */}
  </SelectContent>
</Select>
```

---

## Common Patterns

### Pricing Plans

```tsx
function PricingSelector() {
  const [plan, setPlan] = useState('monthly')

  return (
    <RadioGroup value={plan} onValueChange={setPlan}>
      <div className="space-y-3">
        <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-[var(--color-primary)]">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="monthly" id="monthly" />
            <div>
              <Label htmlFor="monthly" className="font-medium cursor-pointer">
                Monthly
              </Label>
              <p className="text-sm text-[var(--color-text-muted)]">
                Pay month by month
              </p>
            </div>
          </div>
          <div className="text-xl font-bold">$10</div>
        </label>

        <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-[var(--color-primary)]">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="yearly" id="yearly" />
            <div>
              <Label htmlFor="yearly" className="font-medium cursor-pointer">
                Yearly
              </Label>
              <p className="text-sm text-[var(--color-text-muted)]">
                Save 20% with annual billing
              </p>
            </div>
          </div>
          <div className="text-xl font-bold">
            $96 <span className="text-sm text-[var(--color-text-muted)]">/year</span>
          </div>
        </label>
      </div>
    </RadioGroup>
  )
}
```

### Shipping Method

```tsx
<FormItem label="Shipping Method" required>
  <RadioGroup defaultValue="standard">
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 border rounded">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="standard" id="standard" />
          <Label htmlFor="standard">Standard (5-7 days)</Label>
        </div>
        <span className="font-medium">Free</span>
      </div>
      
      <div className="flex items-center justify-between p-3 border rounded">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="express" id="express" />
          <Label htmlFor="express">Express (2-3 days)</Label>
        </div>
        <span className="font-medium">$10</span>
      </div>
      
      <div className="flex items-center justify-between p-3 border rounded">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="overnight" id="overnight" />
          <Label htmlFor="overnight">Overnight</Label>
        </div>
        <span className="font-medium">$25</span>
      </div>
    </div>
  </RadioGroup>
</FormItem>
```

---

## Accessibility

- Always associate labels with radio buttons using `htmlFor` and `id`
- Use `aria-describedby` for additional descriptions
- Set `required` when selection is mandatory
- Ensure keyboard navigation works (arrow keys)
- Provide clear, descriptive labels

```tsx
<RadioGroup required>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="opt1" aria-describedby="opt1-desc" />
    <div>
      <Label htmlFor="opt1">Option 1</Label>
      <p id="opt1-desc" className="text-xs text-[var(--color-text-muted)]">
        Description of option 1
      </p>
    </div>
  </div>
</RadioGroup>
```

---

**Related Components:**
- [Checkbox](./checkbox.md) - For multiple selections
- [Switch](./switch.md) - For on/off toggles
- [Select](./select.md) - For dropdown selection
- [ToggleGroup](./toggle-group.md) - For button-style selection
