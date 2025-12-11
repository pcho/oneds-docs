---
title: Modal
description: "Documentation for Modal component"
---

## Description

Modals let users focus on one task at a time while staying connected to the underlying page. They're focused overlays that temporarily take center stage—perfect for forms, confirmations, and complex workflows that need full attention without losing context.

## Anatomy

1. **Action Footer**: A footer featuring Primary and Secondary buttons. A tertiary button is available for context-specific actions but should be used with caution.
2. **Content**: The modal can contain simple or advanced forms, tables, or multiple tabs with various content types.
3. **Action Buttons (optional)**: Additional action buttons for advanced modals, providing related content options.
4. **Description (optional)**: A brief description that adds context to the title and modal content.
5. **Title**: A concise and descriptive title.
6. **Dismiss Button**: Enables users to close the modal.
7. **Text Content**: Text-based content for confirmation modals, detailing the current action.
8. **Action Confirmation (optional)**: An optional confirmation for destructive actions that activates the main action button.

## Specification

**Modal Container:**
- **Max Width**: `768px` (desktop)
- **Height**: Auto (fits content)
- **Max Height**: Viewport height minus 160px (80px safe zones top/bottom)
- **Background**: `--bg-surface-white`
- **Border Radius**: `radius-default`
- **Shadow**: `shadow-floating`
- **Position**: Centered horizontally and vertically

**Backdrop:**
- **Background**: Black with 50% opacity (`rgba(0, 0, 0, 0.5)`)
- **Blur**: Optional background blur
- **Clickable**: Yes, dismisses modal

**Modal Header:**
- **Height**: Auto
- **Padding**: `spacing-6`
- **Border Bottom**: `1px solid` `--border-lighter`
- **Layout**: Title + close button

**Modal Body:**
- **Padding**: `spacing-6`
- **Max Height**: Scrollable if content exceeds
- **Overflow**: Auto scroll

**Modal Footer:**
- **Height**: Auto
- **Padding**: `spacing-6`
- **Border Top**: `1px solid` `--border-lighter` (optional)
- **Layout**: Buttons right-aligned
- **Gap**: `spacing-1` between button groups

**Sizes:**
- **Small**: `400px` max width
- **Medium**: `600px` max width
- **Default**: `768px` max width
- **Large**: `960px` max width
- **Full Screen**: 100% width/height (mobile)

**Safe Zones:**
- There is an 80-pixel safe zone at the top and bottom of the screen for larger modals, helping users feel connected to the original context and providing an additional way to dismiss the modal

## Do

- Include key information in the title and action button for destructive modals—users often skip body text
- Require explicit confirmation (like typing to confirm) for highly destructive actions
- Keep content concise and focused on a single goal
- Connect the modal visually to the previous screen
- Always include at least one button to guide users forward
- Use modals for multi-step flows that maintain context

## Don't

- Forget the close button—users need an easy way to dismiss the modal
- Use more than two columns in modal forms—keep it simple
- Stack modals on top of each other except for simple confirmations
- Create modals without a clear primary action
- Make modals so long they need internal scrolling—consider a full page instead
- Use modals for navigation—use proper pages or drawers

## Behavior

For detailed behavior patterns, including display, positioning, focus management, dismissal methods, and responsive behavior, see the **[Modal Behavior Patterns](../patterns/behaviours/modal.md)** documentation.

## Uses

**Primary Use Cases:**

1. **Forms** - Multi-step or complex forms
2. **Confirmations** - Delete, publish, or critical actions
3. **Details View** - Expanded item information
4. **Media Viewer** - Image/video gallery
5. **Settings** - User preferences or configuration
6. **Create/Edit** - Quick create or edit workflows
7. **Warnings** - Important alerts requiring acknowledgment

**Example Scenarios:**

**Confirmation Modal:**
```
┌─────────────────────────────────┐
│ Delete Patent Application?  [×] │
├─────────────────────────────────┤
│                                 │
│ This action cannot be undone.   │
│ Patent #12345 will be           │
│ permanently deleted.             │
│                                 │
├─────────────────────────────────┤
│           [Cancel]  [Delete]    │
└─────────────────────────────────┘
```

**Form Modal:**
```
┌─────────────────────────────────┐
│ New Patent Application      [×] │
├─────────────────────────────────┤
│                                 │
│ Title *                         │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Inventors *                     │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│         [Cancel]  [Create]      │
└─────────────────────────────────┘
```

## Initial Focus Strategies

**Choose the right focus strategy based on modal purpose:**

### Strategy A: Focus Title First (For Warnings)

**Use for:**
- Confirmation and warning modals
- Destructive actions
- Critical decisions

**Benefits:**
- Users hear the full context before acting
- Reduces accidental confirmations
- Better for critical decisions

### Strategy B: Focus First Input (For Forms)

**Use for:**
- Form modals for creating or editing
- Quick data entry tasks
- Non-critical interactions

**Benefits:**
- Users can start typing immediately
- Faster for repetitive tasks
- More efficient workflow

## Four Required Dismissal Methods

**Every modal must support these dismissal methods:**

1. **Close button (X)** - Top-right corner
2. **Cancel button** - Explicit cancel in footer
3. **Escape key** - Keyboard dismissal
4. **Backdrop click** - Click outside modal (optional but recommended)

**Why multiple methods:**
- Users have different interaction preferences
- Ensures keyboard, mouse, and touch accessibility
- Makes dismissal discoverable
- Allows recovery from accidental opens

## When NOT to Use

### Use Alternatives Instead When:

**Use Drawer when:**
- Showing side context that doesn't require full attention
- Editing while viewing main content
- Filters or settings that don't block workflow
- User needs to reference main page while interacting

**Use Inline Expansion when:**
- Simple show/hide toggles
- Non-critical additional details
- Content that doesn't need isolation
- Expanding table rows, accordion items

**Use New Page when:**
- Complex multi-step workflows (>5 steps)
- Users need browser back/forward
- Deep navigation required
- Content needs its own URL for bookmarking

**Use Toast/Alert when:**
- Brief confirmations that don't require action
- Success/error messages
- Non-blocking notifications
- Transient information

### Limitations

**Maximum action buttons: 2-3 buttons**
- More buttons create decision paralysis
- If you need more actions, consider moving to a full page, using progressive disclosure, or simplifying the workflow

**Content scrolling:**
- Only the body should scroll—header and footer stay fixed
- If forms are too long, consider using a full page instead

**Nested modals:**
- Avoid stacking modals—they're confusing and hard to manage
- Exception: Simple confirmations over form modals
- If you need multiple layers, redesign the flow

## Content Guidelines

### Title Format

**For confirmations (use questions):**
- "Delete this patent application?"
- "Discard unsaved changes?"
- "Remove Sarah from team?"

**NOT:**
- "Are you sure?"
- "Confirm action"
- "Warning"

**For information/forms (use statements):**
- "New patent application"
- "Edit team member"
- "Application submitted successfully"

**NOT:**
- "Create"
- "Edit"
- "Success!"

**Rule:** State the outcome or ask specific question, not vague confirmation.

### Button Text

Follow the [Content Style Guide](/docs/content/style-guide.md):
- Use {verb} + {noun}: "Delete patent" not "Delete"
- Primary action: Specific verb ("Create application")
- Secondary action: Can be generic ("Cancel")
- Destructive actions: Be explicit ("Delete permanently")
