---
title: Helper Text
description: "Documentation for Helper Text component"
---

## Description

Helper Text is your form field's friendly sidekick. It clarifies what users need to enter, shows helpful examples, tracks character counts, and delivers validation feedback. Think of it as the gentle guide that makes forms easier and prevents errors before they happen.

## Anatomy

1. **Text Content** - Helpful message or guidance
2. **Icon** - Visual indicator (optional)
3. **Link** - Action or "Learn more" link (optional)

## Specification

**Default Helper Text:**
- **Font Size**: `text-xs` (smaller than field label)
- **Font Weight**: `font-weight-normal`
- **Color**: `--text-lighter`
- **Line Height**: `1.5`
- **Margin Top**: `spacing-1` (below input field)
- **Max Width**: Matches input field width

**Helper Text Types:**

**Default (Informational):**
- **Color**: `--text-lighter`
- **Icon**: Info icon (ⓘ) (optional)
- **Purpose**: Guidance, examples, format hints

**Error:**
- **Color**: `--text-danger`
- **Icon**: Error icon (⚠️) (optional)
- **Purpose**: Validation errors, what went wrong

**Warning:**
- **Color**: `--text-warning`
- **Icon**: Warning icon (⚠)
- **Purpose**: Potential issues, cautions

**Success:**
- **Color**: `--text-success`
- **Icon**: Checkmark (✓) (optional)
- **Purpose**: Confirmation, validation success

**Icon Spacing:**
- **Icon Size**: `14px`
- **Gap**: `spacing-1` between icon and text
- **Alignment**: Aligned with first line of text

## Do

- Keep messages short and actionable
- Show guidance before errors occur
- Use positive, helpful language
- Provide examples for specific formats
- Show character counts for limited fields
- Update text based on input state
- Use specific error messages
- Link to help when needed

## Don't

- Use technical jargon
- Blame users in error messages
- Show errors before interaction
- Make text too long (3 lines max)
- Hide helper text unexpectedly
- Rely on color alone for status
- Skip icons that add clarity

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

## Behavior

### Display States

**Initial State:**
- Shows guidance or format hint
- Neutral gray color
- Visible before interaction

**During Input:**
- Updates dynamically (character count)
- Real-time validation (optional)
- Provides clear feedback

**After Validation:**
- Shows validation result
- Error message if invalid
- Success confirmation if valid

**Error State Progression:**
1. User enters invalid value
2. On blur, helper text becomes error
3. Icon and color update to red
4. Specific error message appears
5. User corrects input
6. Error clears, optional success message

### Focus

**Field Focus:**
- Helper text stays visible
- May highlight or emphasize
- Shows real-time validation (optional)

**Screen Reader Focus:**
- Reads associated helper text automatically
- Announces after field label
- Announces updates on change

### Dismissing

**Not Dismissible:**
- Helper text stays visible while relevant
- Changes based on input state
- Provides persistent guidance

**Error Clearing:**
- Clears when input becomes valid
- May show brief success message
- Returns to default guidance or hides

### Dynamic Updates

**Character Counter:**
- Updates on every keystroke
- Shows remaining count
- Warns near limit, errors when exceeded

**Real-Time Validation:**
- Validates as user types (optional)
- Shows progress like password strength
- Provides immediate feedback

**Async Validation:**
- Shows "Checking..." state with spinner
- Updates with success or error result
