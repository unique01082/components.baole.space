# Card

## Purpose

Cards are flexible containers for grouping related content. They provide elevation, borders, and clear visual hierarchy for content organization.

## When to Use

- **Group related information** - User profiles, product details, article previews
- **Clickable items** - Link to detail pages, navigation cards
- **Forms and inputs** - Elevated form sections
- **Dashboard widgets** - Stats, charts, quick actions
- **Lists of items** - Products, projects, team members

### What NOT to Use Card For

- **Full-page layouts** - Use Container or Layout components
- **Inline content** - Use regular div or section
- **Single text blocks** - Just use text elements

---

## Installation

```typescript
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from '@baole/ui'
```

---

## Props API

All Card subcomponents accept standard HTML attributes and `className`.

---

## Examples

### Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card.</p>
  </CardContent>
</Card>
```

### Card with Footer

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
    <CardDescription>Last updated 2 hours ago</CardDescription>
  </CardHeader>
  
  <CardContent>
    <p className="text-sm text-[var(--color-text-secondary)]">
      Project description and details go here.
    </p>
  </CardContent>
  
  <CardFooter>
    <Button variant="outline" size="sm">View</Button>
    <Button variant="ghost" size="sm">Edit</Button>
  </CardFooter>
</Card>
```

### Card with Action Button

```tsx
<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardAction>
      <Button variant="ghost" size="sm">
        Mark all read
      </Button>
    </CardAction>
  </CardHeader>
  
  <CardContent>
    <div className="space-y-2">
      <p>Notification 1</p>
      <p>Notification 2</p>
    </div>
  </CardContent>
</Card>
```

### Clickable Card

```tsx
import Link from 'next/link'

<Card asChild className="hover:bg-[var(--color-bg-glass-hover)] transition-colors cursor-pointer">
  <Link href="/project/1">
    <CardHeader>
      <CardTitle>Project Name</CardTitle>
      <CardDescription>Click to view details</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Preview content...</p>
    </CardContent>
  </Link>
</Card>

// Or wrap entire card
<Link href="/project/1">
  <Card className="hover:border-[var(--color-primary)] transition-colors">
    <CardContent>Card content</CardContent>
  </Card>
</Link>
```

### Card Grid (Dashboard)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Total Users</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">1,234</div>
      <p className="text-xs text-[var(--color-text-muted)]">
        +20% from last month
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Revenue</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">$12,345</div>
      <p className="text-xs text-[var(--color-text-muted)]">
        +15% from last month
      </p>
    </CardContent>
  </Card>
  
  {/* More cards... */}
</div>
```

### Card with Image

```tsx
<Card>
  <img
    src="/project-thumbnail.jpg"
    alt="Project"
    className="w-full h-48 object-cover rounded-t-lg"
  />
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
    <CardDescription>Web Development</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Project description...</p>
  </CardContent>
  <CardFooter>
    <Button variant="gradient" className="w-full">
      View Project
    </Button>
  </CardFooter>
</Card>
```

### Card with Tabs

```tsx
<Card>
  <CardHeader>
    <CardTitle>Analytics</CardTitle>
  </CardHeader>
  <Tabs defaultValue="overview">
    <TabsList className="px-6">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
    </TabsList>
    
    <TabsContent value="overview" className="px-6 pb-6">
      <p>Overview content</p>
    </TabsContent>
    
    <TabsContent value="analytics" className="px-6 pb-6">
      <p>Analytics content</p>
    </TabsContent>
  </Tabs>
</Card>
```

### Card List (Vertical Stack)

```tsx
<div className="space-y-4">
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Avatar src="/user1.jpg" fallback="JD" />
        <div>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>john@example.com</CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>

  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Avatar src="/user2.jpg" fallback="JS" />
        <div>
          <CardTitle>Jane Smith</CardTitle>
          <CardDescription>jane@example.com</CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>
