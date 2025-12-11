---
title: Header
description: "Documentation for Header component"
---

# Header Navigation Pattern

## Overview

The header is your system's command center—present on every screen, giving consistent access to navigation, search, notifications, and account management. It's your persistent companion, helping users know where they are and get where they need to go.

## When to Use

The header pattern is used:

- **On every page** - Consistent navigation across entire system
- **Primary navigation** - Top-level menu items and sections
- **System utilities** - Search, notifications, settings, profile
- **Branding** - Logo and product identity
- **Context** - Current location and breadcrumbs

## Anatomy

### 1. Brand Section (Left)
- **Logo** - Company/product logo
- **Product name** (optional) - Text beside logo
- **Click behavior** - Returns to home/dashboard

### 2. Primary Navigation (Center/Left)
- **Main menu items** - Top-level navigation links
- **Dropdown menus** - Secondary navigation
- **Active indicators** - Shows current section
- **Mega menus** (optional) - Rich dropdown with categories

### 3. Utility Section (Right)
- **Global search** - Search trigger
- **Notifications** - Notification bell with badge
- **Quick actions** - Create/add button
- **Help** - Help icon or link
- **User menu** - Avatar/name with dropdown

### 4. Secondary Bar (Optional)
- **Breadcrumbs** - Navigation trail
- **Page title** - Current page heading
- **Page actions** - Context-specific buttons
- **Tabs** - Sub-navigation within section

## Specification

### Header Container

```
Dimensions:
- Height: 64px (desktop), 56px (mobile)
- Width: 100% viewport width
- Background: surface-white or dark theme
- Border bottom: 1px solid --bg-fill-light
- Shadow: Small elevation (optional)
- Position: Sticky top (remains visible on scroll)
- Z-index: 1000 (above page content)

Layout:
[Logo] [Nav Items...]              [Search] [Notifications] [User]
←─────────────────────────────────────────────────────────────────→
Padding: 0 24px (desktop), 0 16px (mobile)
```

### Brand Section

```
Logo:
- Size: 32px × 32px (square) or auto height × 32px (rectangular)
- Position: Left side, 24px from edge
- Padding right: 16px
- Link: Returns to home/dashboard
- Alt text: Company/product name

Product Name (Optional):
- Font size: text-lg
- Font weight: font-weight-semibold
- Color: txt-primary
- Position: Beside logo
- Hidden on mobile (logo only)

Combined Width: ~180-200px

Example:
[🏢 OneDS] ← Logo + Name
```

### Primary Navigation

```
Nav Items:
- Height: 64px (full height of header)
- Padding: 0 spacing-4 (each item)
- Gap: spacing-1 between items
- Font size: text-base
- Font weight: font-weight-emphasized
- Color: txt-secondary
- Hover: fill-accent
- Active: fill-accent + bottom border

Active Indicator:
- Border bottom: 3px solid fill-accent
- Height: Full nav item height
- Position: Absolute bottom

Example Items:
[Dashboard] [Patents] [Trademarks] [Contacts] [Documents]

States:
Default: txt-secondary
Hover: fill-accent
Active: fill-accent + bottom border
Disabled: txt-tertiary, no interaction
```

### Dropdown Menus

```
Trigger:
- Click nav item with chevron
- Hover (optional, desktop only)
- Icon: Chevron down (▼)

Dropdown Container:
- Min width: 200px
- Max width: 320px
- Background: surface-white
- Border radius: radius-medium
- Shadow: Large elevation
- Border: 1px solid --bg-fill-light
- Position: Below nav item, left-aligned
- Z-index: 1001 (above header)
- Padding: 8px

Menu Items:
- Height: 40px
- Padding: 8px 16px
- Font size: 14px
- Color: Primary text (#2A353F)
- Hover: Light gray background (#F9FAFB)
- Active: Light blue background (#EDF1FF)
- Gap: 2px between items

Divider:
- Height: 1px
- Background: #ECEEF0
- Margin: 8px 0

Example:
┌──────────────────────┐
│ Patent Applications  │
│ Design Patents       │
├──────────────────────┤ ← Divider
│ Trademark            │
│ Copyright            │
└──────────────────────┘
```

### Mega Menu (Advanced)

