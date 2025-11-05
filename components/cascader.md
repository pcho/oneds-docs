## Description

Cascader is a hierarchical selection component that lets users navigate through nested options across multiple levels. When clicked, it displays connected dropdown panels side by side, with each panel showing options for the next level in the hierarchy. It's perfect for browsing categories, locations, organizational structures, or any data with parent-child relationships.

Think of it as a breadcrumb trail you build by clicking—each selection opens the next level, creating a visual path through your data hierarchy.

## Anatomy

1. **Label** - Field label with optional required indicator and info icon
2. **Input Field** - Shows selected value(s) or placeholder
3. **Prefix Icon** (optional) - Leading icon for context
4. **Suffix Icon** - Chevron or indicator showing dropdown state
5. **Dropdown Panels** - Side-by-side panels showing hierarchy levels
6. **Panel Dividers** - Vertical separators (`1px`, `#D1D6DB`)
7. **Dropdown Items** - Selectable options within each panel
8. **Selection Path** - Visual indication of selected items across levels

## Specification

### Cascader Field

**Variants:**
- **Default** - Single selection, shows selected path
- **Multiselect** - Multiple selections with tags/chips
- **Prefix** - Includes leading icon for additional context

**Field Dimensions:**
- **Width**: `400px` (default, can be customized)
- **Layout**: Vertical column
- **Gap**: `8px` (between label and input)

**Label:**
- **Layout**: Vertical column
- **Gap**: `6px` (internal spacing)
- **Sizing**: Hug content (auto width/height)
- **Required indicator**: Red asterisk if required
- **Info icon**: Optional tooltip trigger

**Input Container:**
- **Layout**: Vertical column, stretch to fill
- **Sizing**: Fill horizontal, hug vertical
- **Border**: Standard input border
- **Border radius**: Matches input field design system
- **Padding**: Standard input padding

### Cascader Dropdown

**Overall Layout:**
- **Layout**: Horizontal row
- **Gap**: `8px` between panels
- **Sizing**: Hug content (auto width/height)
- **Shadow**: Dropdown shadow (floating effect)
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #D1D6DB`
- **Border radius**: `8px`

**Panel:**
- **Width**: `180px` per panel
- **Padding**: `8px 0px` (top/bottom)
- **Layout**: Vertical column
- **Gap**: `2px` between items
- **Background**: White

**Panel Divider:**
- **Width**: `1px`
- **Height**: Fill parent height
- **Color**: `#D1D6DB`

**Dropdown Items:**
- Inherits from Dropdown - Items component
- Standard dropdown item styling
- Hover/selected states apply
- Right chevron icon indicates sub-items

## Do

- Show the full selection path in the input field (e.g., "North America > USA > California")
- Use right-pointing chevrons to indicate expandable options
- Keep panel widths consistent across all levels
- Show all visible levels side by side for easy navigation
- Allow users to change their selection at any level
- Provide clear visual feedback for hover and selected states
- Use loading indicators when fetching nested data dynamically
- Consider default expansion for single-child paths

## Don't

- Don't hide previously selected levels—keep the full path visible
- Don't make panels too narrow (minimum 150px recommended)
- Don't show more than 4-5 levels simultaneously—it gets overwhelming
- Don't remove the ability to go back and change earlier selections
- Don't use cascader for flat lists—use regular Select instead
- Don't forget to handle empty states at any level
- Don't auto-close on intermediate selections—only final selection
- Don't make all options expandable if they have no children

## Uses

**Primary Use Cases:**

1. **Geographic Selection** - Country > State > City > District
2. **Category Browsing** - Department > Category > Subcategory > Item Type
3. **Organization Hierarchy** - Company > Division > Department > Team
4. **File System Navigation** - Drive > Folder > Subfolder > File
5. **Date Selection** - Year > Month > Day (alternative to date picker)
6. **Product Classification** - Industry > Sector > Product Type > Specific Product
7. **Patent Classification** - Class > Subclass > Group > Subgroup

**Example Scenarios:**

**Patent Office Example:**
```
Patent Class → IPC Section → IPC Class → IPC Subclass → IPC Group
A (Human Necessities) → A01 (Agriculture) → A01B (Soil Working) → A01B 1/00 (Hand tools)
```

**Location Selection:**
```
Region → Country → State/Province → City
Americas → United States → California → San Francisco
```

**Organization:**
```
Company → Department → Team → Member
Acme Corp → Engineering → Frontend → John Doe
```

**Multiselect Use Case:**
- Selecting multiple regions for a patent application territory
- Choosing multiple categories for product classification
- Picking multiple teams for access permissions

