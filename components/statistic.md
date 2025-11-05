## Description

Statistic displays numerical data with emphasis, often with trend indicators, icons, and visual status. Perfect for dashboards and KPIs, it transforms raw numbers into meaningful insights that users can understand at a glance.

## Anatomy

1. **Container** - Card or inline wrapper
2. **Label** - What the number represents
3. **Value** - The main statistic (large, prominent)
4. **Status Indicator** - Color-coded status (optional)
5. **Trend** - Up/down arrow with percentage (optional)
6. **Trend Icon** - Arrow indicating direction
7. **Comparison** - Previous period comparison (optional)

## Specification

**Statistic Component:**
- **Width**: `320px` (default)
- **Padding**: `16px`
- **Gap**: `16px` between elements
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `8px`
- **Layout**: Horizontal row, center-aligned

**Statistic - Status:**
- Component set with variants
- Different status colors/styles

**Statistic - Trend:**
- **Layout**: Horizontal row
- **Gap**: `4px`
- **Sizing**: Hug content
- Includes trend icon + percentage

**Statistic - Trend - Icons:**
- Up arrow (increase)
- Down arrow (decrease)
- Neutral/flat indicator

## Do

- Make the number large and readable
- Use clear, concise labels
- Show trend direction with arrows
- Use color to indicate positive/negative trends
- Provide comparison context (vs. last week, etc.)
- Group related statistics together

## Don't

- Don't show too many decimal places
- Don't use ambiguous labels
- Don't rely on color alone for meaning
- Don't forget units ($, %, etc.)
- Don't make trends hard to understand

## Uses

- Dashboard KPIs
- Analytics overview
- Sales metrics
- User engagement stats
- Performance indicators
- Financial summaries
- Patent application statistics

**Examples:**
- "Total Patents: 1,247 ↑ 12% vs. last month"
- "Approval Rate: 87% ↓ 3%"
- "Pending Review: 45"

## Behavior

**Trend Colors:**
- Green (positive): Up arrow, improvement
- Red (negative): Down arrow, decline
- Gray (neutral): No change

**Updates:**
- Animate value changes
- Smooth counting animation
- Flash or pulse on significant change

## Accessibility

- Label and value clearly associated
- Trend direction described in text, not just color
- Screen readers announce: "Total patents, 1247, increased by 12 percent"
- Proper semantic structure
- Sufficient color contrast
