# Table Component Comparison

**Date:** November 5, 2025
**Component:** Table / Data Table
**Systems Compared:** Adobe Spectrum, GitLab Design, Nord Health Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/table.md`:

- Anatomy (8 elements)
- Specifications (sizing, spacing, states)
- Three size variants (compact, default, comfortable)
- Do's and Don'ts
- Primary use cases
- Behavior patterns (sorting, selection, row actions, responsive)
- Accessibility section with semantic HTML
- ARIA attributes
- Keyboard navigation (Tab, Arrow keys, Space, Enter, Home/End)
- Screen reader support
- Focus management

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** th scope Attribute Required (GitLab)

**What they have:**
> "`<th>` elements must have a defined `scope` attribute (e.g., `scope=\"col\"`)"

**What OneDS has:**
```html
<th scope="col">
  <button aria-sort="ascending">
    Application #
  </button>
</th>
```

**Gap:**
✅ We show `scope` in example
⚠️ Not explicitly stated as REQUIRED

**Worth considering:**
```markdown
**Table Headers (Required Attributes):**

**Scope Attribute is REQUIRED:**
- Every `<th>` must have `scope` attribute
- Tells screen readers how header relates to cells
- WCAG requirement for accessible tables

**Column Headers:**
```html
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Status</th>
    <th scope="col">Date</th>
  </tr>
</thead>
```

**Row Headers:**
```html
<tbody>
  <tr>
    <th scope="row">Patent #12345</th>
    <td>Pending</td>
    <td>2024-01-15</td>
  </tr>
</tbody>
```

**Why Required:**
- Screen readers announce: "Name, column header"
- Without scope: Just "Name" (no context)
- User can't tell if header is for row or column
- WCAG 1.3.1 failure without scope

**Column Groups:**
```html
<th scope="colgroup" colspan="2">Contact Information</th>
```

**Row Groups:**
```html
<th scope="rowgroup">2024 Q1</th>
```
```

---

### 2. Caption Element Required (GitLab + Nord Health)

**What they have:**
- **GitLab:** "`<caption>` must be an immediate child of `<table>` and provide a meaningful title"
- **Nord Health:** "it is up to the user of this component to make sure that the table markup they use is accessible"

**What OneDS has:**
- No mention of `<caption>` element

**Gap:**
❌ No guidance on table captions
❌ Missing accessibility requirement

**Worth considering:**
```markdown
**Table Caption (Accessibility Requirement):**

**Caption Provides Table Title:**
- `<caption>` must be first child of `<table>`
- Provides accessible name for table
- Screen readers announce caption before table content

**Implementation:**
```html
<table>
  <caption>Patent Applications (January 2024)</caption>
  <thead>
    <tr>
      <th scope="col">Application #</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <!-- rows -->
  </tbody>
