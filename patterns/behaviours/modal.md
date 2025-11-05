# Modal Behaviors

Modals (also called dialogs) are focused overlays that temporarily interrupt the user's workflow to display important information, collect input, or confirm actions. Understanding modal behavior patterns ensures consistent, accessible implementation across your application.

## Core Concept

Modals are temporary UI elements that:
- Appear on top of all page content
- Block interaction with background content
- Focus user attention on a specific task
- Require explicit dismissal before continuing
- Preserve context of the underlying page

## Display and Positioning

### Opening Behavior

**Visual Presentation:**
- Modal appears on top of all content
- Backdrop (overlay) covers entire viewport
- Modal centers horizontally and vertically in viewport
- Backdrop opacity: 50-60% black (`rgba(0, 0, 0, 0.5-0.6)`)
- Optional backdrop blur for depth perception

**Animation:**
- **Backdrop**: Fade in 200-300ms
- **Modal**:
  - Fade in: 200-300ms
  - Scale up: 0.95 → 1.0 (optional)
  - Slide down slightly: -20px → 0 (optional)
- **Easing**: Ease-out
- **Simultaneous**: Backdrop and modal animate together

**Example Opening Sequence:**
```
1. User triggers modal (button click)
2. Backdrop fades in (200ms)
3. Modal fades + scales in (300ms)
4. Body scroll locks (prevent background scroll)
5. Focus moves to modal (first input or primary button)
6. Focus trap activates (prevents tabbing outside)
```

### Positioning Rules

**Vertical Positioning:**
- **Default**: Centered vertically in viewport
- **Top-aligned**: For very tall modals (remains centered but can scroll)
- **Safe Zones**: 80px top and bottom margins for large modals
  - Keeps user connected to underlying context
  - Provides space for backdrop click dismissal

**Horizontal Positioning:**
- **Always**: Centered horizontally
- **Responsive**: Scales down when viewport narrower than modal width
- **Mobile**: Full-width with minimal side margins

**Scroll Behavior:**
- **Modal content**: Scrolls independently if exceeds viewport
- **Page content**: Scroll locked when modal is open
- **Long content**: Modal body scrolls, header/footer stay fixed

### Responsive Sizing

**Desktop:**
- Small: 400px wide
- Medium: 600px wide
- Default/Regular: 768px wide
- Large: 960px wide
- Extra Large: 1060px+ wide

**Tablet (768px - 1024px):**
- Modal scales down to fit
- Maintains proportions
- Minimum 40px side margins

**Mobile (<768px):**
- Nearly full-width (16-24px margins)
- Or full-screen modal (100% width and height)
- Bottom sheet alternative (slides from bottom)

## Focus Management

### Initial Focus

**Opening Focus Rules:**

1. **Form Modals**: Focus first input field
   ```
   ┌─────────────────────────────────┐
   │ New Application             [×] │
   ├─────────────────────────────────┤
   │ Title *                         │
   │ ┌─────────────────────────────┐ │
   │ │ [FOCUSED]                   │ │ ← Focus here
   │ └─────────────────────────────┘ │
   └─────────────────────────────────┘
   ```

2. **Transactional Modals** (no inputs): Focus primary action button
   ```
   ┌─────────────────────────────────┐
   │ Delete Application?         [×] │
   ├─────────────────────────────────┤
   │ This action cannot be undone.   │
   ├─────────────────────────────────┤
   │         [Cancel] [[Delete]]     │ ← Focus here
   └─────────────────────────────────┘
   ```

3. **Informational Modals**: Focus close button or modal container

### Focus Trap

**Behavior:**
- Focus stays within modal (cannot tab to background)
- Tab cycles through focusable elements
- Shift+Tab cycles backward
- Reaching end returns to beginning

**Focusable Elements:**
- Input fields
- Buttons
- Links
- Select dropdowns
- Checkboxes/radios
- Any element with `tabindex="0"`

**Focus Trap Implementation:**
- First focusable element
- All interactive elements in between
- Last focusable element
- Loop back to first

### Focus Return

**On Modal Close:**
- Focus returns to element that opened modal (trigger element)
- If trigger removed, focus goes to logical alternative
- Smooth transition, no jarring jumps
- Screen reader announces return

## Dismissal Behavior

### Methods of Dismissal

**1. Task Completion**
- User clicks primary action button (Save, Submit, Create, etc.)
- Modal closes after successful action
- Changes are saved
- Success feedback shown (toast/notification)
- Focus returns to trigger

**2. Cancel Button**
- User clicks "Cancel" or "Close" button in footer
- Modal closes without saving changes
- All inputs reset or changes discarded
- Confirmation if changes were made (optional)
- Focus returns to trigger

**3. Close Icon (×)**
- User clicks × button in top-right corner
- Same behavior as Cancel button
- No data submitted
- Changes discarded
- Focus returns to trigger

