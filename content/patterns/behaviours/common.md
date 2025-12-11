---
title: Common
description: "Documentation for Common component"
---

# Common Behaviors

Common actions are the building blocks of user interaction—appearing consistently throughout the system. They let users create, remove, or navigate content efficiently while keeping the experience clear and predictable. Standardizing these actions ensures usability, consistency, and accessibility across all flows.

Need an exception? Document it on the relevant Confluence page and update the Figma file accordingly.

## 1. Save

### 1.1 Default Standard Behavior

In standard situations, keep the Save button active, even with empty or unfilled required fields. This lets users proceed and see error messages when they click Save, rather than wondering why a button is disabled.

**Why keep Save active:**
- Disabled buttons don't explain what's wrong
- Avoids showing errors prematurely
- Keeps interaction smooth
- Lets users discover validation issues naturally

### 1.2 Position and Hierarchy

The button must use the **primary variant** of buttons components and be positioned at the **bottom right** of modals or forms.

**Visual specifications:**
- Button variant: Primary
- Position: Bottom right
- Alignment: Right-aligned in footer/action area
- Gap: `8px` from Cancel or secondary actions

### 1.3 Naming

Choose the appropriate label based on context:

- **Save**: When the user is editing an item already created
- **Create**: When the user is creating a new item from scratch
- **Upload**: When the user is sending data for approval or processing rather than just saving it
- **Next**: When saving is part of a multi-step process rather than a final action
- **Submit**: When sending form data for review or processing

**Examples:**
```
Edit Patent Form → [Cancel] [Save]
New Application → [Cancel] [Create]
Document Upload → [Cancel] [Upload]
Step 2 of 4 → [Back] [Next]
```

## 2. Add Primary

### 2.1 Default Standard Behavior

When the Add button represents the **main action on a page**, it must always remain active. There are two possible variations:

- **Single item**: When the button is used to create only one type of item
- **Multiple items**: When multiple item types can be created from the same action (uses dropdown)

### 2.2 Position and Hierarchy

To maintain the prominence of this action, no other button should be placed directly next to it. The button must use the **primary variant** of the button components, positioned at the **top right of the page**.

**Visual specifications:**
- **Single item**: Include a plus (+) icon on the left side
- **Multiple items**: Include only a dropdown arrow (▾) on the right side to indicate additional options
- Position: Top right of page
- Alignment: Right-aligned in header/toolbar area

**Exception:** If there's a Save button on the page, the Save button must take priority and use the primary variant, while the Add button should be styled as a secondary button.

### 2.3 Naming

Choose the appropriate label based on context:

- **Create**: When the user is adding a new item
- **Generate**: When the user is generating data from existing system data
- **Upload**: When the user is adding external data or files to the system
- **Add**: Only when none of the options above fits and a more generic label is needed

**Examples:**
```
Patent List Page → [+ Create Patent]
Dashboard → [Generate Report ▾]
Documents → [+ Upload]
```

## 3. Add Secondary

### 3.1 Default Standard Behavior

This Add button is used **within sections of a page** rather than as the primary action. There are two possible variations:

- **Single item**: When the button is used to create only one type of item
- **Multiple items**: When multiple item types can be created from the same action

### 3.2 Position and Hierarchy

Since this action should not draw excessive attention, it must not use a solid button style. Instead, it is recommended to use either the **secondary button variant** or a **link-style button**, depending on the section's content.

**Position options:**
- **Bottom of content area**, aligned to the left
- **After section title**, aligned to the left (if layout is dense)

**Visual specifications:**
- **Single item**: Include a plus (+) icon on the left side
- **Multiple items**: Include only a dropdown arrow (▾) on the right side
- Button variant: Secondary or link-style
- Alignment: Left-aligned within section

### 3.3 Naming

Choose the appropriate label based on context:

- **Create**: When the user is adding a new item
- **Generate**: When the user is generating data from system data
- **Upload**: When the user is adding external data or files to the system
- **Add**: Only when none of the options above fits and a more generic label is needed

