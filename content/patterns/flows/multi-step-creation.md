---
title: Multi Step Creation
description: "Documentation for Multi Step Creation component"
---

# Multi-Step Creation Flow Pattern

## Overview

The multi-step creation pattern guides users through complex workflows by breaking them into bite-sized, sequential steps. It's like a journey with clear milestones—each step focuses on one task, reducing mental load while keeping progress visible.

You'll see this pattern in IP Right creation, Design registration, and Trademark filing workflows.

## When to Use

Use multi-step creation flows when:

- **Complex data entry** - Form requires more than 8-10 fields
- **Logical grouping** - Information naturally divides into distinct categories
- **Sequential dependencies** - Later steps depend on earlier choices
- **Decision points** - User needs to make choices that affect subsequent steps
- **Long processes** - Task requires significant time investment (5+ minutes)
- **Error prevention** - Validation at each step improves data quality
- **Progressive disclosure** - Showing all fields at once would overwhelm users

## When Not to Use

Don't use multi-step flows when:

- Simple forms with fewer than 8 fields
- All information fits comfortably on one screen
- No logical grouping exists between fields
- Users need to see all fields simultaneously to complete the task
- Frequent back-and-forth navigation would frustrate users

## Anatomy

### 1. Progress Indicator
Visual representation showing:
- Total number of steps
- Current step position
- Completed steps
- Upcoming steps
- Step labels (optional)

### 2. Step Header
- **Step title** - Clear description of current step
- **Step number** - "Step 2 of 5" format
- **Description** (optional) - Additional context for the step

### 3. Step Content
- **Form fields** - Inputs specific to this step
- **Help text** - Guidance for complex fields
- **Validation messages** - Real-time field validation
- **Required indicators** - Shows which fields are mandatory

### 4. Navigation Controls
- **Back button** - Return to previous step (secondary)
- **Next/Continue button** - Proceed to next step (primary)
- **Save draft** - Preserve progress without completing (tertiary)
- **Cancel** - Exit wizard entirely

### 5. Processing State
- **Loading indicator** - Shows system processing
- **Status message** - Explains what's happening
- **Progress bar** (optional) - For longer operations

### 6. Result/Success Screen
- **Confirmation message** - Success state with clear feedback
- **Summary** - Key information about what was created
- **Next actions** - What user can do next
- **Navigation options** - Return to list, view details, create another

## Specification

### Progress Indicator (Stepper)

**Linear Stepper (Horizontal):**
```
Dimensions:
- Container height: 80px
- Step circle: 32px diameter
- Line between steps: 2px height, variable width
- Gap between steps: Auto (distributed evenly)

States:
- Completed: fill-accent circle, surface-white checkmark
- Active: fill-accent circle, surface-white number
- Upcoming: bdr-default circle, txt-tertiary number
- Error: fill-danger circle, surface-white exclamation

Line Colors:
- Completed: fill-accent
- Upcoming: bdr-default
```

**Vertical Stepper:**
```
Dimensions:
- Container width: 240px (sidebar)
- Step circle: 32px diameter
- Line between steps: 2px width, variable height
- Vertical spacing: 16px between steps

Layout:
- Circle + label horizontal
- Vertical line connects circles
- Active step highlighted
```

### Step Header

```
Dimensions:
- Container padding: spacing-6
- Title font size: 20px
- Title font weight: font-weight-semibold
- Description font size: text-base
- Step counter: "Step X of Y" - text-base, txt-tertiary

Background:
- surface-white
- Border bottom: 1px solid --bg-fill-light
```

### Step Content Area

```
Dimensions:
- Padding: 32px
- Max width: 768px (centered)
- Min height: 400px
- Overflow: Scroll if needed

Form Layout:
- Single column (preferred)
- Two columns (for related short fields only)
- Gap between fields: spacing-6
- Field label spacing: spacing-2 above input
```

### Navigation Controls

```
Footer Layout:
- Height: 80px
- Padding: spacing-4 32px
- Background: surface-white
- Border top: 1px solid --bg-fill-light
- Position: Sticky bottom

Button Layout:
- Back button: Left-aligned, secondary style
- Next/Continue: Right-aligned, primary style
- Save draft: Left-aligned, tertiary/link style
- Gap between buttons: spacing-3

Button Sizes:
- Height: 40px
- Padding: spacing-2 spacing-6
```

