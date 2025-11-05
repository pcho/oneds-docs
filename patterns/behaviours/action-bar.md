# Action Bar Behaviors

The action bar is a contextual toolbar that appears when users select one or more items, providing bulk actions for managing multiple items simultaneously. Understanding its behavior patterns ensures consistent implementation across tables, lists, and card grids.

## Core Concept

Action bars are temporary UI elements that:
- Appear only when items are selected
- Provide bulk actions for selected items
- Display selection count and status
- Offer quick access to common multi-item operations
- Dismiss when selection is cleared or action completes

## Appearance Behavior

### Triggering Display

**On Selection:**
1. User selects one or more items (checkbox, row click)
2. Action bar slides in or appears from top
3. Selection count displays prominently
4. Action buttons become active and visible
5. Focus moves to action bar (optional, for accessibility)

**Animation Specifications:**
- **Slide down from top**: 300ms duration
- **Fade in**: 200ms duration
- **Easing**: Ease-out curve
- **Simultaneous**: Slide and fade occur together

### Visual States

**Initial State (No Selection):**
- Action bar hidden or collapsed
- Not present in DOM (or hidden with `display: none`)
- No space reserved in layout

**Active State (Items Selected):**
- Action bar fully visible
- Positioned at top of list/table or floating
- Background color distinguishable from content
- Shadow/elevation to appear above content
- Clear visual hierarchy

**Loading State:**
- Appears during bulk action execution
- Shows spinner on executing action button
- Disables other action buttons during processing
- Selection count remains visible
- Progress indicator optional (for long operations)

## Action Execution

### Performing Bulk Actions

**Standard Flow:**
1. User clicks action button (e.g., Delete, Export, Archive)
2. Confirmation modal shown if action is destructive
3. Loading state appears on button
4. Action executes on all selected items
5. Success/error feedback provided (notification/toast)
6. Selection either cleared or maintained (context-dependent)
7. Action bar updates count or dismisses

**Destructive Actions:**
- **Always require confirmation**: Delete, Remove, Purge operations
- **Show affected count**: "Delete 15 items?" not just "Delete?"
- **Explain consequences**: "This action cannot be undone"
- **Provide cancel option**: Easy way to back out
- **Use appropriate button color**: Red for destructive in confirmation

**Example Confirmation Dialog:**
```
┌─────────────────────────────────────┐
│ Delete 15 patents?            [×]   │
├─────────────────────────────────────┤
│                                     │
│ ⚠️ This action cannot be undone.    │
│                                     │
│ These 15 patent applications will   │
│ be permanently deleted:             │
│ • US2024-12345                      │
│ • US2024-12346                      │
│ • ... and 13 more                   │
│                                     │
├─────────────────────────────────────┤
│ [Delete]                  [Cancel]  │
└─────────────────────────────────────┘
```

**Non-Destructive Actions:**
- May execute immediately (Export, Download)
- Optional inline confirmation
- Progress feedback for long operations
- Success notification on completion

### Action Results

**Successful Completion:**
- Clear selection automatically
- Hide action bar (slide up/fade out)
- Show success notification
- Update list/table to reflect changes
- Return focus to list

