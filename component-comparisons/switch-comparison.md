# Switch Component Comparison

**Date:** November 5, 2025
**Component:** Switch / Toggle
**Systems Compared:** Adobe Spectrum, GitLab Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/switch.md`:

- Comprehensive anatomy (4 elements)
- Detailed specifications (sizes, states, colors)
- Three sizes (small, default, large)
- Do's and Don'ts
- Primary use cases with ASCII examples
- Behavior documentation (toggling, transitions, focus)
- Loading state with spinner
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Role="switch" implementation
- Screen reader support
- Input vs Button patterns
- Error handling
- Reduced motion support
- Touch targets

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** Immediate Action Requirement (GitLab)

**What they have:**
> "**Immediate action**: Changes take effect without requiring a save or submit button"
> "Avoid toggles when: A submit button is needed to apply changes. The setting exists within a form with other saveable elements."

**What OneDS has:**
```markdown
## Do
- Use for immediate state changes (no confirmation)

## Don't
- Don't use for actions requiring confirmation
```

**Gap:**
✅ We say immediate state changes
⚠️ Could be more emphatic about NEVER using in forms with submit buttons

**Worth considering:**
```markdown
**Switch vs. Checkbox in Forms (Critical Rule):**

**Switches = Immediate Action:**
- Changes apply INSTANTLY
- No "Save" or "Submit" button
- Use for: Standalone settings, preferences
- ❌ NEVER use in forms with submit buttons

**Checkboxes = Deferred Action:**
- Changes apply on form submission
- Requires "Save" button
- Use for: Multi-field forms

