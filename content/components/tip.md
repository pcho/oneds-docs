---
title: Tip
description: "Documentation for Tip component"
---

## Description

Tip delivers helpful hints without interrupting workflow. Less urgent than alerts, it gently guides users with best practices, shortcuts, and useful knowledge at just the right moment.

## Anatomy

1. **Container** - Light background box
2. **Icon** - Informational indicator (lightbulb, info icon)
3. **Content** - Helpful text or tip
4. **Close Button** - Dismiss tip (optional)

## Specification

**Tip Component:**
- **Width**: `320px` (default, flexible)
- **Layout**: Horizontal row
- **Gap**: `spacing-2` between icon and text
- **Padding**: `spacing-3`
- **Background**: `--bg-fill-lighter`
- **Border Radius**: `radius-medium`
- **Sizing**: Fixed width, hug height

**Visual Style:**
- Subtle, non-intrusive
- Light background color
- Small icon (info or lightbulb)
- Regular body text

## Do

- Keep tips concise and actionable
- Use a friendly, helpful tone
- Show tips at relevant moments
- Let users dismiss permanently when appropriate
- Reserve tips for helpful info, not critical warnings

## Don't

- Use for critical errors or warnings (use Alert instead)
- Show too many tips at once
- Repeat dismissed tips unless users opt back in
- Make tips look like ads
- Block important content
- Use overly technical language

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

