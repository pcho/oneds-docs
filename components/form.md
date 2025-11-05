## Description

Form is the structural foundation for collecting user input, combining labels, fields, validation, and section organization into a cohesive data entry experience. It transforms potentially complex information gathering into a clear, guided process that helps users provide accurate data with confidence.

Forms are where users interact deeply with your application—make them feel effortless, not exhausting.

## Anatomy

### Form Structure
1. **Form Container** - Overall form wrapper
2. **Form Sections** - Logical groupings of related fields
3. **Section Headers** - Titles and descriptions for sections
4. **Form Fields** - Individual input components (text, select, checkbox, etc.)
5. **Labels** - Field labels with optional required indicators
6. **Helper Text** - Guidance and validation messages
7. **Actions** - Submit, cancel, and other buttons

### Section Header
- **Title** - Section name
- **Description** - Optional explanatory text
- **Divider** - Visual separation between sections

## Specification

### Form Section Header Component Set

**Dimensions:**
- **Container**: `409px × 160px` (component set canvas)
- **Variants**: Multiple options for different header styles

**Layout:**
- Vertical organization of header elements
- Consistent spacing between sections
- Clear visual hierarchy

### Form Layout Principles

**Spacing:**
- **Between Sections**: `24-32px`
- **Between Fields**: `16-24px`
- **Label to Field**: `6-8px`
- **Field to Helper Text**: `4-6px`

**Width:**
- **Form Container**: Maximum `600-800px` for readability
- **Field Width**: Match expected input length
- **Full Width Fields**: For long text, addresses, etc.
- **Grouped Fields**: Use grid layout for related fields

**Alignment:**
- **Single Column**: Default for most forms
- **Two Column**: For short, related fields (First Name | Last Name)
- **Labels**: Left-aligned above fields (preferred)
- **Inline Labels**: Use sparingly, can reduce accessibility

## Do

- Group related fields under clear section headers
- Use appropriate input types for each field (date picker for dates, etc.)
- Provide inline validation with helpful messages
- Show required fields clearly with asterisk (*)
- Keep forms as short as possible—only ask what's necessary
- Provide clear calls-to-action (Submit, Save, Next)
- Show progress indicators for multi-step forms
- Save progress automatically when possible
- Use smart defaults to reduce user effort

## Don't

- Don't make every field required—only ask for what you truly need
- Don't use vague labels like "Field 1" or "Information"
- Don't validate on blur if it interrupts user flow
- Don't hide help text—make guidance visible upfront
- Don't use placeholder text as labels—it disappears on input
- Don't make forms wider than 800px—readability suffers
- Don't submit on Enter unless expected (use explicit button)
- Don't forget to handle errors gracefully

## Uses

**Primary Use Cases:**

1. **Registration Forms** - User sign-up and account creation
2. **Profile Settings** - Edit user information
3. **Application Forms** - Patent applications, job applications, etc.
4. **Search Forms** - Advanced search with multiple criteria
5. **Checkout Forms** - Payment and shipping information
6. **Content Creation** - Create posts, documents, records
7. **Configuration Forms** - Settings and preferences

**Example Scenarios:**

**Patent Application Form:**
```
┌─ Patent Application ─────────────────────┐
│                                           │
│ Applicant Information                     │
│ Basic details about the patent applicant │
│ ─────────────────────────────────────────│
│                                           │
│ Applicant Name *                          │
│ [________________________]               │
│                                           │
│ Email Address *                           │
│ [________________________]               │
│ We'll use this to contact you            │
│                                           │
│ ─────────────────────────────────────────│
│                                           │
│ Patent Details                            │
│ Describe your invention                   │
│ ─────────────────────────────────────────│
│                                           │
│ Patent Title *                            │
│ [________________________]               │
│                                           │
│ Technology Area                           │
│ [Dropdown ▼]                             │
│                                           │
│ Description *                             │
│ [________________________]               │
│ [________________________]               │
│ [________________________]               │
│                                           │
│           [Cancel]  [Save Draft]  [Submit]│
└───────────────────────────────────────────┘
```

**User Settings Form:**
```
┌─ Account Settings ───────────────────────┐
│                                           │
│ Profile                                   │
│ ─────────────────────────────────────────│
│                                           │
│ Display Name                              │
│ [________________________]               │
│                                           │
│ Bio                                       │
│ [________________________]               │
│ [________________________]               │
│                                           │
│ Privacy                                   │
│ ─────────────────────────────────────────│
│                                           │
│ ☐ Make profile public                    │
│ ☐ Allow search engines to index          │
│                                           │
│                      [Cancel]  [Save]     │
└───────────────────────────────────────────┘
```

