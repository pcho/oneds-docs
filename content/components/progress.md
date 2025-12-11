---
title: Progress
description: "Documentation for Progress component"
---

## Description

Progress indicators show how far along a process is. Whether it's a determinate bar with exact percentage or an indeterminate spinner showing ongoing activity, they provide essential feedback that something's happening. They reduce uncertainty and make waiting less frustrating.

Think of them as transforming "please wait" into informed anticipation.

## Anatomy

### Standard Progress (Determinate)
1. **Track** - Background bar showing full width
2. **Fill Bar** - Colored bar showing completion percentage
3. **Percentage Label** - Numerical indicator (optional)
4. **Status Text** - Descriptive text (optional)

### Processing Progress (Indeterminate)
1. **Animated Indicator** - Moving or pulsing element
2. **Container** - Wrapper for progress element
3. **Label** - Text describing what's processing

## Specification

### Standard Progress Component Set

**Dimensions:**
- **Component Set Canvas**: `838px × 100px`
- **Variants**: Different sizes, colors, and states

**Track:**
- **Height**: Typically `4-8px` (small), `12-16px` (large)
- **Background**: `--bg-fill-light`
- **Border Radius**: `radius-round`
- **Width**: Full container width or specified

**Fill Bar:**
- **Height**: Matches track height
- **Background**: `--bg-fill-brand-normal` or semantic color
- **Border Radius**: `radius-round`
- **Width**: Percentage-based (0-100%)
- **Transition**: Smooth animation on value change

**Colors:**
- **Default/Info**: `--bg-fill-brand-normal`
- **Success**: `--bg-fill-success-normal`
- **Warning**: `--bg-fill-warning-normal`
- **Error**: `--bg-fill-danger-normal`
- **Processing**: Animated gradient or moving bar

### Processing Progress Component

**Dimensions:**
- **Width**: `791px` (container)
- **Layout**: Vertical column, center-aligned
- **Gap**: `spacing-6` between indicator and label

**Indicator Types:**
- **Spinner**: Rotating circle
- **Dots**: Bouncing or pulsing dots
- **Bar**: Sliding or pulsing bar
- **Skeleton**: Shimmer effect

**Animation:**
- **Duration**: 1-2 seconds per cycle
- **Easing**: Linear for spinners, ease for pulses
- **Infinite**: Loops until completion

## Do

- Show progress for operations over 1 second
- Use determinate when you know percentage
- Use indeterminate when duration is unknown
- Animate changes smoothly
- Provide descriptive labels
- Show estimated time for long operations
- Allow cancellation when possible
- Use contextual colors (red for errors)

## Don't

- Use fake progress (show actual)
- Jump backward (except on restart)
- Leave at 99% indefinitely
- Use indeterminate when you can calculate
- Hide progress for long tasks
- Forget to show completion
- Use distracting animations
- Make bar too small to see

## Uses

**Primary Use Cases:**

1. **File Uploads** - Show upload progress with percentage
2. **Form Submission** - Indicate processing status
3. **Data Loading** - Show initial data fetch
4. **Multi-Step Processes** - Wizard or workflow progress
5. **Document Processing** - Patent analysis, file conversion
6. **Installation/Updates** - Software or data installation
7. **Export Operations** - Generating reports or documents
8. **Search Operations** - Complex search in progress
9. **Batch Operations** - Processing multiple items

**Example Scenarios:**

**File Upload:**
```
┌─────────────────────────────────────┐
│ Uploading patent_drawing.pdf        │
│ ████████████████░░░░░░░░  67%       │
│ 2.1 MB of 3.2 MB • 15s remaining    │
│                        [Cancel]     │
└─────────────────────────────────────┘
```

**Document Processing:**
```
┌─────────────────────────────────────┐
│ Analyzing patent application...     │
│ [●●●●●●○○○○○○] Processing          │
└─────────────────────────────────────┘
```

**Multi-Step Form:**
```
Step 2 of 4: Patent Claims
████████████░░░░░░░░░░░░░░░░  50%

[Continue to Next Step]
```

**Batch Processing:**
```
Processing 25 patent applications
████████████████████░░░░░░░░  15 / 25
Current: Analyzing US10234567
```

## Behavior

### States

**Progress States:**
- **Not Started** - Empty track (0%)
- **In Progress** - Partially filled (1-99%)
- **Completed** - Fully filled (100%)
- **Paused** - Progress stopped, can resume
- **Error** - Failed state with error indicator
- **Indeterminate** - Unknown progress

**Visual Feedback:**
- **Active**: Animated, shows movement
- **Paused**: Static, no animation
- **Success**: Green fill or checkmark
- **Error**: Red fill or X icon

### Interactions

**Determinate Progress:**
1. Task starts, progress shows 0%
2. Progress updates periodically (smooth transitions)
3. Percentage increases toward 100%
4. Reaches 100%, shows completion
5. Success message appears

**Indeterminate Progress:**
1. Task starts, animation begins
2. Continuous animation while processing
3. Task completes, animation stops
4. Success or completion state shown

**Cancelable Progress:**
- Cancel button available
- Confirm cancellation with popconfirm
- Progress stops immediately
- Cleanup operations may continue
- Show canceled state

**Pausable Progress:**
- Pause/Resume button available
- Animation stops when paused
- Can resume from current position
- Useful for large uploads/downloads

### Animations

**Fill Animation:**
- **Duration**: 300-500ms per update
- **Easing**: Ease-out (feels responsive)
- **Smoothing**: Interpolate between values

**Indeterminate Animations:**

**Spinner:**
- Rotate 360° continuously
- Duration: 1-2s per rotation
- Easing: Linear

**Sliding Bar:**
- Bar moves across track
- Duration: 1.5-2s per cycle
- Easing: Ease-in-out

**Pulse:**
- Scale or opacity pulse
- Duration: 1-1.5s per pulse
- Easing: Ease-in-out

**Dots:**
- Bounce or fade in sequence
- Duration: 0.5s per dot
- Staggered timing

**Reduced Motion:**
- No spinning or sliding
- Use subtle pulse or static indicator
- Respects prefers-reduced-motion
- Maintain functional feedback

### Updates

**Update Frequency:**
- Real-time: Every 100-500ms
- Balanced: Every 1-2 seconds
- Batched: Every 5-10 seconds for long tasks

**Smooth Transitions:**
- Animate to new values smoothly
- Maintain consistent speed perception

**Completion:**
- Show 100% briefly before transitioning
- Success animation (checkmark, green)
- Provide next action or auto-close
- Confirm completion before closing
