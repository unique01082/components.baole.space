# Card

## Purpose

The Card component is a versatile container for grouping related content with built-in styling variants, hover effects, and composable sub-components.

## When to Use

### ✅ Use Card when:
- Grouping related information together
- Creating a visual hierarchy of content
- Building dashboards with multiple data panels
- Displaying product/service offerings
- Creating list items that need more structure than plain text
- Containing forms, settings, or configuration panels

### ❌ Don't use Card when:
- Content doesn't need visual separation → Use plain divs
- Single page with one main content area → Card adds unnecessary chrome
- Overlay content → Use Dialog, Popover, or Sheet instead
- Lists of simple items → Use Table or plain lists

## Installation

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction
} from '@baolq/ui'
```

## Props API

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"glass"` \| `"gradient"` \| `"solid"` \| `"outlined"` | `"glass"` | Visual style variant |
| `padding` | `"none"` \| `"sm"` \| `"md"` \| `"lg"` | `"md"` | Internal padding |
| `hoverable` | `boolean` | `false` | Adds hover lift + shadow effect |
| `bordered` | `boolean` | `false` | Forces border visibility (2px) |
| `accentColor` | `string` | - | Custom top border color (for gradient variant) |
| `className` | `string` | - | Additional CSS classes |
| ...props | `HTMLDivAttributes` | - | All standard div props |

### Compound Components

All sub-components accept standard HTML div/heading/paragraph props:

- `CardHeader` — Container for title and description
- `CardTitle` — Card heading (renders as `<h3>`)
- `CardDescription` — Subtitle text
- `CardContent` — Main card body
- `CardFooter` — Actions or metadata at bottom
- `CardAction` — Absolutely positioned top-right action slot

## Examples

### Basic Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>This is a description of the card content</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Variants

```tsx
// Glass (default) — Frosted glass effect
<Card variant="glass">
  <CardHeader>
    <CardTitle>Glass Card</CardTitle>
  </CardHeader>
  <CardContent>
    Glassmorphism design with backdrop blur
  </CardContent>
</Card>

// Gradient border
<Card variant="gradient">
  <CardHeader>
    <CardTitle>Gradient Border</CardTitle>
  </CardHeader>
  <CardContent>
    Features a gradient border effect
  </CardContent>
</Card>

// Solid background
<Card variant="solid">
  <CardHeader>
    <CardTitle>Solid Card</CardTitle>
  </CardHeader>
  <CardContent>
    Stronger visual separation
  </CardContent>
</Card>

// Outlined (transparent)
<Card variant="outlined">
  <CardHeader>
    <CardTitle>Outlined Card</CardTitle>
  </CardHeader>
  <CardContent>
    Minimal, subtle grouping
  </CardContent>
</Card>
```

### Hoverable Cards

Perfect for clickable cards or interactive elements:

```tsx
<Card variant="glass" hoverable>
  <CardHeader>
    <CardTitle>Hover over me</CardTitle>
    <CardDescription>This card lifts on hover</CardDescription>
  </CardHeader>
  <CardContent>
    Adds a -translate-y-1 transform and elevated shadow
  </CardContent>
</Card>
```

### With Action Button

```tsx
<Card>
  <CardAction>
    <Button size="icon" variant="ghost">
      <MoreVertical size={16} />
    </Button>
  </CardAction>
  <CardHeader>
    <CardTitle>Card with Action</CardTitle>
  </CardHeader>
  <CardContent>
    The action button is positioned top-right
  </CardContent>
</Card>
```

### With Badge

```tsx
<Card variant="glass">
  <CardHeader>
    <div className="flex justify-between items-start">
      <div>
        <CardTitle>Premium Plan</CardTitle>
        <CardDescription>Best for professionals</CardDescription>
      </div>
      <Badge variant="gradient">Popular</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">
      $29<span className="text-lg text-white/60">/mo</span>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="gradient" fullWidth>Subscribe</Button>
  </CardFooter>
</Card>
```

### Padding Variants

```tsx
// No padding — full bleed content
<Card padding="none">
  <img src="/image.jpg" alt="Full bleed" className="w-full" />
  <div className="p-4">
    <CardTitle>Custom padding</CardTitle>
  </div>
</Card>

// Small padding
<Card padding="sm">
  <CardTitle>Tight spacing</CardTitle>
</Card>

// Large padding
<Card padding="lg">
  <CardTitle>Generous spacing</CardTitle>
</Card>
```

### Custom Accent Color

```tsx
<Card variant="gradient" accentColor="#ec4899">
  <CardHeader>
    <CardTitle>Custom Border Color</CardTitle>
  </CardHeader>
  <CardContent>
    The top border uses the custom color
  </CardContent>
</Card>
```

### Clickable Card