</div>
```

### Stat Card

```tsx
<Card>
  <CardContent className="pt-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-[var(--color-text-muted)] mb-1">
          Total Revenue
        </p>
        <div className="text-3xl font-bold">$45,231</div>
      </div>
      <div className="p-3 bg-[var(--color-bg-glass)] rounded-lg">
        <DollarSign size={24} className="text-[var(--color-primary)]" />
      </div>
    </div>
    <p className="text-xs text-green-500 mt-2">
      +20.1% from last month
    </p>
  </CardContent>
</Card>
```

### Form Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
    <CardDescription>
      Update your account information
    </CardDescription>
  </CardHeader>
  
  <CardContent>
    <Form className="space-y-4">
      <FormItem label="Username">
        <Input defaultValue="johndoe" />
      </FormItem>
      
      <FormItem label="Email">
        <Input type="email" defaultValue="john@example.com" />
      </FormItem>
      
      <FormItem label="Bio">
        <Textarea rows={4} />
      </FormItem>
    </Form>
  </CardContent>
  
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button variant="gradient">Save Changes</Button>
  </CardFooter>
</Card>
```

---

## Do's and Don'ts

### ✅ Do

- Use CardHeader for titles and metadata
- Use CardContent for main content
- Use CardFooter for actions
- Keep card content focused and related
- Use appropriate spacing with padding classes
- Make entire card clickable when it links somewhere

```tsx
// ✅ Good - Proper structure
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Main content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### ❌ Don't

- Don't use Card without proper content structure
- Don't mix unrelated content in one card
- Don't make cards too wide (use max-width)
- Don't nest cards excessively

```tsx
// ❌ Bad - No structure
<Card>
  <div>Random content without header</div>
  <Button>Action</Button>
</Card>

// ✅ Better
<Card>
  <CardHeader>
    <CardTitle>Structured Content</CardTitle>
  </CardHeader>
  <CardContent>
    Organized content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// ❌ Bad - Too wide
<Card className="w-full">
  Very wide content is hard to read
</Card>

// ✅ Better
<Card className="max-w-2xl">
  Content with comfortable width
</Card>
```

---

## Accessibility

- Use semantic HTML inside cards (h3 for CardTitle, etc.)
- Ensure clickable cards have proper focus states
- Add `aria-label` for icon-only actions
- Use proper heading hierarchy

```tsx
// Accessible clickable card
<Card
  asChild
  className="cursor-pointer focus-within:ring-2 focus-within:ring-[var(--color-primary)]"
>
  <Link href="/details" aria-label="View project details">
    <CardHeader>
      <CardTitle>Project Name</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Description</p>
    </CardContent>
  </Link>
</Card>
```

---

## Common Patterns

### Product Card

```tsx
<Card>
  <img
    src="/product.jpg"
    alt="Product name"
    className="w-full h-56 object-cover rounded-t-lg"
  />
  <CardHeader>
    <div className="flex items-start justify-between">
      <div>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>Category</CardDescription>
      </div>
      <Badge variant="success">In Stock</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold">$99.99</span>
      <div className="flex items-center gap-1">
        <Star size={16} className="fill-yellow-500 text-yellow-500" />
        <span className="text-sm">4.5</span>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="gradient" className="w-full">
      Add to Cart
    </Button>
  </CardFooter>
</Card>
```

### Team Member Card

```tsx
<Card>
  <CardContent className="pt-6 text-center">
    <Avatar className="w-20 h-20 mx-auto mb-4" />
    <CardTitle>John Doe</CardTitle>
    <CardDescription>Senior Developer</CardDescription>
    <div className="flex gap-2 justify-center mt-4">
      <Button variant="ghost" size="icon">
        <Github size={20} />
      </Button>
      <Button variant="ghost" size="icon">
        <Twitter size={20} />
      </Button>
      <Button variant="ghost" size="icon">
        <Linkedin size={20} />
      </Button>
    </div>
  </CardContent>
</Card>
```

---

**Related Components:**
- [Container](./container.md) - Page width containers
- [Separator](./separator.md) - Dividers within cards
- [Badge](./badge.md) - Status indicators
- [Avatar](./avatar.md) - User images
