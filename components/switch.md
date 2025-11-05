## Description

Switch is the binary toggle that flips between two states—on and off, enabled and disabled, active and inactive. Like a light switch on your wall, it provides immediate, visual feedback for state changes. Perfect for settings, preferences, and instant actions that don't require confirmation.

## Anatomy

1. **Track** - Background rail
2. **Thumb** - Sliding circular button
3. **Label** - Text describing the switch (external)
4. **State Indicator** - Text showing on/off (optional)

## Specification

**Switch Track:**
- **Width**: `44px` (default)
- **Height**: `22px`
- **Border Radius**: `11px` (pill shape)
- **Background (off)**: Gray (`#D1D6DB`)
- **Background (on)**: Primary blue (`#1890FF`)
- **Transition**: 200ms ease

**Switch Thumb:**
- **Size**: `18px × 18px` (circle)
- **Background**: White (`#FFFFFF`)
- **Shadow**: `0 2px 4px rgba(0, 0, 0, 0.2)`
- **Position (off)**: Left, 2px from edge
- **Position (on)**: Right, 2px from edge
- **Transition**: 200ms ease

**States:**

**Off (Unchecked):**
- **Track**: Gray (`#D1D6DB`)
- **Thumb**: Left position, white
- **Label**: Normal text color

**On (Checked):**
- **Track**: Primary blue (`#1890FF`)
- **Thumb**: Right position, white
- **Label**: Normal text color

**Hover (off):**
- **Track**: Darker gray (`#BFBFBF`)
- **Thumb**: Slight shadow increase

**Hover (on):**
- **Track**: Darker blue (`#0050B3`)
- **Thumb**: Slight shadow increase

**Focus:**
- **Outline**: `2px solid #1890FF`
- **Outline Offset**: `2px`
- **Track**: Maintains on/off state

**Disabled (off):**
- **Track**: Light gray (`#F5F5F5`)
- **Thumb**: Gray (`#BFBFBF`)
- **Label**: Gray text
- **Cursor**: Not-allowed

**Disabled (on):**
- **Track**: Light blue (`#BAE7FF`)
- **Thumb**: Light gray (`#E8E8E8`)
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
- **Font Size**: `12px`

**Default (Medium):**
- **Track**: `44px × 22px`
- **Thumb**: `18px × 18px`
- **Font Size**: `14px`

**Large:**
- **Track**: `56px × 28px`
- **Thumb**: `24px × 24px`
- **Font Size**: `16px`

**Label Positioning:**
- **Position**: Left or right of switch
- **Gap**: `8px` from switch
- **Alignment**: Vertical center
- **Cursor**: Pointer (clickable)

**With Text Indicator:**
- **Text on Track**: "ON" / "OFF" inside track
- **Font Size**: `10px`
- **Color**: White (on), gray (off)
- **Position**: Opposite side of thumb

## Do

- Use for immediate state changes (no confirmation)
- Provide clear labels describing what's being toggled
- Show loading state during async operations
- Make entire label clickable
- Use for binary settings (on/off)
- Provide instant visual feedback
- Position label consistently (left or right)
- Use for reversible actions

## Don't

- Don't use for actions requiring confirmation
- Don't use "yes/no" labels (use checkboxes)
- Don't make switches too small (minimum size)
- Don't forget disabled states
- Don't use for more than two states
- Don't hide what the switch controls
- Don't make users guess the current state
- Don't forget loading states for async actions

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

## WAI-ARIA Pattern

This component implements the [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) from the WAI-ARIA Authoring Practices Guide.

**Key ARIA attributes:**
- `role="switch"` - Identifies the element as a switch control
- `aria-checked="true"` or `"false"` - Indicates the current state
- `aria-label` or `aria-labelledby` - Provides accessible label
- `aria-busy="true"` - Indicates loading state during async operations
- `aria-disabled="true"` - Indicates disabled state

**Reference:** [WAI-ARIA Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)

## When NOT to Use

### CRITICAL: Never Use Switch in Forms with Submit Button

**❌ WRONG - Switch in form with Save button:**
```
[Settings Form]

Enable notifications  ○────●  (Switch)
Email frequency       [dropdown]

[Save Changes Button]
```

**✅ CORRECT - Use Checkbox instead:**
```
[Settings Form]

☐ Enable notifications  (Checkbox)
Email frequency         [dropdown]

[Save Changes Button]
```

**Why:**
- Switches require IMMEDIATE action (like a physical light switch)
- Forms with submit buttons have DELAYED action
- This is a semantic contradiction
- Users expect switches to work instantly, not wait for "Save"

**Rule:** If there's a "Save" or "Submit" button → Use Checkbox, NOT Switch

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

### Switches CANNOT Have Error States

**Limitation:** Switches represent immediate actions, not validatable form fields.

**❌ This doesn't work:**
```
Enable premium features  ○────●
Error: Subscription required
```

**✅ Use this pattern instead:**
```
1. User toggles switch ON
2. Backend rejects (subscription required)
3. Switch reverts to OFF automatically
4. Toast notification: "Premium subscription required"
```

**Pattern:**
- Attempt the action
- If fails: Revert switch + show toast/notification
- Never show error state on the switch itself

### No Indeterminate State Possible

**Limitation:** Accessibility APIs don't support indeterminate switches.

**If you need tri-state:**
- Use Checkbox (supports indeterminate)
- Or use Radio Group with three options
- Or use Select with three options

