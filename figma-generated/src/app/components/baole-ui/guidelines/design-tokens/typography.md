# Typography Tokens — @baole/ui

Typography in @baole/ui balances clarity, hierarchy, and the distinctive baole.space aesthetic with gradient text accents.

---

## Font Families

### Primary Fonts

| Font | Usage | Import |
|------|-------|--------|
| **Space Grotesk** | Headings, display text, brand elements | Google Fonts |
| **Inter** | Body text, UI labels, forms, tables | Google Fonts |

### Decision Guide

```
What are you styling?
├─ Heading (h1-h6) → Space Grotesk
├─ Hero/display text → Space Grotesk
├─ Button text → Inter (500 weight)
├─ Body paragraph → Inter (400 weight)
├─ Form labels → Inter (500 weight)
├─ Table cells → Inter (400 weight)
└─ Code blocks → Monospace (system)
```

### Font Import

Add to your app's CSS or `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

In CSS:

```css
:root {
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
}
```

---

## Type Scale

### Size Reference Table

| Tailwind Class | Pixel Size | Line Height | Usage |
|----------------|------------|-------------|-------|
| `text-xs` | 12px | 16px (1.33) | Captions, badges, timestamps, footnotes |
| `text-sm` | 14px | 20px (1.43) | UI labels, button text, table cells, form helper text |
| `text-base` | 16px | 24px (1.5) | Body paragraphs, form descriptions, default |
| `text-lg` | 18px | 28px (1.56) | Subheadings, lead paragraphs |
| `text-xl` | 20px | 28px (1.4) | Section subheadings |
| `text-2xl` | 24px | 32px (1.33) | Card titles, modal headers |
| `text-3xl` | 30px | 36px (1.2) | Page section headings (h2) |
| `text-4xl` | 36px | 40px (1.11) | Major page headings (h1) |
| `text-5xl` | 48px | 1 | Hero text |
| `text-6xl` | 60px | 1 | Display text |
| `text-7xl` | 72px | 1 | Hero titles, landing pages |

---

## Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| `font-normal` | 400 | Body text, paragraphs |
| `font-medium` | 500 | Subheadings, UI labels, button text |
| `font-semibold` | 600 | Headings (h3-h6) |
| `font-bold` | 700 | Major headings (h1-h2), emphasis |

### Weight Selection Guide

```
Content type?
├─ Body paragraph → 400 (normal)
├─ Button/label → 500 (medium)
├─ Subheading (h4-h6) → 600 (semibold)
├─ Main heading (h1-h3) → 700 (bold)
└─ Hero/display → 700 (bold)
```

---

## Heading Patterns

### H1 — Page Title

```tsx
<h1 className="
  text-4xl font-bold
  font-[family-name:var(--font-heading)]
  text-[var(--color-text)]
">
  Page Title
</h1>

// With gradient
<h1 className="
  text-4xl font-bold
  font-[family-name:var(--font-heading)]
  bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400
  bg-clip-text text-transparent
">
  Gradient Title
</h1>
```

### H2 — Section Heading

```tsx
<h2 className="
  text-3xl font-bold
  font-[family-name:var(--font-heading)]
  text-[var(--color-text)]
">
  Section Heading
</h2>
```

### H3 — Subsection

```tsx
<h3 className="
  text-2xl font-semibold
  font-[family-name:var(--font-heading)]
  text-[var(--color-text)]
">
  Subsection
</h3>
```

### H4-H6 — Minor Headings

```tsx
<h4 className="text-xl font-semibold text-[var(--color-text)]">
<h5 className="text-lg font-semibold text-[var(--color-text)]">
<h6 className="text-base font-semibold text-[var(--color-text)]">
```

---

## Body Text Patterns

### Paragraph

```tsx
<p className="text-base text-[var(--color-text-secondary)]">
  Standard body paragraph text.
</p>
```

### Lead Paragraph (Larger)

```tsx
<p className="text-lg text-[var(--color-text-secondary)]">
  Introductory or lead paragraph.
</p>
```

### Small Text (Metadata)

```tsx
<p className="text-sm text-[var(--color-text-muted)]">
  Posted 2 hours ago
</p>

<span className="text-xs text-[var(--color-text-muted)]">
  Updated today
</span>
```

---

## Gradient Text Pattern

Use this pattern for eye-catching headings:

### Using Utility Class (Recommended)

```tsx
// Add to your CSS if not already present
.gradient-text {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Usage
<h1 className="gradient-text text-4xl font-bold">
  Beautiful Gradient Heading
</h1>
```

### Inline Tailwind

```tsx
<h1 className="
  text-4xl font-bold
  bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400
  bg-clip-text text-transparent
">
  Gradient Heading
</h1>
```

### Gradient Color Variations

