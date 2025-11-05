# Card Component Comparison

**Date:** November 5, 2025
**Component:** Card
**Systems Compared:** GitLab Design, Nord Health Design
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/card.md`:

- Comprehensive anatomy (4 elements for standard, plus specialized variants)
- Multiple card types (Standard, Dashboard, Gallery, Settings, Calendar)
- Detailed specifications (sizes, shadows, borders)
- Do's and Don'ts
- Primary use cases with ASCII examples
- Behavior documentation (states, interactions, animations)
- Layout patterns (grid, list, masonry)
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Screen reader support
- Focus management
- Touch targets
- Responsive considerations
- Loading states

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. Card Has No Semantic Landmark Meaning (GitLab)

**What they have:**
> "A card is visually a styled container with no particular semantic meaning as a landmark region."

**What OneDS has:**
```markdown
**Semantic HTML:**
- Use `<article>` for content cards
- Use `<section>` for card sections
```

**Gap:**
⚠️ We prescribe `<article>` for content cards, but GitLab warns cards are NOT semantic landmarks
⚠️ Potential over-use of `<article>` element

**Worth considering:**
```markdown
**Semantic HTML Clarification:**
- Cards are primarily visual containers (not semantic landmarks)
- Use `<article>` only if card represents:
  - Self-contained content that could be distributed independently
  - Blog post, news article, forum post, or similar standalone content
- Use `<div>` for most cards (dashboard, settings, gallery)
  - These are visual groupings, not semantic articles
- Use `<section>` for card sections when they represent thematic groupings
- **Rule:** Don't default to `<article>` just because it's a card
```

---

### 2. Heading Hierarchy Must Respect Page Context (GitLab)

**What they have:**
> "Use an appropriate heading level for a card title that aligns with the page hierarchy."
> "Implement heading levels that respect the document's overall semantic structure rather than treating cards as isolated units."

**What OneDS has:**
```markdown
- Proper heading hierarchy (`<h2>`, `<h3>`)
```

**Gap:**
✅ We mention heading hierarchy
⚠️ Could emphasize cards are NOT isolated - heading level depends on page context

**Worth considering:**
```markdown
**Card Heading Hierarchy:**
- ⚠️ NEVER default to `<h2>` for all card titles
- Card heading level depends on page context:
  - If page has `<h1>` main title, card titles are `<h2>`
  - If cards are nested under `<h2>` section, card titles are `<h3>`
  - Follow document outline, not visual appearance
- Cards are not isolated units - they're part of page hierarchy
- Example:
  ```html
  <h1>Dashboard</h1> <!-- Page title -->
  <section>
    <h2>Active Patents</h2> <!-- Section title -->
    <div class="card">
      <h3>Patent #12345</h3> <!-- Card title = h3 -->
    </div>
  </section>
  ```
```

---

### 3. Collection Pattern with Lists (GitLab)

**What they have:**
> "When displaying multiple related cards: structure them as a parent `<ul>` with `<li>` elements that each contain a single card."

**What OneDS has:**
- Grid layout patterns mentioned
- No mention of list semantics for card collections

**Gap:**
❌ No guidance on wrapping multiple cards in `<ul>`
❌ Missing pattern for screen reader navigation through card collections

**Worth considering:**
```markdown
**Card Collections (Accessibility Pattern):**

When displaying multiple related cards:
- Wrap in `<ul>` (unordered list)
- Each card wrapped in `<li>` (list item)
- Benefits:
  - Screen readers announce "List of X items"
  - Users can skip through cards (list navigation shortcuts)
  - Clear relationship between cards

**Example:**
```html
<ul class="card-grid">
  <li>
    <div class="card">
      <h2>Patent #12345</h2>
      <!-- content -->
    </div>
  </li>
  <li>
    <div class="card">
      <h2>Patent #12346</h2>
      <!-- content -->
    </div>
  </li>
</ul>
```

**When NOT to use:**
- Single card: No need for list wrapper
- Cards with different purposes (not a collection)
```

---

### 4. When NOT to Use Cards (GitLab)

**What they have:**
> "Avoid cards for single content blocks without logical grouping; use design tokens instead."
> "Don't use for simple static text lists (use semantic HTML lists)."
> "Replace with tables for complex multi-column data comparisons."
> "Use single stat components for individual metrics rather than cards."

**What OneDS has:**
```markdown
## Don't
- Don't use cards for single pieces of information
```

**Gap:**
✅ We have basic "don't use for single pieces"
⚠️ Could be more specific about alternatives

**Worth considering:**
```markdown
## When NOT to Use Cards

**Don't use cards when:**

1. **Simple lists**: Use semantic `<ul>` or `<ol>` instead
   - ❌ Card for each bullet point
   - ✅ Simple bulleted/numbered list

