## Description

Image Preview is a full-screen overlay for viewing images with built-in controls for zooming, rotating, and navigating through multiple images. It provides a focused, distraction-free viewing experience with a floating toolbar that gives users complete control over how they examine images.

Think of it as a lightbox meets image viewer—perfect for detailed inspection without leaving your current page.

## Anatomy

1. **Overlay** - Dark backdrop (`rgba(12, 12, 22, 0.6)`)
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
- **Gap**: `12px` between elements
- **Padding**: `12px 0px 48px` (top, sides, bottom)

**Overlay:**
- **Background**: `rgba(12, 12, 22, 0.6)` (dark with 60% opacity)
- **Size**: Full viewport coverage
- **Z-index**: High (above page content)

### Toolbar

**Style:**
- **Background**: `rgba(12, 12, 22, 0.8)` (darker, semi-transparent)
- **Border Radius**: `666px` (pill shape)
- **Padding**: `0px 24px`
- **Layout**: Horizontal row, center-aligned
- **Gap**: `12px` between items
- **Position**: Floating, typically bottom-center

**Sizing:**
- **Horizontal**: Hug content (auto width)
- **Vertical**: Hug content (auto height)

### Toolbar Icon Component Set

**Layout:**
- **Mode**: Column
- **Justify**: Flex-end
- **Gap**: `20px` between variants
- **Padding**: `10px`

**Icon Sizing:**
- Standard icon size (typically 20-24px)
- Consistent across all toolbar items

### Toolbar Item Component Set

**Dimensions:**
- **Container**: `82px × 224px` (component set)
- **Variants**: Different states and types

**Spacing:**
- **Gap**: `20px` between items in vertical layout
- **Padding**: `10px` around items

### Toolbar Text

**Layout:**
- **Mode**: Horizontal row
- **Padding**: `0px 0px 16px` (bottom padding)
- **Sizing**: Hug content

**Typography:**
- Light colored text (white or light gray)
- Small to medium size
- Shows context like "2 / 5" for image count

## Do

- Open image preview on image click
- Provide zoom in/out controls
- Allow rotation (90° increments)
- Show download option for user's reference
- Display current position in image gallery ("3 of 10")
- Support keyboard shortcuts (arrow keys, Esc, etc.)
- Allow zooming with mouse wheel
- Provide fullscreen option
- Show loading state while image loads

## Don't

- Don't forget close button—users need an escape
- Don't block right-click if downloads are allowed
- Don't make toolbar too large—it blocks the image
- Don't forget mobile pinch-to-zoom
- Don't auto-play image galleries without user control
- Don't load full-resolution images without indication
- Don't forget keyboard navigation

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
1. User clicks image thumbnail
2. Overlay fades in (200-300ms)
3. Image loads and displays
4. Toolbar appears
5. Focus moves to preview container

**Zooming:**
- **Zoom In**: Click zoom-in button or scroll up
- **Zoom Out**: Click zoom-out button or scroll down
- **Fit to Screen**: Double-click or reset button
- **Pan**: Click and drag when zoomed in

**Rotating:**
- Click rotate buttons (90° increments)
- Smooth rotation animation
- Maintains zoom level

**Navigation:**
- **Next**: Right arrow button, arrow key, or swipe left
- **Previous**: Left arrow button, arrow key, or swipe right
- **Keyboard**: Arrow keys, numbers (jump to image)

**Closing:**
- Click close button
- Press Escape key
- Click overlay outside image
- Swipe down (mobile)

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
- Overlay: Fade in from 0 to 0.6 opacity (200ms)
- Image: Fade + scale from 0.9 to 1.0 (300ms)
- Toolbar: Slide up from bottom (250ms, delay 100ms)

**Close:**
- Reverse of open animation
- Image: Fade + scale to 0.9 (250ms)
- Overlay: Fade out (200ms)

**Navigation:**
- Slide transition between images
- Cross-fade alternative for smoother feel

**Reduced Motion:**
- Instant transitions
- Fade only, no scale or slide
- Respects prefers-reduced-motion

### Touch Gestures

- **Pinch**: Zoom in/out
- **Double Tap**: Toggle zoom
- **Drag**: Pan when zoomed
- **Swipe Left/Right**: Navigate images
- **Swipe Down**: Close preview

## Accessibility

**Keyboard Navigation:**
- `Tab` - Navigate toolbar buttons
- `Arrow Keys` - Navigate images, pan when zoomed
- `+/-` - Zoom in/out
- `R` - Rotate
- `F` - Fullscreen
- `D` - Download
- `Escape` - Close preview
- `Home` - First image
- `End` - Last image

**Screen Reader Support:**
- Announce image title and position: "Image 3 of 7: Patent Drawing A"
- Toolbar buttons have clear labels: "Zoom in", "Rotate clockwise", "Download image"
- Current zoom level announced: "Zoomed to 200%"
- Loading state announced: "Loading image"
- Alternative: Provide image description or caption

**ARIA Attributes:**
```html
<div
  role="dialog"
  aria-modal="true"
  aria-label="Image preview"
  aria-describedby="image-info">
  <img
    src="image.jpg"
    alt="Patent drawing showing mechanism"
    id="image-info">
  <div role="toolbar" aria-label="Image controls">
    <button aria-label="Zoom in">+</button>
    <button aria-label="Zoom out">-</button>
    <button aria-label="Rotate clockwise">↻</button>
    <!-- ... -->
  </div>
</div>
```

**Focus Management:**
- Focus moves to preview container on open
- Focus trap within preview (can't tab to page behind)
- Toolbar buttons receive focus in logical order
- Focus returns to trigger element on close

**Image Descriptions:**
- Provide alt text for all images
- Support long descriptions for complex images
- Show caption if available
- Announce zoom level changes

**Color & Contrast:**
- Toolbar controls visible against dark background
- Focus indicators clearly visible (white outline on dark bg)
- Text readable at all zoom levels
- High contrast mode support

**Touch Targets:**
- Toolbar buttons minimum 44×44px
- Sufficient spacing between buttons
- Swipe gestures responsive
- Multi-touch zoom smooth and predictable

**Loading States:**
- Skeleton or spinner while loading
- Announce loading to screen readers
- Don't show broken image icon
- Provide retry option on error