### Processing State

```
Overlay:
- Full screen dim: rgba(0, 0, 0, 0.3)
- Modal container: 400px × 300px, centered
- Background: surface-white
- Border radius: radius-default
- Shadow: Large elevation

Spinner:
- Size: 48px diameter
- Color: fill-accent
- Animation: Smooth rotation

Status Text:
- Font size: text-lg
- Color: txt-secondary
- Position: Below spinner
- Animation: Optional dots animation "Processing..."
```

### Success/Result Screen

```
Dimensions:
- Container: Same as step content (768px max)
- Icon size: 64px (success checkmark)
- Icon color: fill-success
- Title: 24px, font-weight-semibold
- Message: text-lg, txt-secondary

Layout:
- Center-aligned content
- Icon at top
- Title below icon (spacing-4 gap)
- Message below title (spacing-3 gap)
- Action buttons below message (32px gap)
```

## Common Flow Pattern

Based on analysis of IP Right, Design, and Trademark creation workflows:

### Standard Multi-Step Creation Flow

```
┌─────────────────────────────────────────────┐
│ Step 1: Select Profile                      │
│ ○───────○───────○───────○───────○          │
│ Profile  Filing  Jurisdiction  Classification│
│                                             │
│ [Form fields for profile selection]        │
│                                             │
│ [Save Draft]              [Cancel] [Next]  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Step 2: Select Filing Options               │
│ ●───●───○───────○───────○                  │
│                                             │
│ [Form fields for filing options]           │
│                                             │
│ [Save Draft] [Back]       [Cancel] [Next]  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Step 3: Jurisdiction                        │
│ ●───●───●───○───────○                      │
│                                             │
│ [Form fields for jurisdiction]             │
│                                             │
│ [Save Draft] [Back]       [Cancel] [Next]  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Step 4: Classification                      │
│ ●───●───●───●───○                          │
│                                             │
│ [Form fields for classification]           │
│                                             │
│ [Save Draft] [Back]     [Cancel] [Submit]  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              Processing...                   │
│                                             │
│                 ⟳                           │
│                                             │
│      Creating your IP right...              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                  ✓                          │
│                                             │
│           Success!                          │
│  Your patent application has been created   │
│                                             │
│  Application #12345                         │
│  Filed: 2024-02-15                          │
│                                             │
│  [View Details]  [Create Another]          │
└─────────────────────────────────────────────┘
```

## Behavior Patterns

### 1. Step Navigation

**Moving Forward (Next/Continue):**

```
User Action:
1. User clicks "Next" or "Continue" button
2. System validates current step
3. If valid: Progress to next step with animation
4. If invalid: Show validation errors, stay on current step

Validation Rules:
- Validate all required fields
- Check field format (email, phone, etc.)
- Verify business logic constraints
- Show inline error messages
- Focus first invalid field
- Disable "Next" until errors resolved (optional)

Animation:
- Duration: 300ms
- Easing: Ease-out
- Content: Slide left, fade out
- New content: Slide in from right, fade in
- Progress indicator: Update immediately
```

**Moving Backward (Back):**

```
User Action:
1. User clicks "Back" button
2. Navigate to previous step (no validation)
3. Preserve previously entered data
4. Show data exactly as user left it

Behavior:
- No validation on backward navigation
- Preserve all field values (valid or invalid)
- Preserve validation state (errors remain visible)
- Update progress indicator
- Animate transition (reverse of forward)

Animation:
- Duration: 300ms
- Easing: Ease-out
- Content: Slide right, fade out
- Previous content: Slide in from left, fade in
```

### 2. Data Persistence

**Auto-save Draft:**