**Examples:**
```
Within Form Section:
┌────────────────────────────┐
│ Inventors                  │
├────────────────────────────┤
│ • John Doe                 │
│ • Jane Smith               │
│                            │
│ [+ Add Inventor]           │
└────────────────────────────┘
```

## 4. Cancel

### 4.1 Default Standard Behavior

The Cancel button allows users to exit a process without applying changes. It should always be available to provide an easy way to dismiss an action.

**Important:** If cancelling will trigger data loss or a destructive action, a confirmation modal should be displayed to ensure user intention before proceeding. See "Changes not saved modal" pattern.

### 4.2 Position and Hierarchy

The button should always be positioned to the **left of the primary action button** (e.g., Save or Delete). It should use the **link-style button** to reduce visual prominence.

**Visual specifications:**
- Button variant: Link-style (text-only)
- Position: Left of primary action
- Alignment: Left in action area
- Color: Neutral gray

### 4.3 Naming

Choose the appropriate label based on context:

- **Cancel**: When the user is exiting during the creation process or regretting a decision in a confirmation modal (e.g., deleting or updating data)
- **Discard changes**: When the user has made edits and wants to remove them before exiting

**Examples:**
```
New Item Modal → [Cancel] [Create]
Edit Form (modified) → [Discard changes] [Save]
Delete Confirmation → [Cancel] [Delete]
```

## 5. Close

### 5.1 Default Standard Behavior

The Close button allows users to exit a modal, panel, or overlay without explicitly confirming or canceling an action. It should always be available to provide an easy way to dismiss a view.

**Important:** If closing will trigger data loss or a destructive action, a confirmation modal should be displayed to ensure user intention before proceeding. See "Changes not saved modal" pattern.

### 5.2 Position and Hierarchy

The Close button should be represented by an **"×" icon** in the **top-right corner** of a modal or panel. It should use a neutral or icon-only button style to avoid visual competition with primary actions.

**Visual specifications:**
- Icon: × (close/times icon)
- Position: Top-right corner
- Size: `16px` icon, `32px` hit area minimum
- Style: Neutral gray icon button
- Hover: Darker gray

### 5.3 Naming

Only when needed for tooltips:

- **Close**: When the user is exiting a view, modal, or overlay without making or discarding changes
- **Dismiss**: When the action is removing a temporary notification, alert, or tooltip without further consequences

## 6. Clear

### 6.1 Default Standard Behavior

The Clear button allows users to reset or remove inputted data within a form, filter, or selection field.

**Context-dependent visibility:**
- **Inside components**: The button should only be visible when hovering or editing
- **Outside components**: The button should be always active by default, ensuring users can clear data at any time

In most cases, a confirmation modal is not needed.

### 6.2 Position and Hierarchy

It should use a **secondary button style** or an **icon-only button** (e.g., an "×" inside input fields) to minimize visual dominance. The Clear button should be positioned within or near the relevant input field or section to ensure contextual clarity.

**Important:** It must **not use the red color** to indicate this action, as it is not a destructive action.

**Visual specifications:**
- **Inside inputs**: × icon on the right side, appears on hover/focus
- **Filter sections**: Secondary button or link-style
- Color: Neutral gray (not red)
- Position: Near or within the content being cleared

### 6.3 Naming

Choose the appropriate label based on context:

- **Clear**: When resetting a single input field or removing a selection
- **Clear all**: When resetting all inputs in a section, form, or filters. "All" can be substituted for the specific topic when relevant (e.g., "Clear filters," "Clear form")

**Examples:**
```
Search Input: [Search text...     ×]

Filter Section: [Clear filters]

Form Section: [Clear all fields]
```

## 7. Remove

### 7.1 Default Standard Behavior

The Remove action allows users to discard an item without requiring an additional confirmation modal, as the item **does not yet exist in the system**. It can also be used to **unlink items**, breaking their relationship without deleting them.

**Note:** This functionality is closely aligned with the Clear action in our system. If a clearer distinction between Remove and Clear is needed in the future, we can use the minus (−) icon instead of the "×" icon to differentiate them.

