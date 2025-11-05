## Description

Tabs organize content into logical groups, letting users switch between related views without leaving the page. Like filing folders standing on their edge, tabs keep information organized and accessible—one click away from the content you need.

## Anatomy

1. **Tab List** - Container for tab buttons
2. **Tab Button** - Clickable tab label
3. **Active Indicator** - Underline or highlight showing active tab
4. **Tab Panel** - Content area for active tab
5. **Icon** - Visual indicator (optional)
6. **Badge** - Count or notification (optional)

## Specification

**Tab List:**
- **Height**: `48px` (default)
- **Border Bottom**: `2px solid #ECEEF0`
- **Background**: White (`#FFFFFF`)
- **Layout**: Horizontal row
- **Gap**: `0px` (tabs touch)

**Tab Button:**
- **Height**: `48px`
- **Padding**: `12px 16px`
- **Font Size**: `14px`
- **Font Weight**: 500 (medium)
- **Color**: Gray (`#535D67`) (inactive)
- **Active Color**: Primary blue (`#155EEF`)
- **Min Width**: `80px`
- **Background**: Transparent

**Active Indicator:**
- **Height**: `2px`
- **Color**: Primary blue (`#155EEF`)
- **Position**: Bottom of tab
- **Width**: Full width of tab
- **Transition**: Slide animation (300ms)

**Tab States:**
- **Inactive**: Gray text, no indicator
- **Hover**: Darker text, light background
- **Active**: Blue text, blue underline
- **Focus**: Outline ring
- **Disabled**: Light gray, not clickable

**With Icons:**
- **Icon Size**: `16px`
- **Position**: Leading (before text)
- **Gap**: `8px` between icon and text

**With Badges:**
- **Badge**: Count or dot indicator
- **Position**: Trailing (after text)
- **Gap**: `8px` before badge

**Variants:**
- **Line Tabs**: Default with underline
- **Card Tabs**: Background cards
- **Pill Tabs**: Rounded pill shapes

**Sizes:**
- **Small**: `40px` height, `10px` padding
- **Default**: `48px` height, `12px` padding
- **Large**: `56px` height, `16px` padding

## Do

- Use for organizing related content
- Limit to 3-7 tabs (more? use dropdown)
- Keep tab labels short (1-2 words)
- Show active tab clearly
- Persist selected tab on page reload
- Use horizontal layout by default
- Group related tabs
- Provide keyboard navigation

## Don't

- Don't use for navigation (use menu)
- Don't nest tabs within tabs
- Don't use for sequential steps (use Steps)
- Don't hide important content in tabs
- Don't make tab labels too long
- Don't forget disabled states
- Don't overload with too many tabs

## Uses

**Primary Use Cases:**

1. **Settings Panels** - Account, Privacy, Notifications
2. **Data Views** - Overview, Details, History
3. **Form Sections** - Personal, Professional, Preferences
4. **Content Categories** - All, Active, Archived
5. **File Types** - Documents, Images, Videos
6. **Report Views** - Summary, Charts, Data
7. **Product Details** - Description, Specs, Reviews

**Example Scenarios:**

**Basic Tabs:**
```
┌─────────────────────────────────────┐
│ Overview │ Details │ History        │
├═════════┴─────────┴─────────────────┤
│                                     │
│   Overview content here...          │
│                                     │
└─────────────────────────────────────┘
```

**With Icons:**
```
│ 📄 Documents │ 🖼️ Images │ 📹 Videos │
```

**With Badges:**
```
│ All (42) │ Active (15) │ Archived (27) │
```

## Behavior

**Tab Switching:**
1. User clicks tab
2. Active indicator slides to new tab
3. Previous content fades out
4. New content fades in
5. URL updates (optional)
6. Focus moves to content (optional)

**Keyboard Navigation:**
- `Tab` - Focus tab list
- `Arrow Left/Right` - Navigate between tabs
- `Home` - First tab
- `End` - Last tab
- `Enter/Space` - Activate focused tab

**URL Integration:**
- Update URL hash or query param
- Support deep linking
- Back button navigates tabs
- Shareable tab links

**Animation:**
- Indicator slides: 300ms ease
- Content fade: 200ms
- Smooth transitions

## Accessibility

**Semantic HTML:**
```html
<div class="tabs">
  <div role="tablist" aria-label="Patent information">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="overview-panel"
      id="overview-tab">
      Overview
    </button>

    <button
      role="tab"
      aria-selected="false"
      aria-controls="details-panel"
      id="details-tab"
      tabindex="-1">
      Details
    </button>
  </div>

  <div
    role="tabpanel"
    id="overview-panel"
    aria-labelledby="overview-tab"
    tabindex="0">
    Overview content...
  </div>

  <div
    role="tabpanel"
    id="details-panel"
    aria-labelledby="details-tab"
    tabindex="0"
    hidden>
    Details content...
  </div>
</div>
```

**ARIA Attributes:**
- `role="tablist"` on tab container
- `role="tab"` on each tab button
- `role="tabpanel"` on content panels
- `aria-selected="true"` on active tab
- `aria-controls` links tab to panel
- `aria-labelledby` links panel to tab
- `tabindex="-1"` on inactive tabs

**Keyboard Navigation:**
- Full keyboard support required
- Arrow keys navigate tabs
- Only active tab in tab order
- Enter/Space activates tab
- Home/End for first/last

**Screen Reader Support:**
- Announce tab list
- Read tab labels
- Announce selected state
- Read tab count (e.g., "2 of 5")
- Announce panel content

**Focus Management:**
- Only one tab tabbable (roving tabindex)
- Clear focus indicators
- Focus moves to panel (optional)
- Logical focus order

**Color & Contrast:**
- Tab text meets 4.5:1 contrast
- Active indicator meets 3:1
- Focus ring visible
- Don't rely on color alone
- Underline + text color combination

**Touch Targets:**
- Tabs minimum 44×44px
- Adequate spacing
- Full tab area clickable

**Responsive:**
- Horizontal scroll on overflow
- Dropdown alternative on mobile
- Stack vertically (optional)
- Maintain touch targets