# Input Component Comparison

**Date:** November 5, 2025
**Component:** Input / Text Field
**Systems Compared:** Adobe Spectrum, Nord Health Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/input.md`:

- Comprehensive anatomy (9 elements)
- Detailed specifications (sizes, states)
- Do's and Don'ts
- Primary use cases with ASCII examples
- Behavior documentation (typing, focus, dismissing, validation)
- Special input types (password, search, email, tel, URL)
- Accessibility section with semantic HTML, ARIA attributes
- Keyboard navigation
- Screen reader support
- Autocomplete attributes
- Responsive considerations

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** Label is Always Required (Adobe Spectrum)

**What they have:**
> "Every text field must have a label. Fields without labels are ambiguous and not accessible."
> "In rare cases where context suffices, an accessibility expert must review the design, and HTML must include `aria-label` or `aria-labelledby`."

**What OneDS has:**
```markdown
**Labels:**
- Always provide visible label
- Don't use placeholder as label
- Label associated with input via `for` attribute
```

**Gap:**
✅ We say "always provide visible label"
⚠️ Not as forceful - they say fields without labels are "NOT ACCESSIBLE"
⚠️ No mention of accessibility expert review requirement for edge cases

**Worth considering:**
```markdown
**Label Requirement (Critical):**
- ⚠️ EVERY input field MUST have a label - non-negotiable
- Fields without labels are not accessible and fail WCAG
- Visible label is preferred
- If context truly eliminates need (rare):
  - Must be reviewed by accessibility expert
  - Must include `aria-label` or `aria-labelledby`
- ❌ Never rely on placeholder text as label replacement
```

---

### 2. Tabbing Selects Existing Text (Adobe Spectrum)

**What they have:**
> "Tabbing into a text field selects the existing text"

**What OneDS has:**
- "Text selected if configured"
- No definitive guidance

**Gap:**
❌ No clear pattern for auto-select on focus
⚠️ "If configured" is vague - when should it be configured?

**Worth considering:**
```markdown
**Focus Behavior:**
- **Default:** Tab into field, cursor at end of text
- **Auto-select pattern:** Tab into field, all text selected
  - Use when: User likely wants to replace entire value
  - Examples: Search field, quantity field, filter input
  - Don't use for: Long text fields, partial editing expected
```

---

### 3. Required vs Optional Field Marking (Adobe Spectrum)

**What they have:**
> "Mark only the minority—if most fields are required, label only optional ones with '(optional)'. Never use asterisks for optional fields."

**What OneDS has:**
```markdown
**Required Fields:**
<label>
  Full Name
  <span aria-label="required">*</span>
</label>
```

**Gap:**
❌ We always show asterisk for required
❌ No guidance on marking optional when most fields are required
❌ No "mark the minority" pattern

**Worth considering:**
```markdown
**Required vs Optional Marking:**
- **When most fields are required:**
  - Don't mark required fields (assumed)
  - Mark optional fields with "(optional)" text
  - Example: "Phone number (optional)"
- **When most fields are optional:**
  - Mark required fields with "*" or "(required)"
  - Leave optional fields unmarked
- **Rule:** Mark the minority, not the majority
- ✅ Use "(optional)" text
- ❌ Never use asterisk for optional fields
```

---

### 4. Help Text vs Error Text Coordination (Adobe Spectrum)

**What they have:**
> "Help text gets replaced by error messages; ensure both contain essential information"
> "Example: Password help text 'must be at least 8 characters' should mirror error text structure"

**What OneDS has:**
- Helper text guidance
- Error message guidance
- No mention of replacement behavior

**Gap:**
❌ No pattern for help text being replaced by errors
❌ No guidance on ensuring both messages contain critical info

**Worth considering:**
```markdown
**Help Text & Error Text Coordination:**
- Error messages replace help text when errors occur
- Both messages must contain essential information
- ⚠️ Don't put critical requirements ONLY in help text
- Example (Password field):
  - Help text: "Must be at least 8 characters"
  - Error text: "Password must be at least 8 characters"
  - Both contain the same requirement
