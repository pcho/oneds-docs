# OneDS Documentation Enhancement - Implementation Progress

**Date Started:** November 5, 2025
**Last Updated:** November 5, 2025
**Status:** In Progress

---

## ✅ Completed (5/5 Critical Foundation Documents)

### Universal Pattern Documents Created

1. **`/docs/patterns/universal-label-requirements.md`** ✓
   - ALL interactive components MUST have labels (WCAG Level A)
   - Four implementation patterns with code examples
   - Common mistakes and fixes
   - Framework-specific guidance (React, Ant Design)

2. **`/docs/content/style-guide.md`** ✓
   - Sentence case capitalization standard
   - Button label formula: {verb} + {noun}
   - Error message format: solutions not problems
   - Title guidelines, punctuation rules
   - Voice and tone standards
   - Complete with examples

3. **`/docs/patterns/semantic-html-requirements.md`** ✓
   - Table requirements: `<th scope>` REQUIRED, `<caption>` REQUIRED
   - Form control groups: `name` attribute, fieldset + legend
   - Card semantics: `<div>` vs `<article>`, heading hierarchy
   - Button vs Link guidance
   - Security: URL sanitization

---

## ✅ Components Enhanced (2/10 Priority Components)

### Switch Component ✓

**Added sections:**
- ✓ "When NOT to Use" - CRITICAL section on never using Switch in forms with submit button
- ✓ Decision tree: Switch vs Checkbox
- ✓ Use alternatives guidance
- ✓ Switches CANNOT have error states (limitation explained)
- ✓ No indeterminate state possible (API limitation)
- ✓ Link to universal label requirements

**File:** `/docs/components/switch.md`

---

### Button Component ✓

**Added sections:**
- ✓ "When NOT to Use" - Link vs Button decision guidance
- ✓ Button label guidelines ({verb} + {noun} formula)
- ✓ Ellipsis for dialog-opening actions
- ✓ Button alignment by context (forms left, modals right)
- ✓ Loading state timing (1-second delay for <5s operations)
- ✓ Maximum one primary button per section
- ✓ URL sanitization for link-styled buttons (security)

**File:** `/docs/components/button.md`

---

### Card Component ✓

**Added sections:**
- ✓ "When NOT to Use" - List, Table, single metric alternatives
- ✓ Maximum one primary action per card
- ✓ Avoid excessive content guidance
- ✓ Semantic HTML: Use `<div>` by default (NOT `<article>`)
- ✓ Card collections need `<ul>` wrapper
- ✓ Heading hierarchy must respect page context
- ✓ Link to semantic HTML requirements

**File:** `/docs/components/card.md`

---

### Modal Component ✓

**Added sections:**
- ✓ Initial focus strategies (two approaches explained)
- ✓ Four required dismissal methods
- ✓ "When NOT to Use" - Drawer, inline expansion, new page, toast alternatives
- ✓ Limitations (max buttons, scrolling, nested modals)
- ✓ Content guidelines (title format, button text)
- ✓ Link to content style guide

**File:** `/docs/components/modal.md`

---

## 🔄 Remaining Components (6 Priority Components)

### Input Component

**Needs:**
- [ ] "When NOT to Use" section (Select for >5 options, Textarea for long text)
- [ ] Label ALWAYS required emphasis (link to universal pattern)
- [ ] "Mark the minority" pattern (required vs optional)
- [ ] Error replaces help text pattern
- [ ] Placeholder limitations (disappears, fails with autofill)
- [ ] Progressive success validation

**File:** `/docs/components/input.md`

---

### Checkbox Component

**Needs:**
- [ ] "When NOT to Use" section (Max 10 checkboxes, Switch vs Checkbox decision)
- [ ] `name` attribute REQUIRED for groups
- [ ] Indeterminate state limitations
- [ ] Link to universal label requirements
- [ ] Link to semantic HTML requirements (fieldset/legend)

**File:** `/docs/components/checkbox.md`

---

### Radio Component

