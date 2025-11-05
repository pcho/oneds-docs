## Description

Collapse is a space-saving component that hides and reveals content with a smooth animation. It features a clickable header that expands or collapses the content below, perfect for FAQs, accordion menus, or any interface where you need to progressively disclose information.

Use collapse when you have content that's important but doesn't need to be visible all the time—let users choose what they want to see.

## Anatomy

1. **Header** - Clickable area that triggers expand/collapse
2. **Expand Icon** - Visual indicator (chevron/arrow) showing open/closed state
3. **Title** - Main header text
4. **Content Area** - Expandable section that shows/hides
5. **Background** - White container (`#FFFFFF`)

### Header Variants
- **Default** - Standard size with full styling
- **Small** - Compact version for dense layouts
- **Text** - Minimal styling, text-focused

### Icon States
- **Open** - Rotated to indicate expanded state (chevron pointing down)
- **Closed** - Default position (chevron pointing right/up)

## Specification

### Collapse (Full Component)

**Variants × States:**
- Default + Open/Closed
- Small + Open/Closed
- Text + Open/Closed

**Container:**
- **Width**: `444px` (fixed, can be customized)
- **Layout**: Vertical column
- **Sizing**: Fixed width, hug height
- **Background**: White (`#FFFFFF`)

**Positioning (within component set):**
- Default variants: Y positions 20, 80px
- Small variants: Y positions 336, 388px
- Text variants: Y positions 632, 684px

### Header - Expand Icon

**Open State:**
- **Layout**: Column, center-justified and aligned
- **Sizing**: Hug content (auto width/height)
- **Transform**: Rotated (typically 90° or 180°)

**Closed State:**
- **Layout**: Column, center-justified and aligned
- **Sizing**: Hug content (auto width/height)
- **Transform**: Default rotation (0°)

### Header

**Default Variant:**
- **Sizing**: Hug content
- **Padding**: Standard header padding
- **Typography**: Default body font

**Small Variant:**
- **Sizing**: Hug content
- **Padding**: Reduced padding
- **Typography**: Smaller font size

**Text Variant:**
- **Width**: `438px` (fixed)
- **Sizing**: Fixed width, hug height
- **Style**: Minimal, text-focused

## Do

- Use collapse for non-critical content that takes up space
- Provide clear visual feedback when opening/closing
- Animate the expansion/collapse smoothly
- Make the entire header clickable, not just the icon
- Keep related content together in one collapse section
- Use consistent icon direction (right for closed, down for open)
- Allow keyboard interaction (Enter/Space to toggle)

## Don't

- Don't hide critical information users need immediately
- Don't use collapse for primary navigation
- Don't animate too slowly—keep it snappy (200-300ms)
- Don't make the clickable area unclear
- Don't nest too many levels of collapse (max 2-3)
- Don't forget to indicate which items are expandable
- Don't disable collapse on mobile unless necessary

## Uses

**Primary Use Cases:**

1. **FAQ Sections** - Question as header, answer as content
2. **Accordion Menus** - Progressive disclosure of options
3. **Settings Panels** - Group related settings under headers
4. **Data Tables** - Expandable rows showing details
5. **Filters** - Collapsible filter groups
6. **Documentation** - Section headers that expand to show content
7. **Forms** - Optional or advanced sections

**Example Scenarios:**

**Patent Application Form:**
```
▼ Applicant Information (Expanded)
  [Form fields visible]

▶ Claims (Collapsed)
▶ Drawings (Collapsed)
▶ Abstract (Collapsed)
```

**FAQ:**
```
▶ How do I file a patent?
▶ What documents do I need?
▼ How long does the process take? (Expanded)
  The patent application process typically takes...
▶ What are the filing fees?
```

**Settings Panel:**
```
▼ Display Settings (Expanded)
  - Theme: Dark
  - Font Size: Medium

▶ Privacy Settings (Collapsed)
▶ Notification Settings (Collapsed)
```

**Filter Panel:**
```
▼ Patent Status (Expanded)
  ☑ Approved
  ☐ Pending
  ☐ Rejected

▶ Date Range (Collapsed)
▶ Technology Area (Collapsed)
```

## Behavior

### States

