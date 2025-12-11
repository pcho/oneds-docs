---
title: Table
description: "Documentation for Table component"
---

# Table Behaviors

Tables help users quickly scan records, find what they need, compare data, and take action on selected items. Here's how to design effective, user-friendly tables.

## Design Principles

### 1. Set a Clear Goal for Your Table

Most tables are for quick scanning to access detailed content. Show only the key info that sets items apart—enough to help users identify and select the right record.

**Good approach:**
- Display essential info (name, ID, status, date)
- Keep columns focused on comparison and selection
- Link to detailed views for more information

**When users need deep comparison:**
- Let them download a report with all fields
- Provide an "Add columns" feature to customize the view
- Offer export functionality (CSV, Excel)

**Example:**
```
Patent Applications Table
┌─────────────────────────────────────────────────────────────┐
│ ☐ │ Application # │ Title          │ Status  │ Filed      │
├─────────────────────────────────────────────────────────────┤
│ ☐ │ US2024-12345  │ AI Patent      │ Filed   │ 2024-01-15 │
│ ☐ │ US2024-12346  │ IoT Device     │ Review  │ 2024-01-20 │
└─────────────────────────────────────────────────────────────┘
```

### 2. Keep the Number of Columns Simple and Clear

Keep columns to essentials—**ideally no more than 6** (excluding actions and selection). Too many columns overwhelm users and make scanning difficult.

**Guidelines:**
- **3-4 columns**: Ideal for most use cases
- **5-6 columns**: Acceptable for complex data
- **7+ columns**: Consider breaking into multiple views or card layout

**Group related columns:**
- Combine related data points where possible
- Use nested or expandable rows for details
- Consider using pills or tags for multi-value fields

**Example of column grouping:**
```
Instead of: Name | First Name | Last Name | Email
Use: Name | Contact
```

### 3. First Column: The Most Important

The first column is where users begin scanning. It should contain the most important identifying information—the "anchor" that helps users recognize each row.

**Best practices:**
- Include key identifiers (names, titles, descriptions)
- Avoid overwhelming technical IDs
- Use clear, user-friendly descriptions
- Make it visually distinct (bold text optional)
- Keep it sticky on horizontal scroll (optional)

**Good examples:**
```
✓ Patent Title | Application # | Status | Date
✓ User Name | Email | Role | Last Active
✓ Product Name | SKU | Stock | Price
```

**Avoid:**
```
✗ ID | Patent Title | Status | Date
  (IDs are not memorable or meaningful to users)

✗ 12345 | AI-powered device | Filed | 2024-01-15
  (Leading with ID makes scanning difficult)
```

### 4. Sorting: Choose the Right Default

The first column isn't always the best choice for default sorting. Consider what makes most sense for your users' primary task.

**Common sorting strategies:**
- **Alphabetical**: Names, titles (A-Z)
- **Chronological**: Dates, timestamps (newest first or oldest first)
- **Status-based**: Priority, workflow stage
- **Numerical**: Prices, quantities, scores

**Example scenarios:**
```
Patent Applications → Sort by "Filed Date" (newest first)
User Directory → Sort by "Name" (A-Z)
Orders → Sort by "Order Date" (newest first)
Products → Sort by "Name" or "Stock" depending on context
```

**Provide clear sort indicators:**
- Show arrow direction (▲ ascending, ▼ descending)
- Highlight sorted column
- Allow users to change sort easily

### 5. Use Clear, Consistent Labels Throughout

Column headers must be clear, descriptive, and use simple, consistent terms across the application.

**Guidelines:**
- **Use clear nouns**: "Application Number" not "App #"
- **Be consistent**: Don't mix "Email" and "Email Address"
- **Keep it short**: 1-2 words when possible
- **Use sentence case**: "Application number" not "APPLICATION NUMBER"
- **Add tooltips for clarity**: Hover hints for abbreviations or complex terms

