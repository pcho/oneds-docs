---
title: Input
description: "Documentation for Input component"
---

## Description

Input fields are where users talk to your application. They're the blank spaces that transform into meaningful data—names, emails, search queries, and everything in between. Simple in appearance but powerful in purpose, they're the foundation of every form and data entry experience.

## Anatomy

1. **Container** - Outer input wrapper
2. **Input Field** - Text entry area
3. **Label** - Field identifier (external)
4. **Placeholder** - Hint text inside field (optional)
5. **Prefix** - Icon or text before input (optional)
6. **Suffix** - Icon or text after input (optional)
7. **Clear Button** - X to clear input (optional)
8. **Helper Text** - Guidance below field (external, optional)
9. **Character Count** - Length indicator (optional)

## Specification

**Default Input:**
- **Width**: `320px` (default, flexible)
- **Height**: `40px`
- **Padding**: `spacing-2 spacing-3`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-small`
- **Background**: `--bg-surface-white`
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-normal`
- **Font Family**: System font stack

**States:**

**Default:**
- **Border**: `--border-lighter`
- **Background**: `--bg-surface-white`
- **Text**: `--text-normal`

**Hover:**
- **Border**: `--border-brand-normal-hover`
- **Transition**: 200ms ease

**Focus:**
- **Border**: `--border-brand-normal`
- **Box Shadow**: Focus ring
- **Outline**: None (use border + shadow)

**Filled:**
- **Text**: User-entered content
- **Background**: `--bg-surface-white`
- **Border**: Same as default

**Disabled:**
- **Background**: `--bg-fill-disabled`
- **Border**: `--border-disabled`
- **Text Color**: `--text-disabled`
- **Cursor**: Not-allowed

**Error:**
- **Border**: `--border-danger-normal`
- **Helper Text**: `--text-danger` error message
- **Icon**: Error icon (optional)

**Success:**
- **Border**: `--border-success-normal`
- **Icon**: Checkmark (optional)
- **Helper Text**: `--text-success` message

**Placeholder:**
- **Color**: `--text-placeholder`
- **Font Style**: Normal (not italic)
- **Opacity**: 1.0

**Sizes:**

**Small:**
- **Height**: `32px`
- **Padding**: `spacing-1.5 spacing-3`
- **Font Size**: `text-xs`

**Default (Medium):**
- **Height**: `40px`
- **Padding**: `spacing-2 spacing-3`
- **Font Size**: `text-base`

**Large:**
- **Height**: `48px`
- **Padding**: `spacing-3 spacing-4`
- **Font Size**: `text-lg`

**Prefix/Suffix:**
- **Size**: `16px` (icon)
- **Padding**: `spacing-3` (sides)
- **Color**: `--icon-lighter`
- **Background**: `--bg-fill-lightest`
- **Border**: Matches input border
- **Position**: Inside input, left or right

**Clear Button:**
- **Size**: `16px`
- **Position**: Right side, inside input
- **Color**: `--icon-lighter`
- **Hover**: `--icon-light`
- **Padding**: `spacing-3`

**Character Count:**
- **Font Size**: `text-xs`
- **Color**: `--text-lighter`
- **Position**: Below input, right-aligned
- **Warning**: `--text-warning` when approaching limit
- **Error**: `--text-danger` when exceeded

## Do

- Use clear, descriptive labels above fields
- Show placeholder text as examples, not instructions
- Provide helpful helper text when needed
- Validate on blur or submit—not during typing
- Show character count for fields with limits
- Use appropriate input types for better mobile keyboards (`email`, `tel`, `url`)
- Make required fields obvious
- Write clear, actionable error messages
- Always support paste functionality

## Don't

- Use placeholder as a label—it disappears when typing
- Validate before the user finishes typing
- Hide passwords without a show/hide toggle
- Disable paste, especially for passwords
- Make inputs too narrow for expected content
- Use text smaller than 14px
- Forget focus states for keyboard navigation
- Remove the clear button on fields with content

## Uses

**Primary Use Cases:**

1. **Text Entry** - Names, titles, descriptions
2. **Email Input** - Email addresses
3. **Password** - Secure password entry
4. **Search** - Search queries
5. **Numbers** - Age, quantity (use input-number for better UX)
6. **URLs** - Website addresses
7. **Phone Numbers** - Contact numbers
8. **Dates** - Manual date entry (prefer date-picker)
9. **Comments** - Short text responses

**Example Scenarios:**

**Basic Text Input:**
```
Full Name
┌────────────────────────────────┐
│ Alice Johnson                  │
└────────────────────────────────┘
```

**With Placeholder:**
```
Email Address
┌────────────────────────────────┐
│ alice@example.com              │
└────────────────────────────────┘
```

**With Prefix:**
```
Website URL
┌──────┬─────────────────────────┐
│https:││ example.com            │
└──────┴─────────────────────────┘
```

**With Suffix & Clear:**
```
Search Patents
┌─────────────────────────────┬──┐
│ machine learning            │🔍│×│
└─────────────────────────────┴──┘
```

**Password with Toggle:**
```
Password
┌─────────────────────────────┬──┐
│ ●●●●●●●●                    │👁 │
└─────────────────────────────┴──┘
Show password
```

**With Character Count:**
```
Patent Title
┌────────────────────────────────┐
│ AI-Based Classification        │
└────────────────────────────────┘
27/150 characters
```

**Error State:**
```
Email Address
┌────────────────────────────────┐
│ alice@invalid                  │ ⚠️
└────────────────────────────────┘
Please enter a valid email address
```

