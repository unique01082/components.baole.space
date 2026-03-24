# Input

## Purpose

Text input fields for collecting user data like names, emails, passwords, search queries, and other single-line text.

## When to Use

- **Single-line text entry** - Names, emails, usernames
- **Passwords** - Use `type="password"` with visibility toggle
- **Search** - Use `type="search"` with Search icon
- **Numbers** - Use `type="number"` or InputNumber component
- **URLs/Emails** - Use appropriate `type` for validation

### What NOT to Use Input For

- **Multi-line text** - Use Textarea component
- **Dates** - Use DatePicker component
- **Selecting from options** - Use Select component
- **Numeric with controls** - Use InputNumber component

---

## Installation

```typescript
import { Input } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | HTML input type (text, email, password, etc.) |
| `placeholder` | `string` | `""` | Placeholder text |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Uncontrolled default value |
| `onChange` | `(e: ChangeEvent) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state (red border) |
| `className` | `string` | `""` | Additional CSS classes |
| All native `<input>` props | - | - | `name`, `required`, `pattern`, etc. |

---

## Examples

### Basic Usage

```tsx
<Input placeholder="Enter your name" />
```

### Controlled Input

```tsx
import { useState } from 'react'

function NameInput() {
  const [value, setValue] = useState('')

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your name"
    />
  )
}
```

### With Label

```tsx
import { Label, Input } from '@baole/ui'

<div>
  <Label htmlFor="email">Email Address</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
  />
</div>

// Or use FormItem
import { FormItem } from '@baole/ui'

<FormItem label="Email Address" name="email">
  <Input type="email" placeholder="you@example.com" />
</FormItem>
```

### Email Input

```tsx
<Input
  type="email"
  placeholder="you@example.com"
  autoComplete="email"
/>
```

### Password Input with Toggle

```tsx
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@baole/ui'

function PasswordInput() {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <Input
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2"
        onClick={() => setShow(!show)}
      >
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </Button>
    </div>
  )
}
```

### Search Input with Icon

```tsx
import { Search } from 'lucide-react'

<div className="relative">
  <Search
    size={16}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
  />
  <Input
    type="search"
    placeholder="Search..."
    className="pl-10"
  />
</div>
```

### With Prefix/Suffix

```tsx
// URL input with prefix
<div className="flex items-center">
  <span className="px-3 py-2 bg-[var(--color-bg-glass)] border border-r-0 border-[var(--color-border)] rounded-l-md text-sm text-[var(--color-text-muted)]">
    https://
  </span>
  <Input
    placeholder="example.com"
    className="rounded-l-none"
  />
</div>

// Price input with suffix
<div className="flex items-center">
  <Input
    type="number"
    placeholder="0.00"
    className="rounded-r-none"
  />
  <span className="px-3 py-2 bg-[var(--color-bg-glass)] border border-l-0 border-[var(--color-border)] rounded-r-md text-sm text-[var(--color-text-muted)]">
    USD
  </span>
</div>
```

### Disabled State

```tsx
<Input placeholder="Disabled input" disabled />
```

### Error State

```tsx
<div>
  <Input
    type="email"
    placeholder="Email"
    error={true}
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-xs text-red-500 mt-1">
    Please enter a valid email address
  </p>
</div>
```

### With Helper Text

```tsx
<div className="space-y-1.5">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Choose a username" />
  <p className="text-xs text-[var(--color-text-muted)]">
    Must be 3-20 characters, alphanumeric only
  </p>
</div>
```

### File Input

```tsx
<Input type="file" accept="image/*" />

// Better: Use Upload component for file uploads
import { Upload } from '@baole/ui'

<Upload accept="image/*" />
```

### Number Input

```tsx
<Input
  type="number"
  min={0}
  max={100}
  step={1}
  placeholder="0"
/>

// Better: Use InputNumber component
import { InputNumber } from '@baole/ui'

<InputNumber min={0} max={100} step={1} />
```

---

## Do's and Don'ts

### ✅ Do

- Always pair with a Label or FormItem
- Use appropriate `type` attribute (email, password, tel, url)
- Provide helpful placeholder text
- Show error states with descriptive messages
- Use `autoComplete` for better UX
- Set `required` and `aria-required` for required fields

