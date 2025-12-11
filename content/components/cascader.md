---
title: Cascader
description: "Documentation for Cascader component"
---

## Description

Navigate hierarchies with confidence. Cascader displays connected dropdown panels side by side, showing one level at a time as you click through nested options. Perfect for browsing categories, locations, or org structures—any data with parent-child relationships.

Think of it as building a breadcrumb trail by clicking. Each selection opens the next level, creating a clear visual path through your hierarchy.

## Anatomy

1. **Label** - Field label with optional required indicator and info icon
2. **Input Field** - Shows selected value(s) or placeholder
3. **Prefix Icon** (optional) - Leading icon for context
4. **Suffix Icon** - Chevron or indicator showing dropdown state
5. **Dropdown Panels** - Side-by-side panels showing hierarchy levels
6. **Panel Dividers** - Vertical separators (`--border-lighter`)
7. **Dropdown Items** - Selectable options within each panel
8. **Selection Path** - Visual indication of selected items across levels

## Specification

### Cascader Field

**Variants:**
- **Default** - Single selection, shows selected path
- **Multiselect** - Multiple selections with tags/chips
- **Prefix** - Includes leading icon for additional context

**Field Dimensions:**
- **Width**: `400px` (default, can be customized)
- **Layout**: Vertical column
- **Gap**: `spacing-2` (between label and input)

**Label:**
- **Layout**: Vertical column
- **Gap**: `spacing-1.5` (internal spacing)
- **Sizing**: Hug content (auto width/height)
- **Required indicator**: `--text-danger` asterisk if required
- **Info icon**: Optional tooltip trigger

**Input Container:**
- **Layout**: Vertical column, stretch to fill
- **Sizing**: Fill horizontal, hug vertical
- **Border**: Standard input border
- **Border radius**: Matches input field design system
- **Padding**: Standard input padding

### Cascader Dropdown

**Overall Layout:**
- **Layout**: Horizontal row
- **Gap**: `spacing-2` between panels
- **Sizing**: Hug content (auto width/height)
- **Shadow**: `shadow-floating`
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border radius**: `radius-medium`

**Panel:**
- **Width**: `180px` per panel
- **Padding**: `spacing-2 0` (top/bottom)
- **Layout**: Vertical column
- **Gap**: `spacing-0.5` between items
- **Background**: `--bg-surface-white`

**Panel Divider:**
- **Width**: `1px`
- **Height**: Fill parent height
- **Color**: `--border-lighter`

**Dropdown Items:**
- Inherits from Dropdown - Items component
- Standard dropdown item styling
- Hover/selected states apply
- Right chevron icon indicates sub-items

## Do

- Show the full selection path in the input (e.g., "North America > USA > California")
- Use right-pointing chevrons for expandable options
- Keep panel widths consistent across levels
- Display all levels side by side for easy back-and-forth navigation
- Let users change selections at any level without starting over
- Provide clear hover and selected state feedback
- Show loading indicators for dynamically loaded data
- Auto-expand paths with only one option

## Don't

- Hide previously selected levels—keep the full path visible
- Make panels too narrow (minimum 150px recommended)
- Show more than 4-5 levels at once—it overwhelms users
- Block users from changing earlier selections
- Use cascader for flat lists—that's what Select is for
- Forget empty states when a level has no options
- Auto-close on intermediate selections—wait for the final pick
- Show expand arrows on options without children

## Uses

**Primary Use Cases:**

1. **Geographic Selection** - Country > State > City > District
2. **Category Browsing** - Department > Category > Subcategory > Item Type
3. **Organization Hierarchy** - Company > Division > Department > Team
4. **File System Navigation** - Drive > Folder > Subfolder > File
5. **Date Selection** - Year > Month > Day (alternative to date picker)
6. **Product Classification** - Industry > Sector > Product Type > Specific Product
7. **Patent Classification** - Class > Subclass > Group > Subgroup

**Example Scenarios:**

**Patent Office Example:**
```
Patent Class → IPC Section → IPC Class → IPC Subclass → IPC Group
A (Human Necessities) → A01 (Agriculture) → A01B (Soil Working) → A01B 1/00 (Hand tools)
```

**Location Selection:**
```
Region → Country → State/Province → City
Americas → United States → California → San Francisco
```

**Organization:**
```
Company → Department → Team → Member
Acme Corp → Engineering → Frontend → John Doe
```

**Multiselect Use Case:**
- Selecting multiple regions for a patent application territory
- Choosing multiple categories for product classification
- Picking multiple teams for access permissions

## Behavior

### States

**Input Field States:**
- **Default** - Empty with placeholder or shows selected path
- **Hover** - Visual feedback on hover
- **Focus** - Dropdown opens, focus ring visible
- **Filled** - Shows selected value(s)
- **Disabled** - Grayed out, non-interactive
- **Error** - Red border, error message below
- **Loading** - Shows loading spinner while fetching data

**Dropdown Panel States:**
- **Open** - Visible with shadow and border
- **Closed** - Hidden from view
- **Loading** - Shows skeleton or spinner for panel content
- **Empty** - "No options" message if level has no children

**Item States:**
- **Default** - Standard appearance
- **Hover** - Highlighted background
- **Selected** - Accent color, checkmark or different background
- **Expanded** - Shows next panel with children

### Interactions

**Opening:**
Click the input field or chevron. The first panel opens below, focus moves to it, and keyboard navigation activates immediately.

**Selection Flow:**
Click an item in the first panel. If it has children, a second panel appears to the right showing the next level. Keep clicking through levels until you reach a final option (no children), which closes the dropdown and updates the input.

**Multiselect Flow:**
Select at any level. Selections appear as tags in the input, the dropdown stays open for more selections, and closing happens via a close button or clicking outside.

**Changing Selection:**
Click any previous level to change your path. All subsequent panels update to show the new branch, clearing the old selection path.

**Keyboard Navigation:**
Up/Down arrows navigate within panels. Right arrow expands and moves to the next panel. Left arrow returns to the previous panel. Enter selects, Escape closes, Tab exits completely.

### Focus

Focus rings appear on the input when active and on panel items during keyboard navigation. Focus moves logically—left to right through panels, top to bottom within them—and stays trapped inside the dropdown until you close it.

### Scrolling

Each panel scrolls independently when content exceeds the max height (300-400px recommended). Scroll shadows hint at more content above or below, and selected items auto-scroll into view when panels open.

### Responsiveness

On mobile, consider a modal view instead of side-by-side panels. On narrow screens, stack panels vertically or use a stepper approach. Ensure touch targets are at least 44px tall, and consider full-screen takeover on small devices for better usability.

