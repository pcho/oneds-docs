---
title: Pagination
description: "Documentation for Pagination component"
---

## Description

Pagination breaks large data sets into digestible chunks, letting users navigate through pages without overwhelming their screen or bandwidth. Whether search results, product listings, or data tables, it gives users control over exploring large amounts of information—one page at a time.

## Anatomy

1. **Previous Button** - Navigate to previous page
2. **Page Numbers** - Clickable page indicators
3. **Current Page** - Highlighted active page
4. **Ellipsis** - Indicates skipped pages
5. **Next Button** - Navigate to next page
6. **Page Size Selector** - Items per page dropdown (optional)
7. **Total Count** - Total items or pages display (optional)
8. **Quick Jumper** - Jump to specific page input (optional)

## Specification

**Default Pagination:**
- **Height**: `40px`
- **Gap**: `spacing-2` between elements
- **Layout**: Horizontal row, center-aligned
- **Font Size**: `text-base`

**Page Number Buttons:**
- **Size**: `32px × 32px`
- **Border Radius**: `radius-small`
- **Border**: `1px solid` `--border-lighter`
- **Background**: `--bg-surface-white`
- **Hover Background**: `--bg-fill-lighter`
- **Active Background**: `--bg-fill-brand-normal`
- **Active Text**: `--bg-surface-white`
- **Font Weight**: `font-weight-normal`, `font-weight-semibold` (active)

**Navigation Arrows:**
- **Size**: `32px × 32px`
- **Border**: `1px solid` `--border-lighter`
- **Border Radius**: `radius-small`
- **Icons**: Left arrow (←) and right arrow (→)
- **Disabled Color**: `--border-lighter`
- **Disabled Background**: `--bg-fill-lighter`

**Ellipsis:**
- **Symbol**: `•••` or `...`
- **Color**: `--text-lighter`
- **Not clickable**

**Variants:**
- **Default** - Full pagination with numbers
- **Simple** - Previous/Next buttons only
- **Mini** - Smaller size for compact spaces
- **With Page Size** - Includes items-per-page selector
- **With Quick Jumper** - Includes jump-to-page input

## Do

- Show current page clearly
- Disable Previous on first page
- Disable Next on last page
- Display total page count or items
- Provide page size options when appropriate
- Show reasonable number of buttons (5-7)
- Use ellipsis for large counts
- Make controls large enough to click

## Don't

- Hide total page count
- Show too many page numbers (clutters UI)
- Forget to disable at boundaries
- Make buttons too small
- Forget loading states during navigation
- Reset scroll position unexpectedly
- Use for infinite scroll content
- Forget keyboard navigation

## Uses

**Primary Use Cases:**

1. **Search Results** - Patent search listings
2. **Data Tables** - Large data sets
3. **Product Listings** - E-commerce catalogs
4. **Blog Posts** - Article archives
5. **User Lists** - Directory pages
6. **Gallery** - Image collections
7. **Reports** - Multi-page documents
8. **Activity Logs** - Historical records

**Example Scenarios:**

**Simple Pagination:**
```
← Previous  1  2  [3]  4  5  Next →
```

**With Ellipsis:**
```
←  1  2  [3]  4  5  •••  20  →
```

**With Page Size:**
```
← Previous  1  [2]  3  •••  10  Next →

Show: [25 ▼] per page
```

**With Quick Jumper:**
```
←  1  [2]  3  •••  10  →

Jump to: [  ] Go
```

**With Total Count:**
```
←  1  [2]  3  4  5  →    Showing 26-50 of 247 items
```

## Behavior

### Page Navigation

**Clicking Page Number:**
1. User clicks page number
2. Current page unhighlights
3. New page highlights
4. Content loads/updates
5. Scroll to top (optional)
6. URL updates with page parameter

**Previous/Next Buttons:**
1. User clicks Previous or Next
2. Current page increments/decrements
3. Page numbers update if needed
4. Content refreshes
5. Buttons disable at boundaries

**Keyboard Navigation:**
- `Tab` - Focus pagination controls
- `Arrow Left` - Previous page
- `Arrow Right` - Next page
- `Enter` - Activate focused page
- `Home` - First page
- `End` - Last page

### States

**Page Button States:**
- **Default** - White background, gray border
- **Hover** - Light gray background
- **Active/Current** - Primary blue background, white text
- **Focus** - Outline indicator
- **Disabled** - Light gray, not clickable

**Navigation Button States:**
- **Default** - Enabled, clickable
- **Hover** - Background highlight
- **Disabled** - Grayed out at first/last page
- **Loading** - Spinner or disabled state

### Page Size Selector

**Dropdown:**
1. User clicks dropdown
2. Options appear: 10, 25, 50, 100
3. User selects size
4. Content reloads with new size
5. Reset to page 1

### Quick Jumper

**Direct Page Entry:**
1. User clicks input field
2. Types page number
3. Presses Enter or clicks "Go"
4. Validates page number (1 to max)
5. Navigates to page
6. Shows error if invalid

### Loading States

**During Navigation:**
- Show loading spinner on content
- Disable pagination controls
- Maintain current page highlight
- Prevent duplicate requests

### URL Management

- Update URL with page parameter (`?page=3`)
- Enable browser back/forward
- Support deep linking to pages
- Preserve other query parameters
