---
title: Tree
description: "Documentation for Tree component"
---

## Description

Turn complex hierarchies into something you can actually navigate. Tree displays parent-child relationships in an expandable format—perfect for folder structures, org charts, taxonomies, or any nested data. Users drill down at their own pace, revealing exactly what they need to see.

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
- **Padding**: `spacing-2` `0`

**Tree Node:**
- **Height**: `32px` (default)
- **Padding**: `spacing-1` `spacing-2`
- **Indent**: `spacing-6` per level
- **Font Size**: `text-base`
- **Gap**: `spacing-2` between elements

**Node Structure:**
```
[Indent] [Expand Icon] [Icon] [Label] [Actions]
  24px      16px        16px   auto     auto
```

**Expand/Collapse Icon:**
- **Size**: `16px`
- **Type**: Chevron or caret
- **Collapsed**: Right-facing (►)
- **Expanded**: Down-facing (▼)
- **Color**: `--text-lighter`
- **Hover**: `--text-light`
- **Transition**: Rotate 90°, 200ms

**Node Icon (optional):**
- **Size**: `16px`
- **Types**: Folder, file, document icons
- **Color**: Brand colors or neutral

**Connection Lines (optional):**
- **Width**: `1px`
- **Color**: `--bg-fill-light`
- **Style**: Solid or dashed
- **Position**: Left of nodes

**Checkbox (selectable):**
- **Size**: `16px`
- **Position**: Before icon
- **Type**: Square checkbox
- **States**: Unchecked, checked, indeterminate

**Node States:**
- **Default**: Transparent background
- **Hover**: `--bg-fill-lighter`
- **Selected**: Primary light (`#E6F7FF`)
- **Active**: Primary color background
- **Focus**: Outline indicator
- **Disabled**: Gray text, reduced opacity

## Do

- Show clear parent-child relationships with consistent indentation
- Provide expand/collapse controls for nodes with children
- Support keyboard navigation (arrows, Enter, Home/End)
- Make selected and active states obvious
- Use icons to differentiate node types (folders vs files)
- Show loading states when fetching dynamic nodes
- Enable drag-and-drop for reorganization when it makes sense

## Don't

- Nest beyond 5 levels—it gets overwhelming fast
- Make expand icons too small to click
- Hide the hierarchy structure with unclear indentation
- Skip hover states—they guide the eye
- Make nodes too cramped or too tall
- Fail to indicate which nodes have children
- Use trees for flat lists—that's what regular lists are for

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
� Documents
  � Projects
  � Personal
    " Resume.pdf
    " Cover_Letter.docx
  � Archive
� Downloads
  " Patent_12345.pdf
� Pictures
```

**Organization Chart:**
```
� Acme Corp
  � Engineering
    � Frontend Team
      " Alice (Lead)
      " Bob
    � Backend Team
    � QA Team
  � Marketing
  � Sales
```

**With Checkboxes:**
```
 � All Products
   � Electronics
       Laptops
       Phones
   � Clothing
```

## Behavior

### Expanding/Collapsing

**Click to Expand:**
1. User clicks expand icon (or node)
2. Chevron rotates 90� down
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
Click a node to select it. The previous selection clears automatically, and the new selection gets a clear highlight.

**Multi-Selection (with checkboxes):**
Check nodes independently. Parents show an indeterminate state when only some children are checked. Checking a parent selects all children; unchecking a parent clears all children.

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
When you click to expand, the node shows a loading indicator, fetches its children, displays a spinner during the load, and renders the children when ready. Loaded nodes get cached so subsequent expansions are instant.

### Search/Filter

**Tree Search:**
A search input filters visible nodes in real-time, automatically expanding parents to reveal matches. Matched text gets highlighted, match count displays, and clearing the search restores the full tree.