**4. Escape Key**
- User presses `Escape` key
- Same behavior as clicking × or Cancel
- Should be available unless modal is critical/blocking
- Screen reader announces dismissal

**5. Backdrop Click**
- User clicks outside modal (on backdrop)
- Modal closes without saving
- Optional behavior (can be disabled for important modals)
- Recommended for non-destructive flows
- Not recommended for forms with data entered

### Confirmation on Dismiss

**When Changes Made:**
```
User edits form → Clicks × or Cancel → Show confirmation:

┌─────────────────────────────────┐
│ Unsaved Changes             [×] │
├─────────────────────────────────┤
│                                 │
│ You have unsaved changes.       │
│                                 │
│ Are you sure you want to leave  │
│ without saving?                 │
│                                 │
├─────────────────────────────────┤
│ [Discard changes]   [Keep editing] │
└─────────────────────────────────┘
```

**Implementation:**
- Track if form has been modified (dirty state)
- Show confirmation modal on dismiss attempt
- Two options: Discard changes, Keep editing
- Clear warning if no changes made
- Remember user preference (optional)

### Closing Animation

**Visual Sequence:**
1. Modal fades out: 200ms
2. Optional scale down: 1.0 → 0.95
3. Backdrop fades out: 200ms (simultaneous)
4. Body scroll unlocked
5. Focus returns to trigger
6. Modal removed from DOM

**Easing:** Ease-in (opposite of opening)

## Special Modal Types

### Confirmation Modals

**Purpose:** Confirm destructive or irreversible actions

**Characteristics:**
- Short, focused content
- Clear question as title
- Explanation of consequences
- Two clear options (proceed or cancel)
- Destructive button styled appropriately (red)

**Example:**
```
┌─────────────────────────────────┐
│ Delete 15 Applications?     [×] │
├─────────────────────────────────┤
│                                 │
│ ⚠️ This action cannot be undone. │
│                                 │
│ All data will be permanently    │
│ deleted from the system.        │
│                                 │
├─────────────────────────────────┤
│ [Delete]              [Cancel]  │
└─────────────────────────────────┘
```

**Focus:** Primary button (destructive action)

### Form Modals

**Purpose:** Collect user input

**Characteristics:**
- Clear title describing what's being created/edited
- Organized form fields
- Validation feedback
- Primary action: Save/Create
- Secondary action: Cancel
- Optional: Multi-step wizard

**Focus:** First input field

### Information Modals

**Purpose:** Display important information

**Characteristics:**
- Informational title
- Content area with details
- Single action button: Close or OK
- No Cancel needed
- May include links or formatted content

**Focus:** Modal container or close button

### Consent/Cookie Modals

**Purpose:** Obtain user consent (GDPR, cookies, etc.)

**Characteristics:**
- Clear explanation of what user is consenting to
- Multiple options (Accept, Reject, Customize)
- May be persistent (required for site use)
- Sticky footer with actions
- Often larger with detailed information

**Focus:** Primary action (Accept) or customization link

## Stacking and Nesting

### Multiple Modals

**Avoid Stacking:**
- Don't open modal on top of modal
- Exception: Confirmation modals (destructive actions)
- Use multi-step modal instead of stacking

**Acceptable Stacking:**
```
Base Modal (Form) → Confirmation Modal (Delete)
User fills form → Clicks Delete → Confirm deletion → Both close
```

**Stacking Implementation:**
- Each modal has higher z-index
- Each has its own backdrop
- Focus trap applies to topmost modal
- Close top modal returns to previous
- Escape key closes topmost only

### Alternative to Stacking

**Multi-Step Modals:**
- Single modal, multiple views
- Progress indicator (steps)
- Navigation: Back, Next buttons
- Maintains single focus trap
- Better UX than stacking

**Drawer from Modal:**
- Modal remains open
- Drawer slides in from side
- Shows related content
- Close drawer returns to modal
- Different pattern, not stacking

## Loading States

### Async Operations

**Initial Load:**
- Show spinner in modal body while loading data
- Or skeleton placeholders
- Maintain modal size (prevent layout shift)
- Show error state if load fails

**Form Submission:**
```
Before:
[Cancel] [Save]

During:
[Cancel] [⟳ Saving...]

After:
Modal closes → Success toast
```

**Button States:**
- Disable all buttons during submission
- Show spinner on primary button
- Prevent double submission
- Timeout with error message if too long

## Accessibility

### Semantic HTML

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description">

  <div class="modal-header">
    <h2 id="modal-title">Delete Application?</h2>
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

### ARIA Attributes

- `role="dialog"` - Identifies as modal dialog
- `aria-modal="true"` - Indicates modal behavior
- `aria-labelledby` - Links to title element
- `aria-describedby` - Links to description
- `aria-hidden="true"` - On background content when modal open

### Screen Reader Behavior

