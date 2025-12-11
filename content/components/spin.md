---
title: Spin
description: "Documentation for Spin component"
---

## Description

Spin tells users something's happening. Whether it's a standalone spinner for page loads or an overlay that blocks interactions, this rotating animation reassures users that work is in progress and they should hang tight.

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
- Center the spinner in its container
- Add descriptive text for longer waits
- Provide a way to cancel lengthy operations
- Use overlays to block interactions during critical processes

## Don't

- Use for quick operations under 300ms
- Block the entire page unless absolutely necessary
- Let spinners run forever without a timeout
- Forget to hide spinners when errors occur

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

