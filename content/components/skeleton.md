---
title: Skeleton
description: "Documentation for Skeleton component"
---

## Description

Skeleton shows users exactly where content will appear before it loads. These animated placeholders mimic your content's structure, reducing perceived loading time and creating a smoother experience than watching a spinner spin.

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
- **Background**: Light gray (`--bg-fill-lighter`, `--bg-fill-light`)
- **Shimmer**: White gradient moving across (1-2s loop)
- **Border Radius**: Matches final content
- **Animation**: Continuous shimmer left-to-right

## Do

- Match skeleton layout to your actual content structure
- Use for loading states longer than 300ms
- Combine with progressive loading when possible
- Transition smoothly to real content
- Keep animations subtle

## Don't

- Use for quick loads under 300ms
- Create skeletons that look nothing like the actual content
- Go overboard with animation
- Leave skeletons hanging after errors or timeouts

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

