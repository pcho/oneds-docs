---
title: List
description: "Documentation for List component"
---

## Description

List displays collections in a structured, scannable format. From simple text to complex task interfaces, it organizes information vertically with consistent spacing and optional interactive elements. Lists are the backbone of tables, search results, navigation menus, and to-do lists.

Think of them as your content's organizational structure—making information digestible and actionable.

## Anatomy

### Simple List
1. **List Container** - Wrapper for all list items
2. **List Items** - Individual rows in the list
3. **Spacing** - Consistent gaps between items (`2px`)

### List Item (Standard)
1. **Container** - Row with padding and optional border radius
2. **Leading Element** - Icon, avatar, checkbox, or visual indicator
3. **Content** - Main text and optional secondary text
4. **Trailing Element** - Actions, controls, or metadata
5. **Background** - Transparent default, hover state available

### Task Item
1. **Toggle/Checkbox** - Mark task complete
2. **Task Content** - Task text and details
3. **Status Indicator** - Visual status representation
4. **Task Control** - Actions like edit, delete
5. **Level Indicator** - Nested task depth

### Search Item
1. **Leading Icon** - Search result type indicator
2. **Title** - Primary search result text (with variants)
3. **Icons** - Additional metadata icons
4. **Border** - Optional border for separation

## Specification

### Simple List

**Dimensions:**
- **Width**: `433px` (default, can be flexible)
- **Layout**: Vertical column
- **Gap**: `radius-tiny` between items
- **Sizing**: Fixed width, hug height

### List Item

**Dimensions:**
- **Width**: `433px` (matches container)
- **Padding**: `radius-small spacing-2`
- **Gap**: `spacing-2` between elements
- **Border Radius**: `radius-small`

**Layout:**
- **Mode**: Horizontal row
- **Gap**: `spacing-2`
- **Background**: Transparent
- **Hover**: `--bg-fill-lighter`

### Task Item

**Dimensions:**
- **Width**: `670px`
- **Layout**: Horizontal row
- **Justify**: Space-between
- **Align**: Center
- **Gap**: `57px` between main sections

**Components:**
- **Task Item - Toggle**: Checkbox component set
- **Task Item - Status**: Status indicator variants
- **Task Item - Control**: Action buttons

### Search Item

**Layout:**
- **Mode**: Horizontal row
- **Align**: Center
- **Gap**: `spacing-3`
- **Padding**: `spacing-1 spacing-2`
- **Border Radius**: `radius-small`
- **Sizing**: Hug content

**Components:**
- **Search Item - Icons**: Icon component set
- **Search Item - Title**: Title variants

### List Item - Leading

**Component Set**: Various leading element types
- Icons
- Avatars
- Checkboxes
- Status indicators

### List Item - Level

**Component Set**: Indentation for nested lists
- Different depth levels
- Visual hierarchy indicators

### List Item - Control

**Component Set**: Trailing action controls
- Edit button
- Delete button
- More options menu

## Do

- Use consistent spacing
- Provide hover states for interactive lists
- Show clear selection feedback
- Use appropriate leading elements
- Maintain consistent alignment
- Support keyboard navigation
- Use infinite scroll or pagination for long lists
- Show loading states

## Don't

- Make items too tall (keep scannable)
- Forget hover states on interactive lists
- Use inconsistent spacing
- Overcrowd items with information
- Forget empty states
- Make clickable areas unclear
- Nest more than 3 levels without visual aids

## Uses

**Primary Use Cases:**

1. **Content Lists** - Articles, documents, files
2. **Navigation Menus** - Sidebar or dropdown navigation
3. **Search Results** - Display search results with metadata
4. **Task Lists** - To-do items with checkboxes
5. **Inbox/Messages** - Email or message threads
6. **Settings** - List of settings options
7. **Contact Lists** - People, organizations
8. **File Browsers** - Files and folders
9. **Activity Feeds** - Timeline of events

**Example Scenarios:**

**Patent List:**
```
┌─────────────────────────────────────┐
│ [📄] Patent Application #12345      │
│      Status: Approved • 2024-01-15  │
├─────────────────────────────────────┤
│ [📄] Patent Application #12346      │
│      Status: Pending • 2024-01-20   │
├─────────────────────────────────────┤
│ [📄] Patent Application #12347      │
│      Status: Draft • 2024-01-25     │
└─────────────────────────────────────┘
```

**Task List:**
```
┌─────────────────────────────────────┐
│ ☑ Review patent claims              │
│ ☐ Submit drawings                   │
│ ☐ Pay filing fees                   │
│   ☐ Calculate total                 │  (nested)
│   ☐ Process payment                 │  (nested)
│ ☐ Schedule examination              │
└─────────────────────────────────────┘
```

**Search Results:**
```
┌─────────────────────────────────────┐
│ [🔍] Machine Learning Patent        │
│      US10234567 • 2023              │
├─────────────────────────────────────┤
│ [🔍] AI Training Method             │
│      US10234568 • 2023              │
└─────────────────────────────────────┘
```

## Behavior

### States

**List Item States:**
- **Default** - Standard appearance
- **Hover** - Highlighted background
- **Selected** - Distinct background color
- **Active** - Currently pressed/clicked
- **Disabled** - Grayed out, non-interactive
- **Focus** - Keyboard focus indicator

**Task Item States:**
- **Unchecked** - Task not complete
- **Checked** - Task complete (often with strikethrough)
- **In Progress** - Actively working on task
- **Blocked** - Cannot proceed

### Interactions

**Selection:**
- **Single Select**: Click item to select, click again to deselect
- **Multi-Select**: Ctrl/Cmd+Click to add to selection
- **Range Select**: Shift+Click to select range
- **Select All**: Ctrl/Cmd+A

**Task Completion:**
1. User clicks checkbox
2. Checkbox animates to checked state
3. Task text may strikethrough
4. Task may fade or move to completed section

**Nested Lists:**
- Click expand/collapse icon to show/hide children
- Indentation shows hierarchy level
- Parent checkbox affects all children (optional)

**Reordering (Drag & Drop):**
1. User hovers, drag handle appears
2. User clicks and drags
3. Visual indicator shows drop position
4. Release to reorder

**Keyboard Navigation:**
- `Arrow Up/Down` - Navigate between items
- `Enter` - Activate/select item
- `Space` - Toggle checkbox (task lists)
- `Tab` - Move to next interactive element
- `Shift+Tab` - Move to previous interactive element
- `Ctrl/Cmd+A` - Select all

### Loading States

**Initial Load:**
- Skeleton screens for list items
- Placeholder with shimmer effect
- Spinner at top of list

**Infinite Scroll:**
- Spinner at bottom while loading more
- "Load More" button alternative
- Loading indicator inline with items

**Refresh:**
- Pull-to-refresh on mobile
- Refresh button in header
- Loading overlay (preserve current view)

### Empty States

- Icon and message when empty
- "No results found" for searches
- "Get started" prompt for tasks
- Clear call-to-action

### Responsiveness

- Stack elements on narrow screens
- Reduce padding on mobile
- Touch-friendly targets (44px minimum)
- Swipe actions (left for delete, etc.)
