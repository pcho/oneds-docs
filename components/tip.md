## Description

Tip is a subtle informational component that provides helpful hints, suggestions, or contextual information without interrupting the user's workflow. Less urgent than alerts, tips gently guide users with best practices, shortcuts, or useful knowledge at relevant moments.

## Anatomy

1. **Container** - Light background box
2. **Icon** - Informational indicator (lightbulb, info icon)
3. **Content** - Helpful text or tip
4. **Close Button** - Dismiss tip (optional)

## Specification

**Tip Component:**
- **Width**: `320px` (default, flexible)
- **Layout**: Horizontal row
- **Gap**: `8px` between icon and text
- **Padding**: `12px`
- **Background**: Light gray (`#F4F6F8`)
- **Border Radius**: `8px`
- **Sizing**: Fixed width, hug height

**Visual Style:**
- Subtle, non-intrusive
- Light background color
- Small icon (info or lightbulb)
- Regular body text

## Do

- Keep tips concise and actionable
- Use friendly, helpful tone
- Show tips at relevant moments
- Allow users to dismiss permanently (if appropriate)
- Use for helpful information, not critical warnings
- Test that tips actually help users

## Don't

- Don't use for critical errors or warnings (use Alert)
- Don't show too many tips at once
- Don't repeat dismissed tips unless user opts in
- Don't make tips look like ads
- Don't block important content
- Don't use overly technical language

## Uses

- Onboarding hints
- Feature discovery
- Best practices
- Keyboard shortcuts
- Pro tips
- Contextual help
- First-time user guidance

**Examples:**
- "💡 Tip: Press Cmd+K to quickly search patents"
- "💡 Pro tip: Drag and drop to reorder items"
- "ℹ️ You can save time by using bulk actions"
- "💡 Did you know? You can export results as CSV"

## Behavior

**Display:**
- Appears contextually when relevant
- Can be persistent or dismissible
- Fades in smoothly

**Dismissal:**
- Close button removes tip
- Optional "Don't show again" checkbox
- Remembers dismissal preference

**States:**
- Visible
- Dismissed
- Hidden (not yet triggered)

## Accessibility

- Use `role="note"` or `role="complementary"`
- Include descriptive icon alt text
- Close button has clear label
- Don't use `role="alert"` (not urgent)
- Keyboard accessible (Tab to close button)
- Screen readers can skip if desired
- Sufficient color contrast for text
