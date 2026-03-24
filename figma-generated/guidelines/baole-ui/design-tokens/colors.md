# Color Tokens

## Design Philosophy

@baole/ui is **dark-first** with glassmorphism surfaces and gradient accents. The color system embodies the baole.space visual identity: creative, energetic, polished — never corporate or cold.

### Core Principles

1. **Dark backgrounds** — Base: `#0f0c29` with gradient overlays
2. **Frosted glass surfaces** — `rgba(255,255,255,0.05)` with backdrop blur
3. **White text** — High contrast on dark backgrounds
4. **Gradient accents** — Purple → Fuchsia → Pink spectrum
5. **Subtle borders** — `rgba(255,255,255,0.1)` barely-visible dividers
6. **Glowing focus states** — Color-matched shadows for depth

---

## Background Hierarchy Decision Tree

```
Need a surface?
├─ Page/app background
│  └─ Use: var(--color-bg) [#0f0c29]
│     Apply gradient: bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
│
├─ Card / Panel / Container
│  └─ Use: var(--color-bg-glass) [rgba(255,255,255,0.05)]
│     Add: backdrop-blur-[12px]
│     Border: border-white/10
│
├─ Input / Form Field
│  └─ Use: var(--color-bg-input) [rgba(255,255,255,0.06)]
│     Border: border-white/10
│     Focus: border-purple-400/70 + ring-purple-400/20
│
├─ Elevated Overlay (Popover, Dropdown, Modal content)
│  └─ Use: var(--color-popover) [#1a1640]
│     Add: backdrop-blur-[12px]
│     Border: border-white/10
│     Shadow: var(--shadow-elevated)
│
└─ Hover / Active State
   └─ Increment opacity: hover:bg-white/10
```

---

## CSS Custom Properties

All tokens are defined in `/src/tokens/index.css` and available globally.

### Background Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#0f0c29` | Primary page background |
| `--color-bg-secondary` | `#1a1640` | Secondary surfaces (solid cards) |
| `--color-bg-tertiary` | `#24243e` | Tertiary backgrounds |
| `--color-bg-mesh-mid` | `#302b63` | Gradient mesh midpoint |
| `--color-bg-glass` | `rgba(255,255,255,0.05)` | Glassmorphism cards |
| `--color-bg-glass-hover` | `rgba(255,255,255,0.08)` | Glass hover state |
| `--color-bg-glass-active` | `rgba(255,255,255,0.12)` | Glass active/pressed state |
| `--color-bg-elevated` | `rgba(255,255,255,0.05)` | Elevated surfaces |
| `--color-bg-overlay` | `rgba(0,0,0,0.7)` | Modal/dialog overlay backdrop |
| `--color-bg-input` | `rgba(255,255,255,0.06)` | Form input backgrounds |
| `--color-bg-input-hover` | `rgba(255,255,255,0.1)` | Input hover state |

### Border Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-border` | `rgba(255,255,255,0.1)` | Default borders (cards, inputs) |
| `--color-border-strong` | `rgba(255,255,255,0.2)` | Emphasized borders |
| `--color-border-subtle` | `rgba(255,255,255,0.06)` | Subtle dividers |
| `--color-border-focus` | `rgba(167,139,250,0.7)` | Focused input border (purple) |
| `--color-border-error` | `rgba(248,113,113,0.7)` | Error state border (red) |
| `--color-border-success` | `rgba(52,211,153,0.7)` | Success state border (emerald) |
| `--color-border-warning` | `rgba(251,191,36,0.7)` | Warning state border (amber) |

### Text Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-text` | `#ffffff` | Primary body text, headings |
| `--color-text-secondary` | `rgba(255,255,255,0.7)` | Secondary content, descriptions |
| `--color-text-muted` | `rgba(255,255,255,0.5)` | Metadata, helper text |
| `--color-text-disabled` | `rgba(255,255,255,0.3)` | Disabled elements |
| `--color-text-placeholder` | `rgba(255,255,255,0.35)` | Input placeholders |
| `--color-text-inverse` | `#0f0c29` | Text on light backgrounds (rare) |

### Semantic Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#a855f7` (purple-500) | Primary actions, links |
| `--color-primary-hover` | `#9333ea` (purple-600) | Primary hover state |
| `--color-destructive` | `#f43f5e` (rose-500) | Delete, remove, danger actions |
| `--color-destructive-hover` | `#e11d48` | Destructive hover |
| `--color-success` | `#10b981` (emerald-500) | Success states, confirmations |
| `--color-warning` | `#f59e0b` (amber-500) | Warnings, cautions |
| `--color-info` | `#3b82f6` (blue-500) | Informational messages |

---

## Gradient System

Gradients are the signature visual element of @baole/ui.

### Primary Gradients

```css
/* Primary — Most common, for CTAs and headings */
--gradient-primary: linear-gradient(135deg, #667eea, #764ba2);

/* Secondary — Alternate accent */
--gradient-secondary: linear-gradient(135deg, #f093fb, #f5576c);

/* Tertiary — Cool blue-cyan */
--gradient-tertiary: linear-gradient(135deg, #4facfe, #00f2fe);
```

### Semantic Gradients

