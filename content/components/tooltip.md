---
title: Tooltip
description: "Documentation for Tooltip component"
---

# Tooltip

## Description

Tooltips are floating labels that appear on hover or focus, offering brief, contextual information. Like a helpful whisper, they provide just-in-time guidance without cluttering your interface—perfect for explaining icons, expanding abbreviations, or adding that extra bit of context.

## Anatomy

1. **Tooltip Container** - Floating content box
2. **Tooltip Text** - Brief explanatory content
3. **Arrow** - Pointer to target element
4. **Target Element** - Element that triggers tooltip

## Specification

**Tooltip Container:**
- **Max Width**: `250px`
- **Padding**: `spacing-2` `spacing-3`
- **Background**: `--text-normal`
- **Border Radius**: `radius-small`
- **Font Size**: `text-xs`
- **Line Height**: `16px`
- **Color**: `--bg-surface-white`
- **Shadow**: Medium elevation
- **Z-index**: High layer (1000+)

**Arrow:**
- **Size**: `6px`
- **Color**: Matches background `--text-normal`
- **Position**: Centered on edge
- **Points to**: Target element

**Positioning:**
- **Default**: Top center
- **Alternative**: Bottom, left, right
- **Auto**: Adjusts to viewport
- **Offset**: `spacing-2` from target

**Timing:**
- **Show Delay**: `300ms` (hover)
- **Hide Delay**: `0ms` (instant)
- **Focus**: Shows immediately
- **Transition**: `200ms` fade in/out

**Variants:**
- **Light**: White background, dark text, border
- **Dark**: Dark background, white text (default)

**Light Variant:**
- **Background**: `--bg-surface-white`
- **Border**: `1px solid` `--bg-fill-light`
- **Text Color**: `--text-normal`
- **Shadow**: Medium elevation

## Do

- Keep content brief—1 to 2 short sentences maximum
- Use for supplementary information only
- Explain unlabeled icons
- Define abbreviations and technical terms
- Explain why elements are disabled
- Show keyboard shortcuts
- Reveal truncated text on hover
- Position tooltips so they don't cover the target

## Don't

- Use for critical information—it might never be seen
- Include interactive content like links or buttons—use Popover instead
- Write long explanations—keep it brief
- Hide essential information in tooltips
- Let tooltips overlap their target element
- Rely on tooltips for mobile—hover doesn't work reliably
- Forget keyboard accessibility
- Use tooltips for navigation

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
- Intent to see information is clear

**Regular buttons/controls: 500ms delay**
- Default recommended delay
- Prevents accidental triggering during mouse movement
- Balances responsiveness with non-intrusiveness

## Warmup/Cooldown Pattern

**Warmup (first hover):**
- User hovers element → Wait 500ms → Tooltip appears

**Instant (subsequent hovers):**
- User moves to nearby element → Tooltip appears instantly

**Cooldown:**
- User moves cursor away → Wait 1000ms cooldown period
- Next hover requires 500ms warmup again

**Why:** This pattern reduces tooltip fatigue and feels more responsive after the initial interaction.

## Content Guidelines

### Punctuation Rules

**Use periods for complete sentences:**
```
"This action cannot be undone."
```

**No periods for fragments:**
```
"Delete patent application"
```

**Multiple sentences:**
```
"This will permanently delete the application. This action cannot be undone."
```

### Keep Content Brief

- **Maximum:** 1 to 2 short sentences
- **Target:** Under 60 characters
- **If longer:** Use a Popover or inline text instead

## When NOT to Use

### Use Alternatives Instead When:

**Use Popover for interactive content:**
- Links or buttons
- Forms or inputs
- Multiple paragraphs
- Rich content like images or lists

**Why tooltips can't be interactive:**
- Tooltips disappear when you hover away
- Users can't maintain hover to click a link
- It creates a confusing, frustrating experience

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
- Your UI labels are unclear
- Redesign with better, clearer labels
- Don't use tooltips as a crutch for poor UX

**Tooltips should:**
- Supplement already clear UI
- Provide bonus information
- Never be required to understand the interface

**Rule:** If removing all tooltips breaks your UI, fix the labels—don't add more tooltips.