- If help text has multiple requirements, error should reference specific failing requirement
```

---

### 5. Error Messages Should Guide, Not Just Report (Adobe Spectrum)

**What they have:**
> "Write solutions, not just problems. Avoid ambiguous messaging ('Invalid field' is insufficient)"
> "Guide users toward resolution: 'Enter your email address' works better than stating what's wrong"
> "Use complete sentences (1-2 max), ending with periods"

**What OneDS has:**
```markdown
**Error Messaging:**
- Specific, actionable errors
- Clear explanation of problem
- How to fix the error
```

**Gap:**
✅ We have "actionable" and "how to fix"
⚠️ No emphasis on solution-first messaging
⚠️ No format guidance (complete sentences, periods)

**Worth considering:**
```markdown
**Error Message Best Practices:**
- Write solutions, not problems
- ❌ Bad: "Invalid field"
- ❌ Bad: "Error: email format incorrect"
- ✅ Good: "Enter your email address in the format name@example.com"
- Use complete sentences (1-2 maximum)
- End with periods
- Be specific about what action to take
- Avoid technical jargon
```

---

### 6. Placeholder Text Warning (Adobe Spectrum + Nord Health)

**What they have:**
- **Spectrum:** "Avoid placeholder text for essential information—it disappears when users type and fails with auto-fill features"
- **Nord Health:** "Don't use placeholder text for required information"

**What OneDS has:**
```markdown
## Don't
- Don't use placeholder as label
```

**Gap:**
✅ We say don't use as label
⚠️ Could emphasize additional problems: disappears on type, fails with autofill

**Worth considering:**
```markdown
**Placeholder Text:**
- Use for example format only
- ❌ Don't put required information in placeholder
- ❌ Don't use as label replacement
- **Problems with placeholders:**
  - Disappears when user starts typing (can't reference while typing)
  - Fails with browser autofill
  - Low contrast (accessibility issue)
  - Users may think field is pre-filled
- ✅ Good use: "alice@example.com" (format example)
- ❌ Bad use: "Enter your email address" (instruction)
```

---

### 7. Minimum Width for Touch Targeting (Adobe Spectrum)

**What they have:**
> "Fields must be 1.5× their height for readability and touch targeting"

**What OneDS has:**
- "Width: 320px (default, flexible)"
- Touch target guidance for buttons but not inputs

**Gap:**
❌ No proportional width guideline
❌ No touch targeting reasoning for width

**Worth considering:**
```markdown
**Minimum Width:**
- Input width should be at least 1.5× height
- Default (40px height): 60px minimum width (we use 320px ✅)
- Small (32px height): 48px minimum width
- Large (48px height): 72px minimum width
- **Reason:** Touch targeting and readability
- Width should accommodate expected content length
```

---

### 8. Mixed Values Pattern (Adobe Spectrum)

**What they have:**
> "Display an en dash (–) when presenting non-identical values"

**What OneDS has:**
- No guidance on bulk editing or mixed values

**Gap:**
❌ No pattern for editing multiple items with different values

**Worth considering:**
```markdown
**Bulk Editing Pattern:**
- When editing multiple items with different current values:
  - Show en dash (–) as placeholder
  - Example: Editing 5 files with different names: "Name: –"
  - On edit: Clear dash, show new value that will apply to all
- Indicates: "Multiple different values currently"
- User typing replaces for all selected items
```

---

### 9. Validation Icon Timing (Adobe Spectrum)

**What they have:**
> "Validation icons appear as soon as a user types a valid entry"

**What OneDS has:**
- "Validate on blur or submit"
- "Real-Time: Validate as user types (optional, use sparingly)"

**Gap:**
⚠️ Spectrum shows success immediately on valid entry
⚠️ We recommend blur/submit primarily

**Worth considering:**
```markdown
**Validation Timing Patterns:**

1. **On Blur (default):**
   - Validate when user leaves field
   - Best for most fields
   - Least intrusive

2. **On Submit:**
   - Validate all fields on form submission
   - Show all errors at once
   - Focus first error

3. **Real-time Success (progressive):**
   - ✅ Show success icon as soon as entry is valid
   - ❌ Don't show error until blur
   - Example: Email field shows checkmark when format valid
   - User-friendly: rewards correct input without punishing incomplete input

4. **Real-time Error (use sparingly):**
   - Only for: Password strength, username availability
   - Most fields: Too aggressive
```

---

### 10. Read-Only vs Disabled Distinction (Adobe Spectrum)

**What they have:**
> "Disabled maintains layout; read-only allows content copying without interaction"

**What OneDS has:**
```markdown
**Disabled:**
- Not interactive
- Keyboard not focusable
```

**Gap:**
✅ We have read-only mentioned
⚠️ Could emphasize copying capability difference

**Worth considering:**
```markdown
**Disabled vs Read-Only:**

**Disabled:**
- Not focusable
- Can't copy text
- Grayed out appearance
- Not in tab order
- Use when: Field not applicable in current state

**Read-Only:**
- Focusable
- ✅ Can select and copy text
- Normal appearance (not grayed)
- In tab order
- Use when: Value should be visible/copyable but not editable
- Example: Confirmation page showing submitted data
```

---

### 11. Label Capitalization Rule (Adobe Spectrum + Nord Health)

**What they have:**
- **Spectrum:** "Use sentence case capitalization for labels (e.g., 'Email address' not 'Email Address')"
- **Nord Health:** "Use short, noun-form labels in sentence case (capitalize first word only)"

**What OneDS has:**
- No specific capitalization guidance

**Gap:**
❌ No label formatting rules

**Worth considering:**
```markdown
**Label Formatting:**
- **Capitalization:** Sentence case only
  - ✅ "Email address"
  - ❌ "Email Address" (title case)
  - ✅ "First name"
  - ❌ "First Name"
- **Form:** Short noun phrases
  - ✅ "Email address"
  - ❌ "Please enter your email address"
- **Punctuation:** No colons
  - ✅ "Name"
  - ❌ "Name:"
```

---

### 12. Long Text Input Warning (Nord Health)

**What they have:**
> "Don't use when the expected text input is long. Use textarea component instead."

**What OneDS has:**
- Text Area component exists
- No explicit guidance on when to switch

**Gap:**
❌ No threshold for single line vs multi-line

**Worth considering:**
```markdown
**Input vs Textarea:**
- **Use Input (single-line) when:**
  - Expected input is short (< 100 characters)
  - Single line of text
  - Examples: Name, email, phone, URL
- **Use Textarea (multi-line) when:**
  - Expected input is long (> 100 characters)
  - Multiple lines expected
  - Examples: Comments, descriptions, addresses
- **Threshold:** If typical input exceeds one line width, use textarea
```

---

### 13. Hide Optional Fields Pattern (Nord Health)

**What they have:**
> "Request only necessary information; hide optional fields when possible"

**What OneDS has:**
- No progressive disclosure pattern

**Gap:**
❌ No guidance on reducing form complexity

**Worth considering:**
```markdown
**Progressive Disclosure:**
- Hide optional fields by default
- Show "Add optional information" link/button
- Reveals: Phone, fax, secondary address, etc.
- Benefits:
  - Shorter forms (less overwhelming)
  - Faster completion
  - Focus on required fields
- Required fields always visible
```

---

### 14. Validate After Interaction, Not During (Nord Health)

**What they have:**
> "Validate input after user interaction completion (not during)"

**What OneDS has:**
- "Don't validate before user finishes typing"
- "Real-time validation (use sparingly)"

**Gap:**
✅ We have similar guidance
⚠️ Could be more explicit about "interaction completion"

**Worth considering:**
```markdown
**Validation Timing:**
- ✅ After interaction completion:
  - On blur (user tabs away)
  - On submit
  - After valid entry (success icon)
- ❌ Not during interaction:
  - Not on every keystroke
  - Not before user finishes
  - Exception: Progressive success validation (show checkmark when valid)
- **Rule:** Don't interrupt user while they're typing
```

---

### 15. Disallow Patterns (Nord Health)

**What they have:**
> "Supports disallow patterns to restrict character input"

**What OneDS has:**
- Input types (email, tel, url, number)
- No mention of character restriction patterns

**Gap:**
❌ No guidance on input masking or character restrictions

**Worth considering:**
```markdown
**Input Restrictions:**

**Character Disallowlist:**
- Prevent specific characters from being typed
- Example: Numeric field - disallow letters
- Use `inputmode="numeric"` for mobile keyboard
- JavaScript validation to prevent non-numeric chars

**Input Masking:**
- Format input as user types
- Examples:
  - Phone: (555) 123-4567
  - Credit card: 1234 5678 9012 3456
  - Date: MM/DD/YYYY
- Use third-party libraries (Maskito, IMask)
- Ensure masked format is clear to user
- Don't mask if user needs to see unformatted value
```

---

### 16. Autocomplete Attribute Guidance (Nord Health)

**What they have:**
> "Provide appropriate autocomplete attributes for browser assistance"

**What OneDS has:**
```markdown
**Autocomplete:**
- Use `autocomplete` attribute
- `autocomplete="email"` for emails
- `autocomplete="name"` for names
- `autocomplete="new-password"` for new passwords
- `autocomplete="current-password"` for login
- Helps users and password managers
```

**Gap:**
✅ We have comprehensive autocomplete guidance
✅ This is one area where OneDS is detailed

**No action needed** - OneDS is already thorough here

---

## Summary of Gaps

### Critical Additions to Consider

1. **Label Requirement Emphasis** - Every field MUST have label (not accessible without)
2. **Help Text/Error Coordination** - Both must contain essential info (error replaces help)
3. **Error Message Format** - Write solutions, not problems; complete sentences with periods
4. **Mark the Minority** - Required vs optional field indicators

### Medium Priority

5. **Placeholder Text Problems** - Emphasize disappears on type + autofill failure
6. **Mixed Values Pattern** - En dash (–) for bulk editing
7. **Validation Timing** - Progressive success (show checkmark immediately)
8. **Read-Only vs Disabled** - Emphasize copying capability
9. **Label Formatting** - Sentence case, no colons
10. **Input vs Textarea Threshold** - When to switch to multi-line

### Nice to Have

11. **Minimum Width Rule** - 1.5× height ratio
12. **Tab Selection Behavior** - When to auto-select text
13. **Progressive Disclosure** - Hide optional fields pattern
14. **Input Restrictions** - Disallow patterns and masking
15. **Interaction Completion** - Clearer definition

---

## Recommendations

### Add to OneDS Input Documentation

Create supplementary guidance in `/Users/pcho/Work/docs/component-comparisons/input-additions.md` with:

1. **Critical Label Requirements**
   - EVERY field must have label
   - Accessibility expert review for exceptions
   - Not accessible without label

2. **Enhanced Error Handling**
   - Error replaces help text
   - Write solutions not problems
   - Format guidelines

3. **Required/Optional Patterns**
   - Mark the minority
   - Progressive disclosure for optional fields

4. **Enhanced Validation Patterns**
   - Progressive success validation
   - Interaction completion definition

5. **Enhanced Placeholder Guidance**
   - Problems: disappears, autofill fails
   - When to use/not use

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Comprehensive Autocomplete Guidance** - More detailed than others
2. ✅ **Input Type Coverage** - Covers email, tel, url, password, search thoroughly
3. ✅ **Behavior Documentation** - Detailed typing, focus, blur patterns
4. ✅ **Multiple Validation Patterns** - On blur, submit, real-time all covered
5. ✅ **Accessibility Examples** - Practical code examples with ARIA
6. ✅ **Character Counter Guidance** - Detailed implementation with aria-live

**Conclusion:** OneDS has strong input documentation. Adding critical label requirements, error message formatting, and required/optional patterns will make it industry-leading.
