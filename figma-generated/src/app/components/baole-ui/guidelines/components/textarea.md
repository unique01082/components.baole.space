# Textarea

## Purpose

Multi-line text input for collecting longer text content like comments, descriptions, messages, or any text that spans multiple lines.

## When to Use

- **Long-form text** - Comments, feedback, descriptions
- **Messages** - Chat messages, emails, notes
- **Content creation** - Blog posts, documentation
- **Code input** - Code snippets, JSON input

### What NOT to Use Textarea For

- **Single-line text** - Use Input component
- **Rich text editing** - Use a rich text editor library
- **Code editing** - Use a dedicated code editor component

---

## Installation

```typescript
import { Textarea } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `""` | Placeholder text |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Uncontrolled default value |
| `onChange` | `(e: ChangeEvent) => void` | - | Change handler |
| `rows` | `number` | `4` | Number of visible text rows |
| `maxLength` | `number` | - | Maximum character count |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state (red border) |
| `resize` | `"none" \| "both" \| "horizontal" \| "vertical"` | `"vertical"` | Resize behavior |
| `className` | `string` | `""` | Additional CSS classes |

---

## Examples

### Basic Usage

```tsx
<Textarea placeholder="Enter your message..." />
```

### With Label

```tsx
import { Label, Textarea } from '@baole/ui'

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    placeholder="Type your message here..."
    rows={6}
  />
</div>
```

### Controlled Textarea

```tsx
import { useState } from 'react'

function MessageInput() {
  const [value, setValue] = useState('')

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your message..."
    />
  )
}
```

### With Character Count

```tsx
import { useState } from 'react'

function LimitedTextarea() {
  const [value, setValue] = useState('')
  const maxLength = 500

  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Description (max 500 characters)"
        rows={6}
      />
      <p className="text-xs text-[var(--color-text-muted)] text-right">
        {value.length} / {maxLength}
      </p>
    </div>
  )
}
```

### Auto-growing Height

```tsx
import { useRef, useEffect } from 'react'

function AutoGrowTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  }, [])

  return (
    <Textarea
      ref={textareaRef}
      placeholder="Auto-growing textarea..."
      className="resize-none"
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
      }}
    />
  )
}
```

### Error State

```tsx
<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea
    id="bio"
    error={true}
    aria-invalid="true"
    aria-describedby="bio-error"
  />
  <p id="bio-error" className="text-xs text-red-500">
    Bio cannot be empty
  </p>
</div>
```

### Disabled State

```tsx
<Textarea
  placeholder="This field is disabled"
  disabled
  defaultValue="Cannot edit this text"
/>
```

### No Resize

```tsx
<Textarea
  placeholder="Fixed size textarea"
  rows={6}
  resize="none"
/>
```

---

## Do's and Don'ts

### ✅ Do

- Provide clear labels
- Show character count for limited inputs
- Use appropriate `rows` for expected content length
- Show validation errors inline
- Use `maxLength` when there's a limit

```tsx
// ✅ Good - With label and character count
<div className="space-y-2">
  <Label htmlFor="comment">Comment</Label>
  <Textarea
    id="comment"
    placeholder="Share your thoughts..."
    rows={4}
    maxLength={500}
  />
  <p className="text-xs text-[var(--color-text-muted)]">
    {comment.length} / 500 characters
  </p>
</div>
```

### ❌ Don't

- Don't use for single-line input
- Don't forget labels
- Don't make it too small for expected content
- Don't allow unlimited resize without reason

```tsx
// ❌ Bad - No label
<Textarea placeholder="Enter text" />

// ✅ Better
<Label>Description</Label>
<Textarea placeholder="Enter description" />
```

---

## Common Patterns

### Comment Box

```tsx
function CommentBox({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment)
      setComment('')
    }
  }

  return (
    <div className="space-y-3">
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        rows={3}
      />
      <div className="flex justify-between items-center">
        <p className="text-xs text-[var(--color-text-muted)]">
          {comment.length} characters
        </p>
        <Button
          onClick={handleSubmit}
          disabled={!comment.trim()}
          size="sm"
        >
          Post Comment
        </Button>
      </div>
    </div>
  )
}
```

### Feedback Form

```tsx
<Form className="space-y-4">
  <FormItem label="Subject" required>
    <Input placeholder="Brief subject line" />
  </FormItem>
  
  <FormItem label="Feedback" required>
    <Textarea
      placeholder="Tell us what you think..."
      rows={8}
      maxLength={1000}
    />
  </FormItem>
  
  <Button type="submit" variant="gradient">
    Submit Feedback
  </Button>
</Form>
```

---

**Related Components:**
- [Input](./input.md) - Single-line text input
- [Form](./form.md) - Form container with validation
- [Label](./label.md) - Form field labels
