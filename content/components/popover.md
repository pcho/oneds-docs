---
title: Popover
description: "Documentation for Popover component"
---

## Description

Popover is a floating container that appears near its trigger, displaying rich content like menus, forms, or detailed info. More flexible than tooltips but lighter than modals, it delivers contextual content without leaving the page. Perfect for quick actions or supplementary information that doesn't need a full page.

Think of it as a contextual sidebar that brings content right where users need it.

## Anatomy

1. **Trigger Element** - Button, link, or control that opens popover
2. **Popover Container** - Floating card with shadow
3. **Content Area** - Flexible content (text, lists, forms, contacts, etc.)
4. **Arrow** - Pointer indicating trigger element
5. **Optional Close Button** - X to dismiss popover
6. **Optional Header** - Title or navigation
7. **Optional Footer** - Actions or additional controls

## Specification

### Popover Component Set

**Placement Variants** (12 positions):
- **Left**: Left Top, Left, Left Bottom
- **Right**: Right Top, Right, Right Bottom
- **Top**: Top Left, Top, Top Right
- **Bottom**: Bottom Left, Bottom, Bottom Right

**Container Dimensions:**
- **Width**: `270px` (default, can vary by content type)
- **Layout**: Row or column based on placement
- **Shadow**: `shadow-floating`
- **Border Radius**: `radius-default`

### Popover Content Component Set

**Content Variants:**
- **Default**: Standard content with text and optional actions
- **List**: Vertical list of items
- **Blank**: Empty content area for custom content
- **Contact**: Contact card with avatar and details
- **Contacts - List**: Multiple contacts in list format

**Default Content:**
- **Width**: `262px` (fixed)
- **Padding**: `spacing-3`
- **Gap**: `spacing-3` between sections
- **Background**: `--bg-surface-white`
- **Border Radius**: `radius-default`
- **Layout**: Vertical column, right-aligned

**List Content:**
- **Width**: `262px` (fixed)
- **Padding**: `spacing-3`
- **Gap**: `radius-tiny` between list items
- **Layout**: Vertical column, right-aligned

**Blank Content:**
- **Width**: `262px` (fixed)
- **Height**: `240px` (fixed)
- **Padding**: `spacing-3`
- **Layout**: Vertical column, right-aligned

**Contact Content:**
- **Width**: `262px` (fixed)
- **Gap**: `spacing-3`
- **Layout**: Vertical column

**Contacts List:**
- **Sizing**: Hug content
- **Layout**: Horizontal row
- Contains multiple contact items

## Do

- Use for supplementary content and actions
- Position near trigger for context
- Provide clear dismissal (X, Esc, click outside)
- Keep content focused and concise
- Show loading states for dynamic content
- Handle overflow with scrolling
- Animate appearance smoothly

## Don't

- Use for critical information (use inline or modal)
- Make too large (consider drawer or modal)
- Nest popovers within popovers
- Trigger on hover for complex content (use click)
- Forget to position arrow correctly
- Make content too dense
- Use for long forms (use page or modal)

## Uses

**Primary Use Cases:**

1. **Action Menus** - Contextual actions and options
2. **User Profiles** - Quick view of user information
3. **Quick Actions** - Small forms or controls
4. **Rich Tooltips** - Detailed explanations with formatting
5. **Filter Panels** - Compact filter controls
6. **Navigation Menus** - Nested navigation options
7. **Notifications** - Expanded notification details
8. **Contact Cards** - Quick contact information display
9. **Help Content** - Contextual help and documentation

**Example Scenarios:**

**User Profile Popover:**
```
[Trigger: User Avatar]
              ↓
┌──────────────────────────┐
│ [Avatar] John Doe        │
│          Patent Attorney │
│ ───────────────────────  │
│ 📧 john@example.com      │
│ 📞 (555) 123-4567        │
│ ───────────────────────  │
│ [View Profile] [Message] │
└──────────────────────────┘
```

**Actions Menu:**
```
[Trigger: ⋮ Button]
         ↓
┌──────────────────┐
│ ✏️ Edit          │
│ 📋 Duplicate     │
│ 📤 Export        │
│ ───────────────  │
│ 🗑️ Delete        │
└──────────────────┘
```

**Quick Filter:**
```
[Trigger: Filter Button]
            ↓
┌──────────────────────────┐
│ Status                    │
│ ☑ Approved               │
│ ☑ Pending                │
│ ☐ Rejected               │
│                          │
│ Date Range               │
│ [Last 30 days ▼]         │
│                          │
│     [Reset] [Apply]      │
└──────────────────────────┘
```

**Contact List:**
```
[Trigger: @ Mention]
        ↓
┌──────────────────────────┐
│ [👤] Alice Smith         │
│      alice@company.com   │
├──────────────────────────┤
│ [👤] Bob Jones           │
│      bob@company.com     │
├──────────────────────────┤
│ [👤] Carol Lee           │
│      carol@company.com   │
└──────────────────────────┘
```

## Behavior

### States

**Popover States:**
- **Closed** - Not visible
- **Opening** - Fade in animation
- **Open** - Fully visible and interactive
- **Closing** - Fade out animation

**Content States:**
- **Loading** - Skeleton or spinner
- **Loaded** - Content displayed
- **Empty** - No content available
- **Error** - Failed to load content

### Interactions

**Opening:**
- **Click**: Default trigger method
- **Hover**: For simple, read-only content only
- **Focus**: For keyboard accessibility
- **Right-click**: For context menus
- **Long-press**: Touch devices

**Closing:**
- Click close button (X)
- Press Escape key
- Click outside popover (optional)
- Click trigger again (toggle)
- Select action within popover
- Automatically after action completes

**Keyboard Navigation:**
- `Tab` - Navigate through interactive elements
- `Shift+Tab` - Navigate backward
- `Escape` - Close popover
- `Arrow Keys` - Navigate lists/menus
- `Enter/Space` - Select item

**Scrolling:**
- Popover scrolls internally if content exceeds max height
- Page scroll disabled when popover open (optional)
- Scroll indicators show more content available

### Positioning

**Automatic Placement:**
- Starts with preferred position
- Falls back if insufficient space
- Adjusts to stay within viewport
- Maintains 16px minimum from edges

**Arrow Positioning:**
- Points to trigger element center
- Adjusts with popover placement
- Offset from edge to avoid clipping

**Boundary Detection:**
- Detects viewport edges
- Flips to opposite side if needed
- Slides along edge when needed

### Animations

**Open:**
- Fade in from 0 to 1 opacity (200ms)
- Scale from 0.95 to 1.0 (200ms)
- Slide from arrow position (optional)
- Easing: Ease-out

**Close:**
- Fade out to 0 opacity (150ms)
- Scale to 0.95 (150ms)
- Easing: Ease-in

**Content Transitions:**
- Crossfade when switching content
- Smooth height transitions
- Loading skeleton fades in

**Reduced Motion:**
- Instant appearance/disappearance
- No scaling or sliding
- Respects prefers-reduced-motion

### Hover vs Click

**Hover Popovers:**
- Delay on hover (300-500ms)
- Keep open when mouse inside
- Close when mouse leaves
- Use only for simple, read-only content

**Click Popovers:**
- Open immediately on click
- Persist until explicitly closed
- Support interactive content
- Better for mobile