### 7.2 Position and Hierarchy

It should be positioned next to or near the item being removed for contextual clarity. For most cases, use the **"×" icon** to indicate removal and simplify the flow. When removing multiple items, a "Remove All" option may be available within the section.

**Important:** It must **not use the red color** to indicate this action, as it is not a destructive action.

**Visual specifications:**
- Icon: × (or potentially − for distinction)
- Color: Neutral gray (not red)
- Position: Next to item being removed
- Style: Icon button or secondary button

### 7.3 Naming

Choose the appropriate label based on context:

- **Remove**: When discarding an unsaved item or removing tags
- **Unlink**: When removing an association between items without deleting them, keeping them available for future use

**Examples:**
```
Tag List: [Design ×] [Engineering ×] [Legal ×]

Related Items: [Unlink] button next to each item

Unsaved Attachments: [file.pdf ×] [Remove All]
```

## 8. Delete

### 8.1 Default Standard Behavior

The Delete action allows users to remove items from the system, either temporarily (recoverable) or permanently (irreversible), depending on the deletion type.

**All deletion actions must trigger a confirmation modal** to ensure the user is aware of the consequences. See "Confirm delete modal" pattern.

**Three types of deletion:**

1. **Soft Delete (Recoverable)**: Moves the item to a bin/trash, allowing qualified users to restore it later
2. **Hard Delete/Purge**: Permanently removes the item. Once deleted, it cannot be recovered. The confirmation modal must clearly warn the user.
3. **Critical Delete (with confirmation checkbox)**: Used for critical and high-impact deletions. The user must check a confirmation checkbox (e.g., "I understand this action is irreversible") before the Delete button becomes active in the modal.

**Confirmation modals:**
If the deleted item has dependencies or impacts other elements, the confirmation modal must include a summary of affected items before finalizing the action. It must be described on the relevant Confluence topic page and reflected in the corresponding Figma file.

### 8.2 Position and Hierarchy

To avoid drawing unnecessary attention, the Delete button must **not use a red variant in its default state**. It should only turn red in the final confirmation step when the user is about to complete the deletion.

**Position based on context:**
- **Inline items**: Should be grouped with other item-specific actions, maintaining a consistent placement (typically right side)
- **Full-page items**: When an item takes up an entire page, the Delete button should be positioned alongside other page-level actions, which are usually found in the top-right corner
- **Modals**: Should be placed in the opposite side of the save action, in this case on the **bottom left side**
- **Bulk operations**: When deleting multiple items, use action bar pattern (see Action Bar documentation)

Whenever possible, a trash-can icon should accompany the label to provide a quick visual reference for the action.

**Visual specifications:**
- Default state: Secondary button with trash icon
- Color: Neutral gray (not red)
- Confirmation modal: Primary button turns red
- Icon: 🗑️ trash can icon

### 8.3 Naming

Choose the appropriate label based on context:

- **Delete**: Moves the item to a recoverable bin
- **Delete permanently**: Completely and permanently purges the item from the system
- **Purge**: Alternative term for permanent deletion (typically for technical contexts)

### 8.4 Delete Workflows

#### Single Item Delete (Soft Delete)

**Flow:**
1. User clicks Delete button/action
2. Confirmation modal appears
3. User confirms deletion
4. Item moves to trash/bin
5. Success notification shows with "Undo" option (5 seconds)
6. Item can be restored from trash within retention period (e.g., 30 days)

**Example:**
```
Table Row Actions: [Edit] [🗑️ Delete]

Confirmation Modal (recoverable):
┌────────────────────────────────────┐
│ Delete Patent Application?    [×]  │
├────────────────────────────────────┤
│ This patent will be moved to the   │
│ trash. You can restore it within   │
│ 30 days.                           │
│                                    │
│ Patent #12345 - AI-Powered Device  │
├────────────────────────────────────┤
│ [Cancel]              [Delete]     │
└────────────────────────────────────┘

Success Notification:
┌────────────────────────────────────┐
│ ✓ Patent deleted successfully      │
│   [Undo]                      [×]  │
└────────────────────────────────────┘
```

