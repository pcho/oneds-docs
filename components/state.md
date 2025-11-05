## Description

State is an empty state component that appears when there's no content to display. Whether it's an empty search, a cleared list, or a feature waiting to be used, state components transform potentially confusing blank spaces into helpful, actionable moments that guide users toward their next step.

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
- Match illustration to context
- Keep message concise
- Offer relevant actions
- Make empty states feel purposeful

## Don't

- Don't use negative or error-like language
- Don't leave users without guidance
- Don't use generic "No data" messages
- Don't forget to test empty states
- Don't make actions unclear

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

## Accessibility

- Ensure illustrations have alt text
- Text is readable and properly structured
- Action buttons keyboard accessible
- Don't rely on illustration alone to convey meaning
- Announce state changes to screen readers
