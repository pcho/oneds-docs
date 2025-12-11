---
title: Collapse
description: "Documentation for Collapse component"
---

## Description

Save space without hiding content. Collapse uses a clickable header to smoothly expand or collapse content below—perfect for FAQs, accordion menus, or progressive disclosure. Show users what's available, let them choose what to explore.

Use collapse when content is important but doesn't need constant visibility. Users decide what they want to see.

## Anatomy

1. **Header** - Clickable area that triggers expand/collapse
2. **Expand Icon** - Visual indicator (chevron/arrow) showing open/closed state
3. **Title** - Main header text
4. **Content Area** - Expandable section that shows/hides
5. **Background** - `--bg-surface-white` container

### Header Variants
- **Default** - Standard size with full styling
- **Small** - Compact version for dense layouts
- **Text** - Minimal styling, text-focused

### Icon States
- **Open** - Rotated to indicate expanded state (chevron pointing down)
- **Closed** - Default position (chevron pointing right/up)

## Specification

### Collapse (Full Component)

**Variants × States:**
- Default + Open/Closed
- Small + Open/Closed
- Text + Open/Closed

**Container:**
- **Width**: `444px` (fixed, can be customized)
- **Layout**: Vertical column
- **Sizing**: Fixed width, hug height
- **Background**: `--bg-surface-white`

**Positioning (within component set):**
- Default variants: Y positions 20, 80px
- Small variants: Y positions 336, 388px
- Text variants: Y positions 632, 684px

### Header - Expand Icon

**Open State:**
- **Layout**: Column, center-justified and aligned
- **Sizing**: Hug content (auto width/height)
- **Transform**: Rotated (typically 90° or 180°)

**Closed State:**
- **Layout**: Column, center-justified and aligned
- **Sizing**: Hug content (auto width/height)
- **Transform**: Default rotation (0°)

### Header

**Default Variant:**
- **Sizing**: Hug content
- **Padding**: Standard header padding
- **Typography**: Default body font

**Small Variant:**
- **Sizing**: Hug content
- **Padding**: Reduced padding
- **Typography**: Smaller font size

**Text Variant:**
- **Width**: `438px` (fixed)
- **Sizing**: Fixed width, hug height
- **Style**: Minimal, text-focused

## Do

- Use collapse for non-critical content that takes up space
- Provide clear visual feedback during transitions
- Animate expansions and collapses smoothly (200-300ms)
- Make the entire header clickable, not just the icon
- Group related content in single collapse sections
- Use consistent icon directions (right for closed, down for open)
- Support keyboard interaction (Enter/Space to toggle)

## Don't

- Hide critical information users need right away
- Use collapse for primary navigation
- Animate too slowly—keep it snappy (200-300ms max)
- Make clickable areas unclear or too small
- Nest more than 2-3 levels deep
- Forget to show which items are expandable
- Disable on mobile without good reason

## Uses

**Primary Use Cases:**

1. **FAQ Sections** - Question as header, answer as content
2. **Accordion Menus** - Progressive disclosure of options
3. **Settings Panels** - Group related settings under headers
4. **Data Tables** - Expandable rows showing details
5. **Filters** - Collapsible filter groups
6. **Documentation** - Section headers that expand to show content
7. **Forms** - Optional or advanced sections

**Example Scenarios:**

**Patent Application Form:**
```
▼ Applicant Information (Expanded)
  [Form fields visible]

▶ Claims (Collapsed)
▶ Drawings (Collapsed)
▶ Abstract (Collapsed)
```

**FAQ:**
```
▶ How do I file a patent?
▶ What documents do I need?
▼ How long does the process take? (Expanded)
  The patent application process typically takes...
▶ What are the filing fees?
```

**Settings Panel:**
```
▼ Display Settings (Expanded)
  - Theme: Dark
  - Font Size: Medium

▶ Privacy Settings (Collapsed)
▶ Notification Settings (Collapsed)
```

**Filter Panel:**
```
▼ Patent Status (Expanded)
  ☑ Approved
  ☐ Pending
  ☐ Rejected

▶ Date Range (Collapsed)
▶ Technology Area (Collapsed)
```

## Behavior

### States

**Collapse States:**
- **Closed** - Content hidden, icon points right/up
- **Open** - Content visible, icon points down
- **Hover** - Header shows hover state
- **Focus** - Focus ring on keyboard navigation
- **Disabled** - Grayed out, non-interactive
- **Loading** - Content area shows skeleton/spinner

**Icon States:**
- **Closed**: Chevron right or up (0°)
- **Open**: Chevron down (90° or 180° rotation)
- **Transition**: Smooth rotation animation

### Interactions

**Opening:**
Click the header or press Enter/Space. The icon rotates to open position, content expands with a smooth animation, fades in, and focus stays on the header.

**Closing:**
Click the expanded header. The icon rotates back, content fades out and collapses smoothly, and focus remains on the header.

**Keyboard Navigation:**
Tab moves between collapse headers. Enter or Space toggles them. Arrow keys move between headers in accordions. Optionally, Home and End jump to first and last headers.

**Accordion Behavior:**
Choose between independent (multiple sections open simultaneously) or exclusive (opening one closes others) based on your use case.

### Animations

**Expand:**
Duration 200-300ms with ease-out easing (starts fast, ends slow). Animates height and opacity while the icon rotates simultaneously.

**Collapse:**
Duration 200-300ms with ease-in easing (starts slow, ends fast). Animates height and opacity while the icon rotates back.

**Reduced Motion:**
Respects prefers-reduced-motion with instant expand/collapse and no animation, though the icon still changes instantly.

### Focus

Headers receive focus rings during keyboard navigation. Focus stays on the header after toggling and moves logically through stacked collapses. Content within expanded sections is fully tabbable.

### Size Variants

**Default:**
- Standard padding and font sizes
- Use for most applications
- Best readability and clickability

**Small:**
- Reduced padding, smaller fonts
- Use in constrained spaces
- Dense layouts like sidebars

**Text:**
- Minimal styling, full width (`438px`)
- Text-focused appearance
- Cleaner look for content-heavy areas

