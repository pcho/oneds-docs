---
title: Badge
description: "Documentation for Badge component"
---

## Description

Badge is a compact visual indicator that highlights status, counts, or categories. It comes in two styles: Status badges for inline labels, and Ribbon badges for decorating container corners like cards or images.

Use badges to show status, mark items as new, display counts, or add visual emphasis without disrupting main content.

## Anatomy

### Status Badge
1. **Container** - Rounded rectangle with auto-width
2. **Icon** (optional) - Status indicator icon
3. **Label** - Optional text label
4. **Color** - Semantic color based on status

### Ribbon Badge
1. **Container** - Corner-positioned triangle or flag shape
2. **Background** - Solid color based on semantic meaning
3. **Position** - One of four corner positions

## Specification

### Status Badge

**Variants:**
- Success (with/without icon)
- Error (with/without icon)
- Warning (with/without icon)
- Processing (with/without icon)
- Default (with/without icon)
- Disabled (with/without icon)

**Sizing:**
- **Layout**: Horizontal row, center-aligned
- **Gap**: `spacing-2` (between icon and text, if both present)
- **Sizing**: Auto-width (hug content)
- **Alignment**: Center

**Icon Only Variant:**
- No text label
- Icon serves as the sole indicator
- Minimal footprint

**Colors:**
- **Success**: `--bg-fill-success-normal`
- **Error**: `--bg-fill-danger-normal`
- **Warning**: `--bg-fill-warning-normal`
- **Processing**: `--bg-fill-brand-normal` (animated)
- **Default**: `--bg-fill-lighter`
- **Disabled**: `--bg-fill-disabled`

### Ribbon Badge

**Variants:**
- Brand: `--bg-fill-brand-normal`
- Success: `--bg-fill-success-normal`
- Danger: `--bg-fill-danger-normal`
- Warning: `--bg-fill-warning-normal`
- Info: `--bg-fill-info-normal`
- Accent: `--bg-fill-brand-lighter`

**Positioning:**
- Bottom Right: Border radius `radius-extra-small radius-extra-small 0 radius-extra-small`
- Bottom Left: Border radius `radius-extra-small radius-extra-small radius-extra-small 0`
- Top Left: Border radius `0 radius-extra-small radius-extra-small radius-extra-small`
- Top Right: Border radius `radius-extra-small 0 radius-extra-small radius-extra-small`

**Sizing:**
- **Layout**: Horizontal row, center-aligned
- **Padding**: `spacing-1 spacing-2`
- **Gap**: `spacing-2` (if icon + text)
- **Sizing**: Auto-width (hug content)

## Do

- Use semantic colors that match the meaning (success = green, error = red, etc.)
- Keep badge text concise—preferably 1-3 words maximum
- Use icon-only badges when space is limited and meaning is clear
- Place ribbon badges consistently in the same corner position across similar elements
- Use status badges inline with text or adjacent to items they describe
- Ensure badges have sufficient contrast against their background
- Use processing badge for loading or in-progress states

## Don't

- Don't use multiple ribbons on the same element—choose one priority
- Don't use disabled state for interactive elements—it should be informational only
- Don't make badges clickable unless there's a clear action associated
- Don't use ribbon badges inline with text—they're meant for container corners
- Don't use overly long text that forces badges to wrap
- Don't mix status and ribbon badge styles in the same context
- Don't use processing badge for static content

## Uses

**Status Badge Use Cases:**

1. **Task Status** - Show task completion states (success, error, processing)
2. **System Status** - Display service health or system state
3. **Item States** - Indicate item conditions (new, archived, draft)
4. **Counts** - Show numerical indicators (12 unread, 5 pending)
5. **Inline Labels** - Categorize list items or table rows
6. **Warnings** - Highlight issues or required attention

**Ribbon Badge Use Cases:**

1. **Featured Items** - Mark cards as "Featured" or "Premium"
2. **Product Labels** - Tag items as "New", "Sale", or "Limited"
3. **Category Markers** - Visual category indicators on cards
4. **Priority Flags** - Highlight high-priority items
5. **Image Overlays** - Decorate image thumbnails or avatars
6. **Card Decorations** - Add visual interest to card layouts

**Example Scenarios:**

- Patent application status: "Approved" (success), "Rejected" (error), "Pending" (processing)
- Document states: "Draft" (default), "Published" (success), "Archived" (disabled)
- Notification counts: "3 new messages" with processing badge
- Featured patent card with "Premium" ribbon badge (brand color, top-right)
- Alert system status: "All systems operational" (success badge with icon)

## Behavior

### States

**Status Badge:**
- **Success** - Completed, approved, active states (green)
- **Error** - Failed, rejected, critical issues (red)
- **Warning** - Caution, needs attention, potential issues (orange)
- **Processing** - Loading, in-progress, pending (blue, animated)
- **Default** - Neutral, standard state (gray)
- **Disabled** - Inactive, unavailable, archived (light gray)

**Ribbon Badge:**
- All ribbon badges are static (no hover/active states)
- Position is fixed to one corner
- Color indicates semantic meaning or category

### Interactions

**Non-Interactive (Default):**
- Status and ribbon badges are typically non-interactive labels
- No hover, focus, or click states by default
- Used purely for visual communication

**Interactive (Optional):**
- Badges can be made clickable if wrapped in a button or link
- When interactive, provide appropriate hover/focus states
- Show tooltip on hover if additional context is needed
- Maintain consistent interaction patterns across the application

### Animations

**Processing Badge:**
- Icon rotates or pulses to indicate activity
- Animation speed: Smooth, not distracting
- Respects prefers-reduced-motion setting

**Ribbon Badge:**
- Can have subtle entrance animation when added dynamically
- No continuous animation—ribbons are static indicators

### Positioning

**Status Badge:**
- Inline with related content
- Adjacent to item names or labels
- Inside table cells or list items
- Next to headings or titles

**Ribbon Badge:**
- Absolutely positioned at container corner
- `z-index` above card content
- Overlays corner of parent element
- Parent container needs `position: relative`
