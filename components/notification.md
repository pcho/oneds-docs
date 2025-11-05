## Description

Notifications (Toasts) are unobtrusive messages that appear in the interface, offering quick feedback on the outcome of an action. They slide in, deliver their message, and gracefully disappear—perfect for confirmations, updates, and non-critical alerts that don't interrupt the user's flow.

## Anatomy

1. **Type Icon**: Indicates the status type of the alert.
2. **Title**: A short and descriptive title.
3. **Dismiss Button**: Allows users to dismiss the alert.
4. **Description (optional)**: Provides additional context if needed.
5. **Action (optional)**: A single text action that users can take based on the toast content.

## Specification

**Notification Container:**
- **Width**: `360px` (default)
- **Padding**: `16px`
- **Border Radius**: `8px`
- **Border**: `1px solid` (varies by type)
- **Shadow**: Medium elevation
- **Position**: Top-right corner of viewport
- **Gap**: `12px` between icon, content, buttons

**Auto-Dismiss:**
- **Duration**: 5 seconds (default)
- **Pause on Hover**: Stays visible while hovering
- **Manual Dismiss**: Click × button

**Stacking:**
- Multiple notifications stack vertically
- Gap: `12px` between notifications
- Newest on top or bottom (configurable)

**Status Types:**

**Default:**
- **Icon**: ℹ️ Info circle
- **Icon Color**: Gray (`#7E8A96`)
- **Background**: White (`#FFFFFF`)
- **Border**: Gray (`#D1D6DB`)
- **Use**: Offer non-essential information that may or may not require user action

**Information:**
- **Icon**: ℹ️ Info circle
- **Icon Color**: Blue (`#0BA5EC`)
- **Background**: Light cyan (`#F0F9FF`)
- **Border**: Cyan (`#7CD4FD`)
- **Use**: Provide additional context or details about the current action the user is about to take

**Success:**
- **Icon**: ✓ Checkmark
- **Icon Color**: Green (`#17B26A`)
- **Background**: Light green (`#ECFDF3`)
- **Border**: Green (`#A9EFC5`)
- **Use**: Confirm to the user that a previous action they took, often in a different part of the application, was successful

**Warning:**
- **Icon**: ⚠ Warning
- **Icon Color**: Orange (`#F79009`)
- **Background**: Light yellow (`#FFFAEB`)
- **Border**: Yellow (`#FEDF89`)
- **Use**: Alert the user that their attention or action may be needed, but it is not critical

**Error:**
- **Icon**: ⊗ Error circle
- **Icon Color**: Red (`#F04438`)
- **Background**: Light red (`#FEF3F2`)
- **Border**: Red (`#FECDCA`)
- **Use**: Notify the user that their immediate attention is required for a critical issue related to the current context

## Do

- Use a toast for confirming user actions and providing temporary status updates.
- Reaffirm to the user that a prior action, likely in a different location or context, has been successful.
- Use the error variant only for systemic errors, such as no internet connection or database connection issues. For other scenarios, integrate error messages within the relevant context using patterns from other components.

## Don’t

- Avoid using toasts for critical messages since they are temporary and easily overlooked. Keep them short and use the Alert component for important notifications.

## Uses

**Primary Use Cases:**

1. **Action Confirmation** - "Patent saved successfully"
2. **Progress Updates** - "Upload complete"
3. **System Messages** - "Connection restored"
4. **Undo Actions** - "Item deleted" with Undo button
5. **Background Tasks** - "Export ready for download"
6. **Errors** - "Failed to save changes"
7. **Warnings** - "Session expiring soon"

**Example Scenarios:**

**Success Notification:**
```
┌────────────────────────────────┐
│ ✓ Patent application saved [×] │
│   Your changes have been saved │
└────────────────────────────────┘
```

**With Action:**
```
┌────────────────────────────────┐
│ ✓ Patent deleted          [×]  │
│   Application #12345 deleted   │
│   [Undo]                       │
└────────────────────────────────┘
```

**Error Notification:**
```
┌────────────────────────────────┐
│ ⊗ Failed to save          [×]  │
│   Check your connection and    │
│   try again. [Retry]           │
└────────────────────────────────┘
```

## Behavior

For detailed behavior patterns, including appearance, persistence, dismissal, stacking, notification types, and action buttons, see the **[Notification Behavior Patterns](../patterns/behaviours/notification.md)** documentation.

## Accessibility

**Semantic HTML:**
```html
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  class="notification notification-success">

  <svg aria-hidden="true" class="icon">✓</svg>

  <div class="notification-content">
    <h4>Patent application saved</h4>
    <p>Your changes have been saved successfully.</p>
  </div>

  <button aria-label="Close notification">×</button>
</div>
```

**ARIA Attributes:**
- `role="status"` for non-urgent notifications
- `role="alert"` for urgent errors
- `aria-live="polite"` for status updates
- `aria-live="assertive"` for critical alerts
- `aria-atomic="true"` reads entire message

**Screen Reader Support:**
- Announce notification when it appears
- Read icon type ("Success", "Error", etc.)
- Read title and description
- Announce action buttons
- Don't interrupt current task (use polite)

**Keyboard Navigation:**
- `Tab` - Focus dismiss button or action
- `Enter/Space` - Activate button
- `Escape` - Dismiss notification
- Focus management for actions

**Focus Management:**
- Don't steal focus from current task
- Action buttons focusable
- Return focus after action
- Allow keyboard dismissal

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Icons meet 3:1 contrast
- Don't rely on color alone
- Icon + text + border combination

**Touch Targets:**
- Dismiss button minimum 44×44px
- Action buttons 44×44px
- Adequate spacing
- Full button area tappable

**Responsive:**
- Full width on mobile
- Bottom of screen on mobile (optional)
- Simplified layout
- Maintained touch targets
