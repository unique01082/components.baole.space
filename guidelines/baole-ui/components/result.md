# Result

## Purpose

Full-screen or section-level status illustration component. Shows an icon, title, subtitle, and optional action buttons to communicate the outcome of a process (success, error, warning, info). Used after multi-step forms, payments, or destructive operations.

## When to Use

### ✅ Use Result when:

- A multi-step process has reached a terminal state (payment complete, submission received)
- An error has occurred that prevents using the current page (404, 403, 500)
- An empty confirmation state is needed (nothing to show yet, action complete)

### ❌ Don't use Result when:

- A brief inline feedback is needed → Use `Alert` or `Message`
- The error is on a specific form field → Use form validation
- A small feedback indicator is sufficient → Use `Badge`, `Toast`, or `Notification`

## Installation

```typescript
import { Result } from "@baolq/ui";
```

## Props API

| Prop        | Type                                                | Default      | Description                         |
| ----------- | --------------------------------------------------- | ------------ | ----------------------------------- |
| `status`    | `"success"` \| `"error"` \| `"warning"` \| `"info"` | **required** | Determines icon and color           |
| `title`     | `string`                                            | **required** | Primary heading                     |
| `subtitle`  | `string`                                            | –            | Supporting description              |
| `icon`      | `React.ReactNode`                                   | –            | Override default status icon        |
| `extra`     | `React.ReactNode`                                   | –            | Action buttons below title/subtitle |
| `className` | `string`                                            | –            | Additional CSS classes              |

## Examples

### Payment Successful

```tsx
<Result
  status="success"
  title="Payment Successful!"
  subtitle="Your order #ORD-2026-001 has been confirmed. A receipt has been sent to your email."
  extra={
    <div className="flex gap-3">
      <Button onClick={() => navigate("/orders")}>View Orders</Button>
      <Button variant="outline" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  }
/>
```

### Submission Error

```tsx
<Result
  status="error"
  title="Submission Failed"
  subtitle="We couldn't process your request. Please check your details and try again."
  extra={<Button onClick={handleRetry}>Try Again</Button>}
/>
```

### 404 Page Not Found

```tsx
<Result
  status="warning"
  title="Page Not Found"
  subtitle="The page you're looking for doesn't exist or has been moved."
  extra={<Button onClick={() => navigate("/")}>Go Home</Button>}
/>
```

### 403 Unauthorized

```tsx
<Result
  status="error"
  title="Access Denied"
  subtitle="You don't have permission to view this page. Contact your administrator."
  extra={
    <div className="flex gap-3">
      <Button onClick={handleRequest}>Request Access</Button>
      <Button variant="ghost" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  }
/>
```

### Info State (Email Verification)

```tsx
<Result
  status="info"
  title="Check Your Inbox"
  subtitle="We sent a verification link to alice@example.com. Click the link to activate your account."
  extra={
    <Button variant="outline" onClick={handleResend}>
      Resend Email
    </Button>
  }
/>
```

## Do's and Don'ts

### ✅ Do

- Always provide `extra` with at least one action button
- Match `status` to the actual outcome (don't use `success` for warnings)
- Keep `subtitle` concise and actionable — tell the user what to do next

### ❌ Don't

- Don't use Result inside a card if you need an inline alert → Use `Alert`
- Don't show Result for transient states that resolve automatically
- Don't omit the `extra` CTA — users need a clear next step

## Accessibility

- Status icon has `aria-hidden={true}` since the title communicates the state
- Title is rendered as `<h2>` for correct heading structure
- CTA buttons have descriptive labels
