## Description

Tree is a hierarchical structure that displays data with parent-child relationships in an expandable, collapsible format. Perfect for folder structures, organizational charts, taxonomies, or any nested data, it transforms complex hierarchies into an intuitive, navigable interface where users can drill down through levels at their own pace.

## Anatomy

1. **Tree Node** - Individual item in hierarchy
2. **Node Label** - Text or content of node
3. **Expand/Collapse Icon** - Chevron or plus/minus
4. **Connection Lines** - Visual parent-child indicators (optional)
5. **Icon** - Node type indicator (optional)
6. **Checkbox** - Selection control (optional)
7. **Children Container** - Nested child nodes
8. **Indent** - Visual spacing for hierarchy levels

## Specification

**Tree Container:**
- **Width**: Flexible (fill container)
- **Background**: Transparent or white
- **Padding**: `8px 0`

**Tree Node:**
- **Height**: `32px` (default)
- **Padding**: `4px 8px`
- **Indent**: `24px` per level
- **Font Size**: `14px`
- **Gap**: `8px` between elements

**Node Structure:**
```
[Indent] [Expand Icon] [Icon] [Label] [Actions]
  24px      16px        16px   auto     auto
```

**Expand/Collapse Icon:**
- **Size**: `16px`
- **Type**: Chevron or caret
- **Collapsed**: Right-facing (¸)
- **Expanded**: Down-facing (¾)
- **Color**: Gray (`#8C8C8C`)
- **Hover**: Darker (`#595959`)
- **Transition**: Rotate 90°, 200ms

**Node Icon (optional):**
- **Size**: `16px`
- **Types**: Folder, file, document icons
- **Color**: Brand colors or neutral

**Connection Lines (optional):**
- **Width**: `1px`
- **Color**: Light gray (`#E8E8E8`)
- **Style**: Solid or dashed
- **Position**: Left of nodes

**Checkbox (selectable):**
- **Size**: `16px`
- **Position**: Before icon
- **Type**: Square checkbox
- **States**: Unchecked, checked, indeterminate

**Node States:**
- **Default**: Transparent background
- **Hover**: Light gray (`#F5F5F5`)
- **Selected**: Primary light (`#E6F7FF`)
- **Active**: Primary color background
- **Focus**: Outline indicator
- **Disabled**: Gray text, reduced opacity

## Do

- Show clear parent-child relationships
- Use consistent indentation per level
- Provide expand/collapse for nodes with children
- Support keyboard navigation
- Show selected/active states clearly
- Use icons to indicate node types
- Allow drag-and-drop for reorganization (when applicable)
- Show loading state for dynamic nodes

## Don't

- Don't nest too deeply (5+ levels gets difficult)
- Don't make expand icons too small
- Don't hide the hierarchy structure
- Don't forget hover states
- Don't make nodes too tall or cramped
- Don't forget to show which nodes have children
- Don't use for flat lists (use list component)

## Uses

**Primary Use Cases:**

1. **File Explorer** - Folder and file navigation
2. **Organization Chart** - Company hierarchy
3. **Category Management** - Nested categories
4. **Navigation Menu** - Multi-level menus
5. **Patent Classifications** - IPC/CPC hierarchy
6. **Sitemap** - Website structure
7. **JSON/XML Viewer** - Data structure visualization
8. **Task Breakdown** - Project task hierarchy

**Example Scenarios:**

**File System:**
```
¾ Documents
  ¸ Projects
  ¾ Personal
    " Resume.pdf
    " Cover_Letter.docx
  ¸ Archive
¾ Downloads
  " Patent_12345.pdf
¸ Pictures
```

**Organization Chart:**
```
¾ Acme Corp
  ¾ Engineering
    ¾ Frontend Team
      " Alice (Lead)
      " Bob
    ¸ Backend Team
    ¸ QA Team
  ¸ Marketing
  ¸ Sales
```

**With Checkboxes:**
```
 ¾ All Products
   ¾ Electronics
       Laptops
       Phones
   ¸ Clothing
```

## Behavior

### Expanding/Collapsing

**Click to Expand:**
1. User clicks expand icon (or node)
2. Chevron rotates 90° down
3. Child nodes slide in
4. Height transition smooth (200ms)
5. Node remains focusable

**Click to Collapse:**
1. User clicks collapse icon
2. Chevron rotates back
3. Child nodes slide up/fade out
4. Height collapses smoothly
5. Focus moves to parent if on child

**Expand All / Collapse All:**
- Buttons for bulk operations
- Expands/collapses entire tree
- Smooth cascading animation

### Selection

