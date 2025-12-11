---
title: Button
description: "Documentation for Button component"
---

## Description

Buttons are the clickable workhorses of every interface. They transform user intent into action—whether you're submitting a form, deleting an item, or saving changes. Think of them as the "do something" controls: clear, accessible, and always ready to respond.

## Anatomy

1. **Container** - Button background shape
2. **Label** - Text describing action
3. **Icon** - Visual indicator (optional)
4. **Loading Indicator** - Spinner during action (optional)
5. **Badge** - Count or notification dot (optional)

## Specification

**Default Button:**
- **Height**: `40px` (default/medium)
- **Padding**: `spacing-2 spacing-4`
- **Border Radius**: `radius-small`
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-emphasized`
- **Min Width**: `80px`
- **Gap**: `spacing-2` (between icon and text)

**Button Types:**

**Primary Button:**
- **Background**: `--bg-fill-brand-normal`
- **Text Color**: `--text-white`
- **Border**: None
- **Hover**: `--bg-fill-brand-normal-hover`
- **Active**: `--bg-fill-brand-dark`
- **Shadow**: `shadow-extra-small`

**Default Button:**
- **Background**: `--bg-surface-white`
- **Text Color**: `--text-normal`
- **Border**: `--border-lighter`
- **Hover**: `--bg-fill-lightest`
- **Active**: `--bg-fill-lighter`

**Dashed Button:**
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter` (dashed)
- **Style**: Same as default but dashed

**Text Button:**
- **Background**: Transparent
- **Border**: None
- **Text Color**: `--text-brand`
- **Hover**: `--bg-surface-brand-lighter`
- **Active**: Slightly darker background

**Link Button:**
- **Background**: Transparent
- **Border**: None
- **Text Color**: `--text-brand`
- **Hover**: Underline
- **No padding** (inline with text)

**Danger Button:**
- **Background**: `--bg-fill-danger-normal`
- **Text Color**: `--text-white`
- **Hover**: `--bg-fill-danger-normal-hover`
- **Border**: None

**Sizes:**

**Small:**
- **Height**: `32px`
- **Padding**: `spacing-1.5 spacing-3`
- **Font Size**: `text-xs`

**Default (Medium):**
- **Height**: `40px`
- **Padding**: `spacing-2 spacing-4`
- **Font Size**: `text-base`

**Large:**
- **Height**: `48px`
- **Padding**: `spacing-3 spacing-5`
- **Font Size**: `text-lg`

**Shapes:**
- **Default**: `radius-small`
- **Round**: `radius-round` (pill shape)
- **Circle**: Equal width/height, `radius-round`

**Icon Button:**
- **Size**: `40px × 40px` (square)
- **Padding**: `spacing-2`
- **Icon Size**: `20px`
- **No text**, icon only

**Button with Icon:**
- **Icon Size**: `16px`
- **Icon Position**: Leading or trailing
- **Gap**: `spacing-2` between icon and text

**States:**
- **Default**: Normal appearance
- **Hover**: Background/color change, slight elevation
- **Active**: Pressed appearance
- **Focus**: Blue outline ring (`2px`)
- **Loading**: Spinner, disabled interaction
- **Disabled**: Opacity `0.5`, gray, not clickable

## Do

- Use action-oriented labels that start with verbs ("Save", "Delete", "Submit")
- Show loading states during async actions
- Provide clear focus indicators for keyboard navigation
- Use primary button for the main action only
- Place primary action on the right in Western layouts
- Make buttons large enough to tap easily (minimum 32px height)
- Add icons when they clarify the action
- Disable buttons when actions are unavailable
- Show success or error feedback after the action completes

## Don't

- Use vague labels like "OK" or "Click here"
- Add more than one primary button per section
- Make buttons smaller than 32px height
- Forget disabled and focus states
- Remove focus indicators for keyboard users
- Use buttons for navigation—use links instead
- Overuse danger buttons—save them for truly destructive actions
- Create icon-only buttons without tooltips
- Nest buttons inside other buttons

## Uses

**Primary Use Cases:**

1. **Form Submission** - Save, Submit, Send
2. **Confirmation** - OK, Confirm, Accept
3. **Cancellation** - Cancel, Close, Dismiss
4. **Deletion** - Delete, Remove, Discard
5. **Creation** - Create, Add, New
6. **Navigation Actions** - Next, Previous, Continue
7. **Utility Actions** - Download, Export, Share
8. **Toggle Actions** - Show More, Expand, Collapse

**Example Scenarios:**

**Form Actions:**
```
[Cancel]  [Submit Application]
          └─ Primary button
```

**Danger Action:**
```
Delete this patent application permanently?

[Cancel]  [Delete]
          └─ Danger button
```

**Loading State:**
```
[⟳ Uploading...]
└─ Disabled during action
```

