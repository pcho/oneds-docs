---
title: Scroll
description: "Documentation for Scroll component"
---

## Description

Meet Scroll: your custom-styled scrollbar that brings polish and consistency to every browser and platform. It replaces those clunky default scrollbars with something that actually matches your interface—without sacrificing any of the smooth scrolling behavior users expect.

Think of it as giving your scrollbars a design upgrade while keeping all the functionality users know and love.

## Anatomy

1. **Track** - Background channel where thumb moves
2. **Thumb** - Draggable indicator showing scroll position
3. **Buttons** - Optional scroll up/down buttons (rarely used)
4. **Container** - Scrollable content area

## Specification

### Scrollbar Component Set

**Dimensions:**
- **Component Set Canvas**: `218px × 190px`
- **Variants**: Vertical and horizontal orientations

**Vertical Scrollbar:**
- **Width**: Typically `6-12px`
- **Height**: Matches container height
- **Position**: Right edge of container

**Horizontal Scrollbar:**
- **Height**: Typically `6-12px`
- **Width**: Matches container width
- **Position**: Bottom edge of container

**Track:**
- **Background**: Light gray or transparent (`--bg-fill-lighter`, `--bg-fill-light`)
- **Border Radius**: Rounded (`3-6px`)
- **Hover**: Slightly darker background (optional)

**Thumb:**
- **Background**: Medium gray (`--border-lighter`)
- **Border Radius**: Matches track
- **Hover**: Darker gray
- **Active**: Even darker when dragging
- **Min Height/Width**: `30-40px` (prevents too-small thumb)

## Do

- Use custom scrollbars to maintain a consistent branded experience
- Make scrollbars visible enough to notice
- Keep thumb size proportional to content length
- Support both mouse and touch scrolling
- Consider auto-hide behavior with hover reveal
- Provide smooth scrolling animations

## Don't

- Make scrollbars too thin—they'll be hard to grab
- Hide scrollbars without showing there's scrollable content
- Override accessibility features like scroll wheel or keyboard support
- Make thumbs too small (keep them at least 30-40px)
- Use custom scrollbars inconsistently across containers

## Uses

**Primary Use Cases:**

1. **Long Content Areas** - Articles, documentation, lists
2. **Sidebars** - Navigation panels with many items
3. **Modal/Drawer Content** - Scrollable popup content
4. **Tables** - Horizontal and vertical scrolling
5. **Code Editors** - Scrolling through code
6. **Chat Windows** - Message history
7. **Data Grids** - Large datasets

**Example Scenarios:**

**Patent Document Viewer:**
- Long PDF or document content
- Custom scrollbar matches interface
- Smooth scrolling through pages
- Jump-to-section via scrollbar click

**Data Table:**
- Vertical scroll for many rows
- Horizontal scroll for many columns
- Scrollbars appear on hover
- Sticky headers remain visible

**Sidebar Navigation:**
- Many navigation items
- Thin, subtle scrollbar
- Auto-hides when not needed
- Returns on hover or scroll

## Behavior

### States

**Scrollbar States:**
- **Hidden** - Auto-hide when not needed
- **Visible** - Always visible or on hover
- **Hover** - Thumb darkens on hover
- **Active** - Thumb darkens when dragging
- **Disabled** - Content not scrollable (full visible)

**Thumb States:**
- **Default** - Standard appearance
- **Hover** - Highlighted
- **Dragging** - Active, darker
- **Transitioning** - Animating position

### Interactions

**Mouse Wheel:**
- Scroll wheel moves content
- Thumb position updates accordingly
- Smooth scrolling animation

**Thumb Dragging:**
1. User hovers over thumb
2. Cursor changes to grab cursor
3. User clicks and drags thumb
4. Content scrolls proportionally
5. Release ends drag

**Track Clicking:**
1. User clicks track above/below thumb
2. Content jumps by page (viewport height/width)
3. Thumb animates to new position

**Auto-Hide Behavior:**
- Scrollbar fades out after inactivity (1-2s)
- Reappears on hover over scroll area
- Reappears on scroll interaction
- Stays visible while scrolling

**Keyboard Scrolling:**
- Arrow keys scroll content
- Page Up/Down scroll by page
- Home/End jump to top/bottom
- Space scrolls down by page
- Scrollbar updates position

### Animations

**Appear/Disappear:**
- Fade in/out (200ms)
- Optional slide from edge

**Thumb Movement:**
- Smooth position transition (100-200ms)
- Easing: Ease-out

**Hover:**
- Color transition (150ms)
- Scale slightly (1.1x) on hover (optional)

**Reduced Motion:**
- Instant position updates
- No fade animations
- Respects prefers-reduced-motion

### Scrolling Performance

- Use `transform` for smooth scrolling
- Hardware acceleration when possible
- Throttle scroll events (16ms / 60fps)
- Lazy load content beyond viewport
- Virtual scrolling for very long lists