```
Behavior:
- Save data automatically every 30-60 seconds
- Save on step navigation (forward or backward)
- Save before user leaves page (browser beforeunload)
- Show "Saving..." indicator briefly
- Show "Draft saved" confirmation

Storage:
- Server-side preferred (survives browser close)
- Include timestamp
- Associate with user session
- Allow draft recovery on return

Draft Recovery:
┌─────────────────────────────────────────────┐
│ ℹ️ You have an unfinished draft             │
│                                             │
│ Last saved: 2 hours ago                     │
│                                             │
│ [Continue Draft]  [Start Fresh]            │
└─────────────────────────────────────────────┘
```

**Manual Save Draft:**

```
Trigger: User clicks "Save Draft" button

Behavior:
1. Validate current step (optional - can save invalid data)
2. Save all steps data to server
3. Show success notification
4. Return user to main list/dashboard
5. Draft appears in drafts section with timestamp

Draft List Display:
- Draft title (auto-generated or user-provided)
- Last modified timestamp
- Progress indicator (Step X of Y)
- Continue/Delete actions
```

### 3. Progress Indication

**Linear Progress (Percentage):**

```
Visual: Progress bar
Calculation: (Current Step / Total Steps) × 100%

Example:
Step 2 of 5 = 40% complete

[████████────────────] 40%
```

**Step-based Progress:**

```
Visual: Stepper component with labeled steps

Completed: ●  (filled circle with checkmark)
Active:    ●  (filled circle with number)
Upcoming:  ○  (empty circle with number)
Error:     ●! (filled red circle with exclamation)

●──●──●──○──○
1  2  3  4  5

Labels below or beside circles:
Profile  Filing  Jurisdiction  Classification  Review
```

**Progress Summary:**

```
Display: "Step X of Y" or "X / Y"
Position: Top of step content, near title

Examples:
- "Step 3 of 5"
- "3 / 5 steps completed"
- "Step 3: Jurisdiction (3 of 5)"
```

### 4. Validation Strategy

**Per-Step Validation:**

```
When: User attempts to move forward

Method:
1. Validate all fields in current step
2. If any field invalid:
   - Show error messages inline
   - Highlight invalid fields (red border)
   - Prevent forward navigation
   - Focus first invalid field
   - Optionally shake form or show alert

3. If all valid:
   - Clear any existing errors
   - Save step data
   - Proceed to next step
```

**Real-time Validation:**

```
When: User leaves field (onBlur) or while typing (onChange)

Method:
- Validate field format immediately
- Show error below field
- Show success indicator (green checkmark) for valid fields
- Don't block navigation (show errors but allow proceeding)

Use cases:
- Email format validation
- Phone number format
- Required field check
- Character limits
- Password strength
```

**Final Validation:**

```
When: User submits entire form (final step)

Method:
1. Re-validate all steps
2. Check cross-step dependencies
3. Verify business logic rules
4. If any errors:
   - Navigate to first step with errors
   - Highlight all invalid fields
   - Show error summary at top
   - Prevent submission

5. If all valid:
   - Proceed to processing state
   - Submit data to server
```

### 5. Error Handling

**Step-Level Errors:**

```
Display:
┌─────────────────────────────────────────────┐
│ ⚠️ Please fix the following errors:         │
│                                             │
│ • Email address is required                 │
│ • Phone number format is invalid            │
└─────────────────────────────────────────────┘

Position: Top of step content
Style: Warning alert (yellow background)
Behavior: Dismissible or auto-hide when errors fixed
```

**Inline Field Errors:**

```
Email *
┌───────────────────────────────────────┐
│ john.doeexample.com                   │ ← Red border
└───────────────────────────────────────┘
⚠️ Please enter a valid email address
```

**Progress Indicator Errors:**

```
Show error state in stepper:

●──●──●!──○──○
1  2   3   4  5

Step 3 shows error indicator (red circle with !)
Clicking step 3 navigates back to fix errors
```

**Submission Errors:**

```
If server returns error during processing:

┌─────────────────────────────────────────────┐
│                  ⊗                          │
│                                             │
│          Submission Failed                  │
│  Unable to create patent application        │
│                                             │
│  Error: Duplicate application number        │
│                                             │
│  [Try Again]  [Go Back]  [Cancel]          │
└─────────────────────────────────────────────┘

Options:
- Try Again: Re-submit with same data
- Go Back: Return to final step to edit
- Cancel: Exit wizard, preserve draft
```

