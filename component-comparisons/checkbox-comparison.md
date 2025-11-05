# Checkbox Component Comparison

**Date:** November 5, 2025
**Component:** Checkbox
**Systems Compared:** GitLab Design, Nord Health Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/checkbox.md`:

- Comprehensive anatomy (5 elements including indeterminate)
- Detailed specifications (sizes, states, colors)
- Do's and Don'ts
- Primary use cases with examples
- Behavior documentation (selection, hierarchical, animation)
- Indeterminate state with dash indicator
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Screen reader support
- Focus management
- Error states
- Group patterns with fieldset/legend

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** Name Attribute Required for Groups (GitLab)

**What they have:**
> "All related checkboxes must share the same `name` attribute to inform assistive technologies that they're connected and enable native keyboard navigation."
> "When using individual checkboxes (not in a group), the `name` attribute is **required** for the required constraint to function."

**What OneDS has:**
```html
<label>
  <input type="checkbox" checked>
  Email
</label>
```

**Gap:**
❌ No mention of `name` attribute requirement
❌ No guidance on shared `name` for checkbox groups

**Worth considering:**
```markdown
**Name Attribute (Required):**

**For Checkbox Groups:**
- All related checkboxes MUST share same `name` attribute
- Enables assistive technology to understand relationship
- Enables native browser keyboard navigation
- Required for form submission as array

**Example:**
```html
<fieldset>
  <legend>Notification preferences</legend>

  <label>
    <input type="checkbox" name="notifications" value="email" checked>
    Email
  </label>

  <label>
    <input type="checkbox" name="notifications" value="sms">
    SMS
  </label>

  <label>
    <input type="checkbox" name="notifications" value="push">
    Push
  </label>
</fieldset>
```

**For Single Checkboxes:**
- `name` attribute still required
- Required for `required` constraint to work
- Required for form data binding

**Form Submission:**
- Checked values submitted as array: `notifications=["email", "push"]`
- Without shared `name`: submitted as separate fields
```

---

### 2. Screen Reader Legend Announcement (GitLab)

**What they have:**
> "Some screen readers will announce the contents of the legend before each nested input to maintain context for a user."

**What OneDS has:**
```html
<fieldset>
  <legend>Notification preferences</legend>
  <!-- checkboxes -->
</fieldset>
```

**Gap:**
✅ We have fieldset/legend
⚠️ Could clarify screen reader behavior

**Worth considering:**
```markdown
**Fieldset and Legend (Accessibility):**

**Screen Reader Behavior:**
- Screen readers announce legend before EACH checkbox
- Example: User tabs through group
  - First checkbox: "Notification preferences. Email, checkbox, checked"
  - Second checkbox: "Notification preferences. SMS, checkbox, unchecked"
  - Third checkbox: "Notification preferences. Push, checkbox, unchecked"

**Why This Matters:**
- Provides context for each checkbox
- User doesn't lose track of what group they're in
- Essential for long forms with multiple checkbox groups

**Best Practices:**
- Keep legend concise (repeated before each checkbox)
- ✅ "Notification preferences"
- ❌ "Please select all the notification preferences that you would like to receive from our system"
- Short legend = less verbose for screen reader users
```

---

### 3. Indeterminate State Screen Reader Limitation (GitLab)

**What they have:**
> "The indeterminate state is **visual only**—it doesn't represent the actual value. When implementing tri-state checkboxes, provide textual feedback (via `.sr-only` class) since not all screen readers communicate this state to users."

**What OneDS has:**
```markdown
**Screen Reader Support:**
- Announce indeterminate state as "mixed" or "partially checked"
```

**Gap:**
⚠️ We assume screen readers announce indeterminate correctly
❌ GitLab warns NOT ALL screen readers support this
❌ No fallback pattern for screen readers that don't support it

**Worth considering:**
```markdown
**Indeterminate State (Accessibility Warning):**

**Screen Reader Limitation:**
- ⚠️ Not all screen readers announce indeterminate state
- Some read it as "unchecked" (incorrect)
- Visual indicator alone insufficient

**Accessible Implementation:**
- Provide text alternative for screen readers
- Use visually hidden text to explain state

**Example:**
```html
<label>
  <input
    type="checkbox"
    aria-checked="mixed"
    aria-describedby="select-all-status">
  <span class="label-text">Select all documents</span>
  <span id="select-all-status" class="sr-only">
    2 of 3 items selected
  </span>
</label>
```

