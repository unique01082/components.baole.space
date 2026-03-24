# Complete Component Guidelines - Navigation Components (All 12)

---

# Tabs

## Purpose
Organize content into tabbed sections for easy navigation between related views.

## When to Use
- Settings panels with categories
- Profile sections (overview, activity, settings)
- Dashboard views
- Product details (description, reviews, specs)

## Installation
```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@baole/ui'
```

## Examples

### Basic Tabs
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Overview content</TabsContent>
  <TabsContent value="tab2">Analytics content</TabsContent>
  <TabsContent value="tab3">Settings content</TabsContent>
</Tabs>
```

### Controlled Tabs
```tsx
const [tab, setTab] = useState('overview')
return (
  <Tabs value={tab} onValueChange={setTab}>
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">Content 1</TabsContent>
    <TabsContent value="analytics">Content 2</TabsContent>
  </Tabs>
)
```

---

# Accordion

## Purpose
Collapsible sections for organizing content in a compact, expandable format.

## When to Use
- FAQs
- Long content sections
- Settings with many options
- Documentation sections

## Installation
```typescript
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@baole/ui'
```

## Examples

### Single Collapsible
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Open
```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can open multiple</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>At the same time</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

# Breadcrumb

## Purpose
Show page hierarchy and allow navigation up the page structure.

## When to Use
- Multi-level navigation
- E-commerce category pages
- Documentation
- File/folder navigation

## Installation
```typescript
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@baole/ui'
```

## Examples

### Basic Breadcrumb
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

# Pagination

## Purpose
Navigate through pages of content with page numbers and next/previous controls.

## When to Use
- Table pagination
- Search results
- Blog post lists
- Product catalogs

## Installation
```typescript
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@baole/ui'
```

## Examples

### Basic Pagination
```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

# NavigationMenu

## Purpose
Hierarchical mega menus for site navigation with dropdowns.

## When to Use
- Site header navigation
- Mega menus with subcategories
- Multi-level navigation
- Marketing sites

## Installation
```typescript
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@baole/ui'
```

## Examples

### Basic NavigationMenu
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products/a">Product A</NavigationMenuLink>
        <NavigationMenuLink href="/products/b">Product B</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/about">About</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

---

# Menubar

## Purpose
Application-style menu bar for desktop applications (File, Edit, View).

## When to Use
- Desktop-like applications
- Editor toolbars
- Application menus
- Complex navigation

## Installation
```typescript
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@baole/ui'
```

## Examples

### Basic Menubar
```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

---

# Sidebar

## Purpose
Persistent side navigation for application layouts.

## When to Use
- Dashboard navigation
- App primary navigation
- Document outline
- Multi-page apps

## Installation
```typescript
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenuItem,
} from '@baole/ui'
```

## Examples

### Basic Sidebar
```tsx
<Sidebar>
  <SidebarHeader>
    <div className="p-4 font-bold">My App</div>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarMenuItem href="/">
        <Home size={16} className="mr-2" />
        Home
      </SidebarMenuItem>
      <SidebarMenuItem href="/dashboard">
        <LayoutDashboard size={16} className="mr-2" />
        Dashboard
      </SidebarMenuItem>
      <SidebarMenuItem href="/settings">
        <Settings size={16} className="mr-2" />
        Settings
      </SidebarMenuItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <div className="p-4">Footer content</div>
  </SidebarFooter>
</Sidebar>
```

### Collapsible Sidebar
```tsx
<Sidebar collapsible defaultCollapsed={false}>
  <SidebarContent>
    {/* Navigation items */}
  </SidebarContent>
</Sidebar>
```

---

# Steps

## Purpose
Display progress through a multi-step process with visual indicators.

## When to Use
- Multi-step forms
- Onboarding flows
- Checkout processes
- Wizards

## Installation
```typescript
import { Steps } from '@baole/ui'
```

## Examples

### Basic Steps
```tsx
<Steps
  current={1}
  items={[
    { title: 'Step 1', description: 'Account details' },
    { title: 'Step 2', description: 'Personal info' },
    { title: 'Step 3', description: 'Confirmation' },
  ]}
/>
```

### With Status
```tsx
<Steps
  current={1}
  items={[
    { title: 'Completed', status: 'finished' },
    { title: 'In Progress', status: 'process' },
    { title: 'Waiting', status: 'wait' },
  ]}
/>
```

---

# Anchor

## Purpose
Table of contents navigation that highlights current section.

## When to Use
- Documentation pages
- Long articles
- Terms and conditions
- Help pages

## Installation
```typescript
import { Anchor } from '@baole/ui'
```

## Examples

### Basic Anchor
```tsx
<Anchor
  links={[
    { href: '#introduction', title: 'Introduction' },
    { href: '#getting-started', title: 'Getting Started' },
    { href: '#api-reference', title: 'API Reference' },
  ]}
/>
```

---

# Segmented

## Purpose
Segmented control for switching between views or options.

## When to Use
- View switchers (grid/list)
- Time period selectors (day/week/month)
- Filter options
- Display mode toggles

## Installation
```typescript
import { Segmented } from '@baole/ui'
```

## Examples

### Basic Segmented
```tsx
const [value, setValue] = useState('daily')
return (
  <Segmented
    options={['Daily', 'Weekly', 'Monthly']}
    value={value}
    onChange={setValue}
  />
)
```

### With Icons
```tsx
<Segmented
  options={[
    { value: 'grid', label: 'Grid', icon: <Grid size={16} /> },
    { value: 'list', label: 'List', icon: <List size={16} /> },
  ]}
  value={view}
  onChange={setView}
/>
```

---

**Related Components:**
- [Button](./button.md) - Navigation triggers
- [Card](./card.md) - Content containers
- [Layout](./layout-components.md) - Page structure
