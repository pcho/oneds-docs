## Description

Button is the workhorse of user interfaces—the primary way users trigger actions and make things happen. From submitting forms to confirming dialogs, opening menus to deleting items, buttons are the clickable calls-to-action that transform intent into action. Clear, accessible, and always ready to respond.

## Anatomy

1. **Container** - Button background shape
2. **Label** - Text describing action
3. **Icon** - Visual indicator (optional)
4. **Loading Indicator** - Spinner during action (optional)
5. **Badge** - Count or notification dot (optional)

## Specification

**Default Button:**
- **Height**: `40px` (default/medium)
- **Padding**: `8px 16px`
- **Border Radius**: `6px`
- **Font Size**: `14px`
- **Font Weight**: 500 (medium)
- **Min Width**: `80px`
- **Gap**: `8px` (between icon and text)

**Button Types:**

**Primary Button:**
- **Background**: Primary blue (`#1890FF`)
- **Text Color**: White (`#FFFFFF`)
- **Border**: None
- **Hover**: Darker blue (`#0050B3`)
- **Active**: Even darker (`#003A8C`)
- **Shadow**: Small elevation

**Default Button:**
- **Background**: White (`#FFFFFF`)
- **Text Color**: Primary text (`#262626`)
- **Border**: `1px solid #D1D6DB`
- **Hover**: Light gray background (`#F9FAFB`)
- **Active**: Gray background (`#F5F5F5`)

**Dashed Button:**
- **Background**: White (`#FFFFFF`)
- **Border**: `1px dashed #D1D6DB`
- **Style**: Same as default but dashed

**Text Button:**
- **Background**: Transparent
- **Border**: None
- **Text Color**: Primary blue (`#1890FF`)
- **Hover**: Light blue background (`#F0F9FF`)
- **Active**: Slightly darker background

**Link Button:**
- **Background**: Transparent
- **Border**: None
- **Text Color**: Primary blue (`#1890FF`)
- **Hover**: Underline
- **No padding** (inline with text)

**Danger Button:**
- **Background**: Red (`#F04438`)
- **Text Color**: White (`#FFFFFF`)
- **Hover**: Darker red (`#CF1322`)
- **Border**: None

**Sizes:**

**Small:**
- **Height**: `32px`
- **Padding**: `6px 12px`
- **Font Size**: `12px`

**Default (Medium):**
- **Height**: `40px`
- **Padding**: `8px 16px`
- **Font Size**: `14px`

**Large:**
- **Height**: `48px`
- **Padding**: `12px 20px`
- **Font Size**: `16px`

**Shapes:**
- **Default**: `border-radius: 6px`
- **Round**: `border-radius: 20px` (pill shape)
- **Circle**: Equal width/height, `border-radius: 50%`

**Icon Button:**
- **Size**: `40px × 40px` (square)
- **Padding**: `8px`
- **Icon Size**: `20px`
- **No text**, icon only

**Button with Icon:**
- **Icon Size**: `16px`
- **Icon Position**: Leading or trailing
- **Gap**: `8px` between icon and text

**States:**
- **Default**: Normal appearance
- **Hover**: Background/color change, slight elevation
- **Active**: Pressed appearance
- **Focus**: Blue outline ring (`2px`)
- **Loading**: Spinner, disabled interaction
- **Disabled**: Opacity `0.5`, gray, not clickable

## Do

- Use action-oriented labels ("Save", "Delete", "Submit")
- Start labels with verbs when possible
- Show loading state during async actions
- Provide clear focus indicators
- Use primary button for main action
- Place primary action on the right (in Western layouts)
- Make buttons large enough to click/tap easily
- Use icons to clarify actions when helpful
- Disable buttons when actions unavailable
- Show success/error feedback after action

## Don't

- Don't use vague labels like "OK" or "Click here"
- Don't have more than one primary button per section
- Don't make buttons too small (minimum 32px height)
- Don't forget disabled states
- Don't remove focus indicators
- Don't use buttons for navigation (use links)
- Don't overuse danger buttons
- Don't make icon-only buttons without labels/tooltips
- Don't nest buttons inside buttons

## Uses

**Primary Use Cases:**

1. **Form Submission** - Save, Submit, Send
2. **Confirmation** - OK, Confirm, Accept
3. **Cancellation** - Cancel, Close, Dismiss
4. **Deletion** - Delete, Remove, Discard
5. **Creation** - Create, Add, New
6. **Navigation Actions** - Next, Previous, Continue
7. **Utility Actions** - Download, Export, Share
8. **Toggle Actions** - Show More, Expand, Collapse

