## Description

Illustrations are visual graphics that enhance user experience through friendly, contextual imagery. From empty states to success confirmations, illustrations add personality and clarity to your interface, making interactions more delightful and easier to understand.

## Anatomy

1. **Illustration Graphic** - Vector artwork
2. **Color Palette** - Brand-aligned colors
3. **Style** - Consistent visual language
4. **Context** - Matches the moment or state

## Specification

**Illustration Component Sets:**
- **Illustration - Upload**: Upload-related graphics
- **Illustration - State**: Empty state illustrations
- **Illustration - Progress**: Loading/processing visuals
- **Illustration - Generate Report**: Report generation graphics

**Common Sizes:**
- Small: `150×150px` (inline use)
- Medium: `170×150px` (cards, modals)
- Large: `200×200px`+ (empty states, full-page)

**Style Guidelines:**
- Vector-based (SVG)
- Consistent line weight
- Brand color palette
- Friendly, approachable style
- Scalable without quality loss

## Do

- Use illustrations to reinforce messages
- Maintain consistent style across all illustrations
- Optimize SVG file sizes
- Provide alt text for accessibility
- Use illustrations purposefully, not decoratively
- Match illustration mood to context
- Test illustrations at different sizes

## Don't

- Don't mix illustration styles inconsistently
- Don't use low-quality raster images
- Don't make illustrations convey critical information alone
- Don't use copyrighted artwork without permission
- Don't ignore cultural sensitivity
- Don't overuse—less is often more

## Uses

**Contexts:**

1. **Empty States:**
   - "No patents found"
   - "Empty inbox"
   - "No search results"

2. **Success States:**
   - "Upload complete"
   - "Application submitted"
   - "Report generated"

3. **Error States:**
   - "Connection failed"
   - "Upload error"
   - "404 not found"

4. **Loading States:**
   - "Processing application"
   - "Generating report"
   - "Uploading files"

5. **Onboarding:**
   - Welcome screens
   - Feature introductions
   - Tutorial steps

6. **Confirmations:**
   - Success messages
   - Completion celebrations
   - Achievement unlocks

**Example Scenarios:**
- Upload illustration: Shows during file upload
- Empty state: No patents in search results
- Progress illustration: Analyzing patent application
- Report illustration: Generating analytics report

## Behavior

**Display:**
- Centered in container
- Appropriate size for context
- Paired with explanatory text
- Sometimes animated (subtle motion)

**Animations:**
- Fade in on appearance
- Subtle float or movement
- Celebration animations (confetti, etc.)
- Loading pulse or shimmer

**Responsive:**
- Scale down on smaller screens
- Maintain aspect ratio
- Hide on very small screens if needed
- Ensure text remains readable

## Accessibility

**Alt Text:**
- Descriptive alt text for screen readers
- Explain what illustration conveys
- Example: "Illustration of an empty search result with magnifying glass"

**Implementation:**
```html
<img
  src="empty-state.svg"
  alt="Illustration showing an empty search result"
  role="img">
```

**Decorative vs. Meaningful:**
- If decorative only: `aria-hidden="true"` or `alt=""`
- If conveys meaning: Descriptive alt text required
- Never rely on illustration alone for critical info

**Color & Contrast:**
- Illustrations should complement, not replace text
- Ensure illustrations visible in light and dark themes
- Don't use illustrations to convey status alone

**Performance:**
- Optimize SVG file sizes
- Lazy load large illustrations
- Consider reduced motion preferences
- Provide fallback for failed loads

**Cultural Considerations:**
- Test illustrations across different cultures
- Avoid culturally specific symbols if global
- Be mindful of colors' cultural meanings
- Use inclusive, diverse representation
