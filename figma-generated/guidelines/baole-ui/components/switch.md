# Switch

## Purpose

A toggle switch for binary settings that take immediate effect. Built on Radix UI Switch.

## When to Use

### ✅ Use Switch when:

- Toggling a setting that applies immediately (no form submit needed)
- On/off, enabled/disabled, visible/hidden states
- Notification preferences, feature flags, theme toggle

### ❌ Don't use Switch when:

- The change requires a form submit to apply → Use `Checkbox`
- Multiple related options → Use `CheckboxGroup`

## Installation

```typescript
import { Switch } from "@baole/ui";
```

## Props API

| Prop              | Type                         | Default   | Description                        |
| ----------------- | ---------------------------- | --------- | ---------------------------------- |
| `checked`         | `boolean`                    | –         | Controlled on/off state            |
| `onCheckedChange` | `(checked: boolean) => void` | –         | Called when toggled                |
| `label`           | `string`                     | –         | Label text next to the switch      |
| `description`     | `string`                     | –         | Sub-label description              |
| `size`            | `"sm"` \| `"md"` \| `"lg"`   | `"md"`    | Switch size                        |
| `disabled`        | `boolean`                    | `false`   | Disables interaction               |
| `labelPosition`   | `"left"` \| `"right"`        | `"right"` | Label placement relative to switch |
| `className`       | `string`                     | –         | Additional CSS classes             |

## Examples

```tsx
// Basic
<Switch label="Dark mode" checked={isDark} onCheckedChange={setIsDark} />

// With description
<Switch
  label="Email notifications"
  description="Receive updates about your projects"
  checked={emailEnabled}
  onCheckedChange={setEmailEnabled}
/>

// Label on left (settings page pattern)
<Switch
  label="Auto-save"
  labelPosition="left"
  checked={autoSave}
  onCheckedChange={setAutoSave}
/>
```

## Do's and Don'ts

### ✅ Do

- Apply changes immediately when switched (no confirm needed)
- Use clear action-oriented labels: "Enable X", "Show X"
- Show current state clearly — the switch position IS the current value

### ❌ Don't

- Don't require a Save button for switch changes
- Don't use for destructive irreversible actions — a dangerous toggle needs a confirmation Dialog