- **Opening**: Announce "Dialog opened" + title
- **Content**: Read title and description
- **Focus**: Announce focused element
- **Buttons**: Read button labels
- **Closing**: Announce "Dialog closed"
- **Background**: Ignore background content (aria-hidden)

### Keyboard Support

**Required Keys:**
- `Tab` - Navigate forward through focusable elements
- `Shift + Tab` - Navigate backward
- `Enter` - Activate focused button
- `Space` - Activate focused button or checkbox
- `Escape` - Close modal

**Focus Trap:**
- Must trap focus within modal
- Tab from last element goes to first
- Shift+Tab from first goes to last
- No access to background elements

### Reduced Motion

For users with `prefers-reduced-motion`:
- Instant appearance (no fade/scale animations)
- Instant disappearance
- Fade only (no transform animations)
- Respect user preferences

## Best Practices

### Do
- Center modal in viewport
- Use backdrop to block background interaction
- Trap focus within modal
- Return focus on close
- Support Escape key dismissal
- Provide clear close options
- Keep content focused and concise
- Use for temporary, focused tasks
- Confirm destructive actions
- Show loading states

### Don't
- Don't stack multiple modals (except confirmation)
- Don't make modals too large (users lose context)
- Don't forget to lock body scroll
- Don't forget focus management
- Don't dismiss on backdrop click for complex forms
- Don't open modals automatically without user action
- Don't use for primary navigation
- Don't forget mobile experience
- Don't trap users (always provide exit)
- Don't forget keyboard support

## Related Patterns

Modals work closely with other patterns:

- **[Common Actions](./common.md)** - Save, Cancel, Delete buttons in modals
- **[Drawer](./drawer.md)** - Alternative to modal for less critical content
- **[Notification](./notification.md)** - Feedback after modal actions complete
- **[Action Bar](./action-bar.md)** - Bulk action confirmations use modals
- **[Table](./table.md)** - Row actions often open modals for editing
- **[Filtering](./filtering.md)** - Advanced filters may appear in modal dialogs
- **[Multi-Step Creation](../flows/multi-step-creation.md)** - Multi-step wizards often use modal containers

## Common Modal Use Cases

### Confirmation Modal
Used for delete, save, and other important actions:
```
┌────────────────────────────────────┐
│ Delete Patent Application?    [×]  │
├────────────────────────────────────┤
│ This action cannot be undone.      │
│                                    │
│ Patent #12345 will be permanently  │
│ deleted from the system.           │
├────────────────────────────────────┤
│ [Cancel]              [Delete]     │
└────────────────────────────────────┘
```
See **[Common Actions - Delete](./common.md#8-delete)** for details.

### Form Modal
Collect input or edit records:
```
┌────────────────────────────────────┐
│ Edit Patent Application       [×]  │
├────────────────────────────────────┤
│ Title: [___________________]       │
│                                    │
│ Status: [Filed ▼]                  │
│                                    │
│ Date: [2024-01-15] [📅]            │
├────────────────────────────────────┤
│ [Cancel]              [Save]       │
└────────────────────────────────────┘
```

### Information Modal
Display details or help:
```
┌────────────────────────────────────┐
│ Patent Details                [×]  │
├────────────────────────────────────┤
│ Application #: US2024-12345        │
│ Title: AI-Powered Device           │
│ Filed: January 15, 2024            │
│ Status: Under Review               │
│                                    │
│ [View Full Details]                │
├────────────────────────────────────┤
│                       [Close]      │
└────────────────────────────────────┘
```

### Selection Modal
Choose from options:
```
┌────────────────────────────────────┐
│ Add Document to Patent        [×]  │
├────────────────────────────────────┤
│ Search: [_____________________] 🔍 │
│                                    │
│ ○ Claims.pdf                       │
│ ○ Drawings.pdf                     │
│ ○ Specifications.docx              │
│                                    │
│ 1 of 3 selected                    │
├────────────────────────────────────┤
│ [Cancel]              [Add]        │
└────────────────────────────────────┘
```

## Implementation Checklist

- [ ] Modal centers in viewport
- [ ] Backdrop blocks background interaction
- [ ] Opening animation smooth (fade in)
- [ ] Focus moves to appropriate element on open
- [ ] Focus trap works correctly (Tab cycles within)
- [ ] Escape key closes modal
- [ ] Close button (×) works
- [ ] Cancel button works
- [ ] Primary action works and provides feedback
- [ ] Backdrop click dismisses (if appropriate)
- [ ] Body scroll locks when open
- [ ] Closing animation smooth (fade out)
- [ ] Focus returns to trigger on close
- [ ] Responsive on mobile
- [ ] ARIA attributes correct
- [ ] Screen reader announces correctly
- [ ] Keyboard navigation fully supported
- [ ] Reduced motion respected
- [ ] Related patterns referenced correctly
