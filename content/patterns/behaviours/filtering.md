---
title: Filtering
description: "Documentation for Filtering component"
---

# Filtering Pattern

## Overview

Filtering helps users cut through data clutter to find exactly what they need. Instead of endless scrolling, they apply criteria to zero in on relevant items—transforming overwhelming datasets into focused, actionable views.

You'll find filtering everywhere: tables, lists, and data views across the system.

## When to Use

Use filtering when:

- **Large datasets** - More than 20-30 items that benefit from narrowing
- **Multiple criteria** - Users need to search by various attributes
- **Frequent searches** - Users repeatedly look for specific types of items
- **Data exploration** - Users don't know exact search terms but want to browse by category
- **List views** - Tables, cards, or any repeating data presentation
- **Reporting** - Users need to slice data for analysis

## When Not to Use

Don't use filtering when:

- Dataset is very small (< 10 items)
- Only one search criterion exists (use simple search instead)
- Data doesn't have filterable attributes
- Adding filters would complicate simple interfaces

## Anatomy

### 1. Filter Trigger
Button or icon that opens filter panel/drawer
- **Label**: "Filter" or "Filters"
- **Icon**: Filter funnel icon
- **Badge**: Count of active filters (optional)

### 2. Filter Panel/Drawer
Container holding all filter controls
- **Header**: Title + close button
- **Filter groups**: Organized by category
- **Filter controls**: Various input types
- **Footer**: Apply + Clear actions

### 3. Active Filter Display
Visual representation of applied filters
- **Filter chips/tags**: One per active filter
- **Clear individual**: X button on each chip
- **Clear all**: Button to remove all filters

### 4. Filter Types
Different input controls for different data types:
- **Text input**: Keyword search within field
- **Select dropdown**: Single choice from list
- **Multi-select**: Multiple choices from list
- **Date picker**: Single date or date range
- **Range slider**: Numeric range (price, size, etc.)
- **Checkbox list**: Multiple boolean options
- **Radio buttons**: Single choice from small list

### 5. Results Count
Shows number of matching items
- **Format**: "X items" or "Showing X of Y"
- **Position**: Near table/list header
- **Updates**: Real-time as filters change

## Specification

### Filter Trigger Button

```
Dimensions:
- Height: 40px
- Padding: 8px 16px
- Gap: 8px (icon to text)

States:
- Default: Secondary button style
- With active filters: fill-accent background
- Badge: Red dot or number showing active filter count

Icon:
- Filter funnel icon
- Size: 16px × 16px
- Color: Inherits from button

Badge (Active Filters):
┌─────────────────┐
│ [🔽] Filter  ②  │  ← Badge shows count
└─────────────────┘

or

┌─────────────────┐
│ [🔽] Filter  ●  │  ← Dot indicates active
└─────────────────┘
```

### Filter Drawer (Side Panel)

```
Dimensions:
- Width: 400px (desktop)
- Height: Full viewport height
- Position: Right side (slides in from right)
- Background: surface-white
- Shadow: Large elevation

Header:
- Height: 64px
- Padding: spacing-4 spacing-6
- Border bottom: 1px solid --bg-fill-light
- Title: "Filters" (18px, font-weight-semibold)
- Close button: X icon (right-aligned)

Content Area:
- Padding: spacing-6
- Overflow: Scroll vertically
- Gap between filter groups: spacing-6

Footer:
- Height: 72px
- Padding: spacing-4 spacing-6
- Border top: 1px solid --bg-fill-light
- Background: surface-white (sticky)
- Buttons: [Clear All] (secondary) + [Apply] (primary)
```

### Filter Panel (Inline)

```
Dimensions:
- Width: Fill container
- Max height: 400px (collapsible)
- Background: surface-secondary
- Border: 1px solid --bg-fill-light
- Border radius: radius-medium
- Padding: 16px

Layout:
- Multi-column grid (2-4 columns based on screen size)
- Gap: 16px between filters
- Responsive: Stack to single column on mobile

Position:
- Above table/list
- Collapsible (starts collapsed or expanded based on context)
- Toggle: "Show filters" / "Hide filters" button
```

### Filter Group

```
Structure:
┌─────────────────────────────────────┐
│ Status                              │  ← Group Label
│ ☐ Active                            │
│ ☐ Pending                           │  ← Filter Options
│ ☐ Archived                          │
└─────────────────────────────────────┘

Spacing:
- Group label: 14px, font weight 600, margin bottom 8px
- Options: 16px vertical gap
- Group separation: 24px margin bottom
```

