## Description

Modal allows users to concentrate on intricate tasks while staying connected to the page context—a focused overlay that temporarily takes center stage for forms, confirmations, or complex workflows without losing sight of where you came from.

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
- **Background**: White (`#FFFFFF`)
- **Border Radius**: `12px`
- **Shadow**: Large elevation (floating shadow)
- **Position**: Centered horizontally and vertically

**Backdrop:**
- **Background**: Black with 50% opacity (`rgba(0, 0, 0, 0.5)`)
- **Blur**: Optional background blur
- **Clickable**: Yes, dismisses modal

**Modal Header:**
- **Height**: Auto
- **Padding**: `24px`
- **Border Bottom**: `1px solid #ECEEF0`
- **Layout**: Title + close button

**Modal Body:**
- **Padding**: `24px`
- **Max Height**: Scrollable if content exceeds
- **Overflow**: Auto scroll

**Modal Footer:**
- **Height**: Auto
- **Padding**: `24px`
- **Border Top**: `1px solid #ECEEF0` (optional)
- **Layout**: Buttons right-aligned
- **Gap**: `4px` between button groups

**Sizes:**
- **Small**: `400px` max width
- **Medium**: `600px` max width
- **Default**: `768px` max width
- **Large**: `960px` max width
- **Full Screen**: 100% width/height (mobile)

**Safe Zones:**
- There is an 80-pixel safe zone at the top and bottom of the screen for larger modals, helping users feel connected to the original context and providing an additional way to dismiss the modal

## Do

- For warning modals about destructive or irreversible actions, include key information in the title and action, as users may only read these and skip the main content. For highly destructive actions, provide a confirmation option before enabling the destructive button.
- Clearly connect the modal to the previous screen and keep the content concise to achieve specific goals within limited space.
- Use modals when users need to continue a secondary part of a flow or task, ensuring they maintain context. Always include at least one button in the modal footer to guide the user, even for purely informative dialogs.
- Use a modal for flows that require multiple pages of forms or information.

## Don’t

- Always include a clear and visible close button at the top of the modal, allowing users to easily dismiss it and return to their original context.
- Limit forms inside modals to a maximum of two columns.
- Avoid displaying one modal on top of another; instead, either integrate the additional information into the existing modal or direct users to a new screen. Stacking modals is acceptable for confirmations.

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

## WAI-ARIA Pattern

This component implements the [Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) from the WAI-ARIA Authoring Practices Guide.

**Key ARIA attributes:**
- `role="dialog"` - Identifies the element as a dialog
- `aria-modal="true"` - Indicates this is a modal dialog (blocks background interaction)
- `aria-labelledby` - Points to the dialog title (required)
- `aria-describedby` - Points to the dialog description (recommended)
- `aria-hidden="true"` - Applied to background content when modal is open

