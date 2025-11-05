## Description

Avatar represents a unique entity—whether it's an individual, business, or object (like a patent)—through visual identity. From initials to photos to icons, avatars personalize interfaces and help users quickly identify people, accounts, and items at a glance.

## Anatomy

1. **Container** - Circular or oval shape
2. **Content** - Initials, image, or icon
3. **Background** - Colored background for initials
4. **Border** - Optional outline (optional)
5. **Status Indicator** - Online/offline dot (optional)

## Specification

**Avatar Container:**
- **Shape**: Circle (default) or oval (tags only)
- **Border Radius**: `50%` (circle)
- **Background**: Varies by variant
- **Border**: `1px solid #D1D6DB` (optional)

**Sizes:**
- **24px**: Extra small (compact lists, dense tables)
- **28px**: Small (table rows, compact UI)
- **32px**: Default/Medium (standard use)
- **36px**: Large (user profiles, headers)
- **48px**: Extra large (profile pages) *
- **64px**: Display size (account settings) *

*Note: Available sizes are 24, 28, 32, and 36px primarily, with larger sizes for specific contexts

**Variants:**

**Initials Avatar:**
- **Background**: Color generated from name (hash-based)
- **Text**: 1-2 uppercase initials
- **Font Size**: 40-50% of avatar size
- **Font Weight**: 500 (medium)
- **Text Color**: White (`#FFFFFF`)
- **Default**: The default avatar version that displays user initials

**Photo Avatar:**
- **Content**: User-uploaded image
- **Fit**: Cover (fills container)
- **Position**: Center
- **Fallback**: Initials or icon if image fails
- **Format**: Square images or cropped to square

**Icon Avatar:**
- **Icon**: Generic user icon (👤)
- **Background**: Light gray (`#F5F5F5`)
- **Icon Color**: Gray (`#8C8C8C`)
- **Icon Size**: 60% of avatar size
- **Use**: Placeholder when no image/initials available

**Oval Avatar:**
- **Shape**: Oval/pill (exclusively for tags)
- **Border Radius**: `16px` (pill shape)
- **Use**: Paired with select component tags only
- **Aspect Ratio**: Slightly wider than tall

**Status Indicator:**
- **Size**: 25% of avatar size
- **Position**: Bottom-right corner
- **Border**: `2px solid white`
- **Colors**: Green (online), Gray (offline), Yellow (away), Red (busy)

## Do

- Use up to two initials to represent users or entities when an image is not available.
- To ensure proper proportions and effectively frame an avatar, utilize square images or allow users to crop their images into a square format.

## Don't

- Please avoid stretching images or allowing them to extend beyond the avatar shape. Also, refrain from using images with transparent backgrounds. Keep it neat and tidy!
- Don’t add more than 2 characters.
- Don’t use more than 2 avatars. No grouping or stacking is intended.

## Uses

**Primary Use Cases:**

1. **User Profiles** - Account identification
2. **Comments** - Author attribution
3. **Tables** - User columns
4. **Navigation** - Account menu trigger
5. **Lists** - People or entity lists
6. **Mentions** - @mentions in text
7. **Assignments** - Assigned users
8. **Chat/Messages** - Conversation participants

**Example Scenarios:**

**User Profile:**
```
    [AJ]  Alice Johnson
          alice@example.com
```

**Table Row:**
```
│ [AJ] Alice Johnson  │ Designer    │ Active │
│ [BK] Bob Kim        │ Developer   │ Active │
```

**Navigation Menu:**
```
        [👤] ▾
        ↓
    ┌──────────────────┐
    │ [AJ] My Profile  │
    │ Settings         │
    │ Logout           │
    └──────────────────┘
```

## Behavior

**Interactive Avatars:**
- Clickable avatars open profiles or menus
- Hover shows tooltip with name
- Cursor changes to pointer
- Focus indicator on keyboard navigation

**Fallback Logic:**
1. Try to display photo
2. If no photo: Show initials
3. If no initials: Show generic icon
4. Background color based on name hash

**Loading States:**
- Skeleton placeholder while loading
- Smooth fade-in when image loads
- Handle broken image gracefully

**Status Indicators:**
- Update in real-time (online/offline)
- Animate status changes
- Clear visual distinction

## Accessibility

**Semantic HTML:**
```html
<!-- Photo avatar -->
<img
  src="/avatar.jpg"
  alt="Alice Johnson"
  class="avatar"
  width="32"
  height="32">

<!-- Initials avatar -->
<div
  class="avatar avatar-initials"
  aria-label="Alice Johnson"
  role="img">
  AJ
</div>

<!-- Icon avatar -->
<div
  class="avatar avatar-icon"
  aria-label="User"
  role="img">
  <svg aria-hidden="true">👤</svg>
</div>
```

**ARIA Attributes:**
- `alt` text for image avatars
- `aria-label` for initials/icon avatars
- `role="img"` for non-image avatars
- Empty `alt=""` if purely decorative
- `aria-hidden="true"` if name displayed adjacent

**Screen Reader Support:**
- Ensure that the user's or entity's name is displayed near the avatar whenever possible
- If the name cannot be displayed, provide an `aria-label` and `alt` text for the avatar, unless it is purely decorative
- Announce presence status if indicator shown
- Read associated name from adjacent text

**Interactive Avatars:**
```html
<button
  class="avatar-button"
  aria-label="Open Alice Johnson's profile"
  aria-haspopup="true">
  <img src="/avatar.jpg" alt="" aria-hidden="true">
  <span class="sr-only">Alice Johnson</span>
</button>
```

**Status Indicators:**
```html
<div class="avatar-wrapper">
  <img src="/avatar.jpg" alt="Alice Johnson">
  <span
    class="status-indicator status-online"
    role="img"
    aria-label="Online">
  </span>
</div>
```

**Color & Contrast:**
- Initials meet 4.5:1 contrast on background
- Status indicators meet 3:1 contrast
- Border visible if needed
- Don't rely on color alone for status

**Touch Targets:**
- Interactive avatars minimum 44×44px
- Adequate spacing between avatars
- Full avatar area clickable

**Focus Indicators:**
- Clear focus ring on interactive avatars
- 3:1 contrast for focus outline
- Visible on keyboard navigation

**Image Best Practices:**
- Use up to two initials to represent users or entities when an image is not available
- To ensure proper proportions and effectively frame an avatar, utilize square images or allow users to crop their images into a square format
- Provide width/height attributes
- Lazy load offscreen avatars
- Optimize image sizes
- Handle broken images

**Responsive:**
- Scale appropriately on mobile
- Maintain aspect ratio
- Touch-friendly sizes
- Consider larger sizes for profiles
