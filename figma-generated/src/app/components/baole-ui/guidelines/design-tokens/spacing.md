# Spacing & Layout — @baole/ui

Consistent spacing creates visual rhythm and hierarchy. This guide covers containers, section spacing, component padding, and responsive patterns.

---

## Container System

### Max Width

Use the container max-width for page content:

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-container` | `1200px` | Maximum content width |

### Container Pattern

```tsx
<div className="
  max-w-[var(--spacing-container)]
  mx-auto
  px-4 sm:px-6 lg:px-8
">
  Page content
</div>
```

### Responsive Padding

```tsx
// Mobile: 16px (px-4)
// Tablet: 24px (sm:px-6)
// Desktop: 32px (lg:px-8)
className="px-4 sm:px-6 lg:px-8"
```

---

## Section Vertical Rhythm

### Major Sections

Use consistent vertical spacing between major page sections:

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section` | `80px` | Between major sections (hero, features, footer) |

```tsx
<section className="py-[var(--spacing-section)]">
  Section content
</section>

// Responsive
<section className="py-12 md:py-16 lg:py-20">
  Section content
</section>
```

### Section Spacing Scale

| Class | Value | Usage |
|-------|-------|-------|
| `py-8` | 32px | Small sections |
| `py-12` | 48px | Medium sections |
| `py-16` | 64px | Standard sections |
| `py-20` | 80px | Large sections (use `--spacing-section`) |
| `py-24` | 96px | Extra large sections |

---

## Component Internal Spacing

### Card Padding

```tsx
// Small card
<Card className="p-4">  // 16px

// Medium card (default)
<Card className="p-6">  // 24px

// Large card
<Card className="p-8">  // 32px
```

### Form Element Spacing

```tsx
// Between form fields
<Form className="space-y-4">  // 16px gap
  <FormItem>...</FormItem>
  <FormItem>...</FormItem>
</Form>

// Between form sections
<Form>
  <div className="space-y-6">  // 24px gap
    <FormSection>...</FormSection>
    <FormSection>...</FormSection>
  </div>
</Form>
```

### Button Padding

```tsx
// Small
className="px-3 py-1.5"  // 12px x 6px

// Medium (default)
className="px-4 py-2"    // 16px x 8px

// Large
className="px-6 py-3"    // 24px x 12px
```

---

## Grid Patterns

### Tool/Feature Cards (4 columns)

```tsx
<div className="
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
  gap-4
">
  <Card>Tool 1</Card>
  <Card>Tool 2</Card>
  <Card>Tool 3</Card>
  <Card>Tool 4</Card>
</div>
```

### Project Cards (3 columns)

```tsx
<div className="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-6
">
  <Card>Project 1</Card>
  <Card>Project 2</Card>
  <Card>Project 3</Card>
</div>
```

### Blog Posts (2 columns)

```tsx
<div className="
  grid grid-cols-1 md:grid-cols-2
  gap-8
">
  <article>Post 1</article>
  <article>Post 2</article>
</div>
```

### Dashboard Grid

```tsx
<div className="
  grid grid-cols-12
  gap-6
">
  <div className="col-span-12 lg:col-span-8">
    Main content
  </div>
  <div className="col-span-12 lg:col-span-4">
    Sidebar
  </div>
</div>
```

---

## Responsive Breakpoints

@baole/ui uses Tailwind's default breakpoints:

| Breakpoint | Prefix | Min Width | Typical Device |
|------------|--------|-----------|----------------|
| Extra Small | (none) | 0px | Mobile portrait |
| Small | `sm:` | 640px | Mobile landscape |
| Medium | `md:` | 768px | Tablet portrait |
| Large | `lg:` | 1024px | Tablet landscape / Desktop |
| Extra Large | `xl:` | 1280px | Desktop |
| 2X Large | `2xl:` | 1536px | Large desktop |

---

## Tailwind Spacing Scale

Quick reference for Tailwind spacing classes:

| Class | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `0` | 0 | 0px | Remove spacing |
| `0.5` | 0.125rem | 2px | Fine adjustments |
| `1` | 0.25rem | 4px | Tight spacing |
| `1.5` | 0.375rem | 6px | - |
| `2` | 0.5rem | 8px | Icon gaps, small padding |
| `3` | 0.75rem | 12px | Button padding (small) |
| `4` | 1rem | 16px | **Default spacing** (form gaps, card padding) |
| `5` | 1.25rem | 20px | - |
| `6` | 1.5rem | 24px | Card padding (medium), section gaps |
| `8` | 2rem | 32px | Card padding (large), section spacing |
| `10` | 2.5rem | 40px | - |
| `12` | 3rem | 48px | Large section spacing |
| `16` | 4rem | 64px | Major section spacing |
| `20` | 5rem | 80px | Extra large spacing |
| `24` | 6rem | 96px | Hero sections |

