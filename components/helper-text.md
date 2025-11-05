## Description

Helper Text is your form field's supportive companion—the gentle guide that clarifies requirements, provides examples, or offers encouragement. Whether explaining format expectations, showing character counts, or delivering validation feedback, helper text makes forms friendlier and reduces user errors before they happen.

## Anatomy

1. **Text Content** - Helpful message or guidance
2. **Icon** - Visual indicator (optional)
3. **Link** - Action or "Learn more" link (optional)

## Specification

**Default Helper Text:**
- **Font Size**: `12px` (smaller than field label)
- **Font Weight**: 400 (normal)
- **Color**: Secondary gray (`#8C8C8C`)
- **Line Height**: `1.5`
- **Margin Top**: `4px` (below input field)
- **Max Width**: Matches input field width

**Helper Text Types:**

**Default (Informational):**
- **Color**: Gray (`#8C8C8C`)
- **Icon**: Info icon (ⓘ) (optional)
- **Purpose**: Guidance, examples, format hints

**Error:**
- **Color**: Red (`#F04438`)
- **Icon**: Error icon (⚠️) (optional)
- **Purpose**: Validation errors, what went wrong

**Warning:**
- **Color**: Orange (`#FAAD14`)
- **Icon**: Warning icon (⚠)
- **Purpose**: Potential issues, cautions

**Success:**
- **Color**: Green (`#52C41A`)
- **Icon**: Checkmark (✓) (optional)
- **Purpose**: Confirmation, validation success

**Icon Spacing:**
- **Icon Size**: `14px`
- **Gap**: `4px` between icon and text
- **Alignment**: Aligned with first line of text

## Do

- Keep messages concise and actionable
- Show helper text before errors occur
- Use positive, helpful language
- Provide examples when format specific
- Show character count for limited fields
- Update helper text based on input state
- Use specific error messages
- Link to additional help when needed

## Don't

- Don't use technical jargon
- Don't blame the user in error messages
- Don't show error text before user interacts
- Don't make helper text too long (3 lines max)
- Don't hide helper text unexpectedly
- Don't use only color to convey status
- Don't forget icons for clarity

## Uses

**Primary Use Cases:**

1. **Format Guidance** - "MM/DD/YYYY", "example@email.com"
2. **Character Limits** - "15/100 characters remaining"
3. **Validation Errors** - "Password must be at least 8 characters"
4. **Requirements** - "Include uppercase, number, and symbol"
5. **Success Confirmation** - "Username available ✓"
6. **Contextual Help** - "This will be visible to all users"
7. **Examples** - "e.g., US20240123456"
8. **Warnings** - "This action cannot be undone"

**Example Scenarios:**

**Format Guidance:**
```
Email Address
┌────────────────────────────────┐
│                                │
└────────────────────────────────┘
Enter your work email address
```

**Character Count:**
```
Patent Title
┌────────────────────────────────┐
│ Machine Learning Method        │
└────────────────────────────────┘
27/150 characters
```

**Error State:**
```
Password
┌────────────────────────────────┐
│ ●●●●●                          │
└────────────────────────────────┘
⚠️ Password must be at least 8 characters
```

**Success State:**
```
Username
┌────────────────────────────────┐
│ alice_inventor                 │
└────────────────────────────────┘
✓ Username available
```

**With Link:**
```
Patent Number
┌────────────────────────────────┐
│                                │
└────────────────────────────────┘
Format: US20240123456 (Learn more)
                      └─ Link
```

## Behavior

### Display States

**Initial State:**
- Shows guidance or format hint
- Neutral color (gray)
- Visible before user interaction
- Provides context

**During Input:**
- May update dynamically (character count)
- Real-time validation (optional)
- Positive reinforcement
- Clear feedback

**After Blur/Validation:**
- Shows validation result
- Error messages if invalid
- Success confirmation if valid
- Actionable next steps

**Error State Progression:**
1. User enters invalid value
2. On blur: Helper text changes to error
3. Icon and color update (red)
4. Specific error message shows
5. User corrects input
6. Error clears, success shows (optional)

### Focus

**Field Focus:**
- Helper text remains visible
- May highlight or emphasize
- Shows real-time validation (optional)
- Doesn't disappear on focus

