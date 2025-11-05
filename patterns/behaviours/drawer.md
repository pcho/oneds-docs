# Drawer Behaviors

Drawers (also called side panels or slide-outs) are overlay panels that slide in from the edge of the viewport, providing contextual content or actions without leaving the current page. This guide covers drawer behavior patterns for consistent, accessible implementation.

## Core Concept

Drawers are semi-modal UI elements that:
- Slide in from viewport edge (typically right side)
- Overlay page content with backdrop
- Show related or detailed information
- Allow interaction with drawer content
- Dismiss to return to main page

## States and Transitions

### Drawer States

**1. Closed (Hidden)**
- Drawer off-screen, not visible
- Not in focus trap
- No backdrop visible
- Page fully interactive
- No scroll lock

**2. Opening (Transition)**
- Drawer sliding into view
- Backdrop fading in
- Animation in progress (300-400ms)
- Page scroll locking
- Not yet fully interactive

**3. Open (Visible)**
- Drawer fully visible on screen
- Backdrop at full opacity
- Content fully interactive
- Focus trap active
- Page scroll locked

**4. Closing (Transition)**
- Drawer sliding out of view
- Backdrop fading out
- Animation in progress (300-400ms)
- Focus returning to trigger
- Becoming non-interactive

### Overlay States

**Hidden:**
- Opacity: 0
- Not visible
- No pointer events
- Drawer closed

**Fading In:**
- Opacity: 0 → 0.5-0.6
- Transition: 200-300ms
- Drawer opening
- Ease-out

**Visible:**
- Opacity: 0.5-0.6 (50-60% black)
- Fully visible
- Clickable (dismisses drawer)
- Drawer open

**Fading Out:**
- Opacity: 0.6 → 0
- Transition: 200-300ms
- Drawer closing
- Ease-in

## Opening Behavior

### Triggering a Drawer

**User Actions:**
- Click button/link ("View details", "Edit", "Filters")
- Click row action in table
- Keyboard shortcut
- Programmatic trigger (rare)

**Opening Sequence:**
1. User triggers drawer (button click, etc.)
2. Backdrop fades in (200-300ms, opacity 0 → 0.6)
3. Drawer slides in from edge (300-400ms)
4. Body scroll locks (prevent page scrolling)
5. Focus moves to first focusable element in drawer
6. Focus trap activates (user cannot tab to main page)

**Animation Specifications:**

**Right Drawer (Most Common):**
```css
/* Closed */
transform: translateX(100%);
visibility: hidden;

/* Opening */
transform: translateX(0);
transition: transform 300ms ease-out;
```

- **Duration**: 300-400ms
- **Easing**: Ease-out
- **Transform**: `translateX(100%)` → `translateX(0)`
- **Overlay**: Opacity `0` → `0.6` (simultaneous)

**Left Drawer:**
```css
/* Closed */
transform: translateX(-100%);

/* Opening */
transform: translateX(0);
```

### Initial Focus

**Focus Rules:**
1. **Form drawers**: Focus first input field
2. **Action drawers**: Focus primary button
3. **Content drawers**: Focus drawer header or close button
4. **Filter drawers**: Focus first filter control

**Example:**
```
┌─────────────────────────┐
│ Filter Results     [×]  │ ← Or focus close button
├─────────────────────────┤
│ Status                  │
│ ┌─────────────────────┐ │
│ │ [FOCUSED]           │ │ ← Focus first filter
│ └─────────────────────┘ │
└─────────────────────────┘
```

## Closing Behavior

### Dismissal Methods

**1. Close Button (×)**
- Click × button in drawer header
- Most explicit dismissal method
- Always available
- Returns focus to trigger element

**2. Escape Key**
- Press `Escape` key
- Universal close method
- Works from anywhere in drawer
- Same behavior as close button
- Should always be enabled

**3. Overlay/Backdrop Click**
- Click backdrop (outside drawer)
- Quick dismissal method
- May be disabled for complex forms
- Does not save changes
- Returns focus to trigger

**4. Primary Action Completion**
- Complete task (Save, Apply, Submit)
- Drawer closes automatically after success
- Changes are saved
- Focus returns appropriately

**5. Cancel/Back Button**
- Cancel action or go back
- Closes without saving changes
- May show confirmation if data entered
- Returns focus to trigger

