## Description

Tree Select combines the convenience of a dropdown with the power of hierarchical data navigation. Perfect for nested categories, folder structures, or organizational hierarchies, it lets users drill down through levels to find exactly what they needcollapsing complexity into a compact, searchable selector.

## Anatomy

1. **Input Field** - Display selected value(s)
2. **Dropdown Trigger** - Arrow icon to open tree
3. **Dropdown Panel** - Tree structure popup
4. **Tree Nodes** - Hierarchical items
5. **Expand/Collapse Icons** - Chevron indicators
6. **Checkboxes** - Multi-select indicators (optional)
7. **Search Input** - Filter tree items (optional)
8. **Clear Button** - Remove selection (optional)

## Specification

**Input Field:**
- **Width**: `320px` (default, flexible)
- **Height**: `40px`
- **Border**: `1px solid #D9D9D9`
- **Border Radius**: `6px`
- **Padding**: `8px 12px`
- **Background**: White (`#FFFFFF`)
- **Font Size**: `14px`
- **Placeholder Color**: `#BFBFBF`

**Dropdown Panel:**
- **Max Width**: `320px` (matches input)
- **Max Height**: `280px` (scrollable)
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `8px`
- **Shadow**: Medium elevation
- **Padding**: `8px 0`

**Tree Node:**
- **Height**: `32px`
- **Padding**: `4px 12px`
- **Indent**: `24px` per level
- **Font Size**: `14px`
- **Gap**: `8px` between icon and label

**Node States:**
- **Default**: Transparent background
- **Hover**: Light gray (`#F5F5F5`)
- **Selected**: Primary light background (`#E6F7FF`)
- **Focus**: Outline indicator
- **Disabled**: Gray text, not interactive

**Expand/Collapse Icon:**
- **Size**: `16px`
- **Type**: Chevron right (collapsed), chevron down (expanded)
- **Position**: Before node label
- **Color**: Gray (`#8C8C8C`)

**Checkbox (multi-select):**
- **Size**: `16px`
- **Position**: Before expand icon
- **Type**: Square checkbox
- **Indeterminate**: Dash for partial selection

**Search Input:**
- **Height**: `32px`
- **Padding**: `8px 12px`
- **Border Bottom**: `1px solid #ECEEF0`
- **Margin**: `8px 12px`

## Do

- Show full path of selected item
- Expand to selected item on open
- Support keyboard navigation
- Provide search/filter functionality
- Show parent-child relationships clearly
- Allow multi-select with checkboxes when needed
- Highlight matching search terms
- Show indeterminate state for partial selection

## Don't

- Don't hide the tree structure
- Don't nest too many levels (5+ gets difficult)
- Don't forget parent-child visual relationships
- Don't make expand icons too small
- Don't forget to show selected item path
- Don't hide search for large trees
- Don't make tree nodes too tall or short

## Uses

**Primary Use Cases:**

1. **Category Selection** - Product categories, taxonomies
2. **Folder Picker** - File system navigation
3. **Organization Hierarchy** - Departments, teams
4. **Geographic Selection** - Country > State > City
5. **Patent Classifications** - IPC, CPC codes
6. **Menu Navigation** - Multi-level menu selection
7. **Tag Hierarchies** - Nested tag structures
8. **Report Filters** - Hierarchical filtering

**Example Scenarios:**

**Category Selector:**
```
Select Category: [Electronics > Computers >...] ¼

Dropdown:
  ¼ Electronics
    ¼ Computers
      ¸ Laptops
      ¸ Desktops
      ¸ Accessories
    ¸ Phones
    ¸ Tablets
  ¸ Clothing
  ¸ Home & Garden
```

**Organization Picker:**
```
Select Department: [Engineering > Frontend...] ¼

  ¼ Engineering
    ¼ Frontend
      " Alice
      " Bob
    ¸ Backend
    ¸ QA
  ¸ Marketing
  ¸ Sales
```

**With Search:**
```
Department: [Search...] =

Search: lap_

  ¼ Electronics
    ¼ Computers
      ’ Laptops  (matched)
```

## Behavior

### Opening the Tree

1. User clicks input field or dropdown arrow
2. Dropdown panel appears below input
3. Tree expands to show selected item
4. Search input focuses (if present)
5. Keyboard focus moves to tree

### Navigation

