---
title: Filter Button
description: "Documentation for Filter Button component"
---

## Description

Show active filters clearly and make them easy to modify. Filter Button is a compact, pill-shaped chip that combines close icons, filter criteria, operators, and dropdown indicators in a scannable interface. Perfect for search interfaces, data tables, or anywhere users need to see and adjust filters at a glance.

Your filter chip—showing exactly what's filtered, making changes easy.

## Anatomy

### Filter Button (Full)
1. **Close Icon** - Remove filter (circle-xmark, solid, .75x size)
2. **Content Container** - Filter name and value
3. **Dropdown Icon** - Expand/change filter (angle-down, line, .75x size)

### Filter Button - Dropdown (Simplified)
1. **Content Container** - Filter display text
2. **Dropdown Icon** - Expand to modify

### Filter Button - Operator
1. **Operator Icon** - Shows filter logic (equals, greater-than, etc.)
2. **Dropdown Icon** - Change operator

## Specification

### Filter Button (Full)

**Dimensions:**
- **Height**: `32px` (fixed)
- **Width**: Hug content (auto)
- **Padding**: `spacing-1.5`
- **Border Radius**: `radius-small`

**Layout:**
- **Mode**: Horizontal row
- **Justify**: Center
- **Align**: Center
- **Sizing**: Hug horizontal, fixed vertical

**Colors:**
- **Background**: `--bg-fill-lighter`
- **Border**: `--border-lighter`

**Icons:**
- **Size**: `15×15px` (.75x)
- **Close Icon**: Solid variant, circle-xmark
- **Dropdown Icon**: Line variant, angle-down

**Content Container:**
- **Layout**: Horizontal row, center-aligned
- **Gap**: `spacing-1` between elements
- **Sizing**: Hug content

### Filter Button - Dropdown

**Same dimensions and colors as full version**

**Difference:**
- No close icon (only dropdown)
- Used for primary filter selection

### Filter Button - Operator

**Dimensions:**
- **Padding**: `spacing-1`
- **Gap**: `spacing-1.5` between icons
- **Border Radius**: `radius-small`

**Colors:**
- **Background**: `--bg-fill-light`
- **Border**: `--border-lighter`

**Icons:**
- **Operator Icon**: Shows comparison type (=, ≠, <, >, etc.)
- **Dropdown Icon**: Change operator

**Layout:**
- **Mode**: Horizontal row
- **Align**: Center
- **Gap**: `spacing-1.5`
- **Sizing**: Hug content

## Do

- Show active filters clearly with filter buttons
- Group related filters together visually
- Provide quick removal with X icons
- Allow editing by clicking the filter
- Show operators visually (=, <, >, etc.) when relevant
- Keep filter text concise and scannable
- Use consistent styling across all filters

## Don't

- Hide remove options—users need to clear filters easily
- Make filter buttons too wide—keep them compact
- Use vague text like "Filter 1"—be specific ("Status: Approved")
- Skip hover and focus states
- Stack too many filters without grouping or wrapping
- Use filter buttons for primary actions—they're for filter management only

## Uses

**Primary Use Cases:**

1. **Search Results** - Show active search filters
2. **Data Tables** - Display column filters
3. **Product Catalogs** - Show applied product filters
4. **Date Ranges** - "Date: Last 30 days"
5. **Status Filters** - "Status: Approved"
6. **Category Filters** - "Category: Patent > Utility"
7. **Comparison Filters** - "Priority = High"

**Example Scenarios:**

**Patent Search Interface:**
```
Active Filters:
[×] Status: Approved [▼]  [×] Year: 2023 [▼]  [×] Technology: AI [▼]  [=] [▼] Priority: High
```

**Data Table Filters:**
```
[×] Country: USA [▼]  [×] Date Range: Last Quarter [▼]  [≥] [▼] Applications: 100
```

**E-commerce Product Filters:**
```
[×] Price: $50-$100 [▼]  [×] Color: Blue [▼]  [×] Size: Large [▼]
```

**Operator Examples:**
- `[=]` Equals
- `[≠]` Not equals
- `[<]` Less than
- `[>]` Greater than
- `[≤]` Less than or equal
- `[≥]` Greater than or equal
- `[⊇]` Contains
- `[⊅]` Does not contain

## Behavior

### States

**Filter Button States:**
- **Default** - Standard appearance
- **Hover** - Slightly darker background or border
- **Active** - Currently selected/being edited
- **Focus** - Focus ring visible
- **Disabled** - Grayed out, non-interactive (rare)

**Icon States:**
- **Close Icon Hover** - Emphasize on hover
- **Dropdown Icon Hover** - Emphasize on hover
- **Operator Icon** - Shows current comparison type

### Interactions

**Remove:**
Hover over the close icon (it emphasizes), click it, the filter fades out, and results update.

**Edit:**
Click the filter button (not the close icon) to open a dropdown. Modify the value, select, and watch the button text update while results refresh.

**Change Operator:**
Click the operator icon to see options. Select a new one, the icon updates, and results refresh.

**Keyboard:**
Tab through filters. Enter/Space opens edit dropdowns. Delete/Backspace removes filters. Escape closes dropdowns.

### Animations

**Add:**
Fade in and scale from 0.9 to 1.0 over 200ms with ease-out.

**Remove:**
Fade out and scale to 0.9 over 200ms with ease-in.

**Hover:**
Subtle background color transition in 150ms.

**Update:**
Pulse or flash for 300ms to indicate the change.

### Grouping

Group related filters with labels and dividers. Allow clearing entire groups and provide a "Clear All Filters" option.

**Responsive:**
Wrap to multiple lines on narrow screens, maintain readability at all sizes, and stack vertically on very small screens.

