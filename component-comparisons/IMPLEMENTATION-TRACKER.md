# OneDS Documentation Enhancement - Implementation Tracker

**Start Date:** TBD
**Target Completion:** TBD (8-12 weeks from start)
**Status:** Not Started

---

## Quick Reference

**Phase Status:**
- ⏸️ Phase 1: Not Started (Critical - Weeks 1-3)
- ⏸️ Phase 2: Not Started (High Priority - Weeks 4-7)
- ⏸️ Phase 3: Not Started (Medium Priority - Weeks 8-12)

**Overall Progress:** 0/85 tasks completed (0%)

---

## Phase 1: Critical Universal Documentation (Weeks 1-3)

**Status:** ⏸️ Not Started | **Progress:** 0/4 major tasks | **Target:** Week 3 complete

### 1.1 Universal Label Requirements Document ⏸️
**Owner:** Content/Accessibility Lead | **Effort:** 3 days | **Status:** Not Started

**Deliverable:** `/docs/patterns/universal-label-requirements.md`

- [ ] Draft document content
- [ ] Include WCAG Level A requirement explanation
- [ ] Add code example: visible labels (preferred pattern)
- [ ] Add code example: aria-label for icon-only buttons
- [ ] Add code example: aria-labelledby for complex associations
- [ ] Add code example: visually hidden labels (.sr-only)
- [ ] Review with accessibility specialist
- [ ] Link from Button component
- [ ] Link from Input component
- [ ] Link from Checkbox component
- [ ] Link from Radio component
- [ ] Link from Switch component
- [ ] Link from Select component
- [ ] Link from all other form controls

**Started:** ___ | **Completed:** ___

---

### 1.2 Add WAI-ARIA Pattern References ⏸️
**Owner:** Technical Writer | **Effort:** 5 days | **Status:** Not Started

**Progress:** 0/12 components

- [ ] **Modal** → Add Dialog Pattern section with link
- [ ] **Alert** → Add Alert Pattern section with link
- [ ] **Checkbox** → Add Checkbox Pattern section with link
- [ ] **Radio** → Add Radio Group Pattern section with link
- [ ] **Tabs** → Add Tabs Pattern section with link
- [ ] **Breadcrumbs** → Add Breadcrumb Pattern section with link
- [ ] **Tooltip** → Add Tooltip Pattern section with link
- [ ] **Select** → Add Combobox Pattern section with link
- [ ] **Table** → Add Table Pattern section with link
- [ ] **Switch** → Add Switch Pattern section with link
- [ ] **Drawer** → Add Dialog Pattern section with link
- [ ] **Pagination** → Add Pagination Pattern section with link

**Template to use:**
```markdown
## WAI-ARIA Pattern

This component implements the [Pattern Name](link) from the WAI-ARIA Authoring Practices Guide (APG).

**Key ARIA attributes used:**
- `role="..."` - [explanation]
- `aria-...` - [explanation]

**Reference:** [Official APG Pattern Link]
```

**Started:** ___ | **Completed:** ___

---

### 1.3 Create Content Style Guide ⏸️
**Owner:** Content Lead | **Effort:** 4 days | **Status:** Not Started

**Deliverable:** `/docs/content/style-guide.md`

- [ ] Draft document structure
- [ ] Section: Capitalization Standards (sentence case)
- [ ] Section: Button Label Formula ({verb} + {noun})
- [ ] Section: Error Message Format (solutions not problems)
- [ ] Section: Title Guidelines (outcomes not questions)
- [ ] Section: Label Guidelines (60 char max, no colons)
- [ ] Section: Help Text Guidelines (full sentences)
- [ ] Section: Punctuation Rules (tooltips, fragments, labels)
- [ ] Add 10+ examples for each rule (✅ good, ❌ bad)
- [ ] Review with design team
- [ ] Review with content team
- [ ] Finalize and publish
- [ ] Share with all component documentation writers

**Started:** ___ | **Completed:** ___

---

### 1.4 Semantic HTML Requirements Document ⏸️
**Owner:** Technical Writer | **Effort:** 2 days | **Status:** Not Started

**Deliverable:** `/docs/patterns/semantic-html-requirements.md`

