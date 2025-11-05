## Description

Input is the fundamental text entry field—your users' primary way to provide information, answer questions, and communicate with your application. From names and emails to search queries and comments, it's the workhorse of forms and data entry, transforming blank spaces into meaningful interactions.

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
- **Padding**: `8px 12px`
- **Border**: `1px solid #D1D6DB`
- **Border Radius**: `6px`
- **Background**: White (`#FFFFFF`)
- **Font Size**: `14px`
- **Font Weight**: 400 (normal)
- **Font Family**: System font stack

**States:**

**Default:**
- **Border**: `1px solid #D1D6DB`
- **Background**: White
- **Text**: Primary color (`#262626`)

**Hover:**
- **Border**: `1px solid #0050B3`
- **Transition**: 200ms ease

**Focus:**
- **Border**: `2px solid #1890FF` (primary blue)
- **Box Shadow**: `0 0 0 2px rgba(24, 144, 255, 0.1)`
- **Outline**: None (use border + shadow)

**Filled:**
- **Text**: User-entered content
- **Background**: White
- **Border**: Same as default

**Disabled:**
- **Background**: Light gray (`#F5F5F5`)
- **Border**: `1px solid #D1D6DB`
- **Text Color**: Gray (`#BFBFBF`)
- **Cursor**: Not-allowed

**Error:**
- **Border**: `2px solid #F04438` (red)
- **Helper Text**: Red error message
- **Icon**: Error icon (optional)

**Success:**
- **Border**: `2px solid #52C41A` (green)
- **Icon**: Checkmark (optional)
- **Helper Text**: Success message

**Placeholder:**
- **Color**: Gray (`#BFBFBF`)
- **Font Style**: Normal (not italic)
- **Opacity**: 1.0

**Sizes:**

**Small:**
- **Height**: `32px`
- **Padding**: `6px 12px`
- **Font Size**: `12px`

**Default (Medium):**
- **Height**: `40px`
- **Padding**: `8px 12px`
- **Font Size**: `14px`

**Large:**
- **Height**: `48px`
- **Padding**: `12px 16px`
- **Font Size**: `16px`

**Prefix/Suffix:**
- **Size**: `16px` (icon)
- **Padding**: `12px` (sides)
- **Color**: Gray (`#8C8C8C`)
- **Background**: Light gray (`#F9FAFB`)
- **Border**: Matches input border
- **Position**: Inside input, left or right

**Clear Button:**
- **Size**: `16px`
- **Position**: Right side, inside input
- **Color**: Gray (`#8C8C8C`)
- **Hover**: Darker gray (`#595959`)
- **Padding**: `12px`

**Character Count:**
- **Font Size**: `12px`
- **Color**: Gray (`#8C8C8C`)
- **Position**: Below input, right-aligned
- **Warning**: Orange when approaching limit
- **Error**: Red when exceeded

## Do

- Use clear, descriptive labels
- Show placeholder as example, not instruction
- Provide helpful helper text
- Validate on blur or submit
- Show character count for limited fields
- Use appropriate input types (`email`, `tel`, `url`)
- Make required fields obvious
- Provide clear error messages
- Support paste functionality

## Don't

- Don't use placeholder as label
- Don't validate before user finishes typing
- Don't hide password by default without toggle
- Don't disable paste (especially passwords)
- Don't make inputs too narrow for expected content
- Don't use tiny text (minimum 14px)
- Don't forget focus states
- Don't remove the clear button on non-empty fields

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

## Label is ALWAYS Required

**CRITICAL:** Every input field MUST have a label. This is a WCAG Level A requirement.

**Visual labels are strongly preferred:**
```html
<label for="email">Email address</label>
<input type="email" id="email" name="email">
```

**Fields without labels fail WCAG accessibility standards.**

**See:** [Universal Label Requirements](/docs/patterns/universal-label-requirements.md) for complete guidance.

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
- Use proper `<input type="number">` with step controls
- Or use dedicated Number Input component

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

**NEVER use asterisks for optional fields** - this is confusing since asterisks universally mean "required".

## Placeholder Text Limitations

**Placeholders are NOT labels:**

**Problems with placeholders:**
- Disappear when user starts typing
- Fail with browser autofill
- Low contrast (hard to read)
- Not accessible labels
- Lost context mid-typing

**❌ Don't do this:**
```html
<input type="email" placeholder="Email address">
<!-- No label, fails WCAG -->
```

**✅ Do this:**
```html
<label for="email">Email address</label>
<input type="email" id="email" placeholder="name@example.com">
<!-- Label always visible, placeholder shows format -->
```

**Use placeholders for:**
- Format examples ("555-123-4567")
- Optional hints ("e.g., New York")
- NOT as replacements for labels

## Error and Help Text Coordination

**Error messages replace help text temporarily:**

```html
<!-- Normal state -->
<label>Password</label>
<input type="password" aria-describedby="password-help">
<span id="password-help">
  Must be at least 8 characters and include one number
</span>

<!-- Error state -->
<label>Password</label>
<input type="password" aria-describedby="password-error">
<span id="password-error" role="alert">
  Password must be at least 8 characters and include one number
</span>
```

**Important:** Both help text and error message should contain essential information, since error replaces help text.

**❌ Don't do this:**
```
Help text: "Create a strong password"
Error: "Password too weak"
<!-- User loses requirement information when error shows -->
```

**✅ Do this:**
```
Help text: "Must be at least 8 characters and include one number"
Error: "Must be at least 8 characters and include one number"
<!-- Requirements visible in both states -->
```

