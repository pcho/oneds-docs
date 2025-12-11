---
title: State
description: "Documentation for State component"
---

## Description

State turns empty moments into opportunities. When there's nothing to display—an empty search, a cleared list, or an unused feature—this component transforms blank space into helpful guidance that points users toward their next action.

## Anatomy

1. **Illustration/Icon** - Visual representation of empty state
2. **Heading** - Primary message
3. **Description** - Explanation or guidance
4. **Action Button** - Call-to-action (optional)
5. **Secondary Actions** - Additional options (optional)

## Specification

**State Component Set:**
- **Dimensions**: `562px × 1352px` (component set canvas)
- **Variants**: Different empty state scenarios

**Layout:**
- Centered in container
- Vertical column
- Icon/illustration at top
- Text below
- Actions at bottom

**Visual Style:**
- Light, friendly illustrations
- Neutral, helpful tone
- Clear hierarchy
- Adequate spacing

## Do

- Use friendly, helpful language
- Provide clear next steps
- Match illustrations to the context
- Keep messages concise
- Offer relevant actions

## Don't

- Use negative or error-like language
- Leave users stranded without guidance
- Default to generic "No data" messages
- Make actions unclear or unhelpful

## Uses

**Scenarios:**
- Empty search results: "No patents found matching your criteria"
- Empty inbox: "All caught up! No new messages"
- Empty cart: "Your shopping cart is empty"
- Empty task list: "No tasks yet. Create your first task to get started"
- No data: "No data available for this time period"
- First-time use: "Welcome! Let's get you started"
- Cleared filter: "Try adjusting your filters to see more results"

## Behavior

**States:**
- Empty (no items)
- Zero state (feature never used)
- Error state (something went wrong)
- No results (search/filter returned nothing)

**Actions:**
- Primary: Create first item, adjust filters, try again
- Secondary: Learn more, view examples, get help

