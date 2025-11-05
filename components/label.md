## Description

Label provides a descriptive title for form elements, giving essential context for filling out forms by linking each field to its label. Clear, concise labels are the foundation of accessible, user-friendly forms—guiding users through data entry with clarity and confidence.

## Anatomy

1. **Title Text** - Descriptive field name
2. **Required Indicator** - Asterisk (*) for required fields (optional)
3. **Optional Tag** - "(optional)" text for optional fields (optional)

## Specification

**Label:**
- **Font Size**: `14px`
- **Font Weight**: 500 (medium)
- **Color**: `#2A353F`
- **Line Height**: `1.43` (20px / 14px)
- **Gap Below**: `6px` (space to next element)
- **Display**: Block (full width)

**Required Indicator:**
- **Symbol**: `*` (asterisk)
- **Color**: Blue (`#155EEF`)
- **Font Size**: `16px`
- **Font Weight**: 600 (semi-bold)
- **Position**: After label text
- **Spacing**: `4px` gap before asterisk

**Optional Tag:**
- **Text**: "(optional)"
- **Color**: Secondary gray (`#8C8C8C`)
- **Font Weight**: 400 (normal)
- **Position**: After label text

## Do

- Use concise field labels and add extra details in the Helper Text component when needed
- Mark required fields with an asterisk
- Keep labels short (1-3 words ideal)
- Use sentence case for labels
- Place labels above input fields
- Align labels with their inputs
- Use consistent labeling patterns

## Don't

- Refrain from placing icons before labels
- Use labels as independent elements on a page
- Avoid making the field label text excessively large, as it can hinder scanning
- Don't use labels as placeholders
- Don't hide required indicators
- Don't make labels too long
- Don't use unclear abbreviations

## Uses

**Primary Use Cases:**

1. **Form Fields** - Text inputs, selects, textareas
2. **Checkboxes** - Checkbox groups and individual checkboxes
3. **Radio Buttons** - Radio button groups
4. **File Uploads** - File input labels
5. **Date Pickers** - Date selection fields
6. **Switches** - Toggle switch labels

**Example Scenarios:**

**Required Field:**
```
Email Address *
┌────────────────────────────────┐
│                                │
└────────────────────────────────┘
```

**Optional Field:**
```
Middle Name (optional)
┌────────────────────────────────┐
│                                │
└────────────────────────────────┘
```

**With Helper Text:**
```
Password *
┌────────────────────────────────┐
│                                │
└────────────────────────────────┘
Must be at least 8 characters
```

## Behavior

**Static Display:**
- Labels always visible
- Don't disappear on focus
- Maintain position above field
- Clear relationship to input

**Required vs Optional:**
- Mark required fields with *
- Or mark optional fields with "(optional)"
- Be consistent across form
- Don't mark both

## Accessibility

**Semantic HTML:**
```html
<!-- Explicit label -->
<label for="email-input">
  Email Address
  <span aria-label="required">*</span>
</label>
<input
  type="email"
  id="email-input"
  required
  aria-required="true">

<!-- Wrapping label -->
<label>
  Full Name
  <span class="required">*</span>
  <input
    type="text"
    required
    aria-required="true">
</label>
```

**ARIA Attributes:**
- `for` attribute links label to input `id`
- `aria-label` for required indicator
- `aria-required="true"` on required inputs
- `aria-describedby` links to helper text

**Screen Reader Support:**
- Read label before input
- Announce required status
- Read "required" or "asterisk" for *
- Associate label with input clearly
- Read optional indicators

**Label Association:**
- Use `<label>` with `for` attribute
- Or wrap input inside `<label>`
- Essential for accessibility
- Enables click-to-focus
- Screen readers depend on it

**Required Field Indicators:**
```html
<label for="name-input">
  Full Name
  <abbr
    title="required"
    aria-label="required">*</abbr>
</label>
```

**Optional Fields:**
```html
<label for="middle-input">
  Middle Name
  <span class="optional-text">(optional)</span>
</label>
```

**Color & Contrast:**
- Label text meets 4.5:1 contrast
- Required indicator visible
- Don't rely on color alone for required status
- Asterisk + aria-label combination

**Focus Behavior:**
- Clicking label focuses input
- Large click target (entire label)
- Improves usability
- Essential for checkboxes/radios

**Form Groups:**
```html
<fieldset>
  <legend>Personal Information</legend>

  <label for="first-name">First Name *</label>
  <input id="first-name" required>

  <label for="last-name">Last Name *</label>
  <input id="last-name" required>
</fieldset>
```

**Error States:**
```html
<label for="email-input" class="label-error">
  Email Address *
</label>
<input
  id="email-input"
  aria-invalid="true"
  aria-describedby="email-error">
<p id="email-error" role="alert">
  Please enter a valid email
</p>
```

**Best Practices:**
- Always provide visible labels
- Never use placeholder as label replacement
- Keep labels concise
- Position consistently (above field)
- Associate correctly with inputs
- Mark required fields clearly
- Use helper text for additional context