```tsx
// ✅ Good - Complete form field
<FormItem label="Email" name="email" required>
  <Input
    type="email"
    placeholder="you@example.com"
    autoComplete="email"
    required
  />
</FormItem>

// ✅ Good - Error feedback
<div>
  <Input
    type="email"
    value={email}
    onChange={handleChange}
    error={!!errors.email}
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
  />
  {errors.email && (
    <p id="email-error" className="text-xs text-red-500 mt-1">
      {errors.email}
    </p>
  )}
</div>
```

### ❌ Don't

- Don't use Input without a label
- Don't use vague placeholder text as labels
- Don't forget error messages
- Don't use Input for multi-line text (use Textarea)
- Don't use Input for dates (use DatePicker)

```tsx
// ❌ Bad - No label
<Input placeholder="Email" />

// ✅ Better
<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />

// ❌ Bad - Placeholder as label
<Input placeholder="Enter your email here" />

// ✅ Better - Clear label + concise placeholder
<Label>Email</Label>
<Input placeholder="you@example.com" />
```

---

## Validation Patterns

### Email Validation

```tsx
const [email, setEmail] = useState('')
const [error, setError] = useState('')

const validateEmail = (value: string) => {
  if (!value) {
    setError('Email is required')
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    setError('Invalid email format')
  } else {
    setError('')
  }
}

<Input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onBlur={(e) => validateEmail(e.target.value)}
  error={!!error}
/>
{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
```

### Password Strength

```tsx
const [password, setPassword] = useState('')

const getPasswordStrength = (pwd: string) => {
  if (pwd.length < 6) return 'weak'
  if (pwd.length < 10) return 'medium'
  return 'strong'
}

const strength = getPasswordStrength(password)

<div>
  <Input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <div className="flex gap-1 mt-2">
    <div className={`h-1 flex-1 rounded ${strength !== 'weak' ? 'bg-yellow-500' : 'bg-gray-700'}`} />
    <div className={`h-1 flex-1 rounded ${strength === 'strong' ? 'bg-green-500' : 'bg-gray-700'}`} />
  </div>
  <p className="text-xs text-[var(--color-text-muted)] mt-1">
    Strength: {strength}
  </p>
</div>
```

---

## Accessibility

- Always associate Input with Label using `htmlFor` and `id`
- Use `aria-describedby` for helper text and error messages
- Set `aria-invalid="true"` for error states
- Use `aria-required="true"` for required fields
- Provide `autocomplete` attributes for better UX

```tsx
<div>
  <Label htmlFor="email">Email Address *</Label>
  <Input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby="email-helper email-error"
    autoComplete="email"
  />
  <p id="email-helper" className="text-xs text-[var(--color-text-muted)]">
    We'll never share your email
  </p>
  {hasError && (
    <p id="email-error" className="text-xs text-red-500">
      Invalid email address
    </p>
  )}
</div>
```

---

## Common Patterns

### Login Form

```tsx
<Form onSubmit={handleLogin} className="space-y-4">
  <FormItem label="Email" name="email" required>
    <Input
      type="email"
      placeholder="you@example.com"
      autoComplete="email"
    />
  </FormItem>

  <FormItem label="Password" name="password" required>
    <Input
      type="password"
      placeholder="••••••••"
      autoComplete="current-password"
    />
  </FormItem>

  <Button type="submit" variant="gradient" className="w-full">
    Sign In
  </Button>
</Form>
```

### Search Bar

```tsx
import { Search } from 'lucide-react'

<div className="relative">
  <Search
    size={16}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
  />
  <Input
    type="search"
    placeholder="Search documentation..."
    className="pl-10"
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSearch(e.currentTarget.value)
      }
    }}
  />
</div>
```

---

**Related Components:**
- [Textarea](./textarea.md) - Multi-line text input
- [Select](./select.md) - Dropdown selection
- [InputNumber](./input-number.md) - Numeric input with controls
- [DatePicker](./date-picker.md) - Date selection
- [Form](./form.md) - Form container with validation