**Why:** The `role="switch"` ARIA pattern only supports two states: on/off.

## Screen Reader Behavior

**How switches are announced:**

**When focused:**
> "Enable notifications. Switch. On."

Or:
> "Dark mode. Switch button. Off."

**After toggling:**
> "On." (immediate state announcement)

**Components of announcement:**
1. Label text ("Enable notifications")
2. Control type ("Switch" or "Switch button")
3. Current state ("On" or "Off")

**Important:**
- State changes are announced immediately
- Keep labels concise and clear
- Label should describe the ON state (not just the feature name)

**✅ Good labels:**
- "Enable notifications" (clear what ON means)
- "Show advanced options" (clear action)
- "Make profile public" (clear outcome)

**❌ Ambiguous labels:**
- "Notifications" (notifications what? on or off?)
- "Advanced options" (unclear if showing or hiding)
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
4. Screen reader announces state

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

## Accessibility

**Semantic HTML:**
```html
<label class="switch-label">
  <span>Email notifications</span>
  <input
    type="checkbox"
    role="switch"
    aria-checked="true"
    class="switch-input">
  <span class="switch-track">
    <span class="switch-thumb"></span>
  </span>
</label>
```

**With ARIA:**
```html
<div class="switch-container">
  <span id="switch-label">Dark mode</span>
  <button
    role="switch"
    aria-checked="false"
    aria-labelledby="switch-label"
    class="switch">
    <span class="switch-thumb"></span>
  </button>
</div>
```

**ARIA Attributes:**
- `role="switch"` on toggle element
- `aria-checked="true"` or `"false"`
- `aria-label` or `aria-labelledby` for label
- `aria-disabled="true"` when disabled
- `aria-busy="true"` during loading
- `aria-describedby` for additional context

**Keyboard Navigation:**
- `Tab` - Focus switch
- `Space` - Toggle state
- `Enter` - Toggle state (when using button)
- Logical tab order

**Screen Reader Support:**
- Announce role as "switch"
- Announce current state: "On" or "Off"
- Announce label clearly
- Announce state changes immediately
- Read description/helper text
- Announce disabled and loading states

**Focus Management:**
- Clear focus indicator required
- 3:1 contrast for focus outline
- Focus visible on keyboard navigation
- Outline distinct from switch itself
- Don't remove focus styles

**Label Association:**
- Use `<label>` wrapping input + visual
- Or `aria-labelledby` linking to label ID
- Entire label area clickable
- Clear relationship
- **ALL switches MUST have accessible labels** - see [Universal Label Requirements](/docs/patterns/universal-label-requirements.md)

**State Announcements:**
```html
<button
  role="switch"
  aria-checked="true"
  aria-label="Email notifications, currently on">
  <span class="switch-track">
    <span class="switch-thumb"></span>
  </span>
</button>
```

**Loading State:**
```html
<button
  role="switch"
  aria-checked="true"
  aria-busy="true"
  aria-label="Saving changes"
  disabled>
  <span class="spinner"></span>
</button>
```

**Color & Contrast:**
- Off state track meets 3:1 contrast
- On state track meets 3:1 contrast
- Don't rely on color alone
- Thumb position indicates state
- Focus outline 3:1 contrast
- Disabled state clearly distinguishable

**Touch Targets:**
- Switch + label minimum 44×44px
- Full switch area tappable
- Adequate spacing between switches
- Larger switches on mobile

**Input vs Button:**
- `<input type="checkbox" role="switch">` (native form)
- Or `<button role="switch">` (custom control)
- Both valid patterns
- Form integration vs. standalone action

**With Description:**
```html
<div class="switch-group">
  <label for="2fa-switch">
    Two-factor authentication
  </label>
  <p id="2fa-description">
    Adds extra security by requiring a code
  </p>
  <input
    id="2fa-switch"
    type="checkbox"
    role="switch"
    aria-checked="false"
    aria-describedby="2fa-description">
</div>
```

**Group of Switches:**
```html
<fieldset>
  <legend>Notification preferences</legend>

  <label>
    Email
    <input type="checkbox" role="switch" aria-checked="true">
  </label>

  <label>
    Push
    <input type="checkbox" role="switch" aria-checked="false">
  </label>

  <label>
    SMS
    <input type="checkbox" role="switch" aria-checked="true">
  </label>
</fieldset>
```

**Error Handling:**
```html
<div class="switch-group">
  <label for="feature-switch">Enable feature</label>
  <input
    id="feature-switch"
    type="checkbox"
    role="switch"
    aria-checked="false"
    aria-invalid="true"
    aria-describedby="error-message">

  <p id="error-message" role="alert">
    Cannot enable: subscription required
  </p>
</div>
```

**Responsive:**
- Larger switches on mobile
- Full-width labels for easier tapping
- Adequate spacing (24px+ between)
- Touch-friendly sizing
- Stack vertically on small screens

**Reduced Motion:**
- Instant state change (no slide)
- No thumb animation
- Track color changes instantly
- Respect prefers-reduced-motion

**Confirmation (when needed):**
- Show confirmation dialog for critical actions
- Revert switch if user cancels
- Async confirmation with loading state

**Best Practices:**
- Immediate effect (no "Apply" button)
- Reversible actions only
- Clear, concise labels
- Consistent positioning
- Group related switches
