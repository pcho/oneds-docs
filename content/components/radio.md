---
title: Radio
description: "Documentation for Radio component"
---

## Description

Radio buttons let users pick exactly one option from a set of mutually exclusive choices. Named after old car radios where pressing one button popped out the others, they make it crystal clear: only one selection at a time. Simple, familiar, and perfect for "pick one" scenarios.

## Anatomy

1. **Radio Circle** - Circular selection indicator
2. **Inner Dot** - Fill when selected
3. **Label** - Option text
4. **Radio Group** - Container for related options
5. **Helper Text** - Additional guidance (optional)

## Specification

**Radio Button:**
- **Size**: `16px × 16px` (circle)
- **Border**: `2px solid bdr-default`
- **Border Radius**: `radius-round` (perfect circle)
- **Background**: White (`--bg-surface-white`)
- **Gap**: `spacing-2` (between radio and label)

**Radio States:**

**Unchecked:**
- **Border**: `2px solid bdr-default`
- **Background**: White
- **Inner Dot**: None

**Checked:**
- **Border**: `2px solid fill-accent` (primary blue)
- **Inner Dot**: `8px` circle, primary blue (`--bg-fill-brand-normal`)
- **Centered**: Dot centered in circle

**Hover (unchecked):**
- **Border**: `2px solid #0050B3`
- **Transition**: 200ms ease

**Hover (checked):**
- **Border**: `2px solid #0050B3`
- **Inner Dot**: Darker blue (`#0050B3`)

**Focus:**
- **Outline**: `2px solid fill-accent`
- **Outline Offset**: `2px`
- **Border**: Maintains checked/unchecked border

**Disabled (unchecked):**
- **Border**: `2px solid bdr-default`
- **Background**: Light gray (`--bg-fill-lighter`)
- **Label**: Gray (`--text-placeholder`)
- **Cursor**: Not-allowed

**Disabled (checked):**
- **Border**: `2px solid bdr-default`
- **Inner Dot**: Gray (`--border-lighter`)
- **Background**: Light gray (`--bg-fill-lighter`)
- **Label**: Gray (`--text-placeholder`)

**Label:**
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-normal`
- **Color**: Primary text (`--text-normal`)
- **Line Height**: `1.5`
- **Cursor**: Pointer (entire label clickable)

**Radio Group:**
- **Layout**: Vertical stack (default)
- **Gap**: `spacing-4` between options
- **Horizontal**: Optional, use `gap: spacing-6`

**Sizes:**

**Small:**
- **Circle**: `14px × 14px`
- **Inner Dot**: `6px`
- **Font Size**: `text-xs`

**Default (Medium):**
- **Circle**: `16px × 16px`
- **Inner Dot**: `8px`
- **Font Size**: `text-base`

**Large:**
- **Circle**: `20px × 20px`
- **Inner Dot**: `10px`
- **Font Size**: `text-lg`

**Helper Text:**
- **Font Size**: `text-xs`
- **Color**: Gray (`--text-lighter`)
- **Position**: Below radio group or individual option
- **Margin Top**: `spacing-1`

## Do

- Group related options together visually
- Write clear, concise labels
- Use for 2-7 options—beyond that, use a dropdown
- Show all options at once so users can compare
- Pre-select a default when there's an obvious choice
- Use vertical layout for easier scanning
- Make the entire label clickable
- Provide a clear group label or legend

## Don't

- Use for single yes/no questions—use a checkbox or switch
- Use for more than 7 options—switch to a select dropdown
- Write vague or ambiguous labels
- Forget to group related radio buttons
- Allow deselection—once selected, one option must stay selected
- Use horizontal layout when labels are long
- Forget disabled state styling

## Uses

**Primary Use Cases:**

1. **Single Selection** - Choose one shipping method, payment type
2. **Settings** - Privacy settings, notification preferences
3. **Filters** - Sort by price, date, relevance
4. **Surveys** - Rating scales, multiple choice questions
5. **Forms** - Gender, country, status selection
6. **Wizards** - Step-by-step option selection
7. **Preferences** - Theme selection, language choice

**Example Scenarios:**

**Shipping Method:**
```
Select shipping method:

○ Standard Shipping (5-7 days) — Free
○ Express Shipping (2-3 days) — $9.99
● Overnight Shipping (1 day) — $24.99
```

**Payment Type:**
```
Payment method:

