## Description

Spin is a loading indicator that shows activity is happening. Whether as a standalone spinner for page loads or an overlay for blocking interactions, it provides essential feedback that something is processing. The rotating animation reassures users to wait while work completes.

## Anatomy

### Spin (Standalone)
1. **Spinner Icon** - Rotating circle or custom loader
2. **Optional Label** - "Loading..." text below spinner

### Spin Overlay
1. **Backdrop** - Semi-transparent white background (`rgba(255,255,255,0.8)`)
2. **Spinner** - Centered loading indicator
3. **Optional Message** - Loading text

## Specification

**Spin Component Set:**
- **Dimensions**: `192px × 224px` (component set canvas)
- **Variants**: Different sizes and styles

**Spin Overlay:**
- **Dimensions**: `600px × 300px` (example)
- **Layout**: Column, center-justified and aligned
- **Background**: `rgba(255,255,255,0.8)` (white, 80% opacity)
- **Covers**: Entire container or full page

**Spinner:**
- **Sizes**: Small (16px), Medium (24px), Large (32-48px)
- **Animation**: 360° rotation
- **Duration**: 1-2 seconds per rotation
- **Easing**: Linear (constant speed)
- **Color**: Brand color or gray

## Do

- Use for operations longer than 300ms
- Center spinner in its container
- Add descriptive text for long operations
- Provide way to cancel long operations
- Use overlay to prevent interaction during critical operations

## Don't

- Don't use for very fast operations (<300ms)
- Don't block entire page unless necessary
- Don't spin infinitely without timeout
- Don't forget to handle errors and hide spinner

## Uses

- Initial page load
- Button loading state ("Submitting...")
- Form submission
- API request in progress
- File processing
- Content refresh
- Search executing

## Behavior

**Standalone Spin:**
- Appears inline with content
- Doesn't block interaction
- Use for partial page loads

**Spin Overlay:**
- Covers container or page
- Blocks all interaction underneath
- Dims content for focus on spinner
- Use for critical blocking operations

**Animation:**
- Continuous 360° rotation
- 1-2s per full rotation
- Linear easing (constant speed)
- Infinite until stopped

**Reduced Motion:**
- Use pulsing opacity instead of rotation
- Or simple static indicator
- Respects prefers-reduced-motion

## Accessibility

- `role="status"` or `aria-live="polite"`
- `aria-label="Loading"` on spinner
- Announce start: "Loading content"
- Announce completion or error
- Don't trap focus unnecessarily
- Provide skip/cancel option for long operations
- Screen readers announce loading state