2. **Tabular data**: Use `<table>` for multi-column comparisons
   - ❌ Cards with repeated structured data
   - ✅ Data table with sortable columns

3. **Single metrics**: Use stat component instead
   - ❌ Card with just one number
   - ✅ Standalone stat display

4. **No logical grouping**: Use plain layout with spacing
   - ❌ Card wrapper for unrelated content
   - ✅ Sections with appropriate spacing

**Better Alternative:**
- List: Use `<ul>`, `<ol>`, or simple vertical stack
- Data: Use table component
- Single stat: Use dedicated stat/KPI component
- Mixed content: Use page sections with headers
```

---

### 5. Nested Cards Warning (Nord Health)

**What they have:**
> "Don't place cards within cards; use the Divider component instead to segment sections."

**What OneDS has:**
```markdown
## Don't
- Don't nest cards within cards—use sections instead
```

**Gap:**
✅ We have this warning
⚠️ Nord suggests Divider as alternative - we say "sections"

**Worth considering:**
```markdown
## Don't
- Don't nest cards within cards—use sections or dividers instead
  - ❌ Card containing another card
  - ✅ Single card with dividers separating sections
  - ✅ Card containing regular sections (no card styling)
- If you need visual separation within a card: use dividers
- If you need semantic separation within a card: use `<section>` elements
```

---

### 6. Card Purpose Limitation (Nord Health)

**What they have:**
> "Don't use cards for capturing urgent user attention."
> "Avoid displaying important changes or interface conditions via cards."

**What OneDS has:**
- Use cases documented
- No explicit warning about urgent/critical content

**Gap:**
❌ No guidance on what cards should NOT be used for (attention/urgency)

**Worth considering:**
```markdown
## When NOT to Use Cards

**Cards are NOT for:**
- Urgent alerts or warnings (use Alert component)
- Critical errors (use Modal or Notification)
- Important status changes (use Banner or Toast)
- Time-sensitive information (use Alert banner)

**Why:**
- Cards blend into page layout
- Users may miss critical information
- Not interruptive enough for urgent matters

**Better alternatives:**
- Urgent: Alert component (prominent, dismissible)
- Critical: Modal dialog (blocks interaction)
- Status: Notification toast (temporary, attention-getting)
- Warning: Banner at top of page (persistent, visible)
```

---

### 7. Single Primary Action Rule (Nord Health)

**What they have:**
> "Limit cards to one primary button to maintain clear information hierarchy."

**What OneDS has:**
- Card actions mentioned
- No specific limit on primary actions

**Gap:**
❌ No rule about limiting primary buttons in cards

**Worth considering:**
```markdown
**Card Actions:**

**Primary Action Limit:**
- ⚠️ Only ONE primary button per card
- Multiple secondary buttons are acceptable
- Maintains clear hierarchy (one main action)

**Example:**
```
┌─────────────────────────────────┐
│ Patent #12345              [⋮]  │
│                                  │
│ Status: Under Review             │
│ Filed: Jan 15, 2024              │
│                                  │
│ [Download PDF]  [View Details]   │ ← ONE primary action
└─────────────────────────────────┘
```

**If multiple equal actions needed:**
- Use all secondary buttons
- Or split into separate cards
- Or use menu/dropdown for additional actions
```

---

### 8. Skeleton Loader Pattern During Loading (GitLab)

**What they have:**
> "Use the skeleton loader pattern during content loading states within cards."

**What OneDS has:**
```markdown
**Loading States:**
- Skeleton placeholder maintains layout
- Loading spinner centered in card
```

**Gap:**
✅ We have both skeleton and spinner mentioned
⚠️ Could clarify when to use which

**Worth considering:**
```markdown
**Loading States:**

**Choose the right pattern:**

1. **Skeleton Placeholder** (preferred for cards):
   - Use when loading card content initially
   - Shows card structure while content loads
   - Maintains layout (no content shift)
   - Better UX for repeated/predictable content
   - Example: Loading dashboard cards, list of patent cards

2. **Loading Spinner**:
   - Use for actions within already-visible card
   - Example: Refreshing card data, submitting form in card
   - Centered in card or on action button

**Implementation:**
```html
<!-- Skeleton pattern -->
<div class="card">
  <div class="skeleton-header"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-button"></div>
</div>
```

**Accessibility:**
- Announce loading to screen readers
- Use `aria-busy="true"` during load
```

---

### 9. Header Slot Patterns (Nord Health)

**What they have:**
> "Slots for header, header-end (trailing actions), and footer content."
> "The `header-end` slot is useful for actions or additional info."

**What OneDS has:**
```markdown
### Card - Header
1. **Title/Heading** - Card label
2. **Actions** - Buttons, icons, or menu (right-aligned)
```

**Gap:**
✅ We have header with actions
⚠️ Could formalize slot terminology for developers

**Worth considering:**
```markdown
**Card Header Slots:**

