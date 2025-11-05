## Description

Radio Button lets users select exactly one option from a set of mutually exclusive choices. Like old car radios where pressing one button pops out the others, radio buttons make it clear that only one selection is possible at a time. Simple, familiar, and perfect for "pick one" scenarios.

## Anatomy

1. **Radio Circle** - Circular selection indicator
2. **Inner Dot** - Fill when selected
3. **Label** - Option text
4. **Radio Group** - Container for related options
5. **Helper Text** - Additional guidance (optional)

## Specification

**Radio Button:**
- **Size**: `16px × 16px` (circle)
- **Border**: `2px solid #D1D6DB`
- **Border Radius**: `50%` (perfect circle)
- **Background**: White (`#FFFFFF`)
- **Gap**: `8px` (between radio and label)

**Radio States:**

**Unchecked:**
- **Border**: `2px solid #D1D6DB`
- **Background**: White
- **Inner Dot**: None

**Checked:**
- **Border**: `2px solid #1890FF` (primary blue)
- **Inner Dot**: `8px` circle, primary blue (`#1890FF`)
- **Centered**: Dot centered in circle

**Hover (unchecked):**
- **Border**: `2px solid #0050B3`
- **Transition**: 200ms ease

**Hover (checked):**
- **Border**: `2px solid #0050B3`
- **Inner Dot**: Darker blue (`#0050B3`)

**Focus:**
- **Outline**: `2px solid #1890FF`
- **Outline Offset**: `2px`
- **Border**: Maintains checked/unchecked border

**Disabled (unchecked):**
- **Border**: `2px solid #D1D6DB`
- **Background**: Light gray (`#F5F5F5`)
- **Label**: Gray (`#BFBFBF`)
- **Cursor**: Not-allowed

**Disabled (checked):**
- **Border**: `2px solid #D1D6DB`
- **Inner Dot**: Gray (`#D1D6DB`)
- **Background**: Light gray (`#F5F5F5`)
- **Label**: Gray (`#BFBFBF`)

**Label:**
- **Font Size**: `14px`
- **Font Weight**: 400 (normal)
- **Color**: Primary text (`#262626`)
- **Line Height**: `1.5`
- **Cursor**: Pointer (entire label clickable)

**Radio Group:**
- **Layout**: Vertical stack (default)
- **Gap**: `16px` between options
- **Horizontal**: Optional, use `gap: 24px`

**Sizes:**

**Small:**
- **Circle**: `14px × 14px`
- **Inner Dot**: `6px`
- **Font Size**: `12px`

**Default (Medium):**
- **Circle**: `16px × 16px`
- **Inner Dot**: `8px`
- **Font Size**: `14px`

**Large:**
- **Circle**: `20px × 20px`
- **Inner Dot**: `10px`
- **Font Size**: `16px`

**Helper Text:**
- **Font Size**: `12px`
- **Color**: Gray (`#8C8C8C`)
- **Position**: Below radio group or individual option
- **Margin Top**: `4px`

## Do

- Group related options together
- Provide clear, concise labels
- Use for 2-7 options (more? use select/dropdown)
- Show all options visible at once
- Pre-select a default option when appropriate
- Use vertical layout for easier scanning
- Make entire label clickable
- Provide clear group label/legend

## Don't

- Don't use for single yes/no (use checkbox or toggle)
- Don't use for too many options (>7, use select)
- Don't make options vague or ambiguous
- Don't forget to group related radios
- Don't allow deselection (once selected, always one selected)
- Don't use horizontal layout for long labels
- Don't forget disabled state styling

## Uses

**Primary Use Cases:**

1. **Single Selection** - Choose one shipping method, payment type
2. **Settings** - Privacy settings, notification preferences
3. **Filters** - Sort by price, date, relevance
4. **Surveys** - Rating scales, multiple choice questions
5. **Forms** - Gender, country, status selection
6. **Wizards** - Step-by-step option selection
7. **Preferences** - Theme selection, language choice

**Example Scenarios:**

**Shipping Method:**
```
Select shipping method:

○ Standard Shipping (5-7 days) — Free
○ Express Shipping (2-3 days) — $9.99
● Overnight Shipping (1 day) — $24.99
```

**Payment Type:**
```
Payment method:

● Credit Card
○ PayPal
○ Bank Transfer
```

**Filter Options:**
```
Sort by:

○ Newest first
● Most relevant
○ Price: Low to high
○ Price: High to low
```

**Yes/No Question:**
```
Do you want to receive email notifications?

● Yes
○ No
```

**Horizontal Layout:**
```
Patent Status:

○ Pending  ● Approved  ○ Rejected
```

## When NOT to Use

### Use Select/Dropdown for More Than 7 Options

**If you have more than 7 radio options → Use Select/Dropdown instead.**

**Why:**
- Too many radio buttons = overwhelming vertical space
- Hard to scan long lists
- Select provides search and grouping

**❌ Don't do this:**
```
Select country:
○ United States
○ Canada
○ Mexico
○ United Kingdom
○ France
○ Germany
○ Spain
○ Italy
... (50+ more countries)
```

