# NavigationMenu

## Purpose

Accessible site navigation with dropdown content regions, keyboard navigation, and animated viewport. Built on Radix UI NavigationMenu.

## When to Use

### ✅ Use NavigationMenu when:

- Top-level site navigation with multi-column dropdowns
- Mega menus with rich content (icons, descriptions, cards)
- Header navigation bars with hover-triggered panels

### ❌ Don't use NavigationMenu when:

- Simple flat nav links without dropdowns → Use plain links or Tabs
- Mobile bottom navigation → Use a Drawer or Sheet
- In-page tab switching → Use Tabs
- Nested command actions → Use DropdownMenu

## Installation

```typescript
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from "@baolq/ui";
```

## Props API

All components extend Radix NavigationMenu primitives. Key styling is applied via the library's internal classes.

| Component                | Key Props              | Description                         |
| ------------------------ | ---------------------- | ----------------------------------- |
| `NavigationMenuTrigger`  | `className`            | Button that opens the content panel |
| `NavigationMenuContent`  | `className`            | Dropdown content region             |
| `NavigationMenuLink`     | `className`, `asChild` | Navigation link item                |
| `NavigationMenuViewport` | `className`            | Animated content viewport container |

### `navigationMenuTriggerStyle()`

Utility function returning the correct trigger class string. Use with `asChild` for plain link triggers:

```tsx
<NavigationMenuLink className={navigationMenuTriggerStyle()}>
  About
</NavigationMenuLink>
```

## Examples

### Basic Nav with Dropdown

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
          <li>
            <NavigationMenuLink asChild>
              <a
                href="/products/ui"
                className="block p-3 rounded-lg hover:bg-white/10"
              >
                <div className="font-medium text-white mb-1">UI Components</div>
                <p className="text-sm text-white/60">
                  Reusable building blocks
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a
                href="/products/templates"
                className="block p-3 rounded-lg hover:bg-white/10"
              >
                <div className="font-medium text-white mb-1">Templates</div>
                <p className="text-sm text-white/60">Prebuilt page designs</p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
        Docs
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Plain Links (No Dropdown)

```tsx
<NavigationMenu>
  <NavigationMenuList>
    {["Home", "About", "Blog", "Contact"].map((item) => (
      <NavigationMenuItem key={item}>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          href={`/${item.toLowerCase()}`}
        >
          {item}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>
```

## Do's and Don'ts

### ✅ Do

- Use `asChild` on `NavigationMenuLink` to integrate with router `<Link>` components
- Include `NavigationMenuViewport` at the end of `NavigationMenu` for the animated panel
- Keep dropdown content concise — 4–8 items per panel is optimal

### ❌ Don't

- Don't nest `NavigationMenuTrigger` inside another trigger
- Don't mix NavigationMenu and DropdownMenu at the same level — pick one pattern

## Accessibility

- Full keyboard navigation: Tab to move between items, Enter/Space to open, Escape to close, arrow keys within content
- ARIA roles (`menu`, `menuitem`) are managed automatically by Radix
- Content regions are announced by screen readers when opened
