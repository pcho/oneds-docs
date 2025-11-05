## Description

Skeleton provides placeholder loading states that mimic the structure of content before it loads. By showing where content will appear with animated placeholders, skeletons reduce perceived loading time and create a smoother, more polished user experience than spinners alone.

## Anatomy

1. **Skeleton Elements** - Gray placeholder shapes
2. **Shimmer Animation** - Moving highlight effect
3. **Layout Structure** - Mirrors actual content layout

## Specification

**Skeleton Variants:**
- **Header** (`_IP Header`): Page header skeleton (1244×184px)
- **Card** (`_Card`): Card content skeleton (249×174px)
- **Card - Icon**: Card with icon skeleton (325×60px)
- **Card - Icon - Long**: Tall card skeleton (325×174px)
- **Statistic**: Stats display skeleton (325×60px)
- **Table**: Table skeleton (1111×456px)
- **Form**: Form fields skeleton (1111×364px)
- **Table - Flags**: Table with flags skeleton (1111×456px)
- **Gallery**: Image gallery skeleton (289×317px)
- **Map**: Map view skeleton (1264×609px)

**Visual Style:**
- **Background**: Light gray (`#F4F6F8`, `#ECEEF0`)
- **Shimmer**: White gradient moving across (1-2s loop)
- **Border Radius**: Matches final content
- **Animation**: Continuous shimmer left-to-right

## Do

- Match skeleton to actual content layout
- Use for loading states over 300ms
- Combine with progressive loading (show some content while loading more)
- Animate smoothly to real content
- Keep animation subtle and non-distracting

## Don't

- Don't use for instant loading (<300ms)
- Don't make skeleton drastically different from content
- Don't overuse animation—subtle is better
- Don't forget to remove skeletons after timeout/error

## Uses

- Initial page load
- Lazy-loaded content
- Infinite scroll loading more items
- Tab content loading
- Card grid loading
- Table data fetching
- Search results loading

## Behavior

**Animation:**
- Shimmer moves left-to-right
- Duration: 1.5-2s per cycle
- Infinite loop while loading
- Smooth gradient transition

**Transition to Content:**
- Fade out skeleton (200ms)
- Fade in real content (200ms)
- No jarring layout shifts

**Reduced Motion:**
- Static gray placeholders (no shimmer)
- Instant content replacement

## Accessibility

- Use `aria-busy="true"` on container
- Announce loading: "Loading content"
- Announce when loaded: "Content loaded"
- Don't trap focus in skeleton
- Ensure content doesn't shift layout significantly
