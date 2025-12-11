---
title: Notification
description: "Documentation for Notification component"
---

# Notification Behaviors

Notifications (toasts) are temporary messages that give users feedback on actions, system status, or important updates. They're designed to inform without interrupting.

## Core Concept

Notifications are fleeting helpers that:
- Pop up automatically after user actions or system events
- Give quick, non-blocking feedback
- Vanish automatically after a few seconds
- Stack neatly when multiple appear
- Don't demand interaction (though you can dismiss them)
- Never interrupt the user's workflow

## Appearance Behavior

### Triggering Display

**Common Triggers:**
- User completes an action (Save, Delete, Submit)
- System event occurs (File uploaded, Process complete)
- Background task finishes (Export ready)
- Error occurs (Connection lost, Validation failed)
- Status changes (User logged in, Settings updated)

**Automatic Appearance:**
- No user action needed to show
- Appears immediately after trigger event
- Does not require user confirmation to display
- Non-blocking (doesn't prevent other actions)

### Animation and Timing

**Slide In Animation:**
- **Entry**: Slides in from top-right corner
- **Duration**: 300ms
- **Easing**: Ease-out
- **Transform**: `translateX(100%)` → `translateX(0)`
- **Fade**: Opacity `0` → `1` (simultaneous, 200ms)

**Alternative Animations:**
- Slide down from top center
- Fade in without slide
- Scale up + fade (material design style)

**Timing Specifications:**
```
Trigger Event
    ↓
[0ms] Start animation
[200ms] Fade in complete
[300ms] Slide in complete
[300ms] Notification fully visible
[5000ms] Auto-dismiss starts (default)
[5200ms] Fade out complete
[5300ms] Slide out complete
```

### Positioning

**Desktop (Default):**
- **Top-right corner** of viewport
- **Offset**: 24px from top, 24px from right
- **Fixed position**: Stays in place during scroll
- **Z-index**: High (above most content, below modals)

**Alternative Positions:**
- Top-center: For important system messages
- Bottom-right: Alternative if top has persistent elements
- Bottom-center: Full-width notifications

**Mobile:**
- **Top of viewport**: Full-width with minimal margins
- **Bottom of viewport**: Alternative for mobile apps
- **Center**: For critical messages

### Stacking Behavior

**Multiple Notifications:**
- Stack vertically with consistent gap (12px)
- **Newest position**:
  - Top of stack (newest on top) - Default
  - Bottom of stack (newest on bottom) - Alternative
- Maximum visible: 3-5 notifications
- Older notifications auto-dismiss to make room

**Stack Example (Newest on Top):**
```
┌────────────────────────────────┐
│ ✓ Export complete         [×]  │  ← Newest (just appeared)
└────────────────────────────────┘
      ↓ 12px gap
┌────────────────────────────────┐
│ ✓ File uploaded           [×]  │  ← Second newest
└────────────────────────────────┘
      ↓ 12px gap
┌────────────────────────────────┐
│ ℹ Settings saved          [×]  │  ← Oldest (will dismiss first)
└────────────────────────────────┘
```

**Queue Management:**
- When exceeding maximum (5 notifications):
  - Oldest notification auto-dismisses
  - New notification appears
  - Queue maintained in background
- Or: New notifications wait in queue
- Never overflow viewport with notifications

## Persistence Behavior

### Auto-Dismiss Timing

**Default Duration: 5 seconds**
- Starts when notification fully visible
- Countdown visible (optional progress bar)
- Sufficient time to read message
- Adjustable based on content length

**Duration by Type:**
- **Success**: 3-4 seconds (quick confirmation)
- **Info**: 5 seconds (standard message)
- **Warning**: 6-8 seconds (important, user should note)
- **Error**: 8-10 seconds or manual dismiss (critical, user may need to act)

**Duration by Content Length:**
- Short message (< 30 chars): 3-4 seconds
- Medium message (30-60 chars): 5 seconds
- Long message (> 60 chars): 7-8 seconds
- With action button: 8-10 seconds or manual only

### Pause on Hover

**Hover Behavior:**
1. User hovers cursor over notification
2. Auto-dismiss timer pauses immediately
3. Notification stays visible
4. Optional: Progress bar pauses
5. User moves cursor away
6. Timer resumes from where it paused
7. Notification dismisses when timer completes

**Purpose:**
- Gives user time to read fully
- Allows clicking action buttons
- Prevents premature dismissal
- Improves accessibility

### Manual Dismissal

**Dismiss Button (×):**
- Always visible in top-right corner of notification
- Minimum touch target: 44×44px
- Clicking dismisses immediately
- Does not affect other notifications
- Same animation as auto-dismiss

**Swipe Gesture (Mobile):**
- Swipe right to dismiss
- Swipe left to dismiss
- Smooth follow-your-finger animation
- Snap back if swipe insufficient
- Dismiss if swipe threshold met (~40% width)

### Persistent Notifications

**When to Use:**
- Critical errors requiring action
- Process in progress (with cancel button)
- Important updates that must be acknowledged

**Behavior:**
- No auto-dismiss
- Must be manually dismissed
- Include clear action or dismiss button
- Consider using modal instead for truly critical messages

**Example:**
```
┌────────────────────────────────────┐
│ ⊗ Connection Lost              [×] │
│   You are currently offline.       │
│   [Retry Connection]               │
└────────────────────────────────────┘
```
*Stays visible until dismissed or connection restored*

## Dismissal Animation

**Slide Out:**
- **Duration**: 200ms
- **Easing**: Ease-in
- **Transform**: `translateX(0)` → `translateX(100%)`
- **Fade**: Opacity `1` → `0` (simultaneous, 150ms)
- **Collapse**: Gap closes smoothly as notification leaves
- **Reflow**: Other notifications slide up to fill space (150ms)

**Sequence:**
1. Dismiss triggered (auto or manual)
2. Notification fades out
3. Notification slides right
4. Notification removed from stack
5. Other notifications reflow up
6. Gap closes smoothly

## Notification Types and Behavior

### Success Notifications

**Purpose:** Confirm successful action completion

**Characteristics:**
- Green color scheme
- Checkmark icon (✓)
- Brief, positive message
- Short duration (3-4 seconds)
- Auto-dismiss appropriate

**Examples:**
- "Patent application saved"
- "File uploaded successfully"
- "Changes published"

### Info Notifications

**Purpose:** Provide helpful information

**Characteristics:**
- Blue color scheme
- Info icon (ℹ️)
- Neutral, informative message
- Standard duration (5 seconds)
- Auto-dismiss appropriate

**Examples:**
- "Settings have been updated"
- "New version available"
- "Maintenance scheduled for tomorrow"

### Warning Notifications

**Purpose:** Alert user to potential issues

**Characteristics:**
- Orange/yellow color scheme
- Warning icon (⚠)
- Attention-getting message
- Longer duration (6-8 seconds)
- May include action button
- Consider manual dismiss for important warnings

**Examples:**
- "Session will expire in 5 minutes"
- "Storage limit approaching"
- "Unsaved changes may be lost"

### Error Notifications

**Purpose:** Alert user to failures or problems

**Characteristics:**
- Red color scheme
- Error icon (⊗)
- Clear error message
- Long duration (8-10 seconds) or manual dismiss
- Often includes action button (Retry, Details)
- Should not auto-dismiss if action required

**Examples:**
- "Failed to save changes"
- "Upload failed - file too large"
- "Connection error - please try again"

## Action Buttons in Notifications

### With Action Button

**When to Include:**
- Undo operations ("Undo", "Restore")
- Retry failed actions ("Retry", "Try Again")
- View more details ("View", "Details")
- Take related action ("Refresh", "Reload")

**Behavior:**
- Button appears in notification
- Extends auto-dismiss duration (8-10 seconds)
- Or disables auto-dismiss entirely
- Clicking button may:
  - Execute action and dismiss notification
  - Execute action and keep notification
  - Open modal/drawer with details

**Example (Undo):**
```
┌────────────────────────────────────┐
│ ✓ Patent deleted               [×] │
│   Application #12345 deleted       │
│   [Undo]                           │
└────────────────────────────────────┘
```
*Stays visible for 8-10 seconds to allow undo*

### Progress Notifications

**For Long-Running Operations:**
- Show progress indicator
- Update message as progress changes
- No auto-dismiss until complete
- May include cancel button

**Example:**
```
┌────────────────────────────────────┐
│ ⟳ Exporting data...            [×] │
│   45% complete                     │
│   ████████░░░░░░░░                 │
│   [Cancel]                         │
└────────────────────────────────────┘
```

## Accessibility

### Keyboard Support

**Focus Management:**
- Notifications do not steal focus
- User can continue working
- Action buttons are keyboard accessible
- Tab to reach action buttons (if in focus flow)

**Keyboard Dismissal:**
- If notification has focus:
  - `Escape` key dismisses
  - `Enter`/`Space` on dismiss button closes
- If notification does not have focus:
  - Auto-dismiss handles cleanup
  - Or manual dismiss with mouse

### Color and Contrast

- Text meets 4.5:1 contrast ratio
- Icons meet 3:1 contrast ratio
- Don't rely on color alone
- Use icon + text + border combination
- Background provides sufficient contrast

### Touch Targets

- Dismiss button minimum 44×44px
- Action buttons minimum 44×44px
- Adequate spacing between elements
- Full button area tappable
- Swipe-to-dismiss on mobile (optional)

## Responsive Behavior

### Desktop (>1024px)
- Fixed-width notifications (360px default)
- Positioned top-right with margins
- Stack vertically
- Full functionality

### Tablet (768px - 1024px)
- Same as desktop
- May adjust position slightly
- Maintain readability

### Mobile (<768px)
- Full-width or nearly full-width
- Positioned at top with minimal margins
- Or bottom of viewport (app-style)
- Larger touch targets
- Swipe to dismiss enabled
- Simplified layout if needed

## Best Practices

### Do
- Use for transient, non-critical feedback
- Auto-dismiss after appropriate duration
- Stack multiple notifications clearly
- Provide manual dismiss option
- Pause on hover
- Use appropriate colors for message type
- Keep messages concise (1-2 lines)
- Include icon for quick recognition
- Support keyboard and screen readers

### Don't
- Don't use for critical information (use modal)
- Don't auto-dismiss errors that require action
- Don't stack too many (max 3-5)
- Don't make duration too short to read
- Don't block important UI elements
- Don't forget about screen reader users
- Don't rely solely on color to convey meaning
- Don't forget mobile experience

## Related Patterns

Notifications provide feedback for many patterns:

- **[Common Actions](./common.md)** - Success/error feedback for Save, Delete, etc.
- **[Modal](./modal.md)** - Confirm modal actions with notifications
- **[Drawer](./drawer.md)** - Feedback after drawer form submissions
- **[Action Bar](./action-bar.md)** - Bulk operation results displayed via notifications
- **[Table](./table.md)** - Row action feedback
- **[Multi-Step Creation](../flows/multi-step-creation.md)** - Step completion and error feedback

## Common Notification Triggers

### After Save Actions
```
User clicks "Save" →
  Success: ✓ "Patent application saved successfully"
  Error: ⚠ "Failed to save patent application. Please try again."
```

### After Delete Actions
```
User confirms delete →
  Success: ✓ "Patent deleted successfully [Undo]"
  Error: ⚠ "Cannot delete patent. It has active dependencies."
```

### After Bulk Operations
```
User deletes 5 items →
  Success: ✓ "5 patents deleted successfully"
  Partial: ⚠ "3 of 5 patents deleted. 2 failed."
  Error: ⊗ "Failed to delete patents. Please try again."
```

### System Notifications
```
Background process completes →
  Info: ℹ "Report generation complete [Download]"
  Success: ✓ "Document uploaded successfully"
  Warning: ⚠ "Your session will expire in 5 minutes"
```

### Form Validation
```
User submits form with errors →
  Error: ⊗ "Please fix 3 errors before saving"
  (Form fields highlight with inline errors)
```

## Implementation Checklist

- [ ] Notifications appear after appropriate triggers
- [ ] Slide in animation smooth (300ms)
- [ ] Positioned correctly (top-right default)
- [ ] Stack with proper spacing (12px gap)
- [ ] Auto-dismiss after appropriate duration (5s default)
- [ ] Pause on hover works
- [ ] Manual dismiss button (×) works
- [ ] Action buttons functional (if present)
- [ ] Swipe to dismiss on mobile (optional)
- [ ] Proper ARIA roles (status/alert)
- [ ] Screen reader announces correctly
- [ ] Color contrast meets WCAG standards
- [ ] Touch targets minimum 44×44px
- [ ] Responsive on mobile
- [ ] Maximum stack limit enforced
- [ ] Old notifications dismissed appropriately
- [ ] Focus management correct (doesn't steal focus)
- [ ] Related patterns referenced correctly
