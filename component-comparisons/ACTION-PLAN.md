# OneDS Documentation Enhancement Action Plan

**Based on:** Component Comparison Project (135+ patterns across 17 components)
**Date Created:** November 5, 2025
**Context:** OneDS is built on Ant Design - technical implementations exist, focus is on documentation enhancement

---

## Executive Summary

This action plan outlines a **3-phase approach** to elevate OneDS documentation to industry-leading status. Most tasks focus on **documentation clarity and emphasis** rather than technical implementation, since OneDS inherits robust patterns from Ant Design.

**Total Estimated Effort:** 8-12 weeks
**Primary Focus:** Making existing accessibility features visible, providing usage guidance, establishing content standards

---

## Phase 1: Critical Universal Documentation (Weeks 1-3)

**Goal:** Address WCAG compliance documentation gaps and create universal guidelines that apply to all components.

**Effort:** 3 weeks
**Priority:** CRITICAL - addresses accessibility compliance issues

### Task 1.1: Universal Label Requirements Document
**Effort:** 3 days
**Owner:** Content/Accessibility Lead

**Deliverables:**
- `/docs/patterns/universal-label-requirements.md`

**Content to include:**
- [ ] WCAG requirement: ALL interactive components MUST have accessible labels
- [ ] Visual labels strongly preferred over aria-label
- [ ] When visual labels aren't possible: screen-reader-only patterns
- [ ] Exceptions require accessibility expert review
- [ ] Level A WCAG failure without proper labels
- [ ] Code examples for each pattern:
  - Visible labels (preferred)
  - `aria-label` for icon-only buttons
  - `aria-labelledby` for complex associations
  - Visually hidden labels (.sr-only pattern)

**Link from components:** Button, Input, Checkbox, Radio, Switch, Select, all form controls

---

### Task 1.2: Add WAI-ARIA Pattern References
**Effort:** 5 days
**Owner:** Technical Writer

**Deliverables:**
- Add "WAI-ARIA Pattern" section to 12+ components
- Link to https://www.w3.org/WAI/ARIA/apg/

