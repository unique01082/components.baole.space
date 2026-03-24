# Color Tokens — @baole/ui

The @baole/ui color system is built on a **dark-first** philosophy with **glassmorphism effects** and **purple-fuchsia-pink gradient accents** for the baole.space ecosystem.

---

## Design Philosophy

1. **Dark-first**: Optimized for dark mode with high contrast
2. **Glassmorphism**: Translucent surfaces with backdrop blur
3. **Gradient Accents**: Purple → Fuchsia → Pink for primary actions
4. **Semantic Colors**: Clear success/warning/error states
5. **Accessibility**: WCAG 2.1 AA contrast ratios

---

## Background Hierarchy

Use this decision tree to choose the right background:

```
Need a surface?
├─ Page background → var(--color-bg) [#0a0a0a]
├─ Card/panel → var(--color-bg-glass) + backdrop-blur-[var(--blur-glass)]
├─ Input/field → var(--color-bg-input) [slightly lighter than bg]
├─ Elevated surface → var(--color-bg-elevated) [#1a1a1a]
└─ Overlay (modal/popover) → var(--color-popover) + border-white/10
```

### Background Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a0a` | Page/app background |
| `--color-bg-secondary` | `#111111` | Secondary background |
| `--color-bg-elevated` | `#1a1a1a` | Elevated cards, modals |
| `--color-bg-glass` | `rgba(255,255,255,0.05)` | **Glassmorphic surfaces** (always use with backdrop-blur) |
| `--color-bg-glass-hover` | `rgba(255,255,255,0.08)` | Hover state for glass elements |
| `--color-bg-input` | `rgba(255,255,255,0.03)` | Input fields, textareas |
| `--color-bg-overlay` | `rgba(0,0,0,0.7)` | Modal/dialog backdrop |
| `--color-popover` | `#1a1a1a` | Popover/dropdown background |

### Example Usage

```tsx
// Card with glassmorphism
<div className="
  bg-[var(--color-bg-glass)]
  backdrop-blur-[var(--blur-glass)]
  border border-[var(--color-border)]
">

// Input field
<input className="
  bg-[var(--color-bg-input)]
  border border-[var(--color-border)]
" />

// Modal overlay
<div className="
  fixed inset-0
  bg-[var(--color-bg-overlay)]
  backdrop-blur-[var(--blur-heavy)]
" />
```

---

## Text Hierarchy

Choose text color based on content importance:

```
Primary content → var(--color-text) [#ffffff]
Secondary/helper text → var(--color-text-secondary) [white/85%]
Placeholder/metadata → var(--color-text-muted) [white/60%]
Disabled text → var(--color-text-disabled) [white/30%]
```

### Text Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text` | `#ffffff` | Primary headings, body text |
| `--color-text-secondary` | `rgba(255,255,255,0.85)` | Subheadings, labels, descriptions |
| `--color-text-muted` | `rgba(255,255,255,0.6)` | Placeholders, timestamps, metadata |
| `--color-text-placeholder` | `rgba(255,255,255,0.4)` | Input placeholders |
| `--color-text-disabled` | `rgba(255,255,255,0.3)` | Disabled state text |

### Example Usage

```tsx
// Heading
<h1 className="text-[var(--color-text)]">Main Title</h1>

// Secondary text
<p className="text-[var(--color-text-secondary)]">Description</p>

// Metadata
<span className="text-xs text-[var(--color-text-muted)]">2 hours ago</span>

// Placeholder
<input placeholder="Enter text..." className="
  placeholder:text-[var(--color-text-placeholder)]
" />
```

---

## Border Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-border` | `rgba(255,255,255,0.1)` | Default borders |
| `--color-border-strong` | `rgba(255,255,255,0.2)` | Emphasized borders |

### Example Usage

```tsx
// Card border
<div className="border border-[var(--color-border)]">

// Strong separator
<hr className="border-[var(--color-border-strong)]" />

// Hover effect
<button className="
  border border-[var(--color-border)]
  hover:border-[var(--color-border-strong)]
">
```

---

## Primary Brand Color

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#a855f7` (purple-500) | Primary actions, links, focus states |

```tsx
// Primary button
<button className="bg-[var(--color-primary)] text-white">

// Link
<a className="text-[var(--color-primary)] hover:underline">

// Focus ring
<input className="focus:ring-2 focus:ring-[var(--color-primary)]" />
```

---

## Gradient System

### Gradient Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--gradient-primary` | `linear-gradient(135deg, #a855f7 0%, #ec4899 100%)` | Primary CTA buttons, hero sections |
| `--gradient-secondary` | `linear-gradient(135deg, #ec4899 0%, #f472b6 100%)` | Secondary accents |
| `--gradient-success` | `linear-gradient(135deg, #10b981 0%, #34d399 100%)` | Success states |
| `--gradient-warning` | `linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)` | Warning states |
| `--gradient-error` | `linear-gradient(135deg, #ef4444 0%, #f87171 100%)` | Error states |
| `--gradient-info` | `linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)` | Info states |

### Gradient Usage Patterns

#### 1. Background Gradient (Buttons)

```tsx
<button className="bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]">
  Primary CTA
</button>

// Using CSS variable
<button className="bg-[image:var(--gradient-primary)]">
  Primary CTA
</button>
```

