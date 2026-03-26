# Pagination

## Purpose

Navigation controls for paging through large datasets. Provides previous/next buttons, numbered page links, and ellipsis for large page counts.

## When to Use

### ✅ Use Pagination when:

- A list or table has more items than can comfortably fit on screen
- Users need to jump to a specific page number
- Total record count is known

### ❌ Don't use Pagination when:

- Content suits infinite scroll better (social feeds, activity logs)
- The dataset is small enough to display all at once (< 20 items)
- "Load more" button UX is preferred

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
} from "@baolq/ui";
```

## Props API

### PaginationLink

| Prop        | Type                                        | Default  | Description                |
| ----------- | ------------------------------------------- | -------- | -------------------------- |
| `isActive`  | `boolean`                                   | `false`  | Highlights as current page |
| `size`      | `"default"` \| `"sm"` \| `"lg"` \| `"icon"` | `"icon"` | Button size                |
| `href`      | `string`                                    | –        | Optional link target       |
| `className` | `string`                                    | –        | Additional CSS classes     |

`PaginationPrevious` and `PaginationNext` inherit `PaginationLink` props.

## Examples

### Basic Usage

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Controlled Pagination

```tsx
import { useState } from "react";

function DataTable() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.max(1, p - 1));
            }}
          />
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              isActive={p === page}
              onClick={(e) => {
                e.preventDefault();
                setPage(p);
              }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.min(totalPages, p + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### With Ellipsis for Large Page Counts

```tsx
// Show: 1 ... 4 5 6 ... 20
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        5
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">20</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Do's and Don'ts

### ✅ Do

- Always show the active page with `isActive`
- Use `PaginationEllipsis` when more than 7 pages — show first, last, and ±2 around current
- Keep previous/next accessible even when at the first/last page (use `aria-disabled`)

### ❌ Don't

- Don't show more than 7–9 page buttons at once — use ellipsis
- Don't use pagination for search results without also showing total count
- Don't remove previous/next buttons — they're essential for keyboard users

## Accessibility

- Navigation landmark is provided automatically via `<nav>` wrapper
- Use `aria-label` on `PaginationPrevious`/`PaginationNext` to describe direction
- `isActive` link should have `aria-current="page"`
