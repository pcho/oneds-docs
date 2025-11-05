# Figma Verification Checklist

This document provides a checklist for verifying that component documentation matches the Figma design specifications.

**Figma Files:**
- Components: https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components
- Foundations: https://www.figma.com/design/rxq8Lwm6cvWfhsW03rM79v/Foundations

## Verification Process

For each component, verify the following specifications match between Figma and documentation:

### Dimensions
- [ ] Width (default, min, max)
- [ ] Height (default, min, max)
- [ ] Padding (top, right, bottom, left)
- [ ] Gap/spacing between elements
- [ ] Border radius
- [ ] Border width

### Colors
- [ ] Background colors (all states)
- [ ] Text colors (all states)
- [ ] Border colors (all states)
- [ ] Icon colors (all states)
- [ ] Hover state colors
- [ ] Active/pressed state colors
- [ ] Focus state colors
- [ ] Disabled state colors
- [ ] Error state colors

### Typography
- [ ] Font family
- [ ] Font size
- [ ] Font weight
- [ ] Line height
- [ ] Letter spacing
- [ ] Text transform

### States
- [ ] Default state specifications
- [ ] Hover state specifications
- [ ] Active/pressed state specifications
- [ ] Focus state specifications
- [ ] Disabled state specifications
- [ ] Loading state specifications
- [ ] Error state specifications
- [ ] Success state specifications

### Variants
- [ ] Size variants (small, default, large)
- [ ] Style variants (primary, secondary, tertiary, etc.)
- [ ] Type variants (solid, outlined, ghost, text, etc.)
- [ ] Color variants (if applicable)

### Behavior
- [ ] Animation durations
- [ ] Animation easing functions
- [ ] Transition properties
- [ ] Interaction states

## Component Verification Status

### Priority 1: Core Components