**Needs:**
- [ ] "When NOT to Use" section (Select for >7 options, Checkbox for multi-select)
- [ ] Default selection strategy (when to pre-select)
- [ ] No nesting in radio groups
- [ ] Arrow keys don't loop at boundaries
- [ ] Link to universal label requirements

**File:** `/docs/components/radio.md`

---

### Alert Component

**Needs:**
- [ ] "When NOT to Use" section (Toast, inline validation, banner, modal alternatives)
- [ ] Three announcement patterns (announce-only, focus, interrupt)
- [ ] Container must exist before framework mounts
- [ ] Semantic elements lose meaning in aria-live regions

**File:** `/docs/components/alert.md`

---

### Table Component

**Needs:**
- [ ] Emphasize CRITICAL requirements: `<th scope>` and `<caption>` REQUIRED
- [ ] "When NOT to Use" section (Card grid, List alternatives)
- [ ] No headings in `<th>` elements
- [ ] Text vs number alignment
- [ ] En dash (–) for missing values
- [ ] Link to semantic HTML requirements

**File:** `/docs/components/table.md`

---

### Tooltip Component

**Needs:**
- [ ] "When NOT to Use" section (Popover, inline text, help text alternatives)
- [ ] Different delays for different elements (help icons 0ms, buttons 500ms)
- [ ] Warmup/cooldown pattern
- [ ] Punctuation rules (periods for sentences only)
- [ ] Never for interactive elements or critical information
- [ ] Excessive tooltips = poor design signal

**File:** `/docs/components/tooltip.md`

---

## 📊 Progress Summary

### Overall Completion

**Foundation Documents:** 3/3 (100%) ✓
- Universal label requirements ✓
- Content style guide ✓
- Semantic HTML requirements ✓

**Component Enhancements:** 4/10 (40%)
- Switch ✓
- Button ✓
- Card ✓
- Modal ✓
- Input ⏳
- Checkbox ⏳
- Radio ⏳
- Alert ⏳
- Table ⏳
- Tooltip ⏳

### Estimated Remaining Effort

**Per component:** 30-45 minutes
**6 components remaining:** ~3-4 hours total

**Quick wins (can do immediately):**
- Table (just add emphasis to existing semantic requirements)
- Input (straightforward patterns)
- Tooltip (mostly content guidelines)

**More complex:**
- Checkbox/Radio (multiple interconnected patterns)
- Alert (technical implementation details)

---

## 📝 Notes

### What Was Skipped (Per User Request)

- ❌ WAI-ARIA Pattern sections (accessibility not priority now)
- ❌ Screen Reader Behavior sections (accessibility not priority now)

### What Was Kept

- ✓ "When NOT to Use" sections (critical for component selection)
- ✓ Content guidelines (sentence case, button labels, etc.)
- ✓ Semantic HTML requirements (critical for proper structure)
- ✓ Technical patterns (loading states, focus strategies, etc.)
- ✓ Security guidance (URL sanitization)

### Key Patterns Implemented

1. **Universal patterns as separate documents** - Can be linked from multiple components
2. **"When NOT to Use" decision guidance** - Helps developers choose right component
3. **Semantic HTML corrections** - Fixed incorrect `<article>` guidance for cards
4. **Content standards** - Consistent voice, capitalization, punctuation
5. **Technical limitations** - Documented what's not possible (indeterminate switch, etc.)

---

## 🎯 Next Steps

### To Complete Remaining Components

1. **Input** - Add label emphasis, mark the minority, validation patterns
2. **Table** - Emphasize CRITICAL `<th scope>` requirement
3. **Tooltip** - Add usage guidance and "when NOT to use"
4. **Checkbox** - Add decision tree and limits
5. **Radio** - Add selection strategy and limits
6. **Alert** - Add announcement patterns

### After Completion

- Review all changes with design team
- Update component comparison tracking
- Create implementation guide for developers
- Consider adding visual diagrams for decision trees

---

**Status:** Foundation complete, 40% of component enhancements complete. Remaining work is straightforward pattern additions.