**Example Scenarios:**

**Form Actions:**
```
[Cancel]  [Submit Application]
          └─ Primary button
```

**Danger Action:**
```
Delete this patent application permanently?

[Cancel]  [Delete]
          └─ Danger button
```

**Loading State:**
```
[⟳ Uploading...]
└─ Disabled during action
```

**Icon Button:**
```
[⋮] [✏️] [🗑️]
Menu Edit Delete
```

**Button Group:**
```
[Save Draft] [Preview] [Publish]
```

## When NOT to Use

### Use Link Instead When:

**For navigation to different pages or sections:**
- ✅ Use `<a href="/patents/123">View patent details</a>`
- ❌ Don't use `<button onclick="navigate()">View details</button>`

**Rule:** If clicking takes the user to a different URL → Use Link, NOT Button

**Why it matters:**
- Links can be opened in new tabs (right-click → open in new tab)
- Links work with browser back/forward
- Links can be bookmarked
- Semantic HTML for navigation
- Better for accessibility and SEO

### Use Alternatives When:

**Use Select/Dropdown instead of many buttons:**
- More than 5 options → Use Select
- Example: Don't use 10 status buttons, use status dropdown

**Use Tabs instead of toggle buttons:**
- Switching between views → Use Tabs component
- Example: List view / Grid view toggle

**Use Radio Buttons for selection:**
- Choosing one option from a group
- All options should be visible

### Button Label Guidelines

**Be specific with action labels:**

**✅ Good (follows {verb} + {noun}):**
- "Delete patent"
- "Export data"
- "Save changes"
- "Add team member"
- "Cancel request"

**❌ Too generic:**
- "Delete" (delete what?)
- "Export" (export what?)
- "Submit" (submit what?)
- "OK" (okay to what?)

**See:** [Content Style Guide](/docs/content/style-guide.md) for complete button labeling guidelines.

### Use Ellipsis for Dialog-Opening Actions

**When button opens a dialog requiring more input:**
- ✅ "Save as…" (opens dialog to choose location)
- ✅ "Export…" (opens format selection)
- ❌ "Save as..." (use ellipsis character …, not three dots)

**Don't use ellipsis for:**
- Actions that complete immediately
- Navigation links

### Button Alignment by Context

**Forms (left-aligned):**
```
Email: [____________]
Phone: [____________]

[Cancel] [Submit]
```

**Modals (right-aligned):**
```
Delete this patent?

            [Cancel] [Delete]
```

**Why:**
- Forms: Aligns with form field flow (top to bottom, left edge)
- Modals: Visual weight at right, easier to reach with mouse

### Loading State Timing

**For operations under 5 seconds:**
- Use 1-second delay before showing spinner
- Prevents visual flicker for fast operations
- Users don't see loading state for quick actions

**Pattern:**
```javascript
// Wait 1 second before showing loading
setTimeout(() => {
  if (!operationComplete) {
    showLoadingState();
  }
}, 1000);
```

**For operations over 5 seconds:**
- Show loading state immediately
- Keep user informed
- Consider progress indicator instead of spinner

### Maximum Primary Buttons

**Rule:** One primary button per section/context

**✅ Good:**
```
[Cancel] [Save Draft] [Publish Application]
                       └─ Only one primary
```

**❌ Too many:**
```
[Delete] [Archive] [Publish] [Export]
└─ All primary - unclear which is main action
```

## Button vs Link Security

### URL Sanitization for Link-Styled Buttons

**When using links styled as buttons, always sanitize URLs:**

**❌ Vulnerable to XSS:**
```html
<a href={userProvidedUrl} class="button">
  View details
</a>
```

**Dangerous URLs:**
```
javascript:alert('XSS')
data:text/html,<script>alert('XSS')</script>
```

**✅ Secure (sanitize URLs):**
```javascript
const sanitizeUrl = (url) => {
  // Block javascript: and data: protocols
  if (url.match(/^(javascript|data):/i)) {
    return '#';
  }
  return url;
};

<a href={sanitizeUrl(userProvidedUrl)} class="button">
  View details
</a>
```

## Behavior

### States

**Default State:**
- Normal appearance
- Interactive cursor on hover
- Clear label visible

**Hover State:**
1. User hovers over button
2. Background darkens or changes
3. Cursor changes to pointer
4. Subtle elevation increase (optional)
5. Transition smooth (150ms)

**Active/Pressed State:**
- Darker background
- Slight scale down (0.98)
- Brief moment during click
- Pressed appearance

**Focus State:**
- Blue outline ring (2-3px)
- Clear keyboard navigation indicator
- Visible when tabbing
- Meets WCAG focus requirements