**Single Selection:**
- Click node to select
- Previous selection deselects
- Selected node highlighted
- Visual indicator clear

**Multi-Selection (with checkboxes):**
- Check nodes independently
- Parent indeterminate if some children checked
- Check parent checks all children
- Uncheck parent unchecks all children

### Navigation

**Keyboard Navigation:**
- `Arrow Down` - Next node (visible)
- `Arrow Up` - Previous node (visible)
- `Arrow Right` - Expand node or move to first child
- `Arrow Left` - Collapse node or move to parent
- `Enter/Space` - Toggle expand/collapse or select
- `Home` - First node in tree
- `End` - Last visible node
- `*` (asterisk) - Expand all nodes at current level
- Type letters for quick search

**Mouse Navigation:**
- Click to select/expand
- Double-click to toggle expand/collapse
- Hover highlights node
- Scroll for large trees

### Drag and Drop (optional)

**Reordering:**
1. User drags node
2. Ghost image follows cursor
3. Drop zones highlight
4. Drop to reorder or reparent
5. Tree updates structure

**Visual Feedback:**
- Dragged node semi-transparent
- Drop target highlighted
- Drop line indicator
- Invalid drop zones grayed

### Dynamic Loading

**Lazy Loading:**
1. Node shows loading indicator
2. Click expands and fetches children
3. Spinner shows during load
4. Children render when loaded
5. Cache loaded nodes

### Search/Filter

**Tree Search:**
- Search input filters visible nodes
- Expand parent nodes to show matches
- Highlight matched text
- Show match count
- Clear to restore full tree

## Accessibility

**Semantic HTML:**
```html
<ul role="tree" aria-label="File system">
  <li role="treeitem" aria-expanded="true" aria-level="1">
    <span class="expand-icon">¾</span>
    <span class="label">Documents</span>

    <ul role="group">
      <li role="treeitem" aria-expanded="false" aria-level="2">
        <span class="expand-icon">¸</span>
        <span class="label">Projects</span>
      </li>

      <li role="treeitem" aria-level="2" aria-selected="true">
        <span class="label">Resume.pdf</span>
      </li>
    </ul>
  </li>
</ul>
```

**ARIA Attributes:**
- `role="tree"` on container
- `role="treeitem"` on each node
- `role="group"` on child containers
- `aria-expanded` for expandable nodes
- `aria-level` for hierarchy depth (1-based)
- `aria-selected="true"` on selected node
- `aria-setsize` and `aria-posinset` for position
- `aria-multiselectable="true"` for multi-select trees

**Keyboard Navigation:**
- Full keyboard support required
- Arrow keys for navigation
- Home/End for boundaries
- Enter/Space for actions
- Type-ahead search
- Focus management between levels

**Screen Reader Support:**
- Announce hierarchy level: "Level 2 of 4"
- Announce expanded/collapsed state
- Announce number of children
- Announce selection state
- Read node content clearly
- Announce loading states

**Focus Management:**
- Only one node tabbable at a time (`tabindex="0"`)
- Other nodes `tabindex="-1"`
- Arrow keys move focus
- Clear focus indicator visible
- Focus visible on all interactive elements

**Expand/Collapse Icons:**
```html
<button
  aria-label="Expand Documents folder"
  aria-expanded="false"
  class="expand-button">
  ¸
</button>
```

**Checkboxes:**
```html
<li role="treeitem" aria-level="2">
  <input
    type="checkbox"
    aria-checked="mixed"
    aria-label="Select Electronics category">
  <span>Electronics</span>
</li>
```

**Indeterminate State:**
- Use `aria-checked="mixed"` for partial selection
- Visual dash in checkbox
- Announce "partially selected" to screen readers

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Selected state meets 3:1 contrast
- Focus indicator 3:1 contrast
- Don't rely on color alone
- Connection lines provide visual structure

**Touch Targets:**
- Nodes minimum 44×44px
- Expand icons 44×44px tap area
- Checkboxes 44×44px
- Adequate spacing between nodes

**Responsive:**
- Reduce indentation on mobile
- Larger touch targets
- Simplified view on small screens
- Horizontal scroll for deep nests
- Consider accordion alternative

**Loading States:**
- Announce loading to screen readers
- `aria-busy="true"` during load
- Show spinner for dynamic nodes
- Maintain focus during load

**Long Node Labels:**
- Truncate with ellipsis
- Full text in tooltip or expandable
- `aria-label` with full text
- Wrap text on mobile

**Performance:**
- Virtualize very large trees
- Lazy render collapsed nodes
- Smooth animations (200-300ms)
- Respect prefers-reduced-motion
