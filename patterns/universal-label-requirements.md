# Universal Label Requirements

**Status:** Critical Accessibility Requirement (WCAG Level A)

---

## Overview

**Every interactive component MUST have an accessible label.** This is not optional — components without proper labels fail WCAG Level A accessibility standards and create barriers for users with disabilities.

---

## The Requirement

### All Interactive Components Need Labels

This applies to:
- All form controls (inputs, selects, checkboxes, radios, switches)
- All buttons (including icon-only buttons)
- All interactive widgets (sliders, date pickers, etc.)
- Any element users can click, tap, or interact with

### Visual Labels Are Strongly Preferred

When possible, always use a visible text label that:
- Appears on screen for all users
- Is programmatically associated with the control
- Clearly describes the control's purpose

**Benefits:**
- Helps all users, not just screen reader users
- Easier to understand and use
- Better for cognitive accessibility
- No chance of mismatch between visual and programmatic label

---

## Implementation Patterns

### Pattern 1: Visible Label (Preferred)

Use `<label>` element properly associated with the control:

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email">
```

Or wrap the control:

```html
<label>
  Email address
  <input type="email" name="email">
</label>
```

**When to use:** Always, unless context truly eliminates the need (rare exceptions, see below).

---

### Pattern 2: aria-label for Icon-Only Buttons

When space constraints require icon-only buttons:

```html
<button aria-label="Delete patent application">
  <TrashIcon />
</button>
```

**Requirements:**
- MUST also have tooltip showing label + keyboard shortcut
- Label must be descriptive and specific
- Use sparingly — visible labels are better

**Example with tooltip:**
```html
<button
  aria-label="Delete patent application"
  data-tooltip="Delete patent application (⌘⌫)">
  <TrashIcon />
</button>
```

---

### Pattern 3: aria-labelledby for Complex Associations

When label text exists elsewhere in the DOM:

```html
<div id="section-title">Notification preferences</div>
<div role="group" aria-labelledby="section-title">
  <!-- controls -->
</div>
```

Or combining multiple text sources:

```html
<h2 id="dialog-title">Delete patent</h2>
<p id="dialog-desc">Patent #12345 - Utility Application</p>

<div role="dialog"
     aria-labelledby="dialog-title"
     aria-describedby="dialog-desc">
  <!-- dialog content -->
</div>
```

**When to use:** Complex UI patterns, modals, dialogs, sections needing composite labels.

---

### Pattern 4: Visually Hidden Labels

When design truly cannot accommodate visible label:

```html
<label for="search" class="visually-hidden">Search patents</label>
<input type="search" id="search" placeholder="Search...">
```

**CSS for visually hidden:**
```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**When to use:** Search boxes with obvious context, tight UI constraints. Still prefer visible labels when possible.

---

## Exceptions (Rare)

### When Visual Labels Might Be Omitted

**Very limited cases:**
- Icon-only toolbars where icons are universally understood (save, print, etc.)
- Repeated actions in data tables (delete button on every row)
- Design patterns where label is truly redundant

**Requirements for exceptions:**
1. Must be reviewed and approved by accessibility expert
2. MUST include `aria-label` or `aria-labelledby`
3. Must provide tooltip or other visible help
4. Context must make purpose completely obvious
5. User testing should confirm understandability

**Even with exceptions:**
- Screen reader users must have clear label text
- Keyboard users must have tooltip
- Test with actual assistive technology users

---

## Common Mistakes

### ❌ Placeholder as Label

```html
<!-- WRONG: Placeholder disappears on type -->
<input type="email" placeholder="Email address">
```

**Problems:**
- Placeholder disappears when user types
- Fails with browser autofill
- Low contrast (hard to read)
- Not associated with control for AT
- WCAG failure

✅ **Correct:**
```html
<label for="email">Email address</label>
<input type="email" id="email" placeholder="name@example.com">
```

---

### ❌ Icon-Only Button Without Label

```html
<!-- WRONG: No label for screen readers -->
<button>
  <TrashIcon />
</button>
```

✅ **Correct:**
```html
<button aria-label="Delete patent application">
  <TrashIcon />
</button>
```

---

### ❌ Title Attribute as Label

```html
<!-- WRONG: title attribute not accessible label -->
<button title="Delete">
  <TrashIcon />
</button>
```

**Problems:**
- Not announced by all screen readers
- Not keyboard accessible tooltip
- Inconsistent browser support

✅ **Correct:** Use `aria-label` + proper tooltip component.

---

### ❌ Floating Label Without Fallback

```html
<!-- WRONG: Animated placeholder that "floats" on focus -->
<input type="email" placeholder="Email address">
```

**Problems:**
- Label only visible when empty
- Confusing when returning to filled fields
- Cognitive accessibility issue

✅ **Correct:** Use real label that's always visible, or ensure programmatic label exists.

---

## WCAG Compliance

### Success Criteria

**WCAG 2.1 Level A:**
- **1.3.1 Info and Relationships** - Form labels programmatically associated
- **4.1.2 Name, Role, Value** - All UI components have accessible name

**Without proper labels:** Automatic WCAG Level A failure.

### Testing

**Screen reader testing:**
1. Navigate with Tab key only
2. Verify control's purpose is announced before reaching it
3. Verify announced name matches visual label (if present)
4. Test with NVDA (Windows) + Firefox, VoiceOver (macOS) + Safari

**Automated testing:**
- axe DevTools will flag missing labels
- WAVE will highlight unlabeled controls
- Lighthouse accessibility audit will report failures

---

## Content Guidelines

### Writing Good Labels

**Be specific:**
- ❌ "Name"
- ✅ "Patent applicant name"

**Use sentence case:**
- ❌ "Email Address"
- ✅ "Email address"

**Keep concise:**
- Target: Under 60 characters
- Longer descriptions: Use help text instead

**No punctuation:**
- ❌ "Email address:"
- ✅ "Email address"

**Describe purpose, not control type:**
- ❌ "Text input for email"
- ✅ "Email address"
- (Screen readers announce control type automatically)

---

## Framework-Specific Considerations

### React

```jsx
// Good
<label htmlFor="email">Email address</label>
<input type="email" id="email" name="email" />

// Also good (wrapped)
<label>
  Email address
  <input type="email" name="email" />
</label>
```

### Ant Design (OneDS Base)

```jsx
import { Form, Input } from 'antd';

// Good - Form.Item provides label association
<Form.Item
  label="Email address"
  name="email"
  rules={[{ required: true }]}>
  <Input type="email" />
</Form.Item>
```

**Note:** Ant Design Form.Item handles label association automatically. Still ensure label prop is provided.

---

## Related Resources

- [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA: Providing accessible names](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)

---

## When in Doubt

**Ask these questions:**

1. Can a screen reader user understand this control's purpose?
2. Is the label clear without seeing the surrounding context?
3. Would I understand this control if I couldn't see the visual design?
4. Does automated testing pass?

**If any answer is "no" → add or improve the label.**

---

**Remember:** Labels are not optional. They are a fundamental accessibility requirement and legal obligation in many jurisdictions.
