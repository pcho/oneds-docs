## Description

List displays a collection of items in a structured, scannable format. From simple text lists to complex task management interfaces, lists organize information vertically with consistent spacing and optional interactive elements. They're the backbone of many interfaces—tables, search results, navigation menus, and to-do lists all rely on well-designed list components.

Think of lists as your content's organizational structure—making large amounts of information digestible and actionable.

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
- **Gap**: `2px` between items
- **Sizing**: Fixed width, hug height

### List Item

**Dimensions:**
- **Width**: `433px` (matches container)
- **Padding**: `6px 8px`
- **Gap**: `8px` between elements
- **Border Radius**: `6px`

**Layout:**
- **Mode**: Horizontal row
- **Gap**: `8px`
- **Background**: Transparent (`rgba(255,255,255,0)`)
- **Hover**: Light background (e.g., `#F4F6F8`)

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
- **Gap**: `12px`
- **Padding**: `4px 8px`
- **Border Radius**: `6px`
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

- Use consistent spacing between all list items
- Provide hover states for interactive lists
- Show clear visual feedback on selection
- Use appropriate leading elements (icons, avatars, checkboxes)
- Maintain consistent alignment throughout the list
- Support keyboard navigation (arrow keys)
- Implement infinite scroll or pagination for long lists
- Show loading states for dynamic content

## Don't

- Don't make list items too tall—keep them scannable
- Don't forget hover states on interactive lists
- Don't use inconsistent spacing between items
- Don't overcrowd items with too much information
- Don't forget to handle empty states
- Don't make clickable areas unclear
- Don't nest lists more than 3 levels deep without visual aids

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
1. User hovers over item
2. Drag handle appears
3. User clicks and drags
4. Visual indicator shows drop position
5. Release to reorder

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

- Icon + message when list is empty
- "No results found" for searches
- "Get started" prompt for task lists
- Clear call-to-action button

### Responsiveness

- Stack leading/trailing elements on narrow screens
- Reduce padding on mobile
- Touch-friendly targets (44×44px minimum)
- Swipe actions on mobile (swipe left for delete, etc.)

## Accessibility

**Keyboard Navigation:**
- `Arrow Up/Down` - Navigate list items
- `Home` - Jump to first item
- `End` - Jump to last item
- `Enter` - Activate item
- `Space` - Toggle selection/checkbox
- `Tab` - Move through interactive elements
- Type-ahead search (type to filter)

**Screen Reader Support:**
- Use semantic list markup (`<ul>`, `<ol>`, `<li>`)
- Announce list size: "List with 12 items"
- Announce position: "Item 3 of 12"
- Selected items announced: "Selected"
- Task status announced: "Checked" or "Unchecked"
- Nested level announced: "Level 2, indented"

**ARIA Attributes:**
```html
<ul role="list">
  <li role="listitem" aria-setsize="12" aria-posinset="1">
    <input type="checkbox" aria-label="Mark task complete">
    <span>Review patent claims</span>
  </li>
</ul>
```

**Selection Management:**
- `aria-selected="true"` on selected items
- `aria-multiselectable="true"` for multi-select lists
- Live region announces selection changes

**Focus Management:**
- Clear focus indicators
- Focus visible on all items
- Focus moves with arrow keys
- Focus trap within modal lists

**Task Lists:**
- Checkbox accessible via keyboard
- Status changes announced
- Completed tasks announced: "Task marked complete"
- Support undo action

**Color & Contrast:**
- Text meets WCAG AA (4.5:1 minimum)
- Selected state distinguishable without color alone
- Use icon + color for status
- Focus indicators 3:1 contrast minimum

**Touch Targets:**
- Minimum 44×44px touch target
- Sufficient spacing between items
- Swipe gestures optional, not required
- Alternative controls for all gestures

**Loading & Updates:**
- Announce loading: "Loading more items"
- Announce updates: "3 new items added"
- Use aria-live for dynamic updates
- Don't announce every item in rapid updates
