---
title: Divider
description: "Documentation for Divider component"
---

## Description

Give your content room to breathe. Divider is a subtle line that separates sections, establishes hierarchy, and helps users scan without being intrusive. Use a simple line or add centered text for labeled sections.

Think of it as a visual pause—a gentle comma in your interface that clarifies structure.

## Anatomy

### Default Variant
1. **Line** - Horizontal separator line

### Text Variant
1. **Left Line** - Line segment before text
2. **Text Label** - Centered text (e.g., "OR", "AND", section name)
3. **Right Line** - Line segment after text

## Specification

### Default Divider

**Dimensions:**
- **Width**: `1220px` (full width, flexible)
- **Height**: `1px`
- **Color**: `--border-lighter`
- **Layout**: None (simple line element)

### Text Divider

**Layout:**
- **Mode**: Horizontal row
- **Alignment**: Center-aligned
- **Width**: `1220px` (full width, flexible)
- **Height**: Auto (hug content)

**Structure:**
- Left line: Flex-grow to fill space
- Text: Fixed width, centered
- Right line: Flex-grow to fill space

**Text Styling:**
- **Typography**: Small, uppercase (optional)
- **Color**: Secondary text color
- **Padding**: Horizontal spacing around text (typically 12-16px)

**Line Styling:**
- **Height**: `1px`
- **Color**: `--border-lighter`
- **Alignment**: Vertically centered with text

## Do

- Separate distinct content sections with dividers
- Keep colors subtle—dividers shouldn't dominate
- Use text dividers for operators (OR, AND) or section labels
- Span the full width of containers
- Maintain consistent divider styles throughout
- Consider vertical dividers for side-by-side content

## Don't

- Overuse dividers—white space often works better
- Make dividers too thick or bold
- Divide tightly related content
- Stack multiple dividers with nothing between them
- Use long labels in text dividers—keep them short
- Mix divider styles inconsistently

## Uses

**Primary Use Cases:**

1. **List Separation** - Between list items or groups
2. **Form Sections** - Separate sections of a long form
3. **Content Blocks** - Between cards or content areas
4. **Logical Operators** - "OR" divider between options
5. **Timeline Events** - Separate events in a timeline
6. **Menu Sections** - Group related menu items
7. **Settings Panels** - Separate setting categories

**Example Scenarios:**

**Authentication Form:**
```
[Email/Password fields]

────────── OR ──────────

[Social login buttons]
```

**Settings Panel:**
```
Profile Settings
[Settings fields]

───────────────────────

Privacy Settings
[Settings fields]

───────────────────────

Notifications
[Settings fields]
```

**Search Filters:**
```
Status Filters
[Filter options]

───────────────────────

Date Range
[Date picker]
```

**Patent Application Steps:**
```
Step 1: Basic Information
[Content]

────── NEXT ──────

Step 2: Claims
[Content]

────── NEXT ──────

Step 3: Drawings
[Content]
```

**List with Section Headers:**
```
Recent Patents
────────────────────────
Patent A
Patent B
Patent C

Archived Patents
────────────────────────
Patent D
Patent E
```

## Behavior

### States

**Divider States:**
- **Default** - Standard appearance
- **Muted** - Lighter color for less emphasis
- **Bold** - Thicker or darker for stronger separation

**Text Divider:**
- Static, non-interactive
- Text remains centered regardless of line length

### Interactions

**Non-Interactive:**
Dividers are decorative elements with no hover, focus, or click states.

**Responsive Behavior:**
Dividers expand or contract to fill their container width. Text dividers keep text centered. On mobile, consider reducing width or changing orientation.

### Vertical Dividers

**Use Cases:**
- Between columns in a layout
- In toolbars or button groups
- Sidebars or navigation panels

**Specification:**
- **Width**: `1px`
- **Height**: Flexible (fill container or fixed)
- **Orientation**: Vertical (90° rotation)
- **Margin**: Horizontal spacing around divider

