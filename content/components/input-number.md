---
title: Input Number
description: "Documentation for Input Number component"
---

## Description

Input Number is a specialized numeric field that makes entering and adjusting numbers a breeze. With built-in increment/decrement buttons, keyboard shortcuts, and smart validation, it transforms number entry into a precise, controlled experience. Perfect for quantities, prices, measurements, or any numeric value with boundaries.

## Anatomy

1. **Input Field** - Text input for numeric value
2. **Increment Button** - Plus button to increase value
3. **Decrement Button** - Minus button to decrease value
4. **Prefix** - Icon or text before value (optional)
5. **Suffix** - Unit or symbol after value (optional)
6. **Helper Text** - Guidance or error message (optional)

## Specification

**Default Input Number:**
- **Width**: `180px` (default, flexible)
- **Height**: `40px`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-small`
- **Background**: `--bg-surface-white`
- **Font Size**: `text-base`

**Control Buttons:**
- **Size**: `16px × 16px` (icon)
- **Position**: Right side, stacked vertically
- **Spacing**: `1px` between buttons
- **Background**: Transparent
- **Hover Background**: `--bg-fill-lighter`
- **Active Background**: `--bg-fill-light`
- **Disabled Color**: `--icon-disabled`

**Button Layout:**
- **Type**: Vertical (stacked up/down arrows)
- **Alternative**: Horizontal (minus/plus on sides)
- **Icons**: Up arrow (▲) and down arrow (▼)

**Currency Variant:**
- **Prefix**: `$` symbol or currency code
- **Width**: `200px` (slightly wider)
- **Decimal Places**: 2 (configurable)
- **Formatting**: Thousand separators (e.g., `1,234.56`)

**Spacing:**
- **Padding**: `spacing-2 spacing-3` (with space for buttons)
- **Button Padding**: `spacing-2`
- **Gap**: `spacing-1` between prefix/suffix and value

## Do

- Set appropriate min/max boundaries
- Specify decimal precision clearly
- Show units or currency in prefix/suffix
- Provide helpful placeholders (e.g., "0.00")
- Disable increment/decrement buttons at limits
- Validate input in real-time
- Support keyboard shortcuts (arrow keys, Page Up/Down)
- Format large numbers with thousand separators

## Don't

- Let invalid characters be typed
- Forget min/max constraints
- Hide the step increment value from users
- Make buttons too small to click
- Allow decimals when only integers are valid
- Forget edge cases like negative numbers
- Use this for non-numeric input
- Make increment/decrement too sensitive

## Uses

**Primary Use Cases:**

1. **E-commerce** - Product quantities, prices
2. **Forms** - Age, year, count fields
3. **Settings** - Timeout values, limits
4. **Shopping Cart** - Item quantities
5. **Financial** - Currency amounts, percentages
6. **Patent Fees** - Fee calculations, claim counts
7. **Measurements** - Dimensions, weights
8. **Time Duration** - Hours, minutes, seconds
9. **Ratings** - Numeric scores

## Behavior

### Input Interaction

**Manual Entry:**
1. User clicks input field
2. Cursor appears, field focused
3. User types numeric value
4. Non-numeric characters rejected
5. Value validates against min/max
6. Format applied on blur (if applicable)

**Increment/Decrement:**
1. User clicks up/down button
2. Value increases/decreases by step
3. Button disabled at min/max limits
4. Value updates immediately
5. Change event fires

### Keyboard Support

- `Arrow Up` - Increment by step
- `Arrow Down` - Decrement by step
- `Page Up` - Increment by 10× step
- `Page Down` - Decrement by 10× step
- `Home` - Jump to minimum value
- `End` - Jump to maximum value
- `Backspace/Delete` - Clear digits
- `Tab` - Move to next field

### Mouse Interactions

**Buttons:**
- Hover shows background highlight
- Click increments/decrements
- Hold to continuously increment/decrement
- Disabled state when at limits

**Scroll Wheel:**
- Scroll up/down to adjust value (when focused)
- Configurable sensitivity
- Respects step increment

### Validation

**Real-time:**
- Prevent typing non-numeric characters
- Show error on invalid value
- Auto-correct out-of-range on blur
- Format on blur (decimals, separators)

**Rules:**
- Minimum value constraint
- Maximum value constraint
- Step increment (e.g., only multiples of 5)
- Decimal precision
- Positive/negative numbers

### States

**Input States:**
- **Empty** - Placeholder visible
- **Filled** - Valid value displayed
- **Focus** - Border highlighted, cursor visible
- **Disabled** - Grayed out, buttons disabled
- **Error** - Red border, error message shown
- **Loading** - Spinner overlay (for dynamic validation)

**Button States:**
- **Default** - Normal appearance
- **Hover** - Background highlight
- **Active** - Pressed appearance
- **Disabled** - Grayed out at limits

### Formatting

**Currency:**
- Add currency symbol prefix
- Format with thousand separators: `1,234.56`
- Show appropriate decimal places
- Handle different currency formats

**Percentages:**
- Add `%` suffix
- Limit to 0-100 range
- Show decimal places if needed

**Large Numbers:**
- Add thousand separators: `1,000,000`
- Consider abbreviations for very large: `1.2M`
- Format on blur, plain on focus
