---
title: Image Preview
description: "Documentation for Image Preview component"
---

## Description

View images in focused, distraction-free glory. Image Preview is a full-screen overlay with built-in controls for zooming, rotating, and navigating through galleries. A floating toolbar gives users complete control over how they examine images.

Your lightbox-meets-image-viewer—perfect for detailed inspection without leaving the page.

## Anatomy

1. **Overlay** - Dark backdrop (`--bg-overlay`)
2. **Image Container** - Centered display area for the image
3. **Toolbar** - Floating control bar with rounded background
4. **Toolbar Items** - Individual control buttons
5. **Toolbar Icons** - Action icons (zoom, rotate, download, etc.)
6. **Toolbar Text** - Current image info (e.g., "2 / 5")
7. **Close Button** - Exit preview (typically X in corner)

## Specification

### Image Preview (Full Component)

**Dimensions:**
- **Canvas**: `1584px × 1154px` (viewport representation)
- **Layout**: Vertical column
- **Gap**: `spacing-3` between elements
- **Padding**: `spacing-3 0 spacing-12` (top, sides, bottom)

**Overlay:**
- **Background**: `--bg-overlay`
- **Size**: Full viewport coverage
- **Z-index**: High (above page content)

### Toolbar

**Style:**
- **Background**: `--bg-overlay-heavy`
- **Border Radius**: `radius-round` (pill shape)
- **Padding**: `0 spacing-6`
- **Layout**: Horizontal row, center-aligned
- **Gap**: `spacing-3` between items
- **Position**: Floating, typically bottom-center

**Sizing:**
- **Horizontal**: Hug content (auto width)
- **Vertical**: Hug content (auto height)

### Toolbar Icon Component Set

**Layout:**
- **Mode**: Column
- **Justify**: Flex-end
- **Gap**: `spacing-5` between variants
- **Padding**: `spacing-2.5`

**Icon Sizing:**
- Standard icon size (typically 20-24px)
- Consistent across all toolbar items

### Toolbar Item Component Set

**Dimensions:**
- **Container**: `82px × 224px` (component set)
- **Variants**: Different states and types

**Spacing:**
- **Gap**: `spacing-5` between items in vertical layout
- **Padding**: `spacing-2.5` around items

### Toolbar Text

**Layout:**
- **Mode**: Horizontal row
- **Padding**: `0 0 spacing-4` (bottom padding)
- **Sizing**: Hug content

**Typography:**
- Light colored text (white or light gray)
- Small to medium size
- Shows context like "2 / 5" for image count

## Do

- Open preview on image click
- Provide zoom in/out controls
- Allow rotation in 90° increments
- Show download options
- Display current position in galleries ("3 of 10")
- Support keyboard shortcuts (arrows, Esc, +/-, etc.)
- Enable mouse wheel zooming
- Provide fullscreen mode
- Show loading states while images load

## Don't

- Forget the close button—users need an escape
- Block right-click if downloads are allowed
- Make the toolbar too large—it blocks the view
- Skip mobile pinch-to-zoom
- Auto-play galleries without user control
- Load full-resolution without indication
- Forget keyboard navigation support

## Uses

**Primary Use Cases:**

1. **Patent Drawings** - View detailed technical drawings
2. **Product Images** - E-commerce product gallery
3. **Document Scans** - View uploaded documents
4. **Diagrams** - Technical diagrams and schematics
5. **Photo Galleries** - Browse collections of images
6. **Attachment Preview** - View email or message attachments
7. **Image Verification** - Inspect images before submission

**Example Scenarios:**

**Patent Drawing Viewer:**
```
[Dark Overlay]

  [Large Patent Drawing - Centered]

  [─────────────────────────────]
  │  ← │ ○ │ ○ │ ↻ │ ↺ │ ⤢ │ ↓ │ → │ 3/7 │
  [─────────────────────────────]

  (○ zoom out, ○ zoom in, ↻ rotate right,
   ↺ rotate left, ⤢ fullscreen, ↓ download,
   ← → navigate, 3/7 current position)
```

**Product Gallery:**
```
[Image Preview]

Toolbar Actions:
- Navigate: Previous/Next image
- Zoom: In/Out
- Download: Save image
- Info: Image details
- Close: Exit preview
```

## Behavior

### States

**Preview States:**
- **Closed** - Not visible
- **Opening** - Fade-in animation
- **Open** - Fully visible and interactive
- **Loading** - Image loading (spinner/skeleton)
- **Loaded** - Image displayed
- **Zoomed** - Zoomed in view (pan-able)
- **Closing** - Fade-out animation

**Toolbar States:**
- **Visible** - Default state
- **Auto-hide** - Fades out after inactivity
- **Hover** - Reappears on mouse movement

**Image States:**
- **Default** - Fit to viewport
- **Zoomed In** - Enlarged, pan-able
- **Zoomed Out** - Reduced size
- **Rotated** - 90°, 180°, or 270° rotation

### Interactions

**Opening:**
Click an image thumbnail. The overlay fades in over 200-300ms, the image loads and displays, the toolbar appears, and focus moves to the preview container.

**Zooming:**
Zoom in/out with buttons or mouse wheel. Double-click or use the reset button to fit to screen. Pan by clicking and dragging when zoomed.

**Rotating:**
Click rotate buttons for 90° increments with smooth animations. Zoom level stays maintained.

**Navigation:**
Use arrow buttons, keyboard arrows, or swipe gestures to move between images. Type numbers to jump to specific images.

**Closing:**
Click the close button, press Escape, click outside the image, or swipe down on mobile.

**Keyboard Shortcuts:**
- `Escape` - Close preview
- `Left/Right Arrow` - Navigate images
- `+/=` - Zoom in
- `-` - Zoom out
- `0` - Reset zoom/rotation
- `R` - Rotate right
- `L` - Rotate left
- `F` - Fullscreen
- `D` - Download

### Animations

**Open:**
Overlay fades in to 0.6 opacity over 200ms. Image fades and scales from 0.9 to 1.0 over 300ms. Toolbar slides up from bottom in 250ms with a 100ms delay.

**Close:**
Reverse the open animation. Image fades and scales to 0.9 in 250ms, overlay fades out in 200ms.

**Navigation:**
Slide transitions between images, or use cross-fade for a smoother feel.

**Reduced Motion:**
Instant transitions with fade only (no scale or slide). Respects prefers-reduced-motion settings.

### Touch Gestures

Pinch to zoom in/out. Double-tap to toggle zoom. Drag to pan when zoomed. Swipe left/right to navigate images. Swipe down to close the preview.