### 6. Exit and Cancellation

**Cancel Button Behavior:**

```
When: User clicks "Cancel" at any step

Confirmation Modal:
┌─────────────────────────────────────────────┐
│ Cancel Patent Application?              [×] │
├─────────────────────────────────────────────┤
│                                             │
│ Your progress will be saved as a draft.     │
│ You can continue later from where you left. │
│                                             │
│ ☐ Don't save draft (discard all progress)  │
│                                             │
├─────────────────────────────────────────────┤
│           [Keep Editing]  [Cancel]          │
└─────────────────────────────────────────────┘

Options:
1. Keep Editing: Close modal, stay in wizard
2. Cancel: Save draft and exit to main list
3. Cancel + Checkbox: Discard and exit (no draft)
```

**Browser Back Button:**

```
Behavior:
- Intercept browser back button
- Navigate to previous wizard step (not previous page)
- Preserve data
- Update URL if using URL-based step navigation

Alternative:
- Allow browser back to exit wizard
- Show confirmation before leaving
- Save draft automatically
```

**Tab Close / Page Refresh:**

```
Warning:
┌─────────────────────────────────────────────┐
│ Leave page?                                 │
│                                             │
│ Changes you made may not be saved.          │
│                                             │
│ [Leave]  [Stay]                             │
└─────────────────────────────────────────────┘
```

### 7. Processing State

**During Submission:**

```
Display:
┌─────────────────────────────────────────────┐
│                                             │
│                  ⟳                          │
│                                             │
│      Creating your patent application...    │
│                                             │
│ [Progress bar] ████████────────── 60%      │
│                                             │
└─────────────────────────────────────────────┘

Behavior:
- Show full-page modal overlay
- Display spinner or progress animation
- Show status message
- Optional progress percentage
- Disable all interactions
- Prevent closing/navigation
- Handle timeout (show error after X seconds)

Estimated Time:
"This may take up to 2 minutes..."
```

**Long-Running Processes:**

```
Option 1: Background Processing
┌─────────────────────────────────────────────┐
│                  ✓                          │
│                                             │
│           Processing Started                │
│                                             │
│  Your application is being processed.       │
│  We'll notify you when it's ready.          │
│                                             │
│  Estimated time: 5-10 minutes               │
│                                             │
│  [View Status]  [Return to Dashboard]      │
└─────────────────────────────────────────────┘

Option 2: Real-time Updates
- WebSocket connection for live updates
- Progress bar advances based on server events
- Show current step being processed
- "Validating data... ✓"
- "Creating records... ⟳"
- "Generating documents... ○"
```

### 8. Success State

**Confirmation Screen:**

```
┌─────────────────────────────────────────────┐
│                                             │
│                  ✓                          │
│            Success!                         │
│                                             │
│  Your patent application has been created   │
│                                             │
├─────────────────────────────────────────────┤
│  Application #12345                         │
│  Title: Advanced Widget System              │
│  Filed: February 15, 2024                   │
│  Status: Under Review                       │
│                                             │
│  Next steps:                                │
│  • Review application details               │
│  • Upload supporting documents              │
│  • Monitor status for updates               │
├─────────────────────────────────────────────┤
│                                             │
│  [View Application]  [Create Another]      │
│  [Return to Dashboard]                      │
│                                             │
└─────────────────────────────────────────────┘

Elements:
- Large success icon (64px)
- Success title (24px, bold)
- Confirmation message (16px)
- Summary of created item
- Next steps or guidance
- Clear action buttons
```

**Success Notification:**

```
If redirecting immediately:

[Toast notification in top-right]
┌────────────────────────────────┐
│ ✓ Patent created successfully  │
│   Application #12345           │
└────────────────────────────────┘

Auto-dismiss: 5 seconds
```

## Responsive Behavior

### Desktop (≥1024px)

```
Layout:
- Horizontal stepper at top
- Step content centered (768px max width)
- Navigation controls in footer
- Two-column forms allowed
- Full labels and descriptions

Stepper:
●────●────●────○────○
Profile  Filing  Jurisdiction  Classification  Review
```

