---
title: Selectable Card
description: "Documentation for Selectable Card component"
---

## Description

Selectable Card turns choices into interactive moments. Users can pick from a set of options with clear visual feedback, optional checkboxes or radio buttons, and collapsible content. Perfect for configuration wizards, pricing plans, or anywhere users need to choose between multiple options.

## Anatomy

1. **Card Container** - Outer wrapper with border and background
2. **Header** - Title area with selection control
3. **Title** - Card label
4. **Prefix Options** - Leading icon, checkbox, or radio button
5. **Content Area** - Card body with details
6. **Collapse Control** - Optional expand/collapse functionality

## Specification

**Card Container:**
- **Layout**: Vertical column
- **Sizing**: Hug content
- **Background**: White (`--bg-surface-white`)
- **Border**: `1px solid --bg-fill-light`
- **Border Radius**: `radius-default`
- **Selected**: Thicker border or accent color

**Header:**
- Component set with variants
- Includes prefix options
- Optional collapse control

## Do

- Show clear visual feedback when cards are selected
- Use radio buttons for single choice, checkboxes for multiple selections
- Write descriptive titles and helpful content
- Support keyboard navigation and selection
- Group related cards together

## Don't

- Make cards too large to compare side-by-side
- Hide critical information in collapsed states
- Use for simple lists (stick with list items instead)
- Forget hover and focus states

## Uses

- Pricing plan selection
- Configuration options
- Feature toggles
- Survey responses
- Multi-step form choices

## Behavior

**States:** Default, Hover, Selected, Disabled, Collapsed/Expanded

**Interactions:**
- Click anywhere on card to select
- Checkbox/radio for explicit selection
- Collapse button expands/collapses content
- Keyboard: Space/Enter to select, arrows to navigate

