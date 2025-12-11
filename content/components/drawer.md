---
title: Drawer
description: "Documentation for Drawer component"
---

## Description

Drawer is a panel that slides in from the screen edge, providing focused workspace without leaving the current page. Perfect for forms, details, or settings that need dedicated space while keeping the main content visible.

A temporary workspace that slides in when needed and disappears when done.

## Anatomy

1. **Overlay** - Semi-transparent backdrop (`--bg-overlay`) with optional blur
2. **Drawer Container** - Main panel sliding from edge
3. **Drawer Header** - Top section with title, description, actions
4. **Close Button** - X icon to dismiss drawer
5. **Content Area** - Scrollable main content (uses `_SLOT` component)
6. **Shadow** - Drawer-specific shadow for depth

### Header Variants
- **With Border** - Bottom border separates header from content
- **Without Border** - Seamless transition to content

## Specification

### Drawer (Full Component)

**Dimensions:**
- **Overall Canvas**: `1888px × 1168px` (full viewport representation)
- **Drawer Panel**: `472px × fill height`
- **Position**: Right edge (can be customized to left, top, bottom)

**Layout:**
- **Mode**: Vertical column
- **Justify**: Stretch
- **Align**: Stretch
- **Sizing**: Fixed width, fill height

### Overlay

**Style:**
- **Background**: `--bg-overlay`
- **Backdrop Filter**: `blur(0px)` (can be customized)
- **Size**: Full viewport
- **Z-index**: Below drawer, above page content

### Drawer Card

**Dimensions:**
- **Width**: `472px` (fixed)
- **Height**: Fill available height
- **Background**: `--bg-surface-white`
- **Shadow**: `shadow-drawer`
- **Border Radius**: `radius-default radius-default 0 0` (rounded top corners)

**Layout:**
- **Mode**: Vertical column
- **Sizing**: Fixed width, fill height
- **Position**: Absolute right edge (slides in from right)

### Drawer Header

**With Border:**
- **Layout**: Vertical column
- **Sizing**: Fill horizontal, hug vertical
- **Background**: `--bg-surface-white`
- **Border Radius**: `radius-default radius-default 0 0`
- **Border Bottom**: `--border-lighter` (separates from content)

**Without Border:**
- Same as above, but no bottom border
- **Use**: Seamless appearance

**Content:**
- Title (optional)
- Description (optional)
- Tabs (optional)
- Action buttons (optional)
- Up/Down toggle (optional)
- Close button

### Content Area (_SLOT)

**Layout:**
- **Mode**: Vertical column
- **Justify**: Center
- **Align**: Center
- **Padding**: Custom (varies by content)
- **Sizing**: Fill horizontal, fill vertical
- **Overflow**: Scroll vertically if content exceeds height

**Placeholder Style:**
- **Background**: `--bg-surface-brand-lighter`
- **Border**: `--border-brand-normal` (dashed)

### Shadow Specification

**Drawer Shadow (Layered):**
```
-2px 0px 4px 0px rgba(0, 0, 0, 0.06),
-7px 0px 7px 0px rgba(0, 0, 0, 0.05),
-17px 0px 10px 0px rgba(0, 0, 0, 0.03),
-30px 0px 12px 0px rgba(0, 0, 0, 0.01),
-47px 0px 13px 0px rgba(0, 0, 0, 0)
```
Creates depth effect on left edge of drawer

## Do

- Use drawers for focused tasks that don't require full page
- Provide clear close mechanisms (X button, Esc key, click overlay)
- Keep drawer width proportional (typically 320-600px)
- Use header to show context and actions
- Allow scrolling within drawer if content is long
- Animate drawer entry/exit smoothly
- Trap focus within drawer when open
- Return focus to trigger element on close

## Don't

- Don't use drawers for critical primary actions—use pages instead
- Don't make drawers too wide (max ~50-60% viewport width)
- Don't forget to handle keyboard accessibility
- Don't allow main content to scroll when drawer is open
- Don't nest drawers within drawers—use modals or separate pages
- Don't hide the close button—always provide an escape
- Don't make overlay too dark—users should see underlying context

## Uses

**Primary Use Cases:**

1. **Form Entry** - Add/edit records without leaving page
2. **Detail Views** - Show detailed information about selected item
3. **Settings Panels** - Application or user settings
4. **Filters** - Advanced filter controls for data views
5. **Comments/Notes** - Add annotations or feedback
6. **History/Activity** - View logs or activity feeds
7. **Cart/Basket** - E-commerce shopping cart review
8. **Help/Documentation** - Contextual help without leaving page

**Example Scenarios:**

**Patent Application Drawer:**
```
┌─ Overlay (darken page) ────────────────────┐
│                                      [Drawer]│
│ Main Page Content           ┌───────────────┤
│ (slightly visible            │ New Patent    │
│  behind overlay)             │ [X]           │
│                              ├───────────────┤
│                              │ Applicant:    │
│                              │ [Input]       │
│                              │               │
│                              │ Title:        │
│                              │ [Input]       │
│                              │               │
│                              │ [Scrollable   │
│                              │  content...]  │
│                              │               │
│                              │ [Submit]      │
│                              └───────────────┘
└─────────────────────────────────────────────┘
```

**Filter Drawer:**
- Opens from right side
- Shows all available filters
- Apply/Reset buttons in header
- Main content remains visible behind overlay

**Detail View Drawer:**
- Click list item → drawer opens with details
- Edit button in header
- Related actions available
- Close returns to list view

**Settings Drawer:**
- Icon button opens drawer from right
- Tabbed sections (Account, Privacy, Notifications)
- Save/Cancel in header or footer
- Changes apply on save

## Behavior

For detailed behavior patterns, including states, interactions, animations, position variants, scrolling, and responsive behavior, see the **[Drawer Behavior Patterns](../patterns/behaviours/drawer.md)** documentation.
