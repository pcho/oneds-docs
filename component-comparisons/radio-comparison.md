# Radio Button Component Comparison

**Date:** November 5, 2025
**Component:** Radio Button
**Systems Compared:** Adobe Spectrum, GitLab Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/radio.md`:

- Comprehensive anatomy (5 elements)
- Detailed specifications (sizes, states, colors)
- Three sizes (small, default, large)
- Do's and Don'ts
- Primary use cases with ASCII examples
- Behavior documentation (selection, focus, dismissing)
- Roving tabindex pattern documented
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Screen reader support with position announcement
- Focus management
- Touch targets
- Custom radio button guidance
- Error states
- Helper text patterns
- Default selection guidance

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** Label Always Required (Adobe Spectrum)

**What they have:**
> "Radio groups should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These radio groups without a visible label should still include an aria-label in HTML."

**What OneDS has:**
```markdown
**Group Labeling:**
- Always use `<fieldset>` and `<legend>`
- Or `role="radiogroup"` with `aria-labelledby`
```

**Gap:**
✅ We say always use fieldset/legend
⚠️ Not as emphatic - they say label is REQUIRED, rare exceptions need expert review
⚠️ No warning about aria-label requirement for hidden labels

**Worth considering:**
```markdown
**Radio Group Label Requirement (Critical):**

- ⚠️ EVERY radio group MUST have a label - non-negotiable
- Groups without labels fail WCAG accessibility standards
- Visible label is strongly preferred

**Visible Label (Default):**
```html
<fieldset>
  <legend>Select shipping method</legend>
  <!-- radio options -->
</fieldset>
```

**Hidden Label (Rare Exception):**
- Only when context is completely clear
- Must be reviewed by accessibility expert
- MUST include `aria-label` or `aria-labelledby`

```html
<!-- Use only when context is absolutely clear -->
<div
  role="radiogroup"
  aria-label="Select shipping method"
  class="radio-group">
  <!-- radio options -->
</div>
```

**Why Label is Critical:**
- Screen reader reads label before EACH option
- Example: "Select shipping method. Standard. Radio button. 1 of 3."
- Without label: "Standard. Radio button." (no context)
- User doesn't know what they're selecting
```

---

### 2. Label Read Before Each Option (Adobe Spectrum)

**What they have:**
> "Labels should clearly describe what the options represent. This is important for accessibility, since a screen reader will read the label before each option."

**What OneDS has:**
```markdown
**Screen Reader Support:**
- Announce group label/legend first
```

**Gap:**
✅ We mention group label announcement
⚠️ Could emphasize it's read BEFORE EACH option, not just first

**Worth considering:**
```markdown
**Screen Reader Behavior (Important):**

**Label Repetition:**
- Screen reader reads group label before EACH radio option
- Not just when entering the group
- Maintains context as user navigates

**Example User Experience:**
```
[User tabs to radio group]
Screen reader: "Select shipping method. Standard Shipping. Radio button, checked. 1 of 3."

[User presses Down Arrow]
Screen reader: "Select shipping method. Express Shipping. Radio button, not checked. 2 of 3."

[User presses Down Arrow]
Screen reader: "Select shipping method. Overnight Shipping. Radio button, not checked. 3 of 3."
```

**Why This Matters:**
- User always knows what they're selecting
- Label provides context for each option
- Essential for long forms with multiple radio groups

**Implication for Label Writing:**
- **Keep legend/label concise** (repeated multiple times)
- ✅ "Shipping method"
- ❌ "Please select your preferred shipping method from the following options"
- Long labels become verbose and annoying
```

---

### 3. Default Selection Required (Adobe Spectrum + GitLab)

**What they have:**
- **Spectrum:** "When a radio group presents non-identical values, no selection should display initially. Subsequent user selection updates all values."
- **GitLab:** "A default selected option must always be present."

**What OneDS has:**
```markdown
**Default Selection:**
- Consider pre-selecting an option
- Reduces errors and form abandonment
- Use most common or recommended option
- Or require explicit selection (validation)
```

**Gap:**
⚠️ We say "consider" pre-selecting
⚠️ GitLab says default selection MUST be present
⚠️ Conflicting guidance vs. Spectrum (no selection for mixed values)

**Worth considering:**
```markdown
**Default Selection Strategy:**

**Standard Forms (Recommended: Default Selected)**
- Pre-select the most common option
- Reduces cognitive load
- Faster form completion
- Less errors

