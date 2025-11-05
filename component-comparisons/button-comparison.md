# Button Component Comparison

**Date:** November 5, 2025
**Component:** Button
**Systems Compared:** Adobe Spectrum, GitLab Design, Nord Health Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/button.md`:

- Comprehensive anatomy (5 elements)
- Detailed specifications (sizes, states, variants)
- Do's and Don'ts
- Primary use cases with scenarios
- Behavior documentation (states, interactions, groups, animations)
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Screen reader support
- Focus management
- Touch targets
- Loading states
- Responsive considerations

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. Progressive/Pending State Timing (Adobe Spectrum)

**What they have:**
> "Include 1-second delay before showing progress circle to prevent flickering for actions under 5 seconds"

**What OneDS has:**
- Loading state with spinner
- "Button may disable or show loading"

**Gap:**
❌ No guidance on delay timing to prevent flicker
❌ No distinction between short (<5s) and long (>5s) operations

**Worth considering:**
```markdown
**Loading State Timing:**
- For operations <5 seconds: Add 1-second delay before showing spinner (prevents flicker)
- For operations >5 seconds: Show progress immediately
- For determinate progress: Use external progress bar instead of button spinner
```

---

### 2. Minimum Button Width Rule (Adobe Spectrum)

**What they have:**
> "Minimum width = 2.25× button height"

**What OneDS has:**
- "Min Width: 80px"

**Gap:**
❌ Fixed pixel value, not proportional to height
❌ Doesn't scale with different button sizes

**Worth considering:**
```markdown
**Minimum Width:**
- Default: `80px` (2.5× height for 40px button)
- Small: `80px` (2.5× height for 32px button)
- Large: `108px` (2.25× height for 48px button)
- **Rule:** Width should be at least 2.25× button height
```

---

### 3. Maximum Accent/Primary Buttons per View (Adobe Spectrum)

**What they have:**
> "Use no more than 3 accent buttons in the same view. This helps establish a clear hierarchy."

**What OneDS has:**
- "Don't have more than one primary button per section"

**Gap:**
✅ We have similar guidance
⚠️ Theirs is more specific: 3 max per VIEW (not just section)

**Worth considering:**
Clarify if "per section" = "per view" or if we need:
```markdown
- Don't have more than one primary button per section
- Don't have more than 3 primary buttons per view/page
```

---

### 4. High Contrast Mode Support (Adobe Spectrum)

**What they have:**
> "Windows High Contrast Mode support required with theme-specified colors. Borders should match button text color by default."

**What OneDS has:**
- Color & contrast requirements
- No specific high contrast mode guidance

**Gap:**
❌ No Windows High Contrast Mode guidance
❌ No border color behavior in high contrast

**Worth considering:**
```markdown
**High Contrast Mode:**
- Support Windows High Contrast Mode
- In high contrast: border color matches text color
- Hover/focus: border displays at full opacity
- Disabled: use system disabled colors
```

---

### 5. Icon-Only Button Tooltip Requirement (Adobe Spectrum + GitLab)

**What they have:**
- **Spectrum:** "Icon-only buttons require a tooltip displaying the label text and keyboard shortcuts"
- **GitLab:** Icon-only buttons require `aria-label`

**What OneDS has:**
```markdown
## Icon-Only Buttons:
- Icon buttons need aria-label
- Or span with visually-hidden text
```

**Gap:**
⚠️ We mention aria-label but don't explicitly require tooltip
❌ No mention of keyboard shortcuts in tooltip

**Worth considering:**
```markdown
**Icon-Only Buttons:**
- MUST have aria-label or visually-hidden text
- MUST show tooltip on hover with:
  - Button label text
  - Keyboard shortcut (if applicable)
