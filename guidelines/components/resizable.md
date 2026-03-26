# Resizable

## Purpose

Draggable split panes for building adjustable multi-panel layouts. Users can drag handles to resize panels. Built on `react-resizable-panels`.

## When to Use

### ✅ Use Resizable when:

- Building IDE-like or editor layouts (file tree + editor + preview)
- Side-by-side comparison views where users control the split
- Dashboard layouts where panel proportions need user customization

### ❌ Don't use Resizable when:

- Layout is fixed — use CSS Grid or Flexbox
- Mobile-only — drag handles are not usable on touch without explicit support
- You only need collapsing (no dragging) → Use Collapsible or Sidebar

## Installation

```typescript
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@baolq/ui";
```

## Props API

### ResizablePanelGroup

| Prop        | Type                           | Default        | Description                             |
| ----------- | ------------------------------ | -------------- | --------------------------------------- |
| `direction` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Split direction                         |
| `className` | `string`                       | –              | Applied to the group container          |
| `onLayout`  | `(sizes: number[]) => void`    | –              | Called on resize with panel percentages |

### ResizablePanel

| Prop          | Type      | Default | Description                        |
| ------------- | --------- | ------- | ---------------------------------- |
| `defaultSize` | `number`  | –       | Initial size as percentage (0–100) |
| `minSize`     | `number`  | `0`     | Minimum size percentage            |
| `maxSize`     | `number`  | `100`   | Maximum size percentage            |
| `collapsible` | `boolean` | `false` | Allow collapsing to 0              |
| `className`   | `string`  | –       | Additional CSS classes             |

### ResizableHandle

| Prop         | Type      | Default | Description                           |
| ------------ | --------- | ------- | ------------------------------------- |
| `withHandle` | `boolean` | `false` | Shows a visible drag handle indicator |
| `className`  | `string`  | –       | Additional CSS classes                |

## Examples

### Horizontal Split

```tsx
<ResizablePanelGroup direction="horizontal" className="h-screen">
  <ResizablePanel defaultSize={25} minSize={15}>
    <div className="h-full p-4 border-r border-white/10">
      <p className="text-white/70">Sidebar</p>
    </div>
  </ResizablePanel>

  <ResizableHandle withHandle />

  <ResizablePanel defaultSize={75}>
    <div className="h-full p-4">
      <p className="text-white">Main Content</p>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Three-Panel IDE Layout

```tsx
<ResizablePanelGroup direction="horizontal" className="h-screen">
  <ResizablePanel defaultSize={20} minSize={10}>
    {/* File Explorer */}
    <ScrollArea className="h-full p-2">
      <FileTree />
    </ScrollArea>
  </ResizablePanel>

  <ResizableHandle withHandle />

  <ResizablePanel defaultSize={50}>
    {/* Code Editor */}
    <Editor />
  </ResizablePanel>

  <ResizableHandle withHandle />

  <ResizablePanel defaultSize={30} minSize={15}>
    {/* Preview */}
    <Preview />
  </ResizablePanel>
</ResizablePanelGroup>
```

### Vertical Split

```tsx
<ResizablePanelGroup direction="vertical" className="h-[600px]">
  <ResizablePanel defaultSize={60}>
    <div className="h-full p-4">Editor</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={40} minSize={20}>
    <div className="h-full p-4">Terminal</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

## Do's and Don'ts

### ✅ Do

- Always set a bounded height/width on `ResizablePanelGroup`
- Set `minSize` on panels to prevent collapsing too small
- Use `withHandle` to make the drag handle visually obvious

### ❌ Don't

- Don't use Resizable for decorative layouts — only use when user control adds value
- Don't set `defaultSize` values that don't sum to 100 — panels will misalign
- Don't use on mobile without testing touch drag behavior

## Accessibility

- Handle elements have `role="separator"` and proper ARIA attributes
- Keyboard-accessible: focus the handle and use arrow keys to resize