### Tablet (768px - 1023px)

```
Layout:
- Horizontal stepper with abbreviated labels
- Step content full width with padding
- Navigation controls in footer
- Single-column forms preferred
- Shortened labels

Stepper:
●────●────●────○────○
  1      2      3      4      5
Profile Filing  ...   ...   Review
```

### Mobile (<768px)

```
Layout:
- Compact progress indicator (dots or text)
- Step content full width, minimal padding
- Sticky navigation footer
- Single-column forms only
- Minimal labels

Progress Indicator Options:

Option 1: Text Only
Step 3 of 5 - Jurisdiction

Option 2: Dots
● ● ● ○ ○

Option 3: Progress Bar
[████████────────] 60%

Navigation:
[< Back]              [Next >]
Full-width buttons, stacked if needed
```

## Accessibility

### Keyboard Navigation

**Tab Order:**
1. Progress indicator (if interactive)
2. Form fields in step (top to bottom)
3. Save draft button
4. Back button
5. Cancel button
6. Next/Continue button

**Keyboard Shortcuts:**
- `Tab` - Next focusable element
- `Shift + Tab` - Previous element
- `Enter` - Submit form / activate focused button
- `Escape` - Cancel (show confirmation)
- `Alt + ←` - Navigate back (optional)
- `Alt + →` - Navigate forward if valid (optional)

### Focus Management

**Step Transition:**
```
On Next:
1. Focus moves to step title of new step
2. Announce step change to screen reader
3. User can tab through new step fields

On Back:
1. Focus moves to step title of previous step
2. Previously focused field is not re-focused
3. User starts tabbing from top of step
```

**Error Focus:**
```
On Validation Error:
1. Focus moves to first invalid field
2. Error announcement made
3. Error summary visible at top
4. User can fix and continue
```

### Color Contrast

**Progress Indicator:**
- Active step: fill-accent on surface-white (6.5:1) ✓
- Completed step: fill-accent on surface-white (6.5:1) ✓
- Inactive step: txt-tertiary on surface-white (4.5:1) ✓
- Error step: fill-danger on surface-white (5.2:1) ✓

**Text:**
- All text meets WCAG AA (4.5:1 minimum)
- Error messages: fill-danger on surface-white (5.2:1)
- Success messages: fill-success on surface-white (3.9:1) - use icon + text

**Don't Rely on Color Alone:**
- Completed steps: Checkmark icon + blue color
- Error steps: Exclamation icon + red color
- Required fields: Asterisk + label text
- Validation: Icon + text message + border

## Best Practices

### Do

- **Keep steps focused** - Each step should have a single, clear purpose
- **Show progress clearly** - Users should always know where they are and how much is left
- **Allow backward navigation** - Users should be able to review and edit previous steps
- **Preserve data** - Save all entered data when navigating between steps
- **Validate per step** - Catch errors early, don't wait until final submission
- **Provide draft saving** - Long forms should auto-save or allow manual drafts
- **Give clear feedback** - Loading states, success confirmations, error messages
- **Use logical ordering** - Steps should follow a natural sequence
- **Keep step count reasonable** - 3-7 steps is optimal, max 10 steps
- **Make navigation obvious** - Clear buttons with clear labels ("Next", "Back", "Submit")
- **Provide context** - Step titles, descriptions, and help text guide users
- **Handle errors gracefully** - Clear messages, easy fixes, no data loss

### Don't

- **Don't hide progress** - Users should always see where they are in the process
- **Don't force linear flow** - Allow users to go back and make changes
- **Don't lose data** - Preserve information when navigating, handle browser refresh
- **Don't surprise users** - Show total steps upfront, no hidden steps
- **Don't validate too aggressively** - Allow users to save drafts with incomplete data
- **Don't block backward navigation** - Never prevent going back to previous steps
- **Don't forget mobile** - Adapt stepper and layout for small screens
- **Don't use inconsistent buttons** - "Next" should always be "Next", not sometimes "Continue"
- **Don't skip confirmation** - Always show success state, don't just redirect
- **Don't make steps too long** - If a step needs scrolling, consider splitting it
- **Don't forget cancellation** - Always provide a clear way to exit the wizard
- **Don't auto-advance** - Let users control when to move forward (except for very short steps)

