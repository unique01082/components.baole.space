# Figma Make Prompt — @baole/ui Component Library

> **Target**: Figma Make AI code generator
> **Output**: A complete, production-ready React component library package + showcase app + Figma Make guidelines
> **Format**: npm package (`@baole/ui`) built with Vite library mode, React 19, TypeScript strict, Tailwind CSS v4, Radix UI primitives, CVA

---

## CRITICAL INSTRUCTIONS — READ BEFORE GENERATING ANY CODE

Follow these steps **in order**. Do not skip any step.

1. Read this entire prompt first.
2. Set up the package structure and design tokens FIRST — all components depend on them.
3. Build all 45 components with the exact prop APIs documented here.
4. Build the showcase page AFTER all components exist.
5. Generate all guidelines documentation LAST, after the final component list is confirmed.
6. Verify: `npm run build` must complete with zero TypeScript errors.

**IMPORTANT**: Every component must use the baole.space dark gradient design tokens defined in Section 3. This is NOT a light-mode library. The visual language is dark, gradient, glassmorphism — vibrant, not minimal.

---

## 1. Project Identity

**Package name**: `@baole/ui`
**Version**: `0.1.0`
**Description**: A rich, dark-gradient React component library for the baole.space ecosystem. Ant Design-level prop richness. shadcn/ui architecture (Radix primitives + CVA). baole.space visual style.
**Author**: Bao LE
**License**: MIT
**Repository**: `https://github.com/unique01082/baole-ui`

---

## 2. Tech Stack

```yaml
build_tool: "Vite 6+ (library mode)"
framework: "React 19+"
language: "TypeScript 5+ (strict mode, no 'any')"
styling: "Tailwind CSS v4"
primitives: "Radix UI (@radix-ui/*)"
variants: "class-variance-authority (CVA)"
cn_utility: "clsx + tailwind-merge"
icons: "Lucide React (peer dependency)"
animation: "motion/react (peer dependency, optional per component)"
fonts: "Space Grotesk + Inter (Google Fonts CDN — document in index.html/README)"
form: "react-hook-form (peer dependency, for Form component)"
toast: "sonner (peer dependency, for Sonner wrapper)"
otp: "input-otp (peer dependency)"
date: "react-day-picker (peer dependency, for Calendar)"
chart: "recharts (peer dependency, for Chart)"
package_manager: "npm"
node: ">=18"
```

**`package.json` key fields:**

```json
{
  "name": "@baole/ui",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./style.css": "./dist/style.css",
    "./tailwind-preset": "./tailwind-preset.ts"
  },
  "files": ["dist", "tailwind-preset.ts", "README.md"],
  "sideEffects": ["./dist/style.css"],
  "peerDependencies": {
    "react": ">=19",
    "react-dom": ">=19",
    "tailwindcss": ">=4"
  }
}
```