```
Large dropdown with rich content

Dimensions:
- Width: 600-800px
- Height: Auto, max 500px
- Columns: 2-4 columns
- Position: Below header, spans multiple nav items

Layout:
┌─────────────────────────────────────────┐
│ Column 1      Column 2      Column 3    │
│                                         │
│ Patents       Contacts     Reports      │
│ • Applications • Inventors  • Status    │
│ • Drafts       • Attorneys  • Analytics │
│ • Filed        • Agents     • Export    │
│ • Granted      • Companies              │
└─────────────────────────────────────────┘

Use: Complex navigation structures, grouped content
```

### Global Search

```
Trigger:
- Width: 240px (collapsed) → 320px (focused)
- Height: 40px
- Border radius: 8px
- Background: Light gray (#F5F5F5)
- Border: 1px solid #D1D6DB
- Icon: Magnifying glass (left, 16px)
- Placeholder: "Search or jump to..."
- Keyboard hint: "⌘K" badge (right side)

States:
Default:
┌────────────────────────────┐
│ 🔍 Search or jump to... ⌘K │
└────────────────────────────┘

Focused:
┌──────────────────────────────┐
│ 🔍 |                    [×] │
└──────────────────────────────┘
Expands width, shows cursor and clear button

See: [Global Search Pattern](../behaviours/global-search.md)
```

### Notifications

```
Trigger:
- Icon: Bell (16px)
- Size: 40px × 40px (touch target)
- Border radius: 8px
- Hover: Light gray background (#F9FAFB)
- Badge: Red circle with count

Badge:
- Size: 18px × 18px (min)
- Background: Red (#F04438)
- Color: White (#FFFFFF)
- Font size: 12px
- Font weight: 600
- Position: Top-right corner of bell icon
- Max number: 99 (shows "99+" if more)

Example:
┌────┐
│ 🔔 │  ← No badge (no notifications)
└────┘

┌────┐
│ 🔔 5│  ← Badge shows count
└────┘

Dropdown:
- Width: 400px
- Max height: 500px
- Position: Right-aligned below trigger
- Header: "Notifications" + "Mark all read"
- List: Notification items (scrollable)
- Footer: "View all notifications" link

Notification Item:
- Height: Auto (min 64px)
- Padding: 12px 16px
- Border bottom: 1px solid #ECEEF0
- Hover: Light gray background
- Unread: Blue dot indicator + bold text

See: [Notification Pattern](../behaviours/notification.md)
```

### Quick Actions / Create Button

```
Button:
- Label: "+ Create" or "+ New"
- Style: Primary button
- Height: 40px
- Padding: 8px 16px
- Icon: + plus icon (optional)
- Position: Right side, before notifications

Dropdown (if multiple create actions):
┌──────────────────────────┐
│ + New Patent Application │
│ + New Trademark          │
│ + New Contact            │
│ + Upload Document        │
└──────────────────────────┘

Mega dropdown (if many actions):
- Grouped by category
- Icons for each action
- Search within actions (if many)
```

### Help

```
Trigger:
- Icon: Question mark or info icon
- Size: 40px × 40px
- Border radius: 8px
- Hover: Light gray background
- Tooltip: "Help" on hover

Dropdown Options:
┌────────────────────┐
│ 📖 Documentation   │
│ 🎓 Tutorials       │
│ 💬 Contact Support │
│ ⌨️ Keyboard Shortcuts│
│ ℹ️ About           │
└────────────────────┘

Alternative:
- Link to help center
- Open help modal
- Inline contextual help
```

### User Menu

```
Trigger:
- Avatar: 32px circle
- Name: User's name (optional, desktop only)
- Chevron: Down arrow (▼)
- Height: 40px
- Padding: 8px
- Hover: Light gray background
- Border radius: 8px

Layout:
┌──────────────────┐
│ (👤) John Doe ▼ │  ← Avatar + Name + Chevron
└──────────────────┘

or (minimal):
┌────┐
│ JD │  ← Initials if no avatar
└────┘

Dropdown:
- Width: 240px
- Position: Right-aligned below trigger
- Header: User info (name, email)
- Menu items: Account, settings, logout
- Footer: Version or system status (optional)

Dropdown Content:
┌──────────────────────────┐
│ 👤 John Doe              │ ← Header
│    john.doe@example.com  │
├──────────────────────────┤
│ 👤 Profile               │
│ ⚙️ Settings              │
│ 🔔 Preferences           │
│ ❓ Help & Support        │
├──────────────────────────┤
│ 🚪 Log out               │
└──────────────────────────┘
```