## Examples

### Example 1: Patent Application Creation

```
Step 1 of 5: Select Profile
┌─────────────────────────────────────────────┐
│ ●────○────○────○────○                      │
│ Profile Filing Jurisdiction Classification  │
│                                             │
│ Which profile template do you want to use?  │
│                                             │
│ ○ Utility Patent                            │
│ ○ Design Patent                             │
│ ○ Plant Patent                              │
│ ● Provisional Patent                        │
│                                             │
│ Profile Description:                        │
│ A provisional patent application provides   │
│ a lower-cost option for establishing an     │
│ early filing date...                        │
│                                             │
│ [Save Draft]              [Cancel] [Next]  │
└─────────────────────────────────────────────┘
```

### Example 2: Design Right Registration

```
Step 2 of 4: Filing Options
┌─────────────────────────────────────────────┐
│ ●────●────○────○                           │
│ Profile Filing Jurisdiction Review          │
│                                             │
│ Filing Date *                               │
│ ┌──────────────┐ [📅]                      │
│ │ 2024-02-15   │                           │
│ └──────────────┘                           │
│                                             │
│ Priority Claim                              │
│ ☑ Claim priority from earlier application  │
│                                             │
│   Priority Date *                           │
│   ┌──────────────┐ [📅]                    │
│   │ 2023-08-15   │                         │
│   └──────────────┘                         │
│                                             │
│   Priority Number *                         │
│   ┌─────────────────────────────────┐      │
│   │ EP2023123456                    │      │
│   └─────────────────────────────────┘      │
│                                             │
│ [Save Draft] [Back]       [Cancel] [Next]  │
└─────────────────────────────────────────────┘
```

### Example 3: Trademark Filing

```
Step 4 of 4: Review & Submit
┌─────────────────────────────────────────────┐
│ ●────●────●────●                           │
│ Details Goods Classes Review                │
│                                             │
│ Review your trademark application           │
│                                             │
│ ▼ Trademark Details                         │
│   Name: ACME Widget                         │
│   Type: Word mark                           │
│   [Edit]                                    │
│                                             │
│ ▼ Goods and Services                        │
│   Class 9: Software products                │
│   Class 42: Software services               │
│   [Edit]                                    │
│                                             │
│ ▼ Classification                            │
│   Nice Classification: Class 9, 42          │
│   [Edit]                                    │
│                                             │
│ ☑ I confirm all information is accurate     │
│ ☑ I agree to the terms and conditions       │
│                                             │
│ [Save Draft] [Back]     [Cancel] [Submit]  │
└─────────────────────────────────────────────┘
```

---

## Related Patterns

- **[Common Actions](../behaviours/common.md)** - Save, Cancel, Add button behaviors
- **[Modal](../behaviours/modal.md)** - For confirmation dialogs during wizard
- **[Form Validation](../../components/forms.md)** - Field validation patterns
- **[Table](../behaviours/table.md)** - If wizard includes table-based selection steps
- **[Notification](../behaviours/notification.md)** - Success/error feedback after completion

## Implementation Checklist

- [ ] Progress indicator shows all steps
- [ ] Current step is clearly highlighted
- [ ] Step titles are descriptive and clear
- [ ] Back button is available on all steps (except first)
- [ ] Next button validates current step
- [ ] Data persists when navigating between steps
- [ ] Save draft functionality available
- [ ] Cancel shows confirmation before exiting
- [ ] Browser refresh/close is handled
- [ ] Validation errors are clear and actionable
- [ ] Processing state shows during submission
- [ ] Success screen shows confirmation and summary
- [ ] Error handling returns to appropriate step
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces step changes
- [ ] ARIA attributes properly implemented
- [ ] Focus management handles transitions
- [ ] Responsive design adapts for mobile
- [ ] Touch targets meet minimum size (44px)
- [ ] Auto-save works in background (if implemented)

---

*Pattern identified from analysis of IP Right, Design, and Trademark creation workflows. This pattern ensures consistency across all multi-step creation flows in the system.*
