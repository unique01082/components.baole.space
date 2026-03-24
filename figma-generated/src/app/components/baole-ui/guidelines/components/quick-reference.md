# Tabs • Accordion • Breadcrumb • Dropdown Menu • Table • Avatar • Badge

---

# Tabs

## Purpose
Organize content into tabbed sections for easy navigation between related views.

## When to Use
- Multiple views of related content
- Settings panels with categories
- Dashboard sections
- Profile pages with different sections

## Installation
```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@baole/ui'
```

## Basic Example
```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings content
  </TabsContent>
  <TabsContent value="password">
    Password settings content
  </TabsContent>
</Tabs>
```

---

# Accordion

## Purpose
Collapsible sections for organizing large amounts of content in a compact space.

## When to Use
- FAQs
- Long lists with detailed content
- Settings with many options
- Documentation sections

## Installation
```typescript
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@baole/ui'
```

## Basic Example
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

# Breadcrumb

## Purpose
Show page hierarchy and allow users to navigate up the page structure.

## When to Use
- Multi-level navigation
- E-commerce category pages
- Documentation with nested sections
- File browsers

## Installation
```typescript
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@baole/ui'
```

## Basic Example
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

# Dropdown Menu

## Purpose
Display a menu of actions or navigation items triggered by a button.

## When to Use
- User account menus
- Action menus (more options)
- Navigation menus
- Context-specific actions

## Installation
```typescript
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@baole/ui'
```

## Basic Example
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

# Table

## Purpose
Display structured data in rows and columns with sorting, filtering, and pagination.

## When to Use
- Lists of records
- Data grids
- Comparison tables
- Reports

## Installation
```typescript
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@baole/ui'
```

## Basic Example
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

# Avatar

## Purpose
Display user profile images with automatic fallback to initials.

## When to Use
- User profiles
- Comment sections
- Team member lists
- Chat interfaces

## Installation
```typescript
import { Avatar } from '@baole/ui'
```

## Basic Example
```tsx
<Avatar
  src="/user.jpg"
  alt="John Doe"
  fallback="JD"
/>
```

## With Size
```tsx
<Avatar src="/user.jpg" fallback="JD" className="h-12 w-12" />
```

---

# Badge

## Purpose
Display status, labels, counts, or categories with color-coded backgrounds.

## When to Use
- Status indicators
- Notification counts
- Category tags
- Version labels

## Installation
```typescript
import { Badge } from '@baole/ui'
```

## Basic Example
```tsx
<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>
```

## Variants
```tsx
<Badge variant="outline">Outline</Badge>
<Badge variant="solid">Solid</Badge>
<Badge variant="gradient">Gradient</Badge>
```

---

**See individual component files for complete documentation with all props, examples, and patterns.**