```css
/* Success — Green-teal */
--gradient-success: linear-gradient(135deg, #43e97b, #38f9d7);

/* Warning — Yellow-orange */
--gradient-warning: linear-gradient(135deg, #f6d365, #fda085);

/* Danger — Red-pink */
--gradient-danger: linear-gradient(135deg, #f5576c, #f093fb);

/* Purple — Violet-pink */
--gradient-purple: linear-gradient(135deg, #a855f7, #ec4899);

/* Ocean — Blue gradient */
--gradient-ocean: linear-gradient(135deg, #667eea, #00f2fe);
```

### Hero Background Gradient

```css
--gradient-hero-bg: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
```

**Usage in Tailwind:**

```tsx
// Background gradient
<div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">

// Text gradient
<h1 className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
  Gradient Text
</h1>

// Button gradient (via Button component)
<Button variant="gradient">Click me</Button>
```

---

## Glow & Shadow System

Glows add depth and emphasize interactive elements.

### Glow Tokens

| Variable | Value | Usage |
|----------|-------|-------|
| `--glow-primary` | `0 0 20px rgba(168,85,247,0.35)` | Purple glow for primary buttons, focus |
| `--glow-success` | `0 0 20px rgba(16,185,129,0.35)` | Green glow for success buttons |
| `--glow-danger` | `0 0 20px rgba(244,63,94,0.35)` | Red glow for destructive actions |
| `--glow-info` | `0 0 20px rgba(59,130,246,0.35)` | Blue glow for info elements |
| `--glow-warning` | `0 0 20px rgba(245,158,11,0.35)` | Amber glow for warnings |

### Shadow Tokens

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-glass` | `0 8px 32px rgba(0,0,0,0.37)` | Glass card shadows |
| `--shadow-elevated` | `0 25px 50px rgba(0,0,0,0.5)` | Elevated overlays (modals, dropdowns) |

**Usage:**

```tsx
// Primary button with glow on hover
<button className="hover:shadow-[var(--glow-primary)]">
  Hover me
</button>

// Elevated card
<div className="shadow-[var(--shadow-elevated)]">
  Content
</div>
```

---

## Semantic Color Combinations

For Alert, Badge, Input status:

### Success

- **Background**: `bg-emerald-500/10`
- **Border**: `border-emerald-400/30`
- **Text**: `text-emerald-100`
- **Icon color**: `text-emerald-400`

### Warning

- **Background**: `bg-amber-500/10`
- **Border**: `border-amber-400/30`
- **Text**: `text-amber-100`
- **Icon color**: `text-amber-400`

### Error/Destructive

- **Background**: `bg-rose-500/10`
- **Border**: `border-rose-400/30`
- **Text**: `text-rose-100`
- **Icon color**: `text-rose-400`

### Info

- **Background**: `bg-blue-500/10`
- **Border**: `border-blue-400/30`
- **Text**: `text-blue-100`
- **Icon color**: `text-blue-400`

---

## Do's and Don'ts

### ✅ Do

- **Use CSS variables** for all colors: `bg-[var(--color-bg-glass)]`
- **Apply backdrop-blur** to glass surfaces: `backdrop-blur-[12px]`
- **Layer gradients** over dark backgrounds for depth
- **Use white text** (`text-white` or `text-white/70`) for readability
- **Add glow** to gradient buttons on hover: `hover:shadow-[var(--glow-primary)]`
- **Keep borders subtle**: `border-white/10` for default state
- **Use semantic colors** for status (success, warning, error, info)

### ❌ Don't

- ❌ **Don't use light mode colors** — this is a dark-first system
- ❌ **Don't use black text** — always use white/white variants
- ❌ **Don't create opaque backgrounds** — embrace glassmorphism
- ❌ **Don't use harsh borders** — keep them `white/10` or `white/20` max
- ❌ **Don't skip backdrop-blur** on glass surfaces
- ❌ **Don't hardcode colors** — use CSS variables for consistency
- ❌ **Don't overuse gradients** — limit to 1-2 gradient buttons per screen

---

## Color Palette Reference

### Purple Spectrum (Primary)

- `purple-400`: `#a78bfa` (lighter text/icons)
- `purple-500`: `#a855f7` (primary solid)
- `purple-600`: `#9333ea` (hover state)

### Fuchsia Spectrum

- `fuchsia-400`: `#e879f9`
- `fuchsia-500`: `#d946ef`
- `fuchsia-600`: `#c026d3`

### Pink Spectrum

- `pink-400`: `#f472b6`
- `pink-500`: `#ec4899`
- `pink-600`: `#db2777`

### Emerald (Success)

- `emerald-400`: `#34d399`
- `emerald-500`: `#10b981`
- `emerald-600`: `#059669`

### Amber (Warning)

- `amber-400`: `#fbbf24`
- `amber-500`: `#f59e0b`
- `amber-600`: `#d97706`

### Rose (Destructive)

- `rose-400`: `#fb7185`
- `rose-500`: `#f43f5e`
- `rose-600`: `#e11d48`

### Blue (Info)

- `blue-400`: `#60a5fa`
- `blue-500`: `#3b82f6`
- `blue-600`: `#2563eb`

---

## Accessibility

All color combinations meet **WCAG AA** contrast requirements:

- White text (`#ffffff`) on dark background (`#0f0c29`): **15.3:1** ✅
- White text on glass surfaces (`rgba(255,255,255,0.05)`): **12.1:1** ✅
- Purple-400 (`#a78bfa`) on dark: **7.2:1** ✅
- Focus ring visible on all backgrounds

---

**Next**: Read `typography.md` for text styles and `spacing.md` for layout tokens.
