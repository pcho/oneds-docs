# Modal Component Comparison

**Date:** November 5, 2025
**Component:** Modal / Dialog
**Systems Compared:** GitLab Design, Nord Health Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/modal.md`:

- Comprehensive anatomy (8 elements)
- Detailed specifications (sizes, safe zones, backdrop)
- Do's and Don'ts
- Primary use cases with ASCII examples
- Behavior documentation (reference to pattern file)
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Focus management guidance
- Screen reader support
- Responsive considerations
- Touch targets

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** Initial Focus on Title, NOT Form Controls (GitLab)

**What they have:**
> "Initially place focus on the modal title (not on form controls or buttons)."
> "This prevents users from missing critical contextual information before interactive elements."

**What OneDS has:**
```markdown
**Focus Management:**
- When the modal opens, set the initial focus to the first user input location
- For forms, focus on the first field; for transactional modals without input fields, focus on the primary button
```

**Gap:**
❌ We recommend focusing on first field/button
❌ GitLab says focus on TITLE to prevent users missing context
⚠️ Conflicting guidance - which is correct?

**Worth considering:**
```markdown
**Initial Focus Strategy:**

Two approaches based on modal type:

**Approach A: Focus Title First (GitLab recommendation)**
- Pro: User hears title and description before interacting
- Pro: Screen reader users get full context
- Con: Requires extra Tab to reach first field
- Best for: Confirmation dialogs, warning modals, complex forms

**Approach B: Focus First Interactive Element (OneDS current)**
- Pro: Immediate interaction ready
- Pro: Faster for experienced users
- Con: Screen reader may miss title/description
- Best for: Simple single-field modals, transactional dialogs

**Recommendation:**
- **Default: Focus first interactive element** (current approach)
- **For warnings/confirmations: Focus title** (new pattern)
- Use `aria-labelledby` and `aria-describedby` so title is announced regardless of focus
- Implementation:
  ```html
  <!-- Confirmation modal: focus title -->
  <div role="dialog" aria-labelledby="title">
    <h2 id="title" tabindex="-1">Delete Patent?</h2>
  </div>

  <!-- Form modal: focus first field -->
  <div role="dialog" aria-labelledby="title">
    <h2 id="title">New Patent</h2>
    <input type="text" autofocus />
  </div>
  ```
```

---

### 2. WAI-ARIA Dialog Pattern Reference (GitLab + Nord Health)

**What they have:**
- **GitLab:** "Reference WAI-ARIA Dialog (Modal) documentation for comprehensive guidance"
- **Nord Health:** "Reference WAI-ARIA Authoring Practices for detailed modal dialog patterns"

**What OneDS has:**
- Custom accessibility implementation documented
- No reference to official WAI-ARIA patterns

**Gap:**
❌ No reference to official WAI-ARIA Dialog pattern specification
⚠️ Designers/developers may not know about official guidance

**Worth considering:**
```markdown
**Accessibility Standards:**

OneDS Modal follows the **[WAI-ARIA Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)**.

**Key Requirements from WAI-ARIA:**
- Role: `dialog`
- Property: `aria-modal="true"`
- Label: `aria-labelledby` or `aria-label`
- Description: `aria-describedby` (optional)
- Focus management: Trap focus within modal
- Keyboard: Escape dismisses, Tab cycles
- Background: `aria-hidden="true"` on main content

