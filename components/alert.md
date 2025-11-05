## Description

Alert notices inform users about system status and provide feedback on their actions and options. They deliver important messages related to users' current tasks within the screen context—persistent, prominent, and contextual companions that ensure users never miss critical information.

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
- **Padding**: `16px`
- **Border Radius**: `8px`
- **Border**: `1px solid` (color varies by type)
- **Layout**: Horizontal row with icon, content, dismiss
- **Gap**: `12px` between elements

**Alert Types:**

**Information:**
- **Icon**: ℹ️ Info circle
- **Icon Color**: Blue (`#1890FF`)
- **Background**: Light blue (`#F0F9FF`)
- **Border**: Blue (`#7CD4FD`)
- **Use**: Additional context, helpful tips

**Success:**
- **Icon**: ✓ Checkmark circle
- **Icon Color**: Green (`#52C41A`)
- **Background**: Light green (`#ECFDF3`)
- **Border**: Green (`#A9EFC5`)
- **Use**: Action confirmation, success feedback

**Warning:**
- **Icon**: ⚠ Warning triangle
- **Icon Color**: Orange (`#FAAD14`)
- **Background**: Light orange (`#FFFAEB`)
- **Border**: Orange (`#FEDF89`)
- **Use**: Caution needed, potential issues

**Error:**
- **Icon**: ⊗ Error circle
- **Icon Color**: Red (`#F04438`)
- **Background**: Light red (`#FEF3F2`)
- **Border**: Red (`#FECDCA`)
- **Use**: Critical issues, immediate attention required

## Do

- Notify the user about important context-related information they should be aware of.
- Confirm the success of a previous action taken in a different context.
- Introduce the user to new or underutilized features relevant to their current situation.
- Combine these elements with form validation to assist users in correcting errors.

## Don’t

- Use an error screen or state for network or system errors.
- Confirm user actions with a toast when they stay on the same view.
- Avoid multiple alerts when possible; if necessary, ensure they are contextually relevant.
- When multiple alerts are present, order them from most to least severe.

## Dismissing

- Most alerts don’t need to be dismissible. But this functionality can be useful if we know that a user has seen the information before and may want to dismiss it.
- Permanently dismissible only when the alert relates to a user's individual instance and wasn't triggered by a system condition.
- Permanently dismissible when a task isn't blocked or if no action is required.

## Content

- Keep messages short and concise.
- Be mindful of the tone in negative and warning alerts.
- Do not make critical alerts dismissible.
- Limit to one alert on the screen at a time.

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

### Use Alternatives Instead When:

**Use Toast for transient success messages:**
- User stays on same view
- Action just completed
- Message doesn't need to persist
- Brief confirmation ("Saved!", "Copied!")

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

## Technical: aria-live Container Setup

**CRITICAL: Container must exist in initial HTML before framework mounts.**

**❌ Wrong - won't work:**
```jsx
// React - creating alert container dynamically
function App() {
  return (
    <div>
      {showAlert && (
        <div role="alert">Alert message</div>
      )}
    </div>
  );
}
// Problem: Container created when alert shows
// Screen reader misses announcement
```

**✅ Correct - container exists from start:**
```html
<!-- In initial HTML (before React/Vue mounts) -->
<div id="alert-container" aria-live="polite" aria-atomic="true">
  <!-- Alerts added here dynamically -->
</div>

<script>
  // Now when content added, screen reader announces
  document.getElementById('alert-container').innerHTML = `
    <div role="alert">Alert message</div>
  `;
</script>
```

**Why:** aria-live regions must exist in DOM before content changes. Creating the container dynamically means it's not "listening" yet.

**Pattern for frameworks:**
```jsx
// React - render container immediately
function App() {
  return (
    <div>
      {/* Always render container */}
      <div
        id="alert-container"
        role="status"
        aria-live="polite"
        aria-atomic="true">
        {/* Add/remove alerts here */}
        {alerts.map(alert => (
          <Alert key={alert.id} {...alert} />
        ))}
      </div>
    </div>
  );
}
```

## Semantic Elements Lose Meaning in Live Regions

**CRITICAL: Elements in aria-live regions are read as plain text.**

**Screen readers strip semantic meaning:**
- `<h2>` read as plain text, not "heading level 2"
- `<button>` read as plain text, not "button"
- `<ul>` read as plain text, not "list"

**❌ Don't do this:**
```html
<div role="alert" aria-live="polite">
  <h2>Error</h2>
  <ul>
    <li>Email is required</li>
    <li>Password is required</li>
  </ul>
  <button>Dismiss</button>
</div>

<!-- Screen reader announces:
"Error Email is required Password is required Dismiss"
(No heading, list, or button semantics)
-->
```

**✅ Do this - use plain text:**
```html
<div role="alert" aria-live="polite">
  Error: Email is required. Password is required.
</div>

<!-- Button outside live region -->
<button aria-label="Dismiss alert">×</button>
```

**Or use focus pattern instead:**
```html
<!-- Don't use aria-live, move focus to alert -->
<div role="alert" tabindex="-1" id="alert">
  <h2>Error</h2>
  <ul>
    <li>Email is required</li>
    <li>Password is required</li>
  </ul>
  <button>Dismiss</button>
</div>

<script>
  // Move focus to alert when it appears
  document.getElementById('alert').focus();
  // Now semantic structure is preserved
</script>
```

**When to use which pattern:**
- **aria-live (announce only):** Low-priority, plain text, no interaction needed
- **Focus (move focus):** Medium-priority, semantic structure needed, interactive elements

## Content Guidelines

Follow the [Content Style Guide](/docs/content/style-guide.md):

**Titles:**
- Sentence case: "Form validation errors" not "Form Validation Errors"
- State the issue clearly
- No periods for single phrases

**Messages:**
- Write solutions, not just problems
- ✅ "Enter your email address to continue"
- ❌ "Email required"

**Be specific:**
- ✅ "Patent application #12345 submitted successfully"
- ❌ "Success!"

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
- Maintain consistent spacing (16px gap)

## Accessibility

**Semantic HTML:**
```html
<div
  role="alert"
  class="alert alert-error"
  aria-labelledby="alert-title">
  <svg aria-hidden="true" class="alert-icon">⊗</svg>
  <div class="alert-content">
    <h4 id="alert-title">Form validation errors</h4>
    <p>Please fix the following errors before submitting.</p>
  </div>
  <button aria-label="Dismiss alert">×</button>
</div>
```

**ARIA Attributes:**
- `role="alert"` for urgent alerts (error, warning)
- `role="status"` for non-urgent (info, success)
- `aria-labelledby` links to title
- `aria-describedby` links to description
- `aria-live="polite"` or `"assertive"` based on urgency

**Keyboard Navigation:**
- `Tab` - Focus dismiss button or action buttons
- `Enter/Space` - Activate focused button
- `Escape` - Dismiss alert (if dismissible)

**Screen Reader Support:**
- Announce alert immediately when it appears
- Read icon type ("Error", "Warning", etc.)
- Read title and description
- Announce dismissibility
- Read action button labels

**Focus Management:**
- If sticky positioning is used, the user must still be able to access and view focusable elements the alert may be covering
- Don't trap focus in alert
- Focus moves to first action button (optional)
- Return focus after dismiss

**Color & Contrast:**
- Text meets 4.5:1 contrast on background
- Icons meet 3:1 contrast
- Don't rely on color alone
- Icon + text + border color combination
- Focus indicators visible

**Multiple Alerts:**
- An alert is separate from, but complementary to validation error messages
- In this way an alert announces that there are validation errors and links a user to each instance
- Stack alerts logically
- Screen reader reads each alert
- Each dismissible independently