```tsx
// Primary (purple → fuchsia → pink)
"bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400"

// Secondary (pink → rose)
"bg-gradient-to-r from-pink-400 to-rose-400"

// Success (green)
"bg-gradient-to-r from-green-400 to-emerald-400"

// Info (blue)
"bg-gradient-to-r from-blue-400 to-cyan-400"
```

---

## Letter Spacing

| Class | Value | Usage |
|-------|-------|-------|
| `tracking-tight` | -0.025em | Headings (h1-h3) for better visual density |
| `tracking-normal` | 0 | Body text, default |
| `tracking-wide` | 0.025em | ALL CAPS labels, small UI text |
| `tracking-wider` | 0.05em | UPPERCASE HEADINGS |

### Examples

```tsx
// Tight tracking for large headings
<h1 className="text-5xl font-bold tracking-tight">

// Wide tracking for small caps
<span className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
  Section Label
</span>
```

---

## Line Height

Generally handled automatically by Tailwind, but override when needed:

| Class | Ratio | Usage |
|-------|-------|-------|
| `leading-none` | 1 | Display/hero text |
| `leading-tight` | 1.25 | Headings |
| `leading-normal` | 1.5 | Body text (default) |
| `leading-relaxed` | 1.625 | Long-form content |

```tsx
// Hero text (tight)
<h1 className="text-6xl font-bold leading-none">

// Body (normal)
<p className="text-base leading-normal">

// Article (relaxed)
<article className="text-lg leading-relaxed">
```

---

## Common Patterns

### Card Title

```tsx
<h3 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
  Card Title
</h3>
```

### Card Description

```tsx
<p className="text-sm text-[var(--color-text-secondary)]">
  Brief description text
</p>
```

### Form Label

```tsx
<label className="text-sm font-medium text-[var(--color-text)] mb-1.5">
  Email Address
</label>
```

### Button Text

```tsx
<button className="text-sm font-medium">
  Click Me
</button>
```

### Table Header

```tsx
<th className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
  Column Name
</th>
```

### Table Cell

```tsx
<td className="text-sm text-[var(--color-text-secondary)]">
  Cell content
</td>
```

### Badge/Tag Text

```tsx
<span className="text-xs font-medium">
  New
</span>
```

### Timestamp

```tsx
<time className="text-xs text-[var(--color-text-muted)]">
  2 hours ago
</time>
```

---

## Responsive Typography

Scale text sizes on larger screens:

```tsx
<h1 className="
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  font-bold
">
  Responsive Heading
</h1>

<p className="
  text-base sm:text-lg
  text-[var(--color-text-secondary)]
">
  Responsive body text
</p>
```

---

## Truncation & Overflow

### Single Line Truncation

```tsx
<p className="truncate">
  Very long text that will be cut off with ellipsis...
</p>
```

### Multi-Line Clamp

```tsx
<p className="line-clamp-2">
  Text that will be limited to 2 lines with ellipsis at the end...
</p>

<p className="line-clamp-3">
  Text limited to 3 lines...
</p>
```

### Break Words

```tsx
<p className="break-words">
  Verylongwordthatwillbreakacrosslines
</p>
```

---

## ✅ Correct / ❌ Wrong Examples

### Heading Hierarchy

```tsx
// ✅ CORRECT - Proper hierarchy
<h1 className="text-4xl font-bold text-[var(--color-text)]">Page Title</h1>
<h2 className="text-3xl font-bold text-[var(--color-text)]">Section</h2>
<h3 className="text-2xl font-semibold text-[var(--color-text)]">Subsection</h3>

// ❌ WRONG - Inconsistent sizes
<h1 className="text-2xl">Page Title</h1>
<h2 className="text-4xl">Section</h2>
```

### Body Text Colors

```tsx
// ✅ CORRECT - Proper text hierarchy
<h2 className="text-[var(--color-text)]">Heading</h2>
<p className="text-[var(--color-text-secondary)]">Body text</p>
<span className="text-[var(--color-text-muted)]">Metadata</span>

// ❌ WRONG - All same color
<h2 className="text-white">Heading</h2>
<p className="text-white">Body text</p>
<span className="text-white">Metadata</span>
```

### Gradient Text

```tsx
// ✅ CORRECT - Proper gradient text
<h1 className="
  bg-gradient-to-r from-purple-400 to-pink-400
  bg-clip-text text-transparent
">

// ❌ WRONG - Missing bg-clip-text
<h1 className="bg-gradient-to-r from-purple-400 to-pink-400">
```

---

## Quick Reference

Common patterns to copy-paste:

```tsx
// Page heading with gradient
"text-4xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"

// Card title
"text-2xl font-semibold text-[var(--color-text)]"

// Body text
"text-base text-[var(--color-text-secondary)]"

// Small metadata
"text-xs text-[var(--color-text-muted)]"

// Form label
"text-sm font-medium text-[var(--color-text)]"

// Button text
"text-sm font-medium"
```

---

**Next:** Read [spacing.md](./spacing.md)