**Better Approach:**
- Don't rely on `aria-checked="mixed"` alone
- Add explicit text: "2 of 3 selected"
- Or: "Some items selected"
- Or: Update parent label: "Select all (2/3 selected)"

**Why:**
- Works in all screen readers
- Clearer for all users
- No ambiguity
```

---

### 4. Single Checkbox Without Visible Label Pattern (GitLab)

**What they have:**
> "For single checkboxes without visible labels, wrap text in `<span class="gl-sr-only">` to provide screen reader context."

**What OneDS has:**
- No guidance on checkboxes without visible labels

**Gap:**
❌ No pattern for visually hidden labels
❌ No guidance on when this is acceptable

**Worth considering:**
```markdown
**Checkboxes Without Visible Labels:**

**When Acceptable:**
- Table row selection (checkbox in first column)
- Bulk action selection in lists
- Space-constrained layouts

**Implementation:**
```html
<!-- Table row selection -->
<td>
  <label>
    <input type="checkbox" name="selected-patents" value="12345">
    <span class="sr-only">Select patent application #12345</span>
  </label>
</td>

<!-- Bulk selection -->
<div class="patent-card">
  <label class="checkbox-icon-only">
    <input type="checkbox">
    <span class="sr-only">Select patent application: Machine Learning Method</span>
  </label>
  <div class="card-content">
    <h3>Machine Learning Method</h3>
    <!-- content -->
  </div>
</div>
```

**Requirements:**
- ALWAYS include label text (visually hidden)
- Label must be descriptive: "Select patent #12345" not just "Select"
- Use `sr-only` or `visually-hidden` class
- Never use `display: none` (hidden from screen readers)

**CSS for Visually Hidden:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```
```

---

### 5. Label-For Attribute Requirement (GitLab)

**What they have:**
> "When using form groups, the `label` prop alone is insufficient for accessible naming; the `label-for` prop must also be provided."

**What OneDS has:**
```html
<label class="checkbox-label">
  <input type="checkbox">
  <!-- label wraps input -->
</label>
```

**Gap:**
⚠️ We show label wrapping input (implicit association)
⚠️ Could clarify explicit association with `for` attribute

**Worth considering:**
```markdown
**Label Association Methods:**

**Method 1: Wrapping (Current OneDS Pattern)**
```html
<label class="checkbox-label">
  <input type="checkbox">
  <span>Email notifications</span>
</label>
```
- ✅ Simpler HTML
- ✅ Entire label clickable automatically
- ✅ Works in all browsers

**Method 2: Explicit Association (Alternative)**
```html
<input type="checkbox" id="email-notif">
<label for="email-notif">Email notifications</label>
```
- ✅ More flexible layout
- ✅ Label can be anywhere in DOM
- ⚠️ Requires unique IDs (more complex)

**When to Use Each:**
- **Wrapping (recommended)**: Most cases, simpler
- **Explicit (for attribute)**: Complex layouts, custom positioning

**Form Group Pattern:**
```html
<div class="form-group">
  <div class="group-label" id="notif-group-label">
    Notification preferences
  </div>
  <div role="group" aria-labelledby="notif-group-label">
    <!-- checkboxes here -->
  </div>
</div>
```
```

---

### 6. When to Use Alternatives (GitLab)

**What they have:**
- "**Radio buttons** for mutually exclusive single-selection options"
- "**Toggle** for immediate state application"
- "**Button group** when selection changes other content states"
- "**Combobox** for menu-style option selection outside forms"

**What OneDS has:**
```markdown
## Don't
- Avoid using checkboxes for mutually exclusive single-select options; instead, opt for radio buttons.
- If selecting an option changes the state or view of other content, consider using a segmented control for a smoother experience.
```

**Gap:**
✅ We have basic guidance
⚠️ Could expand with more alternatives

