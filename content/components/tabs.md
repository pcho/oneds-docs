---
title: Tabs
description: "Documentation for Tabs component"
---

## Description

Tabs organize content into logical groups, letting users switch between related views without leaving the page. Think of them as filing folders standing on edge—keeping everything organized and just one click away.

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
- **Border Bottom**: `2px solid` `--bg-fill-light`
- **Background**: `--bg-surface-white`
- **Layout**: Horizontal row
- **Gap**: `0px` (tabs touch)

**Tab Button:**
- **Height**: `48px`
- **Padding**: `spacing-3` `spacing-4`
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-emphasized`
- **Color**: `--text-light` (inactive)
- **Active Color**: `--text-brand`
- **Min Width**: `80px`
- **Background**: Transparent

**Active Indicator:**
- **Height**: `2px`
- **Color**: `--bg-fill-brand-normal`
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
- **Gap**: `spacing-2` between icon and text

**With Badges:**
- **Badge**: Count or dot indicator
- **Position**: Trailing (after text)
- **Gap**: `spacing-2` before badge

**Variants:**
- **Line Tabs**: Default with underline
- **Card Tabs**: Background cards
- **Pill Tabs**: Rounded pill shapes

**Sizes:**
- **Small**: `40px` height, `10px` padding
- **Default**: `48px` height, `spacing-3` padding
- **Large**: `56px` height, `spacing-4` padding

## Do

- Organize related content into tabs
- Limit to 3-7 tabs (got more? use a dropdown)
- Keep labels short (1-2 words)
- Make the active tab obvious
- Remember the selected tab on page reload
- Stick with horizontal layout by default
- Provide keyboard navigation

## Don't

- Use tabs for site navigation (use menus instead)
- Nest tabs within tabs—it gets messy fast
- Use tabs for sequential steps (that's what the Steps component is for)
- Hide critical content behind tabs
- Make labels too long
- Forget disabled states
- Overload with too many tabs

## Uses

**Primary Use Cases:**

1. **Settings Panels** - Account, Privacy, Notifications
2. **Data Views** - Overview, Details, History
3. **Form Sections** - Personal, Professional, Preferences
4. **Content Categories** - All, Active, Archived
5. **File Types** - Documents, Images, Videos
6. **Report Views** - Summary, Charts, Data
7. **Product Details** - Description, Specs, Reviews

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