- [ ] Draft document structure
- [ ] Section: Table Requirements (`<th scope>`, `<caption>`)
- [ ] Section: Form Group Requirements (fieldset, legend, name attribute)
- [ ] Section: Card Semantics (div vs article, heading hierarchy)
- [ ] Section: Button vs Link (when to use each)
- [ ] Add code examples for each pattern
- [ ] Add anti-patterns (what NOT to do)
- [ ] Review with senior developer
- [ ] Link from Table component
- [ ] Link from Checkbox component
- [ ] Link from Radio component
- [ ] Link from Card component
- [ ] Link from Button component

**Started:** ___ | **Completed:** ___

---

## Phase 2: Component-Specific Enhancements (Weeks 4-7)

**Status:** ⏸️ Not Started | **Progress:** 0/4 major tasks | **Target:** Week 7 complete

### 2.1 Add Screen Reader Behavior Sections ⏸️
**Owner:** Accessibility Specialist | **Effort:** 8 days | **Status:** Not Started

**Progress:** 0/8 components

- [ ] **Checkbox** - Legend announced before EACH (2 hours)
- [ ] **Radio** - Legend + position announcement (2 hours)
- [ ] **Alert** - Three announcement patterns (2 hours)
- [ ] **Table** - Scope attribute announcements (3 hours)
- [ ] **Modal** - Focus and trap behavior (2 hours)
- [ ] **Switch** - ON/OFF state announcement (1 hour)
- [ ] **Input** - Label, help text, error pattern (2 hours)
- [ ] **Select** - Selected option announcement (2 hours)

**Template used:** ✅ Available in ACTION-PLAN.md

**Started:** ___ | **Completed:** ___

---

### 2.2 Expand "When NOT to Use" Sections ⏸️
**Owner:** UX Designer + Technical Writer | **Effort:** 6 days | **Status:** Not Started

**Progress:** 0/10 components

- [ ] **Button** - Link vs button decision tree (3 hours)
- [ ] **Input** - Select/textarea alternatives (2 hours)
- [ ] **Checkbox** - Max 10, switch vs checkbox (2 hours)
- [ ] **Radio** - Select for >7 options (2 hours)
- [ ] **Switch** - Never in forms with submit (3 hours)
- [ ] **Card** - List/table alternatives (2 hours)
- [ ] **Modal** - Inline/drawer alternatives (3 hours)
- [ ] **Alert** - Toast/banner alternatives (2 hours)
- [ ] **Table** - Card/list alternatives (3 hours)
- [ ] **Tooltip** - Popover/inline text alternatives (2 hours)

**Started:** ___ | **Completed:** ___

---

### 2.3 Technical Implementation Guides ⏸️
**Owner:** Senior Developer + Technical Writer | **Effort:** 5 days | **Status:** Not Started

**Progress:** 0/5 guides

- [ ] **Aria-Live Region Setup Guide** (1 day)
  - `/docs/patterns/aria-live-regions.md`
  - Before framework mount requirement
  - Three politeness levels
  - Code examples

- [ ] **Focus Management Patterns** (1.5 days)
  - `/docs/patterns/focus-management.md`
  - Focus trap implementation
  - Return focus pattern
  - Initial focus strategies

- [ ] **Roving Tabindex Pattern** (1 day)
  - `/docs/patterns/roving-tabindex.md`
  - Radio groups, tabs, complex widgets
  - Keyboard navigation
  - Code examples

- [ ] **Form Control Groups** (1 day)
  - `/docs/patterns/form-control-groups.md`
  - Name attribute requirement
  - Fieldset + legend pattern
  - Code examples

- [ ] **Validation Patterns** (0.5 day)
  - `/docs/patterns/form-validation.md`
  - Progressive success pattern
  - Error on blur
  - Error/help text coordination

**Started:** ___ | **Completed:** ___

---

### 2.4 Accessibility API Limitations Documentation ⏸️
**Owner:** Accessibility Specialist | **Effort:** 3 days | **Status:** Not Started

**Deliverable:** `/docs/accessibility/platform-limitations.md`

- [ ] Draft document structure
- [ ] Section: Indeterminate Switch Not Possible
- [ ] Section: Semantic Loss in Live Regions
- [ ] Section: Legend Repetition in Groups
- [ ] Section: Mixed Browser/Screen Reader Support
- [ ] Section: Focus Management Timing Issues
- [ ] Add workarounds for each limitation
- [ ] Add testing recommendations
- [ ] Review with accessibility team
- [ ] Link from relevant component docs

**Started:** ___ | **Completed:** ___

---

## Phase 3: Advanced Guidance and Tools (Weeks 8-12)