### Filter Types Specifications

**Text Input:**
```
Type: Text field
Width: 100% of filter panel
Height: 40px
Placeholder: "Search [field name]..."
Icon: Search icon (left side)
Clear button: X icon (right side, appears when text entered)

Example:
┌─────────────────────────────────────┐
│ 🔍  Search patent number...      [×]│
└─────────────────────────────────────┘
```

**Select Dropdown:**
```
Type: Single-select dropdown
Width: 100% of filter panel
Height: 40px
Placeholder: "Select [field name]"
Icon: Chevron down

Example:
┌─────────────────────────────────────┐
│ Select status                    [▼]│
└─────────────────────────────────────┘
```

**Multi-Select:**
```
Type: Checkbox list or multi-select dropdown
Options: Scrollable list if > 6 items
Max height: 200px
Search within options: If > 10 items

Example (Checkbox List):
Assignee
☑ John Doe (23)      ← Count shown
☐ Jane Smith (15)
☑ Bob Wilson (8)
☐ Alice Brown (42)

Example (Multi-Select Dropdown):
┌─────────────────────────────────────┐
│ 2 selected                       [▼]│
└─────────────────────────────────────┘
Dropdown shows:
☑ John Doe
☐ Jane Smith
☑ Bob Wilson
```

**Date Picker:**
```
Type: Date range picker
Width: 100% of filter panel
Height: 40px

Single Date:
┌─────────────────────────────────────┐
│ MM/DD/YYYY                      [📅]│
└─────────────────────────────────────┘

Date Range:
┌──────────────────┬──────────────────┐
│ Start date   [📅]│ End date     [📅]│
└──────────────────┴──────────────────┘

Quick Presets:
• Today
• Last 7 days
• Last 30 days
• Last 90 days
• This year
• Custom range
```

**Range Slider:**
```
Type: Numeric range slider
Width: 100% of filter panel

Display:
Amount: $0 - $10,000

[──●━━━━━━━━●──] ← Slider with two handles
$1,200      $8,500 ← Current values

Inputs (optional):
Min: [1200]  Max: [8500]
```

**Checkbox List:**
```
Type: Multiple checkboxes
Spacing: 8px between items
Max visible: 6 items, then scroll

Status
☑ Active (145)      ← Item count shown
☐ Pending (23)
☐ Review (8)
☑ Archived (512)

[+] Show more (12) ← If > 6 options
```

### Active Filter Display (Chips)

```
Position: Above table, below filter trigger
Layout: Horizontal row, wraps if needed
Spacing: 8px between chips

Chip Specifications:
- Height: 32px
- Padding: spacing-small spacing-3
- Background: Light blue (#EDF1FF)
- Border: 1px solid #91D5FF
- Border radius: radius-small
- Font size: 14px
- Close icon: × (16px, right side)

Example:
┌────────────────────────────────────────────┐
│ Status: Active [×]  Assignee: John Doe [×] │
│ Date: Last 30 days [×]  [Clear all]        │
└────────────────────────────────────────────┘

Format: "[Field]: [Value] [×]"

Clear All Button:
- Style: Link/tertiary button
- Position: Right side or after last chip
- Text: "Clear all" or "Clear filters"
- Icon: × (optional)
```

### Results Count

```
Position: Near table header, above data rows
Format Options:
- "1,234 items"
- "Showing 1,234 of 5,678"
- "1,234 patents found"

Styling:
- Font size: text-base
- Color: txt-secondary
- Font weight: font-weight-normal

Example in Context:
┌────────────────────────────────────────────┐
│ [🔽] Filter ② | 1,234 of 5,678 patents    │
├────────────────────────────────────────────┤
│ Status: Active [×]  Assignee: John Doe [×] │
└────────────────────────────────────────────┘
[Table data...]
```

## Behavior Patterns

### 1. Opening Filter Panel

**Drawer (Side Panel):**

```
User Action:
1. User clicks "Filter" button
2. Drawer slides in from right
3. Overlay appears behind drawer
4. Focus moves to drawer (first filter or close button)
5. Main content remains visible but dimmed

Animation:
- Duration: 300ms
- Easing: Ease-out
- Drawer: Slides in from right (translateX)
- Overlay: Fades in (opacity 0 → 0.4)

State:
- Filter button: Highlighted/active state
- Drawer: Open
- Body scroll: Disabled (no scrolling page behind drawer)
```