- Example: [Edit] tooltip: "Edit (Ctrl+E)"
```

---

### 6. Focus Order vs Visual Order (GitLab)

**What they have:**
> "Maintain parity between focus order and visual order; avoid CSS-based reordering"

**What OneDS has:**
- "Focus moves logically through page"
- No specific warning about CSS reordering

**Gap:**
❌ No explicit warning against CSS order manipulation

**Worth considering:**
```markdown
**Focus Order:**
- Focus order MUST match visual order
- ⚠️ Don't use CSS (flexbox order, absolute positioning) to change visual order
- DOM order determines focus order
- Use logical source order in HTML
```

---

### 7. Accessible Loading State (GitLab)

**What they have:**
> "When both `loading` and `accessibleLoading` are true, button appears disabled but remains focusable for screen readers"

**What OneDS has:**
- `aria-busy="true"` during loading
- Button disabled during loading

**Gap:**
⚠️ Interesting pattern: keeping button focusable while appearing disabled
❌ We always disable, which removes from tab order

**Worth considering:**
```markdown
**Accessible Loading Pattern:**
- Option 1 (current): `disabled` + `aria-busy="true"` - removes from tab order
- Option 2 (advanced): `aria-disabled="true"` without `disabled` - keeps focusable
  - Screen readers can still reach it
  - Prevents click with JavaScript
  - Better for screen reader users who want to track action
```

---

### 8. Ellipsis for Additional Input (GitLab)

**What they have:**
> "For actions requiring additional user input, append ellipsis (…)—except for danger actions"

**What OneDS has:**
- "Use action-oriented labels"
- No guidance on ellipsis

**Gap:**
❌ No pattern for "opens modal/dialog" buttons

**Worth considering:**
```markdown
**Button Labels with Ellipsis:**
- Add ellipsis (…) when button opens a dialog requiring more input
- "Save…" - opens save dialog with options
- "Export…" - opens export format chooser
- Exception: Don't use for danger actions ("Delete" not "Delete…")
```

---

### 9. Copy-to-Clipboard Labeling (GitLab)

**What they have:**
> "For copy-to-clipboard actions, use descriptive text: 'Copy branch name' not 'Copy branch name to clipboard'"

**What OneDS has:**
- General guidance: "Use action-oriented labels"

**Gap:**
❌ No specific guidance for copy buttons

**Worth considering:**
```markdown
**Copy Button Labels:**
- Be specific about WHAT is being copied: "Copy email address"
- Don't add "to clipboard" (redundant): ❌ "Copy to clipboard"
- After copy, change to confirm: "Copied!" (with checkmark)
```

---

### 10. Button Alignment Strategy (GitLab)

**What they have:**
> "Left alignment: Page content, forms, F-pattern reading. Right alignment: Modals, dialogs, Z-pattern. Center: Empty states only."

**What OneDS has:**
- "Place primary action on the right (in Western layouts)"

**Gap:**
⚠️ We only mention right alignment
❌ No guidance for forms (left align) vs modals (right align)

**Worth considering:**
```markdown
**Button Alignment by Context:**
- **Forms & Page Content**: Left-align (F-pattern reading)
  - Primary action on LEFT in button group
- **Modals & Dialogs**: Right-align (Z-pattern reading)
  - Primary action on RIGHT in button group
- **Empty States**: Center-align only
- **Toolbars**: Right-align for global actions
```

---

### 11. Destructive Button Positioning (GitLab)

**What they have:**
> "Separate destructive buttons from confirmations. Position affirmative actions on outer edge of containers."

**What OneDS has:**
- Example showing [Cancel] [Delete] order
- No explicit rule about separation

**Gap:**
❌ No rule about separating destructive from other actions

**Worth considering:**
```markdown
**Destructive Button Placement:**
- Separate destructive actions from confirmations (visual gap)
- Example: [Cancel] ← gap → [Delete]
- In confirmation dialogs:
  - Safe action (Cancel) on left/start
  - Destructive action (Delete) on right/end
  - Add visual separation (larger gap)