**`vite.config.ts` must use library mode:**

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "tailwindcss",
        "lucide-react",
        "motion/react",
      ],
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "src") } },
});
```

---

## 3. Design Tokens

### 3.1 CSS Custom Properties — `src/tokens/index.css`

Create this file with all design tokens. This is imported in `src/index.ts` as the main style.

```css
/* @baole/ui — Design Tokens */
/* Import Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

@layer base {
  :root {
    /* ── Background & Surface ── */
    --color-bg: #0f0c29;
    --color-bg-secondary: #1a1640;
    --color-bg-tertiary: #24243e;
    --color-bg-mesh-mid: #302b63;
    --color-bg-elevated: rgba(255, 255, 255, 0.05);
    --color-bg-elevated-hover: rgba(255, 255, 255, 0.08);
    --color-bg-glass: rgba(255, 255, 255, 0.05);
    --color-bg-glass-hover: rgba(255, 255, 255, 0.08);
    --color-bg-glass-active: rgba(255, 255, 255, 0.12);
    --color-bg-overlay: rgba(0, 0, 0, 0.7);
    --color-bg-input: rgba(255, 255, 255, 0.06);
    --color-bg-input-hover: rgba(255, 255, 255, 0.1);

    /* ── Border ── */
    --color-border: rgba(255, 255, 255, 0.1);
    --color-border-strong: rgba(255, 255, 255, 0.2);
    --color-border-subtle: rgba(255, 255, 255, 0.06);
    --color-border-focus: rgba(167, 139, 250, 0.7); /* violet-400/70 */
    --color-border-error: rgba(248, 113, 113, 0.7); /* red-400/70 */
    --color-border-success: rgba(52, 211, 153, 0.7); /* emerald-400/70 */
    --color-border-warning: rgba(251, 191, 36, 0.7); /* amber-400/70 */

    /* ── Text ── */
    --color-text: #ffffff;
    --color-text-secondary: rgba(255, 255, 255, 0.7);
    --color-text-muted: rgba(255, 255, 255, 0.5);
    --color-text-disabled: rgba(255, 255, 255, 0.3);
    --color-text-inverse: #0f0c29;
    --color-text-placeholder: rgba(255, 255, 255, 0.35);

    /* ── Accent Gradients ── */
    --gradient-primary: linear-gradient(135deg, #667eea, #764ba2);
    --gradient-secondary: linear-gradient(135deg, #f093fb, #f5576c);
    --gradient-tertiary: linear-gradient(135deg, #4facfe, #00f2fe);
    --gradient-success: linear-gradient(135deg, #43e97b, #38f9d7);
    --gradient-warning: linear-gradient(135deg, #f6d365, #fda085);
    --gradient-danger: linear-gradient(135deg, #f5576c, #f093fb);
    --gradient-purple: linear-gradient(135deg, #a855f7, #ec4899);
    --gradient-ocean: linear-gradient(135deg, #667eea, #00f2fe);
    --gradient-hero-bg: linear-gradient(135deg, #0f0c29, #302b63, #24243e);

    /* ── Solid Semantic Colors ── */
    --color-primary: #a855f7; /* purple-500 */
    --color-primary-hover: #9333ea; /* purple-600 */
    --color-primary-fg: #ffffff;
    --color-secondary: rgba(255, 255, 255, 0.08);
    --color-secondary-fg: rgba(255, 255, 255, 0.9);
    --color-destructive: #f43f5e; /* rose-500 */
    --color-destructive-hover: #e11d48;
    --color-destructive-fg: #ffffff;
    --color-success: #10b981; /* emerald-500 */
    --color-success-fg: #ffffff;
    --color-warning: #f59e0b; /* amber-500 */
    --color-warning-fg: #0f0c29;
    --color-info: #3b82f6; /* blue-500 */
    --color-info-fg: #ffffff;
    --color-muted: rgba(255, 255, 255, 0.08);
    --color-muted-fg: rgba(255, 255, 255, 0.5);
    --color-accent: rgba(255, 255, 255, 0.08);
    --color-accent-fg: rgba(255, 255, 255, 0.9);
    --color-popover: #1a1640;
    --color-popover-fg: rgba(255, 255, 255, 0.9);
    --color-card: rgba(255, 255, 255, 0.04);
    --color-card-fg: #ffffff;

    /* ── Glow / Shadow ── */
    --glow-primary: 0 0 20px rgba(168, 85, 247, 0.35);
    --glow-success: 0 0 20px rgba(16, 185, 129, 0.35);
    --glow-danger: 0 0 20px rgba(244, 63, 94, 0.35);
    --glow-info: 0 0 20px rgba(59, 130, 246, 0.35);
    --glow-warning: 0 0 20px rgba(245, 158, 11, 0.35);
    --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.37);
    --shadow-elevated: 0 25px 50px rgba(0, 0, 0, 0.5);

    /* ── Border Radius ── */
    --radius-sm: 0.375rem; /* 6px */
    --radius-md: 0.5rem; /* 8px */
    --radius-lg: 0.75rem; /* 12px */
    --radius-xl: 1rem; /* 16px */
    --radius-2xl: 1.5rem; /* 24px */
    --radius-full: 9999px;

    /* ── Spacing ── */
    --spacing-section: 5rem; /* 80px — vertical section padding */
    --spacing-container: 1200px; /* max-width for content */

    /* ── Typography ── */
    --font-sans: "Space Grotesk", "Inter", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", "Fira Code", monospace;

    /* ── Transitions ── */
    --transition-fast: 150ms ease;
    --transition-base: 200ms ease;
    --transition-slow: 300ms ease;
    --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

    /* ── Blur ── */
    --blur-glass: 12px;
    --blur-heavy: 24px;

    /* ── Z-index ── */
    --z-dropdown: 1000;
    --z-sticky: 1100;
    --z-modal: 1300;
    --z-toast: 1400;
    --z-tooltip: 1500;
  }
}
```

### 3.2 Tailwind CSS Mappings — `tailwind-preset.ts`

Create this file so consumer apps can reference tokens via Tailwind theme utilities:

```typescript
import type { Config } from "tailwindcss";

export const baolePreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        "baole-bg": "var(--color-bg)",
        "baole-bg-glass": "var(--color-bg-glass)",
        "baole-border": "var(--color-border)",
        "baole-text": "var(--color-text)",
        "baole-muted": "var(--color-text-muted)",
        "baole-primary": "var(--color-primary)",
        "baole-destructive": "var(--color-destructive)",
        "baole-success": "var(--color-success)",
        "baole-warning": "var(--color-warning)",
        "baole-info": "var(--color-info)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backdropBlur: {
        glass: "var(--blur-glass)",
        heavy: "var(--blur-heavy)",
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
        elevated: "var(--shadow-elevated)",
        "glow-primary": "var(--glow-primary)",
        "glow-success": "var(--glow-success)",
        "glow-danger": "var(--glow-danger)",
      },
    },
  },
};
```

### 3.3 Tailwind Directives — `src/index.css`

```css
@import "tailwindcss";
@import "./tokens/index.css";

/* Glass card utility */
@utility glass-card {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(var(--blur-glass));
  -webkit-backdrop-filter: blur(var(--blur-glass));
}

/* Gradient text utility */
@utility gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient border utility */
@utility gradient-border {
  position: relative;
  background-clip: padding-box;
  border: 1px solid transparent;
}
@utility gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: var(--gradient-primary);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

---

## 4. Source File Structure

```
src/
├── index.ts                    # Barrel — re-exports everything
├── index.css                   # Tailwind directives + token imports
├── tokens/
│   └── index.css               # All CSS custom properties (Section 3.1)
├── lib/
│   └── utils.ts                # cn() helper: clsx + tailwind-merge
├── hooks/
│   ├── use-mobile.ts           # useIsMobile hook
│   ├── use-intersection.ts     # useIntersection for scroll-reveal
│   └── use-scroll-position.ts  # useScrollPosition for sticky nav
└── components/
    ├── accordion.tsx
    ├── alert.tsx
    ├── alert-dialog.tsx
    ├── aspect-ratio.tsx
    ├── avatar.tsx
    ├── badge.tsx
    ├── breadcrumb.tsx
    ├── button.tsx
    ├── calendar.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── chart.tsx
    ├── checkbox.tsx
    ├── collapsible.tsx
    ├── command.tsx
    ├── context-menu.tsx
    ├── dialog.tsx
    ├── drawer.tsx
    ├── dropdown-menu.tsx
    ├── form.tsx
    ├── hover-card.tsx
    ├── input.tsx
    ├── input-otp.tsx
    ├── label.tsx
    ├── menubar.tsx
    ├── navigation-menu.tsx
    ├── pagination.tsx
    ├── popover.tsx
    ├── progress.tsx
    ├── radio-group.tsx
    ├── resizable.tsx
    ├── scroll-area.tsx
    ├── select.tsx
    ├── separator.tsx
    ├── sheet.tsx
    ├── sidebar.tsx
    ├── skeleton.tsx
    ├── slider.tsx
    ├── sonner.tsx
    ├── switch.tsx
    ├── table.tsx
    ├── tabs.tsx
    ├── textarea.tsx
    ├── toggle.tsx
    ├── toggle-group.tsx
    └── tooltip.tsx
tailwind-preset.ts
showcase/
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx
    └── pages/
        └── ShowcasePage.tsx
guidelines/
├── Guidelines.md
├── overview-components.md
├── overview-icons.md
├── design-tokens/
│   ├── colors.md
│   ├── typography.md
│   └── spacing.md
└── components/
    ├── button.md
    ├── input.md
    ├── select.md
    ├── dialog.md
    ├── drawer.md
    ├── sheet.md
    ├── tabs.md
    ├── table.md
    ├── tooltip.md
    ├── popover.md
    ├── dropdown-menu.md
    ├── form.md
    ├── toast.md
    ├── badge.md
    ├── card.md
    ├── accordion.md
    ├── alert.md
    ├── alert-dialog.md
    ├── avatar.md
    ├── carousel.md
    ├── command.md
    ├── calendar.md
    ├── checkbox.md
    ├── radio-group.md
    ├── switch.md
    ├── slider.md
    ├── progress.md
    ├── skeleton.md
    └── sidebar.md
```

---

## 5. Utility — `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 6. Component Specifications

All components follow these shared conventions:

- **Radix UI primitive** wrapped in styled shell — pass through all native props with `...props`
- **CVA (class-variance-authority)** for multi-variant styling
- **`data-slot="component-name"`** attribute on root for targeting
- **`className`** always accepted and merged via `cn()`
- **`asChild`** via Radix `Slot` where semantically appropriate (Button, Badge, Label, Avatar)
- **Dark-first design** — all base styles use baole.space tokens; NO light mode defaults
- **Glass-morphism surfaces** — all popover/overlay surfaces get `glass-card` treatment + backdrop-blur

### 6.1 Button — `src/components/button.tsx`

**Ant Design-level richness**: variant, size, loading, disabled, leftIcon, rightIcon, asChild, full-width, gradient variants.

```typescript
type ButtonVariant =
  | "gradient" // Primary gradient bg (purple→fuchsia→pink) — the most prominent CTA
  | "outline" // Glass bg + gradient border — secondary action
  | "ghost" // Transparent + white text — subtle action
  | "destructive" // Red gradient — destructive confirm
  | "success" // Green gradient — positive confirm
  | "secondary" // Muted glass — neutral action
  | "link"; // Text only, underline on hover

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant; // default: 'gradient'
  size?: ButtonSize; // default: 'md'
  loading?: boolean; // Shows spinner, disables interaction
  leftIcon?: React.ReactNode; // Icon placed before children
  rightIcon?: React.ReactNode; // Icon placed after children
  fullWidth?: boolean; // width: 100%
  asChild?: boolean; // Render as child element via Radix Slot
}
```

**Visual spec per variant:**

- `gradient`: `bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02]`
- `outline`: `border border-white/20 bg-white/5 text-white hover:border-purple-400/50 hover:bg-white/10 backdrop-blur-sm`
- `ghost`: `bg-transparent text-white/80 hover:bg-white/10 hover:text-white`
- `destructive`: `bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-glow-danger`
- `success`: `bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-glow-success`
- `secondary`: `bg-white/8 text-white/90 hover:bg-white/12 border border-white/10`
- `link`: `text-purple-400 hover:text-purple-300 underline-offset-4 hover:underline`

**Visual spec per size:**

- `xs`: `h-6 px-2.5 text-xs rounded-md gap-1`
- `sm`: `h-8 px-3 text-sm rounded-md gap-1.5`
- `md`: `h-9 px-4 text-sm rounded-lg gap-2` (default)
- `lg`: `h-11 px-6 text-base rounded-lg gap-2`
- `xl`: `h-13 px-8 text-lg rounded-xl gap-3`
- `icon`: `size-9 rounded-lg` (no padding, square)

**Loading state**: render `<Loader2 className="animate-spin" />` replacing leftIcon (or inline left) + `pointer-events-none opacity-70`

### 6.2 Badge — `src/components/badge.tsx`

```typescript
type BadgeVariant =
  | "default" // Glass bg, subtle border
  | "gradient" // Primary gradient background
  | "outline" // White/10 border, transparent bg
  | "success" // Emerald tint
  | "warning" // Amber tint
  | "destructive" // Rose tint
  | "info" // Blue tint
  | "secondary"; // Muted glass

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: BadgeVariant; // default: 'default'
  size?: "sm" | "md" | "lg"; // default: 'md'
  dot?: boolean; // Show colored status dot before text
  removable?: boolean; // Show × close icon after text
  onRemove?: () => void; // Called when × clicked
  asChild?: boolean;
}
```

**Base style**: `inline-flex items-center gap-1.5 rounded-full font-medium`
All variants use `border border-white/10` as base border.

### 6.3 Input — `src/components/input.tsx`

```typescript
type InputStatus = "default" | "error" | "warning" | "success";

interface InputProps extends React.ComponentProps<"input"> {
  size?: "sm" | "md" | "lg"; // default: 'md'
  status?: InputStatus; // visual validation state
  label?: string; // Floating or above label
  hint?: string; // Helper text below input
  error?: string; // Error message (sets status to 'error')
  prefix?: React.ReactNode; // Decorative leading slot (text/icon)
  suffix?: React.ReactNode; // Decorative trailing slot (text/icon)
  leftIcon?: React.ReactNode; // Icon inside input on the left
  rightIcon?: React.ReactNode; // Icon inside input on the right
  clearable?: boolean; // Show × clear button when non-empty
  onClear?: () => void;
  loading?: boolean; // Show spinner in rightIcon slot
  wrapperClassName?: string; // className for the outer wrapper div
}
```

**Base input style**: `w-full rounded-lg border border-white/10 bg-white/6 text-white placeholder:text-white/35 transition-all duration-200 outline-none`
**Focus**: `focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/20`
**Status borders**: error=`border-red-400/70 focus:ring-red-400/20`, warning=`border-amber-400/70`, success=`border-emerald-400/70`
**Sizes**: sm=`h-8 px-3 text-sm`, md=`h-9 px-3 text-sm` (default), lg=`h-11 px-4 text-base`

### 6.4 Textarea — `src/components/textarea.tsx`

```typescript
interface TextareaProps extends React.ComponentProps<"textarea"> {
  size?: "sm" | "md" | "lg";
  status?: InputStatus;
  label?: string;
  hint?: string;
  error?: string;
  autoResize?: boolean; // Grows with content automatically
  maxLength?: number; // Shows character counter
  showCount?: boolean; // Force show character counter
  wrapperClassName?: string;
}
```

Same visual treatment as Input. Character counter: `absolute bottom-2 right-3 text-xs text-white/40`.

### 6.5 Select — `src/components/select.tsx`

Built on `@radix-ui/react-select`. Expose compound API:

- `Select` (Root)
- `SelectTrigger` — size prop: `sm | md | lg`
- `SelectContent` — popover with glass-card style
- `SelectItem`
- `SelectGroup`
- `SelectLabel`
- `SelectSeparator`
- `SelectValue`
- `SelectScrollUpButton`, `SelectScrollDownButton`

**SelectTrigger style**: Same visual as Input (glass bg, white/10 border, white text, white/35 placeholder). Chevron icon auto-rotates on open.

**SelectContent / popover style**: `glass-card rounded-xl border border-white/10 shadow-elevated backdrop-blur-glass p-1`

**SelectItem style**: `rounded-lg px-3 py-2 text-sm text-white/80 cursor-pointer hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=checked]:text-purple-400`

### 6.6 Checkbox — `src/components/checkbox.tsx`

Built on `@radix-ui/react-checkbox`.

```typescript
interface CheckboxProps extends React.ComponentProps<
  typeof CheckboxPrimitive.Root
> {
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  description?: string;
  status?: InputStatus;
  indeterminate?: boolean;
}
```

**Checked state**: `gradient` background (purple→fuchsia), white checkmark icon.
**Container**: glass card border, `rounded-md`. Size: sm=16px, md=18px, lg=20px.

### 6.7 RadioGroup — `src/components/radio-group.tsx`

Built on `@radix-ui/react-radio-group`.

```typescript
// RadioGroup container
interface RadioGroupProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Root
> {
  direction?: "horizontal" | "vertical"; // default: 'vertical'
}
// RadioGroupItem
interface RadioGroupItemProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> {
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  description?: string;
}
```

**Selected state**: Border becomes `border-purple-400`, center dot uses gradient fill.

### 6.8 Switch — `src/components/switch.tsx`

Built on `@radix-ui/react-switch`.

```typescript
interface SwitchProps extends React.ComponentProps<
  typeof SwitchPrimitive.Root
> {
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  description?: string;
  loading?: boolean; // Thumb shows spinner
  checkedIcon?: React.ReactNode; // Icon inside thumb when on
  uncheckedIcon?: React.ReactNode; // Icon inside thumb when off
}
```

**Track off**: `bg-white/15 border border-white/10`
**Track on**: gradient `from-purple-500 to-fuchsia-500`; add `shadow-glow-primary` glow on focused.
Sizes: sm=`w-9 h-5`, md=`w-11 h-6` (default), lg=`w-14 h-7`.

### 6.9 Slider — `src/components/slider.tsx`

Built on `@radix-ui/react-slider`.

```typescript
interface SliderProps extends React.ComponentProps<
  typeof SliderPrimitive.Root
> {
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean; // Show value tooltip on hover/drag
  showMarks?: boolean; // Render tick marks
  marks?: { value: number; label?: string }[];
  formatValue?: (value: number) => string;
}
```

**Track**: `bg-white/10 rounded-full`. **Range**: gradient `from-purple-500 to-fuchsia-500`. **Thumb**: `bg-white border-2 border-purple-400 shadow-glow-primary`, grows on focus.

### 6.10 Progress — `src/components/progress.tsx`

Built on `@radix-ui/react-progress`.

```typescript
type ProgressVariant = "gradient" | "success" | "warning" | "danger" | "info";

interface ProgressProps extends React.ComponentProps<
  typeof ProgressPrimitive.Root
> {
  value?: number; // 0–100
  variant?: ProgressVariant; // default: 'gradient'
  size?: "sm" | "md" | "lg"; // default: 'md'
  showValue?: boolean; // Show percentage label
  label?: string; // Label above the bar
  animated?: boolean; // Animated shimmer (default: true)
  indeterminate?: boolean; // Infinite loading animation
}
```

**Track**: `bg-white/10 rounded-full overflow-hidden`. **Bar**: gradient fill per variant. Animated shimmer via CSS `@keyframes shimmer`. Sizes: sm=`h-1.5`, md=`h-2.5`, lg=`h-4`.

### 6.11 Card — `src/components/card.tsx`

Compound component: `Card`, `Card.Header` (`CardHeader`), `Card.Title` (`CardTitle`), `Card.Description` (`CardDescription`), `Card.Action` (`CardAction`), `Card.Content` (`CardContent`), `Card.Footer` (`CardFooter`).

```typescript
type CardVariant = "glass" | "gradient" | "solid" | "outlined";

interface CardProps extends React.ComponentProps<"div"> {
  variant?: CardVariant; // default: 'glass'
  hoverable?: boolean; // Add hover lift + glow
  bordered?: boolean; // Force border visibility
  padding?: "none" | "sm" | "md" | "lg"; // default: 'md'
  accentColor?: string; // Gradient override for gradient-border top stripe
}
```

**`glass` variant**: `bg-white/5 border border-white/10 backdrop-blur-glass rounded-xl`
**`gradient` variant**: gradient border using pseudo-element trick + glass bg
**`solid` variant**: `bg-baole-bg-secondary border border-white/10 rounded-xl`
**`outlined` variant**: `bg-transparent border border-white/20 rounded-xl`
**`hoverable`**: add `hover:-translate-y-1 hover:shadow-elevated transition-transform duration-300`

### 6.12 Tabs — `src/components/tabs.tsx`

Built on `@radix-ui/react-tabs`.

```typescript
type TabsVariant = "line" | "card" | "pill" | "gradient";

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TabsVariant; // default: 'line'
  size?: "sm" | "md" | "lg";
}
// TabsList, TabsTrigger, TabsContent — all exposed
```

**`line` variant trigger list**: `border-b border-white/10`. Active: `border-b-2 border-purple-400 text-white`, Inactive: `text-white/50 hover:text-white/80`
**`pill` variant trigger list**: `bg-white/5 rounded-xl p-1`. Active: `bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg text-white shadow-glow-primary`, Inactive: `text-white/60 hover:text-white/90`
**`card` variant**: Card-style tabs with glass bg.
**`gradient` variant**: Full gradient underline animation.

### 6.13 Accordion — `src/components/accordion.tsx`

Built on `@radix-ui/react-accordion`.

```typescript
type AccordionVariant = "default" | "bordered" | "card" | "ghost";

interface AccordionProps extends React.ComponentProps<
  typeof AccordionPrimitive.Root
> {
  variant?: AccordionVariant;
  styles?: "default" | "flush"; // flush = no borders between items
}
// AccordionItem, AccordionTrigger, AccordionContent — all exposed
```

**AccordionTrigger**: `flex justify-between items-center text-white/90 hover:text-white py-4 group`
Chevron icon: `transition-transform duration-200 group-data-[state=open]:rotate-180 text-purple-400`
**AccordionContent**: Glass bg, animated open/close with `data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up`

### 6.14 Alert — `src/components/alert.tsx`

```typescript
type AlertVariant = "default" | "info" | "success" | "warning" | "destructive";

function Alert({
  variant,
  title,
  children,
  icon,
  closable,
  onClose,
}: AlertProps);
// Also expose: AlertTitle, AlertDescription
```

Each variant: glass bg tinted with the semantic color, left border accent stripe (4px), colored icon.
**`default`**: `bg-white/5 border-white/10 text-white`
**`info`**: `bg-blue-500/10 border-l-4 border-blue-400 text-blue-100`
**`success`**: `bg-emerald-500/10 border-l-4 border-emerald-400 text-emerald-100`
**`warning`**: `bg-amber-500/10 border-l-4 border-amber-400 text-amber-100`
**`destructive`**: `bg-rose-500/10 border-l-4 border-rose-400 text-rose-100`

### 6.15 AlertDialog — `src/components/alert-dialog.tsx`

Built on `@radix-ui/react-alert-dialog`. Compound: `AlertDialog`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`.

**Overlay**: `bg-black/70 backdrop-blur-sm`
**Content**: `glass-card rounded-2xl border border-white/10 shadow-elevated max-w-md w-full`
**Action button**: destructive gradient. **Cancel button**: outline variant.

### 6.16 Avatar — `src/components/avatar.tsx`

Built on `@radix-ui/react-avatar`. Compound: `Avatar`, `AvatarImage`, `AvatarFallback`.

```typescript
interface AvatarProps extends React.ComponentProps<
  typeof AvatarPrimitive.Root
> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  ring?: boolean; // Gradient ring border
  ringColor?: string; // Override ring gradient
  status?: "online" | "offline" | "away" | "busy"; // Status indicator dot
  shape?: "circle" | "square"; // default: 'circle'
}
```

**Fallback**: gradient bg (primary gradient), white initials text.
**Ring**: gradient border `from-purple-500 to-pink-500` rendered via box-shadow or border trick.
**Status dot**: bottom-right positioned circle; online=emerald, offline=gray, away=amber, busy=rose.
Sizes: xs=24px, sm=32px, md=40px (default), lg=48px, xl=64px, 2xl=80px.

### 6.17 Dialog — `src/components/dialog.tsx`

Built on `@radix-ui/react-dialog`. Full compound: `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`.

```typescript
interface DialogContentProps extends React.ComponentProps<
  typeof DialogPrimitive.Content
> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showClose?: boolean; // X button in top-right (default: true)
  // All Radix Content props pass through
}
```

**Overlay**: `fixed inset-0 bg-black/70 backdrop-blur-sm z-[var(--z-modal)]`
**Content**: `glass-card rounded-2xl border border-white/10 shadow-elevated fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`
Sizes: sm=`max-w-sm`, md=`max-w-md` (default), lg=`max-w-lg`, xl=`max-w-2xl`, full=`max-w-[95vw] max-h-[95vh]`
Animation: `data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`

### 6.18 Drawer — `src/components/drawer.tsx`

Built on `vaul` (`Drawer` from `vaul`). Compound: `Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`, `DrawerClose`.

Same glass-card treatment as Dialog but slides in from a direction.
`direction` default is bottom (mobile-first). Content: `glass-card border-t border-white/10 rounded-t-2xl`.

### 6.19 Sheet — `src/components/sheet.tsx`

Built on `@radix-ui/react-dialog` as a slide-in variant.

```typescript
interface SheetContentProps extends React.ComponentProps<
  typeof DialogPrimitive.Content
