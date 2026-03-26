# Typography Tokens

## Design Philosophy

@baolq/ui uses a **two-font system** that balances personality with legibility:

- **Space Grotesk** — brand headers, display text, marketing copy. Geometric, confident, slightly futuristic.
- **Inter** (fallback) — body copy, form labels, data-dense UI. Clean neutral workhorse.
- **JetBrains Mono** — code, technical strings, keyboard shortcuts. Ligature-rich developer font.

---

## Font Stack Tokens

| CSS Variable  | Value                                             | Usage                                   |
| ------------- | ------------------------------------------------- | --------------------------------------- |
| `--font-sans` | `"Space Grotesk", "Inter", system-ui, sans-serif` | All UI text — default via `body` styles |
| `--font-mono` | `"JetBrains Mono", "Fira Code", monospace`        | Code, `<kbd>`, inline code              |

### Tailwind Classes

```tsx
// Explicit font family
<h1 className="font-sans">Heading</h1>   // Space Grotesk (default body)
<code className="font-mono">const x</code> // JetBrains Mono
```

### Loading Fonts in Your App

When consuming `@baolq/ui`, load the fonts in your app's HTML `<head>`:

```html
<!-- Google Fonts (quick start) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

Or via npm (`fontsource`):

```bash
npm install @fontsource/space-grotesk @fontsource/jetbrains-mono
```

```typescript
// In your app root / layout
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
```

---

## Type Scale

The scale follows Tailwind CSS v4 defaults with the Space Grotesk font giving each size more visual weight than Inter at equivalent sizes.

| Class       | Size | Line Height | Rem   | Typical Use                            |
| ----------- | ---- | ----------- | ----- | -------------------------------------- |
| `text-xs`   | 12px | 16px        | 0.75  | Labels, captions, badge text           |
| `text-sm`   | 14px | 20px        | 0.875 | Helper text, secondary UI, table cells |
| `text-base` | 16px | 24px        | 1     | Body copy, form fields (base size)     |
| `text-lg`   | 18px | 28px        | 1.125 | Sub-headings, card titles              |
| `text-xl`   | 20px | 28px        | 1.25  | Section sub-headings                   |
| `text-2xl`  | 24px | 32px        | 1.5   | Page headings (H3 level)               |
| `text-3xl`  | 30px | 36px        | 1.875 | Section headings (H2 level)            |
| `text-4xl`  | 36px | 40px        | 2.25  | Page titles (H1 level)                 |
| `text-5xl`  | 48px | 1           | 3     | Hero headings, marketing display       |
| `text-6xl`  | 60px | 1           | 3.75  | Hero headline with gradient text       |
| `text-7xl`  | 72px | 1           | 4.5   | Maximum scale — single-line hero only  |

---

## Font Weights

| Class           | Weight | Use Case                               |
| --------------- | ------ | -------------------------------------- |
| `font-light`    | 300    | Large display text only (avoid body)   |
| `font-normal`   | 400    | Body copy, secondary labels            |
| `font-medium`   | 500    | UI labels, navigation items            |
| `font-semibold` | 600    | Headings, emphasized UI, card titles   |
| `font-bold`     | 700    | Section headings, badges, CTA emphasis |

---

## Gradient Text (Brand Pattern)

Gradient text is the signature @baolq/ui heading treatment for hero sections and primary headings.

```tsx
// Primary purple → pink gradient (most common)
<h1 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
  Build beautiful tools
</h1>

// Ocean blue → cyan
<h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  Fast by default
</h2>

// Using CSS token gradients
<span className="bg-[var(--gradient-purple)] bg-clip-text text-transparent">
  Creative
</span>
```

**Decision tree for gradient text:**

```
Is this the primary heading on the page? → YES → gradient text
Is it an H1 or large hero element?       → YES → gradient text
Is it body text or a label?             → NO  → plain white text
Is it inside a card or small component? → NO  → plain white text
```

---

## Text Colors

| Class / Variable          | Color                   | Use Case                              |
| ------------------------- | ----------------------- | ------------------------------------- |
| `text-white`              | `#ffffff`               | Primary headings, important UI text   |
| `text-white/70`           | `rgba(255,255,255,0.7)` | Secondary text, descriptions          |
| `text-white/50`           | `rgba(255,255,255,0.5)` | Muted text, metadata, timestamps      |
| `text-white/30`           | `rgba(255,255,255,0.3)` | Disabled text, placeholder hint       |
| `var(--color-text)`       | `#ffffff`               | Same as `text-white` — semantic alias |
| `var(--color-text-muted)` | `rgba(255,255,255,0.5)` | Same as `text-white/50`               |

---

## Paragraph Spacing

For readable prose:

```tsx
<p className="text-base leading-relaxed text-white/70 max-w-prose">
  Body copy should use leading-relaxed (1.625) and be constrained to max-w-prose
  (65ch) for comfortable line length.
</p>
```

---

## Component Typography Defaults

| Component        | Heading Size                    | Body Size   | Notes                                 |
| ---------------- | ------------------------------- | ----------- | ------------------------------------- |
| `<Typography>`   | `text-4xl`                      | `text-base` | See Typography component for full API |
| `<Card>` title   | `text-lg font-semibold`         | –           | Card header slot                      |
| `<Badge>`        | `text-xs font-medium`           | –           | All caps via `uppercase` modifier     |
| `<Button>` label | `text-sm font-medium`           | –           | Inherits size from `size` prop        |
| `<Alert>` title  | `text-sm font-semibold`         | –           | –                                     |
| `<Table>` header | `text-xs font-medium uppercase` | –           | Tracking-wide for headers             |
| Hero section     | `text-5xl/6xl font-bold`        | `text-lg`   | Gradient text on heading              |

---

## Do's and Don'ts

### ✅ Do

- Use `text-white` for any heading on a dark background
- Use `text-white/70` for supporting body copy
- Use `font-semibold` or `font-bold` for section headings
- Apply gradient text to the single most important heading per section
- Set `max-w-prose` on body paragraphs longer than 2 lines
- Load fonts via `fontsource` for zero-CLS in Next.js apps

### ❌ Don't

- Don't use gradient text on more than one element per section — it loses impact
- Don't use `font-light` (300) at sizes below `text-xl` — too thin on dark backgrounds
- Don't use `text-xs` for anything interactive (accessibility: min 14px for interactive labels)
- Don't mix Space Grotesk with another display font — system contrast is lost
- Don't use `text-white/30` for anything that needs to be read (only decorative or disabled states)