```

---

### 12. Long Lists with Danger Buttons (GitLab)

**What they have:**
> "In long lists, use default variant to avoid overwhelming UI; final destructive confirmations require danger variant"

**What OneDS has:**
- "Don't overuse danger buttons"
- No specific guidance for lists

**Gap:**
❌ No pattern for danger actions in repeated contexts

**Worth considering:**
```markdown
**Danger Buttons in Lists:**
- For repeated delete actions (table rows), use default/secondary variant
- Example: Table with 50 rows, each has [Delete] button
  - Use secondary button style, not danger
  - Prevents "wall of red"
- Only use danger variant in final confirmation modal
```

---

### 13. Toggle Buttons Pattern (GitLab)

**What they have:**
> "Icon-only buttons shouldn't toggle between two states—use toggle or checkbox instead"

**What OneDS has:**
- `aria-pressed` for toggle buttons
- No guidance against icon-only toggles

**Gap:**
❌ No warning about icon-only toggles being unclear

**Worth considering:**
```markdown
**Toggle Buttons:**
- ✅ Use toggle/switch components for two-state controls
- ✅ Use checkbox for selection
- ❌ Don't use icon-only button that changes icon on click
  - Example: ❌ Star icon that toggles filled/unfilled
  - Better: Use toggle switch or checkbox
- If you must use button toggle: include text label showing state
```

---

### 14. Button vs Link Semantic Distinction (GitLab, Nord Health)

**What they have:**
- **GitLab:** "Use buttons for actions, links for navigation. When mixed, link can be styled as button."
- **Nord Health:** "Don't use buttons for page navigation—use links"

**What OneDS has:**
- "Don't use buttons for navigation (use links)"
- "Use `<button>` for actions, `<a>` for navigation"

**Gap:**
✅ We have this
⚠️ Could clarify exception: when link needs button styling

**Worth considering:**
```markdown
**Button vs Link:**
- **Buttons:** Actions (submit, delete, toggle)
- **Links:** Navigation (go to page)
- **Exception:** Link styled as button when:
  - Primary navigation action (Login, Sign Up)
  - Needs visual prominence
  - Still use `<a>` element with button class
```

---

### 15. Security: URL Sanitization (GitLab)

**What they have:**
> "Component implements SafeLink directive by default. For unsafe URLs (Data URLs), use `is-unsafe-link` prop. Only disable sanitization when absolutely necessary."

**What OneDS has:**
- No security guidance

**Gap:**
❌ No mention of URL safety in button links
❌ No guidance on data: URLs or javascript: URLs

**Worth considering:**
```markdown
**Security Considerations:**
- When button acts as link (`<a>` element):
  - Sanitize user-provided URLs
  - Block `javascript:` URLs
  - Validate external links
  - Use `rel="noopener noreferrer"` for external links
- Data URLs (for downloads):
  - Only allow when explicitly needed
  - Validate content type
```

---

### 16. Deprecated Variants Tracking (GitLab)

**What they have:**
> "Deprecated Variants: Info, Success, Warning (use confirm or default instead)"

**What OneDS has:**
- Current variants documented
- No deprecated section

**Gap:**
❌ No tracking of deprecated patterns
❌ If we change our mind later, no migration guide

**Worth considering:**
```markdown
## Deprecated Patterns

*None currently. This section will track deprecated button variants and provide migration guidance.*

**Example (if we deprecate something):**
- ~~Info Button~~ (Deprecated v2.0) → Use Default Button
- ~~Success Button~~ (Deprecated v2.0) → Use Primary Button with success color
```

---

### 17. Size + Icon Pairing Rules (Nord Health)

**What they have:**
> "Medium buttons pair with small icons; small buttons with extra-small; large with medium icons"

**What OneDS has:**
- Icon sizes: "16px" for button with text
- "20px" for icon-only
- No pairing rules

**Gap:**
❌ No guidance on which icon size for which button size

**Worth considering:**
```markdown
**Icon Size Pairing:**
- **Large button (48px)**: Use 20px icons
- **Default button (40px)**: Use 16px icons
- **Small button (32px)**: Use 14px icons
- **Icon-only buttons**: Use 20px icons regardless of button size
```

---

### 18. Href Property Behavior (Nord Health)

**What they have:**
> "When using `href`, the component renders as a link (`<a>` tag) rather than a button element"

**What OneDS has:**
- Mentions button vs link semantics
- No technical implementation detail

**Gap:**
⚠️ More of an implementation detail than design guidance
❌ But could clarify for developers

**Worth considering:**
```markdown
**Link Buttons (Technical):**
- When `href` property is provided:
  - Renders as `<a>` element (not `<button>`)
  - Uses link semantics for screen readers
  - Supports browser link features (right-click, open in new tab)
  - Still styled as button visually
