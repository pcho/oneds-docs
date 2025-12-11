---
title: Notification
description: "Documentation for Notification component"
---

## Description

Notifications (toasts) are unobtrusive messages that slide in, deliver quick feedback, and gracefully disappear. They're perfect for confirmations, updates, and non-critical alerts that don't interrupt the user's flow.

## Anatomy

1. **Type Icon**: Indicates the status type of the alert.
2. **Title**: A short and descriptive title.
3. **Dismiss Button**: Allows users to dismiss the alert.
4. **Description (optional)**: Provides additional context if needed.
5. **Action (optional)**: A single text action that users can take based on the toast content.

## Specification

**Notification Container:**
- **Width**: `360px` (default)
- **Padding**: `spacing-4`
- **Border Radius**: `radius-medium`
- **Border**: `1px solid` (varies by type)
- **Shadow**: `shadow-medium`
- **Position**: Top-right corner of viewport
- **Gap**: `spacing-3` between icon, content, buttons

**Auto-Dismiss:**
- **Duration**: 5 seconds (default)
- **Pause on Hover**: Stays visible while hovering
- **Manual Dismiss**: Click × button

**Stacking:**
- Multiple notifications stack vertically
- Gap: `spacing-3` between notifications
- Newest on top or bottom (configurable)

**Status Types:**

**Default:**
- **Icon**: ℹ️ Info circle
- **Icon Color**: `--text-lighter`
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Use**: Non-essential information that may or may not need action

**Information:**
- **Icon**: ℹ️ Info circle
- **Icon Color**: Blue (`#0BA5EC`)
- **Background**: Light cyan (`#F0F9FF`)
- **Border**: Cyan (`#7CD4FD`)
- **Use**: Additional context about an upcoming action

**Success:**
- **Icon**: ✓ Checkmark
- **Icon Color**: `--text-success`
- **Background**: Light green (`#ECFDF3`)
- **Border**: Green (`#A9EFC5`)
- **Use**: Confirmation that a previous action succeeded

**Warning:**
- **Icon**: ⚠ Warning
- **Icon Color**: `--text-warning`
- **Background**: Light yellow (`#FFFAEB`)
- **Border**: Yellow (`#FEDF89`)
- **Use**: Alert users that attention may be needed (but not critical)

**Error:**
- **Icon**: ⊗ Error circle
- **Icon Color**: `--text-danger`
- **Background**: Light red (`#FEF3F2`)
- **Border**: Red (`#FECDCA`)
- **Use**: Critical issue requiring immediate attention

## Do

- Use toasts to confirm actions and provide temporary status updates
- Reaffirm that a previous action (often elsewhere in the app) succeeded
- Reserve error toasts for systemic issues like lost connections or database errors
- For other errors, show messages in context using other components

## Don't

- Use toasts for critical messages—they're temporary and easy to miss
- Make toasts too long—keep them brief and scannable
- Forget that the Alert component exists for important, persistent notifications

## Uses

**Primary Use Cases:**

1. **Action Confirmation** - "Patent saved successfully"
2. **Progress Updates** - "Upload complete"
3. **System Messages** - "Connection restored"
4. **Undo Actions** - "Item deleted" with Undo button
5. **Background Tasks** - "Export ready for download"
6. **Errors** - "Failed to save changes"
7. **Warnings** - "Session expiring soon"

## Behavior

For detailed behavior patterns, including appearance, persistence, dismissal, stacking, notification types, and action buttons, see the **[Notification Behavior Patterns](../patterns/behaviours/notification.md)** documentation.