> {
  side?: "top" | "right" | "bottom" | "left"; // default: 'right'
  size?: "sm" | "md" | "lg" | "full";
}
```

**Content**: `glass-card border-l border-white/10 h-screen` (for `right` side). Fixed position off-screen, slides in via `translate-x-full → translate-x-0`.

### 6.20 Dropdown Menu — `src/components/dropdown-menu.tsx`

Built on `@radix-ui/react-dropdown-menu`. Full compound exposure: `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuSub`, `DropdownMenuSubTrigger`, `DropdownMenuSubContent`, `DropdownMenuPortal`.

**Content**: `glass-card rounded-xl border border-white/10 shadow-elevated p-1 min-w-[10rem]`
**Item**: `rounded-lg px-3 py-2 text-sm text-white/80 flex gap-2 items-center cursor-pointer select-none hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[destructive]:text-rose-400 data-[destructive]:hover:bg-rose-500/15`
**Separator**: `bg-white/8 my-1 h-px -mx-1`

### 6.21 Context Menu — `src/components/context-menu.tsx`

Same visual spec as `dropdown-menu.tsx` but built on `@radix-ui/react-context-menu`. Expose full compound API.

### 6.22 Popover — `src/components/popover.tsx`

Built on `@radix-ui/react-popover`. Compound: `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverAnchor`, `PopoverClose`.

**PopoverContent**: `glass-card rounded-xl border border-white/10 shadow-elevated p-4 min-w-[12rem]`
Animation: `data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out ...`

### 6.23 Hover Card — `src/components/hover-card.tsx`

Built on `@radix-ui/react-hover-card`. Same visual as Popover. Compound: `HoverCard`, `HoverCardTrigger`, `HoverCardContent`.

### 6.24 Tooltip — `src/components/tooltip.tsx`

Built on `@radix-ui/react-tooltip`. Expose: `TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent`.

**TooltipContent**: `bg-baole-bg-secondary border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg shadow-elevated backdrop-blur-glass`
Arrow: gradient or solid `bg-baole-bg-secondary`.

### 6.25 Menubar — `src/components/menubar.tsx`

Built on `@radix-ui/react-menubar`. Same visual language as Dropdown. Expose all compound sub-components.

**Menubar root**: glass-card `flex h-10 items-center gap-1 rounded-xl px-2 border border-white/10`
**MenubarTrigger**: `rounded-lg px-3 py-1.5 text-sm text-white/70 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white`

### 6.26 Navigation Menu — `src/components/navigation-menu.tsx`

Built on `@radix-ui/react-navigation-menu`. Expose full compound API. Glass treatment for dropdown panels.

### 6.27 Breadcrumb — `src/components/breadcrumb.tsx`

No Radix dependency. Compound: `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`, `BreadcrumbPage`, `BreadcrumbEllipsis`.

**Separator**: `ChevronRight` icon from Lucide, `text-white/30`.
**Link**: `text-white/60 hover:text-white transition-colors text-sm`
**Page (current)**: `text-white font-medium text-sm cursor-default`

### 6.28 Pagination — `src/components/pagination.tsx`

```typescript
interface PaginationProps {
  total: number;
  page: number;
  pageSize?: number; // default: 10
  onChange?: (page: number) => void;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  simple?: boolean;
  disabled?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}
