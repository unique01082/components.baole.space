# Icon System — Lucide React

## Overview

@baolq/ui uses **Lucide React** as the icon library. Lucide provides 1000+ consistent, customizable icons with a simple API.

**Package**: `lucide-react`
**Version**: Latest (installed as peer dependency)
**Stroke-based**: All icons are SVG with consistent stroke width

## Installation

Lucide React is a peer dependency of @baolq/ui. Install it in your project:

```bash
npm install lucide-react
# or
pnpm add lucide-react
# or
yarn add lucide-react
```

## Basic Usage

```tsx
import { Plus, Search, Heart, Settings } from 'lucide-react'

function Example() {
  return (
    <div>
      <Plus size={24} />
      <Search size={20} />
      <Heart size={16} />
      <Settings size={24} strokeWidth={1.5} />
    </div>
  )
}
```

## Icon Props

All Lucide icons accept the same props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon size in pixels (width and height) |
| `strokeWidth` | `number` | `2` | Stroke thickness (1-3) |
| `color` | `string` | `currentColor` | Icon color (inherits from text color) |
| `className` | `string` | - | Additional CSS classes |
| `absoluteStrokeWidth` | `boolean` | `false` | Use absolute stroke width |

## Size Guidelines

Use consistent sizes across your app:

| Size (px) | Usage | Example |
|-----------|-------|---------|
| **16** | Button icons, inline text icons, badges | `<Plus size={16} />` |
| **20** | Default UI icons, form field icons | `<Search size={20} />` |
| **24** | Standalone icons, navigation icons | `<Home size={24} />` |
| **32** | Feature highlights, empty states | `<InboxIcon size={32} />` |
| **48** | Hero sections, large illustrations | `<CheckCircle2 size={48} />` |

### ⚠️ IMPORTANT: Never Modify Stroke Width

The default `strokeWidth={2}` is carefully designed for optical balance. **Do not change it** unless you have a specific design reason.

```tsx
// ✅ Correct
<Plus size={16} />

// ❌ Incorrect — avoid changing strokeWidth
<Plus size={16} strokeWidth={3} />
```

---

## Icon Categories

### Actions

Common action icons for buttons, menus, and toolbars:

```tsx
import {
  Plus,           // Add, create
  Minus,          // Remove, decrease
  X,              // Close, dismiss
  Check,          // Confirm, success
  Trash2,         // Delete
  Edit2,          // Edit, modify
  Copy,           // Duplicate, copy
  Download,       // Download
  Upload,         // Upload
  Save,           // Save
  Search,         // Search
  Filter,         // Filter
  SlidersHorizontal, // Settings, filter
  MoreHorizontal, // More options (horizontal)
  MoreVertical,   // More options (vertical)
  RefreshCw,      // Refresh, reload
  RotateCw,       // Rotate clockwise
  Maximize2,      // Expand, maximize
  Minimize2,      // Collapse, minimize
} from 'lucide-react'

// Example usage in Button
<Button variant="gradient" leftIcon={<Plus size={16} />}>
  Create New
</Button>

<Button size="icon" variant="ghost">
  <MoreVertical size={16} />
</Button>
```

### Navigation

Icons for navigation, links, and directional cues:

```tsx
import {
  ChevronLeft,    // Previous, back
  ChevronRight,   // Next, forward
  ChevronDown,    // Expand, dropdown
  ChevronUp,      // Collapse, close dropdown
  ArrowLeft,      // Back, previous page
  ArrowRight,     // Next, forward page
  ArrowUp,        // Scroll up
  ArrowDown,      // Scroll down
  ExternalLink,   // Open in new tab
  Home,           // Home page
  Menu,           // Hamburger menu
  Sidebar,        // Sidebar toggle
} from 'lucide-react'

// Example: Breadcrumb separator
<ChevronRight size={16} className="text-white/30" />

// Example: Dropdown indicator
<Button variant="outline">
  Select Option
  <ChevronDown size={16} className="ml-2" />
</Button>
```