```

---

### 19. Multiple Primary Buttons Clarification (Nord Health)

**What they have:**
> "Only use one primary button per section, as a main call-to-action"

**What OneDS has:**
- "Don't have more than one primary button per section"

**Gap:**
✅ We have this
⚠️ Could add "as a main call-to-action" clarification

**Worth considering:**
```markdown
## Don't
- Don't have more than one primary button per section
- Primary button = main call-to-action (the ONE thing user should do)
- If multiple actions are equal priority, use secondary buttons
```

---

### 20. Dashed Variant for Filtering (Nord Health)

**What they have:**
> "Dashed variant: Filtering actions"

**What OneDS has:**
- "Dashed Button: Border: 1px dashed, Style: Same as default but dashed"
- No usage guidance

**Gap:**
⚠️ We define it but don't say when to use it

**Worth considering:**
```markdown
**Dashed Button:**
- Background: White
- Border: 1px dashed #D1D6DB
- **Use for:** Filter actions, "Add filter" buttons
- **Example:** [+ Add Filter] in filter panel
- Visual distinction from solid buttons
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Loading State Timing** - 1-second delay for <5s operations
2. **Icon-Only Tooltip Requirement** - Must show tooltip with keyboard shortcut
3. **Focus Order Warning** - Don't use CSS to reorder
4. **Button Alignment by Context** - Forms (left) vs Modals (right)
5. **Destructive Button Positioning** - Separate from safe actions
6. **Security Guidance** - URL sanitization for link buttons

### Medium Priority

7. **Minimum Width Rule** - 2.25× height ratio
8. **High Contrast Mode** - Windows HCM support
9. **Ellipsis Pattern** - "Save…" for actions that open dialogs
10. **Copy Button Labeling** - "Copy X" not "Copy X to clipboard"
11. **Danger Buttons in Lists** - Use secondary in repeated contexts
12. **Toggle Warning** - Don't use icon-only buttons for toggles

### Nice to Have

13. **Size + Icon Pairing** - Which icon size for which button size
14. **Accessible Loading** - Option to keep focusable while loading
15. **Href Behavior** - Technical implementation details
16. **Deprecated Section** - Future migration guidance
17. **Dashed Button Usage** - When to use filtering variant

---

## Recommendations

### Add to OneDS Button Documentation

Create a new section in `/Users/pcho/Work/docs/component-comparisons/button-additions.md` with:

1. **Enhanced Loading States**
   - Timing guidance
   - Short vs long operation patterns

2. **Enhanced Icon-Only Guidance**
   - Tooltip requirement with keyboard shortcuts
   - Toggle warning

3. **Enhanced Alignment Rules**
   - Context-based alignment (forms vs modals)
   - Destructive button separation

4. **Security Section** (new)
   - URL sanitization
   - External link safety

5. **Enhanced Content Guidelines**
   - Ellipsis pattern
   - Copy button labeling

6. **Pattern Warnings** (new)
   - CSS focus order manipulation
   - Danger buttons in lists
   - Icon-only toggles

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **ASCII Art Examples** - Creative visual examples
2. ✅ **Comprehensive Behavior Section** - More detailed than others
3. ✅ **Animation Specifications** - Reduced motion included
4. ✅ **Multiple Interaction Methods** - Click, keyboard, touch all covered
5. ✅ **Button Group Patterns** - Three types (horizontal, vertical, segmented)

**Conclusion:** OneDS has strong foundations. Add the patterns above to make it industry-leading.