```tsx
<Card
  variant="glass"
  hoverable
  className="cursor-pointer"
  onClick={() => navigate('/details')}
>
  <CardHeader>
    <CardTitle>Click me</CardTitle>
    <CardDescription>Entire card is clickable</CardDescription>
  </CardHeader>
  <CardContent>
    Navigate to details page
  </CardContent>
  <CardFooter>
    <ArrowRight size={16} className="text-purple-400" />
  </CardFooter>
</Card>
```

---

## Do's and Don'ts

### ✅ Do

- Use `variant="glass"` for most cards (matches baole.space aesthetic)
- Use `variant="gradient"` to highlight featured/important cards
- Add `hoverable` to clickable or interactive cards
- Compose with Badge, Button, and other components
- Use CardFooter for actions (buttons, links)
- Keep CardTitle concise (1-5 words)
- Use CardDescription for context (1-2 sentences)
- Apply padding="none" for full-bleed images, then add padding to inner content

### ❌ Don't

- Don't nest cards inside cards excessively (max 2 levels deep)
- Don't use Card for every single container — it adds visual weight
- Don't mix too many variants on the same page
- Don't forget to make hoverable cards actually interactive
- Don't use extremely long titles — truncate or use tooltips
- Don't omit CardContent — it's the primary slot

---

## Layout Patterns

### Grid of Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card variant="glass">
    <CardHeader>
      <CardTitle>Card 1</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>
  <Card variant="glass">
    <CardHeader>
      <CardTitle>Card 2</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>
  <Card variant="glass">
    <CardHeader>
      <CardTitle>Card 3</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>
</div>
```

### Stacked Cards (List)

```tsx
<div className="space-y-4">
  {items.map((item) => (
    <Card key={item.id} variant="glass" hoverable>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button size="sm" variant="ghost">View</Button>
      </CardFooter>
    </Card>
  ))}
</div>
```

### Dashboard Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  {/* Stat cards */}
  <Card variant="glass">
    <CardHeader>
      <CardDescription>Total Revenue</CardDescription>
      <CardTitle className="text-3xl">$45,231</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center gap-1 text-emerald-400 text-sm">
        <TrendingUp size={16} />
        <span>+12.5%</span>
      </div>
    </CardContent>
  </Card>

  {/* Repeat for other stats */}
  
  {/* Full-width content card */}
  <Card variant="glass" className="lg:col-span-4">
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        {/* Table content */}
      </Table>
    </CardContent>
  </Card>
</div>
```

---

## Accessibility

- ✅ Use semantic headings (CardTitle renders `<h3>`)
- ✅ If card is clickable, wrap in `<a>` or use `role="button"`
- ✅ Ensure sufficient color contrast for text
- ✅ Hoverable cards should indicate interactivity (cursor-pointer)

```tsx
// Clickable card with proper semantics
<a href="/details" className="block no-underline">
  <Card variant="glass" hoverable className="cursor-pointer">
    <CardHeader>
      <CardTitle>Clickable Card</CardTitle>
    </CardHeader>
  </Card>
</a>
```

---

## Visual Specifications

### Glass Variant
- Background: `bg-white/5`
- Border: `border border-white/10`
- Backdrop: `backdrop-blur-[12px]`

### Gradient Variant
- Background: `bg-white/5` with gradient border pseudo-element
- Border: Gradient using CSS mask trick

### Hoverable Effect
- Transform: `hover:-translate-y-1`
- Shadow: `hover:shadow-[var(--shadow-elevated)]`
- Transition: `transition-all duration-300`

---

## Common Patterns

### Pricing Card

```tsx
<Card variant="gradient" padding="lg">
  <CardHeader>
    <Badge variant="gradient" className="mb-2">Most Popular</Badge>
    <CardTitle className="text-2xl">Pro Plan</CardTitle>
    <CardDescription>For growing teams</CardDescription>
  </CardHeader>
  <CardContent className="pt-6">
    <div className="text-5xl font-bold">
      $49<span className="text-xl text-white/60">/month</span>
    </div>
    <Separator className="my-4" />
    <ul className="space-y-2 text-sm text-white/70">
      <li className="flex items-center gap-2">
        <Check size={16} className="text-emerald-400" />
        <span>Unlimited projects</span>
      </li>
      <li className="flex items-center gap-2">
        <Check size={16} className="text-emerald-400" />
        <span>24/7 support</span>
      </li>
      <li className="flex items-center gap-2">
        <Check size={16} className="text-emerald-400" />
        <span>Advanced analytics</span>
      </li>
    </ul>
  </CardContent>
  <CardFooter className="pt-6">
    <Button variant="gradient" fullWidth size="lg">
      Get Started
    </Button>
  </CardFooter>
</Card>
```

### Stats Card

```tsx
<Card variant="glass">
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardDescription>Active Users</CardDescription>
    <Users size={16} className="text-white/40" />
  </CardHeader>
  <CardContent>
    <CardTitle className="text-3xl">2,847</CardTitle>
    <p className="text-xs text-white/50 mt-1">
      +180 from last month
    </p>
  </CardContent>
</Card>
```

---

**Next**: Explore `button.md`, `input.md`, and `dialog.md` for related components.