```

Buttons use `Button` component internally. Active page: gradient variant. Inactive: ghost variant.

### 6.29 Table — `src/components/table.tsx`

Compound: `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`.

```typescript
interface TableProps extends React.ComponentProps<"table"> {
  striped?: boolean; // Alternate row bg: white/2
  hoverable?: boolean; // Row hover: bg-white/5
  bordered?: boolean; // Cell borders
  size?: "sm" | "md" | "lg";
  stickyHeader?: boolean; // thead: sticky top-0 backdrop-blur glass
  loading?: boolean; // Skeleton overlay
  caption?: string;
}
```

**Table container**: `w-full overflow-x-auto rounded-xl border border-white/10`
**thead bg**: `bg-white/5`, **th text**: `text-white/60 uppercase text-xs tracking-wider font-semibold`
**td text**: `text-white/80`
**row hover**: `hover:bg-white/5 transition-colors`

### 6.30 Form — `src/components/form.tsx`

Built on `react-hook-form` + `@radix-ui/react-label`. Expose: `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`.

**FormLabel**: `text-white/80 text-sm font-medium`
**FormDescription**: `text-white/50 text-xs`
**FormMessage**: `text-rose-400 text-xs flex gap-1 items-center` (with AlertCircle icon)

### 6.31 Label — `src/components/label.tsx`

Built on `@radix-ui/react-label`.
Style: `text-sm font-medium text-white/80 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50`

### 6.32 Collapsible — `src/components/collapsible.tsx`

Built on `@radix-ui/react-collapsible`. Expose: `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`. Animate content open/close.

### 6.33 Command — `src/components/command.tsx`

Built on `cmdk`. Expose: `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandSeparator`, `CommandShortcut`.

**CommandDialog**: glass-card overlay dialog.
**CommandInput**: glass input with Search icon left.
**CommandList**: `max-h-64 overflow-y-auto py-1`
**CommandItem**: same as DropdownMenuItem style.

### 6.34 Calendar — `src/components/calendar.tsx`

Built on `react-day-picker`. Glass container, custom day styling: selected day gets gradient bg.

### 6.35 Carousel — `src/components/carousel.tsx`

Built on `embla-carousel-react`. Compound: `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`.

Navigation buttons: glass circle buttons with `ChevronLeft`/`ChevronRight`.

### 6.36 Chart — `src/components/chart.tsx`

Built on `recharts`. Expose: `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`. ChartConfig type defines colors (using CSS vars from tokens).

### 6.37 Input OTP — `src/components/input-otp.tsx`

Built on `input-otp`. Compound: `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator`.
**Slot style**: glass-card square `w-10 h-12 text-center text-white border border-white/10 rounded-lg focus:border-purple-400/70 focus:ring-purple-400/20`

### 6.38 Scroll Area — `src/components/scroll-area.tsx`

Built on `@radix-ui/react-scroll-area`. Compound: `ScrollArea`, `ScrollBar`.
**Scrollbar thumb**: `bg-white/20 rounded-full hover:bg-white/35 transition-colors`

### 6.39 Separator — `src/components/separator.tsx`

Built on `@radix-ui/react-separator`.

```typescript
interface SeparatorProps extends React.ComponentProps<
  typeof SeparatorPrimitive.Root
