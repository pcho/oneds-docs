# Component Comparison Summary

**Date:** November 5, 2025
**Components Analyzed:** 8 core components
**Systems Compared:** Adobe Spectrum, GitLab Design, Nord Health Design, Carbon Design System
**Purpose:** Identify accessibility tips, best practices, and patterns missing from OneDS

---

## Components Compared

1. **[Button](./button-comparison.md)** - 20 patterns identified
2. **[Input](./input-comparison.md)** - 16 patterns identified
3. **[Card](./card-comparison.md)** - 10 patterns identified
4. **[Modal](./modal-comparison.md)** - 13 patterns identified
5. **[Checkbox](./checkbox-comparison.md)** - 10 patterns identified
6. **[Radio](./radio-comparison.md)** - 9 patterns identified
7. **[Switch](./switch-comparison.md)** - 9 patterns identified
8. **[Alert](./alert-comparison.md)** - 9 patterns identified

**Total Patterns Identified:** 96 gaps/recommendations

---

## Cross-Component Critical Patterns

### 1. Label Requirements (Universal)

**Found in:** Button (icon-only), Input, Checkbox, Radio, Switch, Alert

**Consistent Message Across Systems:**
- EVERY component MUST have a label
- Fields/controls without labels fail WCAG
- Rare exceptions require accessibility expert review
- Screen-reader-only labels when visual label not possible

**Recommendation:**
Create universal label requirement documentation that applies to ALL form controls and interactive components.

---

### 2. WAI-ARIA Pattern References

**Found in:** Modal, Checkbox, Radio, Alert

**Missing from OneDS:**
- Links to official WAI-ARIA Authoring Practices
- References to standard patterns (Dialog, Alert, Radio Group, Checkbox)

**Recommendation:**
Add references to [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) for each component, linking to the specific pattern implementation guide.

---

### 3. Sentence Case Capitalization

**Found in:** Input, Button, Radio, Switch, Alert

**Consistent Standard:**
- Use sentence case (capitalize first word only)
- ✅ "Email address"
- ❌ "Email Address" (title case)
- Applies to labels, legends, titles, button text

**Recommendation:**
Create universal content style guide for component labels and text.

---

### 4. Screen Reader Behavior Clarifications

**Found in:** Checkbox (legend repeated), Radio (label before each option), Alert (semantic loss in live regions)

**Critical Understanding:**
- Screen readers announce fieldset legend BEFORE EACH checkbox/radio
- Elements in aria-live regions lose semantic meaning
- Not all screen readers support all ARIA features equally

**Recommendation:**
Add "Screen Reader Behavior" sections explaining how content is actually announced.

---

### 5. When NOT to Use Component

**Found in:** Button, Input, Card, Checkbox, Radio, Switch

**Pattern:**
- Explicit decision guides for choosing alternatives
- Maximum limits (e.g., 10 checkboxes max → use select)
- Semantic distinctions (switch vs checkbox)

**Recommendation:**
Expand "When NOT to Use" sections with specific alternatives and decision trees.

---

## Critical Accessibility Gaps by Category

### Form Controls

**Input Fields:**
- Label always required (WCAG failure without)
- Help text/error coordination (error replaces help text)
- Mark the minority (required vs optional)
- Validation timing (progressive success pattern)

**Checkboxes:**
- Name attribute required for groups
- Indeterminate state screen reader limitations
- 10 checkbox maximum guideline

**Radio Buttons:**
- Default selection strategy (when to pre-select)
- No nesting in radio groups
- Legend read before each option (keep concise)

**Switch:**
- Immediate action requirement (never in forms with submit)
- No indeterminate state possible
- Switch vs checkbox semantic distinction

---

### Interactive Patterns

**Buttons:**
- Loading state timing (1-second delay for <5s operations)
- Icon-only tooltip requirement with keyboard shortcuts
- Button alignment by context (forms left, modals right)
- URL sanitization for link buttons

**Modals:**
- Initial focus strategy (title vs first field)
- Multiple dismissal methods required (4 total)
- WAI-ARIA Dialog pattern reference

**Cards:**
- Not semantic landmarks (mostly just `<div>`)
- Heading hierarchy must respect page context
- Card collection pattern (`<ul>` wrapper)

**Alerts:**
- Three announcement patterns (announce/focus/interrupt)
- Container must exist before framework mounts
- Semantic elements lose meaning in live regions

---

## Content and Formatting Standards

### Universal Guidelines Found

1. **Capitalization:** Sentence case everywhere
2. **Button Labels:** "{verb} + {noun}" formula ("Delete patent" not "Delete")
3. **Error Messages:** Write solutions, not problems
4. **Titles:** State outcomes, not "Are you sure?"
5. **Labels:** Describe ON state for switches
6. **Help Text:** Full sentences with periods
7. **Punctuation:** No colons after labels, no periods for fragments

---

## Technical Implementation Patterns

### Accessibility API Limitations

**Discovered Limitations:**
1. **No indeterminate switch** - Accessibility APIs don't support it
2. **Semantic loss in live regions** - Elements read as plain text
3. **Legend repetition** - Announced before each radio/checkbox
4. **Mixed browser support** - Not all features work everywhere

### Required Technical Patterns

1. **Aria-live regions** - Must exist in initial HTML before framework mounts
2. **Roving tabindex** - Radio groups, complex widgets
3. **Focus management** - Return focus, trap in modals
4. **Name attribute** - Required for checkbox/radio groups

