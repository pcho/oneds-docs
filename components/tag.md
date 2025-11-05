# Tag

## Description

Tags are compact labels that categorize, label, or organize items using keywords. Like sticky notes on files, they help users quickly identify categories, statuses, or properties at a glance—perfect for filters, metadata, or visual organization of content.

## Anatomy

1. **Tag Container** - Background shape containing content
2. **Tag Text** - Label or keyword
3. **Icon** - Visual indicator (optional)
4. **Close Button** - Remove tag control (optional)
5. **Border** - Outline for outlined variant (optional)

## Specification

**Tag Container:**
- **Height**: `32px` (default)
- **Padding**: `6px` (vertical and horizontal)
- **Border Radius**: `6px`
- **Font Size**: `14px`
- **Font Weight**: 400 (normal)
- **Line Height**: `20px`
- **Gap**: `6px` between elements

**Default Tag:**
- **Background**: Light gray (`#F9FAFB`)
- **Border**: `1px solid #D1D6DB`
- **Text Color**: Dark gray (`#595959`)
- **Hover**: Slightly darker background

**Colored Tags:**
- **Blue**: Background `#F0F9FF`, Border `#7CD4FD`, Text `#1890FF`
- **Green**: Background `#ECFDF3`, Border `#A9EFC5`, Text `#52C41A`
- **Red**: Background `#FEF3F2`, Border `#FECDCA`, Text `#F04438`
- **Orange**: Background `#FFF7E6`, Border `#FFD591`, Text `#FA8C16`
- **Purple**: Background `#F9F0FF`, Border `#D3ADF7`, Text `#722ED1`
- **Cyan**: Background `#E6FFFB`, Border `#87E8DE`, Text `#13C2C2`

**Close Button:**
- **Size**: `12px`
- **Color**: Gray (`#8C8C8C`)
- **Hover**: Darker gray (`#595959`)
- **Position**: Trailing (after text)
- **Gap**: `4px` before button

**Icon:**
- **Size**: `12px`
- **Position**: Leading (before text)
- **Gap**: `4px` after icon

**Variants:**
- **Default**: Background + border
- **Filled**: Solid background, no border
- **Outlined**: Transparent background, colored border
- **Borderless**: Background only, no border

**Sizes:**
- **Small**: `24px` height, `4px` padding, `12px` font
- **Default**: `32px` height, `6px` padding, `14px` font

**States:**
- **Default**: Standard appearance
- **Hover**: Darker background (for closeable/clickable tags)
- **Focus**: Outline ring
- **Disabled**: Light gray, 40% opacity

## Do

- Use for categorization and labeling
- Keep tag text short (1-3 words)
- Use consistent colors for meaning
- Make removable tags obvious with × button
- Group related tags together
- Use appropriate colors for status
- Allow keyboard interaction for closeable tags

## Don't

- Don't use too many colors
- Don't make tags too long
- Don't use for primary actions (use Button)
- Don't overload interfaces with tags
- Don't forget disabled states
- Don't use for critical information only
- Don't make non-interactive tags look clickable

## Uses

**Primary Use Cases:**

1. **Categories** - Product types, content categories
2. **Status Labels** - Active, Pending, Completed
3. **Filters** - Selected filter criteria
4. **User Input** - Email chips, skill tags
5. **Metadata** - File types, versions, dates
6. **Labels** - Priority, difficulty, type
7. **Selections** - Multi-select indicators
8. **Technology Stack** - Languages, frameworks

**Example Scenarios:**

**Status Tags:**
```
Status: [Active] [Pending] [Completed]
```

**Category Tags:**
```
Categories: [Patent] [Trademark] [Copyright]
```

**Removable Tags:**
```
Selected: [Design × ] [Engineering × ] [Marketing × ]
```

**With Icons:**
```
[📄 Document] [🖼️ Image] [📹 Video]
```

**Color-Coded:**
```
Priority: [High] [Medium] [Low]
          (red)   (orange)  (green)
```

## Behavior

**Static Tags:**
- Display information
- No interaction
- Visual indicators only

**Closeable Tags:**
1. User clicks × button
2. Tag animates out (fade + shrink)
3. Tag removed from view
4. Change event fires
5. Surrounding tags reflow

**Clickable Tags:**
1. User clicks tag
2. Hover state shows interactivity
3. Click triggers action (filter, navigate, etc.)
4. Optional: Selected state appears

**Animation:**
- Fade in: 200ms
- Fade out: 150ms
- Remove: Shrink + fade
- Reflow: Smooth transition

### Focus

**Keyboard Focus:**
- Focus visible on × button
- Tab navigates between tags
- Focus ring indicates current tag

### Dismissing

**Close Button:**
- Click × to remove tag
- Keyboard: Focus + Enter/Space
- Fade out animation
- Triggers onChange event

## Accessibility

**Semantic HTML:**
```html
<!-- Static Tag -->
<span class="tag">Design</span>

<!-- Closeable Tag -->
<span class="tag">
  Design
  <button
    type="button"
    aria-label="Remove Design tag"
    class="tag-close">
    ×
  </button>
</span>

<!-- Clickable Tag -->
<button class="tag" type="button">
  <span class="tag-icon" aria-hidden="true">📄</span>
  Documents
</button>

<!-- Tag Group -->
<div role="group" aria-label="Selected filters">
  <span class="tag">
    Design
    <button aria-label="Remove Design filter">×</button>
  </span>
  <span class="tag">
    Engineering
    <button aria-label="Remove Engineering filter">×</button>
  </span>
</div>
```

**ARIA Attributes:**
- `aria-label` on close buttons (describe what will be removed)
- `role="group"` for tag groups
- `aria-label` on group describes purpose
- Icons marked `aria-hidden="true"`
- `role="button"` for clickable tags (or use `<button>`)

**Keyboard Navigation:**
- `Tab` - Focus next closeable/clickable tag
- `Enter/Space` - Close tag or trigger action
- Focus only on interactive elements
- Skip static tags in tab order

**Screen Reader Support:**
- Read tag text
- Announce close button with context
- Read group labels
- Announce when tag removed
- Include status in label ("Priority: High")

**Focus Management:**
- Clear focus indicators
- Only interactive tags focusable
- Focus moves to next tag after removal
- Logical tab order

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Don't rely on color alone
- Use text + color combination
- Status tags include text label
- Icons supplementary, not primary

**Touch Targets:**
- Close buttons minimum 24×24px
- Adequate spacing between tags
- Full close button area tappable
- Consider larger sizes on mobile

**Responsive:**
- Wrap to multiple lines
- Maintain spacing
- Touch-friendly sizes
- Consider tag groups scrollable
