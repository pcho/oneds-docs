---
title: Card
description: "Documentation for Card component"
---

## Description

Cards are flexible containers that group related content and actions into cohesive, scannable units. They come in various flavors—standard, dashboard, gallery, and settings cards—each designed to organize information on an elevated surface that stands out from the page.

Think of cards as content containers that make information digestible. Each card tells its own story while fitting into the larger narrative of your interface.

## Anatomy

### Standard Card
1. **Container** - Outer wrapper with shadow and border
2. **Card Header** - Optional title section with actions
3. **Content Area** - Main body with flexible content
4. **Footer** - Optional actions or metadata (optional)

### Card - Header
1. **Title/Heading** - Card label
2. **Actions** - Buttons, icons, or menu (right-aligned)
3. **Divider** - Optional bottom border separator

### Specialized Cards
- **Dashboard Card** - Stats and metrics display
- **Settings Card** - Configuration options and controls
- **Gallery Card** - Image-focused content
- **Calendar Card** - Date and event display

## Specification

### Card (Standard)

**Dimensions:**
- **Width**: `600px` (default, flexible)
- **Layout**: Vertical column
- **Sizing**: Fixed width, hug height
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-default`
- **Shadow**: `shadow-extra-small`

### Card - Header

**Dimensions:**
- **Width**: `600px` (matches card)
- **Layout**: Horizontal row
- **Justify**: Space-between
- **Align**: Center
- **Gap**: `38px`
- **Padding**: `spacing-6`
- **Border Bottom**: `--border-lighter` (optional)

### Dashboard Card

**Dimensions:**
- **Width**: `424px` (fixed)
- **Layout**: Vertical column
- **Sizing**: Fixed width, hug height
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-default`
- **Shadow**: `shadow-extra-small`

**Components:**
- Dashboard Card - Icon (component set with variants)
- Dashboard Card - Type (component set for different chart types)
- Dashboard Card - Type - Portfolio (portfolio-specific variant)

### Gallery Card

**Dimensions:**
- **Width**: `288px` (fixed)
- **Layout**: Vertical column
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-default`
- **Shadow**: `shadow-extra-small`

### Settings Card

**Dimensions:**
- **Width**: Hug content
- **Height**: Hug content
- **Layout**: Vertical column
- **Gap**: `spacing-6`
- **Padding**: `spacing-6`
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-default`
- **Shadow**: `shadow-extra-small`

### Calendar Card

**Dimensions:**
- **Width**: `148px` (fixed)
- **Height**: `154px` (fixed)
- **Layout**: Vertical column, center-justified
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-default`

## Do

- Group related content together in cards
- Use consistent card styling throughout your interface
- Create clear visual hierarchy within cards
- Make the entire card clickable if it leads somewhere
- Choose the right card type for your context (dashboard, gallery, etc.)
- Stack cards vertically with consistent spacing
- Keep card content focused and concise
- Use card headers for titles and primary actions

## Don't

- Nest cards within cards—use sections instead
- Make cards wider than 800px
- Forget elevation (shadow)—it's what defines a card
- Overcrowd cards with too much content
- Use cards for single pieces of information—that's overkill
- Forget hover states for clickable cards
- Mix different shadow styles inconsistently

## Uses

**Primary Use Cases:**

1. **Content Cards** - Articles, posts, summaries
2. **Dashboard Cards** - KPI metrics and statistics
3. **Product Cards** - E-commerce product listings
4. **User Cards** - Profile summaries and contacts
5. **Gallery Cards** - Image collections
6. **Settings Cards** - Configuration panels
7. **Patent Cards** - Patent application summaries
8. **Activity Cards** - Recent actions or updates
9. **Calendar Cards** - Date and event displays

**Example Scenarios:**

**Patent Application Card:**
```

 Patent Application #12345    [⋮]

 Title: Machine Learning Method
 Status: Under Review
 Filed: Jan 15, 2024
 Examiner: J. Smith

 [View Details] [Download PDF]

```

**Dashboard Card:**
```

 Total Patents

     1,247
   ↑ 12% vs. last

 [View Report]

```

**Gallery Card:**
```

  [Image]

 Diagram A
 Patent #

```

**Settings Card:**
```

 Email Notifications

  ☐ New patent assigned
  ☐ Status changes
  ☐ Weekly summary

        [Save Changes]

```

## When NOT to Use

### Use Alternatives Instead When:

**Use List for simple text items:**
- Single-line items without rich content
- Sequential information
- Text-heavy content without images/icons
- Navigation menus

**Use Table for structured, tabular data:**
- Multiple columns of data
- Sortable information
- Comparing values across rows
- Financial or statistical data

**Use single metric display for dashboard numbers:**
- Just showing one KPI value
- No context or actions needed
- Inline with other content

### Maximum One Primary Action Per Card

**Rule:** Cards should have at most one primary action.

**Good:** One clear primary button
**Too many:** Five action buttons—unclear which matters most

**If you need multiple actions:**
- Use a kebab menu (⋮) for secondary actions
- Keep the primary action as a button
- Or ask: Does this content need a full page instead?

### Avoid Excessive Content

**If your card needs internal scrolling:** The content is too long—use a full page view instead.

**If every card needs tooltips:** Your labels are unclear—redesign with better, clearer labels.

## Behavior

### States

**Card States:**
- **Default** - Standard appearance
- **Hover** - Slight elevation increase (interactive cards)
- **Active** - Pressed state (clickable cards)
- **Selected** - Highlighted border or background
- **Disabled** - Grayed out, non-interactive
- **Loading** - Skeleton or spinner overlay

**Interactive Cards:**
- Entire card clickable
- Hover shows elevation increase
- Cursor changes to pointer
- Ripple effect on click (optional)

### Interactions

**Clickable Cards:**
1. User hovers over card
2. Card elevates slightly (shadow increases)
3. Cursor changes to pointer
4. User clicks anywhere on card
5. Navigate to destination or expand details

**Card with Actions:**
- Header actions (menu, close, expand)
- Footer actions (primary and secondary buttons)
- Inline actions within content
- Actions remain clickable independently

**Expandable Cards:**
- Click to expand/collapse content
- Chevron icon indicates expandability
- Smooth height transition
- Content slides in/out

### Animations

**Hover:**
- Shadow increases (elevation lift)
- Duration: 200ms
- Easing: Ease-out
- Scale: 1.0 → 1.02 (optional, subtle)

**Appear:**
- Fade in + slide up
- Duration: 300ms
- Stagger delay: 50ms between cards in grid

**Expand/Collapse:**
- Height transition: 300ms
- Content fade in/out: 200ms
- Easing: Ease-in-out

**Reduced Motion:**
- No elevation animation
- Instant expand/collapse
- Respects prefers-reduced-motion

### Layout Patterns

**Grid Layout:**
- Multiple cards in responsive grid
- Equal height rows (optional)
- Consistent gaps (`spacing-4` to `spacing-6`)

**List Layout:**
- Single column stack
- Full width or contained
- Vertical spacing (`spacing-4`)

**Masonry Layout:**
- Variable height cards
- Gallery or Pinterest-style
- Responsive columns