**Inline Panel:**

```
User Action:
1. User clicks "Show filters" or filter icon
2. Filter panel expands below button
3. Content below shifts down
4. Panel animates into view

Animation:
- Duration: 200ms
- Easing: Ease-out
- Panel: Expands from 0 height to full height
- Icon: Rotates (if chevron/arrow)

State:
- Button text: "Show filters" → "Hide filters"
- Panel: Visible and expanded
```

### 2. Applying Filters

**Apply on Change (Immediate):**

```
Behavior:
1. User changes any filter value
2. Filters apply immediately
3. Results update in real-time
4. Active filter chips appear
5. Results count updates
6. No "Apply" button needed

Best for:
- Fast queries (< 200ms response)
- Small to medium datasets
- Local/client-side filtering
- Good network conditions

User Experience:
+ Immediate feedback
+ Fewer clicks
+ Faster exploration
- Can be overwhelming if slow
- May trigger many requests
```

**Apply on Button Click (Batch):**

```
Behavior:
1. User changes filter values
2. Filters marked as "pending" (visual indicator)
3. User clicks "Apply" button
4. All filters apply together
5. Loading state shown
6. Results update once
7. Drawer closes (optional)

Best for:
- Slow queries (> 200ms response)
- Large datasets
- Server-side filtering
- Complex filter combinations
- Poor network conditions

User Experience:
+ Control over when to apply
+ Single request for all filters
+ Works better for slow queries
- Extra click required
- Less immediate feedback

Apply Button States:
Default: [Apply]
Pending changes: [Apply] (enabled, highlighted)
No changes: [Apply] (disabled)
Loading: [⟳ Applying...]
```

### 3. Filter Interaction

**Text Input:**

```
Behavior:
- Type to search (immediate or debounced)
- Debounce: 300ms after user stops typing
- Clear button appears when text entered
- Press Enter to apply (if batch mode)
- Escape clears input

Example:
User types: "US2024..."
After 300ms: Filter applies, shows results
User clicks [×]: Text cleared, filter removed
```

**Dropdown Select:**

```
Behavior:
- Click to open dropdown
- Click option to select
- Dropdown closes on selection
- Selected value displays in dropdown
- Apply immediately or on "Apply" click

Single Select:
[Select status ▼]
↓ (user clicks)
┌─────────────────┐
│ ○ Active        │
│ ● Pending       │ ← Selected
│ ○ Archived      │
└─────────────────┘

Multi-Select:
[2 selected ▼]
↓ (user clicks)
┌─────────────────┐
│ ☑ Active        │ ← Selected
│ ☐ Pending       │
│ ☑ Archived      │ ← Selected
└─────────────────┘
```

**Date Range:**

```
Behavior:
- Click field to open calendar
- Select start date
- Select end date
- Calendar closes on second selection
- Or click "Apply" in calendar
- Quick presets provide shortcuts

Interaction Flow:
1. User clicks "Start date" → Calendar opens
2. User selects date → Start date fills, focus moves to "End date"
3. User selects end date → Calendar closes, filter applies

Quick Preset Click:
User clicks "Last 30 days" →
Start date: 30 days ago
End date: Today
Filter applies immediately
```

**Range Slider:**

```
Behavior:
- Drag handle to adjust min/max
- Values update in real-time
- Apply on release (immediate mode)
- Or apply on "Apply" button (batch mode)
- Can type values directly in inputs

Interaction:
1. User drags left handle right → Min value increases
2. User drags right handle left → Max value decreases
3. Handles cannot cross each other
4. On release: Filter applies (immediate) or marked pending (batch)
```

**Checkbox List:**

```
Behavior:
- Click checkbox to toggle
- Click label to toggle checkbox
- Multiple selections allowed
- Apply immediately or on "Apply"
- "Select all" / "Deselect all" options (optional)

Show More/Less:
Initial: Show 6 options + "[+] Show more (12)"
Click "Show more": Expands to show all options
Click "Show less": Collapses back to 6

Search in List (if > 10 options):
┌─────────────────────────────────┐
│ 🔍  Search assignees...          │
└─────────────────────────────────┘
☑ John Doe (matches search)
☑ Jane Doe (matches search)
```

### 4. Active Filter Display

**Showing Active Filters:**

