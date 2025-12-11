---
title: Icons
description: "Documentation for Icons component"
---

## Description

Icons are visual symbols that communicate actions, objects, or concepts at a glance. OneDS includes standard UI icons in multiple styles and sizes, plus specialized file type icons for document formats. They make interfaces scannable, reduce cognitive load, and work across languages.

Think of them as your interface's visual vocabulary—instantly recognizable symbols that speak louder than words.

## Anatomy

### Icon Component
1. **SVG Container** - Vector graphic wrapper
2. **Icon Graphic** - The symbol itself
3. **Visual Style** - Solid, line, or other variants

### File Icon Component
1. **File Shape** - Document/folder outline
2. **Extension Indicator** - File type label or icon
3. **Color Coding** - Type-specific colors (optional)

## Specification

### Icon Component Set

**Dimensions:**
- **Component Set Canvas**: `295px × 380px`
- **Variants**: Multiple styles, spacings, and sizes

**Style Variants:**
- **Solid**: Filled icons, higher visual weight
- **Line**: Outlined icons, lighter appearance
- **Other variants**: May include duotone, light, regular, bold

**Spacing Variants:**
- **Square**: No extra padding, tight fit
- **Roomy**: Additional padding around icon

**Size Variants:**
- **.5x**: Extra small (typically 10-12px)
- **.75x**: Small (typically 15-18px)
- **1x**: Default size (typically 20-24px)
- **1.5x**: Large (typically 30-36px)
- **2x**: Extra large (typically 40-48px)

### File Icon Component Set

**Dimensions:**
- **Component Set Canvas**: `72px × 332px`
- **Icon Size**: Consistent file document shape

**File Types:**
- Document types (PDF, DOC, DOCX, TXT)
- Spreadsheets (XLS, XLSX, CSV)
- Presentations (PPT, PPTX)
- Images (JPG, PNG, GIF, SVG)
- Archives (ZIP, RAR)
- Code files (JS, HTML, CSS)
- Generic file icon for unknown types

## Do

- Use icons consistently across application
- Pair with text labels for clarity
- Use appropriate size for context
- Choose solid vs line based on visual weight
- Use file icons for instant recognition
- Maintain consistent style throughout
- Use scalable vector format

## Don't

- Use without labels for unfamiliar actions
- Make too small to tap (44px minimum)
- Mix styles inconsistently
- Leave decorative icons visible to screen readers
- Forget color-blind users (add text or patterns)
- Assume all icons are universally understood
- Scale bitmap icons (use vectors)

## Uses

**Standard Icon Use Cases:**

1. **Navigation** - Menu, home, back, forward icons
2. **Actions** - Edit, delete, download, share, etc.
3. **Status** - Success check, error X, warning triangle
4. **Content Type** - User, document, image, video icons
5. **UI Controls** - Close X, dropdown chevron, search magnifier
6. **Social** - Social media platform icons
7. **System** - Settings gear, notifications bell, help question mark

**File Icon Use Cases:**

1. **File Browsers** - Show file types in lists
2. **Attachments** - Identify email attachments
3. **Upload Previews** - Show file type before upload
4. **Download Lists** - Indicate downloadable file types
5. **Search Results** - Visual file type indication
6. **Document Libraries** - Quick file type scanning

**Example Scenarios:**

**Navigation Bar:**
```
[🏠 Home] [📄 Documents] [⚙️ Settings] [👤 Profile]
```

**Action Buttons:**
```
[✏️ Edit] [🗑️ Delete] [↓ Download] [↗ Share]
```

**File List:**
```
📄 report.pdf          2.4 MB
📊 data.xlsx           1.1 MB
📝 notes.txt           42 KB
🖼️ diagram.png        890 KB
🗜️ archive.zip         5.2 MB
```

**Status Indicators:**
```
✓ Success
✗ Error
⚠ Warning
ℹ Info
```

**Patent Application:**
```
[📄 View Claims]
[🖼️ View Drawings]
[↓ Download PDF]
[📤 Submit Application]
```

## Behavior

### States

**Icon States:**
- **Default** - Standard appearance
- **Hover** - Slight color change or scale (interactive icons)
- **Active** - Darker or emphasized (when pressed)
- **Disabled** - Grayed out, reduced opacity
- **Loading** - Spinning or pulsing animation

**Interactive Icons:**
- Icons in buttons inherit button states
- Standalone clickable icons show hover feedback
- Icon + label combinations treated as one unit

### Interactions

**Clickable Icons:**
1. User hovers, cursor becomes pointer
2. Icon shows hover state
3. User clicks, brief active state
4. Associated action executes

**Non-Interactive Icons:**
- Default cursor, no hover
- Used for decoration or status

**Icon Buttons:**
- Entire target clickable (44px minimum)
- Icon centered within button
- Hover/focus on entire area
- May include tooltip

### Sizing Context

**Small (.5x - .75x):**
- Dense UIs, tables, inline text
- Secondary actions, file indicators

**Medium (1x):**
- Default for most use cases
- Standard buttons, navigation

**Large (1.5x - 2x):**
- Empty states, hero sections
- Primary actions, feature highlights

### Animations

**Hover:**
- Subtle color transition (150ms)
- Optional slight scale (1.05x)

**Loading:**
- Spin animation (infinite loop)
- Duration: 1-2s per rotation
- Easing: Linear

**Success/Error:**
- Check mark or X animates in
- Scale from 0.8 to 1.0
- Duration: 300ms

**Reduced Motion:**
- No spinning or scaling
- Instant color changes only
- Respects prefers-reduced-motion
