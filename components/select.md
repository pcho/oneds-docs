## Description

Select is an input with a dropdown menu of predefined, selectable items—typically 6 or more options. It transforms long lists of choices into a compact, searchable interface that keeps forms clean while offering powerful selection capabilities. Perfect for countries, categories, statuses, or any predefined set of options.

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
- **Border**: `1px solid #D1D6DB`
- **Border Radius**: `6px`
- **Padding**: `8px 12px`
- **Background**: White (`#FFFFFF`)
- **Font Size**: `14px`
- **Dropdown Icon**: ▼ (right-aligned)

**Dropdown Menu:**
- **Max Width**: Matches input or wider
- **Max Height**: `280px` (scrollable)
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `8px`
- **Shadow**: Medium elevation
- **Padding**: `4px 0`
- **Position**: Below input (or above if no space)

**Option Item:**
- **Height**: `36px`
- **Padding**: `8px 12px`
- **Font Size**: `14px`
- **Background**: Transparent (default)
- **Hover**: Light gray (`#F5F5F5`)
- **Selected**: Primary light (`#F0F9FF`)
- **Active**: Primary blue background

**Search Input (optional):**
- **Height**: `32px`
- **Padding**: `8px 12px`
- **Border Bottom**: `1px solid #ECEEF0`
- **Margin**: `8px 12px`
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
- **Color**: Gray (`#BFBFBF`)
- **Font Style**: Normal

## Do

- Do use a select list when the list values are simple and short.
- Sort the menu of options based on the frequency of use. In a form, alternative sorts such as alphabetical may be more fitting.

## Don't

- Don’t use a select list if the list values need to use subtext or grouping. Use a Dropdown or Tree-select instead.

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

## Accessibility

**Semantic HTML:**
```html
<label for="country-select">Country</label>
<select
  id="country-select"
  name="country"
  required
  aria-required="true">
  <option value="">Select a country...</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</select>

<!-- Or custom select with combobox -->
<label for="country-input">Country</label>
<div class="select-wrapper">
  <input
    type="text"
    id="country-input"
    role="combobox"
    aria-expanded="false"
    aria-controls="country-listbox"
    aria-autocomplete="list"
    placeholder="Select a country...">

  <ul
    id="country-listbox"
    role="listbox"
    aria-label="Countries"
    hidden>
    <li role="option" aria-selected="true">United States</li>
    <li role="option">United Kingdom</li>
  </ul>
</div>
```

**ARIA Attributes:**
- `role="combobox"` on input
- `aria-expanded` toggles true/false
- `aria-controls` links to listbox
- `role="listbox"` on dropdown
- `role="option"` on items
- `aria-selected="true"` on selected option
- `aria-activedescendant` for keyboard focus

**Keyboard Navigation:**
- Full keyboard support required
- Arrow keys navigate options
- Type to search/jump
- Enter to select
- Escape to close
- Tab to exit

**Screen Reader Support:**
- Announce select role
- Read current selection
- Announce expanded/collapsed state
- Read option labels
- Announce filtered results count
- Read "No results" message

**Focus Management:**
- Clear focus indicator
- Focus visible on input and options
- Maintain focus in dropdown
- Return focus to input on close

**Search Accessibility:**
- Search input labeled clearly
- Announce filtered results
- Read "X results found"
- Clear search accessible

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Selected state meets 3:1
- Focus indicator 3:1
- Don't rely on color alone
- Checkmark + background for selection

**Touch Targets:**
- Input field minimum 44×44px
- Options minimum 44×44px
- Adequate spacing
- Full option area tappable

**Error States:**
```html
<label for="country-select">Country *</label>
<select
  id="country-select"
  aria-invalid="true"
  aria-describedby="country-error">
  <option value="">Select...</option>
</select>
<p id="country-error" role="alert">
  Please select a country
</p>
```

**Native vs Custom:**
- Native `<select>` most accessible
- Custom select needs ARIA
- Maintain keyboard behavior
- Test with screen readers

**Responsive:**
- Full-width on mobile
- Native picker on mobile (consider)
- Touch-friendly options
- Bottom sheet alternative
