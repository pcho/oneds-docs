## Description

Checkboxes allow users to select none, one, or multiple items from a list. They can be checked, unchecked, or set to an indeterminate state—perfect for multi-selection scenarios, settings toggles, and hierarchical selections where flexibility is key.

## Anatomy

1. **Checkbox Box** - Square selection control
2. **Checkmark** - Visual indicator when selected
3. **Label** - Text describing the option
4. **Help Text** - Additional clarification (optional)
5. **Indeterminate Indicator** - Dash for partial selection (optional)

## Specification

**Checkbox:**
- **Size**: `16px × 16px` (square)
- **Border**: `2px solid #D1D6DB`
- **Border Radius**: `4px`
- **Background**: White (`#FFFFFF`)
- **Gap**: `8px` (between checkbox and label)

**States:**

**Unchecked:**
- **Border**: `2px solid #D1D6DB`
- **Background**: White
- **Checkmark**: None
- **Description**: The option is unselected

**Checked:**
- **Border**: `2px solid #1890FF` (primary blue)
- **Background**: Primary blue (`#1890FF`)
- **Checkmark**: White checkmark (✓)
- **Description**: The option is selected, and the checked attribute is applied

**Indeterminate:**
- **Border**: `2px solid #1890FF`
- **Background**: Primary blue (`#1890FF`)
- **Icon**: White dash (−)
- **Description**: This state occurs when nested checkboxes under a parent checkbox are in both checked and unchecked states

**Hover (unchecked):**
- **Border**: `2px solid #0050B3`
- **Background**: Light blue (`#F0F9FF`)

**Hover (checked):**
- **Border**: `2px solid #0050B3`
- **Background**: Darker blue (`#0050B3`)

**Focus:**
- **Outline**: `2px solid #1890FF`
- **Outline Offset**: `2px`

**Disabled (unchecked):**
- **Border**: `2px solid #D1D6DB`
- **Background**: Light gray (`#F5F5F5`)
- **Label**: Gray (`#BFBFBF`)
- **Description**: Any of the previous states can also be disabled, preventing any changes to the current state

**Disabled (checked):**
- **Border**: `2px solid #D1D6DB`
- **Background**: Light gray (`#D1D6DB`)
- **Checkmark**: White but dimmed
- **Label**: Gray (`#BFBFBF`)

**Label:**
- **Font Size**: `14px`
- **Font Weight**: 400 (normal) for label, 500 (medium) if description included
- **Color**: Primary text (`#262626`)
- **Line Height**: `1.5`

**Help Text:**
- **Font Size**: `12px`
- **Color**: Secondary gray (`#8C8C8C`)
- **Margin Top**: `4px`

## Do

- Use checkboxes when multiple options can be selected.
- Add a description below the label to provide extra information.

## Don’t

- Don’t hide important information behind tooltips or icons—make it easily accessible.
- Avoid using checkboxes for mutually exclusive single-select options; instead, opt for radio buttons.
- If selecting an option changes the state or view of other content, consider using a segmented control for a smoother experience.
- Make all checkbox labels bold, even if they include a description, to maintain a clear text hierarchy.
- Make the entire checkbox label clickable to prevent selection issues.
- Avoid leaving the error checkbox without an accompanying inline error message.

## Uses

**Primary Use Cases:**

1. **Multi-Selection Lists** - Select multiple items
2. **Settings/Preferences** - Enable/disable features
3. **Filters** - Apply multiple filter criteria
4. **Terms & Conditions** - Agreement checkboxes
5. **Permissions** - Grant multiple permissions
6. **Hierarchical Selection** - Parent/child relationships
7. **Bulk Actions** - Select items for bulk operations

**Example Scenarios:**

**Simple List:**
```
Select notification preferences:
☑ Email notifications
☐ SMS notifications
☑ Push notifications
```

**Hierarchical (Indeterminate):**
```
☐ Select all documents
  ☑ Patent applications
  ☐ Technical drawings
  ☐ Legal documents
```

## When NOT to Use

### Maximum 10 Checkboxes

**If you have more than 10 checkboxes → Use Select (multi-select) instead.**

**Why:**
- Too many checkboxes = overwhelming
- Hard to scan long lists
- Better to use dropdown with search

**❌ Don't do this:**
```
Select countries:
☐ United States
☐ Canada
☐ Mexico
☐ United Kingdom
☐ France
☐ Germany
☐ Spain
☐ Italy
☐ Japan
☐ China
☐ Australia
... (50+ more countries)
```

**✅ Do this:**
```
Select countries:
[Multi-select dropdown with search ▼]
```

### Use Alternatives When:

**Use Radio Button for single selection:**
- Only one option can be selected
- Mutually exclusive choices
- All options should be visible

**Use Switch for immediate actions:**
- Setting takes effect immediately
- No submit button in form
- Binary on/off toggle
- See: [Switch component](/docs/components/switch.md) for decision tree