**Icon Button:**
```
[⋮] [✏️] [🗑️]
Menu Edit Delete
```

**Button Group:**
```
[Save Draft] [Preview] [Publish]
```

## When NOT to Use

### Use Link Instead When:

**For navigation to different pages:**
If clicking takes the user to a different URL, use a link instead of a button.

**Why it matters:**
- Users can open links in new tabs
- Links work with browser back/forward buttons
- Links can be bookmarked

### Use Alternatives When:

**Use Select/Dropdown instead of many buttons:**
- More than 5 options → Use Select
- Example: Don't use 10 status buttons, use status dropdown

**Use Tabs instead of toggle buttons:**
- Switching between views → Use Tabs component
- Example: List view / Grid view toggle

**Use Radio Buttons for selection:**
- Choosing one option from a group
- All options should be visible

### Button Label Guidelines

**Be specific with action labels using {verb} + {noun}:**

**Good examples:**
- "Delete patent"
- "Export data"
- "Save changes"
- "Add team member"
- "Cancel request"

**Too generic:**
- "Delete" (delete what?)
- "Export" (export what?)
- "Submit" (submit what?)
- "OK" (okay to what?)

**See:** [Content Style Guide](/docs/content/style-guide.md) for complete button labeling guidelines.

### Use Ellipsis for Dialog-Opening Actions

**When button opens a dialog requiring more input:**
- "Save as…" (opens dialog to choose location)
- "Export…" (opens format selection)

**Don't use ellipsis for:**
- Actions that complete immediately
- Navigation links

### Button Alignment by Context

**Forms (left-aligned):**
```
Email: [____________]
Phone: [____________]

[Cancel] [Submit]
```

**Modals (right-aligned):**
```
Delete this patent?

            [Cancel] [Delete]
```

**Why:**
- Forms: Aligns with form field flow (top to bottom, left edge)
- Modals: Visual weight at right, easier to reach with mouse

### Loading State Timing

**For operations under 5 seconds:**
- Use 1-second delay before showing spinner
- Prevents visual flicker for fast operations
- Users don't see loading state for quick actions

**For operations over 5 seconds:**
- Show loading state immediately
- Keep user informed
- Consider progress indicator instead of spinner

### Maximum Primary Buttons

**Rule:** One primary button per section/context

**Good:**
```
[Cancel] [Save Draft] [Publish Application]
                       └─ Only one primary
```

**Too many:**
```
[Delete] [Archive] [Publish] [Export]
└─ All primary - unclear which is main action
```

## Behavior

### States

**Default State:**
- Normal appearance
- Interactive cursor on hover
- Clear label visible

**Hover State:**
1. User hovers over button
2. Background darkens or changes
3. Cursor changes to pointer
4. Subtle elevation increase (optional)
5. Transition smooth (150ms)

**Active/Pressed State:**
- Darker background
- Slight scale down (0.98)
- Brief moment during click
- Pressed appearance

**Focus State:**
- Blue outline ring (2-3px)
- Clear keyboard navigation indicator
- Visible when tabbing

**Loading State:**
1. Button disables
2. Spinner appears (replaces icon or before text)
3. Text may change ("Saving...")
4. User cannot click
5. On complete: Return to normal or show success

**Disabled State:**
- Reduced opacity (0.5)
- Gray or muted colors
- No hover effect
- Cursor remains default
- Not clickable
- Tooltip explains why disabled (optional)

### Interactions

**Click:**
1. User clicks button
2. Brief active state
3. Action executes
4. Button may disable or show loading
5. Feedback provided (success/error)

**Keyboard:**
- `Tab` - Focus button
- `Enter/Space` - Activate button
- `Shift + Tab` - Previous button
- Focus visible on keyboard navigation

**Touch:**
- Tap to activate
- Ripple effect on tap (optional)
- No hover state on touch devices
- Minimum 44×44px tap area

### Button Groups

**Horizontal Group:**
- Buttons side by side
- Gap between buttons: `spacing-2`
- Primary on right (RTL: left)
- Consistent sizing

**Vertical Stack:**
- Full-width buttons
- Gap: `spacing-2`
- Primary at bottom or top

**Segmented Group:**
- Buttons connected (no gap)
- Shared borders
- Used for related actions

### Animations

**Hover:**
- Background color transition: 150ms
- Scale: 1.0 → 1.02 (subtle)
- Shadow increase
- Easing: Ease-out

**Press:**
- Scale: 1.0 → 0.98
- Duration: 100ms
- Easing: Ease-in

**Loading:**
- Spinner rotation: Continuous
- Fade in/out: 200ms
- Disable interaction during load

**Reduced Motion:**
- No scale animations
- Instant color changes
- No elevation animations
- Respect prefers-reduced-motion
