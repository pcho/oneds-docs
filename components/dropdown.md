## Description

Dropdown reveals a list of options when triggered, floating elegantly above the page like a menu appearing from thin air. Perfect for actions, selections, or navigation, it keeps your interface clean while offering powerful choices on demand. Think of it as your UI's secret weapon—hidden until needed, powerful when revealed.

## Anatomy

1. **Trigger** - Button or element that opens dropdown
2. **Dropdown Panel** - Floating container with options
3. **Menu Items** - Individual options or actions
4. **Divider** - Separator between option groups (optional)
5. **Icons** - Leading or trailing icons (optional)
6. **Submenu Indicator** - Arrow for nested menus (optional)
7. **Backdrop** - Invisible overlay to capture outside clicks (optional)

## Specification

**Trigger Button:**
- **Height**: `40px` (default)
- **Padding**: `8px 16px`
- **Border**: `1px solid #D1D6DB`
- **Border Radius**: `6px`
- **Background**: White (`#FFFFFF`)
- **Gap**: `8px` (between text and down arrow)
- **Down Arrow**: `▼` icon

**Dropdown Panel:**
- **Min Width**: `160px` (matches trigger or wider)
- **Max Width**: `280px`
- **Max Height**: `320px` (scrollable)
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `8px`
- **Shadow**: Medium elevation
- **Padding**: `4px 0`
- **Position**: Below trigger (or above if no space)

**Menu Item:**
- **Height**: `40px`
- **Padding**: `8px 16px`
- **Font Size**: `14px`
- **Background**: Transparent (default)
- **Hover Background**: Light gray (`#F5F5F5`)
- **Active Background**: Primary light (`#F0F9FF`)
- **Gap**: `8px` (between icon and text)

**Menu Item States:**
- **Default**: Transparent background
- **Hover**: Light gray background
- **Active**: Primary blue background
- **Focus**: Outline indicator
- **Disabled**: Gray text, no interaction
- **Selected**: Checkmark or highlight

**Divider:**
- **Height**: `1px`
- **Background**: Light gray (`#ECEEF0`)
- **Margin**: `4px 0`

**Submenu Indicator:**
- **Icon**: Right arrow (`▶`)
- **Size**: `16px`
- **Position**: Right-aligned
- **Color**: Gray (`#8C8C8C`)

**Icons:**
- **Size**: `16px`
- **Position**: Leading (before text)
- **Gap**: `8px` to text

## Do

- Group related options with dividers
- Show disabled options with explanation
- Use icons for clarity
- Highlight destructive actions
- Support keyboard navigation
- Show active/selected state clearly
- Position dropdown to stay in viewport
- Auto-focus first item when opened

## Don't

- Don't overwhelm with too many options (>15)
- Don't nest submenus more than 2 levels
- Don't forget keyboard navigation
- Don't hide the trigger affordance (down arrow)
- Don't forget loading states for dynamic menus
- Don't make menu items too small to click
- Don't use for navigation (consider menu component)

## Uses

**Primary Use Cases:**

1. **Action Menus** - More actions, contextual menus
2. **User Menus** - Profile dropdown, account settings
3. **Navigation Dropdowns** - Mega menus, sub-navigation
4. **Filters** - Sorting options, view controls
5. **Context Menus** - Right-click menus
6. **Overflow Menus** - Ellipsis (⋯) action menus
7. **Status Changers** - Change status, assign user
8. **Quick Actions** - Common task shortcuts

**Example Scenarios:**

**Action Menu:**
```
[Actions ▼]

Dropdown:
┌─────────────────────┐
│ Edit                │
│ Duplicate           │
│ Export              │
├─────────────────────┤
│ Delete          ⚠️  │
└─────────────────────┘
```

**User Profile Menu:**
```
[Alice Johnson ▼]

┌─────────────────────┐
│ 👤 My Profile       │
│ ⚙️ Settings         │
│ 🔔 Notifications    │
├─────────────────────┤
│ 🚪 Logout           │
└─────────────────────┘
```

**Submenu:**
```
[Export ▼]

┌────────────────────────┐
│ Export as PDF          │
│ Export as CSV      ▶   │ → ┌──────────────┐
│ Print                  │   │ With headers │
└────────────────────────┘   │ Raw data     │
                              └──────────────┘
```

## Behavior

### Opening

**Click to Open:**
1. User clicks trigger button
2. Dropdown panel appears below trigger
3. Panel animates in (fade + slide)
4. First item receives focus
5. Backdrop captures outside clicks

**Keyboard to Open:**
- `Enter/Space` on trigger opens dropdown
- `Arrow Down` on trigger opens and focuses first item
- `Arrow Up` on trigger opens and focuses last item

### Navigation

**Mouse Navigation:**
- Hover highlights items
- Click item to select/execute
- Click outside closes dropdown
- Scroll if content exceeds max height

**Keyboard Navigation:**
- `Arrow Down` - Next item
- `Arrow Up` - Previous item
- `Home` - First item
- `End` - Last item
- `Enter` - Select/execute item
- `Escape` - Close dropdown
- `Tab` - Close dropdown and move to next element
- Type letters - Jump to matching item

