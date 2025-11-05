## Description

Popover is a floating container that appears near its trigger element, displaying rich content like menus, forms, or detailed information. More flexible than tooltips but lighter than modals, popovers provide contextual content without navigating away from the current page. They're perfect for supplementary information, quick actions, or mini-interfaces that don't warrant a full page.

Think of popovers as contextual sidebars—bringing relevant content to exactly where users need it.

## Anatomy

1. **Trigger Element** - Button, link, or control that opens popover
2. **Popover Container** - Floating card with shadow
3. **Content Area** - Flexible content (text, lists, forms, contacts, etc.)
4. **Arrow** - Pointer indicating trigger element
5. **Optional Close Button** - X to dismiss popover
6. **Optional Header** - Title or navigation
7. **Optional Footer** - Actions or additional controls

## Specification

### Popover Component Set

**Placement Variants** (12 positions):
- **Left**: Left Top, Left, Left Bottom
- **Right**: Right Top, Right, Right Bottom
- **Top**: Top Left, Top, Top Right
- **Bottom**: Bottom Left, Bottom, Bottom Right

**Container Dimensions:**
- **Width**: `270px` (default, can vary by content type)
- **Layout**: Row or column based on placement
- **Shadow**: Large shadow effect
- **Border Radius**: `12px`

### Popover Content Component Set

**Content Variants:**
- **Default**: Standard content with text and optional actions
- **List**: Vertical list of items
- **Blank**: Empty content area for custom content
- **Contact**: Contact card with avatar and details
- **Contacts - List**: Multiple contacts in list format

**Default Content:**
- **Width**: `262px` (fixed)
- **Padding**: `12px`
- **Gap**: `12px` between sections
- **Background**: White (`#FFFFFF`)
- **Border Radius**: `12px`
- **Layout**: Vertical column, right-aligned

**List Content:**
- **Width**: `262px` (fixed)
- **Padding**: `12px`
- **Gap**: `2px` between list items
- **Layout**: Vertical column, right-aligned

**Blank Content:**
- **Width**: `262px` (fixed)
- **Height**: `240px` (fixed)
- **Padding**: `12px`
- **Layout**: Vertical column, right-aligned

**Contact Content:**
- **Width**: `262px` (fixed)
- **Gap**: `12px`
- **Layout**: Vertical column

**Contacts List:**
- **Sizing**: Hug content
- **Layout**: Horizontal row
- Contains multiple contact items

## Do

- Use popovers for supplementary content and actions
- Position popover near trigger element for context
- Provide clear way to dismiss (X button, Esc key, click outside)
- Keep content focused and concise
- Use appropriate content variant for your use case
- Show loading state when fetching dynamic content
- Handle overflow with scrolling for long content
- Animate popover appearance smoothly

## Don't

- Don't use popovers for critical information—use inline or modal
- Don't make popovers too large—consider drawer or modal instead
- Don't nest popovers within popovers—confusing navigation
- Don't trigger on hover for complex content—use click
- Don't forget to position arrow correctly
- Don't make content too dense or hard to read
- Don't use for long forms—use dedicated page or modal

## Uses

**Primary Use Cases:**

1. **Action Menus** - Contextual actions and options
2. **User Profiles** - Quick view of user information
3. **Quick Actions** - Small forms or controls
4. **Rich Tooltips** - Detailed explanations with formatting
5. **Filter Panels** - Compact filter controls
6. **Navigation Menus** - Nested navigation options
7. **Notifications** - Expanded notification details
8. **Contact Cards** - Quick contact information display
9. **Help Content** - Contextual help and documentation

**Example Scenarios:**

**User Profile Popover:**
```
[Trigger: User Avatar]
              ↓
┌──────────────────────────┐
│ [Avatar] John Doe        │
│          Patent Attorney │
│ ───────────────────────  │
│ 📧 john@example.com      │
│ 📞 (555) 123-4567        │
│ ───────────────────────  │
│ [View Profile] [Message] │
└──────────────────────────┘
```

**Actions Menu:**
```
[Trigger: ⋮ Button]
         ↓
┌──────────────────┐
│ ✏️ Edit          │
│ 📋 Duplicate     │
│ 📤 Export        │
│ ───────────────  │
│ 🗑️ Delete        │
└──────────────────┘
```

**Quick Filter:**
```
[Trigger: Filter Button]
            ↓
┌──────────────────────────┐
│ Status                    │
│ ☑ Approved               │
│ ☑ Pending                │
│ ☐ Rejected               │
│                          │
│ Date Range               │
│ [Last 30 days ▼]         │
│                          │
│     [Reset] [Apply]      │
└──────────────────────────┘
```

