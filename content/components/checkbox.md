---
title: Checkbox
description: "Documentation for Checkbox component"
---

## Description

Checkboxes let users pick none, one, or multiple options from a list. They're flexible by nature—check them, uncheck them, or leave them in that special indeterminate state. Perfect for multi-selection scenarios, settings, and parent-child relationships where you need that extra level of control.

## Anatomy

1. **Checkbox Box** - Square selection control
2. **Checkmark** - Visual indicator when selected
3. **Label** - Text describing the option
4. **Help Text** - Additional clarification (optional)
5. **Indeterminate Indicator** - Dash for partial selection (optional)

## Specification

**Checkbox:**
- **Size**: `16px × 16px` (square)
- **Border**: `--border-lighter`
- **Border Radius**: `radius-extra-small`
- **Background**: `--bg-surface-white`
- **Gap**: `spacing-2` (between checkbox and label)

**States:**

**Unchecked:**
- **Border**: `--border-lighter`
- **Background**: `--bg-surface-white`
- **Checkmark**: None
- **Description**: The option is unselected

**Checked:**
- **Border**: `--border-brand-normal`
- **Background**: `--bg-fill-brand-normal`
- **Checkmark**: `--text-white` checkmark (✓)
- **Description**: The option is selected, and the checked attribute is applied

**Indeterminate:**
- **Border**: `--border-brand-normal`
- **Background**: `--bg-fill-brand-normal`
- **Icon**: `--text-white` dash (−)
- **Description**: This state occurs when nested checkboxes under a parent checkbox are in both checked and unchecked states

**Hover (unchecked):**
- **Border**: `--border-brand-normal-hover`
- **Background**: `--bg-surface-brand-lighter`

**Hover (checked):**
- **Border**: `--border-brand-normal-hover`
- **Background**: `--bg-fill-brand-normal-hover`

**Focus:**
- **Outline**: `--border-brand-normal`
- **Outline Offset**: `2px`

**Disabled (unchecked):**
- **Border**: `--border-disabled`
- **Background**: `--bg-fill-disabled`
- **Label**: `--text-disabled`
- **Description**: Any of the previous states can also be disabled, preventing any changes to the current state

**Disabled (checked):**
- **Border**: `--border-disabled`
- **Background**: `--bg-fill-disabled`
- **Checkmark**: `--text-white` but dimmed
- **Label**: `--text-disabled`

**Label:**
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-normal` for label, `font-weight-emphasized` if description included
- **Color**: `--text-normal`
- **Line Height**: `1.5`

**Help Text:**
- **Font Size**: `text-xs`
- **Color**: `--text-lighter`
- **Margin Top**: `spacing-1`

## Do

- Use checkboxes when users can select multiple options
- Add descriptions below labels to provide extra context
- Make the entire label clickable for easier selection
- Use bold labels when including descriptions for clear hierarchy

## Don't

- Hide important information behind tooltips—make it easily accessible
- Use checkboxes for single-select options—use radio buttons instead
- Use checkboxes when selecting one option changes what's visible elsewhere—consider a segmented control
- Show errors without accompanying inline error messages
- Make labels non-clickable—the whole label should work

## Uses

**Primary Use Cases:**

1. **Multi-Selection Lists** - Select multiple items
2. **Settings/Preferences** - Enable/disable features
3. **Filters** - Apply multiple filter criteria
4. **Terms & Conditions** - Agreement checkboxes
5. **Permissions** - Grant multiple permissions
6. **Hierarchical Selection** - Parent/child relationships
7. **Bulk Actions** - Select items for bulk operations

**Example Scenarios:**

**Simple List:**
```
Select notification preferences:
☑ Email notifications
☐ SMS notifications
☑ Push notifications
```

**Hierarchical (Indeterminate):**
```
☐ Select all documents
  ☑ Patent applications
  ☐ Technical drawings
  ☐ Legal documents
```

## When NOT to Use

### Maximum 10 Checkboxes

**If you have more than 10 checkboxes, use a multi-select dropdown instead.**

**Why:**
- Too many checkboxes overwhelm users
- Long lists are hard to scan
- Dropdowns with search work better for large option sets

**Don't do this:**
```
Select countries:
☐ United States
☐ Canada
☐ Mexico
☐ United Kingdom
☐ France
☐ Germany
☐ Spain
☐ Italy
☐ Japan
☐ China
☐ Australia
... (50+ more countries)
```

**Do this:**
```
Select countries:
[Multi-select dropdown with search ▼]
```

### Use Alternatives When:

**Use Radio Button for single selection:**
- Only one option can be selected
- Mutually exclusive choices
- All options should be visible

**Use Switch for immediate actions:**
- Setting takes effect immediately
- No submit button in form
- Binary on/off toggle
- See: [Switch component](/docs/components/switch.md) for decision tree

**Use Select for:**
- More than 10 options
- Space constraints
- Searchable options needed

## Indeterminate State

**Use indeterminate state for:**
- Parent checkboxes when some (but not all) children are checked
- "Select all" when only some items are selected
- Visual convenience—not for critical information

**Important:** Never rely solely on indeterminate state to convey critical information. Always provide additional context.

## Behavior

**Selection:**
- Click the checkbox or label to toggle between checked and unchecked
- Press Space on a focused checkbox to toggle it
- State changes immediately with visual feedback

**Hierarchical Behavior:**
- When a child checkbox changes, the parent updates to checked, unchecked, or indeterminate based on sibling states
- When a parent is checked or unchecked, all children match its state
- Indeterminate state shows a dash (−) indicator

**Animation:**
- Checkmark scales in smoothly over 150ms
- Background color fades in 150ms
- All transitions feel natural and responsive
