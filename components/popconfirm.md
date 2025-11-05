## Description

Popconfirm is a floating confirmation dialog that appears near its trigger element, asking users to confirm destructive or important actions before proceeding. It's lighter than a modal but more prominent than a tooltip—perfect for "Are you sure?" moments that need user attention without full-page interruption.

Think of it as a gentle tap on the shoulder, asking "Do you really want to do this?" before something important happens.

## Anatomy

1. **Trigger Element** - Button or control that opens popconfirm
2. **Popover Container** - Floating card with shadow
3. **Content Area** - Message text and optional icon
4. **Actions** - Confirm and cancel buttons
5. **Arrow** - Pointer to trigger element
6. **Backdrop** - Optional dim overlay (light or none)

## Specification

### Popconfirm Component Set

**Placement Variants** (12 positions):
- **Left**: Left Top, Left, Left Bottom
- **Right**: Right Top, Right, Right Bottom
- **Top**: Top Left, Top, Top Right
- **Bottom**: Bottom Left, Bottom, Bottom Right

**Container Dimensions:**
- **Width**: `270px` (fixed)
- **Layout**: Row or column based on placement
- **Shadow**: Large shadow effect
- **Border Radius**: `12px`

### Popconfirm Content

**Dimensions:**
- **Width**: `262px` (fixed)
- **Padding**: `12px`
- **Gap**: `12px` between content and actions
- **Background**: White (`#FFFFFF`)
- **Border Radius**: `12px`

**Layout:**
- **Mode**: Vertical column
- **Align**: Flex-end (right-aligned actions)
- **Gap**: `12px`

**Content Container:**
- **Layout**: Horizontal row
- **Align Self**: Stretch
- **Gap**: `8px` (between icon and text)

**Actions Container:**
- **Layout**: Horizontal row
- **Justify**: Flex-end (right-aligned)
- **Align**: Center
- **Align Self**: Stretch
- **Gap**: `8px` between buttons

## Do

- Use popconfirm for destructive actions (delete, remove, cancel)
- Ask clear, specific questions ("Delete this patent application?")
- Provide distinct Cancel and Confirm buttons
- Position popconfirm near the trigger element
- Keep message concise (1-2 sentences maximum)
- Use danger button style for destructive confirms
- Allow Escape key to cancel
- Close popconfirm after action completes

## Don't

- Don't use for non-destructive actions—use regular buttons
- Don't make the message too long or complex
- Don't forget to show loading state during action
- Don't use for multi-step processes—use modal or wizard
- Don't position popconfirm off-screen
- Don't make both buttons look identical
- Don't trigger popconfirm on hover—only on click
- Don't nest popconfirms within other popovers

## Uses

**Primary Use Cases:**

1. **Delete Confirmation** - "Delete this item?"
2. **Discard Changes** - "Discard unsaved changes?"
3. **Remove Items** - "Remove user from team?"
4. **Cancel Actions** - "Cancel patent submission?"
5. **Irreversible Actions** - "This cannot be undone. Continue?"
6. **Permission Changes** - "Revoke admin access?"
7. **Data Loss Warning** - "Clear all filters?"

**Example Scenarios:**

**Delete Patent:**
```
┌─────────────────────────┐
│ [!] Delete Application  │
│                         │
│ This will permanently   │
│ delete the patent       │
│ application. This       │
│ action cannot be undone.│
│                         │
│       [Cancel] [Delete] │
└─────────────────────────┘
```

**Discard Draft:**
```
┌─────────────────────────┐
│ [!] Discard Changes?    │
│                         │
│ You have unsaved        │
│ changes. Are you sure   │
│ you want to leave?      │
│                         │
│       [Stay] [Discard]  │
└─────────────────────────┘
```

**Remove User:**
```
┌─────────────────────────┐
│ Remove John Doe?        │
│                         │
│ They will lose access   │
│ to this workspace.      │
│                         │
│       [Cancel] [Remove] │
└─────────────────────────┘
```

## Behavior

### States

**Popconfirm States:**
- **Closed** - Not visible
- **Opening** - Fade in animation
- **Open** - Fully visible
- **Processing** - Action in progress
- **Closing** - Fade out animation

