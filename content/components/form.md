---
title: Form
description: "Documentation for Form component"
---

## Description

Forms are the backbone of user input—bringing together labels, fields, validation, and smart organization into one smooth data entry experience. They turn complex information gathering into a clear, guided journey that helps users submit accurate data with confidence.

Forms are where users interact deeply with your app. Make them effortless, not exhausting.

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
- **Between Sections**: `spacing-6` to `spacing-8`
- **Between Fields**: `spacing-4` to `spacing-6`
- **Label to Field**: `spacing-1.5` to `spacing-2`
- **Field to Helper Text**: `spacing-1` to `spacing-1.5`

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
- Use the right input type for each field (date picker for dates, dropdown for selections)
- Provide inline validation with helpful, friendly messages
- Mark required fields clearly with an asterisk (*)
- Keep forms short—only ask what's truly necessary
- Use clear action buttons (Submit, Save, Next)
- Show progress indicators for multi-step forms
- Auto-save progress when possible
- Add smart defaults to reduce typing

## Don't

- Make every field required—only ask for what you truly need
- Use vague labels like "Field 1" or "Information"
- Validate on blur if it disrupts the user's flow
- Hide help text—show guidance upfront
- Use placeholder text as labels—it vanishes when users start typing
- Make forms wider than 800px—readability tanks
- Auto-submit on Enter unless users expect it
- Forget graceful error handling

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
- Be specific: "Email is required" beats "Invalid input"
- Be helpful: "Password must be at least 8 characters" beats "Invalid"
- Be friendly: "Oops, we need your email address" beats "ERROR: NULL EMAIL"
- Display errors near the field, not just at the form top

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