### Closing Sequence

**Standard Close:**
1. User triggers close (click ×, press Escape, etc.)
2. Drawer slides out to edge (300-400ms)
3. Backdrop fades out (200-300ms, simultaneous)
4. Body scroll unlocked
5. Focus returns to trigger element
6. Focus trap deactivates
7. Drawer removed from accessible tree

**Animation Specifications:**

**Right Drawer Close:**
- **Duration**: 300-400ms
- **Easing**: Ease-in
- **Transform**: `translateX(0)` → `translateX(100%)`
- **Overlay**: Opacity `0.6` → `0` (simultaneous)

### Confirmation on Close

**When to Confirm:**
- User has entered data in form
- Unsaved changes present
- Destructive action (discard draft)

**Confirmation Dialog:**
```
User edits form → Clicks × → Show modal:

┌─────────────────────────────────┐
│ Discard Changes?            [×] │
├─────────────────────────────────┤
│                                 │
│ You have unsaved changes that   │
│ will be lost.                   │
│                                 │
├─────────────────────────────────┤
│ [Discard]           [Keep editing]│
└─────────────────────────────────┘
```

**Implementation:**
- Track form dirty state
- Show confirmation modal on close attempt
- Modal appears on top of drawer
- "Keep editing" returns to drawer
- "Discard" closes both modal and drawer

## Interaction Patterns

### Keyboard Navigation

**Standard Keys:**
- `Tab` - Navigate forward through drawer elements
- `Shift + Tab` - Navigate backward through drawer elements
- `Escape` - Close drawer
- `Enter` - Activate focused button/link
- `Space` - Activate button or toggle checkbox

**Focus Trap:**
- Focus trapped within drawer when open
- Cannot tab to main page content
- Tab from last element returns to first
- Shift+Tab from first returns to last

**Optional Keys:**
- `Home` - Scroll to top of drawer (for long content)
- `End` - Scroll to bottom of drawer
- `Ctrl/Cmd + F` - Search within drawer (if searchable)

### Overlay/Backdrop Click

**Behavior:**
- Click overlay (outside drawer) → drawer closes
- Click drawer content → no action (stays open)
- Drag gesture on mobile can dismiss (optional)

**When to Disable:**
- Complex forms with entered data
- Multi-step processes
- Required actions (force user to complete or explicitly cancel)
- Critical information that must be acknowledged

**When to Enable:**
- Simple content viewers
- Information panels
- Quick actions
- Filters (apply on close)

### Scroll Behavior

**Drawer Content Scrolling:**
- Drawer body scrolls independently from page
- Header and footer remain fixed (sticky)
- Scroll shadows appear when content scrollable
- Smooth scrolling within drawer

**Page Scroll Locking:**
- Page scrolling disabled when drawer open
- Prevents confusion and background movement
- Re-enabled on drawer close
- Body fixed or overflow hidden

**Example:**
```css
/* When drawer opens */
body {
  overflow: hidden;
  /* Or */
  position: fixed;
  width: 100%;
}
```

**Long Content:**
- Drawer header: Fixed at top
- Drawer body: Scrollable middle section
- Drawer footer: Fixed at bottom (if present)
- Scroll indicators (shadows) show scrollability

## Position Variants

### Right Drawer (Default)

**Characteristics:**
- Slides from right edge
- Most common pattern
- Natural for LTR languages
- Good for detail views

**Use Cases:**
- View item details
- Edit forms
- Settings panels
- Filters

**Animation:**
```
transform: translateX(100%) → translateX(0)
```

### Left Drawer

**Characteristics:**
- Slides from left edge
- Often used for navigation
- Primary actions or menus
- May be persistent (collapsible)

**Use Cases:**
- Navigation menu
- Table of contents
- File browser
- Tool palette

**Animation:**
```
transform: translateX(-100%) → translateX(0)
```

### Top Drawer (Uncommon)

**Characteristics:**
- Slides from top edge
- Rare pattern
- Used for full-width content

**Use Cases:**
- Notifications panel
- Search results
- Announcements

**Animation:**
```
transform: translateY(-100%) → translateY(0)
```

### Bottom Drawer (Mobile)

**Characteristics:**
- Slides from bottom edge
- Common on mobile devices
- Often called "bottom sheet"
- Can be dismissible by swipe down