## Behavior

### States

**Input Field States:**
- **Default** - Empty with placeholder or shows selected path
- **Hover** - Visual feedback on hover
- **Focus** - Dropdown opens, focus ring visible
- **Filled** - Shows selected value(s)
- **Disabled** - Grayed out, non-interactive
- **Error** - Red border, error message below
- **Loading** - Shows loading spinner while fetching data

**Dropdown Panel States:**
- **Open** - Visible with shadow and border
- **Closed** - Hidden from view
- **Loading** - Shows skeleton or spinner for panel content
- **Empty** - "No options" message if level has no children

**Item States:**
- **Default** - Standard appearance
- **Hover** - Highlighted background
- **Selected** - Accent color, checkmark or different background
- **Expanded** - Shows next panel with children

### Interactions

**Opening:**
1. User clicks input field or chevron icon
2. First panel opens below input
3. Focus moves to first panel
4. Keyboard navigation available immediately

**Selection Flow:**
1. User clicks item in first panel
2. If item has children, second panel appears to the right
3. First panel shows selected state
4. User continues selecting through levels
5. Final selection (no children) closes dropdown and updates input

**Multiselect Flow:**
1. User can select at any level
2. Selections appear as tags/chips in input
3. Dropdown remains open for additional selections
4. Close button or clicking outside finalizes selections

**Changing Selection:**
1. User can click any previous level
2. Subsequent panels update to show new path
3. Previously selected path is cleared/updated

**Keyboard Navigation:**
- `Down/Up Arrow` - Navigate within current panel
- `Right Arrow` - Expand item and move to next panel
- `Left Arrow` - Go back to previous panel
- `Enter` - Select current item
- `Escape` - Close dropdown
- `Tab` - Move focus out (closes dropdown)

### Focus

- Focus ring appears on input field when active
- Panel items receive focus indicator on keyboard navigation
- Focus moves logically: left to right through panels, top to bottom within panels
- Focus trap keeps keyboard navigation within dropdown when open

### Scrolling

- Each panel scrolls independently if content exceeds max height
- Recommended max height: `300-400px` per panel
- Scroll shadows indicate more content above/below
- Selected item auto-scrolls into view when panel opens

### Responsiveness

- On mobile: Consider modal view instead of side-by-side panels
- Narrow screens: Stack panels vertically or use stepper approach
- Touch targets: Minimum `44px` height for mobile
- Consider full-screen takeover on small devices

## Accessibility

**Keyboard Navigation:**
- `Tab` - Focus input field
- `Space/Enter` - Open dropdown
- `Arrow Keys` - Navigate options and panels
- `Right Arrow` - Expand and move to next level
- `Left Arrow` - Return to previous level
- `Home/End` - Jump to first/last item in current panel
- `Escape` - Close dropdown
- `Type to search` - Filter options by typing (optional)

**Screen Reader Support:**
- Input field has descriptive label
- Aria-expanded indicates dropdown state (true/false)
- Aria-haspopup="menu" on trigger
- Each panel announced with level context
- Item structure: "Option name, 3 of 10, has submenu" or "Option name, final selection"
- Selected path announced clearly: "Selected: North America, United States, California"
- Multiselect: Announce count "3 items selected"

**Hierarchical Semantics:**
- Use nested list structure (`<ul>`, `<li>`)
- `role="menu"` on each panel
- `role="menuitem"` on each option
- `aria-haspopup="menu"` on items with children
- `aria-current="true"` on selected items
- `aria-label` describes full context of each level

**Focus Management:**
- Clear focus indicators on all interactive elements
- Focus visible on keyboard navigation
- Focus returns to input field on close
- Focus trap within dropdown prevents tab-out accidentally
- Logical focus order: input → panel 1 → panel 2 → panel 3

**Loading States:**
- Announce to screen readers: "Loading options"
- Show visual loading indicator (spinner/skeleton)
- Disable navigation until loaded
- Aria-busy="true" while loading

**Error Handling:**
- Error messages associated with input via aria-describedby
- Required fields indicated with aria-required="true"
- Invalid state uses aria-invalid="true"
- Error messages announced to screen readers on change

**Color & Contrast:**
- All text meets WCAG AA contrast ratio (4.5:1)
- Selected items distinguishable without color alone (use icon/pattern)
- Hover states have sufficient contrast
- Focus rings visible in high contrast mode
- Disabled state maintains readability

**Mobile Accessibility:**
- Touch targets minimum 44×44px
- Sufficient spacing between items
- Swipe gestures for panel navigation (optional)
- VoiceOver/TalkBack compatible navigation