**Status:** ⏸️ Not Started | **Progress:** 0/4 major tasks | **Target:** Week 12 complete

**Note:** This phase is "nice to have" and can be deferred if resources constrained.

### 3.1 Component Decision Guide System ⏸️
**Owner:** UX Designer + Developer | **Effort:** 2 weeks | **Status:** Not Started

**Progress:** 0/3 deliverables

- [ ] **Interactive Component Chooser** (1 week)
  - `/docs/tools/component-chooser/`
  - Question-based recommendation system
  - Common scenarios covered

- [ ] **Decision Trees Document** (3 days)
  - `/docs/guides/component-decision-trees.md`
  - Form controls flowchart
  - Feedback components flowchart
  - Navigation components flowchart
  - Container components flowchart

- [ ] **"Should I Use X or Y?" FAQ** (2 days)
  - `/docs/guides/component-comparison-faq.md`
  - Button vs Link
  - Checkbox vs Radio vs Switch
  - Modal vs Drawer vs Popover
  - Alert vs Toast
  - Card vs Table
  - Select vs Radio Group
  - Tooltip vs Popover

**Started:** ___ | **Completed:** ___

---

### 3.2 Accessibility Testing Checklists ⏸️
**Owner:** Accessibility Specialist | **Effort:** 1 week | **Status:** Not Started

**Progress:** 0/3 deliverables

- [ ] **Per-Component Testing Checklists** (3 days)
  - Add "Testing Checklist" section to Button
  - Add "Testing Checklist" section to Input
  - Add "Testing Checklist" section to Modal
  - Add "Testing Checklist" section to Table
  - Add "Testing Checklist" section to Checkbox
  - Add "Testing Checklist" section to Radio
  - Add "Testing Checklist" section to Select
  - Add "Testing Checklist" section to Alert
  - Add "Testing Checklist" section to Card
  - Add "Testing Checklist" section to Switch
  - Add checklists to remaining components (7+ more)

- [ ] **Universal Testing Guide** (2 days)
  - `/docs/accessibility/testing-guide.md`
  - How to test with screen readers
  - Keyboard navigation testing
  - Color contrast testing
  - Tools and resources

- [ ] **Automated Testing Recommendations** (2 days)
  - `/docs/accessibility/automated-testing.md`
  - Tool recommendations (axe-core, WAVE, Lighthouse)
  - What can/cannot be automated
  - Integration examples

**Started:** ___ | **Completed:** ___

---

### 3.3 Cross-Component Pattern Library ⏸️
**Owner:** Technical Writer + Designer | **Effort:** 1 week | **Status:** Not Started

**Progress:** 0/5 patterns

- [ ] **Loading States Pattern** (1 day)
  - `/docs/patterns/loading-states.md`

- [ ] **Error Handling Pattern** (1 day)
  - `/docs/patterns/error-handling.md`

- [ ] **Empty States Pattern** (1 day)
  - `/docs/patterns/empty-states.md`

- [ ] **Progressive Disclosure Pattern** (1 day)
  - `/docs/patterns/progressive-disclosure.md`

- [ ] **Responsive Patterns** (1 day)
  - `/docs/patterns/responsive-design.md`

**Started:** ___ | **Completed:** ___

---

### 3.4 Enhanced Code Examples ⏸️
**Owner:** Developer + Technical Writer | **Effort:** 1 week | **Status:** Not Started

**Progress:** 0/10 components

Add realistic, production-ready code examples with full accessibility to:

- [ ] Button (all variants, loading, accessibility)
- [ ] Input (validation, help text, errors)
- [ ] Modal (focus management, dismissal methods)
- [ ] Table (ARIA, sorting, selection)
- [ ] Checkbox (groups with proper markup)
- [ ] Radio (roving tabindex, ARIA)
- [ ] Select (labeling, error handling)
- [ ] Alert (aria-live region setup)
- [ ] Card (heading hierarchy, collection wrapper)
- [ ] Switch (immediate action pattern)

**Started:** ___ | **Completed:** ___

---

## Quick Wins (Can Start Immediately)

**Status:** ⏸️ Not Started | **Progress:** 0/4 quick wins

These can begin before formal project kickoff:

- [ ] **Add WAI-ARIA links to 12 components** (2-3 days)
  - Low effort, high value
  - Just reference links, no content creation
  - See task 1.2 for component list

