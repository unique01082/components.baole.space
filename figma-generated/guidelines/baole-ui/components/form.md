# Form

## Purpose

A form wrapper that integrates with `react-hook-form`, providing `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, and `FormMessage` sub-components for consistent form layout with automatic validation message display.

## When to Use

### ✅ Use Form when:

- Building any `react-hook-form`-powered form
- You need consistent label + input + error layout
- Multiple form fields that share validation context

### ❌ Don't use Form when:

- Single standalone field — just use `Input` with the `error` prop directly
- You're not using `react-hook-form`

## Installation

```typescript
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@baole/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
```

## Pattern

```tsx
const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function LoginForm() {
  const form = useForm({ resolver: zodResolver(schema) });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" loading={form.formState.isSubmitting}>
          Sign in
        </Button>
      </form>
    </Form>
  );
}
```

## Sub-component API

| Component           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `<Form>`            | Wraps `FormProvider` from react-hook-form                    |
| `<FormField>`       | Connects a form field to `control`                           |
| `<FormItem>`        | Layout wrapper — `flex flex-col gap-1.5`                     |
| `<FormLabel>`       | Styled label that turns red on error                         |
| `<FormControl>`     | Passes `id`, `aria-describedby`, `aria-invalid` to child     |
| `<FormDescription>` | Muted helper text below the control                          |
| `<FormMessage>`     | Renders error message from form state (hidden when no error) |

## Do's and Don'ts

### ✅ Do

- Always pair `<FormControl>` with exactly one form input component
- Use `zodResolver` for type-safe schema validation
- Show both `<FormDescription>` (always) and `<FormMessage>` (on error)

### ❌ Don't

- Don't put multiple inputs inside one `<FormControl>` — each needs its own `FormField`
- Don't manually render error messages — `<FormMessage>` handles that