## Validation Timing

### Progressive Success Pattern

**Show success immediately, show errors on blur:**

```
User types → Show success immediately ✓
User leaves field → Validate and show errors if any ✗
```

**Why:**
- Immediate success = positive feedback, encourage continuation
- Errors on blur = don't interrupt typing with error messages
- Best balance between feedback and annoyance

**Don't validate on every keystroke** - wait for user to finish.

**Pattern:**
```javascript
// Show success as soon as valid
input.addEventListener('input', () => {
  if (isValid(input.value)) {
    showSuccess();
  }
});

// Show errors only after user leaves field
input.addEventListener('blur', () => {
  if (!isValid(input.value)) {
    showError();
  }
});
```

## Content Guidelines

Follow the [Content Style Guide](/docs/content/style-guide.md):

**Labels:**
- Sentence case: "Email address" not "Email Address"
- Keep under 60 characters
- No colons at end

**Error messages:**
- Write solutions, not problems
- ✅ "Enter your email address in the format name@example.com"
- ❌ "Invalid field"

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
6. Screen readers announce label and type

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
- Screen reader announces visibility state

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

## Accessibility

**Semantic HTML:**
```html
<label for="email-input">Email Address</label>
<input
  type="email"
  id="email-input"
  name="email"
  placeholder="alice@example.com"
  required
  aria-required="true"
  aria-describedby="email-helper">

<p id="email-helper">
  Enter your work email address
</p>
```

**With Error:**
```html
<label for="password-input">Password</label>
<input
  type="password"
  id="password-input"
  aria-describedby="password-helper password-error"
  aria-invalid="true">

<p id="password-helper">
  Must be at least 8 characters
</p>
<p id="password-error" role="alert">
  Password is too short
</p>
```

**ARIA Attributes:**
- `aria-label` or associated `<label>`
- `aria-describedby` for helper text/errors
- `aria-invalid="true"` on error
- `aria-required="true"` for required fields
- `role="alert"` for error messages
- `aria-live="polite"` for character count

**Input Types:**
- Use correct `type` attribute
- `type="email"` for emails
- `type="tel"` for phones
- `type="url"` for URLs
- `type="search"` for search
- `type="password"` for passwords
- `inputmode="numeric"` for number-only keyboards

**Keyboard Navigation:**
- `Tab` - Focus input
- `Shift + Tab` - Previous input
- `Escape` - Clear suggestions (if autocomplete)
- `Arrow keys` - Navigate autocomplete (if present)
- `Enter` - Submit form (in form context)

**Screen Reader Support:**
- Read label clearly
- Announce input type
- Read placeholder as hint
- Read helper text on focus
- Announce errors immediately
- Announce character count updates
- Describe required fields
- Announce validation state changes

**Focus Management:**
- Clear, visible focus indicator
- 3:1 contrast ratio for focus outline
- Don't remove focus styles
- Focus visible on keyboard navigation
- Logical tab order

**Labels:**
- Always provide visible label
- Don't use placeholder as label
- Label associated with input via `for` attribute
- Required indicator in label (*)<parameter>
- Label describes purpose clearly

**Placeholder Text:**
- Not a replacement for label
- Show example format
- Brief and clear
- Don't repeat label text
- Accessible to screen readers

**Character Counter:**
```html
<label for="title-input">Patent Title</label>
<input
  id="title-input"
  maxlength="150"
  aria-describedby="title-counter">

<p id="title-counter" aria-live="polite" aria-atomic="true">
  <span class="sr-only">Character count:</span>
  27 of 150 characters
</p>
```

**Password Show/Hide:**
```html
<label for="password-input">Password</label>
<div class="password-wrapper">
  <input
    type="password"
    id="password-input"
    aria-describedby="password-toggle">

  <button
    type="button"
    id="password-toggle"
    aria-label="Show password"
    aria-pressed="false">
    👁
  </button>
</div>
```

**Autocomplete:**
- Use `autocomplete` attribute
- `autocomplete="email"` for emails
- `autocomplete="name"` for names
- `autocomplete="new-password"` for new passwords
- `autocomplete="current-password"` for login
- Helps users and password managers

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Placeholder text meets 4.5:1 contrast
- Focus indicator 3:1 contrast
- Error states use icon + color + text
- Don't rely on color alone

**Touch Targets:**
- Input field minimum 44×44px
- Clear button minimum 44×44px
- Adequate spacing between inputs
- Larger inputs on mobile

**Error Messaging:**
- Specific, actionable errors
- Appear on blur or submit
- Use `role="alert"` for immediate announcement
- Clear explanation of problem
- How to fix the error

**Required Fields:**
```html
<label for="name-input">
  Full Name
  <span aria-label="required">*</span>
</label>
<input
  id="name-input"
  required
  aria-required="true">
```

**Disabled Inputs:**
- Use sparingly
- Explain why disabled
- Consider read-only instead
- Keyboard not focusable
- Screen reader announces disabled state

**Mobile Considerations:**
- Use appropriate `inputmode`
- `inputmode="numeric"` for numbers
- `inputmode="email"` for email
- `inputmode="tel"` for phone
- `inputmode="url"` for URLs
- Larger font sizes (16px minimum to prevent zoom)

**Autofocus:**
- Use sparingly (only on primary actions like search)
- Don't surprise users
- Announce to screen readers
- Consider accessibility implications

**Responsive:**
- Full-width on mobile (optional)
- Adequate font size (16px+ on mobile)
- Larger touch targets
- Clear button easily tappable
- Stack label above input
