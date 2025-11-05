## Description

Splitter is a resizable divider that lets users adjust the size of adjacent panels by dragging. Perfect for layouts with multiple content areas, it gives users control over their workspace—making more room for what matters most to them at any moment.

## Anatomy

1. **Splitter Bar** - Draggable divider between panels
2. **Handle/Button** - Visual indicator of draggable area
3. **Adjacent Panels** - Content areas being resized
4. **Min/Max Constraints** - Size limits for panels

## Specification

**Component Sets:**
- **Splitter**: Full splitter component set
- **Splitter - Button**: Handle/grip component
- **Splitter - Bar**: Divider bar variants

**Orientation:**
- Vertical (splits left/right panels)
- Horizontal (splits top/bottom panels)

**Splitter Bar:**
- **Width/Height**: `4-8px` typically
- **Background**: Light gray or subtle color
- **Hover**: Darker or more visible
- **Cursor**: `col-resize` (vertical) or `row-resize` (horizontal)

**Handle:**
- Grip dots or lines
- Centered on splitter bar
- More visible on hover

## Do

- Show clear visual affordance (handle or hover state)
- Set reasonable min/max panel sizes
- Provide smooth dragging experience
- Remember user's preferred split position
- Support double-click to reset to default
- Support keyboard resizing (arrow keys)

## Don't

- Don't make splitter too thin to grab
- Don't allow panels to be resized too small
- Don't forget mobile/touch support
- Don't hide splitter completely—users need to find it

## Uses

- Code editor with sidebar
- Email client (message list + preview)
- File browser with preview pane
- Documentation with table of contents
- Dashboard with multiple data panels

## Behavior

**Dragging:**
1. User hovers over splitter → cursor changes
2. User clicks and drags
3. Adjacent panels resize in real-time
4. Release completes resize

**Keyboard:**
- Arrow keys resize by increment
- Shift+Arrow for larger increments
- Double-click or keyboard shortcut to reset

## Accessibility

- Focusable with Tab
- `role="separator"` with `aria-orientation`
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for size
- Arrow keys to resize
- Clear focus indicator
- Announce size changes to screen readers