**✅ Do this:**
```
Select country:
[Dropdown with search ▼]
```

**Sweet spot:** 2-7 options for radio buttons

### Use Alternatives When:

**Use Checkbox for multi-select:**
- Multiple options can be selected
- Not mutually exclusive
- "Select all that apply"

**Use Switch for immediate toggle:**
- Binary on/off setting
- Takes effect immediately
- No submit button
- See: [Switch component](/docs/components/switch.md)

**Use Tabs for view switching:**
- Changing between different views
- Navigation between sections
- Visual distinction important

**Use Segmented Control for:**
- 2-4 options
- View mode switching (list/grid)
- Compact horizontal layout needed

## Default Selection Strategy

### When to Pre-Select an Option:

**Pre-select for 2-3 options:**
- Clear default exists
- Most common choice obvious
- User likely to keep default

**Example:**
```
Shipping method:
● Standard (5-7 days) — Free  ← Pre-selected
○ Express (2-3 days) — $9.99
```

**Require explicit choice for 4+ options:**
- No obvious default
- All choices equally valid
- Important decision requiring attention

**Example:**
```
Privacy setting:
○ Public
○ Friends only
○ Private
○ Custom
← No pre-selection, forces user to choose
```

**Reason:** With many options, pre-selection may cause users to miss the question entirely. Requiring choice ensures conscious decision.

## NEVER Nest Other Elements in Radio Groups

**Radio groups must be flat - no nesting of other form elements:**

**❌ Don't do this:**
```html
<fieldset>
  <legend>Shipping method</legend>

  <label>
    <input type="radio" name="shipping" value="standard">
    Standard
  </label>

  <label>
    <input type="radio" name="shipping" value="custom">
    Custom
    <input type="text" placeholder="Enter custom option">
    <!-- Nested input breaks keyboard navigation -->
  </label>
</fieldset>
```

**✅ Do this instead:**
```html
<fieldset>
  <legend>Shipping method</legend>

  <label>
    <input type="radio" name="shipping" value="standard">
    Standard
  </label>

  <label>
    <input type="radio" name="shipping" value="custom">
    Custom
  </label>
</fieldset>

<!-- Show custom input outside group when "Custom" selected -->
<div id="custom-input" hidden>
  <label for="custom-option">Custom option</label>
  <input type="text" id="custom-option">
</div>
```