**Collapse States:**
- **Closed** - Content hidden, icon points right/up
- **Open** - Content visible, icon points down
- **Hover** - Header shows hover state
- **Focus** - Focus ring on keyboard navigation
- **Disabled** - Grayed out, non-interactive
- **Loading** - Content area shows skeleton/spinner

**Icon States:**
- **Closed**: Chevron right or up (0°)
- **Open**: Chevron down (90° or 180° rotation)
- **Transition**: Smooth rotation animation

### Interactions

**Opening:**
1. User clicks header or presses Enter/Space
2. Icon rotates to open position
3. Content area expands with smooth animation
4. Content fades in as it expands
5. Focus remains on header

**Closing:**
1. User clicks expanded header
2. Icon rotates to closed position
3. Content fades out
4. Content area collapses with smooth animation
5. Focus remains on header

**Keyboard Navigation:**
- `Tab` - Focus next collapse header
- `Shift+Tab` - Focus previous collapse header
- `Enter` or `Space` - Toggle open/closed
- `Arrow Down` - Move to next header (in accordion)
- `Arrow Up` - Move to previous header (in accordion)
- `Home` - Jump to first header (optional)
- `End` - Jump to last header (optional)

**Accordion Behavior (Multiple Collapses):**
- **Independent**: Multiple sections can be open simultaneously
- **Exclusive**: Opening one closes others (accordion pattern)
- **Configuration**: Choose behavior based on use case

### Animations

**Expand Animation:**
- **Duration**: 200-300ms
- **Easing**: Ease-out (starts fast, ends slow)
- **Properties**: Height, opacity
- **Icon**: Rotates simultaneously with expansion

**Collapse Animation:**
- **Duration**: 200-300ms
- **Easing**: Ease-in (starts slow, ends fast)
- **Properties**: Height, opacity
- **Icon**: Rotates simultaneously with collapse

**Reduced Motion:**
- Respects `prefers-reduced-motion`
- Instant expand/collapse with no animation
- Icon still rotates or changes instantly

### Focus

- Header receives focus ring on keyboard navigation
- Focus visible on all interactive elements
- Focus remains on header after toggling
- Focus moves logically through stacked collapses
- Content within expanded section is tabbable

### Size Variants

**Default:**
- Standard padding and font sizes
- Use for most applications
- Best readability and clickability

**Small:**
- Reduced padding, smaller fonts
- Use in constrained spaces
- Dense layouts like sidebars

**Text:**
- Minimal styling, full width (`438px`)
- Text-focused appearance
- Cleaner look for content-heavy areas

## Accessibility

**Keyboard Support:**
- `Tab` / `Shift+Tab` - Navigate between collapse headers
- `Enter` or `Space` - Toggle open/closed state
- `Arrow Up/Down` - Navigate headers (accordion pattern)
- All interactions available without mouse

**Screen Reader Support:**
- Header has `role="button"` (if not using `<button>`)
- `aria-expanded="true"` when open, `"false"` when closed
- `aria-controls` links header to content panel
- Content panel has unique `id` referenced by `aria-controls`
- Announce state changes: "Expanded" or "Collapsed"
- Descriptive labels: "Applicant Information section, collapsed, button"

**ARIA Attributes:**
```html
<button
  aria-expanded="false"
  aria-controls="panel-1"
  id="header-1">
  Header Title
</button>
<div
  id="panel-1"
  aria-labelledby="header-1"
  role="region">
  Content...
</div>
```

**Focus Management:**
- Visible focus indicator on header
- Focus remains on header after toggle
- Content receives logical tab order when expanded
- Focus trap not needed (collapse isn't modal)

**Semantic HTML:**
- Use `<button>` for headers when possible
- Proper heading hierarchy (`<h2>`, `<h3>`, etc.)
- Landmark regions for major sections
- Logical document outline

**Motion & Animation:**
- Respect `prefers-reduced-motion` setting
- Provide instant open/close option
- Don't rely on animation alone to convey state
- Icon + text clearly indicates open/closed state

**Color & Contrast:**
- Text meets WCAG AA contrast (4.5:1 minimum)
- Don't rely on color alone for state indication
- Icon provides non-color visual cue
- Focus indicators have 3:1 contrast minimum

**Mobile Considerations:**
- Touch targets minimum 44×44px
- Sufficient spacing between collapse headers
- Swipe gestures optional, not required
- Works well in portrait and landscape
