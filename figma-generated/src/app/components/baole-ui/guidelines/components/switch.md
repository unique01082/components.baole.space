# Switch

## Purpose

Toggle component for binary on/off states. Switches provide immediate feedback and are commonly used for settings and preferences.

## When to Use

- **Enable/disable features** - Turn features on or off
- **Settings** - User preferences, account settings
- **Immediate effect** - Changes take effect immediately
- **Binary states** - On/off, enabled/disabled, active/inactive

### What NOT to Use Switch For

- **Multiple options** - Use RadioGroup or Select
- **Checkboxes in lists** - Use Checkbox
- **Actions requiring confirmation** - Use Button with Dialog

---

## Installation

```typescript
import { Switch } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled default state |
| `onCheckedChange` | `(checked: boolean) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field |
| `name` | `string` | - | Form field name |

---

## Examples

### Basic Usage

```tsx
<Switch />
```

### With Label

```tsx
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

### Controlled Switch

```tsx
import { useState } from 'react'

function ControlledSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      <Label>Notifications: {enabled ? 'On' : 'Off'}</Label>
    </div>
  )
}
```

### Settings Panel

```tsx
function SettingsPanel() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    analytics: false,
  })

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch
            id="dark-mode"
            checked={settings.darkMode}
            onCheckedChange={(checked) => updateSetting('darkMode', checked)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch
            id="notifications"
            checked={settings.notifications}
            onCheckedChange={(checked) => updateSetting('notifications', checked)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="analytics">Analytics</Label>
          <Switch
            id="analytics"
            checked={settings.analytics}
            onCheckedChange={(checked) => updateSetting('analytics', checked)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
```

### With Description

```tsx
<div className="flex items-center justify-between">
  <div className="space-y-1">
    <Label htmlFor="marketing">Marketing Emails</Label>
    <p className="text-sm text-[var(--color-text-muted)]">
      Receive emails about new products and features
    </p>
  </div>
  <Switch id="marketing" />
</div>
```

### Disabled State

```tsx
<div className="space-y-3">
  <div className="flex items-center gap-2">
    <Switch disabled />
    <Label className="text-[var(--color-text-disabled)]">Disabled off</Label>
  </div>
  
  <div className="flex items-center gap-2">
    <Switch checked disabled />
    <Label className="text-[var(--color-text-disabled)]">Disabled on</Label>
  </div>
</div>
```

### With Toast Feedback

```tsx
import { toast } from 'sonner'

function NotificationSwitch() {
  const [enabled, setEnabled] = useState(false)

  const handleChange = (checked: boolean) => {
    setEnabled(checked)
    toast.success(
      checked ? 'Notifications enabled' : 'Notifications disabled'
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={handleChange} />
      <Label>Push Notifications</Label>
    </div>
  )
}
```

---

## Do's and Don'ts

### ✅ Do

- Use for immediate on/off toggles
- Provide clear labels
- Show current state visually
- Use in settings and preferences
- Apply changes immediately

```tsx
// ✅ Good - Clear label and immediate effect
<div className="flex items-center justify-between">
  <div>
    <Label>Dark Mode</Label>
    <p className="text-xs text-[var(--color-text-muted)]">
      Switch to dark theme
    </p>
  </div>
  <Switch
    checked={isDark}
    onCheckedChange={setIsDark}
  />
</div>
```

### ❌ Don't

- Don't use for actions that need confirmation
- Don't use for multiple options
- Don't forget labels
- Don't use if changes aren't immediate

```tsx
// ❌ Bad - Destructive action without confirmation
<Switch
  onCheckedChange={(checked) => {
    if (checked) deleteAccount()  // Dangerous!
  }}
/>

// ✅ Better - Use Button with Dialog
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline" className="text-red-500">
      Delete Account
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    {/* Confirmation dialog */}
  </AlertDialogContent>
</AlertDialog>
```

---

## Common Patterns

### Feature Toggle

```tsx
function FeatureToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Apply feature flag
    if (enabled) {
      enableFeature()
    } else {
      disableFeature()
    }
  }, [enabled])

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      <Label>Enable Beta Features</Label>
    </div>
  )
}
```

### Theme Switcher

```tsx
import { useTheme } from '@baole/ui'

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
      <Label>Dark Mode</Label>
    </div>
  )
}
```

### Settings List

```tsx
<div className="space-y-4">
  {[
    { id: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
    { id: 'push', label: 'Push Notifications', description: 'Receive push notifications' },
    { id: 'sms', label: 'SMS Alerts', description: 'Receive important alerts via SMS' },
  ].map(setting => (
    <div key={setting.id} className="flex items-center justify-between">
      <div className="space-y-1">
        <Label htmlFor={setting.id}>{setting.label}</Label>
        <p className="text-sm text-[var(--color-text-muted)]">
          {setting.description}
        </p>
      </div>
      <Switch id={setting.id} />
    </div>
  ))}
</div>
```

---

**Related Components:**
- [Checkbox](./checkbox.md) - For multiple selections
- [RadioGroup](./radio-group.md) - For single selection
- [Toggle](./toggle.md) - For button-style toggles