**Button States:**
- **Default** - Ready to click
- **Hover** - Highlighted
- **Active** - Pressed
- **Loading** - Spinner, disabled
- **Disabled** - Grayed out

### Interactions

**Opening:**
1. User clicks trigger (e.g., Delete button)
2. Popconfirm fades in (150-200ms)
3. Positioned near trigger element
4. Focus moves to Cancel button (safe default)
5. Optional: Backdrop appears

**Confirming:**
1. User clicks Confirm button
2. Button shows loading state
3. Action executes
4. Popconfirm closes on success
5. Success message appears (toast/notification)

**Canceling:**
1. User clicks Cancel, presses Escape, or clicks backdrop
2. Popconfirm closes immediately
3. No action taken
4. Focus returns to trigger element

**Keyboard Navigation:**
- `Tab` - Move between Cancel and Confirm
- `Enter` - Activate focused button
- `Escape` - Cancel and close
- `Arrow Keys` - Navigate buttons (optional)

### Positioning

**Automatic Placement:**
- Preferred position: Bottom (below trigger)
- Falls back if insufficient space
- Arrow points to trigger element
- Maintains consistent spacing (8-12px from trigger)

**Placement Options:**
- **Top/Bottom**: Centered or aligned left/right
- **Left/Right**: Centered or aligned top/bottom
- Adjusts based on viewport boundaries

**Arrow Position:**
- Points to center of trigger element
- Adjusts with popconfirm placement
- Visually connects popconfirm to trigger

### Animations

**Open:**
- Fade in from 0 to 1 opacity (200ms)
- Scale from 0.95 to 1.0 (200ms)
- Easing: Ease-out

**Close:**
- Fade out from 1 to 0 opacity (150ms)
- Scale from 1.0 to 0.95 (150ms)
- Easing: Ease-in

**Reduced Motion:**
- Instant appearance/disappearance
- No scaling or movement
- Respects prefers-reduced-motion

### Z-Index & Layering

- Popconfirm above page content
- Backdrop below popconfirm, above page
- Modal z-index if used in modal context

## Accessibility

**Keyboard Support:**
- `Tab` / `Shift+Tab` - Navigate buttons
- `Enter` - Confirm action
- `Escape` - Cancel and close
- Focus trapped within popconfirm when open

**Screen Reader Support:**
- `role="alertdialog"` on container
- `aria-modal="true"` indicates modal behavior
- `aria-labelledby` references title/question
- `aria-describedby` references message
- Announce on open: "Alert dialog, Delete application"
- Announce button roles clearly

**ARIA Attributes:**
```html
<div
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="popconfirm-title"
  aria-describedby="popconfirm-desc">
  <div id="popconfirm-title">Delete Application</div>
  <p id="popconfirm-desc">
    This will permanently delete the patent application.
  </p>
  <button>Cancel</button>
  <button>Delete</button>
</div>
```

**Focus Management:**
- Focus moves to popconfirm on open (Cancel button by default)
- Focus trap prevents escaping to page
- Tab cycles through buttons only
- Focus returns to trigger on close
- Loading state disables focus

**Button Semantics:**
- Cancel button: `<button type="button">`
- Confirm button: `<button type="button">` or `<button type="submit">`
- Clear labels: "Cancel" and specific action ("Delete", "Remove", etc.)
- Don't use generic "OK" for destructive actions

**Visual Design:**
- Distinct button styles (Cancel: secondary, Confirm: danger for destructive)
- Clear visual hierarchy
- Sufficient contrast (WCAG AA)
- Focus indicators visible (3:1 contrast)

**Color & Contrast:**
- Text meets WCAG AA (4.5:1 minimum)
- Icons have 3:1 contrast minimum
- Don't rely on color alone for destructive actions
- Use icon + color + text for warnings

**Loading States:**
- Show spinner on button during processing
- Disable both buttons when processing
- Announce to screen readers: "Processing"
- Don't close popconfirm until action completes

**Error Handling:**
- Keep popconfirm open on error
- Show error message inline or below actions
- Announce error to screen readers
- Allow retry or cancel

**Mobile Considerations:**
- Touch targets minimum 44×44px
- Sufficient spacing between buttons
- Position to avoid keyboard overlap
- Consider bottom sheet on small screens
- Swipe down to dismiss (optional)
