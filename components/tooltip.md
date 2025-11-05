# Tooltip

## Description

Tooltip is a floating label that appears on hover or focus, offering brief, contextual information about an element. Like a helpful whisper, it provides just-in-time guidance without cluttering the interface—perfect for explaining icons, abbreviations, or offering additional context.

## Anatomy

1. **Tooltip Container** - Floating content box
2. **Tooltip Text** - Brief explanatory content
3. **Arrow** - Pointer to target element
4. **Target Element** - Element that triggers tooltip

## Specification

**Tooltip Container:**
- **Max Width**: `250px`
- **Padding**: `8px 12px`
- **Background**: Dark gray (`#2A353F`)
- **Border Radius**: `6px`
- **Font Size**: `12px`
- **Line Height**: `16px`
- **Color**: White (`#FFFFFF`)
- **Shadow**: Medium elevation
- **Z-index**: High layer (1000+)

**Arrow:**
- **Size**: `6px`
- **Color**: Matches background (`#2A353F`)
- **Position**: Centered on edge
- **Points to**: Target element

**Positioning:**
- **Default**: Top center
- **Alternative**: Bottom, left, right
- **Auto**: Adjusts to viewport
- **Offset**: `8px` from target

**Timing:**
- **Show Delay**: `300ms` (hover)
- **Hide Delay**: `0ms` (instant)
- **Focus**: Shows immediately
- **Transition**: `200ms` fade in/out

**Variants:**
- **Light**: White background, dark text, border
- **Dark**: Dark background, white text (default)

**Light Variant:**
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Text Color**: Dark gray (`#2A353F`)
- **Shadow**: Medium elevation

## Do

- Keep content brief (1-2 short sentences)
- Use for supplementary information
- Explain icons without labels
- Define abbreviations or terms
- Provide context for disabled elements
- Show keyboard shortcuts
- Explain truncated text
- Position tooltips clearly

## Don't

- Don't use for critical information
- Don't include interactive content (use Popover)
- Don't use for long explanations
- Don't hide essential info in tooltips
- Don't overlap tooltip with target
- Don't use on mobile (unreliable hover)
- Don't forget keyboard accessibility
- Don't rely solely on tooltips for navigation

## Uses

**Primary Use Cases:**

1. **Icon Buttons** - Explain icon meaning
2. **Abbreviations** - Expand acronyms (e.g., "IP" → "Intellectual Property")
3. **Truncated Text** - Show full text on hover
4. **Disabled Elements** - Explain why disabled
5. **Additional Context** - Supplementary information
6. **Keyboard Shortcuts** - Show shortcut keys
7. **Descriptions** - Brief feature explanations
8. **Helper Text** - Clarification or tips

**Example Scenarios:**

**Icon Button Tooltip:**
```
[🗑️] → "Delete patent application"
```

**Truncated Text:**
```
Very long patent tit... → "Very long patent title that exceeds the available space"
```

**Disabled Element:**
```
[Save] (disabled) → "Complete all required fields to save"
```

**Keyboard Shortcut:**
```
[Save] → "Save changes (Ctrl+S)"
```

**Abbreviation:**
```
IP → "Intellectual Property"
```

## Behavior

**Hover Trigger:**
1. User hovers over target element
2. Wait 300ms (show delay)
3. Tooltip fades in (200ms)
4. Tooltip positions near target
5. Adjusts if near viewport edge
6. User moves cursor away
7. Tooltip disappears immediately

**Focus Trigger:**
1. User focuses element (keyboard)
2. Tooltip appears immediately
3. Stays visible while focused
4. Disappears on blur

**Positioning Logic:**
- Default: Top center
- If no space above: Bottom
- If no space left/right: Adjust horizontally
- Arrow always points to trigger
- Never obscure trigger element

**Mobile Behavior:**
- Avoid hover-only tooltips
- Show on long press (optional)
- Consider alternative patterns
- Use visible labels instead

### Focus

**Keyboard Focus:**
- Tooltip shows on focus
- Target element receives focus
- Tooltip doesn't receive focus
- ESC key dismisses (optional)
- Focus remains on trigger

### Dismissing

**Hide Triggers:**
- Mouse leaves target area
- Blur from keyboard focus
- Scroll (optional)
- ESC key (optional)
- Click outside (optional)

## Delay Timing by Element Type

**Help icons (?): 0ms delay (instant)**
- Users expect immediate help
- Prevents frustration
- Clear intent to see information

**Regular buttons/controls: 500ms delay**
- Default recommended delay
- Prevents accidental triggering
- Balance between responsive and non-intrusive

**Pattern:**
```javascript
const tooltipDelay = element.classList.contains('help-icon') ? 0 : 500;
```