```
Behavior:
- Filter chips appear above table
- One chip per active filter
- Format: "[Field]: [Value]"
- If multiple values: Show first + count
- Example: "Status: Active +2 more"

Chip Interactions:
1. Hover: Highlight chip, show × button clearly
2. Click ×: Remove that specific filter
3. Results update immediately
4. Chip fades out (200ms animation)

Multiple Values Display:
Option 1: Separate chips
☐ Status: Active [×]  Status: Pending [×]

Option 2: Combined with count
☐ Status: 2 selected [×]
   Hover tooltip shows: Active, Pending

Option 3: Show all values
☐ Status: Active, Pending [×]
```

**Clear Individual Filter:**

```
User Action:
1. User clicks × on filter chip
2. Chip fades out (200ms)
3. Filter removed from active filters
4. Filter control resets in panel
5. Results update immediately
6. Results count updates

Animation:
- Chip opacity: 1 → 0
- Chip scale: 1 → 0.8 (slight shrink)
- Duration: 200ms
- Remaining chips: Slide left to fill gap
```

**Clear All Filters:**

```
User Action:
1. User clicks "Clear all" button
2. All filter chips fade out
3. All filter controls reset
4. Results show unfiltered data
5. Results count updates to total
6. Filter panel resets (if open)

Confirmation (Optional):
For complex filters with many selections:
┌─────────────────────────────────────┐
│ Clear all filters?              [×] │
├─────────────────────────────────────┤
│ This will remove all 8 active       │
│ filters. Your table will show all   │
│ items.                              │
├─────────────────────────────────────┤
│         [Cancel]  [Clear All]       │
└─────────────────────────────────────┘
```

### 5. Filter Persistence

**Session Persistence (Default):**

```
Behavior:
- Filters persist during session
- User navigates away and returns → Filters still applied
- Page refresh → Filters persist
- Browser close → Filters cleared

Implementation:
- Store in sessionStorage
- Restore on page load
- Clear on browser close
```

**URL Parameters:**

```
Behavior:
- Filters encoded in URL query string
- Shareable links with filters
- Browser back/forward navigates filter states
- Bookmarkable filtered views

Example URL:
/patents?status=active&assignee=john-doe&date=last-30-days

Benefits:
+ Shareable filtered views
+ Browser history works
+ Deep linking to filtered states
+ Works with external links

Implementation:
- Update URL on filter change (replaceState or pushState)
- Parse URL on page load
- Handle invalid filter params gracefully
```

**Saved Filters (Advanced):**

```
Feature:
- Users can save filter combinations
- Name saved filters
- Quick access to frequently used filters
- Personal filter library

UI:
┌─────────────────────────────────────┐
│ Saved Filters                    [+]│  ← Add new
├─────────────────────────────────────┤
│ My Active Patents               ⋮  │
│ Status: Active • Assignee: Me       │
│                                     │
│ Pending Reviews                 ⋮  │
│ Status: Pending • Date: This week   │
│                                     │
│ High Priority                   ⋮  │
│ Priority: High • Status: Active     │
└─────────────────────────────────────┘

Actions (⋮ menu):
- Apply filter
- Edit filter
- Rename
- Delete
- Set as default (auto-apply on page load)
```

**Default Filters:**

```
Behavior:
- System or user can set default filters
- Applied automatically on page load
- User can clear/override defaults
- Indicated visually (optional)

Use Cases:
- "My Items" default (assignee = current user)
- "Active Items" default (status = active)
- Department filter (location = user's dept)
- Date range default (created in last 90 days)

Indication:
┌────────────────────────────────────┐
│ ℹ️ Default filters applied         │
│ Showing only your active patents   │
│ [Clear defaults] [Customize]       │
└────────────────────────────────────┘
```

### 6. Closing Filter Panel

**Drawer Close:**

```
Methods:
1. Click × close button
2. Click overlay/backdrop
3. Press Escape key
4. Click "Apply" button (optional behavior)

Animation:
- Duration: 250ms
- Easing: Ease-in
- Drawer: Slides out to right (translateX)
- Overlay: Fades out (opacity 0.4 → 0)

Behavior:
- If "Apply on change": Filters already applied, just close
- If "Batch apply":
  - Applied changes: Close normally
  - Unapplied changes: Show confirmation or revert changes

Confirmation for Unapplied Changes:
┌─────────────────────────────────────┐
│ Discard filter changes?         [×] │
├─────────────────────────────────────┤
│ You have unapplied filter changes.  │
│                                     │
│ [Discard]  [Apply & Close]         │
└─────────────────────────────────────┘
```