## When NOT to Use

### Use Alternatives Instead When:

**Use Select for more than 5 known options:**
```
❌ Don't use input with:
   Manual entry of "Red, Blue, Green, Yellow, Purple, Orange..."

✅ Use Select dropdown instead:
   [Select Color ▼] → Red, Blue, Green, Yellow, Purple...
```

**Use Textarea for long-form text:**
- More than 100 characters expected
- Multiple lines needed
- Comments, descriptions, notes

**Use Number Input for numeric values:**
- Don't validate text input as number
- Use dedicated Number Input component with step controls

**Use Date Picker for dates:**
- Don't make users type dates manually
- Format confusion (MM/DD/YYYY vs DD/MM/YYYY)
- Validation complexity

## Mark the Minority

**If most fields are required:** Mark only the optional ones.
```
Email address (optional)
Phone number (optional)
```

**If most fields are optional:** Mark only the required ones.
```
Email address *
Password *

* Required field
```

**Never use asterisks for optional fields**—asterisks universally mean "required."

## Placeholder Text Limitations

**Placeholders are not labels.**

**Why placeholders fail:**
- They disappear when typing starts
- They fail with browser autofill
- They have low contrast and are hard to read
- They're not accessible as labels
- Users lose context mid-typing

**Use placeholders for:**
- Format examples like "555-123-4567"
- Optional hints like "e.g., New York"
- Never as label replacements

## Error and Help Text Coordination

**Error messages replace help text temporarily, so both should contain essential information.**

**Wrong approach:**
```
Help text: "Create a strong password"
Error: "Password too weak"
← User loses requirement details when error appears
```

**Right approach:**
```
Help text: "Must be at least 8 characters and include one number"
Error: "Must be at least 8 characters and include one number"
← Requirements stay visible in both states
```

## Validation Timing

### Progressive Success Pattern

**Show success immediately, but wait to show errors:**

```
User types → Show success checkmark immediately ✓
User leaves field → Validate and show errors if any ✗
```

**Why this works:**
- Immediate success creates positive momentum
- Delayed errors don't interrupt typing flow
- Best balance between helpful feedback and avoiding annoyance

**Never validate on every keystroke**—wait for the user to finish.

## Content Guidelines

Follow the [Content Style Guide](/docs/content/style-guide.md):

**Labels:**
- Sentence case: "Email address" not "Email Address"
- Keep under 60 characters
- No colons at end

**Error messages:**
- Write solutions, not problems
- "Enter your email address in the format name@example.com"
- Not "Invalid field"

**Help text:**
- Full sentences with periods
- Coordinate with error messages (same essential info)

## Behavior

### Typing

**Entering Text:**
1. User clicks input field
2. Field gains focus (blue border)
3. Cursor appears
4. User types
5. Text appears character by character
6. Placeholder disappears
7. Clear button appears (if enabled)

**Autocomplete:**
- Browser may suggest saved values
- Show dropdown with suggestions
- Arrow keys to navigate suggestions
- Enter to select
- Escape to dismiss

### Focus

**Gaining Focus:**
1. User clicks or tabs to input
2. Border changes to focus state (blue, thicker)
3. Box shadow appears
4. Cursor positioned in field
5. Text selected if configured

**Maintaining Focus:**
- Cursor blinks
- Keyboard input active
- Clear indication of active field
- Helper text visible

**Losing Focus (Blur):**
1. User tabs away or clicks elsewhere
2. Border returns to default
3. Box shadow fades out
4. Validation triggers (if configured)
5. Value formatted (if applicable)

### Dismissing

**Clearing Input:**
- Click clear button (X)
- Field empties instantly
- Focus remains in field
- Placeholder reappears
- Cursor ready for new input

**Resetting:**
- Form reset button clears value
- Returns to empty state
- Validation cleared

### Validation

**On Blur:**
- Check value when user leaves field
- Show error if invalid
- Border turns red
- Helper text shows error message
- Icon appears

**On Submit:**
- Validate all fields
- Show errors for invalid fields
- Focus first error field
- Prevent submission

**Real-Time:**
- Validate as user types (optional, use sparingly)
- Good for: Password strength, username availability
- Bad for: Most text fields (annoying)

**Async Validation:**
- Check value against server (e.g., username availability)
- Show loading indicator
- Display result when complete

### Special Input Types

**Password:**
- Masked by default (●●●●●)
- Toggle button to show/hide
- Icon changes on toggle

**Search:**
- Magnifying glass icon
- Clear button prominent
- Autocomplete suggestions
- Submit on Enter

**Email:**
- Email keyboard on mobile
- Validation for email format
- @ symbol prominent on mobile keyboard

**Tel:**
- Numeric keyboard on mobile
- Format as user types (optional)
- Country code prefix (optional)

**URL:**
- URL keyboard on mobile
- .com button prominent
- Protocol prefix (https://)
- Validation for URL format

### States

**Empty:**
- Placeholder visible
- No clear button
- Ready for input

**Typing:**
- Cursor blinking
- Characters appearing
- Clear button visible (if configured)
- Real-time validation (optional)

**Filled:**
- Value present
- Clear button visible
- Can be edited

**Loading/Validating:**
- Spinner icon in suffix position
- Field may be disabled temporarily
- Awaiting async validation result

**Success:**
- Green border (optional)
- Checkmark icon
- Success message in helper text

**Error:**
- Red border
- Error icon
- Error message in helper text
- Focus indicator still visible

**Disabled:**
- Gray background
- Gray text
- Not interactive
- Tooltip explains why (optional)