## Warmup/Cooldown Pattern

**Warmup (first hover):**
- User hovers element → Wait 500ms → Tooltip appears

**Instant (subsequent hovers):**
- User moves to nearby element → Tooltip appears instantly (no wait)

**Cooldown:**
- User moves cursor away → Wait 1000ms cooldown
- Next hover requires 500ms warmup again

**Why:** Reduces tooltip fatigue, feels more responsive after first interaction.

## Content Guidelines

### Punctuation Rules

**Use periods for complete sentences:**
```
✅ "This action cannot be undone."
```

**No periods for fragments:**
```
✅ "Delete patent application"
❌ "Delete patent application."
```

**Multiple sentences:**
```
✅ "This will permanently delete the application. This action cannot be undone."
```

### Keep Content Brief

- **Maximum:** 1-2 short sentences
- **Target:** Under 60 characters
- **If longer:** Consider using Popover or inline text instead

## When NOT to Use

### Use Alternatives Instead When:

**Use Popover for interactive content:**
- Links or buttons inside tooltip
- Forms or inputs
- Multiple paragraphs
- Rich content (images, lists)

**Why tooltips can't have interactive content:**
- Tooltips disappear on hover out
- Can't maintain hover to click link
- Accessibility issues
- Confusing user experience

**Use inline text for critical information:**
- Essential instructions
- Error messages
- Required information
- Primary content

**Never hide critical information in tooltips:**
- Tooltips are supplementary only
- Users may never see them
- Mobile users can't access hover tooltips

**Use help text for persistent guidance:**
- Field instructions
- Form guidance
- Always-visible tips

**Example:**
```
❌ Email [?] → Tooltip: "Required format: name@example.com"
✅ Email
   Format: name@example.com (help text always visible)
```

### Warning: Excessive Tooltips = Poor Design

**If every element needs a tooltip:**
- UI labels are unclear
- Redesign with better labels
- Don't use tooltips as crutch for bad UX

**Tooltips should:**
- Supplement clear UI
- Provide bonus information
- Not be required to understand interface

**Rule:** If removing all tooltips breaks your UI → fix the labels, don't add more tooltips.

## Accessibility

**Semantic HTML:**
```html
<!-- Using aria-describedby -->
<button
  aria-describedby="delete-tooltip"
  class="icon-button">
  🗑️
</button>

<div
  id="delete-tooltip"
  role="tooltip"
  class="tooltip"
  hidden>
  Delete patent application
</div>

<!-- With title attribute (basic) -->
<button
  title="Delete patent application"
  class="icon-button">
  🗑️
</button>

<!-- For disabled elements -->
<div class="tooltip-wrapper">
  <button
    disabled
    aria-describedby="save-tooltip">
    Save
  </button>
  <div id="save-tooltip" role="tooltip" hidden>
    Complete all required fields to save
  </div>
</div>
```

**ARIA Attributes:**
- `role="tooltip"` on tooltip element
- `aria-describedby` links trigger to tooltip
- Target has descriptive label/text
- `hidden` attribute when not visible
- Don't use `aria-hidden` on tooltip content

**Keyboard Accessibility:**
- Tooltip shows on focus
- Works with keyboard navigation
- Target element keyboard accessible
- Tooltip doesn't trap focus
- ESC to dismiss (optional)

**Screen Reader Support:**
- Reads tooltip content on focus
- Uses `aria-describedby` for context
- Announces supplementary info
- Target element properly labeled
- Tooltip enhances, not replaces labels

**Focus Management:**
- Target element focusable
- Tooltip doesn't receive focus
- Focus stays on trigger
- Logical tab order maintained
- Clear focus indicator on trigger

**Title Attribute:**
- Browser-native tooltips
- Accessible but limited styling
- Delayed appearance
- Screen reader support varies
- Consider as fallback

**Touch Accessibility:**
- Avoid hover-only tooltips on touch
- Provide alternative access
- Long press (optional, inconsistent)
- Use visible labels on touch devices
- Consider info buttons for mobile

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Dark tooltip: white text on dark gray
- Light tooltip: dark text on white
- Don't rely on color alone
- Sufficient contrast with background

**Content Guidelines:**
- Keep under 100 characters
- Use plain language
- Provide useful context
- Supplement, don't replace labels
- Be concise and clear

**Alternative Patterns:**
- **Popover**: For interactive content
- **Modal**: For critical information
- **Inline text**: For essential info
- **Help icon**: For longer explanations
- **Label**: For primary information

**Responsive:**
- Auto-repositioning
- Viewport boundary detection
- Readable on all screen sizes
- Alternative patterns on mobile
- Consider info buttons on touch devices
