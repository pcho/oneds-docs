---
title: Avatar
description: "Documentation for Avatar component"
---

## Description

Avatars give visual identity to people, businesses, and objects (like patents)—making interfaces feel personal and helping users instantly recognize who's who. Whether it's initials, photos, or icons, avatars turn names into faces.

## Anatomy

1. **Container** - Circular or oval shape
2. **Content** - Initials, image, or icon
3. **Background** - Colored background for initials
4. **Border** - Optional outline (optional)
5. **Status Indicator** - Online/offline dot (optional)

## Specification

**Avatar Container:**
- **Shape**: Circle (default) or oval (tags only)
- **Border Radius**: `radius-round` (circle)
- **Background**: Varies by variant
- **Border**: `--border-lighter` (optional)

**Sizes:**
- **24px**: Extra small (compact lists, dense tables)
- **28px**: Small (table rows, compact UI)
- **32px**: Default/Medium (standard use)
- **36px**: Large (user profiles, headers)
- **48px**: Extra large (profile pages) *
- **64px**: Display size (account settings) *

*Note: Available sizes are 24, 28, 32, and 36px primarily, with larger sizes for specific contexts

**Variants:**

**Initials Avatar:**
- **Background**: Color generated from name (hash-based)
- **Text**: 1-2 uppercase initials
- **Font Size**: 40-50% of avatar size
- **Font Weight**: `font-weight-emphasized`
- **Text Color**: `--text-white`
- **Default**: The default avatar version that displays user initials

**Photo Avatar:**
- **Content**: User-uploaded image
- **Fit**: Cover (fills container)
- **Position**: Center
- **Fallback**: Initials or icon if image fails
- **Format**: Square images or cropped to square

**Icon Avatar:**
- **Icon**: Generic user icon (👤)
- **Background**: `--bg-fill-lighter`
- **Icon Color**: `--icon-lighter`
- **Icon Size**: 60% of avatar size
- **Use**: Placeholder when no image/initials available

**Oval Avatar:**
- **Shape**: Oval/pill (exclusively for tags)
- **Border Radius**: `radius-round` (pill shape)
- **Use**: Paired with select component tags only
- **Aspect Ratio**: Slightly wider than tall

**Status Indicator:**
- **Size**: 25% of avatar size
- **Position**: Bottom-right corner
- **Border**: `2px solid white`
- **Colors**: Green (online), Gray (offline), Yellow (away), Red (busy)

## Do

- Use up to two initials when photos aren't available
- Use square images or let users crop to square for proper framing

## Don't

- Stretch images or let them overflow the avatar shape
- Use transparent backgrounds
- Add more than 2 characters
- Group or stack avatars—they're designed to stand alone

## Uses

**Primary Use Cases:**

1. **User Profiles** - Account identification
2. **Comments** - Author attribution
3. **Tables** - User columns
4. **Navigation** - Account menu trigger
5. **Lists** - People or entity lists
6. **Mentions** - @mentions in text
7. **Assignments** - Assigned users
8. **Chat/Messages** - Conversation participants

## Behavior

**Interactive Avatars:**
- Clickable avatars open profiles or menus
- Hover shows tooltip with name
- Cursor changes to pointer
- Focus indicator on keyboard navigation

**Fallback Logic:**
1. Try to display photo
2. If no photo: Show initials
3. If no initials: Show generic icon
4. Background color based on name hash

**Loading States:**
- Skeleton placeholder while loading
- Smooth fade-in when image loads
- Handle broken image gracefully

**Status Indicators:**
- Update in real-time (online/offline)
- Animate status changes
- Clear visual distinction
