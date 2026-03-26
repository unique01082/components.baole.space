# InputOTP

## Purpose

An OTP (one-time password) input with individual digit slots, built on `input-otp`. Used for verification codes, PIN entry, and two-factor authentication flows.

## When to Use

### ✅ Use InputOTP when:

- Collecting a numeric or alphanumeric verification code
- 2FA / email verification / phone SMS verification
- PIN entry for secure sections

### ❌ Don't use InputOTP when:

- Regular text entry — use `Input`
- Passwords (even short ones) — use `Input type="password"` for better browser/password-manager compatibility

## Installation

```typescript
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@baolq/ui";
```

## Props API

### InputOTP

| Prop         | Type                      | Default | Description                                |
| ------------ | ------------------------- | ------- | ------------------------------------------ |
| `maxLength`  | `number`                  | –       | **Required.** Total number of characters   |
| `value`      | `string`                  | –       | Controlled value                           |
| `onChange`   | `(value: string) => void` | –       | Called when value changes                  |
| `pattern`    | `string`                  | –       | Regex pattern (e.g., `REGEXP_ONLY_DIGITS`) |
| `onComplete` | `(value: string) => void` | –       | Called when all slots are filled           |
| `disabled`   | `boolean`                 | `false` | Disables all slots                         |
| `className`  | `string`                  | –       | Additional CSS classes                     |

## Examples

```tsx
import { REGEXP_ONLY_DIGITS } from 'input-otp'

// 6-digit code (most common)
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} onComplete={verifyCode}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// 4-digit PIN
<InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
  <InputOTPGroup>
    {Array.from({ length: 4 }, (_, i) => <InputOTPSlot key={i} index={i} />)}
  </InputOTPGroup>
</InputOTP>
```

## Do's and Don'ts

### ✅ Do

- Use `onComplete` to automatically submit/verify when all digits are filled
- Use `InputOTPSeparator` for 6-digit codes split into `3-3` groups
- Set `autocomplete="one-time-code"` on mobile for SMS autofill

### ❌ Don't

- Don't require a submit button if you can verify automatically on `onComplete`
- Don't use more than 8 slots — becomes unusable on mobile
