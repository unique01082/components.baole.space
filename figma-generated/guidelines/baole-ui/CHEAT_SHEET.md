# @baole/ui Cheat Sheet

Quick reference for the most common patterns and components.

---

## 🎨 Design Tokens

### Colors

```css
/* Backgrounds */
--color-bg: #0f0c29                      /* Page background */
--color-bg-glass: rgba(255,255,255,0.05) /* Glass surfaces */
--color-bg-input: rgba(255,255,255,0.06) /* Form inputs */

/* Text */
--color-text: #ffffff                    /* Primary text */
--color-text-secondary: rgba(255,255,255,0.7)  /* Secondary */
--color-text-muted: rgba(255,255,255,0.5)      /* Muted */

/* Borders */
--color-border: rgba(255,255,255,0.1)    /* Default border */
--color-border-focus: rgba(167,139,250,0.7)    /* Focus state */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #667eea, #764ba2)
--gradient-success: linear-gradient(135deg, #43e97b, #38f9d7)
--gradient-danger: linear-gradient(135deg, #f5576c, #f093fb)
```

### Utility Classes

```css
.glass-card         /* Glass surface with backdrop blur */
.gradient-text      /* Gradient text (bg-clip-text) */
.gradient-border    /* Gradient border effect */
```

---

## 🔘 Button

```tsx
import { Button } from '@baole/ui'

/* Variants */
<Button variant="gradient">Primary CTA</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Subtle</Button>
<Button variant="destructive">Delete</Button>
<Button variant="success">Confirm</Button>

/* Sizes */
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>  {/* default */}
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>

/* With Icons */
<Button leftIcon={<Plus size={16} />}>Create</Button>
<Button rightIcon={<ArrowRight size={16} />}>Next</Button>

/* States */
<Button loading>Saving...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

**Choosing Variant:**
- `gradient` → Primary action (1 per screen)
- `outline` → Secondary action
- `ghost` → Tertiary action
- `destructive` → Delete, remove
- `success` → Confirm, approve

---

## 🎴 Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@baole/ui'

/* Variants */
<Card variant="glass">Glass (default)</Card>
<Card variant="gradient">Gradient border</Card>
<Card variant="solid">Solid background</Card>
<Card variant="outlined">Transparent</Card>

/* Features */
<Card hoverable>Lifts on hover</Card>
<Card padding="none">Full bleed content</Card>

/* Structure */
<Card variant="glass">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    Body content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

## 🏷️ Badge

```tsx
import { Badge } from '@baole/ui'

/* Variants */
<Badge variant="default">Default</Badge>
<Badge variant="gradient">Featured</Badge>
<Badge variant="success">Online</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="info">Info</Badge>

/* Features */
<Badge size="sm">Small</Badge>
<Badge dot>With dot</Badge>
<Badge removable onRemove={() => {}}>Removable</Badge>
```

**Usage Pattern:**
```tsx
/* Status indicator */
<Badge variant="success" dot>Online</Badge>

/* Notification count */
<Badge variant="destructive" size="sm">3</Badge>

/* Tag system */
<Badge variant="outline" removable onRemove={handleRemove}>
  React
</Badge>
```

---

## ✏️ Input

```tsx
import { Input } from '@baole/ui'

/* Sizes */
<Input size="sm" />
<Input size="md" />  {/* default */}
<Input size="lg" />

/* Status */
<Input status="default" />
<Input status="success" hint="Valid email" />
<Input status="error" error="Required field" />
<Input status="warning" />

/* Features */
<Input label="Email" placeholder="you@example.com" />
<Input leftIcon={<Search size={16} />} />
<Input rightIcon={<Mail size={16} />} />
<Input clearable onClear={() => setValue('')} />
<Input loading />
```

**Form Pattern:**
```tsx
<div className="space-y-4">
  <Input
    label="Username"
    placeholder="johndoe"
    hint="3-20 characters"
  />
  <Input
    type="password"
    label="Password"
    error={errors.password}
    status={errors.password ? 'error' : 'default'}
  />
</div>
```

---

## 🎭 Layout Patterns

### Page Background

```tsx
<div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
  {/* Content */}
</div>
```

### Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Grid of Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### Flex Row with Gap

```tsx
<div className="flex gap-3 items-center">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</div>
```

### Stack with Spacing

```tsx
<div className="space-y-4">
  <Card>...</Card>
  <Card>...</Card>
</div>
```

---

## 🎨 Gradient Text

```tsx
<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
  Gradient Heading
</h1>

{/* Or use utility class */}
<h1 className="text-4xl font-bold gradient-text">
  Gradient Heading
</h1>
```

---

## 📱 Icons (Lucide React)

```tsx
import {
  Plus, Minus, X, Check, Search,        // Actions
  ChevronDown, ChevronRight, ArrowRight, // Navigation
  AlertCircle, Info, CheckCircle2,       // Feedback
  Heart, Star, Settings, User,           // UI
  Loader2,                               // Loading
} from 'lucide-react'

/* Sizes */
<Plus size={16} />  {/* Button icons */}
<Plus size={20} />  {/* Default UI */}
<Plus size={24} />  {/* Standalone */}

/* With Button */
<Button leftIcon={<Plus size={16} />}>Create</Button>

/* With Input */
<Input leftIcon={<Search size={16} />} />