**Loading State:**
1. Button disables
2. Spinner appears (replaces icon or before text)
3. Text may change ("Saving...")
4. User cannot click
5. On complete: Return to normal or show success

**Disabled State:**
- Reduced opacity (0.5)
- Gray or muted colors
- No hover effect
- Cursor remains default
- Not clickable
- Tooltip explains why disabled (optional)

### Interactions

**Click:**
1. User clicks button
2. Brief active state
3. Action executes
4. Button may disable or show loading
5. Feedback provided (success/error)

**Keyboard:**
- `Tab` - Focus button
- `Enter/Space` - Activate button
- `Shift + Tab` - Previous button
- Focus visible on keyboard navigation

**Touch:**
- Tap to activate
- Ripple effect on tap (optional)
- No hover state on touch devices
- Minimum 44×44px tap area

### Button Groups

**Horizontal Group:**
- Buttons side by side
- Gap between buttons: `8px`
- Primary on right (RTL: left)
- Consistent sizing

**Vertical Stack:**
- Full-width buttons
- Gap: `8px`
- Primary at bottom or top

**Segmented Group:**
- Buttons connected (no gap)
- Shared borders
- Used for related actions

### Animations

**Hover:**
- Background color transition: 150ms
- Scale: 1.0 → 1.02 (subtle)
- Shadow increase
- Easing: Ease-out

**Press:**
- Scale: 1.0 → 0.98
- Duration: 100ms
- Easing: Ease-in

**Loading:**
- Spinner rotation: Continuous
- Fade in/out: 200ms
- Disable interaction during load

**Reduced Motion:**
- No scale animations
- Instant color changes
- No elevation animations
- Respect prefers-reduced-motion

## Accessibility

**Semantic HTML:**
```html
<button type="button" class="btn-primary">
  Save Changes
</button>

<!-- Submit button in form -->
<button type="submit" class="btn-primary">
  Submit Application
</button>

<!-- Icon button -->
<button type="button" aria-label="Edit patent">
  <svg aria-hidden="true">✏️</svg>
</button>
```

**ARIA Attributes:**
```html
<!-- Loading state -->
<button aria-busy="true" disabled>
  <span class="spinner" aria-hidden="true"></span>
  Saving...
</button>

<!-- Toggle button -->
<button
  aria-pressed="false"
  aria-label="Toggle notifications">
  🔔
</button>

<!-- Disabled button -->
<button
  disabled
  aria-disabled="true"
  aria-describedby="tooltip-why-disabled">
  Submit
</button>
```

**Keyboard Navigation:**
- Full keyboard access required
- `Tab` to focus
- `Enter` or `Space` to activate
- Logical tab order
- Focus visible indicator

**Screen Reader Support:**
- Read button label clearly
- Announce button role ("button")
- Announce disabled state
- Announce loading state: "Busy, saving..."
- Announce pressed state for toggles
- Icon buttons need `aria-label`

**Focus Management:**
- Clear, visible focus indicator
- 3:1 contrast ratio for focus outline
- Focus ring not removed via CSS
- Focus visible on all states
- Focus moves logically through page

**Button Labels:**
- Descriptive, action-oriented
- Concise (1-3 words ideal)
- Avoid generic "Click here"
- Context clear from label alone
- Icons supplemented with text or aria-label

**Icon-Only Buttons:**
```html
<button aria-label="Delete patent application">
  <svg aria-hidden="true">🗑️</svg>
  <span class="visually-hidden">Delete</span>
</button>
```

**Color & Contrast:**
- Text meets 4.5:1 contrast (WCAG AA)
- Large text (18px+) meets 3:1 contrast
- Don't rely on color alone
- Disabled state distinguishable
- Focus indicator 3:1 contrast

**Touch Targets:**
- Minimum 44×44px tap area
- Adequate spacing between buttons (8px+)
- Full button area clickable
- Padding provides buffer

**Loading States:**
- Disable button during action
- `aria-busy="true"`
- Announce to screen readers
- Visual spinner indicator
- Don't block all interaction

**Button vs Link:**
- Use `<button>` for actions
- Use `<a>` for navigation
- Don't use buttons that look like links for navigation
- Proper semantic element

**Disabled Buttons:**
- Use sparingly (explain why disabled)
- Consider hiding instead of disabling
- Tooltip to explain (if used)
- Alternative: Show button, display error on click

**Responsive:**
- Full-width on mobile (optional)
- Larger touch targets
- Adequate spacing
- Stack vertically if needed
- Maintain minimum sizes
