# EmptyState

## Purpose

Communicates the absence of data with an icon, title, description, and optional action. Used in empty tables, search result sets with no matches, onboarding screens, and empty list/folder views.

## When to Use

### ✅ Use EmptyState when:

- A list, table, or view is empty and needs to explain why or prompt next action
- Search returns no results
- A user has no items yet (first-time use, onboarding)

### ❌ Don't use EmptyState when:

- The loading state hasn't resolved yet → Use `Skeleton` or `Spinner`
- A terminal error state → Use `Result`
- A brief inline note is sufficient → Use a simple `<p>` or `Alert`

## Installation

```typescript
import { EmptyState } from "@baolq/ui";
```

## Props API

| Prop          | Type              | Default      | Description                                    |
| ------------- | ----------------- | ------------ | ---------------------------------------------- |
| `icon`        | `React.ReactNode` | –            | Icon or illustration displayed above the title |
| `title`       | `string`          | **required** | Main heading                                   |
| `description` | `string`          | –            | Supporting explanation text                    |
| `action`      | `React.ReactNode` | –            | Call-to-action button(s)                       |
| `className`   | `string`          | –            | Additional CSS classes                         |

## Examples

### Empty Table

```tsx
import { Database } from "lucide-react";

<EmptyState
  icon={<Database size={48} className="text-white/30" />}
  title="No records found"
  description="Try adjusting your filters or create a new entry."
  action={<Button onClick={openCreateModal}>Create Entry</Button>}
/>;
```

### No Search Results

```tsx
import { Search } from "lucide-react";

<EmptyState
  icon={<Search size={48} className="text-white/30" />}
  title="No results for &ldquo;{query}&rdquo;"
  description="Try a different keyword or check your spelling."
/>;
```

### Onboarding / First-Time Use

```tsx
import { FolderOpen } from "lucide-react";

<EmptyState
  icon={<FolderOpen size={48} className="text-white/30" />}
  title="Your projects will appear here"
  description="Create your first project to get started."
  action={<Button onClick={() => navigate("/new")}>Create Project</Button>}
/>;
```

### Inside a Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>
  <CardContent>
    <EmptyState
      icon={<Bell size={32} className="text-white/30" />}
      title="All caught up!"
      description="You have no new notifications."
    />
  </CardContent>
</Card>
```

## Do's and Don'ts

### ✅ Do

- Include a relevant icon to provide visual context
- Provide `action` when the user can resolve the empty state (create, search again)
- Keep description brief — one sentence max

### ❌ Don't

- Don't show EmptyState while data is loading
- Don't use a generic "No data" message — explain why it's empty and what to do
- Don't put action buttons that navigate away from the feature context

## Accessibility

- Icon is `aria-hidden={true}`
- Title is rendered as `<p role="heading">` or `<h3>` depending on context
- Action buttons have descriptive labels
