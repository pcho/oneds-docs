## Description

Drawer is a panel that slides in from the side of the screen, providing focused workspace without leaving the current page. It's perfect for forms, details, settings, or any task that benefits from dedicated screen space while maintaining context of the underlying page.

Think of it as a temporary workspace that slides in when you need it and slides away when you're done—keeping your main content always in view.

## Anatomy

1. **Overlay** - Semi-transparent backdrop (`rgba(12, 12, 22, 0.6)`) with optional blur
2. **Drawer Container** - Main panel sliding from edge
3. **Drawer Header** - Top section with title, description, actions
4. **Close Button** - X icon to dismiss drawer
5. **Content Area** - Scrollable main content (uses `_SLOT` component)
6. **Shadow** - Drawer-specific shadow for depth

### Header Variants
- **With Border** - Bottom border separates header from content
- **Without Border** - Seamless transition to content

## Specification

### Drawer (Full Component)

**Dimensions:**
- **Overall Canvas**: `1888px × 1168px` (full viewport representation)
- **Drawer Panel**: `472px × fill height`
- **Position**: Right edge (can be customized to left, top, bottom)

**Layout:**
- **Mode**: Vertical column
- **Justify**: Stretch
- **Align**: Stretch
- **Sizing**: Fixed width, fill height

### Overlay

**Style:**
- **Background**: `rgba(12, 12, 22, 0.6)` (dark with 60% opacity)
- **Backdrop Filter**: `blur(0px)` (can be customized)
- **Size**: Full viewport
- **Z-index**: Below drawer, above page content

### Drawer Card

**Dimensions:**
- **Width**: `472px` (fixed)
- **Height**: Fill available height
- **Background**: White (`#FFFFFF`)
- **Shadow**: Drawer shadow (`-2px 0px 4px rgba(0,0,0,0.06)` + additional layers)
- **Border Radius**: `12px 12px 0px 0px` (rounded top corners)

**Layout:**
- **Mode**: Vertical column
- **Sizing**: Fixed width, fill height
- **Position**: Absolute right edge (slides in from right)

### Drawer Header

**With Border:**
- **Layout**: Vertical column
- **Sizing**: Fill horizontal, hug vertical
- **Background**: White (`#FFFFFF`)
- **Border Radius**: `12px 12px 0px 0px`
- **Border Bottom**: Present (separates from content)

**Without Border:**
- Same as above, but no bottom border
- **Use**: Seamless appearance

**Content:**
- Title (optional)
- Description (optional)
- Tabs (optional)
- Action buttons (optional)
- Up/Down toggle (optional)
- Close button

### Content Area (_SLOT)

**Layout:**
- **Mode**: Vertical column
- **Justify**: Center
- **Align**: Center
- **Padding**: `33px 127px` (example, customizable)
- **Sizing**: Fill horizontal, fill vertical
- **Overflow**: Scroll vertically if content exceeds height

**Placeholder Style:**
- **Background**: `#F9F5FF` (light purple)
- **Border**: `1px dashed #D6BBFB`
- **Dash**: `2px 2px`

### Shadow Specification

**Drawer Shadow (Layered):**
```
-2px 0px 4px 0px rgba(0, 0, 0, 0.06),
-7px 0px 7px 0px rgba(0, 0, 0, 0.05),
-17px 0px 10px 0px rgba(0, 0, 0, 0.03),
-30px 0px 12px 0px rgba(0, 0, 0, 0.01),
-47px 0px 13px 0px rgba(0, 0, 0, 0)
```
Creates depth effect on left edge of drawer

## Do

- Use drawers for focused tasks that don't require full page
- Provide clear close mechanisms (X button, Esc key, click overlay)
- Keep drawer width proportional (typically 320-600px)
- Use header to show context and actions
- Allow scrolling within drawer if content is long
- Animate drawer entry/exit smoothly
- Trap focus within drawer when open
- Return focus to trigger element on close

## Don't

