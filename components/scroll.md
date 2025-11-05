## Description

Scroll (Scrollbar) is a custom-styled scrolling control that provides a polished, consistent scrolling experience across different browsers and platforms. It replaces default browser scrollbars with a design that matches your interface aesthetic while maintaining expected scrolling behavior.

Think of it as a refined scrollbar that feels at home in your design system—keeping functionality while adding polish.

## Anatomy

1. **Track** - Background channel where thumb moves
2. **Thumb** - Draggable indicator showing scroll position
3. **Buttons** - Optional scroll up/down buttons (rarely used)
4. **Container** - Scrollable content area

## Specification

### Scrollbar Component Set

**Dimensions:**
- **Component Set Canvas**: `218px × 190px`
- **Variants**: Vertical and horizontal orientations

**Vertical Scrollbar:**
- **Width**: Typically `6-12px`
- **Height**: Matches container height
- **Position**: Right edge of container

**Horizontal Scrollbar:**
- **Height**: Typically `6-12px`
- **Width**: Matches container width
- **Position**: Bottom edge of container

**Track:**
- **Background**: Light gray or transparent (`#F4F6F8`, `#ECEEF0`)
- **Border Radius**: Rounded (`3-6px`)
- **Hover**: Slightly darker background (optional)

**Thumb:**
- **Background**: Medium gray (`#D1D6DB`, `#9CA3AF`)
- **Border Radius**: Matches track
- **Hover**: Darker gray
- **Active**: Even darker when dragging
- **Min Height/Width**: `30-40px` (prevents too-small thumb)

## Do

- Use custom scrollbars for consistent branded experience
- Ensure scrollbar is visible enough to be noticed
- Maintain appropriate thumb size relative to content
- Support both mouse and touch scrolling
- Show scrollbar on hover (optional auto-hide)
- Provide smooth scrolling animations
- Test across browsers for consistency

## Don't

- Don't make scrollbars too thin—they become hard to grab
- Don't hide scrollbars completely without indication of scrollable content
- Don't override accessibility features like scroll wheel
- Don't forget keyboard scrolling support
- Don't make thumb too small (minimum 30-40px)
- Don't use only on some containers—be consistent

## Uses

**Primary Use Cases:**

1. **Long Content Areas** - Articles, documentation, lists
2. **Sidebars** - Navigation panels with many items
3. **Modal/Drawer Content** - Scrollable popup content
4. **Tables** - Horizontal and vertical scrolling
5. **Code Editors** - Scrolling through code
6. **Chat Windows** - Message history
7. **Data Grids** - Large datasets

**Example Scenarios:**

**Patent Document Viewer:**
- Long PDF or document content
- Custom scrollbar matches interface
- Smooth scrolling through pages
- Jump-to-section via scrollbar click

**Data Table:**
- Vertical scroll for many rows
- Horizontal scroll for many columns
- Scrollbars appear on hover
- Sticky headers remain visible

**Sidebar Navigation:**
- Many navigation items
- Thin, subtle scrollbar
- Auto-hides when not needed
- Returns on hover or scroll

## Behavior

### States

**Scrollbar States:**
- **Hidden** - Auto-hide when not needed
- **Visible** - Always visible or on hover
- **Hover** - Thumb darkens on hover
- **Active** - Thumb darkens when dragging
- **Disabled** - Content not scrollable (full visible)

**Thumb States:**
- **Default** - Standard appearance
- **Hover** - Highlighted
- **Dragging** - Active, darker
- **Transitioning** - Animating position

### Interactions

**Mouse Wheel:**
- Scroll wheel moves content
- Thumb position updates accordingly
- Smooth scrolling animation

**Thumb Dragging:**
1. User hovers over thumb
2. Cursor changes to grab cursor
3. User clicks and drags thumb
4. Content scrolls proportionally
5. Release ends drag

**Track Clicking:**
1. User clicks track above/below thumb
2. Content jumps by page (viewport height/width)
3. Thumb animates to new position

**Auto-Hide Behavior:**
- Scrollbar fades out after inactivity (1-2s)
- Reappears on hover over scroll area
- Reappears on scroll interaction
- Stays visible while scrolling

**Keyboard Scrolling:**
- Arrow keys scroll content
- Page Up/Down scroll by page
- Home/End jump to top/bottom
- Space scrolls down by page
- Scrollbar updates position

### Animations

**Appear/Disappear:**
- Fade in/out (200ms)
- Optional slide from edge

**Thumb Movement:**
- Smooth position transition (100-200ms)
- Easing: Ease-out

**Hover:**
- Color transition (150ms)
- Scale slightly (1.1x) on hover (optional)

**Reduced Motion:**
- Instant position updates
- No fade animations
- Respects prefers-reduced-motion

### Scrolling Performance

- Use `transform` for smooth scrolling
- Hardware acceleration when possible
- Throttle scroll events (16ms / 60fps)
- Lazy load content beyond viewport
- Virtual scrolling for very long lists

## Accessibility

**Keyboard Support:**
- `Arrow Up/Down` - Scroll vertically
- `Arrow Left/Right` - Scroll horizontally
- `Page Up/Down` - Scroll by page
- `Home` - Scroll to top/start
- `End` - Scroll to bottom/end
- `Space` - Scroll down by page
- `Shift+Space` - Scroll up by page

**Screen Reader Support:**
- Scrollable region identified
- Announce scroll position on significant changes
- Don't announce every pixel scroll
- Indicate scrollable content: "Scrollable region"
- Announce when reaching top/bottom

**ARIA Attributes:**
```html
<div
  role="region"
  aria-label="Patent document"
  tabindex="0"
  style="overflow: auto;">
  <!-- Scrollable content -->
</div>
```

**Focus Management:**
- Scrollable container can receive focus (tabindex="0")
- Focus visible on container
- Scroll position preserved on focus
- Arrow keys scroll when focused

**Scroll Indicators:**
- Visual fade at top/bottom showing more content
- "Scroll for more" hint for first-time users
- Scrollbar visibility indicates scrollable content
- Don't hide all indicators—users need to know content continues

**Touch Devices:**
- Native touch scrolling always works
- Custom scrollbar appears on scroll
- Momentum scrolling supported
- Pinch-to-zoom if appropriate

**Color & Contrast:**
- Scrollbar visible against background (3:1 minimum)
- Thumb distinct from track
- Hover/active states clearly visible
- Works in light and dark themes

**Pointer Types:**
- Mouse: Precise scrollbar dragging
- Touch: Native touch scrolling + custom scrollbar visual
- Trackpad: Smooth gesture scrolling
- Keyboard: Arrow key scrolling

**Performance & Accessibility:**
- Don't block scrolling with JavaScript
- Maintain 60fps during scroll
- Use passive event listeners
- Don't prevent default scroll behavior
- Allow browser zoom to affect scrollbar size