/* Loading spinner */
<Loader2 size={20} className="animate-spin" />
```

---

## 🎯 Common Patterns

### Hero Section

```tsx
<section className="py-20 px-4 text-center">
  <h1 className="text-6xl font-bold gradient-text mb-4">
    @baole/ui
  </h1>
  <p className="text-xl text-white/70 mb-8">
    Component library description
  </p>
  <div className="flex gap-3 justify-center">
    <Badge variant="gradient">v0.1.0</Badge>
    <Badge variant="success" dot>45+ Components</Badge>
  </div>
</section>
```

### Stat Card

```tsx
<Card variant="glass">
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-sm text-white/60">
      Active Users
    </CardTitle>
    <Users size={16} className="text-white/40" />
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-bold">2,847</div>
    <p className="text-xs text-white/50 mt-1">+180 this week</p>
  </CardContent>
</Card>
```

### Pricing Card

```tsx
<Card variant="gradient" padding="lg">
  <CardHeader>
    <Badge variant="gradient" className="mb-2">Popular</Badge>
    <CardTitle className="text-2xl">Pro Plan</CardTitle>
    <CardDescription>For growing teams</CardDescription>
  </CardHeader>
  <CardContent className="pt-6">
    <div className="text-5xl font-bold">
      $49<span className="text-xl text-white/60">/mo</span>
    </div>
  </CardContent>
  <CardFooter className="pt-6">
    <Button variant="gradient" fullWidth size="lg">
      Get Started
    </Button>
  </CardFooter>
</Card>
```

### Login Form

```tsx
<Card variant="glass" className="max-w-md mx-auto">
  <CardHeader>
    <CardTitle>Welcome Back</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input
      type="email"
      label="Email"
      leftIcon={<Mail size={16} />}
    />
    <Input
      type="password"
      label="Password"
      leftIcon={<Lock size={16} />}
    />
    <Button variant="gradient" fullWidth>
      Sign In
    </Button>
  </CardContent>
</Card>
```

### Loading Skeleton

```tsx
import { Skeleton } from '@baole/ui'

<div className="space-y-4">
  {/* Text skeleton */}
  <Skeleton variant="text" lines={3} />
  
  {/* Avatar + text */}
  <div className="flex gap-3">
    <Skeleton variant="circle" width="48px" height="48px" />
    <div className="flex-1">
      <Skeleton variant="text" lines={2} />
    </div>
  </div>
  
  {/* Card skeleton */}
  <Skeleton variant="card" />
</div>
```

---

## 🔍 Quick Decisions

### "Should I use...?"

| Question | Answer |
|----------|--------|
| Plain `<button>` or `<Button>`? | Always use `<Button>` |
| Plain `<input>` or `<Input>`? | Always use `<Input>` |
| DIY card or `<Card>`? | Always use `<Card>` |
| Which Button variant? | `gradient` = primary, `outline` = secondary |
| Badge or Button? | Badge = status/label, Button = action |
| Card variant? | `glass` = default, `gradient` = featured |

---

## ♿ Accessibility

```tsx
/* Icon-only buttons need labels */
<Button size="icon">
  <Settings size={16} />
  <span className="sr-only">Settings</span>
</Button>

/* Form inputs with labels */
<Input label="Email" type="email" />

/* Focus states (automatic) */
focus:ring-2 focus:ring-purple-400/20
```

---

## 🎨 Color Reference

### Semantic Colors

```tsx
/* Success */
text-emerald-400
bg-emerald-500/10
border-emerald-400/30

/* Warning */
text-amber-400
bg-amber-500/10
border-amber-400/30

/* Error/Destructive */
text-rose-400
bg-rose-500/10
border-rose-400/30

/* Info */
text-blue-400
bg-blue-500/10
border-blue-400/30
```

### Gradient Colors

```tsx
/* Purple → Fuchsia → Pink */
from-purple-400 via-fuchsia-400 to-pink-400

/* Emerald → Teal (success) */
from-emerald-500 to-teal-500

/* Rose → Pink (destructive) */
from-rose-500 to-pink-600
```

---

## 📦 Import Cheat Sheet

```tsx
/* Components */
import {
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Badge,
  Input,
  Separator,
  Skeleton,
} from '@baole/ui'

/* Icons */
import {
  Plus, Search, Heart, Settings,
  ChevronDown, ArrowRight,
  AlertCircle, Check,
  Loader2,
} from 'lucide-react'

/* Utilities */
import { cn } from '@baole/ui'  // className merger
```

---

## 🚀 TypeScript

```tsx
import type { ButtonProps, CardProps, InputProps } from '@baole/ui'

/* Type-safe props */
const variant: ButtonProps['variant'] = 'gradient'
const size: ButtonProps['size'] = 'lg'

/* Component with typed props */
const MyButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} />
)
```

---

## 📏 Spacing Scale

```tsx
gap-1   = 4px
gap-2   = 8px
gap-3   = 12px
gap-4   = 16px
gap-6   = 24px
gap-8   = 32px

p-2     = 8px
p-4     = 16px
p-6     = 24px
p-8     = 32px

space-y-2  = 8px vertical
space-y-4  = 16px vertical
space-y-6  = 24px vertical
```

---

**Need more?** Check the full [Guidelines.md](./Guidelines.md)

*"In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"*
