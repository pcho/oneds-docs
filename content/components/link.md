---
title: Link
description: "Documentation for Link component"
---

## Description

Link is your gateway to navigation—a clickable text element that takes users somewhere new. Whether navigating to another page, jumping to a section, downloading a file, or opening an external site, links are the web's connective tissue. Simple, familiar, and essential.

## Anatomy

1. **Text Label** - Clickable link text
2. **Icon** - Optional leading or trailing icon
3. **Underline** - Text decoration (optional)
4. **Color** - Visual indicator of link state
5. **External Indicator** - Icon for external links (optional)

## Specification

**Default Link:**
- **Font Size**: `text-base` (inherits from context)
- **Font Weight**: `font-weight-normal`
- **Text Decoration**: Underline on hover
- **Color**: `--text-brand`
- **Hover Color**: Darker blue (`#0050B3`)
- **Visited Color**: Purple (`#722ED1`) (optional)
- **Active Color**: Even darker blue (`#003A8C`)
- **Disabled Color**: `--text-placeholder`

**States:**
- **Default**: Primary color, no underline
- **Hover**: Darker color, underline appears
- **Active**: Darkest color, underline
- **Visited**: Purple color (optional)
- **Focus**: Blue outline, underline
- **Disabled**: Gray, not clickable

**Icon Spacing:**
- **Gap**: `spacing-1` between icon and text
- **Icon Size**: `text-lg` (scales with text)
- **Position**: Leading or trailing

**Variants:**
- **Primary Link** - Standard blue link
- **Secondary Link** - Subtle gray link
- **Danger Link** - Red for destructive actions
- **Text Link** - Inherits text color
- **Underlined** - Always underlined

**External Link:**
- **Icon**: External link icon (↗) after text
- **Indicator**: Opens in new tab warning

## Do

- Make text descriptive and clear
- Underline links in body text
- Show visited state for navigation
- Use external link indicators
- Make entire area clickable
- Provide focus indicators
- Use appropriate color contrast
- Open external links in new tabs with warning

## Don't

- Use "click here" as link text
- Make links look like buttons
- Forget hover and focus states
- Open in new tabs unexpectedly
- Use too many colors
- Hide important links
- Make text too long
- Rely on color alone

## Uses

**Primary Use Cases:**

1. **Navigation** - Moving between pages
2. **Documentation** - Reference links
3. **External Resources** - Outside websites
4. **Downloads** - File downloads
5. **Anchors** - Same-page section jumps
6. **Breadcrumbs** - Hierarchical navigation
7. **Inline Actions** - Lightweight actions in text
8. **Email/Phone** - `mailto:` and `tel:` links

**Example Scenarios:**

**In-page Link:**
```
Read more about [Patent Filing Guidelines]
```

**External Link:**
```
View on [USPTO Website ↗]
```

**Download Link:**
```
[📥 Download PDF] (2.3 MB)
```

**Anchor Link:**
```
Jump to [Specifications] section
```

**Email Link:**
```
Contact us at [support@example.com]
```

## Behavior

### States

**Default State:**
- Primary blue color
- No underline (or subtle)
- Pointer cursor on hover

**Hover State:**
1. User hovers over link
2. Color darkens slightly
3. Underline appears or intensifies
4. Smooth transition (150ms)

**Active State:**
- Darkest color variation
- Pressed appearance
- Brief during click

**Focus State:**
- Blue outline ring
- Underline visible
- Clear keyboard indicator
- Meets WCAG requirements

**Visited State:**
- Purple color (or muted)
- Indicates previous visit
- Optional based on context

**Disabled State:**
- Gray color
- No hover effect
- Not clickable

### Interactions

**Click Behavior:**
1. User clicks link
2. Brief active state
3. Navigate to destination
4. Browser handles navigation
5. Link marked as visited

**Keyboard Navigation:**
- `Tab` - Focus link
- `Enter` - Activate link
- `Shift + Tab` - Focus previous link

**Touch Behavior:**
- Tap to activate
- Brief highlight on tap
- No hover state on touch devices
- Large enough touch target (44×44px minimum)

### Opening Behavior

**Same Tab (default):**
- Internal navigation
- Same-domain links
- Anchor links

**New Tab:**
- External links
- Downloads
- Long-form content
- Indicate with icon or text

### Animations

**Hover:**
- Color transition: 150ms ease
- Underline fade in: 150ms
- Smooth, subtle

**Focus:**
- Outline appears instantly
- Underline visible
- No delay for accessibility