**Error Handling:**
- Maintain selection (don't clear)
- Keep action bar visible
- Show error notification with details
- Allow retry or individual review
- Log errors for debugging

**Partial Success:**
- Update selection count (remove successful items)
- Keep action bar visible
- Show notification: "5 of 15 items deleted. 10 failed."
- Provide option to review failures
- Offer retry for failed items

## Dismissing Behavior

### Clear Selection Methods

**Manual Dismissal:**
- Click × button in action bar
- Click "Clear selection" link/button
- Action bar slides up/fades out (300ms)
- All items deselected
- Table/list returns to normal state
- Focus returns to content area

**After Action Completion:**
- **Successful action**: Auto-clear selection, hide bar
- **Error**: Maintain selection, show error, keep bar visible
- **Partial success**: Update count, keep bar for failed items

**Navigation Away:**
- User navigates to different page
- Selection state may persist (context-dependent)
- Or clear selection on navigation
- Document expected behavior clearly

### Keyboard Dismissal

- `Escape` key clears selection and closes action bar
- Works from anywhere in interface when bar is active
- Focus returns to last focused element or first selected item

## Selection Management

### Selection Counter Display

**Counter Formats:**
- **Few items**: "3 items selected"
- **Many items**: "127 items selected"
- **All visible**: "All 50 items on this page selected"
- **All total**: "All 1,247 items selected"

**Real-Time Updates:**
- Counter updates immediately on selection change
- Smooth number transitions (count up/down)
- Never shows "0 items selected" (bar should hide)

### Select All Behavior

**Partial Selection (Some Items):**
```
┌────────────────────────────────────────────────┐
│ 3 of 100 items selected                        │
│ Select all 100 items | Clear selection         │
└────────────────────────────────────────────────┘
```

**Select All Clicked:**
1. Checkbox states update (all checked)
2. Counter updates: "All 100 items selected"
3. Action bar remains visible
4. Select all link changes to "Clear all"

**Clear All Clicked:**
1. All checkboxes deselected
2. Action bar dismisses
3. Focus returns to content

### Pagination and Selection

**Single Page Selection:**
- Standard behavior: Select items on current page
- Action applies only to selected items
- Clear on page change (default)

**Cross-Page Selection:**
- Advanced feature: Maintain selection across pages
- Visual indicator: "3 items selected across all pages"
- Option to "Select all X items" (all pages)
- Clear indicator of total selection

## Position and Layout

### Positioning Options

**Fixed Top:**
- Positioned at top of viewport
- Stays visible during scroll
- Overlays page content
- Most common for tables

**Inline Above Content:**
- Positioned directly above table/list
- Pushes content down when appears
- Scrolls with content
- Good for contained areas

**Floating:**
- Floats above content with elevation
- Positioned near selected items
- May follow scroll (sticky)
- Used in card grids

### Layout Structure

**Left Section:**
- Selection counter
- "Clear selection" action

**Center Section (Optional):**
- Quick filters for selected items
- Selection summary info

**Right Section:**
- Primary action buttons
- More actions menu (overflow)
- Close/dismiss button

## Action Button Guidelines

### Button Priority

**Primary Actions (1-3 buttons):**
- Most common bulk operations
- Prominently visible
- Example: Delete, Archive, Export

**Secondary Actions (overflow menu):**
- Less common operations
- Hidden in "More" dropdown
- Example: Change owner, Add tags, Move to folder

### Button States

**Enabled:**
- Action can be performed
- Default interactive state
- Clear hover/active states

**Disabled:**
- Action not applicable to selection
- Grayed out with tooltip explaining why
- Example: "Download" disabled if files are processing

**Loading:**
- Action in progress
- Spinner replaces button text or icon
- Other buttons disabled during execution

## Responsive Behavior

### Desktop (>1024px)
- Full action bar with all buttons
- Horizontal layout
- Counter on left, actions on right

### Tablet (768px - 1024px)
- Condensed action bar
- Key actions visible, others in menu
- May wrap to two rows if needed

### Mobile (<768px)
- Minimal action bar
- Counter + overflow menu
- Fixed at bottom of screen (recommended)
- Full-width buttons in menu

**Mobile Bottom Sheet:**
```
┌─────────────────────────┐
│        [Handle]         │
├─────────────────────────┤
│ 3 items selected        │
├─────────────────────────┤
│ [Delete]                │
│ [Archive]               │
│ [Export]                │
│ [More actions...]       │
├─────────────────────────┤
│ [Clear selection]       │
└─────────────────────────┘
```

## Best Practices

### Do
- Always show clear selection count
- Provide confirmation for destructive actions
- Give feedback on action results
- Make dismissal easy and obvious
- Support keyboard interactions
- Show loading states for async actions
- Maintain focus management

### Don't
- Don't hide the selection counter
- Don't execute destructive actions without confirmation
- Don't forget to handle errors gracefully
- Don't leave action bar visible after completion (unless error)
- Don't make action bar difficult to dismiss
- Don't forget about keyboard users

## Accessibility

### Screen Reader Support
- Announce when action bar appears
- Read selection count changes
- Announce action results
- Provide clear labels for all buttons

### Keyboard Navigation
- Full keyboard support required
- Tab through action buttons
- Escape to dismiss
- Enter/Space to execute actions
- Focus trap not needed (unlike modal)

### Focus Management
- Optional: Move focus to action bar on appearance
- Or: Maintain focus on selected item
- Return focus appropriately on dismissal
- Announce to screen readers

## Related Patterns

The action bar works closely with other patterns:

- **[Table](./table.md)** - Primary use case for bulk operations on table rows
- **[Common Actions](./common.md)** - Delete, export, and other action behaviors
- **[Modal](./modal.md)** - Confirmation dialogs for destructive bulk actions
- **[Notification](./notification.md)** - Success/error feedback after bulk operations
- **[Filtering](./filtering.md)** - May be used to filter selected items before action

## Common Use Cases

### Bulk Delete
Most common destructive bulk action:
```
Flow:
1. Select 5 items
2. Action bar appears: "5 items selected [Delete]"
3. Click Delete
4. Confirmation modal: "Delete 5 patents?"
5. Confirm deletion
6. Loading state on Delete button
7. Items removed from list
8. Success notification: "5 patents deleted"
9. Action bar dismisses
```
See **[Common Actions](./common.md#8-delete)** for delete pattern details.

### Bulk Export
Non-destructive bulk action:
```
Flow:
1. Select 10 items
2. Action bar appears: "10 items selected [Export]"
3. Click Export
4. Optional: Export format modal
5. Loading state: "Generating export..."
6. Download starts
7. Success notification: "10 items exported"
8. Selection cleared, action bar dismisses
```

### Bulk Status Change
Inline bulk update:
```
Flow:
1. Select 8 items
2. Action bar: "8 items selected [Change Status ▼]"
3. Click dropdown
4. Select new status: "Approved"
5. Optional confirmation: "Change status for 8 items?"
6. Status updates
7. Success: "8 items updated to Approved"
8. Action bar dismisses
```

### Bulk Assign
Assignment operation:
```
Flow:
1. Select 12 items
2. Action bar: "12 items selected [Assign]"
3. Click Assign
4. Modal opens with user selector
5. Select assignee: "John Doe"
6. Confirm assignment
7. Loading state
8. Items updated with new assignee
9. Success: "12 items assigned to John Doe"
10. Action bar dismisses
```

### Select All Across Pages
Advanced selection pattern:
```
Initial: 25 of 250 items selected (on page 1)
┌────────────────────────────────────────────────┐
│ 25 items selected                              │
│ [Select all 250 items] [Clear]                 │
└────────────────────────────────────────────────┘

After clicking "Select all 250 items":
┌────────────────────────────────────────────────┐
│ All 250 items selected                         │
│ [Clear selection]                              │
│ [Delete] [Export] [Assign] [More ▼]           │
└────────────────────────────────────────────────┘
```

## Best Practices Summary

### Design:
- Show action bar immediately on first selection
- Position consistently (top or bottom, not both)
- Make selection count prominent and clear
- Group related actions together
- Limit primary actions to 3-4 most common operations
- Use overflow menu for less common actions
- Apply appropriate visual hierarchy
- Match brand colors and styles

### Behavior:
- Update count in real-time as selection changes
- Hide bar when selection cleared or action completes (success)
- Keep bar visible on errors to allow retry
- Provide clear success/error feedback
- Support both mouse and keyboard interactions
- Maintain consistent animation timing
- Handle partial successes gracefully

### Actions:
- Always confirm destructive actions
- Show what will be affected in confirmation
- Display loading states during execution
- Disable other actions while one executes
- Provide meaningful error messages
- Allow retry on failure
- Log operations for audit trail

### Accessibility:
- Announce appearance and count to screen readers
- Support full keyboard navigation
- Manage focus appropriately
- Provide clear ARIA labels
- Don't trap focus (unlike modals)
- Support standard keyboard shortcuts

## Implementation Checklist

- [ ] Action bar appears on first item selection
- [ ] Selection counter displays and updates in real-time
- [ ] Primary actions clearly visible
- [ ] Destructive actions require confirmation
- [ ] Loading states shown during execution
- [ ] Success/error feedback provided
- [ ] Action bar dismisses appropriately
- [ ] Clear selection button works
- [ ] Escape key dismisses action bar
- [ ] Responsive on mobile (bottom sheet or adapted layout)
- [ ] Screen reader announces count and state changes
- [ ] Keyboard navigation fully supported
- [ ] Focus management works correctly
- [ ] Related patterns referenced correctly
- [ ] Confirmation modals match pattern guidelines
- [ ] Error handling implemented for partial failures