## Behavior

### States

**Form States:**
- **Empty** - No data entered
- **In Progress** - Partially filled
- **Validating** - Checking input validity
- **Valid** - All required fields valid
- **Invalid** - Contains errors
- **Submitting** - Processing submission
- **Submitted** - Successfully completed
- **Error** - Submission failed

**Field States:**
- **Default** - Ready for input
- **Focus** - Currently active
- **Filled** - Contains data
- **Valid** - Passes validation (optional green check)
- **Invalid** - Fails validation (red error message)
- **Disabled** - Cannot be edited
- **Read-only** - Can be read but not modified

### Validation

**When to Validate:**
- **On Blur**: After user leaves field (most common)
- **On Submit**: Check all fields before submitting
- **Real-time**: For complex fields (password strength, username availability)
- **On Type**: For character limits or format requirements

**Validation Messages:**
- **Error**: Red text, error icon, clear explanation
- **Warning**: Yellow text, warning icon, suggestion
- **Success**: Green text, check icon, confirmation (optional)

**Error Message Guidelines:**
- Be specific: "Email is required" not "Invalid input"
- Be helpful: "Password must be at least 8 characters" not "Invalid"
- Be friendly: "Oops, we need your email address" not "ERROR: NULL EMAIL"
- Show near the field, not just at the top

### Interactions

**Field Focus:**
1. User tabs or clicks into field
2. Field shows focus state (border highlight)
3. Cursor appears in field
4. Help text displays if available

**Data Entry:**
1. User types input
2. Real-time validation runs (if applicable)
3. Character count updates (if limited)
4. Format hints appear (e.g., phone number format)

**Field Blur:**
1. User leaves field
2. Validation runs
3. Error/success message appears if needed
4. Field returns to default or filled state

**Form Submission:**
1. User clicks Submit
2. All fields validated
3. Errors displayed if present, focus moves to first error
4. If valid, loading indicator appears
5. Success message shown or user redirected

**Multi-Step Forms:**
- Show progress indicator (1 of 3, Step 2 of 4, etc.)
- Allow backward navigation
- Save progress at each step
- Validate current step before advancing

### Focus Management

- Tab order follows visual layout (top to bottom, left to right)
- Focus visible on all fields
- Skip links available for long forms
- Focus moves to first error on validation failure
- Submit button receives focus after all fields filled

### Autofill & Autocomplete

- Support browser autofill for common fields
- Use autocomplete attributes (name, email, address, etc.)
- Allow pasting formatted data
- Parse and format input intelligently (phone numbers, dates)

## Accessibility

**Keyboard Navigation:**
- `Tab` - Move to next field
- `Shift+Tab` - Move to previous field
- `Enter` - Submit form (if in text field)
- `Space` - Toggle checkboxes/radio buttons
- `Arrow Keys` - Navigate radio button groups
- `Escape` - Clear current field (optional)

**Screen Reader Support:**
- All fields have associated labels (for/id relationship)
- Required fields announced: "Email, required, edit text"
- Field type announced: "Password, required, password edit text"
- Helper text associated via aria-describedby
- Error messages associated via aria-describedby
- Form sections have heading structure (h2, h3, etc.)
- Validation errors announced via aria-live="assertive"

**ARIA Attributes:**
```html
<label for="email">
  Email Address <span aria-label="required">*</span>
</label>
<input
  type="email"
  id="email"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="email-help email-error">
<p id="email-help">We'll use this to contact you</p>
<p id="email-error" role="alert" aria-live="assertive">
  Please enter a valid email address
</p>
```

**Labels:**
- Every field must have a visible label
- Don't use placeholder text as labels
- Use clear, concise language
- Put labels above fields (top-aligned)
- Group related fields with fieldset/legend

**Error Handling:**
- Error messages clear and specific
- Errors announced to screen readers immediately
- Visual + text indication (don't rely on color alone)
- Focus moves to first error on submit
- Error summary at top of form (optional)

**Color & Contrast:**
- Text meets WCAG AA (4.5:1 minimum)
- Error messages use color + icon/text
- Focus indicators clearly visible (3:1 contrast)
- Required field indicators don't rely on color alone

**Mobile Considerations:**
- Appropriate input types trigger correct keyboards
- Touch targets minimum 44×44px
- Sufficient spacing between fields
- Zoom doesn't break layout
- Sticky submit button on long forms
