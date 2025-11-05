## Description

Selectable Card is an interactive card component that users can select as part of a choice set. With visual selection states, optional checkboxes or radio buttons, and collapsible content, it's perfect for configuration wizards, plan selection, or any interface where users choose between multiple options.

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
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `12px`
- **Selected**: Thicker border or accent color

**Header:**
- Component set with variants
- Includes prefix options
- Optional collapse control

## Do

- Show clear visual feedback on selection
- Use for mutually exclusive choices (radio) or multiple selections (checkbox)
- Provide descriptive titles and content
- Support keyboard selection
- Group related selectable cards together

## Don't

- Don't make cards too large to compare
- Don't hide important information in collapsed state
- Don't use for simple lists—use list items instead
- Don't forget hover and focus states

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

## Accessibility

- Use `role="radio"` or `role="checkbox"` appropriately
- `aria-checked` indicates selection
- `aria-expanded` for collapsible cards
- Keyboard navigation with arrow keys
- Focus indicators on all interactive elements
