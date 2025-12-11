---
title: Segmented
description: "Documentation for Segmented component"
---

## Description

Segmented Control is a compact, button-like toggle that lets users switch between multiple options or views. Think of it as a visual alternative to radio buttons or tabs—perfect when you need 2-5 mutually exclusive choices in a small, unified control. The Swiss Army knife of view switchers.

## Anatomy

1. **Container** - Outer wrapper with border
2. **Segment Items** - Individual option buttons
3. **Selected Indicator** - Background highlight for active segment
4. **Labels** - Text or icon for each segment
5. **Icons** - Optional visual indicators (optional)

## Specification

**Container:**
- **Height**: `36px` (default)
- **Border Radius**: `radius-small`
- **Border**: `1px solid bdr-default`
- **Background**: Light gray (`--bg-fill-lighter`)
- **Layout**: Horizontal row
- **Padding**: `2px`
- **Gap**: `0px` (segments touch)

**Segment Item:**
- **Height**: `32px`
- **Min Width**: `80px` (flexible based on content)
- **Padding**: `spacing-2 spacing-4`
- **Border Radius**: `radius-extra-small`
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-normal`
- **Background**: Transparent (unselected)

**Selected State:**
- **Background**: White (`--bg-surface-white`)
- **Shadow**: `0px 1px 2px rgba(0, 0, 0, 0.1)`
- **Font Weight**: `font-weight-emphasized`
- **Color**: Primary text (`--text-normal`)

**Unselected State:**
- **Background**: Transparent
- **Color**: Secondary text (`--text-light`)
- **No shadow**

**Sizes:**
- **Small**: Height `28px`, padding `6px spacing-3`
- **Default**: Height `36px`, padding `spacing-2 spacing-4`
- **Large**: Height `44px`, padding `spacing-3 20px`

**With Icons:**
- **Icon Size**: `16px`
- **Gap**: `spacing-2` between icon and label
- **Icon-only**: Min width `36px`, centered icon

## Do

- Use for 2-5 mutually exclusive options
- Keep labels short and concise
- Give equal visual weight to all options
- Show clear selected state
- Use icons for clarity when helpful
- Make entire segment clickable
- Maintain consistent segment sizes

## Don't

- Use for more than 5 options (use dropdown)
- Use for single selection (use toggle)
- Make labels too long
- Use for navigation (use tabs)
- Nest segmented controls
- Forget hover states
- Use for actions (use button group)

## Uses

**Primary Use Cases:**

1. **View Switching** - List vs. Grid view
2. **Time Ranges** - Day, Week, Month, Year
3. **Data Filters** - All, Active, Archived
4. **Chart Types** - Line, Bar, Pie
5. **Map Layers** - Satellite, Street, Terrain
6. **Content Types** - Photos, Videos, Documents
7. **Sorting** - Newest, Popular, Trending
8. **Display Mode** - Compact, Comfortable, Spacious

**Example Scenarios:**

**View Selector:**
```
┌────────────────────────┐
│ [List]  Grid   Gallery │
└────────────────────────┘
```

**Time Range:**
```
┌──────────────────────────────┐
│ Day  [Week]  Month  Year     │
└──────────────────────────────┘
```

**Status Filter:**
```
┌────────────────────────────┐
│ [All]  Active  Completed   │
└────────────────────────────┘
```

**With Icons:**
```
┌───────────────────────────────┐
│ [☰ List]  ⊞ Grid  ⊟ Gallery │
└───────────────────────────────┘
```

## Behavior

### Selection

**Clicking Segment:**
1. User clicks unselected segment
2. Selected indicator moves smoothly (200ms)
3. Previous segment deselects
4. Content updates accordingly

**Keyboard Navigation:**
- `Tab` - Focus segmented control
- `Arrow Left/Right` - Navigate between segments
- `Enter/Space` - Select focused segment
- Focus visible indicator

### States

**Segment States:**
- **Unselected** - Transparent background, normal text
- **Hover** - Subtle background tint on unselected
- **Selected** - White background, shadow, bold text
- **Focus** - Outline indicator
- **Disabled** - Grayed out, not clickable

**Transitions:**
- Selected indicator slides smoothly (200ms)
- Background color fades in
- Shadow appears
- Easing: Ease-out

### Animations

**Selection Change:**
- Background slides from old to new
- Smooth transition, not instant
- Color and shadow fade
- Text weight changes

**Hover:**
- Subtle background tint (150ms)
- Only on unselected segments

**Reduced Motion:**
- Instant selection change
- No sliding animation
- Respects prefers-reduced-motion
