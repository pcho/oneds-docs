---
title: Dropdown
description: "Documentation for Dropdown component"
---

## Description

Dropdown reveals a floating list of options when triggered. Perfect for actions, selections, or navigation—it keeps interfaces clean while offering choices on demand. Hidden until needed, powerful when revealed.

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
- **Padding**: `spacing-2 spacing-4`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-small`
- **Background**: `--bg-surface-white`
- **Gap**: `spacing-2` (between text and down arrow)
- **Down Arrow**: `▼` icon

**Dropdown Panel:**
- **Min Width**: `160px` (matches trigger or wider)
- **Max Width**: `280px`
- **Max Height**: `320px` (scrollable)
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-medium`
- **Shadow**: `shadow-medium`
- **Padding**: `spacing-1 0`
- **Position**: Below trigger (or above if no space)

**Menu Item:**
- **Height**: `40px`
- **Padding**: `spacing-2 spacing-4`
- **Font Size**: `text-base`
- **Background**: Transparent (default)
- **Hover Background**: `--bg-fill-lighter`
- **Active Background**: `--bg-surface-brand-lighter`
- **Gap**: `spacing-2` (between icon and text)

**Menu Item States:**
- **Default**: Transparent background
- **Hover**: `--bg-fill-lighter`
- **Active**: `--bg-fill-brand-normal`
- **Focus**: Outline indicator
- **Disabled**: `--text-disabled`, no interaction
- **Selected**: Checkmark or highlight

**Divider:**
- **Height**: `1px`
- **Background**: `--border-lighter`
- **Margin**: `spacing-1 0`

**Submenu Indicator:**
- **Icon**: Right arrow (`▶`)
- **Size**: `16px`
- **Position**: Right-aligned
- **Color**: `--icon-lighter`

**Icons:**
- **Size**: `16px`
- **Position**: Leading (before text)
- **Gap**: `spacing-2` to text

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

**Within Menu:**
- Arrow keys move focus
- Focus wraps (last → first, first → last)
- Disabled items are skipped
- Focus clear and visible

**Closing:**
- Focus returns to trigger button
- Maintains logical focus flow

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
