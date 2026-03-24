# Sheet

## Purpose

A side panel (drawer) that slides in from the left or right edge of the screen. Built on Radix UI Dialog with a sheet-specific content transform. Ideal for settings panels, sidebars, and large forms that would crowd a Dialog.

## When to Use

### ✅ Use Sheet when:

- Settings sidebar, filter panel, or detail view on desktop
- Navigation drawer on mobile
- Long forms that need vertical scroll space
- Content that should remain open while the user sees some of the main page

### ❌ Don't use Sheet when:

- Brief confirmation → Use `Dialog` or `AlertDialog`
- Full-screen replacement → Use a route/page
- Mobile bottom overlay → Use `Drawer`

## Installation

```typescript
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@baole/ui";
```

## Props API

### SheetContent

| Prop        | Type                                           | Default   | Description                 |
| ----------- | ---------------------------------------------- | --------- | --------------------------- |
| `side`      | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"right"` | Which edge to slide in from |
| `className` | `string`                                       | –         | Additional CSS classes      |

## Examples

```tsx
// Right-side settings sheet (default)
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Settings size={16} /> Settings
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Manage your account preferences.</SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4 py-6">
      {/* settings content */}
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>

// Left navigation sheet
<Sheet>
  <SheetTrigger asChild><Button size="icon"><Menu /></Button></SheetTrigger>
  <SheetContent side="left">
    <SheetHeader><SheetTitle>Navigation</SheetTitle></SheetHeader>
    <nav>{/* nav links */}</nav>
  </SheetContent>
</Sheet>
```

## Do's and Don'ts

### ✅ Do

- Use `side="right"` for settings/details, `side="left"` for navigation
- Always include `SheetTitle` for screen reader accessibility
- Add a `SheetClose` button for explicit closure

### ❌ Don't

- Don't use `side="top"` or `side="bottom"` on desktop — they feel mobile-specific
- Don't force width beyond 50vw — it obscures too much of the main content
