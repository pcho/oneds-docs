# OneDS Documentation Additions Plan

**Purpose:** Simple guide of what to add to existing OneDS documentation based on component comparison findings.

---

## New Universal Pattern Documents to Create

These are standalone documents that can be linked from multiple components:

### 1. `/docs/patterns/universal-label-requirements.md`

**Content:**
- ALL interactive components MUST have accessible labels (WCAG Level A requirement)
- Visual labels are strongly preferred
- When visual labels aren't possible: use `aria-label` or `aria-labelledby`
- Exceptions require accessibility expert review
- Code examples for each pattern

**Link from:** Button, Input, Checkbox, Radio, Switch, Select, and all other form controls

---

### 2. `/docs/content/style-guide.md`

**Content:**
- **Capitalization:** Sentence case everywhere (not Title Case)
  - ✅ "Email address" ❌ "Email Address"
- **Button labels:** Use "{verb} + {noun}" formula
  - ✅ "Delete patent" ❌ "Delete"
  - Use ellipsis for dialog-opening actions: "Save as…"
- **Error messages:** Write solutions, not problems
  - ✅ "Enter your email address in the format name@example.com"
  - ❌ "Invalid field"
- **Titles:** State outcomes, not "Are you sure?"
- **Labels:** Keep under 60 characters, no colons at end
- **Switch labels:** Describe ON state ("Enable notifications")
- **Help text:** Full sentences with periods
- **Punctuation:**
  - Tooltips: periods only for complete sentences
  - Fragments: no periods
  - Labels: no colons
  - Buttons: no periods

**Reference from:** All component documentation

---

### 3. `/docs/patterns/semantic-html-requirements.md`

**Content:**
- **Tables:** `<th scope="col">` or `<th scope="row">` REQUIRED on every header
- **Tables:** `<caption>` element REQUIRED for table title
- **Tables:** Never use `<h1>-<h6>` inside `<th>` elements
- **Form groups:** `name` attribute REQUIRED for checkbox/radio groups
- **Form groups:** Use `<fieldset>` + `<legend>` for groups
- **Cards:** Use `<div>` by default (not `<article>`)
- **Cards:** Wrap card collections in `<ul>` for accessibility
- **Button vs Link:** Button for actions, Link for navigation

**Link from:** Table, Checkbox, Radio, Card, Button components

---

## Component-Specific Additions

### Button

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/button/
- Key ARIA attributes explained

**Expand "When NOT to Use":**
- Use Link for navigation to different pages
- Use specific action labels, not generic "Submit" or "OK"
- Don't use more than 3 actions in modal
- Link reference: universal-label-requirements.md