**Reference:** [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Initial Focus Strategies

**Two main strategies for setting initial focus when modal opens:**

### Strategy A: Focus Title First (Recommended for Warnings)

**Use when:**
- Confirmation/warning modals
- Destructive actions
- Critical alerts
- Users need context before acting

**Example:**
```html
<div role="dialog" aria-labelledby="title">
  <h2 id="title" tabindex="-1">Delete this patent application?</h2>
  <p>This action cannot be undone.</p>
  <button>Cancel</button>
  <button>Delete</button>
</div>
```

**Benefits:**
- User hears title and description before reaching any action
- Reduces accidental confirmations
- Better for critical decisions

**Implementation:** Add `tabindex="-1"` to title, focus it programmatically on open.

### Strategy B: Focus First Interactive Element (Recommended for Forms)

**Use when:**
- Form modals (create, edit)
- User needs to enter information
- Non-critical interactions
- Quick data entry

**Example:**
```html
<div role="dialog" aria-labelledby="title">
  <h2 id="title">New patent application</h2>
  <label>
    Title *
    <input type="text" autofocus>
  </label>
  <button>Cancel</button>
  <button>Create</button>
</div>
```

**Benefits:**
- Immediate interaction ready
- Faster for repetitive tasks
- Users can start typing immediately

**Implementation:** Focus first input field programmatically on open (or use `autofocus` attribute).

## Four Required Dismissal Methods

**Every modal MUST support these four dismissal methods:**

1. **Close button (X)** - Top-right corner close button
2. **Cancel button** - Explicit cancel action in footer
3. **Escape key** - Keyboard dismissal
4. **Backdrop click** - Click outside modal (optional but recommended)

**Why four methods:**
- Different users have different preferences
- Accessibility (keyboard, mouse, touch)
- Discoverability (visual close affordances)
- Error recovery (accidental modal opens)

**Example implementation:**
```html
<div class="modal-backdrop" onclick="closeModal()">
  <div role="dialog" onclick="event.stopPropagation()">
    <!-- Close button (method 1) -->
    <button class="close-button" aria-label="Close">×</button>

    <h2>Modal Title</h2>
    <p>Content...</p>

    <!-- Cancel button (method 2) -->
    <button onclick="closeModal()">Cancel</button>
    <button>Confirm</button>
  </div>
</div>

<script>
// Escape key (method 3)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalIsOpen) {
    closeModal();
  }
});

// Backdrop click (method 4) - already in HTML
</script>
```

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

**Maximum action buttons:** 2-3 buttons maximum
- Too many buttons = decision paralysis
- If you need more actions, consider:
  - Moving to full page
  - Using progressive disclosure (show more link)
  - Simplifying the workflow

**Content scrolling:**
- Body should scroll, not entire modal
- Header and footer stay fixed
- Long forms may indicate modal isn't right choice

**Nested modals:**
- Avoid stacking modals (confusing, hard to manage)
- Exception: Simple confirmation over form modal
- Consider redesigning flow if you need multiple modal layers

## Content Guidelines

### Title Format

**For confirmations (use questions):**
- ✅ "Delete this patent application?"
- ✅ "Discard unsaved changes?"
- ✅ "Remove Sarah from team?"

**NOT:**
- ❌ "Are you sure?"
- ❌ "Confirm action"
- ❌ "Warning"

**For information/forms (use statements):**
- ✅ "New patent application"
- ✅ "Edit team member"
- ✅ "Application submitted successfully"

**NOT:**
- ❌ "Create"
- ❌ "Edit"
- ❌ "Success!"

**Rule:** State the outcome or ask specific question, not vague confirmation.

### Button Text

Follow the [Content Style Guide](/docs/content/style-guide.md):
- Use {verb} + {noun}: "Delete patent" not "Delete"
- Primary action: Specific verb ("Create application")
- Secondary action: Can be generic ("Cancel")
- Destructive actions: Be explicit ("Delete permanently")

## Accessibility

**Semantic HTML:**
```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description">

  <div class="modal-header">
    <h2 id="modal-title">Delete Patent Application?</h2>
    <button aria-label="Close modal">×</button>
  </div>

  <div class="modal-body">
    <p id="modal-description">
      This action cannot be undone.
    </p>
  </div>

  <div class="modal-footer">
    <button>Cancel</button>
    <button class="btn-danger">Delete</button>
  </div>
</div>
```

**ARIA Attributes:**
- `role="dialog"` on modal container
- `aria-modal="true"` indicates modal behavior
- `aria-labelledby` links to modal title
- `aria-describedby` links to description
- `aria-hidden="true"` on background content

**Focus Management:**
- When the modal opens, set the initial focus to the first user input location
- For forms, focus on the first field; for transactional modals without input fields, focus on the primary button
- Trap focus within modal
- `Tab` cycles through modal elements
- Return focus to trigger element on close

**Keyboard Navigation:**
- `Tab` - Next focusable element
- `Shift + Tab` - Previous element
- `Enter` - Activate focused button
- `Escape` - Close modal
- Focus trap prevents tabbing outside

**Screen Reader Support:**
- Announce modal opening
- Read modal title immediately
- Read description content
- Announce buttons and actions
- Announce when modal closes
- Background content hidden from screen readers

**Color & Contrast:**
- Text meets 4.5:1 contrast
- Buttons meet contrast requirements
- Focus indicators visible (3:1)
- Backdrop provides clear separation

**Touch Targets:**
- Buttons minimum 44×44px
- Close button large enough
- Adequate spacing between actions
- Full button area tappable

**Responsive:**
- Full screen on mobile
- Simplified layout on small screens
- Scrollable content on overflow
- Maintained touch targets
