# @baolq/ui — React Component Library

> A rich, dark-gradient React component library for the baole.space ecosystem

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-purple)
![React](https://img.shields.io/badge/React-19+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## ✨ Features

- 🎨 **45+ Components** — Comprehensive library with Ant Design-level prop richness
- 🌙 **Dark-First Design** — Optimized for dark mode with gradient accents
- 🔮 **Glassmorphism** — Frosted glass surfaces with backdrop blur
- ⚡ **Fully Typed** — TypeScript strict mode, zero `any` types
- 🎯 **Radix UI Primitives** — Accessible components built on Radix
- 🎭 **CVA Variants** — Flexible styling with class-variance-authority
- 🎪 **Motion Ready** — Animation support via motion/react
- 📦 **Tree-shakeable** — Only import what you need

---

## 🚀 Quick Start

### Installation

```bash
npm install @baolq/ui lucide-react
# or
pnpm add @baolq/ui lucide-react
# or
yarn add @baolq/ui lucide-react
```

### Setup

Import the stylesheet in your app entry point:

```tsx
// src/main.tsx or src/app/App.tsx
import '@baolq/ui/style.css'
```

### Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@baolq/ui'
import { Plus } from 'lucide-react'

function App() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle>Welcome to @baolq/ui</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Enter your name" />
        <Button variant="gradient" leftIcon={<Plus size={16} />}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
```

---

## 📚 Documentation

Comprehensive guidelines are available in the `/guidelines/` directory:

### Getting Started

1. **[Guidelines.md](./guidelines/Guidelines.md)** — Master index and AI workflow
2. **[overview-components.md](./guidelines/overview-components.md)** — Complete component reference
3. **[overview-icons.md](./guidelines/overview-icons.md)** — Icon system documentation

### Design Tokens

- **[colors.md](./guidelines/design-tokens/colors.md)** — Color system and usage
- **typography.md** — Font scales and text patterns *(coming soon)*
- **spacing.md** — Layout and spacing conventions *(coming soon)*

### Component Guides

Detailed documentation for each component:

- **[button.md](./guidelines/components/button.md)** — Button variants, sizes, and states
- **[card.md](./guidelines/components/card.md)** — Card compositions and patterns
- **[input.md](./guidelines/components/input.md)** — Form inputs with validation *(coming soon)*
- ...and 40+ more component guides

---

## 🎨 Component Categories

### Inputs & Forms
Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider, Form, Label, Toggle, ToggleGroup, InputOTP

### Overlays
Dialog, AlertDialog, Drawer, Sheet, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu

### Feedback
Alert, Toast (Sonner), Progress, Skeleton

### Navigation
Tabs, Breadcrumb, NavigationMenu, Menubar, Pagination, Sidebar

### Data Display
Table, Accordion, Collapsible, Calendar, Carousel, Chart, Command

### Layout
Card, Separator, AspectRatio, ScrollArea, Resizable

### Utility
Avatar, Badge

---

## 🎯 Design Philosophy

@baolq/ui embodies the creative energy of a developer, photographer, and gamer:

### Visual Language

- **Dark backgrounds** — Base: `#0f0c29` with gradient overlays
- **Glassmorphism** — Frosted glass surfaces with `backdrop-blur`
- **Gradient accents** — Purple → Fuchsia → Pink spectrum
- **Subtle glows** — Color-matched shadows for depth
- **White text** — High contrast on dark backgrounds
- **Minimal borders** — `rgba(255,255,255,0.1)` barely-visible dividers

### Philosophy Quote

> _"In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"_  
> — Bao LE, baked into every pixel of this component library

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19+ | UI framework |
| **TypeScript** | 5+ | Type safety (strict mode) |
| **Tailwind CSS** | v4 | Utility-first styling |
| **Radix UI** | Latest | Accessible primitives |
| **CVA** | Latest | Variant management |
| **Lucide React** | Latest | Icon system |
| **Motion** | Latest | Animations (optional) |
| **react-hook-form** | Latest | Form handling |
| **sonner** | Latest | Toast notifications |

---

## 📦 Project Structure

```
@baolq/ui/
├── src/
│   ├── components/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ... (45+ components)
│   ├── lib/
│   │   └── utils.ts              # cn() helper
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── ...
│   ├── tokens/
│   │   └── index.css             # Design tokens
│   ├── index.ts                  # Barrel export
│   └── index.css                 # Tailwind + utilities
├── guidelines/
│   ├── Guidelines.md             # Master documentation
│   ├── overview-components.md
│   ├── overview-icons.md
│   ├── design-tokens/
│   │   ├── colors.md
│   │   ├── typography.md
│   │   └── spacing.md
│   └── components/
│       ├── button.md
│       ├── card.md
│       └── ... (29+ guides)
├── showcase/                     # Demo application
├── tailwind-preset.ts            # Tailwind preset export
└── README.md
```

---

## 🎮 Showcase

Run the showcase app to see all components in action:

```bash
cd showcase
npm install
npm run dev
```

Visit `http://localhost:5173` to explore:

- All 45+ components with live examples
- Multiple variants and states
- Interactive demos
- Code snippets

---

## 🤝 Contributing

Contributions are welcome! Please read the [Guidelines.md](./guidelines/Guidelines.md) first.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/unique01082/components.baole.space.git

# Install dependencies
npm install

# Build the library
npm run build

# Run showcase
cd showcase
npm install
npm run dev
```

---

## 📄 License

MIT © Bao LE

---

## 🔗 Links

- **GitHub**: https://github.com/unique01082/components.baole.space
- **Portfolio**: https://baole.space
- **NPM**: *(coming soon)*
- **Storybook**: *(coming soon)*

---

## 🙏 Acknowledgments

Built with inspiration from:

- **shadcn/ui** — Component architecture and patterns
- **Ant Design** — Prop richness and completeness
- **Radix UI** — Accessible primitives
- **Tailwind CSS** — Utility-first styling philosophy

---

## 📊 Component Checklist

**Implemented (Core):**
- ✅ Button (7 variants, 6 sizes, loading, icons)
- ✅ Card (4 variants, hoverable, composable)
- ✅ Badge (8 variants, removable, dots)
- ✅ Input (validation, icons, clearable)
- ✅ Separator (gradient, labels)
- ✅ Skeleton (animated, variants)

**In Progress:**
- 🚧 Dialog, Sheet, Drawer
- 🚧 Select, Checkbox, RadioGroup
- 🚧 Tabs, Accordion, Table
- 🚧 Form (react-hook-form integration)
- 🚧 Toast (Sonner wrapper)
- 🚧 And 35+ more...

---

<div align="center">

**Made with 💜 for the baole.space ecosystem**

</div>
