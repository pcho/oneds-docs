## Description

Action Bar provides bulk actions for selected items in tables or lists, letting users perform operations on multiple items at once. Instead of tedious one-by-one actions, it empowers users to edit, delete, export, or manage selections efficiently—transforming repetitive tasks into single-click operations.

## Anatomy

1. **Selection Counter** - Displays count of selected items
2. **Action Buttons** - Primary action buttons (max 3-4 visible)
3. **More Actions Dropdown** - Overflow menu for additional actions (optional)
4. **Clear Selection** - Button to deselect all items (optional)
5. **Container** - Background bar that appears on selection

## Specification

**Action Bar Container:**
- **Height**: `56px`
- **Background**: Light blue (`#EDF1FF`)
- **Border**: `1px solid #7CD4FD`
- **Border Radius**: `8px`
- **Padding**: `12px 16px`
- **Layout**: Horizontal row, space-between
- **Position**: Sticky (top of table/list) or inline

**Selection Counter:**
- **Font Size**: `14px`
- **Font Weight**: 500 (medium)
- **Color**: Primary text (`#2A353F`)
- **Format**: "X items selected" or "X of Y selected"

**Action Buttons:**
- **Type**: Secondary buttons
- **Height**: `32px` (compact)
- **Padding**: `6px 12px`
- **Gap**: `8px` between buttons
- **Max Visible**: 3-4 buttons
- **Overflow**: "More" dropdown for additional actions

**More Actions Dropdown:**
- **Trigger**: "More" button or ellipsis (⋯)
- **Style**: Secondary button
- **Dropdown**: Standard dropdown menu
- **Position**: Right-aligned

**Responsive Behavior:**
- **Desktop**: Show 3-4 buttons + More
- **Tablet**: Show 2-3 buttons + More
- **Mobile**: Show 1-2 buttons + More
- Single line layout maintained

## Do

- Show action bar only when items are selected
- Display clear selection count
- Use secondary buttons for actions
- Limit visible actions to 3-4 buttons
- Group related actions in "More" dropdown
- Provide "Clear selection" option
- Keep actions relevant to selected items
- Maintain single-line layout
- Show loading states during bulk operations

## Don't

- Don't show more than 4 actions inline
- Don't use primary buttons (use secondary)
- Don't stretch action bar on larger screens
- Don't hide selection count
- Don't forget loading states
- Don't allow actions without selections
- Don't forget confirmation for destructive actions
- Don't wrap actions to multiple lines

## Uses

**Primary Use Cases:**

1. **Bulk Delete** - Remove multiple items
2. **Bulk Edit** - Update multiple records
3. **Bulk Export** - Download selected data
4. **Bulk Move** - Relocate multiple items
5. **Bulk Archive** - Archive multiple records
6. **Bulk Assign** - Assign to users/categories
7. **Bulk Tag** - Add tags to multiple items
8. **Bulk Status Change** - Update status

**Example Scenarios:**

**Table with Selections:**
```
┌────────────────────────────────────────────┐
│ 3 items selected                           │
│ [Edit] [Delete] [Export] [More ▾]    [×]  │
└────────────────────────────────────────────┘

☑ Patent #12345  |  Filed  |  2024-01-15
☑ Patent #12346  |  Review |  2024-01-20
☑ Patent #12347  |  Filed  |  2024-02-01
☐ Patent #12348  |  Draft  |  2024-02-10
```

**With More Actions:**
```
5 items selected
[Archive] [Export] [Assign] [More ▾]

More dropdown:
  • Move to folder
  • Add tags
  • Change status
  • Send notification
```

**Loading State:**
```
3 items selected
[⟳ Deleting...] [Export] [More ▾]
```

## Behavior

For detailed behavior patterns, including appearance, actions, dismissal, and selection management, see the **[Action Bar Behavior Patterns](../patterns/behaviours/action-bar.md)** documentation.

## Accessibility

**Semantic HTML:**
```html
<div
  role="region"
  aria-label="Bulk actions"
  class="action-bar">

  <div class="selection-info">
    <span id="selection-count">3 items selected</span>
    <button
      aria-label="Clear selection"
      aria-describedby="selection-count">
      ×
    </button>
  </div>

  <div class="actions" role="toolbar">
    <button>Edit</button>
    <button>Delete</button>
    <button>Export</button>
    <button aria-haspopup="true" aria-expanded="false">
      More
    </button>
  </div>
</div>
```

**ARIA Attributes:**
- `role="region"` on action bar container
- `role="toolbar"` on actions group
- `aria-label` describes action bar purpose
- `aria-live="polite"` for selection count updates
- `aria-describedby` links actions to selection count

**Keyboard Navigation:**
- `Tab` - Move between action buttons
- `Enter/Space` - Activate action
- `Escape` - Clear selection, dismiss bar
- `Arrow keys` - Navigate toolbar buttons

**Screen Reader Support:**
- Announce when action bar appears
- Read selection count: "3 items selected"
- Announce action button labels clearly
- Announce confirmation dialogs
- Announce action results
- Announce loading states

**Focus Management:**
- Focus moves to action bar on appearance (optional)
- Focus on first action button
- Trap focus within confirmation dialog
- Return focus to table after action
- Clear focus indicator

**Announcements:**
```html
<div aria-live="polite" aria-atomic="true">
  3 items selected
</div>

<div role="status" aria-live="polite">
  Deleting 3 items...
</div>

<div role="alert">
  Successfully deleted 3 items
</div>
```

**Color & Contrast:**
- Action bar background meets contrast
- Text meets 4.5:1 contrast
- Button states clearly distinguishable
- Focus indicators visible
- Don't rely on color alone

**Touch Targets:**
- Buttons minimum 44×44px
- Adequate spacing between actions
- Clear selection button large enough
- Dropdown trigger sufficient size

**Responsive:**
- Simplify on mobile (fewer buttons)
- Maintain touch targets
- Stack vertically if needed (avoid)
- Prioritize most important actions
- Always show "More" on small screens

**Loading States:**
- Disable buttons during action
- Show spinner on active button
- `aria-busy="true"` during loading
- Announce completion to screen readers

**Error Handling:**
- Clear error messages
- `role="alert"` for errors
- Don't clear selection on error
- Provide retry option
- Explain what failed

**Confirmation Dialogs:**
- Modal dialog for destructive actions
- Clear warning message
- Focus on cancel button (safe default)
- Keyboard accessible
- Screen reader announces content