### Secondary Bar

```
Position: Below main header
Height: 48px
Background: White (#FFFFFF)
Border bottom: 1px solid #ECEEF0

Components:
- Breadcrumbs (left)
- Page title (center or left)
- Page actions (right)
- Sub-navigation tabs (full width)

Example:
┌─────────────────────────────────────────┐
│ Home > Patents > US2024123456           │  ← Breadcrumbs
└─────────────────────────────────────────┘

or

┌─────────────────────────────────────────┐
│ Patent US2024123456          [Edit] [⋯] │  ← Title + Actions
└─────────────────────────────────────────┘

or

┌─────────────────────────────────────────┐
│ [Details] [Documents] [History] [Notes] │  ← Tabs
└─────────────────────────────────────────┘

See: [Breadcrumbs Component](../../components/breadcrumbs.md)
See: [Tabs Component](../../components/tabs.md)
```

## Behavior Patterns

### 1. Sticky Header

**Scroll Behavior:**

```
Default (Top of Page):
- Header visible
- Full height (64px)
- All elements visible
- Shadow: None or subtle

Scrolling Down:
- Header remains at top (sticky)
- Stays visible
- Shadow appears (indicates elevation)
- Optional: Hide secondary bar

Scrolling Up:
- Header remains visible
- Full functionality available

Alternative (Hide on Scroll):
- Scroll down: Header slides up, hidden
- Scroll up: Header slides down, visible
- Saves vertical space
- Use: Content-focused apps (reading, media)

Implementation:
position: sticky;
top: 0;
z-index: 1000;
```

**Sticky Header Shadow:**

```
Shadow appears when content scrolls beneath header

Default (at top): No shadow
Scrolled: box-shadow: 0 2px 8px rgba(0,0,0,0.08);

Purpose: Create visual separation, indicate layering
```

### 2. Active Navigation

**Indicating Current Section:**

```
Methods:

1. Bottom Border:
   - 3px solid blue (#155EEF)
   - Full width of nav item
   - Position: Bottom of item

2. Background:
   - Light blue (#EDF1FF)
   - Full height of nav item
   - Border radius: 6px

3. Text Color:
   - Active: Blue (#155EEF)
   - Font weight: 600 (semi-bold)

4. Icon (if present):
   - Filled version of icon
   - Blue color

Recommended: Border + Text Color combination
Most clear visual hierarchy
```

**Sub-Navigation Active State:**

```
When: User is in sub-section of main nav item

Behavior:
- Parent nav item: Active state
- Dropdown: Shows active sub-item (if opened)
- Breadcrumbs: Show full path

Example:
Main Nav: [Patents] ← Active (blue + border)
Breadcrumbs: Home > Patents > Applications
```

### 3. Dropdown Menus

**Opening:**

```
Trigger:
- Click nav item with chevron
- Hover (optional, 300ms delay)

Animation:
- Duration: 200ms
- Easing: Ease-out
- Dropdown: Fade in + slide down (5px)
- Overlay: None (click outside closes)

State:
- Nav item: Highlighted (light gray background)
- Chevron: Rotates 180° (points up)
- Dropdown: Visible, positioned below item
```

**Closing:**

```
Methods:
1. Click outside dropdown
2. Click nav item again
3. Press Escape
4. Click menu item (navigate away)
5. Hover away (if hover-triggered, 500ms delay)

Animation:
- Duration: 150ms
- Easing: Ease-in
- Dropdown: Fade out + slide up (5px)

State:
- Nav item: Returns to default
- Chevron: Rotates back (points down)
```

**Keyboard Navigation:**

```
Tab: Focus next item in dropdown
Shift+Tab: Focus previous item
Enter/Space: Activate focused item
Escape: Close dropdown
Arrow Up/Down: Navigate items (optional)
```

### 4. Notifications

**Badge Behavior:**

```
New Notification:
- Badge appears with count
- Optional: Bell icon animates (shake or pulse)
- Badge color: Red (#F04438)
- Count updates in real-time

Animation:
- Fade in (200ms)
- Slight scale pulse (optional)
- Number increment animation

Max Count:
- Show actual number up to 99
- Above 99: Show "99+"
- Format: "99+" not "100", "101", etc.
```

**Dropdown Behavior:**