**For detailed specification, consult:**
- [WAI-ARIA Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- Includes focus management algorithms
- Explains keyboard interaction requirements
- Covers screen reader expectations
```

---

### 3. Autofocus Attribute Pattern (Nord Health)

**What they have:**
> "Use the `autofocus` attribute to set initial focus to the first interactive element."
> "For transactional modals without form inputs, apply `autofocus` to the primary button in the footer for efficiency."
> "For forms, place `autofocus` on the first form field."

**What OneDS has:**
- Focus management described conceptually
- No mention of HTML `autofocus` attribute

**Gap:**
❌ No mention of native HTML `autofocus` attribute
⚠️ Implementation detail missing

**Worth considering:**
```markdown
**Focus Implementation (Technical):**

Use HTML `autofocus` attribute for initial focus:

**Form Modal:**
```html
<div role="dialog">
  <h2>New Patent Application</h2>
  <form>
    <label>Title</label>
    <input type="text" name="title" autofocus />
    <!-- autofocus on first field -->
  </form>
</div>
```

**Confirmation Modal:**
```html
<div role="dialog">
  <h2>Delete Patent?</h2>
  <p>This action cannot be undone.</p>
  <footer>
    <button>Cancel</button>
    <button class="danger" autofocus>Delete</button>
    <!-- autofocus on primary action -->
  </footer>
</div>
```

**Benefits:**
- Browser handles focus automatically on modal open
- Simpler than JavaScript focus management
- Works with dynamic modal rendering

**Note:** Still requires manual focus trap implementation for Tab cycling.
```

---

### 4. Cancel Event for Preventing Dismissal (Nord Health)

**What they have:**
> "The `cancel` event fires when users attempt dismissal, allowing `preventDefault()` to block closure."

**What OneDS has:**
- No mention of cancel event
- No pattern for conditional dismissal

**Gap:**
❌ No guidance on preventing modal close in certain conditions
❌ Missing pattern for "unsaved changes" confirmation

**Worth considering:**
```markdown
**Conditional Dismissal Pattern:**

Prevent modal from closing when user has unsaved changes:

**Use Case:**
- User fills out form in modal
- User clicks backdrop or Escape
- Show confirmation: "Discard unsaved changes?"

**Implementation:**
```javascript
const modal = document.querySelector('[role="dialog"]');

modal.addEventListener('cancel', (event) => {
  const hasUnsavedChanges = checkFormDirty();

  if (hasUnsavedChanges) {
    event.preventDefault(); // Block dismissal
    showDiscardConfirmation(); // Show confirmation modal
  }
});
```

**Behavior:**
1. User tries to close modal (Escape or backdrop click)
2. `cancel` event fires
3. Check if form has unsaved data
4. If yes: Prevent close, show confirmation
5. If no: Allow close

**Confirmation Options:**
- Secondary modal: "Discard changes?" [Keep Editing] [Discard]
- Or banner within modal: "You have unsaved changes"
```

---

### 5. Multiple Modal Confirmation Pattern (Nord Health)

**What they have:**
> "Implement confirmation dialogs by preventing default close behavior, then showing a secondary modal for user confirmation before discarding work."

**What OneDS has:**
```markdown
## Don't
- Avoid displaying one modal on top of another; instead, either integrate the additional information into the existing modal or direct users to a new screen. Stacking modals is acceptable for confirmations.
```

**Gap:**
✅ We allow stacking for confirmations
⚠️ Could provide explicit pattern for how to implement this

**Worth considering:**
```markdown
**Modal Stacking Pattern (Confirmations Only):**

**Allowed Use Case:** Unsaved changes confirmation

**Visual Example:**
```
┌─────────────────────────────────┐
│ Discard Changes?            [×] │ ← Second modal (confirmation)
├─────────────────────────────────┤
│ You have unsaved changes that   │
│ will be lost if you close.      │
├─────────────────────────────────┤
│     [Keep Editing]  [Discard]   │
└─────────────────────────────────┘
        ↓ (Backdrop)
┌─────────────────────────────────┐
│ Edit Patent             [dimmed]│ ← First modal (original)
├─────────────────────────────────┤
│ [Form with changes...] (grayed) │
└─────────────────────────────────┘
```

**Implementation Rules:**
- ✅ Allowed: Confirmation modal on top of edit modal
- ✅ Second modal is smaller and centered
- ✅ Second backdrop darker (75% opacity)
- ❌ Never: Three or more modals stacked
- ❌ Never: Stacking for navigation or additional forms

**Focus Management:**
- Second modal traps focus
- First modal becomes `aria-hidden="true"`
- On confirmation close: return focus to first modal
- On discard: close both, return to page
```

---

### 6. Scrollable Body Pattern (Nord Health)

**What they have:**
> "Use the `scrollable` attribute to keep modal fixed while only the body content scrolls, preventing layout shift."

**What OneDS has:**
```markdown
**Modal Body:**
- **Max Height**: Scrollable if content exceeds
- **Overflow**: Auto scroll
```

**Gap:**
✅ We have scrollable body
⚠️ Could clarify header/footer remain fixed

**Worth considering:**
```markdown
**Scrollable Content Pattern:**

When modal content exceeds viewport height:

**Default Behavior:**
- Header stays fixed at top
- Body scrolls independently
- Footer stays fixed at bottom
- Only middle section scrolls

**Visual Example:**
```
┌─────────────────────────────────┐
│ Long Form Modal             [×] │ ← Fixed header
├─────────────────────────────────┤
│ Field 1: [input]                │ ↑
│ Field 2: [input]                │ │
│ Field 3: [input]                │ │
│ Field 4: [input]                │ │ Scrollable
│ Field 5: [input]                │ │ area
│ Field 6: [input]                │ │
│ Field 7: [input]                │ ↓
├─────────────────────────────────┤
│           [Cancel]  [Save]      │ ← Fixed footer
└─────────────────────────────────┘
```

**Implementation:**
```css
.modal {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 160px);
}

.modal-header,
.modal-footer {
  flex-shrink: 0; /* Don't shrink */
}

.modal-body {
  flex: 1;
  overflow-y: auto; /* Scroll independently */
}
```

**Benefits:**
- Always see header (context) and footer (actions)
- No layout shift during scroll
- Clear visual indication of more content
```

---

### 7. Modal Return Value Pattern (Nord Health)

**What they have:**
> "Capture modal closure reasons via `returnValue` property, useful for form submissions and user action tracking."

**What OneDS has:**
- No mention of return values
- No pattern for determining how modal was closed

**Gap:**
❌ No guidance on tracking which button closed modal
❌ Missing pattern for programmatic result handling

**Worth considering:**
```markdown
**Modal Return Value Pattern:**

Track which action closed the modal:

**Use Case:**
- Need to know: Did user click "Save" or "Cancel"?
- Different actions based on closure method
- Form submission vs dismissal tracking

**Implementation:**
```javascript
// Open modal and get result
const result = await openModal({
  title: 'Delete Patent?',
  actions: ['cancel', 'delete']
});

if (result === 'delete') {
  // User confirmed deletion
  deletePatent();
} else {
  // User cancelled
  console.log('Deletion cancelled');
}
```

**Return Values:**
- `"cancel"` - User clicked Cancel or Escape or backdrop
- `"submit"` - User clicked primary action button
- `"close"` - User clicked X button
- Custom values based on button clicked

**HTML Implementation:**
```html
<dialog>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="submit">Delete</button>
  </form>
</dialog>

<script>
  dialog.addEventListener('close', () => {
    console.log('Closed with:', dialog.returnValue);
    // "cancel" or "submit"
  });
</script>
```

**Benefits:**
- Cleaner code (no callback soup)
- Explicit action tracking
- Easier testing
```

---

### 8. Top-Aligned on Mobile (GitLab)

**What they have:**
> "Top-aligned on extra-small (xs) breakpoints; vertically centered otherwise."

**What OneDS has:**
```markdown
**Responsive:**
- Full screen on mobile
```

**Gap:**
✅ We have full screen on mobile
⚠️ GitLab uses top-aligned (not full screen) for small modals
⚠️ Different approach

**Worth considering:**
```markdown
**Mobile Modal Positioning:**

Two approaches for mobile:

**Approach A: Full Screen (OneDS current)**
- Modal fills entire viewport
- Header at top, footer at bottom
- Best for: Forms, complex content, multi-step flows

**Approach B: Top-Aligned (GitLab approach)**
- Modal slides from top
- Still has backdrop underneath
- Still has border radius at bottom
- Best for: Confirmations, simple dialogs, quick actions

**Example (Top-Aligned on Mobile):**
```
Mobile (< 768px):
┌─────────────────────────┐
│ Delete Patent?      [×] │ ← Top of screen
├─────────────────────────┤
│ This action cannot be   │
│ undone.                 │
├─────────────────────────┤
│     [Cancel]  [Delete]  │
└─────────────────────────┘
         │ Backdrop
         │ (tap to close)
         ↓
```

**Recommendation:**
- **Complex modals (forms):** Full screen on mobile ✓ (current)
- **Simple modals (confirmations):** Consider top-aligned variant
- Provides more context (see page behind)
- Easier to dismiss (larger backdrop area)
```

---

### 9. Avoid Scrollable Content When Possible (GitLab)

**What they have:**
> "Height determined by content; avoid scrollable content within modal when possible."
> "On small screens requiring scroll, consider opening in new page instead."

**What OneDS has:**
- Scrollable body documented
- No warning against scrolling

**Gap:**
❌ No guidance on avoiding scroll when possible
❌ No pattern for "use full page instead" decision

**Worth considering:**
```markdown
**Scrolling Best Practices:**

**Prefer non-scrolling modals:**
- Keep content concise
- Use progressive disclosure (tabs, accordions)
- Split into multi-step wizard if too long
- ⚠️ Scrolling in modal is poor UX

**When to Use Full Page Instead of Modal:**

If modal requires scrolling on mobile:
- ❌ Modal with 10+ form fields (use full page)
- ❌ Modal with large tables (use full page)
- ❌ Modal with multiple sections (use full page)
- ✅ Modal with 3-5 fields (modal is fine)
- ✅ Simple confirmation (modal is fine)

**Decision Tree:**
```
Does content fit in viewport without scroll?
├─ Yes → Use modal ✓
└─ No → Ask: Is this mobile?
    ├─ No (desktop) → Modal with scroll acceptable
    └─ Yes (mobile) → Consider full page instead
```

**Benefits of full page over scrolling modal:**
- Easier navigation on mobile
- More space for content
- Browser back button works naturally
- No focus trap complexity
```

---

### 10. Multiple Dismissal Methods Required (GitLab)

**What they have:**
> "Users can dismiss via close button, cancel button, Esc key, or clicking outside the modal."
> "Provide multiple dismissal methods."

**What OneDS has:**
```markdown
**Keyboard Navigation:**
- `Escape` - Close modal

**Backdrop:**
- **Clickable**: Yes, dismisses modal

## Don't
- Always include a clear and visible close button at the top of the modal
```

**Gap:**
✅ We have all dismissal methods
⚠️ Could explicitly list all methods as requirement

**Worth considering:**
```markdown
**Dismissal Methods (Required):**

Every modal MUST provide ALL of these dismissal methods:

1. ✅ **Close button (×)**: Top-right corner
   - Always visible
   - Labeled: `aria-label="Close modal"`
   - Minimum 44×44px touch target

2. ✅ **Cancel button**: In footer
   - For forms and confirmations
   - Clearly labeled: "Cancel", "Close", "Dismiss"
   - Secondary style

3. ✅ **Escape key**: Keyboard shortcut
   - Closes modal immediately
   - Works from any focused element within modal

4. ✅ **Backdrop click**: Click outside modal
   - Exception: Disable for critical confirmations
   - Exception: Disable when unsaved changes present
   - Can be disabled via configuration

**Exception: Blocking Modals**
- For critical actions (permanent deletion)
- Disable backdrop click and Escape
- User MUST click Cancel or Confirm
- Use sparingly - frustrating UX

**Implementation:**
```html
<div class="modal-backdrop" onclick="closeModal()">
  <div class="modal" onclick="event.stopPropagation()">
    <button class="close" aria-label="Close">×</button>
    <!-- content -->
    <footer>
      <button onclick="closeModal()">Cancel</button>
      <button class="primary">Save</button>
    </footer>
  </div>
</div>
```
```

---

### 11. Action Button Label Specificity (GitLab)

**What they have:**
> "Use specific action labels (e.g., 'Set status' vs. 'Save')."

**What OneDS has:**
- No specific guidance on button labels
- Examples use "Delete", "Create", "Cancel"

**Gap:**
⚠️ Could emphasize specific action verbs

**Worth considering:**
```markdown
**Action Button Labels:**

Use specific verbs that describe the exact action:

**Good (Specific):**
- ✅ "Delete Patent" (not "Delete")
- ✅ "Publish Application" (not "Save")
- ✅ "Add Inventor" (not "Submit")
- ✅ "Export PDF" (not "Export")

**Why:**
- User knows exactly what will happen
- No ambiguity
- Reduces cognitive load
- Better for screen readers

**Formula:** `{Verb} + {Object}`
- Delete Patent
- Create Application
- Update Settings
- Send Invitation

**Exceptions:**
- "Cancel" is universal (always OK)
- "Close" for non-destructive dismissal
- "OK" only for acknowledgments (avoid for actions)

**Don't:**
- ❌ Generic "Submit" (submit what?)
- ❌ Generic "Save" (save which changes?)
- ❌ Ambiguous "Yes"/"No" (yes to what?)
- ❌ Technical "OK" for actions
```

---

### 12. Content Guidelines - Header Format (GitLab + Nord Health)

**What they have:**
- **GitLab:** "Headers should be questions or descriptive phrases"
- **Nord Health:** "Lead with strong action verbs using '{verb} + {noun}' formula. Use sentence case, not title case."

**What OneDS has:**
```markdown
5. **Title**: A concise and descriptive title.
```

**Gap:**
❌ No guidance on title format (question vs statement)
❌ No capitalization guidance

**Worth considering:**
```markdown
**Modal Title Guidelines:**

**For Confirmations:** Use questions
- ✅ "Delete patent application?"
- ✅ "Discard unsaved changes?"
- ✅ "Publish application now?"
- ❌ "Delete Patent" (statement, not question)

**For Forms:** Use descriptive phrases
- ✅ "New patent application"
- ✅ "Edit inventor details"
- ✅ "Upload supporting documents"

**For Informational:** Use statements
- ✅ "Application submitted successfully"
- ✅ "Export complete"

**Capitalization:**
- Use **sentence case** (capitalize first word only)
- ✅ "Delete patent application?"
- ❌ "Delete Patent Application?" (title case)

**Formula for Actions:** `{Verb} + {Noun}`
- Add inventor
- Export report
- Update settings

**Keep Concise:**
- Maximum 5-7 words
- ❌ "Are you sure you want to permanently delete this patent application and all associated data?"
- ✅ "Delete patent application?" (details in body)
```

---

### 13. Limit Action Buttons to 1-3 (GitLab)

**What they have:**
> "Limit actions to 1-3 buttons; position at bottom."

**What OneDS has:**
```markdown
1. **Action Footer**: A footer featuring Primary and Secondary buttons. A tertiary button is available for context-specific actions but should be used with caution.
```

**Gap:**
✅ We mention tertiary with caution
⚠️ Could be more explicit about 3 max

**Worth considering:**
```markdown
**Modal Action Limits:**

**Maximum 3 buttons** in modal footer:

**Two Buttons (Most Common):**
- Cancel (left) + Primary Action (right)
- Example: [Cancel] [Delete]

**Three Buttons (Use Sparingly):**
- Tertiary (left) + Cancel + Primary (right)
- Example: [Save Draft] [Cancel] [Publish]

**Never More Than 3:**
- ❌ Four or more buttons = overwhelming
- ❌ Unclear hierarchy
- Alternative: Use dropdown menu for additional actions

**Button Alignment:**
- Tertiary: Left-aligned (if present)
- Cancel: Right-aligned, before primary
- Primary: Right-aligned, last position

**Example:**
```
┌─────────────────────────────────┐
│ Publish Patent Application  [×] │
├─────────────────────────────────┤
│ [Content...]                    │
├─────────────────────────────────┤
│ [Save Draft]    [Cancel] [Publish]│
│  ↑              ↑        ↑       │
│  Tertiary       Secondary Primary│
└─────────────────────────────────┘
```

**If you need more than 3 actions:**
- Use dropdown/menu button for additional options
- Example: [...More] [Cancel] [Publish]
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Initial Focus Strategy** - Consider focusing title for warnings/confirmations
2. **WAI-ARIA Pattern Reference** - Link to official specification
3. **Multiple Dismissal Methods** - Explicitly list all 4 required methods
4. **Action Button Label Specificity** - Use "{verb} + {object}" formula

### Medium Priority

5. **Autofocus Attribute** - HTML implementation detail
6. **Cancel Event Pattern** - Conditional dismissal for unsaved changes
7. **Modal Stacking Pattern** - Explicit confirmation modal pattern
8. **Scrollable Body Clarification** - Header/footer fixed, body scrolls
9. **Avoid Scrolling When Possible** - Use full page for long forms on mobile
10. **Title Format Guidelines** - Questions for confirmations, sentence case

### Nice to Have

11. **Modal Return Value** - Track which button closed modal
12. **Top-Aligned Mobile Option** - Alternative to full screen for simple modals
13. **Action Button Limit** - Explicit 3-button maximum

---

## Recommendations

### Add to OneDS Modal Documentation

Create supplementary guidance:

1. **Enhanced Focus Management**
   - Initial focus strategy (title vs first field)
   - WAI-ARIA Dialog pattern reference
   - Autofocus attribute implementation

2. **Enhanced Dismissal Patterns**
   - All 4 dismissal methods required
   - Cancel event for conditional dismissal
   - Confirmation modal stacking pattern

3. **Enhanced Content Guidelines**
   - Title format (questions vs statements)
   - Sentence case capitalization
   - Action button specificity ("{verb} + {object}")
   - 3-button maximum

4. **Enhanced Scroll Guidance**
   - Fixed header/footer, scrollable body
   - Avoid scroll when possible
   - Use full page for long mobile forms

5. **Technical Implementation Patterns**
   - Return value tracking
   - Autofocus attribute
   - Cancel event handling

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Comprehensive Size Variants** - Small, medium, default, large, full screen
2. ✅ **Safe Zones Documented** - 80px top/bottom for context
3. ✅ **Multiple Modal Types** - Forms, confirmations, details, media viewer
4. ✅ **Animation Specifications** - Entry/exit timing documented
5. ✅ **ASCII Art Examples** - Visual examples for each modal type
6. ✅ **Reference to Behavior Patterns** - Separate detailed behavior documentation
7. ✅ **Destructive Action Guidance** - Confirmation pattern for irreversible actions

**Conclusion:** OneDS has strong modal documentation. Adding initial focus strategy, explicit dismissal methods, WAI-ARIA reference, and content format guidelines will make it industry-leading.