**Submenu Navigation:**
- Hover parent item to show submenu
- `Arrow Right` - Open submenu
- `Arrow Left` - Close submenu, back to parent
- Mouse move into submenu

### Focus

**Opening:**
- Focus moves to first menu item
- If opened with Arrow key, focus appropriate item
- Focus visible indicator
- Screen readers announce menu opened

**Within Menu:**
- Arrow keys move focus
- Focus wraps (last → first, first → last)
- Disabled items are skipped
- Focus clear and visible

**Closing:**
- Focus returns to trigger button
- Maintains logical focus flow
- Announce menu closed to screen readers

### Dismissing

**Click Outside:**
1. User clicks outside dropdown
2. Dropdown closes immediately
3. Focus returns to trigger
4. No action executed

**Escape Key:**
- Press `Escape` to close
- Focus returns to trigger
- Cancel operation

**Select Item:**
1. User clicks or presses Enter on item
2. Action executes
3. Dropdown closes
4. Focus returns to trigger (usually)
5. Feedback provided for action

**Tab Key:**
- Close dropdown
- Focus moves to next focusable element
- Natural tab order maintained

### States

**Dropdown States:**
- **Closed** - Panel hidden, trigger normal
- **Open** - Panel visible, trigger active state
- **Loading** - Spinner in panel for dynamic content

**Item States:**
- **Default** - Normal appearance
- **Hover** - Background highlight
- **Focus** - Keyboard focus indicator
- **Active** - Currently selected/pressed
- **Disabled** - Grayed, not interactive
- **Selected** - Checkmark for current selection

### Positioning

**Smart Positioning:**
- Default: Below trigger, left-aligned
- If no space below: Show above trigger
- If extends off-screen: Adjust horizontal position
- Always fully visible in viewport
- Maintain connection to trigger visually

### Animations

**Open:**
- Fade in: 150ms
- Slide down: 10-20px
- Easing: Ease-out
- Scale from trigger (optional)

**Close:**
- Fade out: 100ms
- Slide up slightly
- Easing: Ease-in
- Quick and responsive

**Item Hover:**
- Background fade: 100ms
- Instant on keyboard focus

**Reduced Motion:**
- Instant appear/disappear
- No slide animations
- Respect prefers-reduced-motion

## Accessibility

**Semantic HTML:**
```html
<div class="dropdown">
  <button
    id="dropdown-trigger"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="dropdown-menu">
    Actions ▼
  </button>

  <ul
    id="dropdown-menu"
    role="menu"
    aria-labelledby="dropdown-trigger"
    hidden>
    <li role="none">
      <button role="menuitem">Edit</button>
    </li>
    <li role="none">
      <button role="menuitem">Delete</button>
    </li>
  </ul>
</div>
```

**ARIA Attributes:**
- `aria-haspopup="true"` on trigger
- `aria-expanded` toggles (true/false)
- `aria-controls` links to menu ID
- `role="menu"` on dropdown panel
- `role="menuitem"` on items
- `role="separator"` on dividers
- `aria-disabled="true"` on disabled items
- `aria-current` or checkmark for selected items

**Keyboard Navigation:**
- Full keyboard support required
- Arrow keys for navigation
- Home/End for first/last
- Enter to select
- Escape to close
- Tab to exit
- Type-ahead search

**Screen Reader Support:**
- Announce menu opened/closed
- Announce item count (e.g., "5 items")
- Read item labels clearly
- Announce disabled items
- Announce selected items
- Read submenu indicators
- Announce focus changes

**Focus Management:**
- Focus trap within menu (no Tab out)
- Clear focus indicators
- Focus returns to trigger on close
- Logical focus order
- Skip disabled items

**Focus Trap:**
```javascript
// Prevent Tab from leaving menu
// Only Escape or selection closes
```

**Alternative Pattern (Select):**
- For form selections, use `<select>` or combobox
- Dropdown menus are for actions/navigation
- Different ARIA patterns

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Hover state distinguishable
- Focus indicator 3:1 contrast
- Don't rely on color alone
- Disabled items clearly marked

**Touch Targets:**
- Menu items minimum 44×44px
- Adequate spacing between items
- Full item width clickable
- Larger targets on mobile

**Submenus:**
```html
<li role="none">
  <button
    role="menuitem"
    aria-haspopup="true"
    aria-expanded="false">
    Export ▶
  </button>
  <ul role="menu" hidden>
    <li><button role="menuitem">PDF</button></li>
    <li><button role="menuitem">CSV</button></li>
  </ul>
</li>
```

**Responsive:**
- Full-width on mobile (optional)
- Bottom sheet alternative
- Larger touch targets
- Consider native select on mobile
- Horizontal scroll for wide menus

**Loading States:**
- Announce loading to screen readers
- Show spinner in menu
- Don't block trigger
- Maintain focus

**Error Handling:**
- Announce errors
- Don't close menu on error
- Show error in menu
- Provide retry option