**Example:**
```html
<fieldset>
  <legend>Shipping method</legend>
  <input type="radio" name="shipping" value="standard" checked>
  Standard (Most common)
  <!-- others -->
</fieldset>
```

**Benefits:**
- Users can skip field if default is correct
- Reduces form abandonment
- Clearer what's selected

**When NO Default Selection:**

**Use Case 1: Critical Choices**
- User MUST make explicit choice
- No "safe" default exists
- Example: "Delete permanently or archive?"
- Require selection prevents accidental submissions

**Use Case 2: Bulk Editing (Spectrum Pattern)**
- Editing multiple items with different values
- Show no selection initially
- User selection applies to all items
- Example: Editing 5 patents with different statuses

**Use Case 3: Optional Choices**
- Question may be skipped
- But if answered, one must be selected
- Example: Optional survey question

**Implementation:**
```html
<!-- Critical choice: no default -->
<fieldset aria-required="true">
  <legend>Choose action *</legend>
  <input type="radio" name="action" value="delete" required>
  Delete permanently
  <input type="radio" name="action" value="archive" required>
  Archive
</fieldset>
```

**Validation:**
- If no default: validate on submit
- Show error if nothing selected
- ⚠️ "Please select a shipping method"
```

---

### 4. Arrow Key Wrapping Behavior (Adobe Spectrum)

**What they have:**
> "Up/Down Arrow Keys: Move selection between radio buttons; selection wraps from last to first and vice versa"

**What OneDS has:**
```markdown
**Keyboard Selection:**
- Arrow keys change selection
- Circular navigation (wrap around)
```

**Gap:**
✅ We mention circular navigation
⚠️ Could be more explicit about wrapping behavior

**Worth considering:**
```markdown
**Arrow Key Navigation (Detailed):**

**Circular Wrapping:**
- Pressing Down Arrow on last option → wraps to first option
- Pressing Up Arrow on first option → wraps to last option
- Never "stuck" at ends
- Matches native browser behavior

**Visual Example:**
```
Options:
  1. Standard  ←────────┐
  2. Express            │
  3. Overnight ─────────┘

User on "Overnight" presses Down Arrow
→ Wraps to "Standard"

User on "Standard" presses Up Arrow
→ Wraps to "Overnight"
```

**Implementation:**
```javascript
// Arrow key handler
if (key === 'ArrowDown') {
  const nextIndex = (currentIndex + 1) % totalOptions;
  selectOption(nextIndex);
}

if (key === 'ArrowUp') {
  const prevIndex = (currentIndex - 1 + totalOptions) % totalOptions;
  selectOption(prevIndex);
}
```

**User Benefit:**
- Efficient navigation
- No need to reverse direction at ends
- Consistent with native browser radio behavior
```

---

### 5. No Nesting in Radio Groups (GitLab)

**What they have:**
> "Do not nest or add other elements within a radio button group. Keep the radio button group as a single cohesive unit to ensure the user can properly traverse the controls."

**What OneDS has:**
- No specific warning about nesting elements

**Gap:**
❌ No guidance on what NOT to put inside radio groups
❌ Missing warning about breaking traversal

**Worth considering:**
```markdown
**Radio Group Structure (Critical):**

**Keep Groups Flat:**
- ❌ Don't nest other elements inside radio group
- ❌ Don't add divs, sections, or headings between radios
- ❌ Don't insert buttons or links within group
- ✅ Keep radio group as single cohesive unit

**Why:**
- Breaks keyboard navigation
- Screen reader loses context
- Tab order becomes confusing
- Arrow keys don't work correctly

