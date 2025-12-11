---
title: Switch
description: "Documentation for Switch component"
---

## Description

Switches are binary toggles that flip between on and off states. Like a light switch on your wall, they provide immediate, visual feedback. Perfect for settings, preferences, and instant actions that take effect right away—no confirmation needed.

## Anatomy

1. **Track** - Background rail
2. **Thumb** - Sliding circular button
3. **Label** - Text describing the switch (external)
4. **State Indicator** - Text showing on/off (optional)

## Specification

**Switch Track:**
- **Width**: `44px` (default)
- **Height**: `22px`
- **Border Radius**: `radius-round` (pill shape)
- **Background (off)**: `--border-lighter`
- **Background (on)**: `--bg-fill-brand-normal`
- **Transition**: 200ms ease

**Switch Thumb:**
- **Size**: `18px × 18px` (circle)
- **Background**: `--bg-surface-white`
- **Shadow**: `0 2px 4px rgba(0, 0, 0, 0.2)`
- **Position (off)**: Left, 2px from edge
- **Position (on)**: Right, 2px from edge
- **Transition**: 200ms ease

**States:**

**Off (Unchecked):**
- **Track**: `--border-lighter`
- **Thumb**: Left position, white
- **Label**: Normal text color

**On (Checked):**
- **Track**: `--bg-fill-brand-normal`
- **Thumb**: Right position, white
- **Label**: Normal text color

**Hover (off):**
- **Track**: `--text-placeholder`
- **Thumb**: Slight shadow increase

**Hover (on):**
- **Track**: Darker blue (`#0050B3`)
- **Thumb**: Slight shadow increase

**Focus:**
- **Outline**: `2px solid` `--bg-fill-brand-normal`
- **Outline Offset**: `2px`
- **Track**: Maintains on/off state

**Disabled (off):**
- **Track**: `--bg-fill-lighter`
- **Thumb**: `--text-placeholder`
- **Label**: Gray text
- **Cursor**: Not-allowed

**Disabled (on):**
- **Track**: Light blue (`#BAE7FF`)
- **Thumb**: `--bg-fill-light`
- **Label**: Gray text
- **Cursor**: Not-allowed

**Loading:**
- **Thumb**: Spinner icon
- **Disabled**: During transition
- **Track**: Current state maintained

**Sizes:**

**Small:**
- **Track**: `28px × 16px`
- **Thumb**: `12px × 12px`
- **Font Size**: `text-xs`

**Default (Medium):**
- **Track**: `44px × 22px`
- **Thumb**: `18px × 18px`
- **Font Size**: `text-base`

**Large:**
- **Track**: `56px × 28px`
- **Thumb**: `24px × 24px`
- **Font Size**: `text-lg`

**Label Positioning:**
- **Position**: Left or right of switch
- **Gap**: `spacing-2` from switch
- **Alignment**: Vertical center
- **Cursor**: Pointer (clickable)

**With Text Indicator:**
- **Text on Track**: "ON" / "OFF" inside track
- **Font Size**: `10px`
- **Color**: White (on), gray (off)
- **Position**: Opposite side of thumb

## Do

- Use for immediate state changes that don't require confirmation
- Write clear labels describing what the switch toggles
- Show loading state during async operations
- Make the entire label clickable
- Use for binary on/off settings
- Provide instant visual feedback
- Position labels consistently throughout your interface
- Use only for reversible actions

## Don't

- Use for actions requiring confirmation—users expect instant effect
- Use "yes/no" labels—use checkboxes for those scenarios
- Make switches smaller than minimum size standards
- Forget disabled and loading states
- Use for more than two states—that's not how switches work
- Hide what the switch controls—be explicit
- Leave users guessing about the current state
- Use switches in forms with submit buttons—use checkboxes instead

## Uses

**Primary Use Cases:**

1. **Settings** - Enable/disable features
2. **Preferences** - Dark mode, notifications
3. **Permissions** - Camera access, location
4. **Feature Flags** - Enable experimental features
5. **Status Changes** - Active/inactive, public/private
6. **Filters** - Show/hide content
7. **Quick Actions** - Mute/unmute, lock/unlock

**Example Scenarios:**

**Settings Panel:**
```
Notifications
  Email notifications        ○────●  ON
  Push notifications         ●────○  OFF
  SMS notifications          ○────●  ON
```

**Feature Toggle:**
```
Dark Mode                    ●────○  OFF
                            ↓ Click
Dark Mode                    ○────●  ON
```