#### Button
- [ ] Verify sizes: Small (32px), Default (40px), Large (48px)
- [ ] Verify variants: Primary, Secondary, Tertiary, Link, Danger
- [ ] Verify padding: Small (10px 12px), Default (12px 16px), Large (16px 24px)
- [ ] Verify colors: Primary (#1890FF), text, borders
- [ ] Verify states: Default, Hover, Active, Focus, Loading, Disabled

#### Input
- [ ] Verify height: 40px default
- [ ] Verify padding: 8px 12px
- [ ] Verify border: 1px solid #D9D9D9
- [ ] Verify border-radius: 6px
- [ ] Verify colors: Background (#FFFFFF), text (#262626), placeholder (#BFBFBF)
- [ ] Verify states: Default, Hover, Focus, Error, Disabled

#### Modal
- [ ] Verify max-width: 768px
- [ ] Verify padding: 24px (header/body), 16px 24px (footer)
- [ ] Verify border-radius: 8px
- [ ] Verify backdrop: rgba(0, 0, 0, 0.5)
- [ ] Verify shadow: Large elevation
- [ ] Verify sizes: Small (400px), Medium (600px), Default (768px), Large (960px)

#### Table
- [ ] Verify header height: 56px
- [ ] Verify row height: 56px default
- [ ] Verify padding: 16px
- [ ] Verify border: 1px solid #ECEEF0
- [ ] Verify header background: #FAFAFA
- [ ] Verify hover background: #FAFAFA
- [ ] Verify selected background: #E6F7FF

#### Tabs
- [ ] Verify tab height: 48px default
- [ ] Verify padding: 12px 16px
- [ ] Verify font-size: 14px
- [ ] Verify active indicator: 2px height, #1890FF color
- [ ] Verify transition: 300ms ease

### Priority 2: Form Components

#### Select
- [ ] Verify height: 40px
- [ ] Verify width: 320px default
- [ ] Verify padding: 8px 12px
- [ ] Verify dropdown max-height: 280px
- [ ] Verify option height: 36px
- [ ] Verify border-radius: 6px

#### Checkbox
- [ ] Verify size: 16px
- [ ] Verify border: 1px solid #D9D9D9
- [ ] Verify border-radius: 2px
- [ ] Verify checked color: #1890FF
- [ ] Verify gap to label: 8px

#### Radio
- [ ] Verify size: 16px
- [ ] Verify border: 1px solid #D9D9D9
- [ ] Verify checked dot: 8px inner circle
- [ ] Verify checked color: #1890FF
- [ ] Verify gap to label: 8px

#### Switch
- [ ] Verify width: 44px
- [ ] Verify height: 22px
- [ ] Verify handle size: 18px
- [ ] Verify padding: 2px
- [ ] Verify colors: Off (#00000040), On (#1890FF)

### Priority 3: Feedback Components

#### Notification (Toast)
- [ ] Verify width: 360px
- [ ] Verify padding: 16px
- [ ] Verify border-radius: 8px
- [ ] Verify duration: 5 seconds default
- [ ] Verify gap: 12px between notifications
- [ ] Verify colors: Success (#F6FFED), Error (#FFF1F0), Warning (#FFFBE6), Info (#E6F7FF)

#### Alert
- [ ] Verify padding: 12px 16px
- [ ] Verify border-radius: 6px
- [ ] Verify border-width: 1px
- [ ] Verify colors: Success, Error, Warning, Info variants

#### Tag
- [ ] Verify height: Small (20px), Default (24px), Large (32px)
- [ ] Verify padding: Small (2px 6px), Default (4px 8px), Large (6px 12px)
- [ ] Verify font-size: Small (11px), Default (12px), Large (14px)
- [ ] Verify border-radius: 4px
- [ ] Verify colors: All color variants

#### Tooltip
- [ ] Verify max-width: 250px
- [ ] Verify padding: 8px 12px
- [ ] Verify font-size: 12px
- [ ] Verify background: #262626 (dark), #FFFFFF (light)
- [ ] Verify arrow size: 6px
- [ ] Verify delay: 300ms

### Priority 4: Navigation Components

#### Breadcrumbs
- [ ] Verify height: 32px default
- [ ] Verify padding: 8px 0
- [ ] Verify gap: 8px
- [ ] Verify font-size: 14px
- [ ] Verify separator: "/" color #BFBFBF

#### Dropdown
- [ ] Verify max-height: 280px
- [ ] Verify padding: 4px 0
- [ ] Verify item height: 36px
- [ ] Verify item padding: 8px 12px
- [ ] Verify border-radius: 8px

## Colors to Verify

### Primary Colors
- [ ] Primary Blue: #1890FF
- [ ] Primary Hover: #40A9FF
- [ ] Primary Active: #096DD9

### Status Colors
- [ ] Success: #52C41A (icon/text), #F6FFED (background), #B7EB8F (border)
- [ ] Error: #FF4D4F (icon/text), #FFF1F0 (background), #FFCCC7 (border)
- [ ] Warning: #FAAD14 (icon/text), #FFFBE6 (background), #FFE58F (border)
- [ ] Info: #1890FF (icon/text), #E6F7FF (background), #91D5FF (border)

### Neutral Colors
- [ ] White: #FFFFFF
- [ ] Gray 1 (Background): #FAFAFA
- [ ] Gray 2 (Border): #ECEEF0
- [ ] Gray 3 (Border): #D9D9D9
- [ ] Gray 4 (Disabled Text): #BFBFBF
- [ ] Gray 5 (Secondary Text): #8C8C8C
- [ ] Gray 6 (Primary Text): #595959
- [ ] Gray 7 (Heading): #262626
- [ ] Black: #000000

## Typography to Verify

### Font Sizes
- [ ] 11px - Extra small text (tags, captions)
- [ ] 12px - Small text (tooltips, helper text)
- [ ] 14px - Body text (default)
- [ ] 16px - Large body text
- [ ] 20px - H5 heading
- [ ] 24px - H4 heading
- [ ] 30px - H3 heading
- [ ] 38px - H2 heading
- [ ] 48px - H1 heading

### Font Weights
- [ ] 400 - Regular (body text)
- [ ] 500 - Medium (tabs, buttons)
- [ ] 600 - Semi-bold (headings, labels)
- [ ] 700 - Bold (emphasis)

## Spacing to Verify

### Standard Spacing Scale
- [ ] 4px - Minimum gap
- [ ] 8px - Small gap
- [ ] 12px - Default gap
- [ ] 16px - Medium gap
- [ ] 24px - Large gap
- [ ] 32px - Extra large gap
- [ ] 48px - Section spacing

## Border Radius to Verify

### Standard Border Radius Scale
- [ ] 2px - Checkbox
- [ ] 4px - Tags
- [ ] 6px - Inputs, tooltips
- [ ] 8px - Modals, cards, panels

## Shadows to Verify

### Elevation Levels
- [ ] Small: Used for buttons, dropdowns
- [ ] Medium: Used for tooltips, floating elements
- [ ] Large: Used for modals, drawers

## Animation Timings to Verify

### Standard Durations
- [ ] 150ms - Quick interactions (button hover)
- [ ] 200ms - Default transitions (fades)
- [ ] 300ms - Medium animations (slide, expand)
- [ ] 500ms - Slow animations (complex transitions)

### Easing Functions
- [ ] Ease - Default
- [ ] Ease-in - Entrance
- [ ] Ease-out - Exit
- [ ] Ease-in-out - Both

## Notes

### Differences Found
Document any differences between Figma and documentation here:

1. [Component name] - [Description of difference]
   - Figma: [Value]
   - Documentation: [Value]
   - Resolution: [What needs to be updated]

### Questions for Design Team
List any questions or clarifications needed:

1. [Question about specific component or specification]

## Verification Status Legend
- [ ] Not yet verified
- [~] Partially verified / needs clarification
- [x] Verified and matches
- [!] Discrepancy found - needs updating