**Bad Example (Don't Do This):**
```html
<fieldset>
  <legend>Shipping</legend>

  <input type="radio" name="shipping" value="standard">
  Standard

  <div class="promo-banner">
    <!-- Ad or promotional content -->
  </div>

  <input type="radio" name="shipping" value="express">
  Express
</fieldset>
```

**Problem:** User navigating with arrows hits banner, breaks flow

**Good Example:**
```html
<!-- Promotional content OUTSIDE radio group -->
<div class="promo-banner">
  Save 20% on Express Shipping!
</div>

<fieldset>
  <legend>Shipping</legend>

  <input type="radio" name="shipping" value="standard">
  Standard

  <input type="radio" name="shipping" value="express">
  Express
</fieldset>
```

**Allowed Within Radio Group:**
- ✅ Helper text for individual options
- ✅ Icons or badges alongside labels
- ✅ Descriptive text for each option
- ❌ Interactive elements (buttons, links)
- ❌ Unrelated content
- ❌ Other form controls
```

---

### 6. Label-For Requirement for Accessibility (GitLab)

**What they have:**
> "When using `GlFormGroup`, the `label` prop alone is insufficient for accessibility. The `label-for` prop must also be provided to give the input an accessible name."

**What OneDS has:**
```markdown
**Label Association:**
- Use `<label>` wrapping input and text
- Or use `for` attribute linking to input `id`
```

**Gap:**
✅ We show both methods
⚠️ Could clarify when explicit `for` is required

**Worth considering:**
```markdown
**Label Association Methods:**

**Method 1: Wrapping (Recommended)**
```html
<label>
  <input type="radio" name="shipping" value="standard">
  <span class="radio-circle"></span>
  Standard Shipping
</label>
```
- ✅ Simpler HTML
- ✅ Entire label automatically clickable
- ✅ No ID required
- Best for most cases

**Method 2: Explicit For/ID (When Needed)**
```html
<input
  type="radio"
  id="shipping-standard"
  name="shipping"
  value="standard">

<label for="shipping-standard">
  Standard Shipping
</label>
```
- ✅ Flexible positioning
- ✅ Label can be anywhere in DOM
- ⚠️ Requires unique IDs
- ⚠️ More complex
- Use when: Custom layouts, label separated from input

**When Explicit For/ID Required:**
- Form builder components
- Complex custom layouts
- Label and input in different containers
- Programmatic label generation

**Accessibility Note:**
- Both methods are accessible
- Wrapping method is simpler and preferred
- Explicit `for` provides same accessibility
- NEVER have input without associated label
```

---

### 7. Hidden Labels with Screen Reader Only Text (GitLab)

**What they have:**
> "Use `gl-sr-only` class to create screen-reader-only labels when visual labels aren't appropriate"

**What OneDS has:**
- No pattern for screen-reader-only labels

**Gap:**
❌ No guidance on visually hidden group labels

**Worth considering:**
```markdown
**Visually Hidden Group Labels:**

**When to Use:**
- Context makes label visually redundant
- Space constraints
- Design requires minimal UI
- But still need accessibility

**Implementation:**
```html
<fieldset>
  <legend class="sr-only">Status filter</legend>

  <div class="radio-group-inline">
    <label>
      <input type="radio" name="status" value="all" checked>
      All
    </label>
    <label>
      <input type="radio" name="status" value="active">
      Active
    </label>
    <label>
      <input type="radio" name="status" value="archived">
      Archived
    </label>
  </div>
</fieldset>

<!-- Visual context above radios makes legend redundant -->
<h2>Filter patents by status</h2>
```

**CSS:**
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

**Screen Reader Experience:**
- Reads hidden legend before each option
- "Status filter. All. Radio button, checked."
- Sighted users see visual context without redundant label

**When NOT to use:**
- First resort should always be visible label
- Use only when context is genuinely clear
- Have accessibility expert review
```

---

### 8. Legend Font Weight (GitLab)

**What they have:**
> "Legend text uses bold font weight positioned above the group."

**What OneDS has:**
```markdown
**Label:**
- **Font Weight**: 400 (normal)
```

**Gap:**
⚠️ We specify normal weight for labels
⚠️ GitLab specifies bold for legend

**Worth considering:**
```markdown
**Typography Hierarchy:**

**Group Legend/Label:**
- **Font Weight**: 500-600 (medium/semibold)
- **Font Size**: 14px
- **Color**: Primary text (#262626)
- **Position**: Above radio group
- **Purpose**: Group heading, more prominent

**Individual Radio Labels:**
- **Font Weight**: 400 (normal)
- **Font Size**: 14px
- **Color**: Primary text (#262626)
- **Purpose**: Option description

**Visual Hierarchy Example:**
```
Select shipping method        ← Bold (legend)

○ Standard Shipping          ← Normal (option label)
  5-7 business days          ← Light gray (helper text)

○ Express Shipping           ← Normal
  2-3 business days          ← Light gray

● Overnight Shipping         ← Normal (checked)
  Next business day          ← Light gray
```

**Why Different Weights:**
- Legend = question/category (bold)
- Options = choices (normal)
- Clear visual hierarchy
- Easier scanning
```

---

### 9. Emphasized vs Non-Emphasized Variants (Adobe Spectrum)

**What they have:**
> "Use emphasized (blue) variants for forms and settings where visibility matters. Reserve non-emphasized variants for application panels with monochrome interfaces."

**What OneDS has:**
- Single visual style (blue primary)

**Gap:**
❌ No guidance on de-emphasized or quiet variants
❌ No pattern for low-visual-prominence radio groups

**Worth considering:**
```markdown
**Visual Prominence Variants:**

**Standard (Emphasized) - Default:**
- **Border**: Blue (#1890FF)
- **Dot**: Blue (#1890FF)
- **Use for**: Forms, settings, primary interactions
- High visibility, clear selection state

**Quiet (De-emphasized) - Alternative:**
- **Border**: Gray (#D1D6DB)
- **Dot**: Gray (#595959)
- **Use for**: App panels, filters, secondary controls
- Less visual weight, subtle selection

**When to Use Each:**

**Emphasized (Blue):**
- ✅ Forms requiring user attention
- ✅ Important settings
- ✅ Primary selection tasks
- ✅ When one radio group on page

**De-emphasized (Gray):**
- ✅ Filter panels (sidebar)
- ✅ Application settings (many radio groups)
- ✅ Data tables (inline filters)
- ✅ Repeated patterns (multiple groups)

**Example:**
```
Sidebar Filter Panel (De-emphasized):
┌─────────────────┐
│ Filters         │
│                 │
│ Status          │
│ ○ All           │ ← Gray
│ ● Active        │
│ ○ Archived      │
│                 │
│ Type            │
│ ○ Utility       │ ← Gray
│ ● Design        │
│ ○ Plant         │
└─────────────────┘

Main Form (Emphasized):
┌─────────────────┐
│ Shipping method │
│ ○ Standard      │ ← Blue
│ ● Express       │
│ ○ Overnight     │
└─────────────────┘
```

**Note:** Both variants have same accessibility (only visual difference)
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Label Always Required** - Radio groups without labels fail WCAG, need expert review for exceptions
2. **Label Read Before Each Option** - Screen readers repeat legend before every radio, keep concise
3. **Default Selection Strategy** - When to pre-select vs. require explicit choice
4. **No Nesting in Groups** - Don't add other elements within radio group (breaks navigation)

### Medium Priority

5. **Arrow Key Wrapping** - Explicit circular navigation behavior
6. **Label-For Requirements** - When explicit association needed
7. **Visually Hidden Labels** - Screen-reader-only legend pattern
8. **Legend Font Weight** - Bold for group label, normal for options
9. **Emphasized vs Quiet Variants** - Different visual prominence for different contexts

### Nice to Have

None identified - most patterns are important for accessibility or usability

---

## Recommendations

### Add to OneDS Radio Documentation

1. **Critical Label Requirements**
   - Every group MUST have label
   - Accessibility expert review for hidden labels
   - Screen reader reads label before each option

2. **Default Selection Guidance**
   - When to pre-select (standard forms)
   - When NOT to pre-select (critical choices, bulk editing)
   - Validation for required selection

3. **Radio Group Structure Rules**
   - No nesting other elements
   - Keep group flat and cohesive
   - What's allowed vs. not allowed inside groups

4. **Enhanced Keyboard Navigation**
   - Arrow key wrapping behavior details
   - Roving tabindex implementation
   - Navigation in vertical vs. horizontal layouts

5. **Visual Variants (Optional)**
   - Emphasized (blue) for forms
   - De-emphasized (gray) for filters/panels
   - When to use each

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Comprehensive Size Variants** - Small, default, large with exact specifications
2. ✅ **Roving Tabindex Documented** - Detailed focus management pattern
3. ✅ **Position Announcement** - Screen reader announces "2 of 3"
4. ✅ **Custom Radio Guidance** - How to hide native input properly
5. ✅ **Helper Text Pattern** - Individual and group helper text
6. ✅ **Error States** - Validation and error messaging
7. ✅ **Touch Target Specifications** - Mobile considerations clear
8. ✅ **Cannot Deselect Pattern** - Explains why deselection isn't allowed

**Conclusion:** OneDS has excellent radio button documentation. Adding critical label requirements, default selection strategy, no-nesting rule, and label-before-each-option clarification will make it industry-leading.
