---
title: Tag
description: "Documentation for Tag component"
---

# Tag

## Description

Tags are compact labels that categorize and organize content using keywords. Think of them as sticky notes on files—they help users instantly spot categories, statuses, or properties. Perfect for filters, metadata, and visual content organization.

## Anatomy

1. **Tag Container** - Background shape containing content
2. **Tag Text** - Label or keyword
3. **Icon** - Visual indicator (optional)
4. **Close Button** - Remove tag control (optional)
5. **Border** - Outline for outlined variant (optional)

## Specification

**Tag Container:**
- **Height**: `32px` (default)
- **Padding**: `spacing-1` `spacing-2`
- **Border Radius**: `radius-small`
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-normal`
- **Line Height**: `20px`
- **Gap**: `spacing-2` between elements

**Default Tag:**
- **Background**: `--bg-fill-lighter`
- **Border**: `1px solid` `--border-lighter`
- **Text Color**: `--text-light`
- **Hover**: Slightly darker background

**Colored Tags:**
- **Blue**: Background `#F0F9FF`, Border `#7CD4FD`, Text `--bg-fill-brand-normal`
- **Green**: Background `#ECFDF3`, Border `#A9EFC5`, Text `--bg-fill-success-normal`
- **Red**: Background `#FEF3F2`, Border `#FECDCA`, Text `--bg-fill-danger-normal`
- **Orange**: Background `#FFF7E6`, Border `#FFD591`, Text `--bg-fill-warning-normal`
- **Purple**: Background `#F9F0FF`, Border `#D3ADF7`, Text `#722ED1`
- **Cyan**: Background `#E6FFFB`, Border `#87E8DE`, Text `#13C2C2`

**Close Button:**
- **Size**: `12px`
- **Color**: `--text-lighter`
- **Hover**: `--text-light`
- **Position**: Trailing (after text)
- **Gap**: `spacing-1` before button

**Icon:**
- **Size**: `12px`
- **Position**: Leading (before text)
- **Gap**: `spacing-1` after icon

**Variants:**
- **Default**: Background + border
- **Filled**: Solid background, no border
- **Outlined**: Transparent background, colored border
- **Borderless**: Background only, no border

**Sizes:**
- **Small**: `24px` height, `spacing-1` padding, `text-xs` font
- **Default**: `32px` height, `spacing-2` padding, `text-base` font

**States:**
- **Default**: Standard appearance
- **Hover**: Darker background (for closeable/clickable tags)
- **Focus**: Outline ring
- **Disabled**: Light gray, 40% opacity

## Do

- Use tags for categorization and labeling
- Keep text short (1-3 words max)
- Use consistent colors to convey meaning
- Add × buttons to removable tags
- Group related tags together
- Match colors to status meanings
- Enable keyboard interaction for closeable tags

## Don't

- Use too many colors—stick to a consistent palette
- Make tags too long—brevity is key
- Use tags for primary actions (that's what buttons are for)
- Overload interfaces with tags
- Forget disabled states
- Rely on tags alone for critical information
- Make non-interactive tags look clickable

## Uses

**Primary Use Cases:**

1. **Categories** - Product types, content categories
2. **Status Labels** - Active, Pending, Completed
3. **Filters** - Selected filter criteria
4. **User Input** - Email chips, skill tags
5. **Metadata** - File types, versions, dates
6. **Labels** - Priority, difficulty, type
7. **Selections** - Multi-select indicators
8. **Technology Stack** - Languages, frameworks

## Behavior

**Static Tags:**
- Display information
- No interaction
- Visual indicators only

**Closeable Tags:**
1. User clicks × button
2. Tag animates out (fade + shrink)
3. Tag removed from view
4. Change event fires
5. Surrounding tags reflow

**Clickable Tags:**
1. User clicks tag
2. Hover state shows interactivity
3. Click triggers action (filter, navigate, etc.)
4. Optional: Selected state appears

**Animation:**
- Fade in: 200ms
- Fade out: 150ms
- Remove: Shrink + fade
- Reflow: Smooth transition

### Focus

**Keyboard Focus:**
- Focus visible on × button
- Tab navigates between tags
- Focus ring indicates current tag

### Dismissing

**Close Button:**
- Click × to remove tag
- Keyboard: Focus + Enter/Space
- Fade out animation
- Triggers onChange event