● Credit Card
○ PayPal
○ Bank Transfer
```

**Filter Options:**
```
Sort by:

○ Newest first
● Most relevant
○ Price: Low to high
○ Price: High to low
```

**Yes/No Question:**
```
Do you want to receive email notifications?

● Yes
○ No
```

**Horizontal Layout:**
```
Patent Status:

○ Pending  ● Approved  ○ Rejected
```

## When NOT to Use

### Use Select/Dropdown for More Than 7 Options

**If you have more than 7 options, use a select dropdown instead.**

**Why:**
- Too many radio buttons eat up vertical space and overwhelm users
- Long lists are hard to scan
- Dropdowns provide search and grouping capabilities

**Don't do this:**
```
Select country:
○ United States
○ Canada
○ Mexico
○ United Kingdom
○ France
○ Germany
○ Spain
○ Italy
... (50+ more countries)
```

**Do this:**
```
Select country:
[Dropdown with search ▼]
```

**Sweet spot:** 2-7 options for radio buttons

### Use Alternatives When:

**Use Checkbox for multi-select:**
- Multiple options can be selected
- Not mutually exclusive
- "Select all that apply"

**Use Switch for immediate toggle:**
- Binary on/off setting
- Takes effect immediately
- No submit button
- See: [Switch component](/docs/components/switch.md)

**Use Tabs for view switching:**
- Changing between different views
- Navigation between sections
- Visual distinction important

**Use Segmented Control for:**
- 2-4 options
- View mode switching (list/grid)
- Compact horizontal layout needed

## Default Selection Strategy

### When to Pre-Select an Option

**Pre-select for 2-3 options when:**
- There's a clear default choice
- The most common option is obvious
- Users will likely keep the default

**Example:**
```
Shipping method:
● Standard (5-7 days) — Free  ← Pre-selected
○ Express (2-3 days) — $9.99
```

**Require explicit choice for 4+ options when:**
- There's no obvious default
- All choices are equally valid
- The decision needs conscious attention

**Example:**
```
Privacy setting:
○ Public
○ Friends only
○ Private
○ Custom
← No pre-selection forces users to choose deliberately
```

**Why:** With many options, pre-selection can cause users to overlook the question entirely. No default ensures they make a conscious choice.

## Arrow Keys Don't Loop

**When navigating with arrow keys:**

```
User presses Down on last option → Stays on last option
User presses Up on first option → Stays on first option
```

**No looping at boundaries**—this is standard behavior across most design systems.

**Why:** It provides clear feedback that you've reached the end or beginning of the list.

## Behavior

### Selection

**Clicking Radio:**
1. User clicks radio circle or label
2. Previous selection unchecks (dot disappears)
3. New selection checks (dot appears)
4. Transition smooth (200ms)
5. Change event fires

**Clicking Label:**
- Entire label area clickable
- Same behavior as clicking circle
- Easier target for users

**Keyboard Selection:**
- Arrow keys change selection
- Selected option gets checked
- Previous option unchecks automatically
- Circular navigation (wrap around)

### Focus

**Gaining Focus:**
1. User tabs to radio group
2. First radio (or checked radio) receives focus
3. Focus outline appears

**Within Group:**
- Arrow keys move focus AND selection
- Only one radio in group tabbable (roving tabindex)
- Focus visible on current selection
- Tab exits group to next element

**Losing Focus:**
- Tab moves to next form element
- Focus outline disappears
- Selection remains
- No validation yet (usually on submit)

### Dismissing

**Radio buttons don't dismiss:**
- Once an option is selected, cannot deselect all
- Always one option selected in group
- To allow "none," add an explicit "None" option
- Clicking same radio does nothing

**Form Reset:**
- Resets to initial/default value
- Or to first option if no default
- Maintains single-selection rule

### States

**Unchecked:**
- Empty circle
- Neutral border color
- Available for selection

**Checked:**
- Filled dot
- Primary color border and dot
- Currently selected option

**Hover:**
- Border color darkens
- Cursor pointer
- Shows interactivity

**Focus:**
- Outline ring appears
- Keyboard navigation indicator
- Clear visual distinction

**Disabled:**
- Gray colors
- Not interactive
- May show tooltip explaining why
- Still visible but not selectable