**Add section: "Loading State Guidelines"**
- 1-second delay for operations under 5 seconds (prevents flicker)
- Button should remain in DOM (don't hide/show)

**Add to "Accessibility" section:**
- Icon-only buttons MUST have tooltip AND keyboard shortcut in tooltip
- Button alignment: forms left-aligned, modals right-aligned
- URL sanitization required for link buttons (security)

---

### Input

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/textbox/

**Expand existing content with:**
- Label is ALWAYS required (link to universal-label-requirements.md)
- Error message replaces help text temporarily (both must have essential info)
- "Mark the minority" pattern: If most fields required, mark only optional ones (and vice versa)
- NEVER use asterisks for optional fields
- Placeholder text disappears on type and fails with autofill (don't rely on it)
- Progressive success validation: show success immediately, show errors on blur

**Add section: "When NOT to Use"**
- Use Select for more than 5 known options
- Use Textarea for long-form text (>100 characters expected)
- Use Number Input for numeric values (don't validate text input)

**Add section: "Screen Reader Behavior"**
- How label is announced
- When help text is announced (aria-describedby)
- How error messages are announced (aria-invalid + aria-errormessage)

---

### Checkbox

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/

**Add section: "Screen Reader Behavior"**
- Legend is announced BEFORE EACH checkbox in the group
- Keep legend concise (<10 words) to avoid repetition fatigue
- Position announced: "Checkbox 1 of 3"
- Name attribute creates group relationship for screen readers

**Expand "Accessibility" section:**
- `name` attribute REQUIRED for checkbox groups
- Indeterminate state has limited screen reader support (not all announce it)

**Add section: "When NOT to Use"**
- Maximum 10 checkboxes → use Select/multi-select instead
- Use Radio for single selection
- Use Switch for immediate actions (not in forms with submit)

**Add technical note:**
- Indeterminate state must be set via JavaScript, not HTML attribute

---

### Radio

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/radio/

**Add section: "Screen Reader Behavior"**
- Legend announced BEFORE EACH radio option
- Keep legend concise (<10 words)
- Position announced: "Radio button 1 of 3"
- Selected state announced automatically

**Expand "Behavior" section:**
- Default selection strategy: Pre-select for 2-3 options, require explicit choice for 4+
- Arrow key navigation doesn't loop at boundaries (reaches first/last and stops)
- Never nest other elements inside radio groups (breaks keyboard navigation)

**Add section: "When NOT to Use"**
- Use Select/Dropdown for more than 7 options
- Use Checkbox for multi-select
- Use Tabs for view switching

**Add to "Accessibility":**
- `name` attribute REQUIRED for radio groups

---

### Switch

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/switch/

**Add section: "Screen Reader Behavior"**
- Announced as: "[Label]. Switch. On/Off."
- State changes announced immediately

**Add critical section: "When NOT to Use"**
- NEVER use Switch in forms with submit button → use Checkbox instead
- Switch requires IMMEDIATE action (settings that save automatically)
- If there's a "Save" button → use Checkbox, not Switch

**Add section: "Switch vs Checkbox Decision"**
```
Does the setting have a "Save" button?
├─ Yes → Use CHECKBOX (not switch)
└─ No → Use SWITCH (immediate action)
```

**Expand "Accessibility" section:**
- Switches CANNOT have error states (not possible with immediate action)
- If action fails: revert switch + show toast notification
- No indeterminate state possible (accessibility API limitation)
- Label describes ON state: "Enable notifications" not "Notifications"

---

### Select

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

**Expand existing content:**
- Label is ALWAYS required (link to universal-label-requirements.md)
- Arrow key navigation doesn't loop at boundaries
- "Mark the minority" pattern (required vs optional fields)
- Error message replaces help text temporarily
- Keep menu items concise (<60 characters, prevent wrapping)

**Add section: "When NOT to Use"**
- Use Radio group for 2-4 options (better visibility)
- Use Autocomplete/Combobox for very large lists (>50 items)

**Add section: "Mobile Considerations"**
- Small number of options: popover
- Large number of options: tray/bottom sheet

---

### Modal

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/

**Expand "Behavior" section:**
- **Initial focus strategy:**
  - Warning/confirmation modals: Focus title first
  - Form modals: Focus first input field
  - Reason: Users should hear context before interacting

**Add: "Four Required Dismissal Methods"**
1. Close button (X)
2. Cancel button
3. Escape key
4. Backdrop click (optional but recommended)

**Add section: "Screen Reader Behavior"**
- How title is announced on open
- Focus trap keeps users inside modal
- Return focus to trigger element on close

**Expand content guidelines:**
- Title format: State outcomes, not "Are you sure?"
  - ✅ "Delete this patent application?"
  - ❌ "Are you sure?"
- Maximum 2-3 action buttons
- Scrollable body with fixed header/footer

**Add section: "When NOT to Use"**
- Use Drawer for side context that doesn't block main content
- Use inline expansion for simple show/hide
- Use new page for complex multi-step workflows

---

### Card

**Add to "Accessibility" section:**
- Cards are NOT semantic landmarks (use `<div>`, not `<article>` by default)
- Only use `<article>` when card contains truly independent content
- Heading hierarchy must respect page context (not isolated)
- Wrap card collections in `<ul>` for screen readers:
  ```html
  <ul class="card-grid">
    <li>
      <div class="card">...</div>
    </li>
  </ul>
  ```

**Add section: "When NOT to Use"**
- Use List for simple text items
- Use Table for structured tabular data
- Use single metric display for dashboard numbers
- Maximum 1 primary action per card (avoid action overload)

**Add guideline:**
- If every card needs a tooltip → redesign with better labels

---

### Alert

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/alert/

**Add section: "Screen Reader Announcement Strategies"**

**Pattern 1: Announce Only** (aria-live="polite")
- Use for: Low-priority notifications
- Container must exist in DOM before content added
- Screen reader announces when user pauses

**Pattern 2: Focus Alert** (move focus + announce)
- Use for: Medium-priority notices requiring acknowledgment
- Move focus to alert when it appears

**Pattern 3: Critical Interruption** (aria-live="assertive")
- Use for: Errors, critical warnings
- Interrupts screen reader immediately

**Add critical technical note:**
- Aria-live container must exist in initial HTML before framework mounts
- Semantic elements lose meaning in live regions (headings, lists, buttons read as plain text)
- If semantics needed: use focus pattern (move focus to alert) instead of aria-live

**Add section: "When NOT to Use"**
- Use Toast for transient success messages
- Use Inline validation for form field errors
- Use Banner for persistent page-level notices
- Use Modal for critical actions requiring confirmation

**Expand accessibility:**
- Sticky positioned alerts: don't block focusable elements underneath

---

### Table

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/table/

**Add CRITICAL requirements to "Accessibility" section:**
- `<th scope="col">` or `<th scope="row">` REQUIRED on EVERY header cell
- Without scope: screen readers can't associate headers with data
- `<caption>` element REQUIRED for table title (never use heading outside table)
- Never use `<h1>-<h6>` inside `<th>` elements (semantic conflict)

**Add section: "Screen Reader Behavior"**
- How scope attribute affects announcements
- Headers are announced before each data cell
- Caption announced when entering table

**Add formatting guidelines:**
- Text columns: left-aligned
- Number columns: right-aligned
- Use tabular figures (monospaced numbers) for alignment
- Missing values: use en dash (–) not hyphen (-) or "N/A"

**Add section: "When NOT to Use"**
- Use Card grid for visual content (images, icons)
- Use List for simple single-column data
- Consider mobile alternative for tables with >4 columns

---

### Tooltip

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/

**Add section: "Delay Behavior"**
- Help icons (?): 0ms delay (instant)
- Regular buttons/controls: 500ms delay (recommended default)
- Prevents accidental triggering

**Add section: "Warmup/Cooldown Pattern"**
```
First hover: Wait 500ms → tooltip appears
Move to nearby element: Instant tooltip (no wait)
Move cursor away: Wait 1000ms cooldown
Next hover: Requires 500ms warmup again
```

**Expand content guidelines:**
- **Semantic tooltips must include icons:**
  - Informative (blue): info icon
  - Positive (green): success icon
  - Negative (red): error icon
  - Neutral: no icon
- **Punctuation:** Periods only for complete sentences
  - ✅ "Delete patent application" (fragment, no period)
  - ✅ "This action cannot be undone." (sentence, with period)

**Add section: "When NOT to Use"**
- NEVER for interactive elements (links, buttons) → use Popover
- NEVER for critical information → use inline text
- NEVER for essential instructions → use help text
- If every element needs tooltip → redesign interface with better labels

**Add guideline:**
- Excessive tooltips = poor design signal (redesign instead of adding more)

---

### Tabs

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

**Confirm existing implementation:**
- ✅ Roving tabindex documented
- ✅ Keyboard navigation documented
- Consider adding screen reader behavior explanation

---

### Breadcrumbs

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/

**Confirm existing implementation:**
- ✅ Structured data documented
- ✅ Overflow patterns documented
- Consider adding aria-current="page" usage

---

### Drawer

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- Note: Uses same pattern as Modal

**Confirm existing implementation:**
- ✅ Focus trap documented
- ✅ Overlay interaction documented
- Consider adding dismissal methods requirement (close button + escape + overlay)

---

### Pagination

**Add section: "WAI-ARIA Pattern"**
- Link to https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
- Note: Similar pattern for navigation

**Confirm existing implementation:**
- ✅ Link vs button guidance
- ✅ URL management covered
- Consider adding aria-current="page" requirement

---

### Badge, Tag

**Confirm existing implementation:**
- ✅ Strong documentation already
- Consider adding: Icon-only badges need aria-label
- Consider adding: Removable tags need descriptive close button labels ("Remove [tag name]")

---

## Quick Reference: What to Add Where

### To ALL Components
- [ ] Link to universal-label-requirements.md (if interactive)
- [ ] Add WAI-ARIA Pattern section with link to official APG
- [ ] Review capitalization against style guide (sentence case)

### To Form Controls (Input, Checkbox, Radio, Switch, Select)
- [ ] "Mark the minority" pattern (required vs optional)
- [ ] Error replaces help text pattern
- [ ] Screen reader behavior section
- [ ] "When NOT to Use" section
- [ ] Link to semantic-html-requirements.md

### To Interactive Components (Modal, Drawer, Alert)
- [ ] Focus management strategy
- [ ] Screen reader announcement pattern
- [ ] Dismissal methods
- [ ] "When NOT to Use" alternatives

### To Display Components (Card, Table, Tooltip)
- [ ] Semantic HTML requirements
- [ ] Content formatting guidelines
- [ ] "When NOT to Use" alternatives

---

## Content Patterns to Apply Everywhere

### Pattern: WAI-ARIA Section Template
```markdown
## WAI-ARIA Pattern

This component implements the [Pattern Name](link-to-apg) from the WAI-ARIA Authoring Practices Guide.

**Key ARIA attributes:**
- `role="..."` - [explanation]
- `aria-...` - [explanation]

**Reference:** [Official APG Pattern Link]
```

### Pattern: Screen Reader Behavior Template
```markdown
## Screen Reader Behavior

**How this component is announced:**
> "[Example announcement from screen reader]"

**Important considerations:**
- [Key behavior point]
- [Platform difference if any]

**Testing:** Test with NVDA (Windows) + Firefox and VoiceOver (macOS) + Safari
```

### Pattern: When NOT to Use Template
```markdown
## When NOT to Use

**Use [Alternative] instead when:**
- [Condition] → **Use [Component]** instead
- [Maximum limit guideline]

**Common mistakes:**
- ❌ [Anti-pattern]
- ✅ [Correct pattern]
```

---

## Priority Order

**Critical (do first):**
1. Universal label requirements document
2. WAI-ARIA pattern links to all components
3. Table `<th scope>` requirement
4. Switch "when NOT to use" section (critical mistake to avoid)
5. Semantic HTML requirements document

**High value (do next):**
1. Content style guide
2. Screen reader behavior sections (Checkbox, Radio, Input, Alert)
3. "When NOT to Use" sections (Switch, Card, Button, Modal)
4. Error/help text coordination pattern

**Nice to have (do if time):**
1. All remaining screen reader behavior sections
2. All remaining "when NOT to use" sections
3. Enhanced code examples
4. Technical implementation guides

---

## Notes

- **Don't remove anything** - these are additions to existing docs
- **Link to external sources** - especially WAI-ARIA APG (doesn't go stale)
- **Use consistent formatting** - follow templates above
- **Keep it simple** - practical guidance over theory
- **Remember:** Ant Design provides technical implementation, we're documenting how to use it correctly

---

This is a living document - add items as you discover more patterns worth including.