**Examples:**
```
Good Labels:
- Application # (with tooltip: "Unique application identifier")
- Filed (with tooltip: "Date application was filed")
- Status
- Assignee

Poor Labels:
- App # (ambiguous)
- DT (unclear abbreviation)
- Current Status (redundant)
- Person Assigned (too verbose)
```

### 6. Prioritize Readability with Proper Alignment

Use your table's goal to establish a clear visual hierarchy and improve scannability through proper alignment.

**Alignment rules:**
- **Left-align**: Text, names, descriptions, status labels
- **Right-align**: Numbers, currencies, percentages, quantities
- **Center-align**: Icons, avatars, checkboxes, short status indicators

**Why alignment matters:**
- Left-aligned text is easier to scan
- Right-aligned numbers make comparison easier
- Consistent alignment creates visual structure

**Example:**
```
┌───────────────────────────────────────────────────────┐
│ Patent Title          │  Status  │  Filed      │  Fee │
├───────────────────────────────────────────────────────┤
│ AI-powered device     │  Filed   │  2024-01-15 │ $450 │
│ IoT sensor            │  Review  │  2024-01-20 │  $85 │
│ Machine learning algo │  Pending │  2024-02-01 │ $320 │
└───────────────────────────────────────────────────────┘
   ↑ Left-aligned         ↑ Center   ↑ Left       ↑ Right
```

## Interactive Behaviors

### Sorting

**Click to sort:**
1. User clicks column header
2. First click: Sort ascending (A-Z, 0-9, oldest-newest)
3. Second click: Sort descending (Z-A, 9-0, newest-oldest)
4. Third click: Return to default sort (optional)

**Visual feedback:**
- Show sort indicator (▲ ▼)
- Highlight sorted column header
- Update sort direction on click
- Smooth animation for row reordering

**Multi-column sorting (advanced):**
- Hold Shift + click for secondary sort
- Show sort priority numbers
- Clear all sorts option available

### Selection

**Individual selection:**
- Click checkbox to select single row
- Selected row highlights (light blue background)
- Action bar appears showing bulk actions
- Selection persists across pages (optional)

**Select all:**
- Click header checkbox to select all visible rows
- Clear indicator shows "X items selected"
- Option to "Select all X items across all pages"

**Range selection:**
- Click first checkbox
- Shift + click last checkbox
- All rows in between are selected
- Keyboard navigation: Shift + Arrow keys

**Bulk actions:**
```
When items are selected:
┌────────────────────────────────────────────────┐
│ 3 items selected [Delete] [Export] [Cancel]   │
└────────────────────────────────────────────────┘
```

### Row Actions

**Hover actions:**
- Hover over row reveals action buttons
- Actions appear on right side of row
- Common actions: Edit, Delete, View, More (⋮)

**Always visible actions:**
- For critical actions, keep visible always
- Reduces discovery time
- Useful for single-action tables

**Action menu:**
```
Row hover:
┌─────────────────────────────────────────────┐
│ Patent Title | Status | Date | [Edit] [⋮] │
└─────────────────────────────────────────────┘

Click ⋮ menu:
┌─────────────┐
│ View        │
│ Edit        │
│ Duplicate   │
│ ─────────── │
│ Delete      │
└─────────────┘
```

### Expandable Rows

**Use for additional details:**
- Click row or expand icon to reveal more
- Nested table or details panel appears
- Click again to collapse
- Only one row expanded at a time (optional)

**Example:**
```
┌──────────────────────────────────────┐
│ ▶ Patent Title    | Status | Date    │
└──────────────────────────────────────┘

Click to expand:
┌──────────────────────────────────────┐
│ ▼ Patent Title    | Status | Date    │
├──────────────────────────────────────┤
│   Description: AI-powered device...  │
│   Inventors: John Doe, Jane Smith    │
│   Classifications: H04L, G06F        │
└──────────────────────────────────────┘
```

### Pagination

**Display counts:**
- Show total items: "Showing 1-10 of 245"
- Current page indicator
- Items per page selector (10, 25, 50, 100)

