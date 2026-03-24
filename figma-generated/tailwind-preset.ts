/**
 * @baole/ui — Tailwind CSS Preset
 *
 * Add this preset to your tailwind.config.ts to get access to
 * all @baole/ui design tokens as Tailwind theme utilities.
 *
 * Usage in consumer app's tailwind.config.ts:
 * ```ts
 * import { baolePreset } from '@baole/ui/tailwind-preset'
 * export default { presets: [baolePreset], content: [...] }
 * ```
 *
 * Or in Tailwind v4 CSS (recommended):
 * ```css
 * @import '@baole/ui/style.css';
 * @source '../node_modules/@baole/ui/dist';
 * ```
 */

import type { Config } from 'tailwindcss'

export const baolePreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'baole-bg': 'var(--color-bg)',
        'baole-bg-secondary': 'var(--color-bg-secondary)',
        'baole-bg-tertiary': 'var(--color-bg-tertiary)',
        'baole-bg-glass': 'var(--color-bg-glass)',
        'baole-bg-input': 'var(--color-bg-input)',
        'baole-bg-overlay': 'var(--color-bg-overlay)',
        // Text
        'baole-text': 'var(--color-text)',
        'baole-text-secondary': 'var(--color-text-secondary)',
        'baole-muted': 'var(--color-text-muted)',
        'baole-text-disabled': 'var(--color-text-disabled)',
        // Borders
        'baole-border': 'var(--color-border)',
        'baole-border-strong': 'var(--color-border-strong)',
        'baole-border-focus': 'var(--color-border-focus)',
        // Semantic
        'baole-primary': 'var(--color-primary)',
        'baole-destructive': 'var(--color-destructive)',
        'baole-success': 'var(--color-success)',
        'baole-warning': 'var(--color-warning)',
        'baole-info': 'var(--color-info)',
        'baole-card': 'var(--color-card)',
        'baole-popover': 'var(--color-popover)',
        'baole-muted-bg': 'var(--color-muted)',
        'baole-accent': 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        glass: 'var(--blur-glass)',
        heavy: 'var(--blur-heavy)',
      },
      boxShadow: {
        'glass': 'var(--shadow-glass)',
        'elevated': 'var(--shadow-elevated)',
        'glow-primary': 'var(--glow-primary)',
        'glow-success': 'var(--glow-success)',
        'glow-danger': 'var(--glow-danger)',
        'glow-info': 'var(--glow-info)',
        'glow-warning': 'var(--glow-warning)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        spring: '500ms',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-tertiary': 'var(--gradient-tertiary)',
        'gradient-success': 'var(--gradient-success)',
        'gradient-warning': 'var(--gradient-warning)',
        'gradient-danger': 'var(--gradient-danger)',
        'gradient-purple': 'var(--gradient-purple)',
        'gradient-ocean': 'var(--gradient-ocean)',
        'gradient-hero': 'var(--gradient-hero-bg)',
      },
      zIndex: {
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
        tooltip: 'var(--z-tooltip)',
      },
    },
  },
}

export default baolePreset