### Feedback

Icons for alerts, status, and notifications:

```tsx
import {
  Check,          // Success, completed
  X,              // Error, close
  AlertCircle,    // Warning, alert
  AlertTriangle,  // Caution, warning
  Info,           // Information
  CheckCircle2,   // Success indicator
  XCircle,        // Error indicator
  AlertOctagon,   // Critical alert
  HelpCircle,     // Help, tooltip
  Loader2,        // Loading spinner
  Zap,            // Quick action, important
  Bell,           // Notification
  BellOff,        // Muted notification
} from 'lucide-react'

// Example: Alert with icon
<Alert variant="success">
  <CheckCircle2 size={20} className="text-emerald-400" />
  <span>Success message</span>
</Alert>

// Example: Loading button
<Button loading>
  {/* Loader2 is shown automatically via loading prop */}
  Saving...
</Button>
```

### UI Controls

Icons for common UI interactions:

```tsx
import {
  Eye,            // Show, visible
  EyeOff,         // Hide, hidden
  Lock,           // Locked, secure
  Unlock,         // Unlocked
  Star,           // Favorite, rating
  Heart,          // Like, favorite
  Bookmark,       // Save, bookmark
  Share2,         // Share
  Link2,          // Link, connection
  Settings,       // Settings, configuration
  User,           // User profile
  Users,          // Multiple users, team
  Calendar,       // Date picker
  Clock,          // Time
  Sun,            // Light mode
  Moon,           // Dark mode
} from 'lucide-react'

// Example: Password toggle
const [showPassword, setShowPassword] = useState(false)

<Input
  type={showPassword ? 'text' : 'password'}
  rightIcon={
    <button onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
    </button>
  }
/>
```

### Media

Icons for media and content types:

```tsx
import {
  Image,          // Image, photo
  Video,          // Video content
  Music,          // Audio, music
  File,           // Generic file
  FileText,       // Text document
  FilePlus,       // Add file
  Folder,         // Directory, folder
  FolderOpen,     // Open folder
  Camera,         // Take photo
  Mic,            // Microphone, voice
  Play,           // Play media
  Pause,          // Pause media
  SkipForward,    // Next track
  SkipBack,       // Previous track
  Volume2,        // Volume
  VolumeX,        // Muted
} from 'lucide-react'
```

### Data & Charts

Icons for data visualization and analytics:

```tsx
import {
  BarChart2,      // Bar chart
  LineChart,      // Line chart
  PieChart,       // Pie chart
  TrendingUp,     // Increase, growth
  TrendingDown,   // Decrease, decline
  Activity,       // Activity, metrics
  Database,       // Database
  Server,         // Server
  Table2,         // Table view
  List,           // List view
  Grid3x3,        // Grid view
  Columns,        // Column layout
} from 'lucide-react'

// Example: Dashboard card
<Card>
  <CardHeader>
    <TrendingUp size={24} className="text-emerald-400" />
    <CardTitle>Revenue Growth</CardTitle>
  </CardHeader>
</Card>
```

### Communication

Icons for messaging and social interactions:

```tsx
import {
  Mail,           // Email
  Send,           // Send message
  MessageSquare,  // Chat, comment
  MessageCircle,  // Message bubble
  Phone,          // Phone call
  PhoneCall,      // Active call
  Video,          // Video call
  AtSign,         // Mention, email
  Hash,           // Hashtag, channel
  Smile,          // Emoji
} from 'lucide-react'
```

---

## Usage with @baolq/ui Components

### Button with Icon

```tsx
import { Button } from '@baolq/ui'
import { Plus, Download, Trash2 } from 'lucide-react'

// Left icon
<Button variant="gradient" leftIcon={<Plus size={16} />}>
  Create New
</Button>

// Right icon
<Button variant="outline" rightIcon={<Download size={16} />}>
  Export Data
</Button>

// Icon-only button
<Button size="icon" variant="destructive">
  <Trash2 size={16} />
  <span className="sr-only">Delete</span>
</Button>
```

