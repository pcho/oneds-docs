## Description

Timeline displays events in chronological order, creating a visual history that's easy to scan and understand. Whether it's activity logs, project milestones, or process steps, timeline components transform sequential events into a clear narrative.

## Anatomy

1. **Vertical Line** - Central axis connecting events
2. **Timeline Indicator** - Dot or icon marking each event
3. **Timeline Indicator - Circle** - Standard circular marker
4. **Timeline Indicator - Border** - Connecting line segment
5. **Timeline Text** - Event description and metadata
6. **Timestamp** - Date/time of event
7. **Event Content** - Additional details (optional)

## Specification

**Timeline Component:**
- **Width**: `402px` (default)
- **Layout**: Horizontal row
- **Gap**: `16px` between indicator and content

**Timeline - Text:**
- **Width**: `376px`
- **Padding**: `0px 0px 16px` (bottom)
- **Layout**: Vertical column

**Timeline - Indicator - Circle:**
- Component set with variants
- Different styles for event types

**Timeline - Indicator - Border:**
- **Height**: `52px` (connecting line segment)
- **Width**: `0px` (vertical line)
- **Background**: White or light gray

**Timeline - Indicator:**
- Component set with variants
- Different event markers (dot, icon, status)

## Do

- Show most recent events first (or clearly indicate order)
- Use consistent indicator styles
- Include timestamps for all events
- Group events by date when appropriate
- Use different indicators for event types
- Keep event descriptions concise
- Support expanding for more details

## Don't

- Don't mix chronological order inconsistently
- Don't make indicators hard to distinguish
- Don't forget timestamps
- Don't overcrowd with too much detail
- Don't make timeline too wide on mobile

## Uses

- Activity feeds
- Project history
- Order tracking
- Patent application progress
- User audit logs
- Version history
- Process steps

**Example Timeline:**
```
○  Patent Application Submitted
   January 15, 2024, 10:30 AM
   Application #US2024-12345

●  Under Review
   January 20, 2024, 2:15 PM
   Assigned to examiner J. Smith

○  Additional Information Requested
   February 1, 2024, 9:00 AM
   Documents required by Feb 15
```

## Behavior

**Event Types:**
- Standard events: Gray circle
- Important events: Filled colored circle
- Completed: Checkmark
- Error/Issue: Alert icon
- Pending: Outline circle

**Interactions:**
- Click event to expand details
- Hover shows tooltip with more info
- Filter by event type
- Search within timeline

**Loading:**
- Skeleton placeholders for events
- Infinite scroll for long timelines
- "Load more" button for pagination

## Accessibility

- Semantic list structure (`<ol>` or `<ul>`)
- Each event is a list item
- Timestamps clearly associated with events
- Screen readers announce event type and details
- Keyboard navigation through events
- Focus indicators visible
- Color + icon for event types (not color alone)
- Chronological order clear to screen readers