```
Opening:
1. User clicks notification bell
2. Mark badge as "seen" (optional)
3. Dropdown opens below bell
4. Focus moves to first notification

Content:
- Header: "Notifications" + "Mark all read" action
- List: Latest notifications (10-20)
- Footer: "View all" link to full notification center

Notification Item:
- Unread: Bold text + blue dot + light blue background
- Read: Normal text + gray + white background
- Hover: Highlight item
- Click: Navigate to related item or mark as read

Real-Time Updates:
- WebSocket or polling
- New notifications appear at top
- Badge updates
- Optional: Sound or browser notification
```

**Mark as Read:**

```
Individual:
- Click notification item
- Automatically marks as read
- Blue dot disappears
- Text changes from bold to regular

Mark All Read:
- Click "Mark all read" in header
- All notifications change to read state
- Badge clears to 0
- Optional: Confirm action if many notifications
```

### 5. User Menu

**Opening:**

```
Trigger: Click user avatar/name

Animation:
- Duration: 200ms
- Dropdown: Fade in + slide down
- Position: Right-aligned below trigger

Content:
- User info header (name, email, avatar)
- Account actions (profile, settings)
- Logout
- Optional: Role, organization, version info
```

**User Info Display:**

```
Header Section:
┌──────────────────────────────┐
│  (👤)  John Doe              │
│        john.doe@example.com  │
│        Administrator         │ ← Role
└──────────────────────────────┘

Styling:
- Avatar: 40px circle
- Name: 14px, font weight 600
- Email: 12px, gray (#7E8A96)
- Role: 12px, badge style
```

**Logout Behavior:**

```
Trigger: Click "Log out"

Confirmation (Optional):
┌────────────────────────────┐
│ Log out?               [×] │
├────────────────────────────┤
│ You will be signed out of  │
│ your account.              │
├────────────────────────────┤
│      [Cancel]  [Log out]   │
└────────────────────────────┘

Action:
1. Clear session/tokens
2. Redirect to login page
3. Show "Logged out successfully" message
4. Optional: Remember redirect URL (return after login)
```

### 6. Search Activation

**From Header Input:**

```
Trigger:
- Click search field in header
- Or press Cmd+K / Ctrl+K (anywhere)

Behavior:
1. Search modal opens (full overlay)
2. Focus moves to modal search input
3. Header search field remains visible (dimmed)
4. See: [Global Search Pattern](../behaviours/global-search.md)

Alternative (Inline Expansion):
- Header search expands to larger width
- Overlay covers rest of header
- Results dropdown appears below
- Less common, use modal for better experience
```

### 7. Mobile Menu

**Hamburger Menu:**

```
Trigger:
- Icon: ≡ (hamburger, 24px)
- Position: Left side, replaces desktop nav
- Size: 44px × 44px (touch target)
- Tap to open/close

Mobile Header:
┌──────────────────────────────────┐
│ ≡ [Logo]          [🔔] [Search]  │
└──────────────────────────────────┘
Hamburger + Logo + Essential utilities
```

**Mobile Menu Drawer:**

```
Opening:
- Slides in from left
- Full height, 80% width (max 320px)
- Overlay covers rest of screen
- Focus trap within drawer

Content:
┌─────────────────────────┐
│ [×] Menu                │ ← Header with close
├─────────────────────────┤
│ 👤 John Doe             │ ← User info
│    john.doe@example.com │
├─────────────────────────┤
│ 🏠 Dashboard            │ ← Nav items
│ 📄 Patents       >      │ ← Chevron indicates sub-menu
│ 🏷️ Trademarks    >      │
│ 👥 Contacts      >      │
│ 📁 Documents     >      │
├─────────────────────────┤
│ ⚙️ Settings             │ ← Account actions
│ ❓ Help                 │
│ 🚪 Log out              │
└─────────────────────────┘

Animation:
- Duration: 300ms
- Drawer: Slide in from left
- Overlay: Fade in
- Easing: Ease-out
```

**Mobile Sub-Menus:**

```
Interaction:
- Tap nav item with chevron
- Sub-menu slides in from right
- Back button returns to main menu
- Breadcrumb shows depth

Sub-Menu View:
┌─────────────────────────┐
│ [<] Patents             │ ← Back button
├─────────────────────────┤
│ Patent Applications     │
│ Design Patents          │
│ Patent Drafts           │
│ Patent Analytics        │
└─────────────────────────┘

Alternative:
- Accordion expansion within main menu
- Sub-items indent below parent
- No separate screen needed
```