</table>
```

**Screen Reader Announces:**
"Table: Patent Applications January 2024, 3 columns, 10 rows"

**Styling Caption:**
```css
caption {
  caption-side: top; /* or bottom */
  text-align: left;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Visually hidden but accessible */
.sr-only-caption {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

**When Caption Visually Hidden:**
- Visual heading above table serves purpose
- Still include `<caption>` for screen readers
- Use `.sr-only-caption` class

**Without Caption:**
- ❌ Screen readers can't identify table purpose
- ❌ WCAG 2.4.6 failure (no heading/label)
```

---

### 3. No Headings in th Elements (GitLab)

**What they have:**
> "`<th>` should not contain heading elements"

**What OneDS has:**
- No warning about this

**Gap:**
❌ No guidance on what NOT to put in `<th>`

**Worth considering:**
```markdown
**Table Header Content (Don't Use Headings):**

**Wrong:**
```html
<th scope="col">
  <h3>Patent Number</h3>  <!-- ❌ Don't do this -->
</th>
```

**Why Wrong:**
- Breaks heading hierarchy
- Screen readers announce "Heading level 3" inside table
- Confuses document outline
- Semantic conflict (th already has heading role)

**Right:**
```html
<th scope="col">
  Patent Number  <!-- ✅ Plain text or styled span -->
</th>
```

**Styling Header Text:**
```html
<th scope="col">
  <span class="th-text">Patent Number</span>
</th>
```

```css
.th-text {
  font-weight: 600;
  font-size: 14px;
  /* Style without using heading element */
}
```

**Rule:**
- `<th>` already has implicit heading semantics
- Don't nest `<h1>` - `<h6>` inside
- Use CSS for visual styling
```

---

### 4. Text vs Number Alignment (Adobe Spectrum + GitLab)

**What they have:**
- **Spectrum:** "Left align textual data. Right align numerical data for ease of scanning and comparison."
- **GitLab:** "Left-align text to avoid confusion; right-align numeric data for improved scannability"

**What OneDS has:**
- No specific alignment guidance

**Gap:**
❌ No alignment standards for different data types

**Worth considering:**
```markdown
**Column Alignment by Data Type:**

**Text Data: Left-Align**
- Names, titles, descriptions
- Easier to read
- Natural reading pattern
- Example: Patent titles, inventor names

**Numbers: Right-Align**
- Comparable numerical values
- Easier to scan vertically
- Decimal points align
- Example: Prices, counts, percentages

**Nominal Numbers: Left-Align**
- Not comparable (treated as text)
- Phone numbers, ZIP codes
- Patent numbers, IDs
- IP addresses
- Example: "US2024-12345" (identifier, not number)

**Dates: Left-Align**
- Treated as text
- Unless sorting by date (then center or right acceptable)

**Example Table:**
```
┌────────────────────────────────────────┐
│ Patent Number │   Filed   │ Cost      │
│ (left-align)  │ (left)    │ (right)   │
├────────────────────────────────────────┤
│ US2024-12345  │ 2024-01-15│  $5,000.00│
│ US2024-12346  │ 2024-02-20│ $12,500.50│
│ US2024-99999  │ 2024-03-01│    $750.00│
└────────────────────────────────────────┘
          ↑            ↑          ↑
       Text ID      Date      Numbers
```

**CSS Implementation:**
```css
/* Default: left-align */
td {
  text-align: left;
}

/* Numeric columns: right-align */
td.numeric {
  text-align: right;
  font-variant-numeric: tabular-nums; /* Monospaced numbers */
}

/* Center (use sparingly) */
td.center {
  text-align: center;
}
```
```

---

### 5. Tabular Figures for Numbers (Adobe Spectrum)

**What they have:**
> "Use tabular (monospaced) and lining figures when users need to compare numerical values."

**What OneDS has:**
- No typography guidance for numbers

**Gap:**
❌ No guidance on number formatting

**Worth considering:**
```markdown
**Number Typography (Tabular Figures):**

**Use Tabular Figures for Tables:**
- Monospaced number widths
- All digits same width
- Columns align perfectly
- Easier to compare

**CSS Implementation:**
```css
td.numeric {
  font-variant-numeric: tabular-nums lining-nums;
  /* tabular-nums: monospaced width */
  /* lining-nums: numbers same height as caps */
}
```

**Visual Difference:**

**Without tabular-nums (proportional):**
```
1,000.00
  500.50
   75.99
← Numbers don't align vertically
```

**With tabular-nums:**
```
1,000.00
  500.50
   75.99
← Perfect vertical alignment
```

**When to Use:**
- ✅ Tables with numbers
- ✅ Financial data
- ✅ Dashboards, reports
- ✅ Any column of comparable numbers

**When NOT to Use:**
- ❌ Running text/paragraphs
- ❌ Single numbers in isolation
```

---

### 6. En Dash for Missing Values (Adobe Spectrum)

**What they have:**
> "Use an en dash (–) for missing values"

**What OneDS has:**
- No guidance on null/missing values

**Gap:**
❌ No standard for representing missing data

**Worth considering:**
```markdown
**Missing/Null Value Representation:**

**Use En Dash (–) for Missing Values:**
- Not hyphen (-)
- Not em dash (—)
- En dash (–): ALT+0150 or &ndash;

**Examples:**

| Patent Number | Filed      | Examiner |
|---------------|------------|----------|
| US2024-12345  | 2024-01-15 | J. Smith |
| US2024-12346  | 2024-02-20 | –        | ← Missing
| US2024-12347  | –          | K. Jones | ← Not filed yet

**Alternatives (Case-by-Case):**

1. **En Dash (–)** - Default for missing numeric or date data
2. **"N/A"** - Not applicable (different from missing)
3. **Empty Cell** - When context is clear
4. **"Unknown"** - When data exists but we don't know it
5. **"Pending"** - When data will be available later

**Decision Guide:**
- Numeric column, value missing → En dash (–)
- Text column, not applicable → "N/A"
- Optional field, not provided → Empty cell
- Data will come later → "Pending"

**Accessibility:**
```html
<td>
  <span aria-label="Not available">–</span>
</td>
```

**Don't:**
- ❌ Leave completely empty (ambiguous)
- ❌ Use "null" or "None" (technical jargon)
- ❌ Use "0" for missing numbers (0 ≠ missing)
```

---

### 7. Vertical Alignment Top (GitLab)

**What they have:**
> "Vertically align multi-line row content to the top"
> "By default, align content to the top; center alignment acceptable in specific cases"

**What OneDS has:**
```markdown
**Table Cell:**
- **Vertical Align**: Middle
```

**Gap:**
⚠️ We specify middle alignment
⚠️ GitLab recommends top alignment

**Worth considering:**
```markdown
**Vertical Alignment Guidelines:**

**Default: Top Alignment**
- Align content to top of cell
- Especially for multi-line content
- Easier to scan across rows
- Consistent baseline

**When to Use Middle (Center):**
- Single-line cells only
- Icons or badges
- Status indicators
- Action buttons

**Visual Comparison:**

**Top-Aligned (Recommended for text):**
```
┌──────────────────┬──────────────────┐
│ Title            │ Description      │
├──────────────────┼──────────────────┤
│ Patent A         │ This is a long   │
│                  │ description that │
│                  │ spans multiple   │
│                  │ lines of text    │
├──────────────────┼──────────────────┤
│ Patent B         │ Short desc       │
│                  │                  │
│                  │                  │
└──────────────────┴──────────────────┘
← Text starts at same vertical position
```

**Middle-Aligned (For icons/badges):**
```
┌──────────────┬────────────┐
│ Name         │ Status     │
├──────────────┼────────────┤
│ Patent A     │            │
│              │   ✓ Active │
│              │            │
├──────────────┼────────────┤
│ Patent B     │            │
│              │   ○ Pending│
│              │            │
└──────────────┴────────────┘
```

**CSS Implementation:**
```css
/* Default: top alignment */
td {
  vertical-align: top;
  padding-top: 16px;
}

/* Icons and single-line cells */
td.icon-cell,
td.badge-cell {
  vertical-align: middle;
}
```
```

---

### 8. No Zebra Striping (Adobe Spectrum)

**What they have:**
> "Avoid zebra striping; existing row dividers sufficiently aid data parsing"

**What OneDS has:**
```markdown
**Table Row:**
- **Hover**: `#F9FAFB`
```

**Gap:**
⚠️ No guidance on zebra striping (alternating row colors)

**Worth considering:**
```markdown
**Row Styling (No Zebra Striping):**

**Don't Use Alternating Row Colors:**
- ❌ Zebra striping (odd/even rows different colors)
- Row dividers (borders) are sufficient
- Hover state provides scanning aid
- Selected state shows active row

**Why Avoid Zebra Striping:**
- Visual clutter
- Harder to add other row states (selected, error)
- Row dividers already provide separation
- Modern design trends favor cleaner look

**Use Instead:**

**Option 1: Subtle Borders (Recommended)**
```css
tbody tr {
  border-bottom: 1px solid #ECEEF0;
}

tbody tr:hover {
  background-color: #F9FAFB;
}

tbody tr.selected {
  background-color: #EDF1FF;
}
```

**Option 2: Hover Only**
```css
tbody tr {
  border-bottom: 1px solid #ECEEF0;
  transition: background-color 150ms;
}

tbody tr:hover {
  background-color: #F9FAFB;
}
```

**Exception: Zebra Striping Acceptable When:**
- Very dense tables (many columns)
- No row borders
- User feedback requests it
- Legacy system constraints

**But Still Prefer:**
- Borders + hover state
- Cleaner, more modern appearance
```

---

### 9. Column Dividers Sparingly (Adobe Spectrum)

**What they have:**
> "Apply column dividers sparingly and only when grouping related content"

**What OneDS has:**
- No guidance on vertical dividers

**Gap:**
❌ No pattern for column dividers

**Worth considering:**
```markdown
**Column Dividers (Use Sparingly):**

**Default: No Vertical Dividers**
- Horizontal dividers (row borders) only
- Cleaner appearance
- Easier to scan

**When to Use Vertical Dividers:**
- Grouping related columns
- Visual separation of different data types
- Complex tables with many columns

**Example (Grouped Columns):**
```
┌──────────────┬──────────────┬──────────────┐
│ Name         │ Contact Info │ Patent Stats │
│              │ (group)      │ (group)      │
├──────────────┼──────────────┼──────────────┤
│              │ Email │ Phone│ Filed│Approved│
├──────────────┼───────┼──────┼──────┼────────┤
│ John Smith   │ j@... │ 555..│   5  │   3    │
│ Jane Doe     │ jane..│ 555..│   8  │   6    │
└──────────────┴───────┴──────┴──────┴────────┘
                   ↑                   ↑
              Vertical dividers separate groups
```

**CSS Implementation:**
```css
/* No dividers by default */
td {
  border-right: none;
}

/* Dividers for specific columns */
td.group-end {
  border-right: 1px solid #ECEEF0;
}
```

**Don't:**
- ❌ Vertical dividers on every column (cluttered)
- ❌ "Nets" with every cell enclosed (dated look)
```

---

### 10. Disable Sorting on Responsive Tables (GitLab)

**What they have:**
> "The sorting icon and functionality should not be visible on responsive tables"

**What OneDS has:**
```markdown
**Responsive:**
- Horizontal scroll on small screens
- Card view alternative on mobile
```

**Gap:**
❌ No guidance on disabling sorting on mobile

**Worth considering:**
```markdown
**Responsive Table Sorting:**

**Disable Sorting on Mobile:**
- Sorting UI hidden on small screens
- Complex interaction on mobile
- Limited space for sort indicators
- Alternative: Pre-sort server-side

**Implementation:**
```css
@media (max-width: 768px) {
  th button[aria-sort] {
    display: none;
  }

  th {
    pointer-events: none;
  }
}
```

**Mobile Alternatives:**

**Option 1: Pre-sorted**
- Server sends data pre-sorted
- Show sort indicator (non-interactive)
- "Sorted by: Date (newest first)"

**Option 2: Sort Dropdown**
- Dropdown above table: "Sort by: [Date ▼]"
- Easier on mobile than column headers
- Apply sort, reload table

**Option 3: Card View**
- Transform to card layout
- Each row becomes card
- No sorting needed

**Desktop: Sortable Columns**
```
┌─────────┬─────────┬─────────┐
│ Name ▼  │ Date ▲  │ Status  │
└─────────┴─────────┴─────────┘
```

**Mobile: No Sort UI**
```
┌───────────────────┐
│ Name    Date    Status │
│ (sorted by date)       │
└───────────────────┘
```
```

---

### 11. Grid Composite Widget for Cell Navigation (GitLab)

**What they have:**
> "For navigable table cells (not just content within), extend the table as 'a grid composite widget' per WAI-ARIA practices"

**What OneDS has:**
```markdown
**Keyboard Navigation:**
- `Tab` - Navigate between interactive elements
- `Arrow keys` - Navigate cells
```

**Gap:**
⚠️ We mention arrow key navigation
⚠️ Not clear if this is WAI-ARIA Grid pattern or custom

**Worth considering:**
```markdown
**Table vs Grid Navigation Pattern:**

**Standard Table (OneDS Current):**
- Tab moves between interactive elements
- Screen readers use table navigation
- `<table>` element with proper semantics

**Grid Widget (Advanced Pattern):**
- Arrow keys navigate ALL cells
- `role="grid"` replaces table semantics
- More complex keyboard navigation
- Excel-like navigation

**When to Use Standard Table:**
- ✅ Simple data display
- ✅ Few interactive elements per row
- ✅ Screen reader users primary concern
- Example: Patent list with view buttons

**When to Use Grid Widget:**
- ❌ Complex spreadsheet-like interaction
- ❌ Cell-by-cell editing
- ❌ Every cell interactive
- Example: Inline editing table

**Standard Table Implementation (Recommended):**
```html
<table>
  <!-- Native table, screen reader friendly -->
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Patent #12345</td>
      <td><button>View</button></td>
    </tr>
  </tbody>
</table>
```
Tab moves: Button1 → Button2 → Button3...

**Grid Widget (Advanced, Use Sparingly):**
```html
<div role="grid" aria-labelledby="table-title">
  <div role="row">
    <div role="columnheader">Name</div>
    <div role="columnheader">Value</div>
  </div>
  <div role="row">
    <div role="gridcell" tabindex="0">Patent</div>
    <div role="gridcell" tabindex="-1">$5,000</div>
  </div>
</div>
```
Arrow keys move cell-by-cell

**Recommendation:**
- Use standard `<table>` for most cases
- Only use grid widget for Excel-like apps
- Grid pattern is complex to implement accessibly
```

---

### 12. New Row Highlight Pattern (GitLab)

**What they have:**
> "Highlight dynamically added rows with success background color"

**What OneDS has:**
- No pattern for newly added rows

**Gap:**
❌ No visual feedback for new rows

**Worth considering:**
```markdown
**New Row Highlight Pattern:**

**Visual Feedback for Added Rows:**
- User adds new item to table
- Row appears with success background color
- Fades to normal after 2-3 seconds
- Draws attention to new content

**Implementation:**
```css
@keyframes new-row-highlight {
  0% {
    background-color: #ECFDF3; /* Success green */
  }
  100% {
    background-color: transparent;
  }
}

tr.new-row {
  animation: new-row-highlight 2s ease-out;
}
```

**JavaScript:**
```javascript
function addNewRow(data) {
  const row = createTableRow(data);
  row.classList.add('new-row');

  tbody.appendChild(row);

  // Remove class after animation
  setTimeout(() => {
    row.classList.remove('new-row');
  }, 2000);

  // Announce to screen readers
  announceNewRow(data.name);
}
```

**Accessibility:**
```javascript
function announceNewRow(name) {
  const liveRegion = document.getElementById('aria-live');
  liveRegion.textContent = `New row added: ${name}`;
}
```

**Example:**
```
User clicks "Add Patent" → New row appears

┌────────────────────────────────┐
│ Patent #12345 │ Pending │ [×]  │ ← Normal row
├────────────────────────────────┤
│ Patent #12346 │ Filed   │ [×]  │ ← New row (green bg)
├────────────────────────────────┤
│ Patent #12347 │ Approved│ [×]  │ ← Normal row
└────────────────────────────────┘

After 2 seconds: Green background fades to white
```
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **th scope Attribute** - Required for every table header
2. **Caption Element** - Required for accessible table title
3. **No Headings in th** - Don't nest `<h1>`-`<h6>` in headers
4. **Text vs Number Alignment** - Left for text, right for numbers

### Medium Priority

5. **Tabular Figures** - Monospaced numbers for alignment
6. **En Dash for Missing Values** - Standard null representation
7. **Vertical Alignment Top** - Default for multi-line content
8. **No Zebra Striping** - Borders sufficient, cleaner look
9. **Column Dividers Sparingly** - Only for grouping
10. **Disable Sorting on Mobile** - Hide sort UI on small screens

### Nice to Have

11. **Grid vs Table Pattern** - When to use WAI-ARIA grid
12. **New Row Highlight** - Visual feedback for added rows

---

## Recommendations

### Add to OneDS Table Documentation

1. **Critical Semantic Requirements**
   - `scope` attribute required on all `<th>`
   - `<caption>` element required
   - No heading elements in `<th>`

2. **Data Type Alignment Standards**
   - Text: left-align
   - Numbers: right-align (with tabular figures)
   - IDs/nominal numbers: left-align
   - Missing values: en dash (–)

3. **Visual Design Guidelines**
   - Top vertical alignment default
   - No zebra striping (borders + hover)
   - Column dividers sparingly

4. **Responsive Patterns**
   - Disable sorting on mobile
   - Alternative sort methods
   - Card view transformation

5. **Advanced Patterns**
   - New row highlight animation
   - Grid widget vs table decision guide

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Three Size Variants** - Compact, default, comfortable
2. ✅ **Row Selection Pattern** - Checkbox with shift-select
3. ✅ **Pagination Documented** - For 50+ rows
4. ✅ **Empty State Guidance** - Handle no data gracefully
5. ✅ **Responsive Alternatives** - Card view + sticky columns
6. ✅ **Action Patterns** - Hover actions, context menu

**Conclusion:** OneDS has solid table documentation. Adding semantic HTML requirements (scope, caption), alignment standards, and responsive sorting guidance will make it industry-leading.
