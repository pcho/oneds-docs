---
title: Splitter
description: "Documentation for Splitter component"
---

## Description

Splitter is a resizable divider that puts users in control of their workspace. Drag it to adjust adjacent panel sizes and make more room for whatever matters most at the moment.

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

- Show clear visual cues (handles or hover states)
- Set sensible min/max panel sizes
- Make dragging feel smooth
- Remember users' preferred positions
- Support double-click to reset
- Enable keyboard resizing with arrow keys

## Don't

- Make splitters too thin to grab
- Let panels resize smaller than their minimum content
- Forget about mobile and touch support
- Hide splitters completely—users need to find them

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