**Use Select for:**
- More than 10 options
- Space constraints
- Searchable options needed

## `name` Attribute REQUIRED for Groups

**Checkbox groups MUST have matching `name` attributes:**

**✅ Correct:**
```html
<fieldset>
  <legend>Notification preferences</legend>

  <label>
    <input type="checkbox" name="notifications" value="email" checked>
    Email
  </label>

  <label>
    <input type="checkbox" name="notifications" value="sms">
    SMS
  </label>

  <label>
    <input type="checkbox" name="notifications" value="push">
    Push
  </label>
</fieldset>
```

**❌ Incorrect:**
```html
<!-- Missing or mismatched name attributes -->
<input type="checkbox" value="email">
<input type="checkbox" value="sms">
```

**Why it matters:**
- Creates programmatic group relationship
- Screen readers announce group membership
- Form submission works correctly
- Required for accessibility

**See:** [Semantic HTML Requirements](/docs/patterns/semantic-html-requirements.md) for complete details on fieldset + legend patterns.

## Indeterminate State Limitations

**Not all screen readers fully support indeterminate state:**

```javascript
// Setting indeterminate state
checkbox.indeterminate = true;
```

**Limitations:**
- Some screen readers may not announce indeterminate state
- Not all assistive technology recognizes it
- Visual indicator (dash) may not be communicated

**Best practice:**
- Don't rely solely on indeterminate for critical information
- Provide additional context when needed
- Test with multiple screen readers

**Use indeterminate for:**
- Hierarchical selections (parent/child checkboxes)
- "Select all" partial states
- Visual convenience (not critical information)

## Label Requirements

**ALL checkboxes MUST have accessible labels.**

**See:** [Universal Label Requirements](/docs/patterns/universal-label-requirements.md)

**Wrapped labels (preferred):**
```html
<label>
  <input type="checkbox">
  Email notifications
</label>
```

**Or associated labels:**
```html
<input type="checkbox" id="email-notif">
<label for="email-notif">Email notifications</label>
```

## Behavior

**Selection:**
- Selecting an option changes its state to either checked or unchecked
- Click checkbox or label to toggle
- Keyboard Space to toggle focused checkbox

**Hierarchical Behavior:**
- Selecting a child checkbox can alter the state of a parent checkbox to checked, unchecked, or indeterminate, depending on the states of the sibling checkboxes
- When the parent checkbox is selected as either checked or unchecked, all child checkboxes must align with its state
- Indeterminate state shows dash (−) indicator

**Animation:**
- Checkmark scales in: 150ms
- Background color fades: 150ms
- Smooth state transitions

## Accessibility

**Semantic HTML:**
```html
<label class="checkbox-label">
  <input type="checkbox" checked>
  <span class="checkbox-box">
    <svg class="checkmark">✓</svg>
  </span>
  <span class="label-text">
    Email notifications
    <span class="help-text">Receive updates via email</span>
  </span>
</label>
```

**ARIA Attributes:**
- Native checkbox has built-in accessibility
- `aria-checked="true"`, `"false"`, or `"mixed"` (indeterminate)
- `aria-describedby` for help text
- `aria-disabled="true"` when disabled
- `aria-invalid="true"` on validation errors

**Keyboard Navigation:**
- `Tab` - Focus checkbox
- `Space` - Toggle checked/unchecked
- `Shift + Tab` - Previous checkbox

**Screen Reader Support:**
- Announce label clearly
- Announce checked/unchecked state
- Announce indeterminate state as "mixed" or "partially checked"
- Read help text
- Announce disabled state

**Focus Management:**
- Clear focus indicator required
- 3:1 contrast for focus outline
- Focus visible on keyboard navigation
- Logical tab order

**Label Association:**
- Use `<label>` wrapping input and text
- Or use `for` attribute linking to input `id`
- Entire label area clickable
- Make all checkbox labels bold, even if they include a description, to maintain a clear text hierarchy
- Make the entire checkbox label clickable to prevent selection issues

**Error States:**
```html
<label class="checkbox-label error">
  <input
    type="checkbox"
    aria-invalid="true"
    aria-describedby="error-message">
  <span class="label-text">I agree to terms</span>
</label>
<p id="error-message" role="alert">
  You must agree to continue
</p>
```

**Note:** Avoid leaving the error checkbox without an accompanying inline error message

**Color & Contrast:**
- Checked state meets 3:1 contrast
- Label text meets 4.5:1 contrast
- Focus indicator 3:1 contrast
- Don't rely on color alone
- Checkmark + background color combination

**Touch Targets:**
- Checkbox + label minimum 44×44px
- Adequate spacing between checkboxes (16px+)
- Full label area tappable

**Group of Checkboxes:**
```html
<fieldset>
  <legend>Notification preferences</legend>

  <label>
    <input type="checkbox" checked>
    Email
  </label>

  <label>
    <input type="checkbox">
    SMS
  </label>
</fieldset>
```