---

## Common Patterns

### Page Layout

```tsx
<div className="min-h-screen bg-[var(--color-bg)]">
  {/* Header */}
  <header className="border-b border-[var(--color-border)] px-4 py-4">
    Navigation
  </header>

  {/* Main Content */}
  <main className="max-w-[var(--spacing-container)] mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-4xl font-bold mb-6">Page Title</h1>
    
    <div className="space-y-8">
      <section>Section 1</section>
      <section>Section 2</section>
    </div>
  </main>

  {/* Footer */}
  <footer className="border-t border-[var(--color-border)] px-4 py-8 mt-16">
    Footer content
  </footer>
</div>
```

### Card with Content

```tsx
<Card className="p-6">
  <div className="space-y-4">
    <div>
      <h3 className="text-2xl font-semibold mb-2">Card Title</h3>
      <p className="text-sm text-[var(--color-text-secondary)]">Description</p>
    </div>
    
    <Separator />
    
    <div className="space-y-2">
      <p>Content section 1</p>
      <p>Content section 2</p>
    </div>
    
    <div className="flex gap-2 justify-end">
      <Button variant="outline">Cancel</Button>
      <Button variant="gradient">Submit</Button>
    </div>
  </div>
</Card>
```

### Form Layout

```tsx
<Form onSubmit={handleSubmit} className="space-y-6">
  {/* Form section */}
  <div className="space-y-4">
    <FormItem label="Name">
      <Input />
    </FormItem>
    <FormItem label="Email">
      <Input type="email" />
    </FormItem>
  </div>

  {/* Another section */}
  <div className="space-y-4">
    <FormItem label="Message">
      <Textarea rows={4} />
    </FormItem>
  </div>

  {/* Actions */}
  <div className="flex gap-3">
    <Button type="submit" variant="gradient">Submit</Button>
    <Button type="button" variant="outline">Cancel</Button>
  </div>
</Form>
```

### Horizontal Stack (Inline Elements)

```tsx
// Small gap (badges, tags)
<div className="flex gap-2">
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
</div>

// Medium gap (buttons)
<div className="flex gap-3">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</div>

// Large gap (cards)
<div className="flex gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</div>
```

### Vertical Stack (Block Elements)

```tsx
// Tight (list items)
<div className="space-y-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Medium (form fields)
<div className="space-y-4">
  <Input />
  <Input />
</div>

// Loose (sections)
<div className="space-y-8">
  <section>Section 1</section>
  <section>Section 2</section>
</div>
```

---

## Responsive Spacing Examples

### Section Spacing (Mobile to Desktop)

```tsx
<section className="
  py-8 md:py-12 lg:py-16
">
  // Mobile: 32px
  // Tablet: 48px
  // Desktop: 64px
</section>
```

### Card Padding

```tsx
<Card className="
  p-4 md:p-6 lg:p-8
">
  // Mobile: 16px
  // Tablet: 24px
  // Desktop: 32px
</Card>
```

### Grid Gap

```tsx
<div className="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-4 md:gap-6 lg:gap-8
">
  // Mobile: 16px
  // Tablet: 24px
  // Desktop: 32px
</div>
```

---

## ✅ Correct / ❌ Wrong Examples

### Container Width

```tsx
// ✅ CORRECT - Responsive container
<div className="max-w-[var(--spacing-container)] mx-auto px-4 sm:px-6 lg:px-8">

// ❌ WRONG - No max-width or padding
<div className="mx-auto">

// ❌ WRONG - Fixed padding on all screens
<div className="max-w-[1200px] mx-auto px-8">
```

### Form Spacing

```tsx
// ✅ CORRECT - Consistent gaps
<Form className="space-y-4">
  <FormItem>...</FormItem>
  <FormItem>...</FormItem>
</Form>

// ❌ WRONG - Manual margins (inconsistent)
<Form>
  <FormItem className="mb-3">...</FormItem>
  <FormItem className="mb-5">...</FormItem>
</Form>
```

### Grid Gaps

```tsx
// ✅ CORRECT - Responsive grid
<div className="
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
  gap-4 md:gap-6
">

// ❌ WRONG - Fixed grid, no responsive gap
<div className="grid grid-cols-4 gap-4">
```

---

## Quick Reference

Common spacing patterns to copy-paste:

```tsx
// Container
"max-w-[var(--spacing-container)] mx-auto px-4 sm:px-6 lg:px-8"

// Section vertical spacing
"py-8 md:py-12 lg:py-16"

// Card padding
"p-4 md:p-6"

// Form spacing
"space-y-4"

// Button group
"flex gap-2"

// Grid (4 columns)
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"

// Grid (3 columns)
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Vertical stack
"space-y-8"
```

---

**Next:** Read component-specific guidelines in [components/](../components/)