Cards support three header patterns:

1. **Title Slot (left)**: Card heading or label
2. **Header Actions Slot (right)**: Buttons, icons, or menu
3. **Subtitle Slot (optional)**: Secondary text below title

**Implementation Pattern:**
```html
<div class="card-header">
  <div class="card-header-start">
    <h2>Card Title</h2>
    <span class="subtitle">Optional subtitle</span>
  </div>
  <div class="card-header-end">
    <button>Action</button>
  </div>
</div>
```

**Footer Slot:**
- Use for primary actions or metadata
- Left-align metadata, right-align actions
- Or center-align single primary action
```

---

### 10. Padding Control Flexibility (Nord Health)

**What they have:**
> "The `padding` property allows adjustments ('none,' 'm,' 'l'), with header/footer padding retained even when body padding is removed."

**What OneDS has:**
- Fixed padding specs (24px)
- No mention of variable padding

**Gap:**
❌ No guidance on zero-padding cards
❌ No pattern for cards with full-bleed content

**Worth considering:**
```markdown
**Card Padding Variants:**

**Standard Padding** (default):
- All sections: 24px padding
- Use for: Most cards with text content

**No Body Padding** (zero):
- Header/Footer: Keep 24px padding
- Body: 0px padding
- Use for: Cards with images, maps, charts, tables
- Full-bleed content while maintaining header/footer spacing

**Example Use Cases:**

1. **Image Card** (no body padding):
```
┌─────────────────────────────────┐
│ Image Gallery          [⋮]      │ ← Header: 24px padding
├─────────────────────────────────┤
│ [Full-width image]              │ ← Body: 0px padding
├─────────────────────────────────┤
│ 12 photos  [View All]           │ ← Footer: 24px padding
└─────────────────────────────────┘
```

2. **Table Card** (no body padding):
- Header with title and actions (padded)
- Table with full-width rows (no padding)
- Footer with pagination (padded)

**CSS Implementation:**
```css
.card-no-body-padding .card-body {
  padding: 0;
}
```
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Semantic HTML Clarification** - Don't default to `<article>`, most cards are just `<div>`
2. **Heading Hierarchy Context** - Card headings depend on page hierarchy, not visual appearance
3. **Card Collection Pattern** - Wrap multiple related cards in `<ul>` with `<li>` for accessibility
4. **When NOT to Use Cards** - Specific alternatives for lists, tables, stats, urgent content

### Medium Priority

5. **Nested Cards Warning Enhancement** - Clarify using dividers as alternative
6. **Card Purpose Limitation** - Don't use for urgent/critical information
7. **Single Primary Action Rule** - Only one primary button per card
8. **Skeleton vs Spinner Clarification** - When to use which loading pattern

### Nice to Have

9. **Header Slot Patterns** - Formalize slot terminology (header-start, header-end)
10. **Padding Control Flexibility** - Zero-padding pattern for full-bleed content

---

## Recommendations

### Add to OneDS Card Documentation

Create supplementary guidance in a new section or separate document:

1. **Enhanced Semantic HTML Guidance**
   - When to use `<div>` vs `<article>` for cards
   - Card collection pattern with `<ul>` wrapper
   - Heading hierarchy based on page context

2. **When NOT to Use Cards Section**
   - Specific alternatives for each scenario
   - Use case decision tree

3. **Enhanced Action Guidance**
   - Single primary action rule
   - Header action slot patterns

4. **Enhanced Loading Patterns**
   - Skeleton loader for initial load
   - Spinner for actions within cards
   - When to use which

5. **Padding Variants**
   - Zero-body-padding pattern for full-bleed content
   - Use cases for each padding level

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Multiple Card Type Variants** - Dashboard, Gallery, Settings, Calendar (very comprehensive)
2. ✅ **Detailed Specifications** - Exact dimensions, shadows, borders documented
3. ✅ **Animation Specifications** - Hover, appear, expand/collapse all covered with timing
4. ✅ **Layout Patterns** - Grid, list, masonry all documented
5. ✅ **Interaction Details** - Clickable cards, expandable cards, card with actions
6. ✅ **Touch Target Specifications** - Minimum sizes documented
7. ✅ **ASCII Art Examples** - Creative visual examples for each card type

**Conclusion:** OneDS has strong card documentation with excellent variant coverage. Adding semantic HTML clarifications, "when NOT to use" guidance, and collection patterns will make it industry-leading.
