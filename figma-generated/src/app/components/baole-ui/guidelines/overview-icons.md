# Icon System — Lucide React

@baole/ui uses **Lucide React** as the icon library. Lucide provides 1000+ beautiful, consistent icons with full TypeScript support.

---

## Installation & Import

### Package

```bash
npm install lucide-react
```

### Import Icons

```tsx
import { IconName } from 'lucide-react'

// Examples:
import { Plus, Search, X, Check, AlertCircle } from 'lucide-react'
```

---

## Icon Props

All icons accept these standard props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `strokeWidth` | `number` | `2` | Stroke width (⚠️ DO NOT MODIFY) |
| `color` | `string` | `currentColor` | Icon color |
| `className` | `string` | `""` | Additional CSS classes |

### ⚠️ IMPORTANT: Never Modify `strokeWidth`

The default `strokeWidth: 2` is designed for visual consistency. Changing it creates mismatched icon weights.

```tsx
// ✅ Good
<Plus size={20} />

// ❌ Bad - inconsistent stroke
<Plus size={20} strokeWidth={1.5} />
```

---

## Size Usage Guide

Choose icon size based on context:

| Size | Usage |
|------|-------|
| **16px** | Inline text, badges, small UI elements |
| **20px** | Button icons, form field icons, menu items |
| **24px** | Standalone icons, default |
| **32px** | Large actions, hero sections |
| **48px+** | Feature highlights, empty states |

### Examples

```tsx
// Inline in text
<span className="text-sm">
  <Info size={16} className="inline" /> More information
</span>

// Button icon
<Button>
  <Plus size={20} className="mr-2" />
  Add Item
</Button>

// Standalone icon button
<Button variant="ghost" size="icon">
  <Search size={24} />
</Button>

// Hero section
<div className="text-center">
  <Sparkles size={48} className="mx-auto mb-4" />
  <h1>Welcome</h1>
</div>
```

---

## Most Commonly Used Icons

### Actions

| Icon | Usage | Import |
|------|-------|--------|
| `Plus` | Add, create, new | `import { Plus } from 'lucide-react'` |
| `Minus` | Remove, delete, subtract | `import { Minus } from 'lucide-react'` |
| `Trash2` | Delete permanently | `import { Trash2 } from 'lucide-react'` |
| `Edit2` | Edit, modify | `import { Edit2 } from 'lucide-react'` |
| `Copy` | Duplicate, copy | `import { Copy } from 'lucide-react'` |
| `Download` | Download file | `import { Download } from 'lucide-react'` |
| `Upload` | Upload file | `import { Upload } from 'lucide-react'` |
| `Search` | Search, find | `import { Search } from 'lucide-react'` |
| `Filter` | Filter data | `import { Filter } from 'lucide-react'` |
| `MoreHorizontal` | More options (⋯) | `import { MoreHorizontal } from 'lucide-react'` |
| `MoreVertical` | More options (⋮) | `import { MoreVertical } from 'lucide-react'` |

### Navigation

| Icon | Usage | Import |
|------|-------|--------|
| `ChevronLeft` | Previous, back | `import { ChevronLeft } from 'lucide-react'` |
| `ChevronRight` | Next, forward | `import { ChevronRight } from 'lucide-react'` |
| `ChevronDown` | Expand, dropdown | `import { ChevronDown } from 'lucide-react'` |
| `ChevronUp` | Collapse, close | `import { ChevronUp } from 'lucide-react'` |
| `ArrowLeft` | Go back | `import { ArrowLeft } from 'lucide-react'` |
| `ArrowRight` | Go forward | `import { ArrowRight } from 'lucide-react'` |
| `ExternalLink` | Open in new tab | `import { ExternalLink } from 'lucide-react'` |
| `Home` | Home page | `import { Home } from 'lucide-react'` |

### Feedback

| Icon | Usage | Import |
|------|-------|--------|
| `Check` | Success, confirmed | `import { Check } from 'lucide-react'` |
| `X` | Close, cancel | `import { X } from 'lucide-react'` |
| `AlertCircle` | Alert, attention | `import { AlertCircle } from 'lucide-react'` |
| `AlertTriangle` | Warning | `import { AlertTriangle } from 'lucide-react'` |
| `Info` | Information | `import { Info } from 'lucide-react'` |
| `CheckCircle2` | Success badge | `import { CheckCircle2 } from 'lucide-react'` |
| `XCircle` | Error badge | `import { XCircle } from 'lucide-react'` |

### UI Controls