**Use Cases:**
- Mobile action sheets
- Mobile filters
- Share options
- Quick actions

**Animation:**
```
transform: translateY(100%) → translateY(0)
```

**Swipe Gesture:**
- Swipe down to dismiss
- Resistance at full height
- Snap back if swipe insufficient
- Close if swipe threshold met

## Responsive Behavior

### Desktop (>1024px)

**Layout:**
- Fixed width drawer (e.g., 472px, 600px)
- Slides from right (typically)
- Backdrop covers full viewport
- Full functionality available

**Sizes:**
- Small: 360px-400px
- Medium: 472px-500px
- Large: 600px-720px
- Extra Large: 800px+ (rare)

### Tablet (768px - 1024px)

**Layout:**
- Slightly narrower drawer (e.g., 400px)
- May overlay content completely
- Backdrop still present
- Reduced side margins

### Mobile (<768px)

**Layout Options:**

**Option 1: Full-Width Drawer**
- Drawer takes 100% width
- Effectively becomes full-screen
- Top bar with back/close button
- No backdrop needed

**Option 2: Partial-Width Drawer**
- Drawer takes ~90% width
- Small backdrop visible on edge
- Swipe to dismiss
- Common for Android

**Option 3: Bottom Sheet**
- Slides up from bottom
- Can be partial height
- Draggable handle at top
- Swipe down to dismiss

**Mobile Considerations:**
- Simpler layout
- Larger touch targets
- Consider full-screen for complex forms
- Bottom sheet for quick actions

## Content Structure

### Header

**Elements:**
- Title (drawer purpose)
- Close button (×)
- Optional: Back button (for multi-step)
- Optional: Action buttons (Save, Apply)

**Layout:**
```
┌─────────────────────────────────┐
│ [← Back] Drawer Title      [×]  │
└─────────────────────────────────┘
```

### Body

**Content:**
- Main drawer content
- Forms, lists, details
- Scrollable if exceeds viewport
- Proper spacing and hierarchy

### Footer (Optional)

**Elements:**
- Primary action button
- Secondary action button
- Cancel/Close link

**Layout:**
```
┌─────────────────────────────────┐
│         [Cancel]     [Apply]    │
└─────────────────────────────────┘
```

## Special Drawer Types

### Detail Drawer

**Purpose:** Show detailed information about selected item

**Characteristics:**
- Read-only or edit mode toggle
- Tabbed sections for organization
- Related actions at top or bottom
- "Edit" button to switch modes

### Filter Drawer

**Purpose:** Provide filtering options

**Characteristics:**
- Multiple filter controls
- Live preview of results (optional)
- "Apply" button to execute filters
- "Clear all" to reset
- Shows filter count in trigger button

### Form Drawer

**Purpose:** Create or edit items

**Characteristics:**
- Form fields organized logically
- Validation feedback
- Save/Cancel buttons in footer
- Confirmation on discard changes

### Navigation Drawer

**Purpose:** Primary navigation menu

**Characteristics:**
- Often persistent (collapsible)
- May push content instead of overlay
- Icon + text menu items
- Collapsible to icon-only

## Accessibility

### Semantic HTML

```html
<aside
  role="dialog"
  aria-modal="true"
  aria-labelledby="drawer-title"
  class="drawer drawer-right"
  hidden>

  <div class="drawer-header">
    <button aria-label="Go back">←</button>
    <h2 id="drawer-title">Filter Results</h2>
    <button aria-label="Close drawer">×</button>
  </div>

  <div class="drawer-body">
    <!-- Drawer content -->
  </div>

  <div class="drawer-footer">
    <button>Cancel</button>
    <button class="primary">Apply Filters</button>
  </div>
</aside>
```

### ARIA Attributes

- `role="dialog"` - Identifies as dialog (drawer is a type of dialog)
- `aria-modal="true"` - Indicates modal behavior
- `aria-labelledby` - Links to title element
- `aria-hidden="true"` - On background when drawer open
- `hidden` attribute when drawer closed

### Screen Reader Behavior

- Announce "Dialog opened" when drawer appears
- Read drawer title
- Announce focused element
- Ignore background content (aria-hidden)
- Announce "Dialog closed" on dismissal

### Keyboard Support

