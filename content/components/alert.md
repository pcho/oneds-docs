---
title: Alert
description: "Documentation for Alert component"
---

## Description

Alerts deliver important messages right when users need them. They inform, confirm, warn, and alert—providing feedback about system status, completed actions, and potential issues. Persistent and prominent, they're the contextual companions that ensure users never miss critical information.

## Anatomy

1. **Type Icon** - Visual indicator of alert severity
2. **Title** - Short, descriptive heading
3. **Description** - Additional context and details (optional)
4. **Dismiss Button** - Close button to remove alert (optional)
5. **Actions** - Buttons for user response (optional)
6. **Container** - Background with border and icon color coding

## Specification

**Alert Container:**
- **Width**: Full width of container or `600px` max
- **Padding**: `spacing-4`
- **Border Radius**: `radius-medium`
- **Border**: varies by type
- **Layout**: Horizontal row with icon, content, dismiss
- **Gap**: `spacing-3` between elements

**Alert Types:**

**Information:**
- **Icon**: ℹ️ Info circle
- **Icon Color**: `--icon-brand`
- **Background**: `--bg-surface-brand-lighter`
- **Border**: `--border-brand-normal`
- **Use**: Additional context, helpful tips

**Success:**
- **Icon**: ✓ Checkmark circle
- **Icon Color**: `--icon-success`
- **Background**: `--bg-surface-success-lighter`
- **Border**: `--border-success-normal`
- **Use**: Action confirmation, success feedback

**Warning:**
- **Icon**: ⚠ Warning triangle
- **Icon Color**: `--icon-warning`
- **Background**: `--bg-surface-warning-lighter`
- **Border**: `--border-warning-normal`
- **Use**: Caution needed, potential issues

**Error:**
- **Icon**: ⊗ Error circle
- **Icon Color**: `--icon-danger`
- **Background**: `--bg-surface-danger-lighter`
- **Border**: `--border-danger-normal`
- **Use**: Critical issues, immediate attention required

## Do

- Notify users about important contextual information
- Confirm successful actions from previous screens
- Introduce new or underutilized features when relevant
- Combine with form validation to help users fix errors
- Keep messages short and scannable
- Match alert type to message severity

## Don't

- Use alerts for system-wide errors—use an error screen instead
- Confirm actions with alerts when users stay on the same view—use toast
- Stack multiple alerts unless absolutely necessary
- Forget to order multiple alerts by severity (error, warning, info, success)
- Make critical alerts dismissible
- Use alerts for long explanations—keep them brief

## Dismissing

Most alerts shouldn't be dismissible, but there are exceptions:

- Make dismissible when users may have seen the information before
- Allow permanent dismissal only for user-specific alerts, not system-wide conditions
- Allow dismissal when tasks aren't blocked and no action is required
- Never make critical alerts dismissible

## Content

- Keep messages short and scannable
- Watch your tone in warning and error alerts—be helpful, not alarming
- Never make critical alerts dismissible
- Limit to one alert at a time when possible

## Uses

**Primary Use Cases:**

1. **Form Validation** - Summary of form errors
2. **Success Confirmations** - Action completed successfully
3. **System Status** - Important system information
4. **Feature Announcements** - New features or updates
5. **Warnings** - Potential issues or cautions
6. **Errors** - Critical problems requiring attention
7. **Information** - Helpful context or tips

**Example Scenarios:**

**Success Alert:**
```
┌─────────────────────────────────────────┐
│ ✓ Patent application submitted          │
│   Your application #12345 has been      │
│   submitted for review.            [×]  │
└─────────────────────────────────────────┘
```

**Error Alert:**
```
┌─────────────────────────────────────────┐
│ ⊗ Form validation errors                │
│   Please fix the following errors:      │
│   • Email address is required           │
│   • Password must be 8+ characters      │
└─────────────────────────────────────────┘
```

**Warning Alert:**
```
┌─────────────────────────────────────────┐
│ ⚠ Your subscription expires soon        │
│   Renew by Jan 31 to avoid             │
│   interruption.  [Renew Now]      [×]   │
└─────────────────────────────────────────┘
```

## When NOT to Use

### Use Alternatives Instead When

**Use Toast for transient success messages:**
- User stays on the same view
- Action just completed
- Message doesn't need to persist
- Brief confirmations like "Saved!" or "Copied!"

**Example:**
```
❌ Don't use persistent alert:
┌────────────────────────┐
│ ✓ File saved      [×]  │  ← Clutters page
└────────────────────────┘

✅ Use toast instead:
[Toast appears bottom-right]
File saved ✓
[Disappears after 3 seconds]
```

**Use Inline Validation for form field errors:**
- Error specific to one field
- User needs to fix while filling form
- Context-specific guidance needed

**Example:**
```
❌ Don't use alert at top:
┌──────────────────────────┐
│ ⊗ Email is required      │
└──────────────────────────┘
[Long form below...]

✅ Use inline error:
Email address
[_______________] ⚠️ Enter your email address
```

**Use Banner for persistent page-level notices:**
- Applies to entire page/site
- Not dismissible
- System status, maintenance, announcements

**Example:**
```
Banner (top of page, persistent):
┌────────────────────────────────────────┐
│ ℹ️ System maintenance scheduled for... │
└────────────────────────────────────────┘
```

**Use Modal for critical interruptions:**
- Requires immediate action
- Blocks workflow intentionally
- Confirmation needed before proceeding
- Destructive actions

**Example:**
```
Modal (blocks page):
┌─────────────────────────┐
│ Delete this patent?     │
│                         │
│ This cannot be undone.  │
│                         │
│  [Cancel]  [Delete]     │
└─────────────────────────┘
```

## Content Guidelines

Follow the [Content Style Guide](/docs/content/style-guide.md):

**Titles:**
- Sentence case: "Form validation errors" not "Form Validation Errors"
- State the issue clearly
- No periods for single phrases

**Messages:**
- Write solutions, not just problems
- "Enter your email address to continue"
- Not "Email required"

**Be specific:**
- "Patent application #12345 submitted successfully"
- Not "Success!"

## Behavior

**Display:**
- Appears in context, near related content
- Stays visible until dismissed or resolved
- Can be sticky (top of viewport)
- Maintains position during scroll

**Animation:**
- Fade in: 300ms
- Slide down: 300ms (if at top)
- Smooth appearance

**Stacking:**
- Multiple alerts stack vertically
- Order by severity (error, warning, info, success)
- Maintain consistent spacing (`spacing-4` gap)