**Wrong Example (Don't Do This):**
```html
<form>
  <input type="text" name="username">

  <!-- WRONG: Switch in form with submit -->
  <label>
    Enable notifications
    <input type="checkbox" role="switch">
  </label>

  <button type="submit">Save</button>
</form>
```
**Problem:** Switch suggests immediate action, but form has Submit button

**Right Example:**
```html
<!-- Option 1: Use checkbox (deferred) -->
<form>
  <input type="text" name="username">

  <label>
    <input type="checkbox">
    Enable notifications
  </label>

  <button type="submit">Save</button>
</form>

<!-- Option 2: Separate switches (immediate) -->
<form>
  <input type="text" name="username">
  <button type="submit">Save</button>
</form>

<!-- Below form: Standalone switches -->
<div class="settings-panel">
  <label>
    Enable notifications
    <input type="checkbox" role="switch">
  </label>
</div>
```

**Decision Tree:**
```
Does the setting have a "Save" button?
├─ Yes → Use CHECKBOX (not switch)
└─ No → Use SWITCH (immediate action)

Is this setting in a multi-field form?
├─ Yes → Use CHECKBOX (not switch)
└─ No → Use SWITCH (standalone)
```

**Exception:** All switches in form apply immediately
- Each switch is independent
- No interdependencies
- No "Save" button anywhere
- Example: Settings panel with multiple toggles
```

---

### 2. No Indeterminate State (Adobe Spectrum)

**What they have:**
> "Indeterminate switches don't exist in accessibility APIs, so it's not possible to make an indeterminate switch accessible. Use checkboxes instead if a partial/mixed state is needed."
> "Switches can only be on or off—no indeterminate states."

**What OneDS has:**
- No mention of indeterminate state
- No warning against trying to implement it

**Gap:**
❌ No guidance on why switches can't have indeterminate/mixed state
❌ No alternative (use checkbox) for this use case

**Worth considering:**
```markdown
**Indeterminate State (NOT Supported):**

**Switches = Binary Only:**
- ✅ On or Off
- ❌ No "mixed" state
- ❌ No "indeterminate" state
- Limitation of accessibility APIs

**Why Not Supported:**
- ARIA `role="switch"` only supports on/off
- Screen readers can't announce indeterminate switch
- No accessible way to communicate partial state

**Wrong Example (Don't Implement This):**
```html
<!-- WRONG: Trying to make indeterminate switch -->
<button
  role="switch"
  aria-checked="mixed"  <!-- NOT SUPPORTED -->
  class="switch-indeterminate">
  Partially enabled
</button>
```
**Problem:** Accessibility APIs don't support this

**Use Checkbox Instead:**
```html
<!-- RIGHT: Use checkbox for indeterminate -->
<label>
  <input
    type="checkbox"
    indeterminate="true"
    aria-checked="mixed">
  Select all (2 of 5 selected)
</label>
```

**When You Need Mixed State:**
- ❌ Don't use switch
- ✅ Use checkbox with indeterminate
- ✅ Use tri-state checkbox
- Example: "Select all" with partial selection
- Example: Bulk editing with different values
```

---

### 3. Mixed Values Pattern (Adobe Spectrum)

**What they have:**
> "When representing multiple mixed values, display as unselected; subsequent interactions select or deselect all values together."

**What OneDS has:**
- No pattern for bulk editing with switches

**Gap:**
❌ No guidance on switches for bulk editing

**Worth considering:**
```markdown
**Bulk Editing Pattern:**

**Scenario:** Editing multiple items with different switch states

**Implementation:**
- Show switch as OFF initially
- Don't show indeterminate (not supported)
- User toggling applies to ALL items

**Example:**
```
Editing 5 patents:
- Patent A: Notifications ON
- Patent B: Notifications OFF
- Patent C: Notifications ON
- Patent D: Notifications OFF
- Patent E: Notifications ON

Bulk Edit Panel:
Enable notifications  ○────●  (shown as OFF)

User clicks switch → turns ON
Result: ALL 5 patents now have notifications ON

User clicks again → turns OFF
Result: ALL 5 patents now have notifications OFF
```

**Label Clarification:**
```html
<label>
  <span>
    Enable notifications for all
    <span class="help-text">
      Currently: 3 of 5 enabled
    </span>
  </span>
  <input type="checkbox" role="switch" checked="false">
</label>
```

**Why Show as OFF:**
- No "mixed" state visually
- Clear that action applies to all
- Subsequent toggle affects all items
```

---

### 4. Switch vs Checkbox Distinction (Adobe Spectrum)

**What they have:**
> "Switches communicate activation/on-off states; checkboxes communicate selection. Use switches for settings and toggles, checkboxes for multi-select scenarios."

**What OneDS has:**
```markdown
## Don't
- Don't use "yes/no" labels (use checkboxes)
```

**Gap:**
✅ We mention don't use for yes/no
⚠️ Could expand semantic distinction more clearly

**Worth considering:**
```markdown
**Switch vs Checkbox (Semantic Difference):**

**Switches = Activation / State Change:**
- Represents: On/Off, Enabled/Disabled, Active/Inactive
- Action: Turning something on or off
- Examples:
  - ✅ "Enable dark mode"
  - ✅ "Mute notifications"
  - ✅ "Auto-save enabled"
  - ✅ "Camera access"

**Checkboxes = Selection / Agreement:**
- Represents: Selected/Unselected, Checked/Unchecked
- Action: Choosing or agreeing
- Examples:
  - ✅ "I agree to terms"
  - ✅ "Remember me"
  - ✅ "Include archived items"
  - ✅ "Yes, send me emails"

**Decision Guide:**

| Scenario | Component |
|----------|-----------|
| Turn feature on/off | Switch |
| Activate/deactivate | Switch |
| Enable/disable setting | Switch |
| Select multiple items | Checkbox |
| Agree to terms | Checkbox |
| Yes/No question | Checkbox |
| In form with submit | Checkbox |

**Gray Areas:**
- "Show archived items" - Could be either (context dependent)
  - If immediate filter: Switch
  - If applied on submit: Checkbox
```

---

### 5. Switches Cannot Have Error States (Adobe Spectrum)

**What they have:**
> "Unlike checkboxes, switches cannot have error states."

**What OneDS has:**
```markdown
**Error Handling:**
```html
<input
  type="checkbox"
  role="switch"
  aria-invalid="true"
  aria-describedby="error-message">

<p id="error-message" role="alert">
  Cannot enable: subscription required
</p>
```
```

**Gap:**
⚠️ We show error state implementation
⚠️ Spectrum says switches CANNOT have error states
⚠️ Conflicting guidance

**Worth considering:**
```markdown
**Error Handling for Switches:**

**Switches Don't Have Error States:**
- Switches apply immediately
- Either successful or prevented
- No validation errors (like form fields)

**If Action Fails:**

**Option 1: Revert + Notification (Recommended)**
```
User toggles switch ON
→ Shows loading spinner
→ Action fails (e.g., API error)
→ Switch reverts to OFF
→ Show error toast: "Cannot enable feature: subscription required"
```

**Option 2: Prevent Toggle**
```html
<!-- Disable switch if action not allowed -->
<label>
  <span>
    Enable premium feature
    <span class="help-text">Requires subscription</span>
  </span>
  <input
    type="checkbox"
    role="switch"
    disabled
    aria-describedby="requirement">
</label>
<p id="requirement">
  Upgrade to enable this feature
</p>
```

**Don't:**
- ❌ Show switch with error border/color
- ❌ Keep switch in "error" state
- ❌ Use `aria-invalid` on switches

**Do:**
- ✅ Disable switch if not allowed
- ✅ Revert on failure + show toast
- ✅ Explain requirements in help text
- ✅ Use confirmation dialog for critical actions
```

---

### 6. Label Always Required (Adobe Spectrum)

**What they have:**
> "Switches should always have labels."
> "Standalone switches are acceptable only when context is clear (e.g., panel headers)."

**What OneDS has:**
```markdown
**Label Association:**
- Use `<label>` wrapping input + visual
- Or `aria-labelledby` linking to label ID
```

**Gap:**
✅ We show label patterns
⚠️ Could emphasize label requirement more strongly
⚠️ No guidance on context-only scenarios

**Worth considering:**
```markdown
**Label Requirement:**

**Always Provide Labels:**
- Every switch MUST have a label
- Visible label strongly preferred

**Standalone Switches (Rare Exception):**
- Only when context is completely clear
- Example: Table row with switch in last column
- Example: Card header with switch

**Example (Context-Clear):**
```
┌────────────────────────────────┐
│ Email Notifications        ○──●│ ← Switch in header (context clear)
├────────────────────────────────┤
│ Receive updates about new      │
│ patents and status changes.    │
└────────────────────────────────┘
```
**Still needs `aria-label`:**
```html
<button
  role="switch"
  aria-checked="true"
  aria-label="Enable email notifications">
</button>
```

**Table Example:**
```
Name              Status      Active
Patent #123       Pending     ○──● ← Context from column header
Patent #124       Approved    ●──○
```
**Each switch needs label:**
```html
<button
  role="switch"
  aria-label="Activate patent #123">
</button>
```

**When NOT to Omit Visible Label:**
- Standalone switch on page
- Multiple switches in list
- Settings panel
- Form controls
- Always prefer visible label
```

---

### 7. Toast Notification for State Changes (GitLab)

**What they have:**
> "Consider using a toast notification when toggle state changes."

**What OneDS has:**
- No guidance on confirming state changes
- No pattern for success feedback

**Gap:**
❌ No recommendation for success notifications

**Worth considering:**
```markdown
**State Change Feedback:**

**Provide Confirmation (Recommended):**

**Visual Feedback:**
- Switch animation (sliding thumb) - built-in
- Optional: Toast notification for important changes

**When to Show Toast:**
- Important settings (security, privacy)
- Actions with consequences
- Async operations (after success)
- User may not notice switch change

**Examples:**

**With Toast:**
```
User toggles "Two-factor authentication" ON
→ Switch animates to ON position
→ Show loading spinner (if async)
→ After success: Toast appears
    ✓ "Two-factor authentication enabled"
```

**Without Toast:**
```
User toggles "Show archived items" ON
→ Switch animates to ON position
→ Content updates immediately
→ No toast (change is obvious from content)
```

**Decision Guide:**
- ✅ Use toast: Security settings, permissions, account changes
- ❌ Skip toast: Visual filters, display preferences, obvious changes

**Implementation:**
```javascript
switch.addEventListener('change', async (e) => {
  const isChecked = e.target.checked;

  try {
    await savePreference('2fa', isChecked);
    showToast({
      type: 'success',
      message: `Two-factor authentication ${isChecked ? 'enabled' : 'disabled'}`
    });
  } catch (error) {
    // Revert switch
    e.target.checked = !isChecked;
    showToast({
      type: 'error',
      message: 'Failed to update setting. Please try again.'
    });
  }
});
```
```

---

### 8. Sentence Case for Labels (Adobe Spectrum)

**What they have:**
> "Use sentence case with neutral, utilitarian language."

**What OneDS has:**
- No label formatting guidance

**Gap:**
❌ No capitalization or tone guidance

**Worth considering:**
```markdown
**Label Formatting:**

**Capitalization: Sentence Case**
- ✅ "Enable dark mode"
- ❌ "Enable Dark Mode" (title case)
- ✅ "Auto-save changes"
- ❌ "Auto-Save Changes"

**Tone: Neutral and Utilitarian**
- Focus on what the switch does
- Short, clear, functional

**Good Examples:**
- ✅ "Email notifications"
- ✅ "Enable two-factor authentication"
- ✅ "Auto-save"
- ✅ "Show archived items"

**Bad Examples:**
- ❌ "Would you like to enable email notifications?" (too wordy)
- ❌ "Turn on the dark mode feature" (verbose)
- ❌ "Yay! Enable notifications!" (not neutral)

**Structure:**
- `[Verb] + [noun]` or just `[noun]`
- "Enable notifications" or "Notifications"
- Keep under 5 words
- No ending punctuation (unless full sentence in description)
```

---

### 9. Description and Help Text Pattern (GitLab)

**What they have:**
> "Labels describe the 'on' state concisely; descriptions and help text clarify outcomes."

**What OneDS has:**
```markdown
**With Description:**
```html
<label for="2fa-switch">
  Two-factor authentication
</label>
<p id="2fa-description">
  Adds extra security by requiring a code
</p>
```
```

**Gap:**
✅ We show description pattern
⚠️ Could clarify label describes "ON" state

**Worth considering:**
```markdown
**Label and Description Pattern:**

**Label = What (ON state):**
- Describes what is enabled when switch is ON
- Short, clear noun phrase

**Description = Why/How (outcome):**
- Clarifies what happens when enabled
- Explains consequences or benefits

**Example 1:**
```
Label: "Email notifications"
Description: "Receive updates about new patents and status changes."
```

**Example 2:**
```
Label: "Two-factor authentication"
Description: "Adds an extra layer of security by requiring a verification code."
```

**Example 3:**
```
Label: "Auto-save"
Description: "Automatically saves your changes every 5 minutes."
```

**Pattern:**
```html
<div class="switch-container">
  <div class="switch-header">
    <label id="switch-label">Email notifications</label>
    <button
      role="switch"
      aria-checked="true"
      aria-labelledby="switch-label"
      aria-describedby="switch-description">
    </button>
  </div>
  <p id="switch-description" class="switch-description">
    Receive updates about new patents and status changes.
  </p>
</div>
```

**Formatting:**
- Label: Sentence case, no period
- Description: Full sentence with period
- Description: Secondary color (#8C8C8C)
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Immediate Action Requirement** - NEVER use switches in forms with submit buttons
2. **No Indeterminate State** - Switches can't have mixed state, use checkbox instead
3. **Switch vs Checkbox Semantics** - Activation vs Selection distinction

### Medium Priority

4. **Mixed Values Pattern** - Show as OFF for bulk editing, toggle applies to all
5. **No Error States** - Switches can't have error state, revert + toast instead
6. **Label Always Required** - Context-only exceptions rare and need aria-label
7. **Toast Notification** - Confirm important state changes with toast
8. **Description Pattern** - Label describes ON state, description explains outcome

### Nice to Have

9. **Sentence Case** - Label formatting standards

---

## Recommendations

### Add to OneDS Switch Documentation

1. **Critical Usage Rules**
   - Never in forms with submit button
   - No indeterminate state (use checkbox)
   - Immediate action only

2. **Switch vs Checkbox Decision Guide**
   - Activation/state change vs Selection
   - When to use which
   - Decision tree

3. **Error Handling Clarification**
   - Switches don't have error states
   - Revert + toast pattern
   - Disable if action not allowed

4. **Enhanced Feedback Patterns**
   - When to show toast notification
   - Success/failure feedback
   - Loading state implementation

5. **Enhanced Content Guidelines**
   - Label describes ON state
   - Description explains outcome
   - Sentence case, neutral tone

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Three Size Variants** - Small, default, large with exact specs
2. ✅ **Loading State** - Spinner in thumb during async operations
3. ✅ **Input vs Button Patterns** - Both implementation methods documented
4. ✅ **Reduced Motion Support** - Instant state change without animation
5. ✅ **Transition Specifications** - Exact timing for thumb slide and color fade
6. ✅ **Touch Target Guidelines** - Mobile-specific sizing
7. ✅ **Group Pattern** - Fieldset for related switches

**Conclusion:** OneDS has comprehensive switch documentation. Adding immediate-action requirement emphasis, no-indeterminate-state limitation, error handling clarification, and switch-vs-checkbox semantic distinction will make it industry-leading.