**Expanding/Collapsing:**
- Click chevron to expand/collapse
- Click anywhere on node to select
- Chevron rotates 90° when expanding
- Smooth height transition

**Keyboard Navigation:**
- `Arrow Up/Down` - Navigate nodes
- `Arrow Right` - Expand node
- `Arrow Left` - Collapse node or move to parent
- `Enter/Space` - Select node
- `Home/End` - First/last visible node
- `Escape` - Close dropdown
- `Tab` - Exit tree select

**Mouse Navigation:**
- Click node to select
- Click chevron to expand/collapse
- Hover highlights nodes
- Scroll within tree panel

### Selection

**Single Select:**
1. User clicks tree node
2. Node highlights
3. Selection updates in input field
4. Dropdown closes
5. Full path shown in input

**Multi-Select (with checkboxes):**
1. User checks multiple nodes
2. Checkboxes update
3. Parent shows indeterminate if some children selected
4. Input shows count or selected items
5. Dropdown stays open for more selections

### Search/Filter

**Searching:**
1. User types in search field
2. Tree filters in real-time
3. Only matching nodes visible
4. Parent nodes expanded to show matches
5. Matches highlighted
6. Clear search to restore full tree

### States

**Input States:**
- **Empty** - Placeholder visible
- **Filled** - Selected path/items shown
- **Focus** - Border highlighted, dropdown opens
- **Disabled** - Grayed out, not interactive
- **Error** - Red border, error message

**Node States:**
- **Default** - Normal appearance
- **Hover** - Background highlight
- **Selected** - Primary color background
- **Disabled** - Gray, not selectable
- **Loading** - Spinner for dynamic nodes

### Dynamic Loading

**Lazy Loading:**
- Load child nodes on expand
- Show spinner while loading
- Cache loaded nodes
- Handle loading errors gracefully

## Accessibility

**Semantic HTML:**
```html
<div class="tree-select">
  <div
    role="combobox"
    aria-expanded="false"
    aria-haspopup="tree"
    aria-controls="tree-popup">
    <input
      type="text"
      readonly
      aria-label="Select category"
      value="Electronics > Computers">
  </div>

  <div
    id="tree-popup"
    role="tree"
    aria-label="Category tree"
    hidden>

    <div
      role="treeitem"
      aria-expanded="true"
      aria-level="1"
      aria-selected="false">
      Electronics
    </div>

    <div
      role="group">
      <div
        role="treeitem"
        aria-expanded="false"
        aria-level="2"
        aria-selected="true">
        Computers
      </div>
    </div>
  </div>
</div>
```

**ARIA Attributes:**
- `role="combobox"` on trigger
- `role="tree"` on tree container
- `role="treeitem"` on each node
- `role="group"` on child containers
- `aria-expanded` for expandable nodes
- `aria-level` for hierarchy depth
- `aria-selected="true"` on selected nodes
- `aria-multiselectable="true"` for multi-select

**Keyboard Navigation:**
- Full keyboard support for tree navigation
- Arrow keys for movement
- Enter/Space for selection
- Home/End for first/last
- Type-ahead search
- Escape to close

**Screen Reader Support:**
- Announce hierarchy level (e.g., "Level 2 of 4")
- Announce expanded/collapsed state
- Announce selected items
- Announce search results count
- Read node labels clearly
- Announce parent-child relationships

**Focus Management:**
- Focus visible on tree nodes
- Focus trap in dropdown
- Focus returns to input on close
- Clear focus indicators
- Logical focus order

**Search Accessibility:**
- Label search input clearly
- Announce filtered results count
- Announce "no results" state
- Screen reader friendly

**Multi-Select:**
```html
<div
  role="treeitem"
  aria-level="2"
  aria-checked="true">
  <input
    type="checkbox"
    checked
    aria-label="Select Laptops">
  Laptops
</div>
```

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Selected state meets 3:1 contrast
- Focus indicator 3:1 contrast
- Don't rely on color alone
- Indentation provides visual hierarchy

**Touch Targets:**
- Nodes minimum 44×44px
- Large enough expand/collapse icons
- Checkboxes 44×44px tap area
- Adequate spacing between nodes

**Responsive:**
- Full-width on mobile
- Larger touch targets
- Simplified tree on small screens
- Consider native alternatives
- Horizontal scroll for long paths

**Loading States:**
- Announce loading to screen readers
- Show spinner for dynamic loading
- Don't block entire tree
- Handle errors gracefully
