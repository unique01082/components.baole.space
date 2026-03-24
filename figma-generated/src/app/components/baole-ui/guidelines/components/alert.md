# Alert

## Purpose

Display important inline messages to provide contextual feedback about system state, user actions, or warnings.

## When to Use

- **Informational messages** - General information, tips, announcements
- **Success confirmations** - Successful operations (visible on page)
- **Warnings** - Important cautionary information
- **Errors** - Problem descriptions with suggested actions
- **Persistent feedback** - Messages that stay visible

### What NOT to Use Alert For

- **Temporary notifications** - Use Toast
- **Critical decisions** - Use Dialog or AlertDialog
- **Form validation** - Use inline field errors
- **Loading states** - Use Spinner or Progress

---

## Installation

```typescript
import { Alert, AlertTitle, AlertDescription } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "info" \| "success" \| "warning" \| "error"` | `"default"` | Visual variant |
| `className` | `string` | `""` | Additional CSS classes |

---

## Examples

### Basic Alert

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
```

### Info Alert

```tsx
import { Info } from 'lucide-react'

<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>
```

### Success Alert

```tsx
import { CheckCircle2 } from 'lucide-react'

<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>
```

### Warning Alert

```tsx
import { AlertTriangle } from 'lucide-react'

<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your session will expire in 5 minutes. Please save your work.
  </AlertDescription>
</Alert>
```

### Error Alert

```tsx
import { XCircle } from 'lucide-react'

<Alert variant="error">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Failed to save changes. Please try again or contact support.
  </AlertDescription>
</Alert>
```

### Without Title

```tsx
<Alert variant="info">
  <AlertDescription>
    Quick tip: Press Ctrl+K to open the command palette.
  </AlertDescription>
</Alert>
```

### With Actions

```tsx
import { X } from 'lucide-react'

function DismissibleAlert() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Storage Almost Full</AlertTitle>
      <AlertDescription>
        You're using 95% of your storage. Consider upgrading your plan.
      </AlertDescription>
      <div className="flex gap-2 mt-3">
        <Button size="sm" variant="outline">
          Upgrade Now
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setVisible(false)}
        >
          Dismiss
        </Button>
      </div>
    </Alert>
  )
}
```

### With Link

```tsx
<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>New Feature Available</AlertTitle>
  <AlertDescription>
    We've launched a new analytics dashboard.{' '}
    <a
      href="/analytics"
      className="font-medium underline underline-offset-4 hover:text-[var(--color-primary)]"
    >
      Check it out
    </a>
  </AlertDescription>
</Alert>
```

---

## Do's and Don'ts

### ✅ Do

- Use appropriate variant for message type
- Include clear, actionable titles
- Provide helpful descriptions
- Use icons to reinforce message type
- Keep messages concise

```tsx
// ✅ Good - Clear and actionable
<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Payment Failed</AlertTitle>
  <AlertDescription>
    Your payment could not be processed. Please update your payment method.
  </AlertDescription>
  <Button size="sm" variant="outline" className="mt-3">
    Update Payment Method
  </Button>
</Alert>
```

### ❌ Don't

- Don't use for temporary notifications (use Toast)
- Don't use for critical confirmations (use Dialog)
- Don't make alerts too verbose
- Don't forget icons for non-default variants

```tsx
// ❌ Bad - Too much text, no icon
<Alert variant="error">
  <AlertDescription>
    An error occurred while processing your request. This could be due to a number of reasons including...
  </AlertDescription>
</Alert>

// ✅ Better - Concise with icon
<Alert variant="error">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Request Failed</AlertTitle>
  <AlertDescription>
    Please try again or contact support if the problem persists.
  </AlertDescription>
</Alert>
```

---

## Common Patterns

### Form Error Summary

```tsx
{errors.length > 0 && (
  <Alert variant="error">
    <XCircle className="h-4 w-4" />
    <AlertTitle>Please fix the following errors:</AlertTitle>
    <AlertDescription>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </AlertDescription>
  </Alert>
)}
```

### Page Banner

```tsx
<Alert variant="info" className="mb-6">
  <Info className="h-4 w-4" />
  <AlertDescription>
    🎉 Special offer: Get 20% off all plans this month!{' '}
    <a href="/pricing" className="font-medium underline">
      View Plans
    </a>
  </AlertDescription>
</Alert>
```

### System Status

```tsx
function SystemStatus() {
  const { isOnline } = useNetworkStatus()

  if (isOnline) return null

  return (
    <Alert variant="warning" className="fixed bottom-4 right-4 w-96">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>You're Offline</AlertTitle>
      <AlertDescription>
        Changes will be saved when you reconnect.
      </AlertDescription>
    </Alert>
  )
}
```

---

**Related Components:**
- [Toast](./toast.md) - Temporary notifications
- [Dialog](./dialog.md) - Modal alerts
- [Card](./card.md) - General content containers