**Required:**
- `Tab` / `Shift+Tab` - Navigate elements
- `Escape` - Close drawer
- `Enter` - Activate buttons
- Focus trap within drawer

### Reduced Motion

- Instant appearance (no slide animation)
- Fade only (no transform)
- Respect `prefers-reduced-motion: reduce`

## Best Practices

### Do
- Slide from consistent edge (usually right)
- Lock body scroll when open
- Trap focus within drawer
- Return focus on close
- Support Escape key
- Show loading states
- Provide clear close options
- Keep content focused
- Use for contextual information

### Don't
- Don't open drawer without user action
- Don't forget backdrop
- Don't forget focus management
- Don't make too wide on desktop (max ~720px)
- Don't stack multiple drawers
- Don't forget mobile experience
- Don't use for critical flows (use modal instead)
- Don't forget keyboard support

## Related Patterns

Drawers work closely with other patterns:

- **[Modal](./modal.md)** - Alternative for critical actions requiring full attention
- **[Filtering](./filtering.md)** - Common use case for drawer panels
- **[Common Actions](./common.md)** - Save, Cancel, Close buttons in drawers
- **[Notification](./notification.md)** - Feedback after drawer actions complete
- **[Table](./table.md)** - Drawers often used for table filters and row details
- **[Contextual Views](../layouts/contextual-views.md)** - Detail panels in contextual navigation

## Common Drawer Use Cases

### Filter Drawer
Most common use case for advanced filtering:
```
┌────────────────────────────────────┐
│ [×] Filters                        │
├────────────────────────────────────┤
│                                    │
│ Status                             │
│ ☑ Active  ☐ Pending  ☑ Filed      │
│                                    │
│ Date Range                         │
│ [Last 30 days ▼]                   │
│                                    │
│ Jurisdiction                       │
│ [Select...] [×] US [×] EP          │
│                                    │
├────────────────────────────────────┤
│ [Clear all]      [Apply Filters]  │
└────────────────────────────────────┘
```
See **[Filtering](./filtering.md)** for complete pattern details.

### Detail Drawer
Show detailed information about selected item:
```
┌────────────────────────────────────┐
│ [×] Patent Details                 │
├────────────────────────────────────┤
│ US2024-12345                       │
│ AI-Powered Device                  │
│                                    │
│ Status: Filed                      │
│ Date: Jan 15, 2024                 │
│ Assignee: John Doe                 │
│                                    │
│ [View Full Record] [Edit]          │
└────────────────────────────────────┘
```

### Form Drawer
Quick edits without full-page navigation:
```
┌────────────────────────────────────┐
│ [×] Edit Patent                    │
├────────────────────────────────────┤
│ Title                              │
│ [AI-Powered Device________]        │
│                                    │
│ Status                             │
│ [Filed ▼]                          │
│                                    │
│ Assignee                           │
│ [John Doe ▼]                       │
│                                    │
├────────────────────────────────────┤
│ [Cancel]              [Save]       │
└────────────────────────────────────┘
```

### Navigation Drawer (Mobile)
Slide-out menu for mobile navigation:
```
┌────────────────────────────────────┐
│ [×] Menu                           │
├────────────────────────────────────┤
│                                    │
│ 📊 Dashboard                       │
│ 📄 Patents                         │
│ 📋 Trademarks                      │
│ 📁 Documents                       │
│ 👤 Contacts                        │
│ ⚙️  Settings                       │
│                                    │
└────────────────────────────────────┘
```

## Implementation Checklist

- [ ] Drawer slides from correct edge
- [ ] Opening animation smooth (300-400ms)
- [ ] Backdrop fades in with drawer
- [ ] Focus moves to appropriate element
- [ ] Focus trap works correctly
- [ ] Tab cycles within drawer only
- [ ] Escape key closes drawer
- [ ] Close button (×) works
- [ ] Backdrop click closes drawer (if enabled)
- [ ] Body scroll locks when open
- [ ] Closing animation smooth
- [ ] Focus returns to trigger on close
- [ ] Responsive on mobile (full-width or bottom sheet)
- [ ] ARIA attributes correct
- [ ] Screen reader support
- [ ] Keyboard navigation works
- [ ] Reduced motion respected
- [ ] Long content scrolls properly within drawer
- [ ] Related patterns referenced correctly