---

## Patterns OneDS Does Better

### Strengths Across Components

1. ✅ **Comprehensive size variants** - Most components have 3 sizes
2. ✅ **Animation specifications** - Exact timing for transitions
3. ✅ **ASCII art examples** - Visual examples for each component
4. ✅ **Touch target specifications** - Mobile considerations
5. ✅ **Reduced motion support** - Documented for animations
6. ✅ **Loading states** - Async operation patterns
7. ✅ **Helper text patterns** - Additional guidance built in

---

## Recommendations for OneDS

### Immediate Actions (Critical)

1. **Create Universal Label Requirement Doc**
   - Every component MUST have label
   - Accessibility expert review for exceptions
   - Screen-reader-only label patterns

2. **Add WAI-ARIA Pattern References**
   - Link to official patterns for each component
   - Helps developers implement correctly

3. **Expand "When NOT to Use" Sections**
   - Decision trees for component selection
   - Maximum limits and alternatives
   - Semantic distinctions

4. **Add Screen Reader Behavior Sections**
   - How content is actually announced
   - Platform/browser differences
   - Known limitations

### Medium Priority

5. **Create Content Style Guide**
   - Sentence case standard
   - Button label formula
   - Error message format
   - Title guidelines

6. **Technical Implementation Guides**
   - Aria-live region setup
   - Focus management patterns
   - Name attribute requirements
   - Roving tabindex implementation

7. **Accessibility Limitation Warnings**
   - What's not possible (indeterminate switch)
   - Browser inconsistencies
   - Fallback patterns

### Long Term

8. **Component Decision Guides**
   - Interactive tool for choosing components
   - Decision trees for common scenarios
   - "Should I use X or Y?" flowcharts

9. **Accessibility Testing Checklists**
   - Per-component testing requirements
   - Screen reader testing steps
   - Keyboard navigation verification

---

## Impact Assessment

### WCAG Compliance Issues Found

**Critical (WCAG Failures):**
- ❌ Components without labels (Level A failure)
- ❌ Insufficient color contrast guidance
- ❌ Missing keyboard navigation in some patterns

**Severe (Major Accessibility Issues):**
- ⚠️ Focus management unclear in complex components
- ⚠️ Screen reader announcements inconsistent
- ⚠️ No guidance on accessibility APIs limitations

**Moderate (UX Issues for Assistive Technology):**
- ⚠️ Content formatting inconsistencies
- ⚠️ Missing decision guides
- ⚠️ Incomplete "when NOT to use" guidance

---

## Next Steps

### Remaining Components to Analyze

**High Priority:**
- Table
- Select/Dropdown
- Drawer
- Notification/Toast
- Tooltip
- Popover

**Medium Priority:**
- Badge
- Tag
- Tabs
- Breadcrumbs
- Pagination
- Progress

**Lower Priority:**
- Avatar
- Divider
- Skeleton
- Spin/Loader
- Timeline
- Steps

### Estimated Additional Patterns

Based on current findings (96 patterns from 8 components = ~12 patterns per component):
- 6 high-priority components × 12 = ~72 additional patterns
- 6 medium-priority × 8 = ~48 patterns
- Total potential: ~120 additional patterns

**Grand Total Estimate:** ~215 patterns across all components

---

## Conclusion

**Current State:**

OneDS has a **strong technical foundation** built on Ant Design, inheriting robust component implementations, accessibility patterns, and technical architecture. The component documentation includes comprehensive specifications, good visual examples (ASCII art), and solid accessibility basics.

**Important Context:**

Since OneDS is based on heavily modified Ant Design, many technical implementation patterns already exist in the codebase (focus management, ARIA attributes, keyboard navigation, etc.). The gaps identified in this analysis are primarily **documentation and emphasis issues**, not missing technical features.

**Gaps Identified:**

These are areas where the **documentation** could be enhanced:
- Universal accessibility requirements not emphasized enough (label requirements, WCAG failures)
- WAI-ARIA pattern references missing (links to official patterns)
- Content formatting standards inconsistent (sentence case, punctuation rules)
- Screen reader behavior not explained (how content is actually announced)
- "When NOT to use" guidance lacking (decision trees, component alternatives)

**Nature of Recommendations:**

Most recommendations focus on:
1. **Documentation clarity** - Making existing accessibility features more visible
2. **Usage guidance** - Helping developers choose the right component
3. **Content standards** - Establishing consistent formatting and language
4. **Context explanations** - Describing how and why to use patterns

Rather than implementing new technical features (which likely exist via Ant Design), the goal is to **surface, explain, and standardize** what already works.

**With Additions:**

Adding the identified documentation patterns will elevate OneDS to **industry-leading design system documentation** status, with:
- Stronger accessibility compliance **emphasis** (making WCAG requirements clear)
- Clearer guidance for developers (when to use what, why it matters)
- Better decision-making tools (component selection, pattern alternatives)
- More comprehensive coverage than competitors (technical + context + guidance)

**Recommendation:**

Continue component-by-component documentation analysis for remaining components, then consolidate all findings into:
1. **Universal guidelines document** - Label requirements, accessibility standards
2. **Content style guide** - Capitalization, punctuation, tone
3. **Accessibility implementation guide** - How to use existing ARIA patterns correctly
4. **Component decision guide** - When to use which component and why

This will create world-class design system documentation that leverages OneDS's strong Ant Design foundation while providing the clarity and guidance that sets industry-leading design systems apart.
