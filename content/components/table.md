---
title: Table
description: "Documentation for Table component"
---

## Description

Tables display structured data in rows and columns, transforming complex datasets into scannable, sortable information. From patent lists to user directories, tables organize data with clarity—making large amounts of information digestible and actionable.

## Anatomy

1. **Table Header** - Column titles and sort controls
2. **Table Row** - Individual data records
3. **Table Cell** - Individual data points
4. **Selection Checkbox** - Row selection control (optional)
5. **Row Actions** - Action buttons or menu (optional)
6. **Pagination** - Navigation between pages (optional)
7. **Filters** - Data filtering controls (optional)
8. **Search** - Quick search input (optional)

## Specification

**Table Container:**
- **Width**: Full width of container
- **Border**: `1px solid` `--bg-fill-light`
- **Border Radius**: `radius-medium`
- **Background**: `--bg-surface-white`
- **Overflow**: Horizontal scroll on small screens

**Table Header:**
- **Height**: `48px`
- **Padding**: `spacing-3`
- **Background**: `--bg-fill-lighter`
- **Border Bottom**: `1px solid` `--bg-fill-light` (bottom only)
- **Font Weight**: `font-weight-semibold`
- **Font Size**: `text-base`
- **Text Transform**: None

**Table Row:**
- **Height**: `64px` (default)
- **Padding**: `spacing-4` `spacing-3`
- **Border Bottom**: `1px solid` `--bg-fill-light` (bottom only)
- **Hover**: `--bg-fill-lighter`
- **Selected**: `#EDF1FF`

**Table Cell:**
- **Padding**: `spacing-4` `spacing-3` (inherited from row)
- **Gap**: `spacing-3` (between cell content)
- **Font Size**: `text-base`
- **Vertical Align**: Middle
- **Text Overflow**: Ellipsis

**Selection Checkbox:**
- **Size**: `16px`
- **Position**: First column
- **Width**: `48px` (column)

**Row Actions:**
- **Position**: Last column (or dropdown)
- **Buttons**: Icon buttons or menu
- **Width**: Auto or fixed

**Sort Controls:**
- **Icon**: ▲▼ arrows
- **Position**: Header cells
- **Clickable**: Entire header cell
- **Active**: Blue color for sorted column

**Sizes:**
- **Compact**: `40px` row height
- **Default**: `56px` row height
- **Comfortable**: `72px` row height

## Do

- Use tables for structured data with 3 or more columns
- Write clear, descriptive column headers
- Enable sorting for key columns
- Provide search and filters for large datasets
- Show loading and empty states
- Use pagination for datasets with 50+ rows
- Make row actions easily accessible
- Support row selection when users need bulk actions
- Align text and numbers appropriately

## Don't

- Use tables for simple lists—use the List component instead
- Make tables too wide without considering mobile experience
- Forget responsive behavior for smaller screens
- Hide important actions in hard-to-reach places
- Skip loading and empty states
- Write unclear column headers
- Pack too much data into individual cells
- Forget keyboard navigation support

## Uses

**Primary Use Cases:**

1. **Data Lists** - Patent applications, user lists
2. **Reports** - Analytics, financial data
3. **Admin Panels** - Manage records
4. **Search Results** - Structured search results
5. **Dashboards** - Tabular data display
6. **Comparisons** - Compare items side-by-side
7. **Inventory** - Product or item lists
8. **Logs** - Activity or audit logs

**Example Scenarios:**

**Basic Table:**
```
┌──────────────────────────────────────────────────┐
│ ☐ │ Application # │ Status  │ Filed      │ ... │
├──────────────────────────────────────────────────┤
│ ☐ │ US2024-12345  │ Filed   │ 2024-01-15 │ ⋮   │
│ ☐ │ US2024-12346  │ Review  │ 2024-01-20 │ ⋮   │
│ ☐ │ US2024-12347  │ Filed   │ 2024-02-01 │ ⋮   │
└──────────────────────────────────────────────────┘
```

**With Sorting:**
```
│ Name ▼│ Status │ Date ▲│
```

## Formatting Standards

### Text Alignment

- **Text columns:** Left-aligned
- **Number columns:** Right-aligned
- **Dates:** Left-aligned (unless sorting numerically)

### Missing Values

**Use an en dash (–) not a hyphen or "N/A":**
- Missing value: –

### Numbers

- Use commas for thousands: `1,000` not `1000`
- Use tabular figures (monospaced numbers) for proper alignment

## When NOT to Use

### Use Alternatives Instead When

**Use Card Grid for:**
- Visual content like images and icons
- Less than 3 columns of data
- Content that doesn't need sorting or filtering
- More than 5 columns on mobile

**Use List for:**
- Simple single-column data
- Items that don't need cross-column comparison
- Sequential information

**Mobile considerations:**
- Tables with more than 4 columns struggle on mobile
- Consider alternative views like stacked cards or accordions
- Or allow horizontal scroll with a sticky first column

## Behavior

**Sorting:**
- Click column header to sort
- First click: Ascending
- Second click: Descending
- Third click: Clear sort (optional)
- Icon shows sort direction
- Multi-column sort (optional)

**Selection:**
- Click checkbox to select row
- Click header checkbox to select all
- Shift-click for range selection
- Shows action bar when items selected

**Row Actions:**
- Hover shows action buttons
- Click ⋮ for more actions
- Context menu on right-click (optional)

**Responsive:**
- Horizontal scroll on small screens
- Card view alternative on mobile
- Sticky headers (optional)
- Sticky first column (optional)
