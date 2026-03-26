# @baolq/ui Quick Start Guide

Get up and running with @baolq/ui in 5 minutes.

---

## Installation

```bash
# Install the component library and icon package
npm install @baolq/ui lucide-react

# Or with pnpm
pnpm add @baolq/ui lucide-react

# Or with yarn
yarn add @baolq/ui lucide-react
```

---

## Setup

### 1. Import Styles

Add the stylesheet import to your app's entry point:

```tsx
// src/main.tsx or src/app/App.tsx
import '@baolq/ui/style.css'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
```

### 2. Configure Tailwind (Optional but Recommended)

If you're using Tailwind CSS in your project, extend your config with the @baolq/ui preset:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { baolePreset } from '@baolq/ui/tailwind-preset'

export default {
  presets: [baolePreset],
  content: [
    './src/**/*.{ts,tsx}',
    // Include @baolq/ui components in scan
    './node_modules/@baolq/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
} satisfies Config
```

### 3. Set Up Dark Background

@baolq/ui is designed for dark backgrounds. Wrap your app with the signature gradient:

```tsx
// App.tsx
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Your app content */}
    </div>
  )
}
```

---

## Your First Component

### Button Example

```tsx
import { Button } from '@baolq/ui'
import { Plus } from 'lucide-react'

function Example() {
  return (
    <div className="p-8">
      <Button
        variant="gradient"
        size="lg"
        leftIcon={<Plus size={16} />}
        onClick={() => alert('Clicked!')}
      >
        Create New Project
      </Button>
    </div>
  )
}
```

### Card Example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from '@baolq/ui'

function Example() {
  return (
    <Card variant="glass" hoverable>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Premium Plan</CardTitle>
            <CardDescription>Best for growing teams</CardDescription>
          </div>
          <Badge variant="gradient">Popular</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-4xl font-bold text-white">
          $49<span className="text-lg text-white/60">/month</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="gradient" fullWidth>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Form Example

```tsx
import { Input, Button, Card, CardHeader, CardTitle, CardContent } from '@baolq/ui'
import { Mail, Lock } from 'lucide-react'
import { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card variant="glass" className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="email"
          placeholder="you@example.com"
          label="Email"
          leftIcon={<Mail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="••••••••"
          label="Password"
          leftIcon={<Lock size={16} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
      </CardContent>
    </Card>
  )
}
```

---

## Component Import Patterns

### Individual Imports

```tsx
import { Button } from '@baolq/ui'
import { Card, CardHeader, CardTitle } from '@baolq/ui'
import { Badge } from '@baolq/ui'
```

### Batch Imports

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Input,
  Separator,
} from '@baolq/ui'
```

### Icon Imports (from lucide-react)

```tsx
import {
  Plus,
  Search,
  Heart,
  Settings,
  ArrowRight,
  Download,
  Trash2,
} from 'lucide-react'
```

---

## Common Patterns

### Dashboard Layout

```tsx
import { Card, CardHeader, CardTitle, CardContent, Badge } from '@baolq/ui'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white/60">
                Total Revenue
              </CardTitle>
              <DollarSign size={16} className="text-white/40" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">$45,231</div>
              <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white/60">
                Active Users
              </CardTitle>
              <Users size={16} className="text-white/40" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">2,847</div>
              <p className="text-xs text-white/50 mt-1">+180 since last week</p>
            </CardContent>
          </Card>

          <Card variant="gradient" hoverable>
            <CardHeader>
              <Badge variant="gradient" className="mb-2">Featured</Badge>
              <CardTitle>Upgrade to Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">
                Unlock premium features
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
```

### Status Badges

```tsx
import { Badge } from '@baolq/ui'

function OrderStatus({ status }: { status: string }) {
  const statusMap = {
    completed: { variant: 'success', label: 'Completed' },
    pending: { variant: 'warning', label: 'Pending' },
    failed: { variant: 'destructive', label: 'Failed' },
    processing: { variant: 'info', label: 'Processing' },
  }

  const config = statusMap[status] || statusMap.pending

  return (
    <Badge variant={config.variant} dot>
      {config.label}
    </Badge>
  )
}
```

### Loading States

```tsx
import { Button, Skeleton, Card, CardHeader, CardContent } from '@baolq/ui'
import { useState } from 'react'

function DataFetcher() {
  const [loading, setLoading] = useState(false)

  const handleFetch = async () => {
    setLoading(true)
    await fetchData()
    setLoading(false)
  }

  return (
    <Card variant="glass">
      <CardHeader>
        <Button
          variant="gradient"
          loading={loading}
          onClick={handleFetch}
        >
          Load Data
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            <Skeleton variant="text" lines={3} />
            <div className="flex gap-3">
              <Skeleton variant="circle" width="48px" height="48px" />
              <Skeleton variant="text" lines={2} className="flex-1" />
            </div>
          </div>
        ) : (
          <p>Data loaded!</p>
        )}
      </CardContent>
    </Card>
  )
}
```

---

## Styling Tips

### Customizing Components

All components accept `className` for additional styling:

```tsx
<Button
  variant="gradient"
  className="shadow-2xl shadow-purple-500/50"
>
  Extra Glow
</Button>

<Card
  variant="glass"
  className="border-2 border-purple-400/30"
>
  Custom Border
</Card>
```

### Gradient Text

```tsx
<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
  Gradient Heading
</h1>
```

### Glass Effect

```tsx
<div className="bg-white/5 border border-white/10 backdrop-blur-[12px] rounded-xl p-6">
  Custom glass container
</div>
```

---

## TypeScript Support

All components are fully typed:

```tsx
import type { ButtonProps, CardProps, InputProps } from '@baolq/ui'

// Component with typed props
const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}

// Type-safe variant usage
const variant: ButtonProps['variant'] = 'gradient' // ✅ Type-safe
const invalidVariant: ButtonProps['variant'] = 'invalid' // ❌ Type error
```

---

## Accessibility

All @baolq/ui components follow accessibility best practices:

### Keyboard Navigation

```tsx
// Buttons are focusable and activate with Enter/Space
<Button variant="gradient">
  Keyboard Accessible
</Button>

// Icon-only buttons need labels
<Button size="icon" variant="ghost">
  <Settings size={16} />
  <span className="sr-only">Open Settings</span>
</Button>
```

### Form Labels

```tsx
// Inputs with labels are automatically linked
<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
/>
```

---

## Next Steps

### Explore Documentation

1. **[Guidelines.md](./Guidelines.md)** — Complete usage guide
2. **[overview-components.md](./overview-components.md)** — All 45 components
3. **[overview-icons.md](./overview-icons.md)** — Icon system
4. **[design-tokens/colors.md](./design-tokens/colors.md)** — Color system

### Component Guides

- [button.md](./components/button.md) — Button variants and usage
- [card.md](./components/card.md) — Card compositions
- [badge.md](./components/badge.md) — Badge patterns

### Try the Showcase

Run the showcase app to see all components in action:

```bash
npm run dev
```

Visit the running app to explore interactive examples of every component.

---

## Need Help?

- **GitHub Issues**: https://github.com/unique01082/baole-ui/issues
- **Documentation**: `/guidelines/baole-ui/`
- **Showcase App**: Run `npm run dev`

---

**Welcome to @baolq/ui!** 🎨✨

*"In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"*