- [ ] **Create universal label doc** (2-3 days)
  - Addresses critical WCAG issue
  - Can be linked immediately
  - See task 1.1 for details

- [ ] **Fix table `<th scope>` documentation** (1 day)
  - Add to Table component: REQUIRED attribute
  - Critical accessibility requirement
  - High impact

- [ ] **Add 3-5 "When NOT to Use" sections** (2-3 days)
  - Focus on: Switch, Card, Button
  - Immediate developer value
  - Easy to write

**Started:** ___ | **Completed:** ___

---

## Weekly Progress Tracking

### Week 1
**Target:** Task 1.1, 1.3, 1.4 complete
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 2
**Target:** Continue 1.3, 1.4; start 1.2
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 3
**Target:** Complete 1.2 (all 12 components)
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 4
**Target:** Start 2.1 (screen reader behavior)
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 5
**Target:** Continue 2.1, start 2.2
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 6
**Target:** Continue 2.2, start 2.3
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 7
**Target:** Complete 2.3, 2.4
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 8
**Target:** Start 3.1 (decision guides)
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 9
**Target:** Continue 3.1
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 10
**Target:** Complete 3.1, start 3.2
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 11
**Target:** Complete 3.2, start 3.3
**Actual:** ___
**Blockers:** ___
**Notes:** ___

### Week 12
**Target:** Complete 3.3, 3.4
**Actual:** ___
**Blockers:** ___
**Notes:** ___

---

## Resource Tracking

### Assigned Team Members

**Content/Technical Writer:**
- Name: ___
- Allocation: Full-time (8 weeks)
- Responsibilities: 1.3, 1.4, 2.2, 2.3 (partial), 3.3, 3.4 (partial)

**Accessibility Specialist:**
- Name: ___
- Allocation: Part-time (4 weeks)
- Responsibilities: 1.1, 2.1, 2.4, 3.2

**UX Designer:**
- Name: ___
- Allocation: Part-time (2 weeks)
- Responsibilities: 2.2 (partial), 3.1

**Senior Developer:**
- Name: ___
- Allocation: Part-time (2 weeks)
- Responsibilities: 2.3, 3.4 (partial)

**Technical Writer (WAI-ARIA):**
- Name: ___
- Allocation: 1 week
- Responsibilities: 1.2

---

## Blockers and Issues

### Current Blockers
_None yet - project not started_

### Resolved Issues
_Track resolved issues here for reference_

---

## Review Checkpoints

### Phase 1 Review (End of Week 3)
**Date:** ___
**Attendees:** ___
**Outcome:** ___
**Action Items:** ___

### Phase 2 Review (End of Week 7)
**Date:** ___
**Attendees:** ___
**Outcome:** ___
**Action Items:** ___

### Phase 3 Review (End of Week 12)
**Date:** ___
**Attendees:** ___
**Outcome:** ___
**Action Items:** ___

---

## Success Metrics Tracking

### Quantitative Metrics

- [ ] 100% of interactive components have label requirement documentation
  - **Current:** 0% | **Target:** 100%

- [ ] 12+ components link to WAI-ARIA APG patterns
  - **Current:** 0 | **Target:** 12+

- [ ] All form controls have "When NOT to use" sections
  - **Current:** 0/8 | **Target:** 8/8

- [ ] 17+ components have screen reader behavior documentation
  - **Current:** 0 | **Target:** 17+

- [ ] 10+ components have testing checklists
  - **Current:** 0 | **Target:** 10+

### Qualitative Feedback

**Developer Feedback:**
- Date: ___ | Feedback: ___
- Date: ___ | Feedback: ___

**Accessibility Audit Results:**
- Date: ___ | Result: ___

**Support Questions Trend:**
- Before: ___ questions/month
- After: ___ questions/month
- Improvement: ___%

---

## Sign-Off

### Phase 1 Completion
**Date:** ___
**Approved by:** ___
**Ready for Phase 2:** ☐ Yes ☐ No

### Phase 2 Completion
**Date:** ___
**Approved by:** ___
**Ready for Phase 3:** ☐ Yes ☐ No

### Phase 3 Completion
**Date:** ___
**Approved by:** ___
**Project Complete:** ☐ Yes ☐ No

### Final Project Sign-Off
**Date:** ___
**Approved by:** ___
**Documentation Enhancement Complete:** ☐ Yes ☐ No

---

**Last Updated:** November 5, 2025
**Next Update:** Weekly during active implementation
