---
title: Select
description: "Documentation for Select component"
---

## Description

Select is an input with a dropdown menu of predefined options—ideal for 6 or more choices. It transforms long lists into a compact, searchable interface that keeps forms clean. Perfect for countries, categories, statuses, or any predefined option set.

## Anatomy

1. **Select Input** - Display of current selection
2. **Dropdown Arrow** - Indicator that opens menu
3. **Placeholder Text** - Hint when nothing selected (optional)
4. **Dropdown Menu** - List of options
5. **Options** - Individual selectable items
6. **Search Input** - Filter options (optional)
7. **Clear Button** - Remove selection (optional)
8. **Label** - Field label (external)

## Specification

**Select Input:**
- **Width**: `320px` (default, flexible)
- **Height**: `40px`
- **Border**: `1px solid bdr-default`
- **Border Radius**: `radius-small`
- **Padding**: `spacing-2 spacing-3`
- **Background**: White (`--bg-surface-white`)
- **Font Size**: `text-base`
- **Dropdown Icon**: ▼ (right-aligned)

**Dropdown Menu:**
- **Max Width**: Matches input or wider
- **Max Height**: `280px` (scrollable)
- **Background**: White (`--bg-surface-white`)
- **Border**: `1px solid --bg-fill-light`
- **Border Radius**: `radius-medium`
- **Shadow**: Medium elevation
- **Padding**: `spacing-1 0`
- **Position**: Below input (or above if no space)

**Option Item:**
- **Height**: `36px`
- **Padding**: `spacing-2 spacing-3`
- **Font Size**: `text-base`
- **Background**: Transparent (default)
- **Hover**: Light gray (`--bg-fill-lighter`)
- **Selected**: Primary light background
- **Active**: Primary blue background

**Search Input (optional):**
- **Height**: `32px`
- **Padding**: `spacing-2 spacing-3`
- **Border Bottom**: `1px solid --bg-fill-light`
- **Margin**: `spacing-2 spacing-3`
- **Sticky**: At top of dropdown

**States:**
- **Empty**: Placeholder visible
- **Selected**: Value displayed
- **Focus**: Blue border, dropdown opens
- **Disabled**: Gray background, not interactive
- **Error**: Red border, error message
- **Loading**: Spinner in dropdown

**Placeholder:**
- **Text**: "Select an option..." or contextual
- **Color**: Gray (`--text-placeholder`)
- **Font Style**: Normal

## Do

- Do use a select list when the list values are simple and short.
- Sort the menu of options based on the frequency of use. In a form, alternative sorts such as alphabetical may be more fitting.

## Don't

- Don't use a select list if the list values need to use subtext or grouping. Use a Dropdown or Tree-select instead.

## Uses

**Primary Use Cases:**

1. **Country Selection** - Countries, states, cities
2. **Categories** - Product or content categories
3. **Status** - Status options (Active, Pending, etc.)
4. **Sorting** - Sort by options
5. **Time Zones** - Geographic time zones
6. **Languages** - Language preferences
7. **Filters** - Filter criteria with many options
8. **Assignments** - Assign to user/team

**Example Scenarios:**

**Basic Select:**
```
Country
┌────────────────────────────────┐
│ Select a country...          ▼ │
└────────────────────────────────┘

Dropdown:
┌────────────────────────────────┐
│ United States                  │
│ United Kingdom                 │
│ Canada                         │
│ Australia                      │
│ ...                            │
└────────────────────────────────┘
```

**With Search:**
```
Country
┌────────────────────────────────┐
│ United States              ▼ × │
└────────────────────────────────┘

Dropdown:
┌────────────────────────────────┐
│ 🔍 Search...                   │
├────────────────────────────────┤
│ United States              ✓   │
│ United Kingdom                 │
│ United Arab Emirates           │
└────────────────────────────────┘
```

## Behavior

**Opening:**
1. User clicks select input or arrow
2. Dropdown appears below input
3. Current selection scrolls into view
4. Search input focuses (if present)
5. Keyboard navigation enabled

**Searching:**
- Type to filter options
- Matches anywhere in text
- Highlights matching text
- Shows "No results" if none match
- Clear search to see all

**Selection:**
1. User clicks option or presses Enter
2. Option highlights
3. Value updates in input
4. Dropdown closes
5. Change event fires

**Keyboard Navigation:**
- `Arrow Down` - Next option
- `Arrow Up` - Previous option
- `Home` - First option
- `End` - Last option
- `Enter` - Select focused option
- `Escape` - Close dropdown
- `Tab` - Close and move to next field
- Type letters - Jump to matching option

**Clear Selection:**
- Click × button (if clearable)
- Value clears
- Placeholder reappears
- Dropdown closes

## Content

**Placeholders:**
- Use placeholders in select fields to let the user know the action that they need to perform (generally: "Select an option")
- They can never be a substitute for the label or hint because they do not meet a strong contrast ratio
- Use a placeholder whenever there's no logical default option to pre-select
- Examples: "Select a country...", "Choose status..."

**Option Labels:**
- Clear, concise text
- Sort logically (alphabetical, frequency, etc.)
- Group related options (optional)
- Keep under 60 characters
