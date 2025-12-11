---
title: Action Bar
description: "Documentation for Action Bar component"
---

## Description

The Action Bar delivers bulk actions for selected items in tables or lists. Instead of tedious one-by-one operations, it lets users edit, delete, export, or manage multiple items at once—turning repetitive tasks into single-click wins.

## Anatomy

1. **Selection Counter** - Displays count of selected items
2. **Action Buttons** - Primary action buttons (max 3-4 visible)
3. **More Actions Dropdown** - Overflow menu for additional actions (optional)
4. **Clear Selection** - Button to deselect all items (optional)
5. **Container** - Background bar that appears on selection

## Specification

**Action Bar Container:**
- **Height**: `56px`
- **Background**: `--bg-surface-brand-lighter`
- **Border**: `--border-brand-normal`
- **Border Radius**: `radius-medium`
- **Padding**: `spacing-3 spacing-4`
- **Layout**: Horizontal row, space-between
- **Position**: Sticky (top of table/list) or inline

**Selection Counter:**
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-emphasized`
- **Color**: `--text-normal`
- **Format**: "X items selected" or "X of Y selected"

**Action Buttons:**
- **Type**: Secondary buttons
- **Height**: `32px` (compact)
- **Padding**: `spacing-1.5 spacing-3`
- **Gap**: `spacing-2` between buttons
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

- Show the action bar only when items are selected
- Display a clear selection count
- Use secondary buttons for all actions
- Limit visible actions to 3-4 buttons max
- Group extra actions in a "More" dropdown
- Provide a "Clear selection" option
- Keep actions relevant to what's selected
- Stick to a single-line layout
- Show loading states during bulk operations

## Don't

- Show more than 4 actions inline
- Use primary buttons (secondary only)
- Stretch the action bar on larger screens
- Hide the selection count
- Forget loading states
- Enable actions without selections
- Skip confirmation for destructive actions
- Wrap actions to multiple lines

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

## Behavior

For detailed behavior patterns, including appearance, actions, dismissal, and selection management, see the **[Action Bar Behavior Patterns](../patterns/behaviours/action-bar.md)** documentation.