> {
  variant?: "default" | "gradient"; // gradient: fades in from both sides via mask
  label?: string; // Optional centered label
}
```

**default**: `bg-white/10`
**gradient**: `bg-gradient-to-r from-transparent via-white/20 to-transparent`

### 6.40 Skeleton — `src/components/skeleton.tsx`

```typescript
interface SkeletonProps extends React.ComponentProps<"div"> {
  variant?: "rect" | "circle" | "text" | "card";
  lines?: number; // For 'text' variant: render N lines
  animated?: boolean; // default: true — shimmer animation
  width?: string | number;
  height?: string | number;
}
```

**Base**: `bg-white/8 rounded-md animate-pulse`
**Shimmer animation**: `animate-[shimmer_2s_linear_infinite]` with a CSS gradient sweep.

### 6.41 Sonner (Toast) — `src/components/sonner.tsx`

Wraps `sonner`'s `Toaster` component with baole.space styling applied.
**Toast style overrides via `toastOptions.classNames`**:

- `toast`: `glass-card border border-white/10 text-white rounded-xl`
- `success`: `border-emerald-400/30 bg-emerald-500/10`
- `error`: `border-rose-400/30 bg-rose-500/10`
- `warning`: `border-amber-400/30 bg-amber-500/10`
- `info`: `border-blue-400/30 bg-blue-500/10`
- `actionButton`: Button gradient variant style
- `cancelButton`: Button ghost variant style

Export the `Toaster` wrapper as default + re-export `toast` from `sonner` for imperative usage.

### 6.42 Toggle — `src/components/toggle.tsx`

Built on `@radix-ui/react-toggle`.

```typescript
interface ToggleProps extends React.ComponentProps<
  typeof TogglePrimitive.Root
> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}
```

**off**: `bg-white/5 text-white/60 hover:bg-white/10 hover:text-white`
**on** (`data-[state=on]`): `bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 text-purple-300 border border-purple-400/40`

### 6.43 Toggle Group — `src/components/toggle-group.tsx`

Built on `@radix-ui/react-toggle-group`. Expose: `ToggleGroup`, `ToggleGroupItem`.
**Container**: glass-card or `border border-white/10 rounded-lg p-0.5 inline-flex gap-0.5`
Individual items use Toggle visual style.

### 6.44 Resizable — `src/components/resizable.tsx`

Built on `react-resizable-panels`. Compound: `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle`.
**Handle style**: glass pill `bg-white/10 hover:bg-purple-400/40 transition-colors rounded-full w-1 mx-0.5`

### 6.45 Sidebar — `src/components/sidebar.tsx`

Full navigation sidebar with state management. Expose:
`SidebarProvider`, `Sidebar`, `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarMenuBadge`, `SidebarMenuSub`, `SidebarMenuSubItem`, `SidebarMenuSubButton`, `SidebarSeparator`, `SidebarTrigger`, `SidebarRail`, `useSidebar` hook.

**Sidebar base**: `glass-card border-r border-white/10 w-64 flex flex-col h-screen flex-shrink-0`
**Collapsible**: toggles to icon-only mode (`w-16`), controlled by `useSidebar`.
**MenuButton active**: gradient bg variant. **MenuButton hover**: `bg-white/8`.
**SidebarTrigger**: icon button that toggles sidebar.

### 6.46 Aspect Ratio — `src/components/aspect-ratio.tsx`

Built on `@radix-ui/react-aspect-ratio`. Simple pass-through wrapper.

---

## 7. Showcase App

Create a **standalone Vite + React app** in the `showcase/` directory at the project root. This app imports from the library source (`../../src/index.ts`) for live development. It demonstrates every single component.

**`showcase/src/App.tsx`**: Router with links to each showcase section.
**`showcase/src/pages/ShowcasePage.tsx`**: One long scrollable page with all components.

### ShowcasePage Structure

The showcase page has:

- A sticky `Sidebar` on the left with links to each component section (use the Sidebar component itself!)
- The main content area on the right, scrollable
- A dark gradient background (`bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]`)
- Decorative gradient blur blobs in the background (position:fixed, z-index:0, pointer-events:none)
- Each section has:
  - A section heading with the component name (gradient text style)
  - A brief description of the component
  - Multiple demo cards (use Card component) showing different variants and states

**Demonstrate these component groups in this order:**

#### 7.1 Buttons

- All 7 variants side-by-side: gradient, outline, ghost, destructive, success, secondary, link
- All 6 sizes using the `gradient` variant
- Loading state on all variants
- With leftIcon and rightIcon (use `Plus`, `ArrowRight`, `Download` from Lucide)
- Icon variant (square) size grid
- Disabled state for all variants
- Full-width button in a container

#### 7.2 Badge

- All variants in a row
- All sizes
- With dot indicator
- Removable badges (simulated with state)

#### 7.3 Typography demos (using Heading, Text components styled with design tokens)

- Gradient text headings at multiple sizes
- Body text hierarchy (primary / secondary / muted)

#### 7.4 Cards

- All variants: glass, gradient, solid, outlined
- Hoverable card with mock content (title, description, footer buttons)
- Card with gradient border accent
- Nested cards (card inside card)

#### 7.5 Form Controls

- **Input**: all sizes, all status states (default, error, warning, success), with prefix/suffix, with icons, clearable, loading
- **Textarea**: with character counter, autoResize
- **Select**: with groups, searchable, various sizes
- **Checkbox**: sizes, indeterminate, with label+description, in group
- **RadioGroup**: vertical and horizontal
- **Switch**: all sizes, with icons, loading state
- **Slider**: default, with tooltip, with marks, range (two thumbs)
- **Label**: standalone usage

#### 7.6 Form Component

- A full login form built with react-hook-form + Form, FormField, FormItem, FormLabel, FormControl, FormMessage
- A settings form with multiple field types

#### 7.7 Navigation

- **Tabs**: all 4 variants (line, card, pill, gradient) with content panels
- **Breadcrumb**: with ellipsis, custom separators
- **Navigation Menu**: full example with groups
- **Menubar**: full example
- **Pagination**: various states, simple vs full

#### 7.8 Overlays

- **Dialog**: trigger button opens a dialog with header, body, footer; sizes demo
- **AlertDialog**: confirm delete example
- **Drawer**: bottom (mobile), right (desktop)
- **Sheet**: all sides
- **Popover**: various placements, with form content inside
- **HoverCard**: user profile card example
- **Tooltip**: all placements, as wrapping simple and complex triggers

#### 7.9 Feedback

- **Alert**: all variants with icons, with/without close
- **Toast (Sonner)**: trigger buttons for success/error/warning/info/loading/promise toasts
- **Progress**: all variants, animated, indeterminate, with label and value
- **Skeleton**: text variant (3 lines), avatar + text combo, card skeleton pattern

#### 7.10 Data Display

- **Table**: with striped + hoverable, with loading state, with sticky header, responsive scroll
- **Accordion**: all variants, multiple vs single active
- **Collapsible**: simple content reveal
- **Calendar**: standalone + in popover (date picker pattern)
- **Carousel**: 5 slides with images/gradient cards
- **Chart**: line chart and bar chart using recharts with baole.space token colors

#### 7.11 Utilities

- **Avatar**: all sizes, with ring, with status, fallback initials, group overlap
- **Separator**: default and gradient variants, with label
- **AspectRatio**: 16/9 frame
- **ScrollArea**: constrained-height list of items
- **Resizable**: two-panel horizontal layout demo
- **InputOTP**: 6-digit OTP entry
- **Command**: full command palette pattern (Cmd+K opens it)
- **ToggleGroup**: icon toolbar, text size selector
- **Sidebar**: visible as the demo page's own navigation!

#### 7.12 Easter Egg Section

- A card explaining the baole.space design philosophy
- Demo of the `+0.3 EV` brightness easter egg using the `--glow-*` tokens
- Quote: _"In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"_

---

## 8. Guidelines Documentation — GENERATE ALL OF THESE FILES

After all components are built, generate the complete `guidelines/` folder. This is used by Figma Make AI and other AI coding agents to correctly use the library.

### 8.1 `guidelines/Guidelines.md` — Master Index

Write this as the top-level entry point. It must contain:

1. A one-paragraph introduction explaining that this is the `@baole/ui` design system built for the baole.space ecosystem
2. Instructions telling the AI to read overview files FIRST before writing code
3. A complete component lookup table (all 45 components with a one-line description and link to their guidelines file in `guidelines/components/`)
4. A stepwise workflow (Step 1: Read overviews → Step 2: Read tokens → Step 3: Plan components → Step 4: Read component file → Step 5: Write code)
5. A crucial section: "IMPORTANT — Always prefer @baole/ui components. Do not use plain HTML elements or Tailwind classes directly when an equivalent component exists."
6. Import patterns: `import { Button, Card, Input } from '@baole/ui'` and `import '@baole/ui/style.css'` in the app root

### 8.2 `guidelines/overview-components.md` — Component Table

Write a markdown table with these columns: `Component | Category | Purpose | File | Key Props`. Cover all 45 components. Include sections for:

- **Inputs & Forms**: Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider, Form, Label, Toggle, ToggleGroup, InputOTP
- **Overlays**: Dialog, AlertDialog, Drawer, Sheet, Popover, HoverCard, Tooltip, Dropdown Menu, Context Menu
- **Feedback**: Alert, Sonner/Toast, Progress, Skeleton
- **Navigation**: Tabs, Breadcrumb, Navigation Menu, Menubar, Pagination, Sidebar
- **Data Display**: Table, Accordion, Collapsible, Calendar, Carousel, Chart, Command
- **Layout**: Card, Separator, AspectRatio, ScrollArea, Resizable
- **Utility**: Avatar, Badge

After the table, add "Common Usage Patterns" section covering:

- How to compose a Form with validation
- How to open a Dialog from a Button
- How to use Toast imperatively (`toast.success('...')`)
- How to use Command palette pattern

### 8.3 `guidelines/overview-icons.md` — Icon Library

Document the Lucide React icon system:

- Package: `lucide-react`, import: `import { IconName } from 'lucide-react'`
- All icon props: `size` (number, default 24), `strokeWidth` (default 2), `color`, `className`
- Size usage guide: 16px for inline/badge, 20px for button icons, 24px for standalone
- **IMPORTANT**: Never modify `strokeWidth`. Default is correct.
- Most commonly used icons in this library categorized:
  - **Actions**: `Plus`, `Minus`, `Trash2`, `Edit2`, `Copy`, `Download`, `Upload`, `Search`, `Filter`, `MoreHorizontal`, `MoreVertical`
  - **Navigation**: `ChevronLeft`, `ChevronRight`, `ChevronDown`, `ArrowLeft`, `ArrowRight`, `ExternalLink`, `Home`
  - **Feedback**: `Check`, `X`, `AlertCircle`, `AlertTriangle`, `Info`, `CheckCircle2`, `XCircle`
  - **UI**: `Menu`, `Loader2`, `RefreshCw`, `Settings`, `Eye`, `EyeOff`, `Lock`, `Unlock`, `Star`, `Heart`
  - **Media**: `Camera`, `Image`, `Video`, `Music`, `Play`, `Pause`
  - **Data**: `BarChart2`, `LineChart`, `PieChart`, `Table2`, `List`
- Usage in `Button`: pass as `leftIcon={<Plus size={16} />}`
- Icon-only buttons: use `size="icon"` variant on Button, wrap icon in `<span className="sr-only">label</span>` for accessibility

### 8.4 `guidelines/design-tokens/colors.md` — Color Tokens

Document every CSS variable from `src/tokens/index.css`:

**Structure**:

1. Design philosophy: dark-first, glassmorphism, gradient accents
2. Background hierarchy decision tree:
   ```
   Need a surface?
   → Page background: var(--color-bg)
   → Card/panel: var(--color-bg-glass) + backdrop-blur
   → Input/field: var(--color-bg-input)
   → Elevated overlay (popover/modal): var(--color-popover) + border-white/10
   ```
3. Text hierarchy:
   ```
   Primary content: var(--color-text)  [#ffffff]
   Secondary/helper: var(--color-text-secondary)  [white/70]
   Placeholder/metadata: var(--color-text-muted)  [white/50]
   Disabled: var(--color-text-disabled)  [white/30]
   ```
4. Gradient usage guide:
   ```
   Primary CTA: var(--gradient-primary)  → purple-700 → fuchsia-500
   Text gradients: apply via background-clip:text technique
   Card accent borders: gradient pseudo-element on ::before
   ```
5. Semantic color table (status colors with border + bg + text combinations for Alert, Input status, Badge)
6. Glow/shadow usage: when to use `shadow-glow-primary`, `shadow-glass`, `shadow-elevated`
7. ✅ CORRECT / ❌ WRONG examples (following Figma docs pattern)

### 8.5 `guidelines/design-tokens/typography.md` — Typography Tokens

Document:

1. Font family decision: Space Grotesk (headings, display, brand text) vs Inter (body, UI text, labels)
2. Scale table:

| Token/Class    | px      | Usage                               |
| -------------- | ------- | ----------------------------------- |
| `text-xs`      | 12px    | Captions, badges, timestamps        |
| `text-sm`      | 14px    | UI labels, button text, table cells |
| `text-base`    | 16px    | Body, form descriptions             |
| `text-lg`      | 18px    | Subheadings                         |
| `text-xl`      | 20px    | Section subheadings                 |
| `text-2xl`     | 24px    | Card titles                         |
| `text-3xl`     | 30px    | Page section headings               |
| `text-4xl`     | 36px    | Major page headings                 |
| `text-5xl–7xl` | 48–72px | Hero/display text                   |

3. Font weight guide: 400 (body), 500 (subheadings/UI), 600 (headings), 700 (display/hero)
4. Gradient text pattern:
   ```css
   /* Use this class from index.css */
   .gradient-text { ... }
   /* Or inline Tailwind: */
   className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
   ```
5. Letter spacing: `tracking-tight` for headings, `tracking-wide` for ALL CAPS labels
6. Common heading patterns with code examples

### 8.6 `guidelines/design-tokens/spacing.md` — Spacing & Layout

Document:

1. Container max-width: `max-w-[var(--spacing-container)]` = 1200px, centered with `mx-auto px-4 sm:px-6 lg:px-8`
2. Section vertical rhythm: `py-[var(--spacing-section)]` = 80px between major sections
3. Component internal spacing conventions: `p-4` for card body (md), `p-6` for card body (lg), `gap-2` between form elements, `gap-4` between cards
4. Responsive breakpoints used: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
5. Grid patterns: tool cards (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`), project cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
6. Tailwind spacing scale shorthand reference (2=8px, 4=16px, 6=24px, 8=32px, 12=48px, 16=64px)

