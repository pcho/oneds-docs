# Select & Tooltip Component Comparisons Summary

**Date:** November 5, 2025
**Components:** Select (Picker), Tooltip
**Systems Compared:** Adobe Spectrum, Nord Health Design
**Purpose:** Identify key patterns missing from OneDS

---

## SELECT / PICKER COMPONENT

### Critical Patterns Missing from OneDS

**1. Label Always Required** (Spectrum)
- Every picker MUST have a label - non-negotiable
- Exception needs accessibility expert approval
- Must include `aria-label` or `aria-labelledby` if visual label omitted

**2. Arrow Keys Don't Loop** (Spectrum)
> "Up/Down Arrow: Navigates previous/next menu item (no looping at boundaries)"

OneDS doesn't specify looping behavior. Spectrum explicitly states NO looping.

**3. Mark the Minority (Required/Optional)** (Spectrum)
- Most fields required → mark only optional ones
- Most fields optional → mark only required ones
- NEVER use asterisks for optional fields

**4. Error Replaces Help Text** (Spectrum)
- Error messages replace help text temporarily
- Both must contain essential information
- Consistent core info so context not lost

**5. Menu Items Short and Concise** (Spectrum)
- Prevent text wrapping in menu
- Keep options under 60 characters
- Checkmarks left-aligned in menu

**6. Mobile: Popover or Tray** (Spectrum)
- Small number of options: popover
- Large number of options: tray/bottom sheet
- Context-dependent presentation

---

## TOOLTIP COMPONENT

### Critical Patterns Missing from OneDS

**1. Show Delay Different for Different Elements** (Spectrum)
> "Tooltips on help icons appear instantly without delay"
> "For conventional UI elements... delay appearance with a warmup period"

**Implementation:**
- Help icons (?) - 0ms delay (instant)
- Buttons, controls - 300-500ms delay
- Prevents intrusive tooltips

**2. Warmup/Cooldown Pattern** (Spectrum)
> "Requires cursor to remain on element for warmup duration. Once shown, tooltips appear instantly on other hovered elements until cursor leaves for cooldown period"

**Example:**
```
User hovers button 1:
- Wait 500ms (warmup)
- Tooltip appears

User moves to button 2 (without leaving area):
- Tooltip appears INSTANTLY (no warmup)

User moves cursor away:
- Wait 1000ms (cooldown)
- Next hover requires warmup again
```

**3. Semantic Tooltips Must Include Icons** (Spectrum)
> "Unless providing context about the exact same icon, a semantic tooltip should always show an icon"

**Types:**
- Informative (blue) - info icon
- Positive (green) - success icon
- Negative (red) - error icon
- Neutral - no icon

**4. Period at End of Sentences** (Spectrum + Nord)
> "If tooltip is written in full sentence (or 2+ sentences), include a period at the end"

**Format:**
- ✅ "Delete patent application" (fragment, no period)
- ✅ "This action will permanently delete the application." (sentence, with period)
- ❌ "Delete patent application." (fragment with period - wrong)

**5. Never Embed Interactive Elements** (Spectrum + Nord)
> "Tooltips should not contain actions or links"
> "Never embed interactive elements (links, buttons) inside tooltips"

**Why:**
- Tooltips disappear on hover out
- Can't maintain hover to click link
- Accessibility issues
- Use Popover instead for interactive content

**6. Don't Use for Critical Information** (Spectrum + Nord)
> "Show crucial information at all times, not just when tooltip displayed"
> "Never use tooltips for critical information or error messages"

**Use Instead:**
- Inline text for essential info
- Helper text below field
- Alert/banner for critical messages
- Error messages (not tooltips)

**7. Excessive Tooltips = Poor Design** (Nord)
> "Avoid tooltip-heavy interfaces; redesign if excessive tooltips appear"

**Guideline:**
- If every element needs tooltip → UI is unclear
- Redesign with better labels instead
- Tooltips supplement, don't replace clear UI

**8. Default Delay: 500ms** (Nord)
- Configurable but 500ms is recommended default
- Prevents accidental triggering
- Balance between responsive and non-intrusive

---

## Cross-Component Insights

### Both Components Share:
1. **Label requirements** - Always required
2. **No critical information** - Supplementary only
3. **Keyboard accessibility** - Must work without mouse
4. **Mobile considerations** - Alternative patterns needed
5. **Content conciseness** - Keep brief (1-2 sentences)

---

## Summary of Gaps

### Select Component (5 patterns):
1. Label always required (critical)
2. Arrow navigation doesn't loop
3. Mark the minority (required/optional)
4. Error replaces help text pattern
5. Mobile popover vs tray decision

### Tooltip Component (8 patterns):
1. Different delays for different elements
2. Warmup/cooldown pattern
3. Semantic tooltips need icons
4. Punctuation rules (periods)
5. No interactive elements allowed
6. Never for critical information
7. Excessive tooltips = bad design
8. Default 500ms delay

---

## Recommendations

**For Select:**
- Add label requirement emphasis
- Specify no-loop keyboard navigation
- Add mark-the-minority pattern
- Document error/help text replacement

**For Tooltip:**
- Add warmup/cooldown timing pattern
- Different delays for different contexts
- Semantic tooltip icon requirement
- Punctuation formatting rules
- Stronger warning against critical content

---

## What OneDS Does Better

**Select:**
- ✅ Search functionality documented
- ✅ Clear button pattern
- ✅ Multiple option types

**Tooltip:**
- ✅ Light/dark variants
- ✅ Auto-positioning logic
- ✅ Mobile alternatives documented

Both components have solid foundations - adding these patterns will enhance accessibility and usability consistency with industry standards.
