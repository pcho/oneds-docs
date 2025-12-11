---
title: Timeline
description: "Documentation for Timeline component"
---

## Description

Timeline transforms sequential events into a visual story. Display activities, milestones, or process steps in chronological order to create a history that's easy to scan and understand.

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
- **Gap**: `spacing-4` between indicator and content

**Timeline - Text:**
- **Width**: `376px`
- **Padding**: `0px 0px` `spacing-4` (bottom)
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

- Show most recent events first (or clearly indicate the order)
- Use consistent indicator styles
- Include timestamps for every event
- Group events by date when it makes sense
- Use different indicators for different event types
- Keep descriptions concise
- Support expanding for additional details

## Don't

- Mix up chronological order inconsistently
- Make indicators difficult to distinguish
- Forget timestamps
- Overcrowd with excessive detail
- Make timelines too wide for mobile

## Uses

- Activity feeds
- Project history
- Order tracking
- Patent application progress
- User audit logs
- Version history
- Process steps

**Example Timeline:**
- Patent Application Submitted
  - January 15, 2024, 10:30 AM
  - Application #US2024-12345
- Under Review
  - January 20, 2024, 2:15 PM
  - Assigned to examiner J. Smith
- Additional Information Requested
  - February 1, 2024, 9:00 AM
  - Documents required by Feb 15

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