### 8.7 Per-Component Guidelines — `guidelines/components/*.md`

Generate one `.md` file per component listed below. Each file must follow this template:

```markdown
# ComponentName

## Purpose

One sentence describing what this component is for.

## When to Use

- Bullet list of appropriate use cases
- Include what NOT to use it for (and what to use instead)

## Installation

\`\`\`typescript
import { ComponentName } from '@baole/ui'
\`\`\`

## Props API

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| ...  | ...  | ...     | ...         |

## Examples

### Basic Usage

\`\`\`tsx
<ComponentName prop="value">...</ComponentName>
\`\`\`

### Controlled Usage

\`\`\`tsx
const [value, setValue] = useState(...)
<ComponentName value={value} onChange={setValue} />
\`\`\`

### With Ant Design-level richness

\`\`\`tsx
<ComponentName
variant="gradient"
size="lg"
loading={isLoading}
leftIcon={<Icon />}
...
/>
\`\`\`

## Do's and Don'ts

### ✅ Do

- ...

### ❌ Don't

- ...
```

**Generate guidelines files for**: `button.md`, `input.md`, `select.md`, `dialog.md`, `drawer.md`, `sheet.md`, `tabs.md`, `table.md`, `tooltip.md`, `popover.md`, `dropdown-menu.md`, `form.md`, `toast.md` (Sonner wrapper), `badge.md`, `card.md`, `accordion.md`, `alert.md`, `alert-dialog.md`, `avatar.md`, `carousel.md`, `command.md`, `calendar.md`, `checkbox.md`, `radio-group.md`, `switch.md`, `slider.md`, `progress.md`, `skeleton.md`, `sidebar.md`.

