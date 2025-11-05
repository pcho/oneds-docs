## Description

Divider is a subtle line that separates content into clear, organized sections. It provides visual breathing room and helps establish hierarchy without being intrusive. Available as a simple line or with centered text for labeled sections.

Think of it as a gentle pause in your interface—a visual comma that helps users scan and understand content structure.

## Anatomy

### Default Variant
1. **Line** - Horizontal separator line

### Text Variant
1. **Left Line** - Line segment before text
2. **Text Label** - Centered text (e.g., "OR", "AND", section name)
3. **Right Line** - Line segment after text

## Specification

### Default Divider

**Dimensions:**
- **Width**: `1220px` (full width, flexible)
- **Height**: `1px`
- **Color**: Typically `#ECEEF0` or `#D1D6DB` (light gray)
- **Layout**: None (simple line element)

### Text Divider

**Layout:**
- **Mode**: Horizontal row
- **Alignment**: Center-aligned
- **Width**: `1220px` (full width, flexible)
- **Height**: Auto (hug content)

**Structure:**
- Left line: Flex-grow to fill space
- Text: Fixed width, centered
- Right line: Flex-grow to fill space

**Text Styling:**
- **Typography**: Small, uppercase (optional)
- **Color**: Secondary text color
- **Padding**: Horizontal spacing around text (typically 12-16px)

**Line Styling:**
- **Height**: `1px`
- **Color**: `#ECEEF0` or `#D1D6DB`
- **Alignment**: Vertically centered with text

## Do

- Use dividers to separate distinct content sections
- Keep divider color subtle—it shouldn't dominate
- Use text dividers for logical operators (OR, AND) or section labels
- Make dividers span the full width of their container
- Use consistent divider style throughout your interface
- Consider vertical dividers for side-by-side content

## Don't

- Don't overuse dividers—white space is often better
- Don't make dividers too thick or bold
- Don't use dividers within tightly related content
- Don't stack multiple dividers without content between them
- Don't use text dividers for long labels—keep it short
- Don't use different divider styles inconsistently

## Uses

**Primary Use Cases:**

1. **List Separation** - Between list items or groups
2. **Form Sections** - Separate sections of a long form
3. **Content Blocks** - Between cards or content areas
4. **Logical Operators** - "OR" divider between options
5. **Timeline Events** - Separate events in a timeline
6. **Menu Sections** - Group related menu items
7. **Settings Panels** - Separate setting categories

**Example Scenarios:**

**Authentication Form:**
```
[Email/Password fields]

────────── OR ──────────

[Social login buttons]
```

**Settings Panel:**
```
Profile Settings
[Settings fields]

───────────────────────

Privacy Settings
[Settings fields]

───────────────────────

Notifications
[Settings fields]
```

**Search Filters:**
```
Status Filters
[Filter options]

───────────────────────

Date Range
[Date picker]
```

**Patent Application Steps:**
```
Step 1: Basic Information
[Content]

────── NEXT ──────

Step 2: Claims
[Content]

────── NEXT ──────

Step 3: Drawings
[Content]
```

**List with Section Headers:**
```
Recent Patents
────────────────────────
Patent A
Patent B
Patent C

Archived Patents
────────────────────────
Patent D
Patent E
```

## Behavior

### States

**Divider States:**
- **Default** - Standard appearance
- **Muted** - Lighter color for less emphasis
- **Bold** - Thicker or darker for stronger separation

**Text Divider:**
- Static, non-interactive
- Text remains centered regardless of line length

### Interactions

**Non-Interactive:**
- Dividers are typically non-interactive decorative elements
- No hover, focus, or click states

**Responsive Behavior:**
- Expands/contracts to fill container width
- Text divider maintains centered text position
- On mobile, consider reducing width or changing orientation

### Vertical Dividers

**Use Cases:**
- Between columns in a layout
- In toolbars or button groups
- Sidebars or navigation panels

**Specification:**
- **Width**: `1px`
- **Height**: Flexible (fill container or fixed)
- **Orientation**: Vertical (90° rotation)
- **Margin**: Horizontal spacing around divider

## Accessibility

**Screen Readers:**
- Default dividers: `aria-hidden="true"` (purely decorative)
- Text dividers: Text is read normally, treat as content
- Use semantic HTML (`<hr>`) when divider has semantic meaning
- Provide alternative text if divider indicates important separation

**Semantic HTML:**
- Use `<hr>` for thematic breaks (has semantic meaning)
- Use `<div>` or `<span>` with styling for decorative dividers
- Don't use empty paragraphs or `<br>` tags as dividers

**Example Markup:**
```html
<!-- Semantic divider (thematic break) -->
<hr>

<!-- Decorative divider (visual only) -->
<div aria-hidden="true" class="divider"></div>

<!-- Text divider -->
<div class="divider-text">
  <span>OR</span>
</div>
```

**Color & Contrast:**
- Dividers don't need high contrast (they're decorative)
- Text in text dividers must meet WCAG AA (4.5:1)
- Ensure divider is visible but not distracting
- Test in high contrast mode—shouldn't disappear or dominate

**Focus:**
- Dividers don't receive focus (non-interactive)
- Focus skips over dividers naturally
- Focus order flows logically past dividers

**Motion:**
- No animation required
- Can fade in on page load (optional)
- Respects prefers-reduced-motion if animated

**Responsiveness:**
- Maintains visibility at all screen sizes
- Adjusts width appropriately
- Consider hiding decorative dividers on very small screens if needed
