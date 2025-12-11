---
title: Breadcrumbs
description: "Documentation for Breadcrumbs component"
---

# Breadcrumbs

## Description

Breadcrumbs show users where they are in your site's hierarchy—like leaving a trail through the forest. They reveal the current location and offer quick links back to parent pages, making them perfect for deep hierarchies and complex navigation.

## Anatomy

1. **Breadcrumb Container** - Overall navigation wrapper
2. **Breadcrumb Item** - Individual navigation link
3. **Separator** - Visual divider between items
4. **Current Page** - Active, non-clickable item
5. **Home Icon** - Optional first item (home link)
6. **Overflow Menu** - Collapsed items for long trails (optional)

## Specification

**Breadcrumb Container:**
- **Height**: `32px` (default)
- **Padding**: `spacing-2 0`
- **Gap**: `spacing-2` between items and separators
- **Layout**: Horizontal row
- **Overflow**: Handle long trails with ellipsis

**Breadcrumb Item:**
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-normal`
- **Color**: `--text-light`
- **Hover Color**: `--text-brand`
- **Active Color**: `--text-brand`
- **Padding**: `spacing-1 spacing-2`
- **Border Radius**: `radius-extra-small`

**Current Page:**
- **Color**: `--text-normal`
- **Font Weight**: `font-weight-emphasized`
- **Not Clickable**: No hover state
- **Always Last**: Final item in trail

**Separator:**
- **Character**: `/` or `>` or `›`
- **Color**: `--text-placeholder`
- **Font Size**: `text-base`
- **Margin**: `0 spacing-1`
- **Not Interactive**: Display only

**Home Icon (optional):**
- **Size**: `16px`
- **Position**: First item
- **Clickable**: Links to home
- **Color**: `--icon-light`
- **Hover**: `--icon-brand`

**Overflow Menu:**
- **Trigger**: `...` ellipsis
- **Appears**: When trail too long
- **Shows**: Hidden middle items
- **Position**: After home, before last 2 items

**States:**
- **Default**: Gray text, clickable
- **Hover**: Blue text, underline (optional)
- **Active**: Blue text
- **Current**: Dark text, not clickable
- **Focus**: Outline ring

**Sizes:**
- **Small**: `28px` height, `text-xs` font
- **Default**: `32px` height, `text-base` font
- **Large**: `40px` height, `text-lg` font

## Do

- Show users where they are in the hierarchy
- Keep trails under 5-7 items
- Make all parent items clickable
- Place breadcrumbs near the top of the page
- Truncate long item names with ellipsis
- Include home or root level
- Use for deep, multi-level navigation

## Don't

- Use for flat navigation (tabs work better)
- Make the current page clickable
- Use for sequential steps (that's what the Steps component is for)
- Duplicate your primary navigation
- Forget mobile responsive behavior
- Hide important context
- Use on single-level pages
- Make separators clickable

## Uses

**Primary Use Cases:**

1. **Website Navigation** - Section > Subsection > Page
2. **E-commerce** - Categories > Subcategory > Product
3. **File Systems** - Folder > Subfolder > File
4. **Documentation** - Guide > Section > Article
5. **Admin Panels** - Settings > Category > Option
6. **Multi-step Forms** - Context for current step
7. **Search Results** - Path to result location
8. **Content Hierarchies** - Topic > Subtopic > Article

## Behavior

**Navigation:**
1. User clicks breadcrumb item
2. Page navigates to that level
3. Trail updates to new location
4. User maintains context

**Hover States:**
- Hover over clickable item
- Text color changes to blue
- Underline appears (optional)
- Cursor changes to pointer

**Current Page:**
- Last item in trail
- Not clickable
- Darker text color
- No hover state
- Represents current location

**Overflow Handling:**
- **Short trails** (≤5 items): Show all
- **Medium trails** (6-7 items): Show all or truncate middle
- **Long trails** (8+ items): Collapse middle items
  - Show: Home > ... > Parent > Current
  - Click `...` to see full trail in dropdown

**Truncation:**
- Long item names truncate
- Show ellipsis: "Very long patent appl..."
- Full text on hover (tooltip)
- Maintain readability

**Responsive Behavior:**
- **Desktop**: Full trail visible
- **Tablet**: Truncate long items
- **Mobile**: Show only last 2-3 items with back link
  - `< Applications > Current Page`
  - Or: `Home > ... > Current Page`

## Content Guidelines

- Use clear, concise labels that match page titles
- Stick with sentence case
- Keep item names under 30 characters
- Truncate longer names with ellipsis
- Show full text in tooltips on hover
