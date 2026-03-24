# Complete Component Guidelines - Data Display Components (All 14)

---

# Avatar

## Purpose
Display user profile images with automatic fallback to initials.

## Installation
```typescript
import { Avatar } from '@baole/ui'
```

## Props API
| Prop | Type | Description |
|------|------|-------------|
| `src` | `string` | Image URL |
| `alt` | `string` | Alt text |
| `fallback` | `string` | Fallback initials |
| `className` | `string` | Size styling |

## Examples
```tsx
<Avatar src="/user.jpg" alt="John Doe" fallback="JD" />
<Avatar fallback="JD" className="h-12 w-12" />
```

---

# Table

## Purpose
Display structured data in rows and columns.

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

## Examples
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
    {users.map(user => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Badge variant="success">{user.role}</Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

# Calendar

## Purpose
Display and select dates in a calendar view.

## Installation
```typescript
import { Calendar } from '@baole/ui'
```

## Examples
```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```

---

# Carousel

## Purpose
Display content in a swipeable, scrollable carousel.

## Installation
```typescript
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@baole/ui'
```

## Examples
```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

---

# Chart (LineChart, BarChart, AreaChart, PieChart)

## Purpose
Data visualization with interactive charts.

## Installation
```typescript
import { LineChart, BarChart, AreaChart, PieChart } from '@baole/ui'
```

## Examples

### LineChart
```tsx
<LineChart
  data={[
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 150 },
    { month: 'Mar', value: 120 },
  ]}
  xKey="month"
  lines={[
    { dataKey: 'value', name: 'Sales', color: '#a855f7' }
  ]}
/>
```

### BarChart
```tsx
<BarChart
  data={data}
  xKey="category"
  bars={[
    { dataKey: 'value', name: 'Revenue', color: '#a855f7' }
  ]}
/>
```

### PieChart
```tsx
<PieChart
  data={[
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 200 },
  ]}
/>
```

---

# Tree

## Purpose
Display hierarchical data in an expandable tree structure.

## Installation
```typescript
import { Tree } from '@baole/ui'
```

## Examples
```tsx
<Tree
  treeData={[
    {
      key: '1',
      title: 'Parent 1',
      children: [
        { key: '1-1', title: 'Child 1' },
        { key: '1-2', title: 'Child 2' },
      ]
    }
  ]}
  defaultExpandedKeys={['1']}
  onSelect={handleSelect}
/>
```

---

# List

## Purpose
Display lists of items with custom rendering.

## Installation
```typescript
import { List } from '@baole/ui'
```

## Examples
```tsx
<List
  items={items}
  renderItem={(item) => (
    <div className="flex items-center gap-3 p-3">
      <Avatar src={item.avatar} fallback={item.initials} />
      <div>
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-[var(--color-text-muted)]">
          {item.description}
        </div>
      </div>
    </div>
  )}
/>
```

---

# Timeline

## Purpose
Display events in chronological order.

## Installation
```typescript
import { Timeline } from '@baole/ui'
```

## Examples
```tsx
<Timeline
  items={[
    {
      title: 'Event 1',
      description: 'Description of event 1',
      time: '2024-01-01',
      icon: <Check size={16} />
    },
    {
      title: 'Event 2',
      description: 'Description of event 2',
      time: '2024-01-02',
    },
  ]}
/>
```

---

# Statistic

## Purpose
Display statistical numbers with labels and formatting.

## Installation
```typescript
import { Statistic } from '@baole/ui'
```

## Examples
```tsx
<Statistic
  title="Total Revenue"
  value={12345}
  prefix="$"
  suffix="USD"
/>

<Statistic
  title="Growth"
  value={23.5}
  suffix="%"
  trend="up"
  trendValue="+5.2%"
/>
```

---

# Descriptions

## Purpose
Display key-value pairs in a structured format.

## Installation
```typescript
import { Descriptions } from '@baole/ui'
```

## Examples
```tsx
<Descriptions
  title="User Information"
  items={[
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
    { label: 'Phone', value: '+1 234 567 8900' },
    { label: 'Address', value: '123 Main St, City, State' },
  ]}
/>
```

---

# Tag

## Purpose
Labels with optional close functionality.

## Installation
```typescript
import { Tag } from '@baole/ui'
```

## Examples
```tsx
<Tag>Default Tag</Tag>
<Tag variant="success">Success</Tag>
<Tag closable onClose={() => handleRemove()}>
  Closable Tag
</Tag>
```

---

# QRCode

## Purpose
Generate QR codes from text or URLs.

## Installation
```typescript
import { QRCode } from '@baole/ui'
```

## Examples
```tsx
<QRCode value="https://example.com" size={200} />
<QRCode
  value="Contact info"
  size={150}
  level="H"
  includeMargin
/>
```

---

# Image

## Purpose
Enhanced image component with fallback and lazy loading.

## Installation
```typescript
import { Image } from '@baole/ui'
```

## Examples
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  fallback={<Skeleton className="h-[300px] w-[400px]" />}
/>
```

---

# Stepper

## Purpose
Step-by-step progress indicator for processes.

## Installation
```typescript
import { Stepper } from '@baole/ui'
```

## Examples
```tsx
<Stepper
  steps={[
    { label: 'Account', status: 'completed' },
    { label: 'Profile', status: 'current' },
    { label: 'Confirmation', status: 'pending' },
  ]}
/>
```

---

**Related Components:**
- [Card](./card.md) - Data containers
- [Badge](./badge.md) - Status indicators
- [Progress](./form-display-components.md) - Progress bars