#### Single Item Purge (Hard Delete)

**Flow:**
1. User clicks Delete permanently/Purge button
2. Warning modal appears with irreversibility notice
3. User must acknowledge via checkbox (for critical items)
4. User confirms purge
5. Item permanently deleted
6. Success notification (no undo option)

**Example:**
```
Confirmation Modal (permanent):
┌────────────────────────────────────┐
│ Delete Permanently?           [×]  │
├────────────────────────────────────┤
│ ⚠️ This action cannot be undone.   │
│                                    │
│ Patent #12345 will be permanently  │
│ deleted from the system. All       │
│ associated data will be lost.      │
│                                    │
│ ☐ I understand this action is     │
│   irreversible                     │
├────────────────────────────────────┤
│ [Cancel]      [Delete Permanently] │
│               ↑ (Red, disabled     │
│                  until checked)    │
└────────────────────────────────────┘
```

#### Bulk Delete (Multiple Items)

**Flow:**
1. User selects multiple items (checkboxes)
2. Action bar appears showing selection count
3. User clicks "Delete" in action bar
4. Bulk confirmation modal appears
5. Modal shows count and summary of items
6. User confirms deletion
7. Items moved to trash/purged
8. Success notification shows total deleted

**Example:**
```
Action Bar (with selection):
┌────────────────────────────────────┐
│ 5 items selected                   │
│ [Cancel] [Export] [Delete]         │
└────────────────────────────────────┘

Bulk Delete Confirmation:
┌────────────────────────────────────┐
│ Delete 5 Patents?             [×]  │
├────────────────────────────────────┤
│ These patents will be moved to the │
│ trash and can be restored within   │
│ 30 days:                           │
│                                    │
│ • US2024-12345 - AI Device         │
│ • US2024-12346 - Widget System     │
│ • US2024-12347 - Method Patent     │
│ • ...and 2 more                    │
├────────────────────────────────────┤
│ [Cancel]              [Delete]     │
└────────────────────────────────────┘
```

#### Delete with Dependencies

**Flow:**
1. User attempts to delete item with dependencies
2. Confirmation modal shows impact analysis
3. Modal lists affected items/relationships
4. User chooses action:
   - Cancel deletion
   - Delete anyway (breaks relationships)
   - Cascade delete (delete dependencies too)
5. Additional confirmation for cascade delete
6. Items deleted based on choice

**Example:**
```
Delete with Dependencies:
┌────────────────────────────────────┐
│ Delete Patent Application?    [×]  │
├────────────────────────────────────┤
│ ⚠️ This patent has dependencies:   │
│                                    │
│ • 3 related documents              │
│ • 2 linked trademarks              │
│ • 5 family members                 │
│                                    │
│ What would you like to do?         │
│                                    │
│ ○ Delete only this patent          │
│   (relationships will be removed)  │
│                                    │
│ ○ Delete patent and documents      │
│   (keeps trademarks & family)      │
│                                    │
│ ○ Keep everything (cancel)         │
├────────────────────────────────────┤
│ [Cancel]              [Continue]   │
└────────────────────────────────────┘
```

#### Cascade Delete Confirmation

For critical cascade operations, a second confirmation is required:

```
┌────────────────────────────────────┐
│ Confirm Cascade Delete?       [×]  │
├────────────────────────────────────┤
│ ⚠️ You are about to delete:        │
│                                    │
│ • 1 patent application             │
│ • 3 related documents              │
│ • Total: 4 items                   │
│                                    │
│ This will move all items to trash  │
│ where they can be restored within  │
│ 30 days.                           │
│                                    │
│ Type DELETE to confirm:            │
│ [____________________________]     │
├────────────────────────────────────┤
│ [Cancel]              [Delete All] │
│                       ↑ (disabled  │
│                          until     │
│                          typed)    │
└────────────────────────────────────┘
```

### 8.5 Purge from Trash

Items in trash can be permanently purged after review period or manually by authorized users.

