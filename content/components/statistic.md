---
title: Statistic
description: "Documentation for Statistic component"
---

## Description

Statistic turns numbers into insights. Display metrics with emphasis, trend indicators, and visual status to help users understand key data at a glance. Perfect for dashboards and KPIs.

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
- **Padding**: `spacing-4`
- **Gap**: `spacing-4` between elements
- **Background**: White (`--bg-surface-white`)
- **Border**: `1px solid --bg-fill-light`
- **Border Radius**: `radius-medium`
- **Layout**: Horizontal row, center-aligned

**Statistic - Status:**
- Component set with variants
- Different status colors/styles

**Statistic - Trend:**
- **Layout**: Horizontal row
- **Gap**: `spacing-1`
- **Sizing**: Hug content
- Includes trend icon + percentage

**Statistic - Trend - Icons:**
- Up arrow (increase)
- Down arrow (decrease)
- Neutral/flat indicator

## Do

- Make numbers large and readable
- Use clear, concise labels
- Show trends with directional arrows
- Use color to indicate positive or negative changes
- Provide comparison context (vs. last week, etc.)
- Group related stats together

## Don't

- Show excessive decimal places
- Use vague or ambiguous labels
- Rely solely on color to convey meaning
- Forget units ($, %, etc.)
- Make trends confusing

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