**Reading Focus:**
- Screen readers read helper text
- Associated with input via `aria-describedby`
- Announced after field label
- Updates announced on change

### Dismissing

**Helper text is not dismissible:**
- Remains visible while relevant
- Changes based on input state
- Only disappears if field state changes
- Persistent guidance

**Error Clearing:**
- Error helper text clears when input becomes valid
- May show success message briefly
- Returns to default guidance
- Or hides if no default text

### Dynamic Updates

**Character Counter:**
- Updates on every keystroke
- Shows remaining count
- Warns when approaching limit
- Error state when exceeded

**Real-Time Validation:**
- Validates as user types (optional)
- Shows progress (e.g., password strength)
- Immediate feedback
- Clear requirements

**Async Validation:**
- Shows "Checking..." state
- Updates with result
- Spinner during check
- Success or error result

## Accessibility

**Semantic HTML:**
```html
<label for="email-input">Email Address</label>
<input
  type="email"
  id="email-input"
  aria-describedby="email-helper">

<p id="email-helper" class="helper-text">
  Enter your work email address
</p>
```

**With Error:**
```html
<label for="password-input">Password</label>
<input
  type="password"
  id="password-input"
  aria-describedby="password-helper"
  aria-invalid="true">

<p id="password-helper" class="helper-text error" role="alert">
  <svg aria-hidden="true">⚠️</svg>
  Password must be at least 8 characters
</p>
```

**ARIA Attributes:**
- `aria-describedby` links input to helper text
- `aria-invalid="true"` on error
- `role="alert"` for error messages (announces immediately)
- `aria-live="polite"` for dynamic updates (character count)
- Icons use `aria-hidden="true"`

**Multiple Helper Texts:**
```html
<input
  aria-describedby="format-hint error-message">

<p id="format-hint">Format: MM/DD/YYYY</p>
<p id="error-message" role="alert">Invalid date format</p>
```

**Screen Reader Support:**
- Helper text read after field label
- Error messages announced immediately
- Dynamic updates announced (character count)
- Icon meaning conveyed through text
- Associated with correct field

**Focus Management:**
- Helper text not focusable
- Read when field receives focus
- Updates announced on change
- Error messages interrupt

**Live Regions:**
```html
<!-- Character counter -->
<p aria-live="polite" aria-atomic="true">
  42 characters remaining
</p>

<!-- Error (immediate announcement) -->
<p role="alert" aria-live="assertive">
  ⚠️ Password must be at least 8 characters
</p>
```

**Color & Contrast:**
- Default helper text: 4.5:1 contrast minimum
- Gray text readable (not too light)
- Error text red with sufficient contrast
- Success text green with contrast
- Icon + color + text (not color alone)

**Icon Labels:**
- Icons supplemental, not required
- Text conveys meaning
- `aria-hidden="true"` on decorative icons
- Text describes error/success

**Error Messaging:**
- Specific, actionable messages
- Avoid generic "Invalid input"
- Explain what's wrong and how to fix
- Positive, helpful tone
- Example: "Password must include at least one number" vs "Invalid"

**Timing:**
- Don't show errors before user interacts
- Validate on blur (after leaving field)
- Real-time for long inputs (optional)
- Allow corrections before submitting

**Character Counter Accessibility:**
```html
<label for="title-input">Patent Title</label>
<input
  id="title-input"
  maxlength="150"
  aria-describedby="title-counter">

<p id="title-counter" aria-live="polite">
  <span class="sr-only">Character count:</span>
  27 of 150 characters
</p>
```

**Responsive:**
- Helper text wraps on small screens
- Maintains readability
- Adequate font size (12px minimum)
- Doesn't overlap input
- Stacks cleanly

**Language:**
- Clear, concise language
- Plain language (avoid jargon)
- Positive tone
- Action-oriented
- Culturally appropriate

**Required Field Hints:**
```html
<label for="name-input">
  Full Name <span aria-label="required">*</span>
</label>
<input
  id="name-input"
  required
  aria-required="true"
  aria-describedby="name-helper">

<p id="name-helper">
  Enter your first and last name
</p>
```
