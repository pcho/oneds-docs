# Breadcrumbs

## Description

Breadcrumbs are a navigation trail that shows users their current location within a site's hierarchy. Like leaving a trail of crumbs through the forest, they help users understand where they are and provide quick links back to parent pages—perfect for deep hierarchies and complex navigation structures.

## Anatomy

1. **Breadcrumb Container** - Overall navigation wrapper
2. **Breadcrumb Item** - Individual navigation link
3. **Separator** - Visual divider between items
4. **Current Page** - Active, non-clickable item
5. **Home Icon** - Optional first item (home link)
6. **Overflow Menu** - Collapsed items for long trails (optional)

## Specification

**Breadcrumb Container:**
- **Height**: `32px` (default)
- **Padding**: `8px 0`
- **Gap**: `8px` between items and separators
- **Layout**: Horizontal row
- **Overflow**: Handle long trails with ellipsis

**Breadcrumb Item:**
- **Font Size**: `14px`
- **Font Weight**: 400 (normal)
- **Color**: Gray (`#535D67`)
- **Hover Color**: Primary blue (`#155EEF`)
- **Active Color**: Primary blue (`#155EEF`)
- **Padding**: `4px 8px`
- **Border Radius**: `4px`

**Current Page:**
- **Color**: Dark gray (`#2A353F`)
- **Font Weight**: 500 (medium)
- **Not Clickable**: No hover state
- **Always Last**: Final item in trail

**Separator:**
- **Character**: `/` or `>` or `›`
- **Color**: Light gray (`#BFBFBF`)
- **Font Size**: `14px`
- **Margin**: `0 4px`
- **Not Interactive**: Display only

**Home Icon (optional):**
- **Size**: `16px`
- **Position**: First item
- **Clickable**: Links to home
- **Color**: Gray (`#535D67`)
- **Hover**: Primary blue (`#155EEF`)

**Overflow Menu:**
- **Trigger**: `...` ellipsis
- **Appears**: When trail too long
- **Shows**: Hidden middle items
- **Position**: After home, before last 2 items

**States:**
- **Default**: Gray text, clickable
- **Hover**: Blue text, underline (optional)
- **Active**: Blue text
- **Current**: Dark text, not clickable
- **Focus**: Outline ring

**Sizes:**
- **Small**: `28px` height, `12px` font
- **Default**: `32px` height, `14px` font
- **Large**: `40px` height, `16px` font

## Do

- Show user's location in hierarchy
- Keep trail under 5-7 items
- Use for multi-level navigation
- Make all parents clickable
- Place near top of page
- Truncate long item names
- Show home or root level
- Use for deep hierarchies

## Don't

- Don't use for flat navigation (use tabs)
- Don't make current page clickable
- Don't use for sequential steps (use Steps)
- Don't repeat primary navigation
- Don't forget mobile responsive behavior
- Don't hide important context
- Don't use for single-level pages
- Don't make separators clickable

## Uses

**Primary Use Cases:**

1. **Website Navigation** - Section > Subsection > Page
2. **E-commerce** - Categories > Subcategory > Product
3. **File Systems** - Folder > Subfolder > File
4. **Documentation** - Guide > Section > Article
5. **Admin Panels** - Settings > Category > Option
6. **Multi-step Forms** - Context for current step
7. **Search Results** - Path to result location
8. **Content Hierarchies** - Topic > Subtopic > Article

**Example Scenarios:**

**Basic Breadcrumbs:**
```
Home > Patents > Applications > US2024-12345
```

**With Icons:**
```
🏠 > Patents > Applications > US2024-12345
```

**E-commerce:**
```
Home > Electronics > Computers > Laptops > MacBook Pro
```

**With Overflow:**
```
Home > ... > Applications > US2024-12345
```

**File System:**
```
Documents > Projects > 2024 > Q1 > Report.pdf
```

## Behavior

