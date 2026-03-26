# Code

## Purpose

Renders inline or block code with syntax styling, monospace font, and optional language label. Used in documentation, changelogs, developer tools, and anywhere code snippets need to be displayed.

## When to Use

### ✅ Use Code when:

- Displaying code snippets in documentation or help content
- Showing configuration values, API responses, or environment variables inline
- Rendering block code with language context

### ❌ Don't use Code when:

- A keyboard key label is needed → Use `Kbd`
- Markdown rendering with code fences is handled externally → Use a markdown library

## Installation

```typescript
import { Code } from "@baolq/ui";
```

## Props API

| Prop        | Type      | Default      | Description                                             |
| ----------- | --------- | ------------ | ------------------------------------------------------- |
| `block`     | `boolean` | `false`      | Renders as a block element (multi-line)                 |
| `language`  | `string`  | –            | Language label shown in block mode (e.g. `tsx`, `bash`) |
| `className` | `string`  | –            | Additional CSS classes                                  |
| `children`  | `string`  | **required** | Code content                                            |

## Examples

### Inline Code

```tsx
<p className="text-white/70">
  Install with <Code>pnpm add @baolq/ui</Code> to get started.
</p>
```

### Block Code

```tsx
<Code block language="tsx">
  {`import { Button } from '@baolq/ui'

export default function App() {
  return <Button>Click me</Button>
}`}
</Code>
```

### Bash Command Block

```tsx
<Code block language="bash">
  {`pnpm add @baolq/ui
pnpm add tailwindcss postcss autoprefixer`}
</Code>
```

### JSON Response

```tsx
<Code block language="json">
  {JSON.stringify(apiResponse, null, 2)}
</Code>
```

### Environment Variable (Inline)

```tsx
<p className="text-white/60 text-sm">
  Set <Code>NEXT_PUBLIC_API_URL</Code> in your <Code>.env.local</Code> file.
</p>
```

### In Documentation

```tsx
<div className="space-y-4">
  <h3 className="text-white font-semibold">Installation</h3>
  <Code block language="bash">
    pnpm add @baolq/ui
  </Code>

  <h3 className="text-white font-semibold">Usage</h3>
  <Code block language="tsx">{`import { Button } from '@baolq/ui'

<Button variant="gradient">Hello World</Button>`}</Code>
</div>
```

## Do's and Don'ts

### ✅ Do

- Use `block` for multi-line code or command sequences
- Set `language` for syntax context (even without syntax highlighting, it aids comprehension)
- Use inline `Code` for values, variable names, and short snippets within prose

### ❌ Don't

- Don't use Code for keyboard shortcuts → Use Kbd
- Don't render extremely long code blocks without a max-height and scroll
- Don't strip indentation manually — pass code as a template literal

## Accessibility

- Inline Code renders as `<code>`; block Code renders as `<pre><code>`
- Screen readers read code output in a monospace announcement
- `language` label is `aria-hidden={true}` (decorative)