**Navigation:**
- Previous/Next buttons
- Jump to page number
- First/Last page shortcuts

**Best practices:**
- Default: 25-50 items per page
- Remember user's preference
- Use infinite scroll for feeds (alternative)

### Filtering and Search

**Quick search:**
- Search box above table
- Searches across all visible columns
- Real-time or on-submit
- Clear search button

**Column filters:**
- Click filter icon in column header
- Filter options specific to column type
  - Text: Contains, equals, starts with
  - Number: Equals, greater than, less than
  - Date: Date range picker
  - Status: Multi-select checkboxes

**Active filters:**
```
┌────────────────────────────────────────────┐
│ Filters: [Status: Filed ×] [Date: 2024 ×] │
│          [Clear all filters]                │
└────────────────────────────────────────────┘
```

## Responsive Behavior

### Desktop (>1024px)
- Show all columns
- Full functionality
- Sticky headers (optional)
- Horizontal scroll if needed

### Tablet (768px - 1024px)
- Hide less important columns
- Provide column visibility toggle
- Maintain core functionality
- Consider horizontal scroll

### Mobile (<768px)
- Convert to card view (recommended)
- Show key fields only
- Tap to expand for details
- Stack filters in drawer
- Full-width action buttons

**Mobile card layout example:**
```
┌─────────────────────────┐
│ AI-powered device       │
│ US2024-12345            │
│ ─────────────────────── │
│ Status: Filed           │
│ Filed: 2024-01-15       │
│                         │
│ [View] [Edit]           │
└─────────────────────────┘
```

## Loading and Empty States

### Loading State
- Show skeleton rows while loading
- Match table structure
- Maintain layout to prevent shift
- Display progress indicator

### Empty State
```
┌────────────────────────────────────┐
│                                    │
│        📄                          │
│                                    │
│   No patents found                 │
│                                    │
│   Create your first patent         │
│   application to get started.      │
│                                    │
│   [+ Create Patent]                │
│                                    │
└────────────────────────────────────┘
```

### No Results State
```
┌────────────────────────────────────┐
│                                    │
│        🔍                          │
│                                    │
│   No results found                 │
│                                    │
│   Try adjusting your filters       │
│   or search terms.                 │
│                                    │
│   [Clear filters]                  │
│                                    │
└────────────────────────────────────┘
```

## Accessibility

### Keyboard Navigation
- Tab through interactive elements
- Arrow keys to navigate cells (optional)
- Enter/Space to activate buttons
- Support all actions via keyboard

### Screen Readers
- Announce table structure and row count
- Read column headers with data
- Announce sort state and direction
- Read selection state
- Describe bulk actions available

## Performance

### Large Datasets
- Use virtual scrolling for 1000+ rows
- Implement server-side pagination
- Lazy load row details
- Debounce search and filter

### Optimization
- Render only visible rows
- Cache sort and filter results
- Minimize re-renders
- Use row virtualization libraries

## Related Patterns

Tables work best when combined with other patterns:

- **[Filtering](./filtering.md)** - Advanced filtering for table data
- **[Action Bar](./action-bar.md)** - Bulk operations on selected rows
- **[Common Actions](./common.md)** - Delete, edit, and other row actions
- **[Global Search](./global-search.md)** - System-wide search that may display results in tables
- **[Modal](./modal.md)** - Edit forms and detail views accessed from table rows
- **[Drawer](./drawer.md)** - Side panel for filters or row details
- **[Contextual Views](../layouts/contextual-views.md)** - Tables in context of parent entities

## Common Patterns

### Table + Filtering
Combine tables with filtering drawer/panel for advanced data exploration:
```
┌────────────────────────────────────────────┐
│ [🔽] Filters (2)    | 245 results         │
├────────────────────────────────────────────┤
│ Status: Active [×]  Date: Last 30 days [×] │
├────────────────────────────────────────────┤
│ ☐ │ Title | Status | Date                 │
│ ─────────────────────────────────────────  │
│ ☐ │ ...   | ...    | ...                  │
└────────────────────────────────────────────┘
```
See **[Filtering](./filtering.md)** for complete pattern details.