**Navigation:**
1. User clicks breadcrumb item
2. Page navigates to that level
3. Trail updates to new location
4. User maintains context

**Hover States:**
- Hover over clickable item
- Text color changes to blue
- Underline appears (optional)
- Cursor changes to pointer

**Current Page:**
- Last item in trail
- Not clickable
- Darker text color
- No hover state
- Represents current location

**Overflow Handling:**
- **Short trails** (≤5 items): Show all
- **Medium trails** (6-7 items): Show all or truncate middle
- **Long trails** (8+ items): Collapse middle items
  - Show: Home > ... > Parent > Current
  - Click `...` to see full trail in dropdown

**Truncation:**
- Long item names truncate
- Show ellipsis: "Very long patent appl..."
- Full text on hover (tooltip)
- Maintain readability

**Responsive Behavior:**
- **Desktop**: Full trail visible
- **Tablet**: Truncate long items
- **Mobile**: Show only last 2-3 items with back link
  - `< Applications > Current Page`
  - Or: `Home > ... > Current Page`

## Accessibility

**Semantic HTML:**
```html
<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="/">Home</a>
    </li>

    <li class="breadcrumb-item" aria-hidden="true">
      <span class="separator">/</span>
    </li>

    <li class="breadcrumb-item">
      <a href="/patents">Patents</a>
    </li>

    <li class="breadcrumb-item" aria-hidden="true">
      <span class="separator">/</span>
    </li>

    <li class="breadcrumb-item">
      <a href="/patents/applications">Applications</a>
    </li>

    <li class="breadcrumb-item" aria-hidden="true">
      <span class="separator">/</span>
    </li>

    <li class="breadcrumb-item">
      <span aria-current="page">US2024-12345</span>
    </li>
  </ol>
</nav>
```

**Alternative Structure (simpler):**
```html
<nav aria-label="Breadcrumb">
  <a href="/">Home</a>
  <span aria-hidden="true">/</span>

  <a href="/patents">Patents</a>
  <span aria-hidden="true">/</span>

  <a href="/patents/applications">Applications</a>
  <span aria-hidden="true">/</span>

  <span aria-current="page">US2024-12345</span>
</nav>
```

**ARIA Attributes:**
- `<nav aria-label="Breadcrumb">` - Identifies navigation type
- `aria-current="page"` - Marks current location
- `aria-hidden="true"` - Hide separators from screen readers
- `aria-label` - Describes navigation purpose

**Keyboard Navigation:**
- `Tab` - Focus next link
- `Shift + Tab` - Focus previous link
- `Enter` - Activate focused link
- Standard link navigation

**Screen Reader Support:**
- Announces "Breadcrumb navigation"
- Reads each link text
- Announces "current page" for active item
- Skips separator characters
- Reads structure: "List of X items"

**Focus Management:**
- Clear focus indicators on links
- Logical tab order (left to right)
- Current page not focusable
- Skip to main content link available

**Structured Data (SEO):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Patents",
      "item": "https://example.com/patents"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "US2024-12345"
    }
  ]
}
</script>
```

**Color & Contrast:**
- Link text meets 4.5:1 contrast
- Separators meet 3:1 contrast
- Current page text meets 4.5:1
- Hover states visible
- Focus indicators meet 3:1

**Touch Targets:**
- Links minimum 44×44px tappable area
- Adequate spacing between items
- Full link area clickable
- Not too close to other interactive elements

**Responsive Considerations:**
- Horizontal scroll on overflow (avoid)
- Collapse to key items on mobile
- Back button alternative
- Maintain touch targets
- Full trail available in menu

**Content Guidelines:**
- Use clear, concise labels
- Match page titles
- Use sentence case
- Keep item names under 30 characters
- Truncate with ellipsis if needed
- Show tooltip with full text

**Visual Hierarchy:**
- Place near top of page
- Below header, above main content
- Consistent across site
- Clear visual separation from content
- Don't compete with primary navigation