**Inline Panel Close:**

```
Methods:
1. Click "Hide filters" button
2. Collapse icon/chevron

Animation:
- Duration: 200ms
- Easing: Ease-in
- Panel: Collapses to 0 height
- Content below: Slides up

State:
- Button text: "Hide filters" → "Show filters"
- Icon: Rotates back
- Filters remain applied (chips still visible)
```

### 7. Loading States

**During Filter Application:**

```
Loading Indicators:

Option 1: Skeleton in Table
┌────────────────────────────────────┐
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└────────────────────────────────────┘

Option 2: Loading Overlay
┌────────────────────────────────────┐
│        ⟳ Loading results...         │
│                                    │
│ [Current results remain visible    │
│  but dimmed beneath overlay]       │
└────────────────────────────────────┘

Option 3: Progress Bar
┌────────────────────────────────────┐
│ [████████────────] Filtering...    │
└────────────────────────────────────┘

Button State:
[⟳ Applying...] (disabled during loading)
```

**Optimistic UI:**

```
Behavior:
- Update UI immediately (assume success)
- Show results based on expected state
- If request fails: Revert changes
- Show error notification

Benefits:
+ Feels instant
+ Better perceived performance
+ Smoother experience

Risks:
- Must handle failures gracefully
- Can confuse if many failures
- Requires good error recovery
```

### 8. Empty States

**No Results:**

```
Display:
┌────────────────────────────────────┐
│                                    │
│          🔍                         │
│                                    │
│      No results found              │
│                                    │
│ Try adjusting your filters to      │
│ see more results.                  │
│                                    │
│ [Clear All Filters]                │
│                                    │
└────────────────────────────────────┘

Message Variations:
- "No patents match your filters"
- "No results found for 'keyword'"
- "0 items match your criteria"

Actions:
- Clear all filters
- Modify filters (suggestions)
- Help/tips for better searching
```

**No Filters Available:**

```
If data has no filterable fields:

┌────────────────────────────────────┐
│ No filters available               │
│                                    │
│ This view cannot be filtered.      │
│ Use search to find specific items. │
└────────────────────────────────────┘
```

## Responsive Behavior

### Desktop (≥1024px)

```
Layout:
- Filter drawer: 400px width, slides from right
- OR inline panel: Full width above table, multi-column grid
- Active filters: Horizontal chips above table
- Results count: Visible near table header

Filter Drawer Advantages:
+ Doesn't affect table layout
+ More vertical space for filters
+ Can stay open while browsing
+ Professional appearance

Inline Panel Advantages:
+ Faster access (no drawer animation)
+ See filters and results simultaneously
+ Better for simple filter sets
```

### Tablet (768px - 1023px)

```
Layout:
- Filter drawer: 360px width (slightly narrower)
- OR inline panel: 2-column grid
- Active filters: May wrap to multiple rows
- Results count: Still visible

Adjustments:
- Slightly smaller drawer
- Fewer columns in inline panel
- Touch-friendly targets (44px minimum)
```

### Mobile (<768px)

```
Layout:
- Filter drawer: Full screen or bottom sheet
- Active filters: Horizontal scroll or wrap
- Results count: Prominent at top
- Simplified filter controls

Filter Drawer Options:

Option 1: Full Screen Modal
┌────────────────────────┐
│ [←]  Filters      [×] │
├────────────────────────┤
│                        │
│ [Filter controls...]   │
│                        │
│                        │
├────────────────────────┤
│ [Clear] [Apply (123)]  │
└────────────────────────┘

Option 2: Bottom Sheet
┌────────────────────────┐
│                        │
│ [Table data visible]   │
│                        │
├────────────────────────┤
│ ━━ (handle)            │
│ Filters                │
│ [Filter controls...]   │
└────────────────────────┘

Active Filters (Mobile):
< Status: Active [×] Date: Last 30 days [×] >
 ← Horizontal scroll →

Filter Button:
[🔽 Filter (2)] ← Badge shows count prominently
```

## Accessibility

### Keyboard Navigation

**Drawer/Panel:**
- `Tab` - Navigate between filter controls
- `Shift + Tab` - Navigate backward
- `Escape` - Close drawer
- `Enter` - Apply filter (if batch mode)
- Arrow keys - Navigate within dropdowns, radio groups