## Responsive Behavior

### Desktop (≥1024px)

```
Layout:
[Logo] [Nav Items: Dashboard, Patents, Trademarks, ...]  [Search] [Notifications] [User]

Full navigation visible
All utilities accessible
Search: 240px width
Secondary bar: Full width, all actions visible
```

### Tablet (768px - 1023px)

```
Layout:
[Logo] [Nav Items (fewer)]  [Search] [🔔] [👤]

Simplified navigation
Some items moved to "More" dropdown
Search: 200px width
Secondary bar: Simplified, fewer actions
```

### Mobile (<768px)

```
Layout:
[≡] [Logo]           [🔔] [Search Icon]

Hamburger menu replaces nav items
Search: Icon only (opens overlay)
User menu: In hamburger drawer
Notifications: Icon only
Secondary bar: Hidden or simplified (page title only)

Optimizations:
- Large touch targets (44px minimum)
- Full-width drawer menu
- Simplified sub-navigation
- Priority actions remain visible
```

### Color & Contrast

**Contrast Requirements:**
- All text: 4.5:1 minimum (WCAG AA)
- Icons: 3:1 minimum
- Active indicators: Clear distinction (not color alone)
- Focus indicators: 3:1 contrast minimum

**Don't Rely on Color:**
- Active page: Border + color + text weight
- Notification badge: Number + color + position
- Dropdown state: Icon rotation + color
- Required actions: Icon + text + color

## Best Practices

### Do

- **Keep it consistent** - Same header on every page
- **Make logo clickable** - Returns to home/dashboard
- **Show current location** - Active nav item clearly indicated
- **Keep utilities accessible** - Search, notifications always available
- **Use sticky positioning** - Header remains visible on scroll
- **Provide keyboard shortcuts** - Cmd+K for search, etc.
- **Group related items** - Organize nav logically
- **Show notification counts** - Badge on bell icon
- **Make touch-friendly** - 44px minimum on mobile
- **Simplify for mobile** - Hamburger menu, essential utilities only
- **Test with keyboard** - Full keyboard navigation support
- **Include skip links** - Accessibility for keyboard users

### Don't

- **Don't overcrowd** - Limit primary nav to 5-7 items
- **Don't hide essential utilities** - Search, notifications, user menu
- **Don't make logo too large** - Balance branding with functionality
- **Don't forget active states** - Users should know where they are
- **Don't ignore mobile** - Responsive design is critical
- **Don't auto-open dropdowns on hover** (mobile) - Requires tap/click
- **Don't hide logout** - Always accessible in user menu
- **Don't make hit areas too small** - Minimum 40px desktop, 44px mobile
- **Don't forget loading states** - Show feedback for async actions
- **Don't block header** - Keep it accessible, avoid overlays covering it

## Related Patterns

- **[Global Search](../behaviours/global-search.md)** - Search functionality in header
- **[Notification](../behaviours/notification.md)** - Notification bell and dropdown
- **[Drawer](../behaviours/drawer.md)** - Mobile menu drawer
- **[Breadcrumbs](../../components/breadcrumbs.md)** - Secondary navigation
- **[Tabs](../../components/tabs.md)** - Sub-navigation in secondary bar

## Implementation Checklist

- [ ] Header present on all pages
- [ ] Logo links to home/dashboard
- [ ] Primary navigation items visible and functional
- [ ] Active page clearly indicated
- [ ] Dropdown menus open and close correctly
- [ ] Search accessible (field + keyboard shortcut)
- [ ] Notifications display badge count
- [ ] User menu contains profile, settings, logout
- [ ] Sticky positioning works on scroll
- [ ] Shadow appears when scrolled
- [ ] Mobile hamburger menu functions
- [ ] Mobile drawer slides in/out correctly
- [ ] Touch targets meet 44px minimum (mobile)
- [ ] Keyboard navigation works throughout
- [ ] Skip to content link present and functional
- [ ] ARIA attributes properly implemented
- [ ] Screen reader announces navigation
- [ ] Focus indicators visible (3:1 contrast)
- [ ] Responsive breakpoints implemented
- [ ] All dropdowns close on outside click
- [ ] Escape key closes dropdowns

---

*Pattern identified from analysis showing header/navigation appears on every screen in the system. This pattern ensures consistent, accessible navigation throughout the entire IP management application.*
