## Description

Filter Button is a compact, pill-shaped button designed for building and displaying active filters. It combines close icons, filter criteria, operators, and dropdown indicators into a clean, scannable interface. Perfect for search interfaces, data tables, or anywhere users need to see and modify their active filters at a glance.

Think of it as a filter chip that shows exactly what's being filtered and lets users quickly adjust or remove it.

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
- **Padding**: `6px`
- **Border Radius**: `6px`

**Layout:**
- **Mode**: Horizontal row
- **Justify**: Center
- **Align**: Center
- **Sizing**: Hug horizontal, fixed vertical

**Colors:**
- **Background**: `#F4F6F8` (light gray)
- **Border**: `1px solid #ECEEF0`

**Icons:**
- **Size**: `15×15px` (.75x)
- **Close Icon**: Solid variant, circle-xmark
- **Dropdown Icon**: Line variant, angle-down

**Content Container:**
- **Layout**: Horizontal row, center-aligned
- **Gap**: `4px` between elements
- **Sizing**: Hug content

### Filter Button - Dropdown

**Same dimensions and colors as full version**

**Difference:**
- No close icon (only dropdown)
- Used for primary filter selection

### Filter Button - Operator

**Dimensions:**
- **Padding**: `4px`
- **Gap**: `5px` between icons
- **Border Radius**: `6px`

**Colors:**
- **Background**: `#ECEEF0` (slightly darker gray)
- **Border**: `1px solid #D1D6DB`

**Icons:**
- **Operator Icon**: Shows comparison type (=, ≠, <, >, etc.)
- **Dropdown Icon**: Change operator

**Layout:**
- **Mode**: Horizontal row
- **Align**: Center
- **Gap**: `5px`
- **Sizing**: Hug content

## Do

- Use filter buttons to show active filters clearly
- Group related filters together
- Provide quick remove action (X icon)
- Allow editing by clicking the filter button
- Show operator visually when relevant (=, <, >, etc.)
- Keep filter text concise and scannable
- Use consistent styling across all filter buttons

## Don't

- Don't hide the remove option—users should always be able to clear filters
- Don't make filter buttons too wide—they should be compact
- Don't use vague text like "Filter 1"—be specific ("Status: Approved")
- Don't forget hover/focus states
- Don't stack too many filters without grouping or wrapping
- Don't use filter buttons for primary actions—they're for filter management

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

**Remove Filter:**
1. User hovers over close icon
2. Icon emphasizes (color change, scale)
3. User clicks close icon
4. Filter button removes with fade-out animation
5. Results update

**Edit Filter:**
1. User clicks on filter button (not close icon)
2. Dropdown opens below button
3. User modifies filter value
4. Dropdown closes on selection
5. Filter button updates text
6. Results update

**Change Operator:**
1. User clicks operator icon
2. Dropdown shows operator options
3. User selects new operator
4. Icon updates to new operator
5. Results update

**Keyboard Navigation:**
- `Tab` - Focus next filter button
- `Shift+Tab` - Focus previous filter button
- `Enter/Space` - Open dropdown to edit
- `Delete/Backspace` - Remove filter
- `Escape` - Close dropdown (if open)

### Animations

**Add Filter:**
- Fade in + scale from 0.9 to 1.0
- Duration: 200ms
- Easing: Ease-out

**Remove Filter:**
- Fade out + scale to 0.9
- Duration: 200ms
- Easing: Ease-in

**Hover:**
- Subtle background color transition
- Duration: 150ms

**Update:**
- Pulse or flash to indicate change
- Duration: 300ms

### Grouping

**Filter Groups:**
- Group related filters with labels
- Use dividers between groups
- Allow clearing entire groups
- "Clear All Filters" option available

**Responsive Behavior:**
- Wrap to multiple lines on narrow screens
- Maintain readability at all sizes
- Stack vertically on very small screens

## Accessibility

**Keyboard Support:**
- `Tab` - Navigate between filter buttons
- `Enter/Space` - Open filter dropdown
- `Delete/Backspace` - Remove filter
- `Escape` - Close dropdown
- `Arrow Keys` - Navigate dropdown options

**Screen Reader Support:**
- Button announced with full filter context: "Status equals Approved, filter button, press Enter to edit, press Delete to remove"
- Close button announced: "Remove Status filter, button"
- Operator announced: "Equals operator, button, press Enter to change"
- Filter changes announced: "Filter updated: Status equals Pending"
- Filter removal announced: "Status filter removed"

**ARIA Attributes:**
```html
<button
  aria-label="Status filter: Approved. Press Enter to edit, Delete to remove"
  aria-haspopup="menu"
  aria-expanded="false">
  <span aria-hidden="true">×</span>
  Status: Approved
  <span aria-hidden="true">▼</span>
</button>
```

**Focus Management:**
- Clear focus indicators on all interactive elements
- Focus visible on keyboard navigation
- Focus moves logically between filters
- Dropdown traps focus when open
- Focus returns to button after dropdown closes

**Color & Contrast:**
- Text meets WCAG AA (4.5:1 minimum)
- Icons have 3:1 contrast minimum
- Background distinguishable from page
- Focus indicators 3:1 contrast minimum
- Don't rely on color alone for state

**Live Regions:**
- Filter changes announced via aria-live="polite"
- Results count updates announced
- Status messages for actions

**Mobile Accessibility:**
- Touch targets minimum 44×44px
- Sufficient spacing between buttons
- Tap close icon or swipe to remove
- Long-press for options (optional)