For `button.md` specifically, also include a "Choosing the Right Variant" decision tree because it's the most commonly used component.

---

## 9. Barrel Export — `src/index.ts`

Export every component, hook, and utility. Example (extend to cover all 45 components):

```typescript
// Tokens (auto-injected via vite build)
import "./index.css";

// Utilities
export { cn } from "./lib/utils";

// Hooks
export { useIsMobile } from "./hooks/use-mobile";
export { useIntersection } from "./hooks/use-intersection";
export { useScrollPosition } from "./hooks/use-scroll-position";

// Components (alphabetical)
export * from "./components/accordion";
export * from "./components/alert";
export * from "./components/alert-dialog";
export * from "./components/aspect-ratio";
export * from "./components/avatar";
export * from "./components/badge";
export * from "./components/breadcrumb";
export * from "./components/button";
export * from "./components/calendar";
export * from "./components/card";
export * from "./components/carousel";
export * from "./components/chart";
export * from "./components/checkbox";
export * from "./components/collapsible";
export * from "./components/command";
export * from "./components/context-menu";
export * from "./components/dialog";
export * from "./components/drawer";
export * from "./components/dropdown-menu";
export * from "./components/form";
export * from "./components/hover-card";
export * from "./components/input";
export * from "./components/input-otp";
export * from "./components/label";
export * from "./components/menubar";
export * from "./components/navigation-menu";
export * from "./components/pagination";
export * from "./components/popover";
export * from "./components/progress";
export * from "./components/radio-group";
export * from "./components/resizable";
export * from "./components/scroll-area";
export * from "./components/select";
export * from "./components/separator";
export * from "./components/sheet";
export * from "./components/sidebar";
export * from "./components/skeleton";
export * from "./components/slider";
export * from "./components/sonner";
export * from "./components/switch";
export * from "./components/table";
export * from "./components/tabs";
export * from "./components/textarea";
export * from "./components/toggle";
export * from "./components/toggle-group";
export * from "./components/tooltip";
```

---

## 10. Acceptance Criteria

The generated output must satisfy ALL of the following before marking complete:

### Library

- [ ] `npm run build` completes without TypeScript or Vite errors
- [ ] `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`, `dist/style.css` all exist in `dist/`
- [ ] All 45 components are exported from `src/index.ts`
- [ ] Every component has full TypeScript prop types — zero `any`
- [ ] Every component accepts and merges `className` via `cn()`
- [ ] All design tokens from Section 3.1 are present in `src/tokens/index.css`
- [ ] `tailwind-preset.ts` exports the `baolePreset` object

### Visual Quality

- [ ] All components use dark-gradient design tokens — zero light-mode hardcoded colors
- [ ] All surfaces (popover, dropdown, dialog, modal, sheet) use glassmorphism: `backdrop-blur + bg-white/5 + border border-white/10`
- [ ] Button gradient variant has `hover:shadow-glow-primary hover:scale-[1.02]` effect
- [ ] Input/Select focus state uses `border-purple-400/70 ring-purple-400/20`
- [ ] Animated transitions on all interactive states (`transition-all duration-200`)

### Showcase App

- [ ] Showcase page renders every single component from the 7.X sections
- [ ] Multiple variants/states demonstrated per component (not just one)
- [ ] Sidebar navigation uses the library's own `Sidebar` component
- [ ] Background is dark gradient matching baole.space hero style
- [ ] All demo interactions work (dialogs open, forms submit, toasts fire, etc.)

### Guidelines

- [ ] `guidelines/Guidelines.md` exists with component lookup table and stepwise AI workflow
- [ ] `guidelines/overview-components.md` has all 45 components in the table
- [ ] `guidelines/overview-icons.md` documents Lucide icon usage correctly
- [ ] `guidelines/design-tokens/colors.md` covers every CSS variable
- [ ] `guidelines/design-tokens/typography.md` covers font scale + gradient text patterns
- [ ] `guidelines/design-tokens/spacing.md` covers container + section + component spacing
- [ ] All 29 component `.md` files exist in `guidelines/components/`
- [ ] Each component `.md` has: Purpose, When to Use, Props API table, Examples (basic + controlled), Do's and Don'ts

### Integration

- [ ] `showcase/` app can import from the library and render all components
- [ ] Consumer apps can `import '@baole/ui/style.css'` and all tokens + base styles load

---

## 11. Reference — baole.space Visual Identity

The library should visually match the baole.space personal website. Key rules:

- **Background**: Always dark — `#0f0c29` → `#302b63` → `#24243e` gradient
- **Cards**: Frosted glass. NOT solid white/black. `backdrop-blur-[12px]`
- **Primary color**: Purple/Violet → Fuchsia → Pink gradient spectrum
- **Text**: White on dark, never black text
- **Borders**: `rgba(255,255,255,0.10)` — barely visible, suggestive
- **Interactive**: Hover states are slightly brighter glass, not background-color changes to arbitrary colors
- **Focus**: Always a `ring-2 ring-purple-400/20` subtle aura — accessible but dark-theme appropriate
- **Emphasis**: Gradient text (`bg-clip-text text-transparent`) for headings, gradient border for featured cards
- **Personality**: A developer+photographer+gamer built this — it should feel creative, energetic, polished. Not corporate. Not cold.

> _"In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"_
> — Bao LE's design philosophy, baked into every pixel of this component library.

---

_End of Figma Make prompt. Begin generation._