### Table + Bulk Actions
When users select rows, action bar appears for bulk operations:
```
Selection inactive:
┌────────────────────────────────────────────┐
│ Patents (245)              [+ Create]      │
├────────────────────────────────────────────┤
│ ☐ │ Title | Status | Date                 │
└────────────────────────────────────────────┘

Selection active:
┌────────────────────────────────────────────┐
│ 5 items selected                           │
│ [Cancel] [Export] [Assign] [Delete]       │
├────────────────────────────────────────────┤
│ ☑ │ Title | Status | Date                 │
└────────────────────────────────────────────┘
```
See **[Action Bar](./action-bar.md)** for complete pattern details.

### Table + Expandable Details
Show summary in row, expand for full details:
```
Collapsed:
┌────────────────────────────────────────────┐
│ ▶ │ Patent Title | Status | Date          │
└────────────────────────────────────────────┘

Expanded:
┌────────────────────────────────────────────┐
│ ▼ │ Patent Title | Status | Date          │
├────────────────────────────────────────────┤
│     Description: Full patent description   │
│     Inventors: John Doe, Jane Smith        │
│     Classifications: H04L, G06F, G06N      │
│     Documents: 5 files attached            │
│     [View Details] [Edit]                  │
└────────────────────────────────────────────┘
```

### Table + Inline Editing
Allow quick edits without modal:
```
┌────────────────────────────────────────────┐
│ Title          | Status      | Assignee    │
├────────────────────────────────────────────┤
│ Patent #12345  | [Filed ▼]   | John Doe    │
│                  ↑ Inline                   │
│                    dropdown                 │
└────────────────────────────────────────────┘
```

### Table + Contextual View
Tables shown within a parent context:
```
┌────────────────────────────────────────────┐
│ Home > Patent US2024-12345 > Documents     │
├────────────────────────────────────────────┤
│ Documents in US2024-12345 (8)              │
│                         [+ Add Document]   │
├────────────────────────────────────────────┤
│ ☐ │ Document Name | Type | Date           │
│ ─────────────────────────────────────────  │
│ ☐ │ Claims.pdf    | PDF  | Jan 15         │
│ ☐ │ Drawings.pdf  | PDF  | Jan 15         │
└────────────────────────────────────────────┘
```
See **[Contextual Views](../layouts/contextual-views.md)** for complete pattern details.

## Best Practices Summary

### Do:
- Keep columns to 6 or fewer (excluding selection/actions)
- Put most important info in first column
- Use proper alignment (left for text, right for numbers)
- Provide clear sort indicators
- Show item counts and pagination info
- Support keyboard navigation
- Design empty and loading states
- Make row actions easily discoverable
- Allow bulk operations for efficiency
- Maintain consistent column labels
- Optimize for large datasets

### Don't:
- Overwhelm with too many columns
- Lead with technical IDs
- Hide critical actions
- Forget mobile responsiveness
- Skip empty states
- Ignore accessibility
- Use inconsistent terminology
- Make sorting unclear
- Forget to show selection state
- Skip loading indicators

## Summary Checklist

- [ ] First column contains most important identifier
- [ ] Column count kept to 6 or fewer (excluding actions/selection)
- [ ] Clear, consistent column labels
- [ ] Proper text/number alignment
- [ ] Appropriate default sort chosen
- [ ] Sortable columns indicated
- [ ] Row actions easily accessible
- [ ] Selection and bulk actions work correctly
- [ ] Empty states designed
- [ ] Loading states implemented
- [ ] Mobile responsive design (card view for mobile)
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] Performance optimized for dataset size
- [ ] Pagination implemented
- [ ] Filter integration (if needed)
- [ ] Related patterns referenced correctly