| Icon | Usage | Import |
|------|-------|--------|
| `Menu` | Hamburger menu | `import { Menu } from 'lucide-react'` |
| `Loader2` | Loading spinner | `import { Loader2 } from 'lucide-react'` |
| `RefreshCw` | Refresh, reload | `import { RefreshCw } from 'lucide-react'` |
| `Settings` | Settings, preferences | `import { Settings } from 'lucide-react'` |
| `Eye` | Show, visible | `import { Eye } from 'lucide-react'` |
| `EyeOff` | Hide, invisible | `import { EyeOff } from 'lucide-react'` |
| `Lock` | Locked, secure | `import { Lock } from 'lucide-react'` |
| `Unlock` | Unlocked | `import { Unlock } from 'lucide-react'` |
| `Star` | Favorite, rating | `import { Star } from 'lucide-react'` |
| `Heart` | Like, love | `import { Heart } from 'lucide-react'` |

### Media

| Icon | Usage | Import |
|------|-------|--------|
| `Camera` | Photo, image capture | `import { Camera } from 'lucide-react'` |
| `Image` | Picture, photo | `import { Image } from 'lucide-react'` |
| `Video` | Video content | `import { Video } from 'lucide-react'` |
| `Music` | Audio, music | `import { Music } from 'lucide-react'` |
| `Play` | Play media | `import { Play } from 'lucide-react'` |
| `Pause` | Pause media | `import { Pause } from 'lucide-react'` |

### Data & Charts

| Icon | Usage | Import |
|------|-------|--------|
| `BarChart2` | Bar chart | `import { BarChart2 } from 'lucide-react'` |
| `LineChart` | Line chart | `import { LineChart } from 'lucide-react'` |
| `PieChart` | Pie chart | `import { PieChart } from 'lucide-react'` |
| `Table2` | Table view | `import { Table2 } from 'lucide-react'` |
| `List` | List view | `import { List } from 'lucide-react'` |

---

## Usage in Components

### Button with Icon

```tsx
import { Button } from '@baole/ui'
import { Plus } from 'lucide-react'

// Icon + text
<Button variant="gradient">
  <Plus size={20} className="mr-2" />
  Add Item
</Button>

// Icon only (use size="icon" variant)
<Button variant="ghost" size="icon">
  <Plus size={20} />
</Button>
```

### Icon-Only Button (Accessible)

Always include a screen reader label for accessibility:

```tsx
import { Button } from '@baole/ui'
import { X } from 'lucide-react'

<Button variant="ghost" size="icon" aria-label="Close">
  <X size={20} />
  <span className="sr-only">Close</span>
</Button>
```

### Input with Icon

```tsx
import { Input } from '@baole/ui'
import { Search } from 'lucide-react'

<div className="relative">
  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
  <Input placeholder="Search..." className="pl-10" />
</div>
```

### Alert with Icon

```tsx
import { Alert, AlertTitle, AlertDescription } from '@baole/ui'
import { AlertCircle } from 'lucide-react'

<Alert variant="warning">
  <AlertCircle size={20} />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Your session will expire soon.</AlertDescription>
</Alert>
```

### Loading Spinner

Use `Loader2` with `animate-spin`:

```tsx
import { Loader2 } from 'lucide-react'

<Loader2 size={20} className="animate-spin" />

// In Button
<Button disabled>
  <Loader2 size={20} className="animate-spin mr-2" />
  Loading...
</Button>
```

### Dialog/Sheet Close Button

```tsx
import { DialogClose } from '@baole/ui'
import { X } from 'lucide-react'

<DialogClose asChild>
  <button className="absolute right-4 top-4">
    <X size={20} />
    <span className="sr-only">Close</span>
  </button>
</DialogClose>
```

---

## Color & Styling

### Inherit Text Color

By default, icons use `currentColor`:

```tsx
<div className="text-red-500">
  <AlertCircle size={20} /> {/* Will be red */}
</div>
```

### Custom Color

```tsx
<Plus size={20} className="text-green-500" />

// Or inline
<Plus size={20} color="#10b981" />
```

### Gradient Icon (via className)

```tsx
<Star
  size={24}
  className="fill-gradient-to-r from-purple-400 to-pink-400"
/>
```

---

## Do's and Don'ts

### ✅ Do

- Use consistent sizing (16, 20, 24)
- Keep default `strokeWidth: 2`
- Include `aria-label` for icon-only buttons
- Use semantic icons (e.g., `Trash2` for delete, not `Minus`)

### ❌ Don't

- Don't mix different stroke widths
- Don't use icons without accessible labels
- Don't use decorative icons in critical actions
- Don't resize icons with CSS `transform: scale()` (use `size` prop)

---

## Full Icon List

Browse all 1000+ icons at: [lucide.dev](https://lucide.dev)

---

**Next:** Read [design-tokens/colors.md](./design-tokens/colors.md)