**Worth considering:**
```markdown
## When NOT to Use Checkboxes

**Use Radio Buttons instead when:**
- Only ONE option can be selected (mutually exclusive)
- Example: ❌ Checkbox for "Gender: Male / Female"
- Example: ✅ Radio buttons for "Gender: Male / Female"

**Use Toggle/Switch instead when:**
- Immediate state change (no submit button)
- On/off setting
- Example: ✅ "Enable dark mode" → Toggle
- Example: ❌ "Enable dark mode" → Checkbox (if immediate)

**Use Segmented Control instead when:**
- Selection changes visible content immediately
- View switching
- Example: ✅ "View: Grid / List" → Segmented control
- Example: ❌ "View: Grid / List" → Checkboxes

**Use Select/Dropdown instead when:**
- More than 10 options
- Example: ✅ "Select country" → Dropdown (200 options)
- Example: ❌ 200 checkboxes

**Use Multiselect/Combobox instead when:**
- Many options + search needed
- Example: ✅ "Select technologies" → Multiselect with search
- Example: ❌ 50 checkboxes

**Decision Tree:**
```
What's the selection behavior?
├─ Multiple items can be selected → Checkbox ✓
└─ Only one item → Radio button

Does selection apply immediately (no submit)?
├─ Yes + binary on/off → Toggle/Switch
├─ Yes + multiple options → Segmented control
└─ No (has submit button) → Checkbox or Radio
```
```

---

### 7. Maximum Options Limit (Nord Health)

**What they have:**
> "Avoid with more than 10 options (use Select component instead)"

**What OneDS has:**
- No guidance on maximum number of checkboxes

**Gap:**
❌ No limit on how many checkboxes is too many

**Worth considering:**
```markdown
**Maximum Options:**

**Limit: 10 checkboxes maximum**
- More than 10 becomes overwhelming
- Scrolling through long checkbox lists poor UX

**Alternatives for Many Options:**

**10-30 options:**
- Use Select with multi-select
- Or: Searchable multi-select dropdown
- Or: Transfer list component

**30+ options:**
- MUST use searchable component
- Multi-select with search/filter
- Or: Autocomplete with checkboxes

**Example Scenarios:**
- ✅ 5 checkboxes: Notification types → Checkboxes
- ⚠️ 15 checkboxes: US States → Multi-select dropdown
- ❌ 50 checkboxes: Countries → Searchable multi-select
- ❌ 200 checkboxes: Technologies → Autocomplete

**Exception:**
- Hierarchical/grouped checkboxes with expand/collapse
- Example: Category tree with subcategories
- Still consider searchable alternative
```

---

### 8. Required Property Screen Reader Support (Nord Health)

**What they have:**
> "The `required` property announces input necessity to screen readers, while `hideRequired` allows visual hiding without removing the accessibility announcement."

**What OneDS has:**
- Error states documented
- No mention of `required` attribute for checkboxes

**Gap:**
❌ No guidance on required checkboxes (e.g., terms acceptance)
❌ No pattern for visually hiding required indicator

**Worth considering:**
```markdown
**Required Checkboxes:**

**Terms & Conditions Pattern:**
```html
<label class="checkbox-required">
  <input
    type="checkbox"
    required
    aria-required="true">
  <span>I agree to the terms and conditions *</span>
</label>
<span class="error-message" role="alert">
  You must agree to continue
</span>
```

**Required Indicator Options:**

**Option 1: Visible asterisk**
- Shows "*" next to label
- Clear visual indicator
- Standard pattern

**Option 2: Hidden required (text only)**
```html
<label>
  <input type="checkbox" required aria-required="true">
  <span>
    I agree to terms
    <span class="sr-only">(required)</span>
  </span>
</label>
```
- No visual asterisk
- Screen reader announces "required"
- Use when asterisk clutters UI

**Validation:**
- Show error if unchecked on submit
- ⚠️ "You must agree to continue"
- Focus on checkbox when error shown
```

---

### 9. No Automatic Checkbox Changes (Nord Health)

**What they have:**
> "Don't automatically change other checkboxes when one is clicked, except for bulk selection scenarios"

**What OneDS has:**
```markdown
**Hierarchical Behavior:**
- Selecting a child checkbox can alter the state of a parent checkbox
- When the parent checkbox is selected, all child checkboxes must align with its state
```

**Gap:**
✅ We document hierarchical parent/child behavior
⚠️ Could warn against OTHER automatic changes

