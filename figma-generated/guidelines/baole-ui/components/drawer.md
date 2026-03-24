# Drawer

## Purpose

A bottom-sheet drawer built on Vaul. Slides up from the bottom on mobile as a natural gesture-based overlay for menus, pickers, and forms.

## When to Use

### ✅ Use Drawer when:

- Mobile-first overlay for actions or content
- Sheet-style menus on small screens
- Date pickers, color pickers, option sheets on mobile

### ❌ Don't use Drawer when:

- Desktop-first UX → Use `Sheet` (side drawer) or `Dialog`
- Content needs to remain visible while interacting → Use inline expansion

## Installation

```typescript
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@baole/ui";
```

## Examples

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Add to playlist</DrawerTitle>
      <DrawerDescription>Choose a playlist for this track.</DrawerDescription>
    </DrawerHeader>
    <div className="px-4">{/* drawer body content */}</div>
    <DrawerFooter>
      <Button>Add</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## Do's and Don'ts

### ✅ Do

- Use `Drawer` on mobile breakpoints, `Dialog` on desktop — swap via `useMediaQuery`
- Keep content lightweight — Drawer height is limited by screen height
- Support the drag-to-close gesture (Vaul provides this by default)

### ❌ Don't

- Don't use on desktop as a primary modal — Sheet or Dialog fits better
- Don't put heavy scrollable content inside without setting a fixed drawer height
