## Description

Input Number is a specialized numeric input field that makes entering and adjusting numbers a breeze. With built-in increment/decrement buttons, keyboard shortcuts, and smart validation, it transforms number entry from a typing task into a precise, controlled experience. Perfect for quantities, prices, measurements, or any numeric value that needs boundaries.

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
- **Border**: `1px solid #D1D6DB`
- **Border Radius**: `6px`
- **Background**: White (`#FFFFFF`)
- **Font Size**: `14px`

**Control Buttons:**
- **Size**: `16px × 16px` (icon)
- **Position**: Right side, stacked vertically
- **Spacing**: `1px` between buttons
- **Background**: Transparent
- **Hover Background**: `#F5F5F5`
- **Active Background**: `#E6E6E6`
- **Disabled Color**: `#D1D6DB`

**Button Layout:**
- **Type**: Vertical (stacked up/down arrows)
- **Alternative**: Horizontal (minus/plus on sides)
- **Icons**: Up arrow (�) and down arrow (�)

**Currency Variant:**
- **Prefix**: `$` symbol or currency code
- **Width**: `200px` (slightly wider)
- **Decimal Places**: 2 (configurable)
- **Formatting**: Thousand separators (e.g., `1,234.56`)

**Spacing:**
- **Padding**: `8px 12px` (with space for buttons)
- **Button Padding**: `8px`
- **Gap**: `4px` between prefix/suffix and value

## Do

- Set appropriate min/max boundaries
- Specify decimal precision clearly
- Show unit or currency in prefix/suffix
- Provide helpful placeholder (e.g., "0.00")
- Disable buttons at min/max limits
- Validate input in real-time
- Support keyboard shortcuts (arrow keys)
- Format large numbers with separators

## Don't

- Don't allow invalid characters to be typed
- Don't forget min/max constraints
- Don't hide the step increment value
- Don't make buttons too small to click
- Don't allow decimals if only integers valid
- Don't forget to handle edge cases (negative numbers)
- Don't use for non-numeric input
- Don't make increment/decrement too sensitive

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

**Example Scenarios:**

**Quantity Selector:**
```
Quantity: [] 1 [+]
          Min: 1, Max: 99
```

**Price Input:**
```
Amount: $ [] 100.00 [+]
        Step: 0.01
```

**Age Input:**
```
Age: [] 25 [+] years
     Min: 18, Max: 120
```

**Percentage:**
```
Discount: [] 15 [+] %
          Min: 0, Max: 100
```

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
- `Page Up` - Increment by 10� step
- `Page Down` - Decrement by 10� step
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

## Accessibility

**Semantic HTML:**
```html
<div class="input-number">
  <input
    type="text"
    inputmode="numeric"
    pattern="[0-9]*"
    role="spinbutton"
    aria-valuenow="5"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Quantity"
    id="quantity-input">

  <button
    aria-label="Increase value"
    aria-controls="quantity-input"
    tabindex="-1">
    �
  </button>

  <button
    aria-label="Decrease value"
    aria-controls="quantity-input"
    tabindex="-1">
    �
  </button>
</div>
```

**ARIA Attributes:**
- `role="spinbutton"` on input
- `aria-valuenow` - Current value
- `aria-valuemin` - Minimum allowed value
- `aria-valuemax` - Maximum allowed value
- `aria-valuetext` - Formatted value description
- `aria-label` - Descriptive label
- `aria-describedby` - Link to helper text/error

**Keyboard Navigation:**
- Full keyboard control (arrows, page up/down, home/end)
- `Tab` to focus input
- Buttons not in tab order (controlled via input)
- `Escape` to revert to last valid value

**Screen Reader Support:**
- Announce current value clearly
- Announce min/max limits
- Announce when value reaches limit
- Announce errors and constraints
- Read prefix/suffix (e.g., "$50 dollars")
- Announce step increment if significant

**Focus Management:**
- Clear focus indicator on input
- Focus remains on input when using buttons
- Buttons highlight on hover but don't steal focus
- Focus visible meets WCAG guidelines

**Input Mode:**
- Use `inputmode="numeric"` for mobile keyboards
- Use `pattern="[0-9]*"` for iOS numeric keyboard
- Consider `type="number"` but test carefully (native validation quirks)

**Error Handling:**
- Clear error messages
- `aria-invalid="true"` on error
- `aria-describedby` links to error message
- Error announced to screen readers
- Visual error indicators (color + icon)

**Color & Contrast:**
- Text meets 4.5:1 contrast minimum
- Error states meet contrast requirements
- Don't rely on color alone for validation
- Disabled state clearly distinguishable

**Touch Targets:**
- Buttons minimum 44�44px on mobile
- Adequate spacing between buttons
- Input field large enough for touch
- Consider larger buttons on touch devices

**Responsive:**
- Full-width on mobile (optional)
- Larger touch targets on mobile
- Simplified formatting on small screens
- Consider native number input on mobile

**Alternative Input:**
- Allow typing for speed
- Buttons for precision
- Both methods always available
- Keyboard shortcuts for power users

**Reduced Motion:**
- No animation on value change if preferred
- Instant updates, no transitions
- Respect prefers-reduced-motion
