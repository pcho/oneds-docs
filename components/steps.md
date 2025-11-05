## Description

Steps is a progress indicator for multi-step processes, showing users where they are in a sequence and what comes next. Whether it's a checkout flow, application form, or setup wizard, steps provide structure and confidence that users are making progress toward completion.

## Anatomy

1. **Step Items** - Individual step indicators
2. **Step Number/Icon** - Current step marker
3. **Step Label** - Step name or title
4. **Step Description** - Optional details (optional)
5. **Connecting Lines** - Visual connection between steps
6. **Status Indicators** - Complete, current, upcoming states

## Specification

**Component Sets:**
- **Step - Line**: Connecting line variants
- **Step - Item**: Individual step component
- **Step - Variants**: Different step styles
- **Step**: Complete steps component

**Step States:**
- **Completed**: Checkmark, past steps
- **Current**: Highlighted, active step
- **Upcoming**: Inactive, future steps
- **Error**: Alert icon for problematic step

**Visual Styles:**
- Numbered circles
- Icon indicators
- Progress bar style
- Minimal dots

**Orientation:**
- Horizontal (most common)
- Vertical (sidebar navigation)

## Do

- Show total number of steps upfront
- Clearly indicate current step
- Allow navigation to previous steps
- Disable future steps until reachable
- Keep step labels concise
- Show progress percentage if helpful

## Don't

- Don't hide total step count
- Don't allow skipping required steps
- Don't make step indicators too small
- Don't use too many steps (3-7 ideal)
- Don't forget mobile responsive design

## Uses

- Multi-page forms
- Checkout process
- Onboarding flows
- Application wizards
- Setup processes
- Document creation

**Example:**
```
1. Basic Info → 2. Patent Details → 3. Claims → 4. Review → 5. Submit
   (Complete)      (Current)        (Upcoming)   (Upcoming)  (Upcoming)
```

## Behavior

**Navigation:**
- Click completed steps to go back
- Current step is non-clickable
- Future steps are disabled
- "Next" button advances to next step
- "Back" button returns to previous

**States:**
- Completed: Checkmark icon, muted color
- Current: Filled circle/number, accent color
- Upcoming: Outline circle/number, gray
- Error: Alert icon, red color

## Accessibility

- `role="progressbar"` or custom step navigation role
- `aria-current="step"` on current step
- `aria-label` describes step (e.g., "Step 2 of 5: Patent Details")
- Keyboard navigation with arrow keys
- Screen readers announce progress
- Color + icon for status (not color alone)