#### 2. Text Gradient

```tsx
<h1 className="
  bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400
  bg-clip-text text-transparent
">
  Gradient Heading
</h1>

// Or use the utility class from index.css
<h1 className="gradient-text">
  Gradient Heading
</h1>
```

#### 3. Border Gradient (Pseudo-element)

```tsx
<div className="relative p-6 rounded-lg overflow-hidden">
  <div className="
    absolute inset-0 -z-10
    bg-gradient-to-r from-purple-500 to-pink-500
    opacity-20 blur-xl
  " />
  Card content with gradient glow
</div>
```

---

## Semantic Colors

Use these for Alert, Badge, Input validation states:

### Success

| Usage | Background | Border | Text |
|-------|-----------|---------|------|
| Alert | `bg-green-500/20` | `border-green-500/50` | `text-green-500` |
| Badge | `bg-green-500` | - | `text-white` |
| Input valid | `border-green-500` | - | - |

```tsx
<Alert variant="success">
  <AlertCircle className="text-green-500" />
  Success message
</Alert>

<Badge variant="success">Active</Badge>

<Input className="border-green-500" />
```

### Warning

| Usage | Background | Border | Text |
|-------|-----------|---------|------|
| Alert | `bg-yellow-500/20` | `border-yellow-500/50` | `text-yellow-500` |
| Badge | `bg-yellow-500` | - | `text-black` |

### Error

| Usage | Background | Border | Text |
|-------|-----------|---------|------|
| Alert | `bg-red-500/20` | `border-red-500/50` | `text-red-500` |
| Badge | `bg-red-500` | - | `text-white` |
| Input error | `border-red-500` | - | - |

### Info

| Usage | Background | Border | Text |
|-------|-----------|---------|------|
| Alert | `bg-blue-500/20` | `border-blue-500/50` | `text-blue-500` |
| Badge | `bg-blue-500` | - | `text-white` |

---

## Shadow & Glow Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-glass` | `0 8px 32px rgba(0,0,0,0.3)` | Glass surfaces, cards |
| `--shadow-elevated` | `0 12px 48px rgba(0,0,0,0.5)` | Modals, popovers |
| `--glow-primary` | `0 0 20px rgba(168,85,247,0.3)` | Primary button hover/focus |
| `--glow-secondary` | `0 0 20px rgba(236,72,153,0.3)` | Secondary accents |

### Example Usage

```tsx
// Card with glass shadow
<div className="shadow-[var(--shadow-glass)]">

// Modal with elevated shadow
<div className="shadow-[var(--shadow-elevated)]">

// Button with glow on hover
<button className="
  bg-[var(--color-primary)]
  hover:shadow-[var(--glow-primary)]
  transition-shadow
">
```

---

## Blur Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--blur-glass` | `8px` | Standard glassmorphism |
| `--blur-heavy` | `16px` | Heavy blur for overlays |
| `--blur-light` | `4px` | Subtle blur |

```tsx
<div className="backdrop-blur-[var(--blur-glass)]">

<div className="backdrop-blur-[var(--blur-heavy)]">
```

---

## ✅ Correct / ❌ Wrong Examples

### Background Selection

```tsx
// ✅ CORRECT - Glass card with blur
<Card className="
  bg-[var(--color-bg-glass)]
  backdrop-blur-[var(--blur-glass)]
  border border-[var(--color-border)]
">

// ❌ WRONG - Missing backdrop-blur with glass bg
<Card className="bg-[var(--color-bg-glass)] border">

// ❌ WRONG - Hardcoded color
<Card className="bg-gray-900 border">
```

### Text Hierarchy

```tsx
// ✅ CORRECT - Proper hierarchy
<div>
  <h2 className="text-[var(--color-text)]">Heading</h2>
  <p className="text-[var(--color-text-secondary)]">Description</p>
  <span className="text-[var(--color-text-muted)]">Metadata</span>
</div>

// ❌ WRONG - All same color
<div>
  <h2 className="text-white">Heading</h2>
  <p className="text-white">Description</p>
  <span className="text-white">Metadata</span>
</div>
```

### Gradient Usage

```tsx
// ✅ CORRECT - Gradient button
<Button className="
  bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]
  text-white
  shadow-[var(--glow-primary)]
">

// ❌ WRONG - Gradient without shadow/glow
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">

// ✅ CORRECT - Text gradient
<h1 className="
  bg-gradient-to-r from-purple-400 to-pink-400
  bg-clip-text text-transparent
">

// ❌ WRONG - Gradient on text color (doesn't work)
<h1 className="text-gradient-to-r from-purple-400 to-pink-400">
```

---

## Quick Reference

Most common patterns to copy-paste:

```tsx
// Glass surface
"bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)] border border-[var(--color-border)]"

// Elevated card
"bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-glass)]"

// Gradient button
"bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899] text-white shadow-[var(--glow-primary)]"

// Input field
"bg-[var(--color-bg-input)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-placeholder)]"

// Modal backdrop
"fixed inset-0 bg-[var(--color-bg-overlay)] backdrop-blur-[var(--blur-heavy)]"
```

---

**Next:** Read [typography.md](./typography.md)
