# @baolq/ui Design System Figma Make Guidelines

This project uses (MUST, only uses) the **@baolq/ui** component library (`import { ... } from '@baolq/ui'`).
All detailed guidelines are in the `guidelines/` folder.

## MANDATORY: Follow this workflow before writing any code

### Step 1 Read Overview Files (REQUIRED)

Read ALL files with a name that starts with `overview-` in `guidelines/`:

- `guidelines/overview-detail-guidelines.md`
- `guidelines/overview-components.md`
- `guidelines/overview-icons.md`

### Step 2 Read Design Tokens (REQUIRED)

Read ALL files in `guidelines/design-tokens/`. Do NOT skip this step:

- `guidelines/design-tokens/colors.md`
- `guidelines/design-tokens/typography.md`
- `guidelines/design-tokens/spacing.md`

### Step 3 Read Component Guidelines BEFORE Using Any Component (REQUIRED)

Before using ANY component, read its guidelines file first:

- Using Button: Read `guidelines/components/button.md` FIRST
- Using Input: Read `guidelines/components/input.md` FIRST
- Using Dialog: Read `guidelines/components/dialog.md` FIRST
- (And so on for every component all guides are in `guidelines/components/`)

## Key Rules

- ALWAYS prefer `@baolq/ui` components over plain HTML or raw Tailwind classes
- Import components: `import { Button, Card, Input } from '@baolq/ui'`
- Import styles once in app root: `import '@baolq/ui/style.css'`
- Use CSS variables for color: `var(--color-primary)`, `var(--color-bg)`, `var(--color-text)`, etc.
- Design language: dark backgrounds, glassmorphism, gradient accents, vibrant purple/fuchsia
- Do NOT use `className` overrides on @baolq/ui components unless strictly necessary
- Use TypeScript all components have full type definitions

## Full Documentation

See `guidelines/overview-detail-guidelines` for the complete component reference and examples.