**Why:** Nesting breaks keyboard navigation (arrow keys won't work properly) and confuses screen readers.

## Arrow Keys Don't Loop

**When navigating with arrow keys:**

```
User presses Down Arrow on last option → Nothing happens (stays on last)
User presses Up Arrow on first option → Nothing happens (stays on first)
```

**No looping at boundaries** - this is the standard behavior in most design systems.

**Why:** Provides clear feedback that you've reached the end/beginning of the list.

## Label Requirements

**ALL radio buttons MUST have accessible labels.**

**See:** [Universal Label Requirements](/docs/patterns/universal-label-requirements.md)

**Radio groups also need fieldset + legend:**

**✅ Correct:**
```html
<fieldset>
  <legend>Shipping method</legend>

  <label>
    <input type="radio" name="shipping" value="standard" checked>
    Standard
  </label>

  <label>
    <input type="radio" name="shipping" value="express">
    Express
  </label>
</fieldset>
```

**Why fieldset + legend:**
- Groups related radios semantically
- Legend provides context for entire group
- Screen readers announce legend before each option
- WCAG Level A requirement

**See:** [Semantic HTML Requirements](/docs/patterns/semantic-html-requirements.md) for complete details.

## Behavior

### Selection

**Clicking Radio:**
1. User clicks radio circle or label
2. Previous selection unchecks (dot disappears)
3. New selection checks (dot appears)
4. Transition smooth (200ms)
5. Change event fires

**Clicking Label:**
- Entire label area clickable
- Same behavior as clicking circle
- Easier target for users
- Better accessibility

**Keyboard Selection:**
- Arrow keys change selection
- Selected option gets checked
- Previous option unchecks automatically
- Circular navigation (wrap around)

### Focus

**Gaining Focus:**
1. User tabs to radio group
2. First radio (or checked radio) receives focus
3. Focus outline appears
4. Screen reader announces group and option

**Within Group:**
- Arrow keys move focus AND selection
- Only one radio in group tabbable (roving tabindex)
- Focus visible on current selection
- Tab exits group to next element

**Losing Focus:**
- Tab moves to next form element
- Focus outline disappears
- Selection remains
- No validation yet (usually on submit)

### Dismissing

**Radio buttons don't dismiss:**
- Once an option is selected, cannot deselect all
- Always one option selected in group
- To allow "none," add an explicit "None" option
- Clicking same radio does nothing

**Form Reset:**
- Resets to initial/default value
- Or to first option if no default
- Maintains single-selection rule

### States

**Unchecked:**
- Empty circle
- Neutral border color
- Available for selection

**Checked:**
- Filled dot
- Primary color border and dot
- Currently selected option

**Hover:**
- Border color darkens
- Cursor pointer
- Shows interactivity

**Focus:**
- Outline ring appears
- Keyboard navigation indicator
- Clear visual distinction

**Disabled:**
- Gray colors
- Not interactive
- May show tooltip explaining why
- Still visible but not selectable

## Accessibility

**Semantic HTML:**
```html
<fieldset>
  <legend>Select shipping method</legend>

  <div class="radio-group">
    <label>
      <input
        type="radio"
        name="shipping"
        value="standard"
        checked>
      <span class="radio-button"></span>
      Standard Shipping (5-7 days) — Free
    </label>

    <label>
      <input
        type="radio"
        name="shipping"
        value="express">
      <span class="radio-button"></span>
      Express Shipping (2-3 days) — $9.99
    </label>

    <label>
      <input
        type="radio"
        name="shipping"
        value="overnight">
      <span class="radio-button"></span>
      Overnight Shipping (1 day) — $24.99
    </label>
  </div>
</fieldset>
```

**With ARIA:**
```html
<div role="radiogroup" aria-labelledby="shipping-label">
  <p id="shipping-label">Select shipping method</p>

  <label>
    <input
      type="radio"
      name="shipping"
      value="standard"
      checked
      aria-checked="true">
    Standard Shipping
  </label>

  <label>
    <input
      type="radio"
      name="shipping"
      value="express"
      aria-checked="false">
    Express Shipping
  </label>
</div>
```

**ARIA Attributes:**
- `role="radiogroup"` on container (or use `<fieldset>`)
- `aria-labelledby` or `<legend>` for group label
- `aria-checked="true"` on checked radio
- `aria-required="true"` if required
- `aria-describedby` for helper text
- `aria-disabled="true"` for disabled options

**Keyboard Navigation:**
- `Tab` - Focus radio group (first or checked radio)
- `Arrow Up/Down` - Navigate and select (vertical layout)
- `Arrow Left/Right` - Navigate and select (horizontal layout)
- `Space` - Select focused radio (if not auto-selecting)
- `Tab` - Exit group to next element

**Roving Tabindex:**
- Only one radio in group has `tabindex="0"`
- Others have `tabindex="-1"`
- Checked radio gets `tabindex="0"`
- Arrow keys move both focus and tabindex

**Screen Reader Support:**
- Announce group label/legend first
- Announce each option label
- Announce checked/unchecked state
- Announce position (e.g., "2 of 3")
- Announce required status
- Announce disabled options
- Announce helper text

**Focus Management:**
- Clear focus indicator required
- 3:1 contrast for focus outline
- Focus visible on keyboard navigation
- Outline separate from selection state
- Logical tab order

**Label Association:**
- Use `<label>` wrapping input and text
- Or use `for` attribute linking to input `id`
- Entire label clickable
- Label clearly associated

**Required Fields:**
```html
<fieldset>
  <legend>
    Gender <span aria-label="required">*</span>
  </legend>
  <input
    type="radio"
    name="gender"
    required
    aria-required="true">
  ...
</fieldset>
```

**Helper Text:**
```html
<fieldset>
  <legend>Notification preferences</legend>
  <p id="notification-help">
    Choose how often you'd like to receive updates
  </p>

  <input
    type="radio"
    name="notifications"
    aria-describedby="notification-help">
  ...
</fieldset>
```

**Color & Contrast:**
- Selected state meets 3:1 contrast (non-text)
- Label text meets 4.5:1 contrast
- Focus indicator 3:1 contrast
- Don't rely on color alone
- Checked state uses dot + color
- Disabled state clearly distinguishable

**Touch Targets:**
- Radio + label minimum 44×44px
- Adequate spacing between options (16px+)
- Entire label area tappable
- Larger targets on mobile

**Custom Radio Buttons:**
- Hide native input: `opacity: 0` or `position: absolute`
- Don't use `display: none` (breaks accessibility)
- Custom visual must reflect all states
- Maintain keyboard and screen reader support

**Error States:**
```html
<fieldset aria-invalid="true" aria-describedby="error-message">
  <legend>Select payment method</legend>

  <!-- Radio options -->

  <p id="error-message" role="alert">
    Please select a payment method
  </p>
</fieldset>
```

**Group Labeling:**
- Always use `<fieldset>` and `<legend>`
- Or `role="radiogroup"` with `aria-labelledby`
- Group label describes the choice
- Individual labels describe each option

**Mobile Considerations:**
- Larger touch targets (min 44×44px)
- More spacing between options (24px+)
- Full-width labels for easier tapping
- Consider stacking vertically always

**Single Name Attribute:**
- All radios in group share same `name` attribute
- Ensures mutual exclusivity
- Required for form submission
- Browser enforces single selection

**Default Selection:**
- Consider pre-selecting an option
- Reduces errors and form abandonment
- Use most common or recommended option
- Or require explicit selection (validation)

**Responsive:**
- Vertical stack on mobile (easier to tap)
- Horizontal on desktop (if labels short)
- Maintain spacing and touch targets
- Full-width labels on small screens
