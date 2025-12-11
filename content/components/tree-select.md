---
title: Tree Select
description: "Documentation for Tree Select component"
---

## Description

Get the best of both worlds: a dropdown's simplicity with a tree's navigational power. Tree Select lets users drill down through nested categories, folders, or hierarchies to find exactly what they need—all in a compact, searchable selector. Complex data, simple interface.

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
- **Border**: `1px solid` `--border-lighter`
- **Border Radius**: `radius-small`
- **Padding**: `spacing-2` `spacing-3`
- **Background**: `--bg-surface-white`
- **Font Size**: `text-base`
- **Placeholder Color**: `--text-placeholder`

**Dropdown Panel:**
- **Max Width**: `320px` (matches input)
- **Max Height**: `280px` (scrollable)
- **Background**: `--bg-surface-white`
- **Border**: `1px solid` `--bg-fill-light`
- **Border Radius**: `radius-medium`
- **Shadow**: Medium elevation
- **Padding**: `spacing-2` `0`

**Tree Node:**
- **Height**: `32px`
- **Padding**: `spacing-1` `spacing-3`
- **Indent**: `spacing-6` per level
- **Font Size**: `text-base`
- **Gap**: `spacing-2` between icon and label

**Node States:**
- **Default**: Transparent background
- **Hover**: `--bg-fill-lighter`
- **Selected**: Primary light background (`#E6F7FF`)
- **Focus**: Outline indicator
- **Disabled**: Gray text, not interactive

**Expand/Collapse Icon:**
- **Size**: `16px`
- **Type**: Chevron right (collapsed), chevron down (expanded)
- **Position**: Before node label
- **Color**: `--text-lighter`

**Checkbox (multi-select):**
- **Size**: `16px`
- **Position**: Before expand icon
- **Type**: Square checkbox
- **Indeterminate**: Dash for partial selection

**Search Input:**
- **Height**: `32px`
- **Padding**: `spacing-2` `spacing-3`
- **Border Bottom**: `1px solid` `--bg-fill-light`
- **Margin**: `spacing-2` `spacing-3`

## Do

- Show the full path of selected items (e.g., "Electronics > Computers > Laptops")
- Expand to the selected item when opening the dropdown
- Support full keyboard navigation
- Include search/filter for large trees
- Make parent-child relationships crystal clear
- Enable multi-select with checkboxes when appropriate
- Highlight matching search terms
- Use indeterminate states for partial parent selections

## Don't

- Hide the tree structure—show the hierarchy clearly
- Nest beyond 5 levels—navigation becomes painful
- Make expand icons too small to click easily
- Forget to display the selected item's full path
- Skip search functionality for trees with many items
- Make nodes too cramped or too tall
- Use unclear indentation that obscures relationships

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
Select Category: [Electronics > Computers >...] �

Dropdown:
  � Electronics
    � Computers
      � Laptops
      � Desktops
      � Accessories
    � Phones
    � Tablets
  � Clothing
  � Home & Garden
```

**Organization Picker:**
```
Select Department: [Engineering > Frontend...] �

  � Engineering
    � Frontend
      " Alice
      " Bob
    � Backend
    � QA
  � Marketing
  � Sales
```

**With Search:**
```
Department: [Search...] =

Search: lap_

  � Electronics
    � Computers
      � Laptops  (matched)
```

## Behavior

### Opening the Tree

Click the input field or dropdown arrow. The panel appears below, automatically expands to show the current selection, and focuses the search input (if present) or moves keyboard focus to the tree.

### Navigation

**Expanding/Collapsing:**
Click the chevron to expand or collapse. Click anywhere on a node to select it. The chevron rotates 90° with a smooth transition.

**Keyboard Navigation:**
Arrow keys navigate up/down and expand/collapse nodes. Enter or Space selects. Home/End jump to first/last visible node. Escape closes the dropdown, Tab exits entirely.

**Mouse Navigation:**
Click nodes to select, click chevrons to expand/collapse, hover to highlight, scroll to see more.

### Selection

**Single Select:**
Click a node, it highlights, the input updates with the full path, and the dropdown closes.

**Multi-Select:**
Check multiple nodes, parents show indeterminate states for partial selections, the input displays a count or list of selected items, and the dropdown stays open for additional selections.

### Search/Filter

Type in the search field and watch the tree filter in real-time. Only matching nodes appear, parents automatically expand to reveal them, matches get highlighted, and clearing the search restores everything.

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

Load child nodes only when expanded. Show a spinner during loading, cache what's loaded for faster subsequent access, and handle errors gracefully with clear messaging.
