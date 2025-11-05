## Description

Icons are visual symbols that communicate actions, objects, or concepts at a glance. OneDS includes two icon systems: standard UI icons in multiple styles and sizes, plus specialized file type icons that instantly identify document formats. Icons make interfaces more scannable, reduce cognitive load, and work across language barriers.

Think of icons as the visual vocabulary of your interface—instantly recognizable symbols that speak louder than words.

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

- Use icons consistently across the application
- Pair icons with text labels for clarity (especially for uncommon actions)
- Use appropriate size for context (larger for primary actions, smaller for dense UIs)
- Choose solid vs line based on visual weight needs
- Use file icons to make file types instantly recognizable
- Maintain consistent style (don't mix solid and line randomly)
- Ensure icons are scalable (vector format)

## Don't

- Don't use icons without labels for unfamiliar actions
- Don't make icons too small to tap (minimum 44×44px touch target)
- Don't mix icon styles inconsistently
- Don't use decorative icons without aria-hidden="true"
- Don't forget color-blind users—add text or patterns
- Don't assume all users understand all icons
- Don't scale bitmap icons—use vectors

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
1. User hovers over icon
2. Cursor changes to pointer
3. Icon shows hover state (color/scale change)
4. User clicks
5. Icon shows active state briefly
6. Associated action executes

**Non-Interactive Icons:**
- Cursor remains default
- No hover state
- Used for decoration or status indication

**Icon Buttons:**
- Entire touch target clickable (minimum 44×44px)
- Icon centered within button
- Hover/focus on entire button area
- May include tooltip on hover

### Sizing Context

**Small Icons (.5x - .75x):**
- Dense UIs, tables, inline with text
- Secondary actions
- File type indicators

**Medium Icons (1x):**
- Default size for most use cases
- Standard buttons
- Navigation

**Large Icons (1.5x - 2x):**
- Empty states
- Hero sections
- Primary calls-to-action
- Feature highlights

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

## Accessibility

**Decorative Icons:**
```html
<!-- Icon is purely decorative, has no meaning -->
<button>
  <span aria-hidden="true">🗑️</span>
  Delete
</button>
```

**Semantic Icons:**
```html
<!-- Icon has meaning, needs label -->
<button aria-label="Delete item">
  <span aria-hidden="true">🗑️</span>
</button>
```

**Icon + Text:**
```html
<!-- Best: Both icon and text visible -->
<button>
  <span aria-hidden="true">✓</span>
  Approve
</button>
```

**Screen Reader Support:**
- Decorative icons: `aria-hidden="true"`
- Semantic icons: Provide aria-label or sr-only text
- File icons: Include file type in surrounding text
- Status icons: Announce meaning ("Success", "Error", etc.)

**Color & Contrast:**
- Icons meet 3:1 contrast minimum (WCAG AA for graphics)
- Don't rely on color alone—combine with shape/text
- Provide sufficient contrast in all themes
- Test in grayscale to verify meaning is clear

**Touch Targets:**
- Clickable icon minimum 44×44px
- Padding around icon if needed
- Sufficient spacing between icons
- Avoid tiny tap targets on mobile

**Keyboard Navigation:**
- Icon buttons focusable via Tab
- Focus indicator clearly visible
- Enter/Space activates icon button
- Logical tab order

**Focus Indicators:**
- Clear focus ring around icon button
- 3:1 contrast minimum for focus indicator
- Visible in high contrast mode
- Not obscured by icon itself

**Alternative Text:**
```html
<!-- File Icon Example -->
<div class="file-item">
  <span class="file-icon" aria-hidden="true">📄</span>
  <span>Patent Application.pdf</span>
  <span class="sr-only">PDF document</span>
</div>
```

**Status Icons:**
```html
<!-- Success Status -->
<div role="status" aria-live="polite">
  <span aria-hidden="true">✓</span>
  <span>Application submitted successfully</span>
</div>
```

**Icon Fonts vs SVG:**
- Prefer inline SVG for better accessibility
- SVG allows proper sizing and coloring
- Icon fonts can cause rendering issues
- SVG works better with screen readers

**Testing:**
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation
- Check color contrast
- Test with zoom to 200%
- Validate high contrast mode