### Input with Icon

```tsx
import { Input } from '@baolq/ui'
import { Search, Mail, Lock } from 'lucide-react'

// Left icon
<Input
  placeholder="Search..."
  leftIcon={<Search size={16} />}
/>

// Right icon (loading state)
<Input
  type="email"
  rightIcon={<Mail size={16} />}
  placeholder="your@email.com"
/>
```

### Alert with Icon

```tsx
import { Alert } from '@baolq/ui'
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react'

<Alert variant="success">
  <CheckCircle2 size={20} className="text-emerald-400" />
  <span>Successfully saved changes</span>
</Alert>

<Alert variant="warning">
  <AlertTriangle size={20} className="text-amber-400" />
  <span>Warning: Low disk space</span>
</Alert>
```

### Navigation Menu with Icons

```tsx
import { Sidebar, SidebarMenuItem, SidebarMenuButton } from '@baolq/ui'
import { Home, FileText, Settings, Users } from 'lucide-react'

<Sidebar>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Home size={20} />
      <span>Dashboard</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <FileText size={20} />
      <span>Documents</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
</Sidebar>
```

### Badge with Icon/Dot

```tsx
import { Badge } from '@baolq/ui'
import { Check } from 'lucide-react'

// With status dot
<Badge variant="success" dot>
  Online
</Badge>

// Custom icon inside badge (advanced)
<Badge variant="gradient">
  <Check size={12} />
  <span>Verified</span>
</Badge>
```

---

## Accessibility

### Icon-Only Buttons

Always include a screen reader label for icon-only buttons:

```tsx
// ✅ Correct — has sr-only label
<Button size="icon" variant="ghost">
  <Settings size={16} />
  <span className="sr-only">Open settings</span>
</Button>

// ❌ Incorrect — no label for screen readers
<Button size="icon" variant="ghost">
  <Settings size={16} />
</Button>
```

### Decorative Icons

If an icon is purely decorative (text already explains the action), you can use `aria-hidden`:

```tsx
<Button>
  <Plus size={16} aria-hidden="true" />
  Create New Project
</Button>
```

---

## Color Customization

Icons inherit color from their parent text color by default:

```tsx
// Inherits text color
<div className="text-purple-400">
  <Heart size={24} />
</div>

// Explicit color via className
<CheckCircle2 size={20} className="text-emerald-400" />

// Explicit color via color prop
<AlertCircle color="#f59e0b" size={20} />

// Using CSS variables
<Info className="text-[var(--color-primary)]" size={20} />
```

---

## Animated Icons

You can animate icons using Tailwind or Motion:

### Spinner (Loader2)

```tsx
import { Loader2 } from 'lucide-react'

<Loader2 size={20} className="animate-spin" />
```

### Pulse Effect

```tsx
import { Bell } from 'lucide-react'

<Bell size={20} className="animate-pulse text-rose-400" />
```

### Hover Scale

```tsx
import { Heart } from 'lucide-react'

<button className="group">
  <Heart size={20} className="transition-transform group-hover:scale-110" />
</button>
```

---

## Most Commonly Used Icons

Based on @baolq/ui component usage:

1. **Plus** — Create, add
2. **X** — Close, dismiss
3. **ChevronDown** — Dropdown indicators
4. **ChevronRight** — Next, breadcrumb separators
5. **Search** — Search inputs
6. **Loader2** — Loading states
7. **Check** — Success, checkboxes
8. **AlertCircle** — Warnings, errors
9. **MoreVertical** — More options
10. **Settings** — Settings, configuration

---

## Icon Search

Find icons at: **https://lucide.dev/icons/**

Use the search bar to find icons by keyword (e.g., "arrow", "user", "file").

---

**Next**: Explore component-specific icon usage in individual component `.md` files.
