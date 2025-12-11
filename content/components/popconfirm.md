---
title: Popconfirm
description: "Documentation for Popconfirm component"
---

## Description

Popconfirm is a floating confirmation dialog that asks users to verify destructive or important actions. Lighter than a modal but more prominent than a tooltip, it's perfect for "Are you sure?" moments without full-page interruption.

Think of it as a gentle tap on the shoulder before something important happens.

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
- **Shadow**: `shadow-floating`
- **Border Radius**: `radius-default`

### Popconfirm Content

**Dimensions:**
- **Width**: `262px` (fixed)
- **Padding**: `spacing-3`
- **Gap**: `spacing-3` between content and actions
- **Background**: `--bg-surface-white`
- **Border Radius**: `radius-default`

**Layout:**
- **Mode**: Vertical column
- **Align**: Flex-end (right-aligned actions)
- **Gap**: `spacing-3`

**Content Container:**
- **Layout**: Horizontal row
- **Align Self**: Stretch
- **Gap**: `spacing-2` (between icon and text)

**Actions Container:**
- **Layout**: Horizontal row
- **Justify**: Flex-end (right-aligned)
- **Align**: Center
- **Align Self**: Stretch
- **Gap**: `spacing-2` between buttons

## Do

- Use for destructive actions (delete, remove, cancel)
- Ask clear, specific questions
- Provide distinct Cancel and Confirm buttons
- Position near trigger element
- Keep messages concise (1-2 sentences max)
- Use danger button style for destructive actions
- Allow Escape key to cancel
- Close after action completes

## Don't

- Use for non-destructive actions (use buttons)
- Make messages too long or complex
- Forget loading states during action
- Use for multi-step processes (use modal or wizard)
- Position off-screen
- Make both buttons look identical
- Trigger on hover (use click only)
- Nest within other popovers

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
- Preferred position: Bottom
- Falls back if insufficient space
- Arrow points to trigger
- Maintains 8-12px spacing

**Placement Options:**
- Top/Bottom: Centered or aligned left/right
- Left/Right: Centered or aligned top/bottom
- Adjusts based on viewport boundaries

**Arrow Position:**
- Points to trigger center
- Adjusts with placement
- Visually connects to trigger

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
