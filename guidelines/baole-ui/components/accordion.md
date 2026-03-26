# Accordion

## Purpose

Vertically stacked collapsible content sections. Built on Radix UI Accordion. Each item has a trigger header and expandable content. Supports single-open and multi-open modes.

## When to Use

### ✅ Use Accordion when:

- FAQ sections — help reduce page length
- Settings groups with many options (expand the relevant group)
- Progressive disclosure — show basic info, hide advanced details
- Any long list of items where most content can be hidden by default

### ❌ Don't use Accordion when:

- Only 1 item — use a plain expandable section or `Collapsible`
- Content needs to be side by side → Use `Tabs`
- Very short content that fits on the screen anyway

## Installation

```typescript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@baolq/ui";
```

## Props API

### Accordion (root)

| Prop            | Type                       | Default    | Description                           |
| --------------- | -------------------------- | ---------- | ------------------------------------- |
| `type`          | `"single"` \| `"multiple"` | `"single"` | Single or multiple items open at once |
| `collapsible`   | `boolean`                  | `false`    | (single) Allow closing the open item  |
| `value`         | `string \| string[]`       | –          | Controlled open item(s)               |
| `onValueChange` | `(value) => void`          | –          | Called on change                      |
| `defaultValue`  | `string \| string[]`       | –          | Initial open item(s)                  |

## Examples

```tsx
// Single-open FAQ
<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>What is @baolq/ui?</AccordionTrigger>
    <AccordionContent>
      @baolq/ui is a dark-first component library for baole.space tools.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="q2">
    <AccordionTrigger>Is it open source?</AccordionTrigger>
    <AccordionContent>
      Yes, it's MIT licensed and published on npm.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple-open settings
<Accordion type="multiple" defaultValue={['appearance']}>
  <AccordionItem value="appearance">
    <AccordionTrigger>Appearance</AccordionTrigger>
    <AccordionContent>
      <div className="flex flex-col gap-4">
        <Switch label="Dark mode" />
        <Switch label="Compact view" />
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="notifications">
    <AccordionTrigger>Notifications</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Do's and Don'ts

### ✅ Do

- Use `type="single" collapsible` for FAQs (one item open at a time, can collapse all)
- Use `type="multiple"` for settings sections where users may want several open
- Animate the `AccordionContent` (Radix handles this with `data-state` attributes)

### ❌ Don't

- Don't put navigation links inside AccordionTrigger — it's confusing with the expand behavior
- Don't nest accordions more than 2 levels deep
- Don't use Accordion if all items are usually open — just show the content directly