**Filter Controls:**
- Text input: Standard typing
- Checkboxes: `Space` to toggle
- Radio buttons: Arrow keys to change selection
- Dropdowns: `Enter` to open, arrows to navigate, `Enter` to select
- Date picker: Arrow keys to navigate calendar
- Range slider: Arrow keys to adjust values

**Active Filter Chips:**
- `Tab` to focus chip
- `Enter` or `Space` to remove filter
- Arrow keys to navigate between chips

### Focus Management

**Opening Drawer:**
```
1. User clicks "Filter" button
2. Drawer opens
3. Focus moves to first filter control or close button
4. Focus trapped within drawer
5. Tab cycles through drawer elements only
```

**Applying Filters:**
```
1. User clicks "Apply" (if batch mode)
2. Focus returns to "Filter" trigger button
3. Drawer closes (optional)
4. Screen reader announces results update
```

**Removing Filter Chip:**
```
1. User clicks × on chip
2. Chip removed
3. Focus moves to next chip or "Clear all" button
4. If last chip: Focus moves to filter button
```

### Color Contrast

**Filter UI:**
- All text meets WCAG AA (4.5:1 minimum)
- Filter chips: Blue on white (6.5:1) ✓
- Active filter badge: Red on white (5.2:1) ✓
- Focus indicators: Visible 3:1 contrast ✓

**Don't Rely on Color:**
- Checkbox: Visual mark + label
- Active filters: Chip style + text label
- Required fields: Asterisk + label text
- Filter count: Number + text ("2 filters")

## Best Practices

### Do

- **Show filter count** - Badge on filter button shows number of active filters
- **Make filters discoverable** - Clear filter button/icon, prominent placement
- **Group related filters** - Organize by category (Status, Date, Assignee, etc.)
- **Show results count** - "Showing X of Y" gives immediate feedback
- **Persist filters** - Maintain filters during session or in URL
- **Provide clear all** - Easy way to reset all filters at once
- **Handle no results** - Helpful message and suggestions
- **Use appropriate controls** - Match filter type to data type
- **Respond quickly** - Optimize queries, use debouncing, show loading states
- **Make chips removable** - Individual × buttons on each active filter
- **Sort filter options** - Alphabetically or by frequency/relevance
- **Show option counts** - "Active (145)" shows how many items per filter
- **Provide quick presets** - Common date ranges, popular combinations

### Don't

- **Don't hide filters** - Make them easily accessible
- **Don't use too many filters** - Limit to 6-8 commonly used filters
- **Don't forget mobile** - Adapt drawer/panel for small screens
- **Don't lose context** - Keep table visible while filtering (drawer) or show results count
- **Don't make filters confusing** - Clear labels, intuitive controls
- **Don't forget empty states** - Handle no results gracefully
- **Don't let filters break** - Validate inputs, handle errors
- **Don't force perfect queries** - Allow iterative refinement
- **Don't overwhelm users** - Progressive disclosure, "Show more" for long lists
- **Don't lose active filters** - Always show what's currently applied
- **Don't make clearing hard** - Clear individual and clear all should be easy
- **Don't ignore loading states** - Show feedback during filtering

## Related Patterns

- **[Table](./table.md)** - Primary use case for filtering
- **[Drawer](./drawer.md)** - Filter panel implementation
- **[Global Search](./global-search.md)** - Complementary search pattern
- **[Action Bar](./action-bar.md)** - Often appears with filtered results
- **[Common Actions](./common.md)** - Clear, Apply, Cancel behaviors

## Implementation Checklist

- [ ] Filter button clearly visible and accessible
- [ ] Filter drawer/panel opens and closes smoothly
- [ ] All filter types implemented correctly
- [ ] Filters apply immediately or on "Apply" click (choose one)
- [ ] Active filter chips displayed above results
- [ ] Individual chip removal works
- [ ] "Clear all" button removes all filters
- [ ] Results count updates with each filter change
- [ ] No results state handled gracefully
- [ ] Filters persist during session (or URL)
- [ ] Loading states shown during filtering
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces filter changes and results
- [ ] ARIA attributes properly implemented
- [ ] Focus management handles drawer open/close
- [ ] Mobile responsive (full screen or bottom sheet)
- [ ] Touch targets meet minimum size (44px)
- [ ] Filter options show counts (optional but recommended)
- [ ] Quick preset filters available (if applicable)
- [ ] Saved filters feature (if applicable)

---

*Pattern identified from analysis of 8+ files using filtering extensively across the IP management system. This pattern ensures consistency in how users narrow down and explore data throughout the application.*
