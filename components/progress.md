## Description

Progress indicators show users how far along they are in a process or task. Whether it's a determinate bar showing exact percentage or an indeterminate spinner indicating ongoing activity, progress components provide essential feedback that something is happening. They reduce uncertainty, set expectations, and make waiting less frustrating.

Think of progress indicators as the visual representation of "please wait"—transforming idle time into informed anticipation.

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
- **Background**: Light gray (`#ECEEF0` or `#F4F6F8`)
- **Border Radius**: Fully rounded (`9999px` or height/2)
- **Width**: Full container width or specified

**Fill Bar:**
- **Height**: Matches track height
- **Background**: Brand color (e.g., `#155EEF`) or semantic color
- **Border Radius**: Matches track (fully rounded)
- **Width**: Percentage-based (0-100%)
- **Transition**: Smooth animation on value change

**Colors:**
- **Default/Info**: Blue (`#155EEF`)
- **Success**: Green (`#079455`)
- **Warning**: Orange (`#DC6803`)
- **Error**: Red (`#D92D20`)
- **Processing**: Animated gradient or moving bar

### Processing Progress Component

**Dimensions:**
- **Width**: `791px` (container)
- **Layout**: Vertical column, center-aligned
- **Gap**: `24px` between indicator and label

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

- Show progress for operations longer than 1 second
- Use determinate progress when you know completion percentage
- Use indeterminate progress when duration is unknown
- Animate progress changes smoothly
- Provide descriptive labels ("Uploading document...")
- Show estimated time remaining for long operations
- Allow cancellation when possible
- Use appropriate color for context (error state = red)

## Don't

- Don't use fake progress—show actual progress
- Don't jump progress backward (except on restart)
- Don't leave progress at 99% indefinitely
- Don't use indeterminate when you can calculate percentage
- Don't hide progress for long-running tasks
- Don't forget to show completion state
- Don't use overly distracting animations
- Don't make progress bar too small to see

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
- Don't jump directly to new value
- Animate transition smoothly
- Maintain consistent speed perception

**Completion:**
- Show 100% briefly before transitioning
- Success animation (checkmark, green fill)
- Auto-close or provide next action
- Don't close immediately—confirm completion

## Accessibility

**Screen Reader Support:**
- Use `role="progressbar"` for determinate progress
- `role="status"` for indeterminate progress
- `aria-valuenow` for current value (0-100)
- `aria-valuemin="0"` and `aria-valuemax="100"`
- `aria-label` or `aria-labelledby` for description
- `aria-valuetext` for human-readable progress

**ARIA Attributes:**
```html
<!-- Determinate Progress -->
<div
  role="progressbar"
  aria-valuenow="67"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Uploading patent document">
  <div class="progress-fill" style="width: 67%"></div>
</div>

<!-- Indeterminate Progress -->
<div
  role="status"
  aria-live="polite"
  aria-label="Processing application">
  <div class="spinner"></div>
  <span>Processing...</span>
</div>
```

**Live Regions:**
- Use `aria-live="polite"` for progress updates
- Don't announce every percentage change
- Announce at intervals (e.g., every 10%)
- Announce completion clearly
- Announce errors or pauses

**Keyboard Support:**
- Cancel button keyboard accessible
- Pause/Resume button keyboard accessible
- `Escape` to cancel (if appropriate)
- Focus visible on interactive elements

**Announcements:**
- Initial: "Upload started"
- Progress: "Upload 50% complete" (at intervals)
- Completion: "Upload complete"
- Error: "Upload failed: [reason]"
- Paused: "Upload paused"

**Visual Design:**
- Sufficient color contrast for visibility
- Don't rely on color alone for status
- Use text labels + visual indicators
- Progress bar visible at all zoom levels
- Minimum height for visibility (4px+)

**Color & Contrast:**
- Progress fill has 3:1 contrast with track
- Text labels meet WCAG AA (4.5:1)
- Use patterns in addition to color for states
- Error state: Red + icon/text
- Success state: Green + checkmark

**Motion & Animation:**
- Respect prefers-reduced-motion
- Provide static alternative for animations
- Maintain functional feedback without animation
- Use subtle transitions when motion reduced

**Long Operations:**
- Provide estimated time remaining
- Allow backgrounding long operations
- Show progress in page title or favicon
- Send notification on completion
- Prevent timeout/sleep during operation

**Error Handling:**
- Clear error messages
- Retry option available
- Don't lose progress on retry (if possible)
- Explain what failed and why
- Provide next steps or support link
