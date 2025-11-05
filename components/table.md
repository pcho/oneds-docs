## Description

Table displays structured data in rows and columns, transforming complex datasets into scannable, sortable, and actionable information. From patent lists to user directories, tables organize data with clarity and purpose—making large amounts of information digestible and interactive.

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
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `8px`
- **Background**: White (`#FFFFFF`)
- **Overflow**: Horizontal scroll on small screens

**Table Header:**
- **Height**: `48px`
- **Padding**: `12px`
- **Background**: `#F4F6F8`
- **Border Bottom**: `1px solid #ECEEF0` (bottom only)
- **Font Weight**: 600 (semi-bold)
- **Font Size**: `14px`
- **Text Transform**: None

**Table Row:**
- **Height**: `64px` (default)
- **Padding**: `16px 12px`
- **Border Bottom**: `1px solid #ECEEF0` (bottom only)
- **Hover**: `#F9FAFB` (needs verification from Figma states)
- **Selected**: `#EDF1FF` (needs verification from Figma states)

**Table Cell:**
- **Padding**: `16px 12px` (inherited from row)
- **Gap**: `12px` (between cell content)
- **Font Size**: `14px`
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

- Use for displaying structured data (3+ columns)
- Include clear column headers
- Enable sorting for key columns
- Provide search and filters for large datasets
- Show loading states
- Handle empty states gracefully
- Use pagination for 50+ rows
- Make actions easily accessible
- Support row selection when needed

## Don't

- Don't use for simple lists (use List component)
- Don't make tables too wide (horizontal scroll on mobile)
- Don't forget responsive behavior
- Don't hide important actions
- Don't forget loading and empty states
- Don't make column headers unclear
- Don't pack too much data per cell
- Don't forget keyboard navigation

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

## CRITICAL Requirements

### `<th>` Elements MUST Have `scope` Attribute

**REQUIRED on EVERY table header cell:**

```html
<table>
  <thead>
    <tr>
      <th scope="col">Application ID</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
</table>
```

**Without `scope`:** Screen readers cannot associate headers with data cells. This is a WCAG Level A failure.

**Values:**
- `scope="col"` - Column header
- `scope="row"` - Row header

### `<caption>` Element REQUIRED

**Every table MUST have a `<caption>` as first child:**

```html
<table>
  <caption>Patent Applications (January 2024)</caption>
  <thead>...</thead>
</table>
```

**Never use heading outside table:**
```html
❌ <h3>Patent Applications</h3>
   <table>...</table>

✅ <table>
     <caption>Patent Applications</caption>
     ...
   </table>
```

### NEVER Use Headings Inside `<th>`

**❌ Incorrect:**
```html
<th scope="col">
  <h4>Application ID</h4>
</th>
```

**✅ Correct:**
```html
<th scope="col">Application ID</th>
```

**Why:** Creates semantic conflict, disrupts heading hierarchy.

**See:** [Semantic HTML Requirements](/docs/patterns/semantic-html-requirements.md) for complete details.

## Formatting Standards

### Text Alignment

- **Text columns:** Left-aligned
- **Number columns:** Right-aligned
- **Dates:** Left-aligned (unless sorting as numbers)

### Missing Values

**Use en dash (–) not hyphen or "N/A":**

```html
<td>–</td>  <!-- Missing value -->
```

### Numbers

- Use commas for thousands: `1,000` not `1000`
- Use tabular figures (monospaced numbers) for alignment

```css
.table-number {
  font-variant-numeric: tabular-nums;
}
```

## When NOT to Use

### Use Alternatives Instead When:

**Use Card Grid for:**
- Visual content (images, icons)
- Less than 3 columns
- Content doesn't need sorting/filtering
- More than 5 columns (consider mobile experience)

**Use List for:**
- Simple single-column data
- Items without comparing across columns
- Sequential information

**Mobile considerations:**
- Tables with >4 columns are difficult on mobile
- Consider alternative view (stacked cards, accordion)
- Or allow horizontal scroll with sticky first column

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

## Accessibility

**Semantic HTML:**
```html
<table>
  <thead>
    <tr>
      <th scope="col">
        <input type="checkbox" aria-label="Select all">
      </th>
      <th scope="col">
        <button aria-sort="ascending">
          Application #
          <span aria-hidden="true">▲</span>
        </button>
      </th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input type="checkbox" aria-label="Select row">
      </td>
      <td>US2024-12345</td>
      <td>Filed</td>
    </tr>
  </tbody>
</table>
```

**ARIA Attributes:**
- `role="table"` if not using `<table>`
- `aria-sort` on sortable headers
- `aria-label` for checkboxes
- `aria-describedby` for complex cells
- `aria-rowcount` for virtual scrolling

**Keyboard Navigation:**
- `Tab` - Navigate between interactive elements
- `Arrow keys` - Navigate cells
- `Space` - Toggle checkbox
- `Enter` - Activate button/link
- `Home/End` - First/last column

**Screen Reader Support:**
- Announce table structure
- Read column headers with data
- Announce row count
- Read sort state
- Announce selection changes

**Focus Management:**
- Clear focus indicators
- Logical tab order
- Focus on interactive elements
- Skip to content links

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Header distinguishable
- Hover states visible
- Selected rows clear
- Don't rely on color alone