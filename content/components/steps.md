---
title: Steps
description: "Documentation for Steps component"
---

## Description

Steps guides users through multi-step processes by showing exactly where they are and what's next. From checkout flows to setup wizards, it builds confidence that progress is being made toward completion.

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

- Show the total number of steps upfront
- Clearly highlight the current step
- Allow navigation back to previous steps
- Disable future steps until they're reachable
- Keep labels concise
- Add progress percentages when helpful

## Don't

- Hide the total step count
- Let users skip required steps
- Make step indicators too small to read
- Use too many steps (3-7 is ideal)
- Forget about mobile responsive design

## Uses

- Multi-page forms
- Checkout process
- Onboarding flows
- Application wizards
- Setup processes
- Document creation

**Example:**
- 1. Basic Info → 2. Patent Details → 3. Claims → 4. Review → 5. Submit
- (Complete) → (Current) → (Upcoming) → (Upcoming) → (Upcoming)

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