**With Description:**
```
Enable two-factor authentication
Adds an extra layer of security to your account

                             ○────●  ON
```

**Loading State:**
```
Auto-save                    ○─⟳──●  Saving...
```

**Inline Setting:**
```
Show archived items  ○────●
```

## When NOT to Use

### CRITICAL: Never Use Switch in Forms with Submit Button

**Wrong—Switch in form with Save button:**
```
[Settings Form]

Enable notifications  ○────●  (Switch)
Email frequency       [dropdown]

[Save Changes Button]
```

**Right—Use Checkbox instead:**
```
[Settings Form]

☐ Enable notifications  (Checkbox)
Email frequency         [dropdown]

[Save Changes Button]
```

**Why:**
- Switches mean immediate action—like a physical light switch
- Forms with submit buttons mean delayed action
- This creates a confusing contradiction
- Users expect switches to work instantly, not wait for "Save"

**Rule:** If there's a "Save" or "Submit" button, use a checkbox, not a switch.

### Decision Tree: Switch vs Checkbox

```
Does this setting take effect immediately?
├─ Yes → Is there a "Save" button anywhere?
│         ├─ Yes → Use CHECKBOX (not switch)
│         └─ No → Use SWITCH ✓
└─ No → Use CHECKBOX (not switch)
```

### Use Alternatives Instead When:

**Use Checkbox when:**
- Settings are part of a form with submit button
- Selection is one of multiple items (multi-select)
- Action requires confirmation
- Changes are batched with other updates

**Use Radio Button when:**
- Only one option can be selected from a group
- All options should be visible at once

**Use Toggle Button when:**
- Changing view mode (list view / grid view)
- Showing/hiding content sections
- Binary UI state changes (not settings)

**Use Select/Dropdown when:**
- More than two options exist
- Space is limited

### Switches Cannot Have Error States

**Limitation:** Switches represent immediate actions, not validatable form fields.

**Use this pattern instead:**
1. User toggles switch on
2. Backend rejects the change (e.g., subscription required)
3. Switch reverts to off automatically
4. Show toast notification: "Premium subscription required"

**The pattern:**
- Attempt the action immediately
- If it fails, revert the switch and show a toast or notification
- Never show an error state on the switch itself

### No Indeterminate State Possible

**Limitation:** Switches only support two states: on/off.

**If you need tri-state:**
- Use Checkbox (supports indeterminate)
- Or use Radio Group with three options
- Or use Select with three options

## Screen Reader Behavior

**How switches are announced:**

**When focused:**
> "Enable notifications. Switch. On."

Or:
> "Dark mode. Switch button. Off."

**After toggling:**
> "On." (state announced immediately)

**What gets announced:**
1. Label text ("Enable notifications")
2. Control type ("Switch" or "Switch button")
3. Current state ("On" or "Off")

**Important:**
- State changes are announced immediately
- Keep labels concise and clear
- Labels should describe what the ON state means

**Good labels:**
- "Enable notifications" (clear what ON means)
- "Show advanced options" (clear action)
- "Make profile public" (clear outcome)

**Ambiguous labels:**
- "Notifications" (what about them?)
- "Advanced options" (showing or hiding?)
- "Profile visibility" (public or private?)

## Behavior

### Toggling

**Click to Toggle:**
1. User clicks switch or label
2. Thumb slides to opposite position
3. Track color changes
4. State updates immediately
5. Change event fires
6. Action takes effect

**Keyboard Toggle:**
- `Space` or `Enter` to toggle
- Thumb slides smoothly
- Same visual feedback as click

**Touch Toggle:**
- Tap switch or label
- Immediate feedback
- No hover state on touch devices

### Transition Animation

**Thumb Movement:**
- Slide duration: 200ms
- Easing: Ease-out
- Smooth arc motion
- Track color fades simultaneously

**Track Color:**
- Fade duration: 200ms
- Gray → Blue (turning on)
- Blue → Gray (turning off)
- Synchronized with thumb

### Focus

**Gaining Focus:**
1. User tabs to switch
2. Focus outline appears
3. Keyboard toggle enabled

**Maintaining Focus:**
- Outline visible
- Space/Enter active
- Clear focus indicator

**Losing Focus:**
- Tab moves to next element
- Outline disappears
- State maintained

### Dismissing

**Switches don't dismiss:**
- State persists
- Toggle again to change
- No "undo" unless explicitly provided
- Immediate effect (unless loading)

**Async Actions:**
- Show loading state
- Disable during processing
- Revert on error
- Confirm on success
