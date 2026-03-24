# Spacing Tokens

## Design Philosophy

@baole/ui uses Tailwind CSS v4's default 4px-base spacing scale with two additional semantic tokens for layout-level spacing. The goal is **generous whitespace at macro (section/page) level, tight precision at micro (component) level**.

---

## Semantic Spacing Tokens

| CSS Variable          | Value    | Tailwind Equivalent | Use Case                               |
| --------------------- | -------- | ------------------- | -------------------------------------- |
| `--spacing-section`   | `5rem`   | `py-20`             | Vertical padding for page sections     |
| `--spacing-container` | `1200px` | `max-w-[1200px]`    | Maximum content width for page layouts |

### Section Padding Pattern

```tsx
<section className="py-20 px-6">
  <div className="max-w-[1200px] mx-auto">
    {/* section content */}
  </div>
</section>

// Or with CSS variable
<section style={{ padding: `var(--spacing-section) 1.5rem` }}>
  <div style={{ maxWidth: 'var(--spacing-container)', margin: '0 auto' }}>
    {/* section content */}
  </div>
</section>
```

---

## Spacing Scale Reference

Full 4px-base scale used throughout @baole/ui (Tailwind defaults):

| Class   | Size     | px  | Typical Use                                   |
| ------- | -------- | --- | --------------------------------------------- |
| `p-0`   | 0        | 0   | Reset / flush edges                           |
| `p-0.5` | 0.125rem | 2   | Micro-gaps (icon badge offsets)               |
| `p-1`   | 0.25rem  | 4   | Inline tag, tight icon padding                |
| `p-1.5` | 0.375rem | 6   | Badge padding, small chip                     |
| `p-2`   | 0.5rem   | 8   | Icon button, compact action items             |
| `p-2.5` | 0.625rem | 10  | Badge, small input padding                    |
| `p-3`   | 0.75rem  | 12  | List item, menu item padding                  |
| `p-4`   | 1rem     | 16  | Default card padding, form field padding      |
| `p-5`   | 1.25rem  | 20  | Medium card padding                           |
| `p-6`   | 1.5rem   | 24  | Large card padding, dialog padding            |
| `p-8`   | 2rem     | 32  | Dialog body, page-level panel padding         |
| `p-10`  | 2.5rem   | 40  | Feature card, prominent section padding       |
| `p-12`  | 3rem     | 48  | Hero padding (desktop)                        |
| `p-16`  | 4rem     | 64  | Section inner padding (desktop only)          |
| `p-20`  | 5rem     | 80  | Section block padding (= `--spacing-section`) |
| `p-24`  | 6rem     | 96  | Hero section (full-bleed)                     |

---

## Gap / Grid Spacing

| Class    | Size | Typical Use                       |
| -------- | ---- | --------------------------------- |
| `gap-1`  | 4px  | Tight icon + label pairs          |
| `gap-2`  | 8px  | Inline badge stacks, chip groups  |
| `gap-3`  | 12px | Form row, tight card grid         |
| `gap-4`  | 16px | Default grid gap — cards, buttons |
| `gap-6`  | 24px | Feature grid, standard list       |
| `gap-8`  | 32px | Section sub-grid                  |
| `gap-12` | 48px | Wide feature blocks               |

---

## Component Internal Spacing

Consistent internal spacing makes components feel cohesive at a glance.

### Buttons

| Size | Padding (px / py) | Gap (icon) |
| ---- | ----------------- | ---------- |
| `xs` | `px-2.5 py-1`     | `gap-1`    |
| `sm` | `px-3 py-1.5`     | `gap-1.5`  |
| `md` | `px-4 py-2`       | `gap-2`    |
| `lg` | `px-6 py-2.5`     | `gap-2`    |
| `xl` | `px-8 py-3`       | `gap-2.5`  |

### Cards

| Variant | Padding |
| ------- | ------- |
| Default | `p-6`   |
| Compact | `p-4`   |
| Feature | `p-8`   |

### Form Fields

| Element        | Padding        |
| -------------- | -------------- |
| Input          | `px-3 py-2`    |
| Textarea       | `px-3 py-2`    |
| Select trigger | `px-3 py-2`    |
| Label          | `mb-1.5` below |
| Helper text    | `mt-1.5` above |

### Dialog / Modal

| Zone       | Spacing     |
| ---------- | ----------- |
| Header     | `p-6`       |
| Body       | `px-6 pb-6` |
| Footer     | `px-6 pb-6` |
| Footer gap | `gap-3`     |

---

## Responsive Breakpoints

@baole/ui follows Tailwind's default breakpoint system:

| Prefix | Min-Width | Typical Device                 |
| ------ | --------- | ------------------------------ |
| `sm:`  | 640px     | Large mobile / portrait tablet |
| `md:`  | 768px     | Tablet                         |
| `lg:`  | 1024px    | Small laptop                   |
| `xl:`  | 1280px    | Desktop                        |
| `2xl:` | 1536px    | Large desktop / retina         |

### Responsive Section Pattern

```tsx
<section className="py-12 px-4 md:py-20 md:px-6 lg:px-8">
  <div className="max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* cards */}
    </div>
  </div>
</section>
```

### Responsive Typography Sizing

```tsx
<h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
  Responsive heading
</h1>
<p className="text-base md:text-lg text-white/70">
  Responsive body
</p>
```

---

## Container Patterns

### Standard Page Layout

```tsx
// Full-width section with constrained content
<div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
  <section className="py-20 px-6">
    <div className="max-w-[1200px] mx-auto">{/* page content */}</div>
  </section>
</div>
```

### Hero Layout (full-viewport)

```tsx
<section className="min-h-screen flex items-center justify-center px-6 py-24">
  <div className="max-w-4xl mx-auto text-center">{/* hero content */}</div>
</section>
```

### Sidebar + Content Layout

```tsx
<div className="flex min-h-screen">
  <aside className="w-64 shrink-0 border-r border-white/10 p-4">
    {/* sidebar */}
  </aside>
  <main className="flex-1 p-6 lg:p-8 overflow-auto">{/* content */}</main>
</div>
```

---

## Do's and Don'ts

### ✅ Do

- Use `py-20` (= `--spacing-section`) for all top-level `<section>` vertical padding
- Use `max-w-[1200px] mx-auto` for all page-level content containers
- Use `gap-6` as default grid gap for card grids
- Use `p-6` as default card padding
- Match internal padding to the component size prop (smaller size = tighter padding)

### ❌ Don't

- Don't use arbitrary spacing values (e.g., `mt-[23px]`) — stick to the 4px scale
- Don't add section padding smaller than `py-12` — sections need breathing room
- Don't forget `px-4 md:px-6` horizontal padding on mobile — content should never touch viewport edges
- Don't use `p-1` or smaller inside interactive components — touch targets need at least 44px × 44px
- Don't use `max-w-prose` for grid containers — only for single-column prose content