**Contact List:**
```
[Trigger: @ Mention]
        ↓
┌──────────────────────────┐
│ [👤] Alice Smith         │
│      alice@company.com   │
├──────────────────────────┤
│ [👤] Bob Jones           │
│      bob@company.com     │
├──────────────────────────┤
│ [👤] Carol Lee           │
│      carol@company.com   │
└──────────────────────────┘
```

## Behavior

### States

**Popover States:**
- **Closed** - Not visible
- **Opening** - Fade in animation
- **Open** - Fully visible and interactive
- **Closing** - Fade out animation

**Content States:**
- **Loading** - Skeleton or spinner
- **Loaded** - Content displayed
- **Empty** - No content available
- **Error** - Failed to load content

### Interactions

**Opening:**
- **Click**: Default trigger method
- **Hover**: For simple, read-only content only
- **Focus**: For keyboard accessibility
- **Right-click**: For context menus
- **Long-press**: Touch devices

**Closing:**
- Click close button (X)
- Press Escape key
- Click outside popover (optional)
- Click trigger again (toggle)
- Select action within popover
- Automatically after action completes

**Keyboard Navigation:**
- `Tab` - Navigate through interactive elements
- `Shift+Tab` - Navigate backward
- `Escape` - Close popover
- `Arrow Keys` - Navigate lists/menus
- `Enter/Space` - Select item

**Scrolling:**
- Popover scrolls internally if content exceeds max height
- Page scroll disabled when popover open (optional)
- Scroll indicators show more content available

### Positioning

**Automatic Placement:**
1. Preferred position (prop-defined)
2. Falls back if insufficient space
3. Adjusts to stay within viewport
4. Maintains minimum spacing from edges (16px)

**Arrow Positioning:**
- Points to trigger element center
- Adjusts with popover placement
- Offset from edge to avoid clipping

**Boundary Detection:**
- Detects viewport edges
- Flips to opposite side if needed
- Slides along edge if center doesn't fit

### Animations

**Open:**
- Fade in from 0 to 1 opacity (200ms)
- Scale from 0.95 to 1.0 (200ms)
- Slide from arrow position (optional)
- Easing: Ease-out

**Close:**
- Fade out to 0 opacity (150ms)
- Scale to 0.95 (150ms)
- Easing: Ease-in

**Content Transitions:**
- Crossfade when switching content
- Smooth height transitions
- Loading skeleton fades in

**Reduced Motion:**
- Instant appearance/disappearance
- No scaling or sliding
- Respects prefers-reduced-motion

### Hover vs Click

**Hover Popovers:**
- Delay on hover (300-500ms)
- Instant on hover out
- Keep open when mouse inside popover
- Close when mouse leaves
- Use only for simple, read-only content

**Click Popovers:**
- Open immediately on click
- Persist until explicitly closed
- Support interactive content
- Better for mobile devices

## Accessibility

**Keyboard Support:**
- `Tab` / `Shift+Tab` - Navigate elements
- `Escape` - Close popover
- `Enter/Space` - Activate trigger
- `Arrow Keys` - Navigate lists (if applicable)
- Focus trap within popover (optional, based on content)

**Screen Reader Support:**
- `role="dialog"` or `role="menu"` based on content
- `aria-haspopup="true"` on trigger
- `aria-expanded="true/false"` on trigger
- `aria-labelledby` references popover title
- `aria-describedby` references popover description
- Announce on open with context

**ARIA Attributes:**
```html
<!-- Trigger -->
<button
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-controls="popover-1">
  Show Details
</button>

<!-- Popover -->
<div
  id="popover-1"
  role="dialog"
  aria-labelledby="popover-title"
  aria-modal="false">
  <h3 id="popover-title">User Details</h3>
  <!-- Content -->
</div>
```

**Focus Management:**
- Focus moves to popover on open (first focusable element or container)
- Focus trap for modal-like popovers
- No trap for supplementary popovers
- Focus returns to trigger on close
- Manage focus within scrollable content

**Menu Popovers:**
- Use `role="menu"` for action lists
- Use `role="menuitem"` for actions
- Support arrow key navigation
- Close on item selection
- Announce selected item

**Tooltips vs Popovers:**
- Tooltips: Non-interactive, hover-only, simple text
- Popovers: Interactive, click-to-open, rich content
- Don't use tooltip role for interactive popovers

**Color & Contrast:**
- Text meets WCAG AA (4.5:1 minimum)
- Focus indicators clearly visible (3:1 contrast)
- Shadow provides sufficient depth perception
- Don't rely on color alone for meaning

**Touch Targets:**
- Interactive elements minimum 44×44px
- Sufficient spacing between items
- Close button easily tappable
- Consider bottom sheet on small screens

**Loading States:**
- Show skeleton or spinner while loading
- Announce loading to screen readers
- Don't show empty state prematurely
- Provide retry on error

**Error Handling:**
- Show error message in popover
- Provide retry action
- Announce error to screen readers
- Allow dismissal