- Don't use drawers for critical primary actions—use pages instead
- Don't make drawers too wide (max ~50-60% viewport width)
- Don't forget to handle keyboard accessibility
- Don't allow main content to scroll when drawer is open
- Don't nest drawers within drawers—use modals or separate pages
- Don't hide the close button—always provide an escape
- Don't make overlay too dark—users should see underlying context

## Uses

**Primary Use Cases:**

1. **Form Entry** - Add/edit records without leaving page
2. **Detail Views** - Show detailed information about selected item
3. **Settings Panels** - Application or user settings
4. **Filters** - Advanced filter controls for data views
5. **Comments/Notes** - Add annotations or feedback
6. **History/Activity** - View logs or activity feeds
7. **Cart/Basket** - E-commerce shopping cart review
8. **Help/Documentation** - Contextual help without leaving page

**Example Scenarios:**

**Patent Application Drawer:**
```
┌─ Overlay (darken page) ────────────────────┐
│                                      [Drawer]│
│ Main Page Content           ┌───────────────┤
│ (slightly visible            │ New Patent    │
│  behind overlay)             │ [X]           │
│                              ├───────────────┤
│                              │ Applicant:    │
│                              │ [Input]       │
│                              │               │
│                              │ Title:        │
│                              │ [Input]       │
│                              │               │
│                              │ [Scrollable   │
│                              │  content...]  │
│                              │               │
│                              │ [Submit]      │
│                              └───────────────┘
└─────────────────────────────────────────────┘
```

**Filter Drawer:**
- Opens from right side
- Shows all available filters
- Apply/Reset buttons in header
- Main content remains visible behind overlay

**Detail View Drawer:**
- Click list item → drawer opens with details
- Edit button in header
- Related actions available
- Close returns to list view

**Settings Drawer:**
- Icon button opens drawer from right
- Tabbed sections (Account, Privacy, Notifications)
- Save/Cancel in header or footer
- Changes apply on save

## Behavior

For detailed behavior patterns, including states, interactions, animations, position variants, scrolling, and responsive behavior, see the **[Drawer Behavior Patterns](../patterns/behaviours/drawer.md)** documentation.

## Accessibility

**Keyboard Support:**
- `Tab` / `Shift+Tab` - Navigate within drawer
- `Escape` - Close drawer
- Focus trap prevents tabbing to page behind overlay
- All controls keyboard accessible

**Screen Reader Support:**
- `role="dialog"` on drawer container
- `aria-modal="true"` indicates modal behavior
- `aria-labelledby` references drawer title
- `aria-describedby` references drawer description (if present)
- Opening announced: "Dialog opened, [Title]"
- Closing announced: "Dialog closed"

**ARIA Attributes:**
```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="drawer-title"
  aria-describedby="drawer-description">
  <h2 id="drawer-title">New Patent Application</h2>
  <p id="drawer-description">Enter patent details</p>
  <!-- Content -->
</div>
```

**Focus Management:**
- Focus moves to drawer on open (first focusable element or drawer itself)
- Focus trap keeps keyboard navigation within drawer
- Tab cycles through drawer elements only
- Escape always closes (emergency exit)
- Focus returns to trigger on close

**Focus Trap Implementation:**
- Capture focus on first/last element
- Prevent focus escaping drawer
- Allow focus on drawer content only
- Release trap on close

**Overlay Interaction:**
- Overlay click closes drawer (mouse users)
- Screen reader announces overlay as clickable area
- Touch users can tap or swipe to dismiss

**Color & Contrast:**
- All text meets WCAG AA (4.5:1 minimum)
- Close button has clear contrast
- Focus indicators visible (3:1 minimum contrast)
- Overlay doesn't obscure content completely (maintain context)

**Motion & Animation:**
- Respect `prefers-reduced-motion`
- Provide instant open/close option
- Keep animations smooth and purposeful
- Don't block interaction during animation

**Mobile Considerations:**
- Touch targets minimum 44×44px
- Swipe down to dismiss (bottom sheets)
- Full-width on small screens
- Consider native modal patterns
- Handle orientation changes gracefully