**Components requiring updates:**
- [ ] **Modal** → [Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [ ] **Alert** → [Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [ ] **Checkbox** → [Checkbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [ ] **Radio** → [Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [ ] **Tabs** → [Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [ ] **Breadcrumbs** → [Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [ ] **Tooltip** → [Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [ ] **Select** → [Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [ ] **Table** → [Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [ ] **Switch** → [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [ ] **Drawer** → [Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [ ] **Pagination** → [Pagination Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)

**Section template:**
```markdown
## WAI-ARIA Pattern

This component implements the [Component Name Pattern](link) from the WAI-ARIA Authoring Practices Guide (APG).

**Key ARIA attributes used:**
- `role="[role]"` - [explanation]
- `aria-[attribute]` - [explanation]

**Reference:** [Official APG Pattern Link]
```

---

### Task 1.3: Create Content Style Guide
**Effort:** 4 days
**Owner:** Content Lead

**Deliverables:**
- `/docs/content/style-guide.md`

**Content to include:**
- [ ] **Capitalization Standards**
  - Sentence case for all labels, titles, buttons (not Title Case)
  - Examples: ✅ "Email address" ❌ "Email Address"

- [ ] **Button Label Formula**
  - Use "{verb} + {noun}" pattern
  - Be specific: "Delete patent" not "Delete"
  - Examples: "Export data", "Save changes", "Cancel request"
  - Use ellipsis (…) for actions opening dialogs: "Save as…"

- [ ] **Error Message Format**
  - Write solutions, not problems
  - ✅ "Enter your email address in the format name@example.com"
  - ❌ "Invalid field"
  - Always explain how to fix the issue

- [ ] **Title Guidelines**
  - Confirmation dialogs: Questions ending with ?
  - Info/error dialogs: Clear outcome statements
  - State what will happen, not "Are you sure?"
  - Example: "Delete this patent application?" not "Are you sure?"

- [ ] **Label Guidelines**
  - Keep under 60 characters
  - No colons at end
  - For switches: describe ON state ("Enable notifications" not "Notifications")

- [ ] **Help Text Guidelines**
  - Full sentences with periods
  - Coordinate with error text (both need essential info)

- [ ] **Punctuation Rules**
  - Tooltips: periods only for complete sentences
  - Fragments: no periods ("Delete patent" not "Delete patent.")
  - Labels: no colons
  - Buttons: no periods

---

### Task 1.4: Semantic HTML Requirements Document
**Effort:** 2 days
**Owner:** Technical Writer

**Deliverables:**
- `/docs/patterns/semantic-html-requirements.md`

**Content to include:**
- [ ] **Table Requirements (CRITICAL)**
  - `<th scope="col">` or `<th scope="row">` REQUIRED on every header
  - `<caption>` element REQUIRED for table title
  - Never use `<h1>-<h6>` inside `<th>` elements
  - Code examples

- [ ] **Form Group Requirements**
  - `<fieldset>` + `<legend>` for checkbox/radio groups
  - `name` attribute REQUIRED for checkbox/radio groups
  - Code examples

- [ ] **Card Semantics**
  - Use `<div>` by default (not `<article>`)
  - Only use `<article>` when truly independent content
  - Heading hierarchy must respect page context
  - Wrap card collections in `<ul>` for accessibility

- [ ] **Button vs Link**
  - Button: actions, state changes, form submissions
  - Link: navigation to different pages/sections
  - URL sanitization for link buttons (security)

---

## Phase 2: Component-Specific Enhancements (Weeks 4-7)

**Goal:** Enhance individual component documentation with screen reader behavior, usage guidance, and technical details.

**Effort:** 4 weeks
**Priority:** HIGH

### Task 2.1: Add Screen Reader Behavior Sections
**Effort:** 8 days
**Owner:** Accessibility Specialist

**Components requiring updates (priority order):**
1. [ ] **Checkbox** (2 hours)
   - Legend announced before EACH checkbox
   - Keep legend concise (<10 words)
   - Name attribute creates group relationship

2. [ ] **Radio** (2 hours)
   - Legend announced before EACH option
   - Position announced: "1 of 3"
   - Selected state announced automatically

3. [ ] **Alert** (2 hours)
   - Three announcement patterns explained
   - Semantic elements lose meaning in aria-live regions
   - Read as plain text, not with semantic structure

4. [ ] **Table** (3 hours)
   - How `scope` attribute affects announcements
   - How headers are associated with data cells
   - Caption announcement timing

5. [ ] **Modal** (2 hours)
   - Initial focus announcement
   - Focus trap behavior
   - Return focus on close

6. [ ] **Switch** (1 hour)
   - ON/OFF state announcement
   - Label + state pattern
   - No indeterminate announcement possible

7. [ ] **Input** (2 hours)
   - Label announcement
   - Help text timing (aria-describedby)
   - Error announcement (aria-invalid + aria-errormessage)
   - Validation live region pattern

8. [ ] **Select** (2 hours)
   - Selected option announcement
   - Expanded/collapsed state
   - Option count announcement

**Section template:**
```markdown
## Screen Reader Behavior

### How This Component is Announced

[Describe the announcement pattern]

**Example announcement:**
> "Label text. Control type. State. Position (if applicable)."

### Important Considerations

- [Key behavior 1]
- [Key behavior 2]
- [Platform differences if any]

### Testing Recommendations

Test with at least two screen readers:
- NVDA (Windows) + Firefox
- JAWS (Windows) + Chrome
- VoiceOver (macOS) + Safari
```

---

### Task 2.2: Expand "When NOT to Use" Sections
**Effort:** 6 days
**Owner:** UX Designer + Technical Writer

**Components requiring updates:**
1. [ ] **Button** (3 hours)
   - Link vs button decision tree
   - Button group alternatives
   - Maximum actions per context

2. [ ] **Input** (2 hours)
   - Select for >5 known options
   - Textarea for long text
   - Number input vs text input with validation

3. [ ] **Checkbox** (2 hours)
   - Maximum 10 checkboxes → use Select instead
   - Switch vs checkbox decision tree
   - Radio vs checkbox (single selection)

4. [ ] **Radio** (2 hours)
   - Select/dropdown for >7 options
   - When to use tabs instead
   - Checkbox for multi-select

5. [ ] **Switch** (3 hours)
   - NEVER in forms with submit button → use checkbox
   - Toggle button alternatives
   - When immediate action isn't appropriate

6. [ ] **Card** (2 hours)
   - Use list for simple items
   - Use table for structured data
   - Use single metric display for dashboards
   - Maximum 1 primary action per card

7. [ ] **Modal** (3 hours)
   - Inline expansion alternatives
   - Drawer for side context
   - New page for complex workflows
   - Maximum 2-3 action buttons

8. [ ] **Alert** (2 hours)
   - Toast for transient messages
   - Inline validation for forms
   - Banner for persistent notices
   - Modal for critical interruptions

9. [ ] **Table** (3 hours)
   - Card grid for visual content
   - List for simple data
   - Maximum columns before horizontal scroll
   - Mobile alternatives

10. [ ] **Tooltip** (2 hours)
    - Popover for interactive content
    - Inline text for critical information
    - Help text for persistent guidance
    - Warning against tooltip-heavy interfaces

**Section template:**
```markdown
## When NOT to Use

### Use [Alternative] Instead If:

- [Condition 1] → **Use [Component]** instead
- [Condition 2] → **Use [Component]** instead

### Maximum Limits

- [Limit guideline with reasoning]

### Decision Guide

```
[Decision tree or flowchart in markdown]
```

### Common Mistakes

- ❌ [Anti-pattern]
- ✅ [Correct pattern]
```

---

### Task 2.3: Technical Implementation Guides
**Effort:** 5 days
**Owner:** Senior Developer + Technical Writer

**Deliverables:**

1. [ ] **Aria-Live Region Setup Guide** (1 day)
   - `/docs/patterns/aria-live-regions.md`
   - Container must exist in initial HTML before framework mounts
   - Three politeness levels (off, polite, assertive)
   - When to use each
   - Code examples for React/Vue/etc.

2. [ ] **Focus Management Patterns** (1.5 days)
   - `/docs/patterns/focus-management.md`
   - Focus trap implementation
   - Return focus pattern
   - Initial focus strategies
   - Skip links pattern
   - Code examples

3. [ ] **Roving Tabindex Pattern** (1 day)
   - `/docs/patterns/roving-tabindex.md`
   - When required (radio groups, tabs, complex widgets)
   - Implementation pattern
   - Keyboard navigation (Arrow keys, Home, End)
   - Code examples

4. [ ] **Form Control Groups** (1 day)
   - `/docs/patterns/form-control-groups.md`
   - Name attribute requirement
   - Fieldset + legend pattern
   - Why it matters for screen readers
   - Code examples

5. [ ] **Validation Patterns** (0.5 day)
   - `/docs/patterns/form-validation.md`
   - Progressive success pattern (show success immediately)
   - Error on blur pattern
   - Error message coordination with help text
   - Code examples

---

### Task 2.4: Accessibility API Limitations Documentation
**Effort:** 3 days
**Owner:** Accessibility Specialist

**Deliverables:**
- `/docs/accessibility/platform-limitations.md`

**Content to include:**
- [ ] **Indeterminate Switch Not Possible**
  - Accessibility APIs don't support it
  - Use checkbox for tri-state instead
  - Why this limitation exists

- [ ] **Semantic Loss in Live Regions**
  - Elements in aria-live regions read as plain text
  - Headings, lists, buttons lose semantic meaning
  - Workarounds: manual announcement text

- [ ] **Legend Repetition**
  - Cannot prevent legend announcement before each checkbox/radio
  - Design pattern: keep legends concise
  - Why this behavior exists

- [ ] **Mixed Browser/Screen Reader Support**
  - Feature support matrix
  - When to provide fallbacks
  - Testing recommendations

- [ ] **Focus Management Timing**
  - Browser inconsistencies
  - Delay requirements for dynamic content
  - Testing strategies

---

## Phase 3: Advanced Guidance and Tools (Weeks 8-12)

**Goal:** Create advanced decision-making tools, testing checklists, and cross-component patterns.

**Effort:** 4-5 weeks
**Priority:** MEDIUM (nice to have, enhances usability)

### Task 3.1: Component Decision Guide System
**Effort:** 2 weeks
**Owner:** UX Designer + Developer

**Deliverables:**

1. [ ] **Interactive Component Chooser** (1 week)
   - `/docs/tools/component-chooser/` (interactive tool)
   - Answer questions → get component recommendation
   - Common scenarios covered

2. [ ] **Decision Trees Document** (3 days)
   - `/docs/guides/component-decision-trees.md`
   - Visual flowcharts for common decisions
   - Form controls (input vs select vs checkbox vs radio vs switch)
   - Feedback (alert vs toast vs banner vs modal)
   - Navigation (tabs vs breadcrumbs vs pagination)
   - Containers (card vs table vs list)

3. [ ] **"Should I Use X or Y?" FAQ** (2 days)
   - `/docs/guides/component-comparison-faq.md`
   - Button vs Link
   - Checkbox vs Radio vs Switch
   - Modal vs Drawer vs Popover
   - Alert vs Toast
   - Card vs Table
   - Select vs Radio Group
   - Tooltip vs Popover

---

### Task 3.2: Accessibility Testing Checklists
**Effort:** 1 week
**Owner:** Accessibility Specialist

**Deliverables:**

1. [ ] **Per-Component Testing Checklists** (3 days)
   - Add "Testing Checklist" section to each component
   - Keyboard navigation tests
   - Screen reader tests
   - WCAG compliance checks

2. [ ] **Universal Testing Guide** (2 days)
   - `/docs/accessibility/testing-guide.md`
   - How to test with screen readers
   - Keyboard navigation testing
   - Color contrast testing
   - Tools and resources

3. [ ] **Automated Testing Recommendations** (2 days)
   - `/docs/accessibility/automated-testing.md`
   - Tools: axe-core, WAVE, Lighthouse
   - What can/cannot be automated
   - Integration examples

**Checklist template:**
```markdown
## Testing Checklist

### Keyboard Navigation
- [ ] Tab reaches all interactive elements
- [ ] Enter/Space activates controls
- [ ] Escape dismisses overlays
- [ ] Arrow keys navigate groups (if applicable)
- [ ] Focus visible indicator shows current position

### Screen Reader Testing
- [ ] Component announced with correct role
- [ ] Label properly associated
- [ ] State changes announced
- [ ] Error messages announced
- [ ] Help text connected with aria-describedby

### WCAG Compliance
- [ ] 1.3.1 Info and Relationships (Level A)
- [ ] 2.1.1 Keyboard (Level A)
- [ ] 4.1.2 Name, Role, Value (Level A)
- [ ] [Component-specific criteria]

### Visual Testing
- [ ] Focus indicator meets 3:1 contrast
- [ ] Text meets 4.5:1 contrast (or 3:1 for large text)
- [ ] Component usable at 200% zoom
- [ ] Component usable in dark mode
```

---

### Task 3.3: Cross-Component Pattern Library
**Effort:** 1 week
**Owner:** Technical Writer + Designer

**Deliverables:**

1. [ ] **Loading States Pattern** (1 day)
   - `/docs/patterns/loading-states.md`
   - 1-second delay for operations <5 seconds
   - Skeleton loaders vs spinners
   - Button loading states
   - Component-level loading
   - Page-level loading

2. [ ] **Error Handling Pattern** (1 day)
   - `/docs/patterns/error-handling.md`
   - Inline validation errors
   - Form-level errors
   - Page-level errors (alert/banner)
   - API error handling
   - Error message writing guide

3. [ ] **Empty States Pattern** (1 day)
   - `/docs/patterns/empty-states.md`
   - First-use empty states
   - No results empty states
   - Error empty states
   - Content guidelines

4. [ ] **Progressive Disclosure Pattern** (1 day)
   - `/docs/patterns/progressive-disclosure.md`
   - Accordion pattern
   - Show more/less
   - Expandable sections
   - When to use

5. [ ] **Responsive Patterns** (1 day)
   - `/docs/patterns/responsive-design.md`
   - Mobile alternatives for components
   - Touch target requirements (44×44px minimum)
   - Tablet considerations
   - Desktop optimizations

---

### Task 3.4: Enhanced Code Examples
**Effort:** 1 week
**Owner:** Developer + Technical Writer

**Goal:** Add realistic, copy-paste ready code examples to top 10 components

**Components:**
1. [ ] Button (with all variants, loading states, accessibility)
2. [ ] Input (with validation, help text, error states)
3. [ ] Modal (with focus management, multiple dismissal)
4. [ ] Table (with proper ARIA, sorting, selection)
5. [ ] Checkbox (groups with fieldset/legend/name)
6. [ ] Radio (with roving tabindex, ARIA)
7. [ ] Select (with proper labeling, error handling)
8. [ ] Alert (with aria-live region setup)
9. [ ] Card (with proper heading hierarchy, collection wrapper)
10. [ ] Switch (with immediate action pattern)

**Example structure:**
```markdown
## Code Examples

### Basic Example
[Simple, minimal example]

### With Validation
[Example with error handling]

### Accessible Implementation
[Full ARIA attributes, keyboard support]

### Common Patterns
[Real-world usage patterns]
```

---

## Phase 4: Ongoing Maintenance (Continuous)

**Goal:** Keep documentation up-to-date and gather feedback

### Task 4.1: Documentation Review Process
- [ ] Establish quarterly documentation review
- [ ] Gather feedback from developers
- [ ] Track documentation issues
- [ ] Update based on common questions

### Task 4.2: Accessibility Audits
- [ ] Bi-annual accessibility audit of all components
- [ ] Update documentation based on findings
- [ ] WCAG compliance verification

### Task 4.3: Keep Updated with Standards
- [ ] Monitor WAI-ARIA APG updates
- [ ] Track WCAG guideline changes
- [ ] Update component docs accordingly

---

## Success Metrics

### Quantitative Metrics
- [ ] 100% of interactive components have label requirement documentation
- [ ] 12+ components link to WAI-ARIA APG patterns
- [ ] All form controls have "When NOT to use" sections
- [ ] 17+ components have screen reader behavior documentation
- [ ] 10+ components have testing checklists

### Qualitative Metrics
- [ ] Developer feedback: easier to implement accessible components
- [ ] Reduced accessibility-related support questions
- [ ] Faster onboarding for new team members
- [ ] Positive feedback from accessibility audits

### Compliance Metrics
- [ ] Zero critical WCAG Level A failures in documentation
- [ ] All required ARIA patterns documented
- [ ] All semantic HTML requirements documented

---

## Resource Requirements

### Roles Needed
- **Content/Technical Writer** (full-time, 8 weeks)
- **Accessibility Specialist** (part-time, 4 weeks)
- **UX Designer** (part-time, 2 weeks)
- **Senior Developer** (part-time, 2 weeks)

### Tools Needed
- Screen readers for testing (NVDA, JAWS, VoiceOver)
- Accessibility testing tools (axe DevTools, WAVE)
- Diagramming tool for decision trees (Mermaid, Figma)

---

## Risk Mitigation

### Risk: Scope Creep
**Mitigation:** Stick to documentation enhancement only. No technical implementation changes unless absolutely critical.

### Risk: Resource Availability
**Mitigation:** Phase 3 is "nice to have" - can be deferred if resources constrained.

### Risk: Outdated Information
**Mitigation:** Link to external authoritative sources (WAI-ARIA APG) rather than duplicating content.

### Risk: Inconsistent Voice/Tone
**Mitigation:** Complete Task 1.3 (Content Style Guide) first, use as reference for all subsequent writing.

---

## Quick Wins (Can Start Immediately)

These tasks can begin before formal kickoff:

1. **Add WAI-ARIA links** (2-3 days)
   - Low effort, high value
   - Doesn't require content creation
   - Just add reference links

2. **Create universal label doc** (2-3 days)
   - Addresses critical WCAG issue
   - Can be linked immediately
   - Prevents common mistakes

3. **Fix table `<th scope>` documentation** (1 day)
   - Critical accessibility requirement
   - Quick fix
   - High impact

4. **Add 3-5 "When NOT to Use" sections** (2-3 days)
   - Pick most confusing components (Switch, Card, Button)
   - Immediate developer value
   - Easy to write

---

## Dependencies

### Sequential Dependencies
1. Content Style Guide (1.3) → All writing tasks
2. Universal Label Doc (1.1) → Component-specific label guidance
3. Semantic HTML Doc (1.4) → Component-specific technical requirements

### Parallel Work Streams
- **Stream A:** Universal patterns (Phase 1)
- **Stream B:** Component enhancements (Phase 2) - can start after 1.3 complete
- **Stream C:** Advanced tools (Phase 3) - can start anytime

---

## Implementation Timeline (Gantt)

```
Week 1-2:   [1.1 Labels] [1.3 Style Guide] [1.4 Semantic HTML]
Week 2-3:   [1.2 WAI-ARIA Links across 12 components]
Week 4-5:   [2.1 Screen Reader Behavior - 8 components]
Week 5-7:   [2.2 When NOT to Use - 10 components]
Week 6-7:   [2.3 Technical Guides] [2.4 API Limitations]
Week 8-9:   [3.1 Decision Guide System]
Week 10-11: [3.2 Testing Checklists]
Week 11-12: [3.3 Pattern Library] [3.4 Code Examples]
```

---

## Next Steps (Immediate)

1. **Review this plan** with design system team
2. **Assign owners** to Phase 1 tasks
3. **Set up documentation repository** structure (if not exists)
4. **Schedule kickoff meeting** with all stakeholders
5. **Begin Quick Wins** (WAI-ARIA links, universal label doc)

---

## Appendix: File Structure

Suggested documentation structure:

```
/docs/
├── components/
│   ├── button.md (existing - enhance)
│   ├── input.md (existing - enhance)
│   └── ... (all components)
├── patterns/
│   ├── universal-label-requirements.md (NEW)
│   ├── semantic-html-requirements.md (NEW)
│   ├── aria-live-regions.md (NEW)
│   ├── focus-management.md (NEW)
│   ├── roving-tabindex.md (NEW)
│   ├── form-control-groups.md (NEW)
│   ├── form-validation.md (NEW)
│   ├── loading-states.md (NEW)
│   ├── error-handling.md (NEW)
│   ├── empty-states.md (NEW)
│   ├── progressive-disclosure.md (NEW)
│   └── responsive-design.md (NEW)
├── content/
│   └── style-guide.md (NEW)
├── accessibility/
│   ├── platform-limitations.md (NEW)
│   ├── testing-guide.md (NEW)
│   └── automated-testing.md (NEW)
├── guides/
│   ├── component-decision-trees.md (NEW)
│   └── component-comparison-faq.md (NEW)
└── tools/
    └── component-chooser/ (NEW - interactive)
```

---

**Document Status:** Draft for Review
**Last Updated:** November 5, 2025
**Next Review:** After stakeholder feedback