**Worth considering:**
```markdown
**Automatic Changes (Warning):**

**Allowed: Parent/Child Hierarchy**
- ✅ Selecting parent checks all children
- ✅ Checking all children checks parent
- ✅ "Select all" checkbox
- Clear relationship, expected behavior

**Allowed: Bulk Selection**
- ✅ "Select all visible items" checkbox
- ✅ Table header checkbox selects all rows
- Expected pattern, clear indication

**NOT Allowed: Unexpected Dependencies**
- ❌ Checking "Email notifications" auto-checks "Daily summary"
- ❌ Checking "Feature A" disables "Feature B"
- ❌ Checking "Advanced" auto-checks 5 other options
- Confusing, unexpected, frustrating

**If Dependencies Exist:**
- Use different component (dropdown, wizard)
- Or: Show warning/info message
- Example: "Enabling this will also enable [X]"
- But don't auto-check without explicit user action

**Exception: Cascade with Confirmation**
```
User checks "Enable feature A"
↓
Show modal: "This will also enable features B and C. Continue?"
↓
[Cancel] [Enable All]
```
- Explicit confirmation required
- User understands consequences
```

---

### 10. Label Capitalization Standard (Nord Health)

**What they have:**
> "Labels require clarity and predictability using sentence case (capitalize first word only). Avoid ending punctuation for single words or fragments. Don't use commas or semicolons as line-ending punctuation in checkbox groups."

**What OneDS has:**
- No capitalization guidance

**Gap:**
❌ No label formatting standards

**Worth considering:**
```markdown
**Label Formatting:**

**Capitalization: Sentence Case**
- ✅ "Email notifications"
- ❌ "Email Notifications" (title case)
- ✅ "I agree to the terms and conditions"
- ❌ "I Agree To The Terms And Conditions"

**Punctuation:**
- ❌ No periods for single words/fragments
  - ✅ "Email notifications"
  - ❌ "Email notifications."
- ❌ No commas/semicolons at end of labels
  - ✅ "Email"
  - ❌ "Email;"
- ✅ Use periods for full sentences
  - ✅ "I agree to the terms and conditions."
  - ✅ "Send me marketing emails."

**Consistency in Groups:**
```
✅ Good:
☐ Email notifications
☐ SMS notifications
☐ Push notifications

❌ Bad (inconsistent):
☐ Email Notifications
☐ SMS
☐ Push notifications;
```

**Help Text:**
- Use sentence case
- Include ending period
- ✅ "Receive updates via email."
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Name Attribute Requirement** - Required for groups and form binding
2. **Indeterminate State Screen Reader Limitation** - Not all screen readers support it, need text fallback
3. **Screen Reader Legend Behavior** - Legend announced before each checkbox
4. **Visually Hidden Labels Pattern** - For table selections and bulk actions

### Medium Priority

5. **Label Association Methods** - Wrapping vs explicit `for` attribute
6. **When to Use Alternatives** - Expanded decision tree (10+ options use select)
7. **Maximum Options Limit** - 10 checkbox maximum guideline
8. **Required Property Support** - Required checkboxes with visual/hidden indicators
9. **No Automatic Changes Warning** - Don't auto-check unrelated checkboxes

### Nice to Have

10. **Label Formatting Standards** - Sentence case, punctuation rules

---

## Recommendations

### Add to OneDS Checkbox Documentation

1. **Technical Implementation Requirements**
   - Name attribute for groups (required)
   - Unique IDs for explicit label association
   - Label association methods

2. **Enhanced Accessibility Guidance**
   - Screen reader legend announcement behavior
   - Indeterminate state limitations + text fallback
   - Visually hidden labels for icon-only checkboxes
   - Required checkbox patterns

3. **Usage Limits and Alternatives**
   - 10 checkbox maximum
   - Expanded "when NOT to use" section
   - Decision tree for component selection

4. **Enhanced Content Guidelines**
   - Label formatting (sentence case)
   - Punctuation standards
   - Help text guidelines

5. **Behavior Warnings**
   - No automatic checkbox changes (beyond parent/child)
   - Expected vs unexpected dependencies

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Comprehensive State Documentation** - All states with exact colors
2. ✅ **Indeterminate State Fully Documented** - Visual and behavior
3. ✅ **Hierarchical Behavior Explained** - Parent/child relationships clear
4. ✅ **Animation Specifications** - Timing for checkmark appearance
5. ✅ **Help Text Pattern** - Additional clarification built in
6. ✅ **Error State with Message** - Don't leave error without message
7. ✅ **Touch Target Guidance** - 44×44px minimum

**Conclusion:** OneDS has solid checkbox documentation. Adding name attribute requirements, indeterminate state accessibility fallbacks, usage limits, and label formatting standards will make it industry-leading.
