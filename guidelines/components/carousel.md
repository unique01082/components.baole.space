# Carousel

## Purpose

A content carousel/slider with keyboard navigation, touch support, and optional autoplay. Built on `embla-carousel-react`. Supports horizontal and vertical orientations.

## When to Use

### ✅ Use Carousel when:

- Displaying a scrollable set of cards, images, or feature highlights
- Creating an image gallery or product photo viewer
- Showing testimonials, pricing plans, or step-by-step onboarding slides

### ❌ Don't use Carousel when:

- Content should all be visible at once → Use a Grid
- There are fewer than 3 items → Show them inline
- The content is critical information — carousels hide content; ensure users know more items exist

## Installation

```typescript
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@baolq/ui";
```

## Props API

### Carousel

| Prop          | Type                           | Default        | Description                                |
| ------------- | ------------------------------ | -------------- | ------------------------------------------ |
| `opts`        | `EmblaOptionsType`             | –              | Embla carousel options (loop, align, etc.) |
| `plugins`     | `EmblaPluginType[]`            | –              | Embla plugins (autoplay, etc.)             |
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Scroll direction                           |
| `setApi`      | `(api: CarouselApi) => void`   | –              | Access the Embla API directly              |
| `className`   | `string`                       | –              | Applied to the outer container             |

### CarouselItem

| Prop        | Type     | Default | Description                       |
| ----------- | -------- | ------- | --------------------------------- |
| `className` | `string` | –       | Controls item width via `basis-*` |

## Examples

### Basic Carousel

```tsx
<Carousel className="w-full max-w-xl">
  <CarouselContent>
    {images.map((src, i) => (
      <CarouselItem key={i}>
        <AspectRatio ratio={16 / 9}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </AspectRatio>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Multiple Items Visible

```tsx
<Carousel opts={{ align: "start" }} className="w-full">
  <CarouselContent className="-ml-4">
    {cards.map((card, i) => (
      <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-white font-semibold">{card.title}</h3>
            <p className="text-white/60 text-sm">{card.desc}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Looping Carousel

```tsx
<Carousel opts={{ loop: true }}>
  <CarouselContent>
    {slides.map((slide, i) => (
      <CarouselItem key={i}>
        <div className="p-8 text-center">
          <p className="text-white text-xl italic">"{slide.quote}"</p>
          <p className="text-white/50 mt-4">{slide.author}</p>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Accessing Embla API

```tsx
import { type CarouselApi } from "@baolq/ui";

function ControlledCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>{s}</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-center text-white/50 mt-2">
        Slide {current + 1} of {slides.length}
      </p>
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Add `CarouselPrevious` and `CarouselNext` for navigation affordance
- Use `opts={{ loop: true }}` for infinite scroll experiences
- Control item width via `basis-*` on `CarouselItem` (e.g. `basis-1/3` for 3 per view)

### ❌ Don't

- Don't hide navigation buttons — users need to know more slides exist
- Don't autoplay without a pause mechanism (accessibility requirement)
- Don't use for critical content that users might miss

## Accessibility

- Navigation buttons have descriptive `aria-label`
- Carousel region has `aria-live` for screen reader announcements
- Keyboard: arrow keys scroll the carousel; Tab moves between interactive items inside