**Flow:**
1. User navigates to Trash/Bin
2. User selects items to purge
3. User clicks "Purge" or "Delete permanently"
4. Confirmation modal with warning
5. Items permanently deleted

**Example:**
```
Trash View:
┌────────────────────────────────────┐
│ Trash (12 items)                   │
│ Items will be auto-deleted after   │
│ 30 days                            │
├────────────────────────────────────┤
│ ☐ Patent #12345 (Deleted 5d ago)  │
│ ☐ Patent #12346 (Deleted 12d ago) │
│ ☐ Patent #12347 (Deleted 28d ago) │
├────────────────────────────────────┤
│ [Restore Selected] [Purge Selected]│
└────────────────────────────────────┘

Purge Confirmation:
┌────────────────────────────────────┐
│ Purge 3 Items Permanently?    [×]  │
├────────────────────────────────────┤
│ ⚠️ This action cannot be undone.   │
│                                    │
│ These items will be permanently    │
│ deleted and cannot be recovered:   │
│                                    │
│ • Patent #12345                    │
│ • Patent #12346                    │
│ • Patent #12347                    │
│                                    │
│ ☐ I understand these items will be│
│   permanently deleted              │
├────────────────────────────────────┤
│ [Cancel]         [Purge Permanently]│
└────────────────────────────────────┘
```

### 8.6 Soft Delete vs Hard Delete Decision Matrix

| Context | Delete Type | Confirmation | Undo | Retention |
|---------|-------------|--------------|------|-----------|
| User-created content | Soft Delete | Simple modal | Yes, 5s | 30 days |
| Draft/unsaved items | Hard Delete | Optional | No | N/A |
| System-critical data | Soft Delete | With checkbox | Yes, 5s | 90 days |
| Personal user data (GDPR) | Hard Delete | With checkbox + typing | No | N/A |
| Bulk operations (< 10) | Soft Delete | Simple modal | Yes, 5s | 30 days |
| Bulk operations (≥ 10) | Soft Delete | With count + typing | Yes, 5s | 30 days |
| Items with dependencies | Soft Delete | With impact analysis | Yes, 5s | 30 days |
| Trash/Bin purge | Hard Delete | With checkbox | No | N/A |

### 8.7 Best Practices for Delete/Purge

**Do:**
- Always show confirmation modals for destructive actions
- Use soft delete by default for user-created content
- Provide undo option for 5 seconds after deletion
- Show clear impact analysis for items with dependencies
- Use red color only in final confirmation step
- Display success notifications after completion
- Maintain consistent retention periods (e.g., 30 days)
- Require additional confirmation (checkbox/typing) for critical deletes
- Show count and summary for bulk operations
- Provide restore functionality for soft-deleted items

**Don't:**
- Delete without confirmation
- Use red buttons in default state
- Allow permanent deletion without clear warnings
- Hide dependencies or impact from users
- Skip confirmation for bulk operations
- Forget to provide undo for soft deletes
- Use unclear language ("Remove" vs "Delete" vs "Purge")
- Allow deletion of items currently in use
- Forget to clean up related data in cascade scenarios
- Skip logging for audit trails

### 8.8 Related Patterns

- **[Action Bar](./action-bar.md)** - Bulk delete operations
- **[Modal](./modal.md)** - Confirmation dialog patterns
- **[Notification](./notification.md)** - Delete success/error feedback
- **[Table](./table.md)** - Row-level delete actions

## Best Practices

### Consistency

- Use the same action names and button styles throughout the application
- Position buttons in predictable locations
- Maintain visual hierarchy (primary vs secondary actions)

### Accessibility

- All buttons must have clear labels
- Icon-only buttons need descriptive labels
- Maintain minimum touch target sizes (44×44px)
- Provide keyboard navigation support
- Include focus indicators

### Feedback

- Show loading states during async operations
- Provide confirmation for destructive actions
- Display success/error notifications after actions complete
- Use appropriate animation timings (150-300ms)

### Error Prevention

- Keep action buttons active to allow validation
- Show clear error messages on submit
- Require confirmation for destructive actions
- Provide undo options when appropriate
