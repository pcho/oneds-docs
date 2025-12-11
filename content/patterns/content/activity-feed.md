---
title: Activity Feed
description: "Documentation for Activity Feed component"
---

# Activity Feed Pattern

Activity feeds (also called "Updates" or "Activity Streams") show a chronological list of actions, changes, and events. They keep users in the loop—tracking progress and staying aware of what the team is up to.

## When to Use

- Showing recent changes to records or projects
- Displaying user actions and system events
- Tracking audit trails and history
- Providing real-time updates on collaborative work
- Dashboard overview of recent activity

## Pattern Structure

### Basic Activity Item

```
┌────────────────────────────────────────────┐
│ 👤 John Doe                      2h ago    │
│    Updated patent application               │
│    Changed status from "Draft" to "Filed"  │
│    [View details]                           │
└────────────────────────────────────────────┘
```

**Components:**
1. **Avatar** - User or system icon
2. **Actor Name** - Who performed the action
3. **Timestamp** - When it happened
4. **Action Description** - What happened
5. **Details** - Context and changes
6. **Action Link** - View more or navigate (optional)

### Grouped Activity

```
┌────────────────────────────────────────────┐
│ Today                                       │
├────────────────────────────────────────────┤
│ 👤 Jane Smith                    2h ago    │
│    Created new patent application          │
│                                            │
│ 👤 John Doe                      4h ago    │
│    Updated contact information             │
│                                            │
│ Yesterday                                   │
├────────────────────────────────────────────┤
│ 👤 System                        Yesterday │
│    Automated deadline reminder sent        │
│                                            │
│ [Load more...]                             │
└────────────────────────────────────────────┘
```

## Specification

### Activity Item

```
Item Structure:
- Height: Auto (min 64px)
- Padding: spacing-4
- Border bottom: 1px solid --bg-fill-light
- Gap: spacing-3 (avatar to content)

Avatar:
- Size: 32px × 32px
- Border radius: 50% (circle)
- Position: Left, top-aligned

Content Area:
- Width: Fill remaining space
- Gap: spacing-1 (between lines)

Header Row:
- Actor name: text-base, font-weight-semibold, txt-primary
- Timestamp: text-base, txt-tertiary, right-aligned

Description:
- Font size: text-base
- Color: txt-secondary
- Line height: 1.5

Details:
- Font size: text-base
- Color: txt-tertiary
- Optional: Light background surface-secondary
- Padding: spacing-2 spacing-3
- Border radius: radius-extra-small
- Margin top: spacing-2
```

### Time Grouping

```
Group Header:
- Height: 32px
- Padding: spacing-2 spacing-4
- Background: surface-secondary
- Font size: text-xs
- Font weight: font-weight-semibold
- Color: txt-tertiary
- Text transform: Uppercase
- Letter spacing: 0.5px

Time Groups:
- Today
- Yesterday
- This Week
- Last Week
- Older (with date)
```

### Activity Types

**User Actions:**
```
👤 Avatar + Name
- Created
- Updated
- Deleted
- Assigned
- Commented
- Uploaded
- Downloaded
```

**System Events:**
```
⚙️ System Icon
- Automated reminder sent
- Workflow triggered
- Deadline approaching
- Integration sync completed
- Report generated
```

**Status Changes:**
```
🔄 Status Icon
- Status changed: Draft → Filed
- Priority updated: Normal → High
- Stage completed: Review → Approved
```

## Behavior

### Initial Load

1. Show most recent 20-30 items
2. Group by time period (Today, Yesterday, etc.)
3. Sort newest first (top)
4. Show loading skeleton while fetching

### Load More

```
User scrolls to bottom:
1. Show "Load more..." button
2. Click: Load next 20-30 items
3. Show loading indicator
4. Append items below
5. Update button or show "No more items"

Alternative: Infinite scroll
- Auto-load when 80% scrolled
- Show loading indicator
- Seamless append
```

### Real-Time Updates

```
New activity occurs:
1. Show notification badge (optional)
2. Insert new item at top
3. Animate slide-in (200ms)
4. Highlight briefly (2s)
5. Fade highlight to normal

Multiple updates:
- Batch updates every 5-10 seconds
- Show "X new updates" banner
- Click banner to refresh and scroll to top
```

### Filtering

```
Filter Options:
┌────────────────────────────┐
│ [All activity ▼]           │
│  ├─ All activity           │
│  ├─ Created                │
│  ├─ Updated                │
│  ├─ Comments               │
│  ├─ Status changes         │
│  └─ System events          │
└────────────────────────────┘

Applied filter:
- Update feed instantly
- Show count if available
- Persist selection
- Clear filter option
```

### Empty States

```
No Activity:
┌────────────────────────────────────┐
│                                    │
│        📝                          │
│                                    │
│   No activity yet                  │
│                                    │
│   Actions and updates will         │
│   appear here.                     │
│                                    │
└────────────────────────────────────┘

Filtered with No Results:
┌────────────────────────────────────┐
│                                    │
│        🔍                          │
│                                    │
│   No matching activity             │
│                                    │
│   Try adjusting your filter        │
│   or check back later.             │
│                                    │
│   [Clear filter]                   │
│                                    │
└────────────────────────────────────┘
```

## Variants

### Compact Feed

```
┌────────────────────────────────────┐
│ 👤 John Doe updated patent  2h ago │
│ 👤 Jane created matter     4h ago  │
│ ⚙️ System sent reminder    5h ago  │
└────────────────────────────────────┘

Specifications:
- Height: 40px per item
- Single line per item
- Truncate long descriptions
- Hover: Show full description in tooltip
```

### Detailed Feed

```
┌────────────────────────────────────────┐
│ 👤 John Doe               2 hours ago  │
│    Updated Patent Application #12345   │
│                                        │
│    Changed 3 fields:                   │
│    • Status: Draft → Filed             │
│    • Priority: Normal → High           │
│    • Assignee: Unassigned → Jane Smith │
│                                        │
│    [View patent] [View history]        │
└────────────────────────────────────────┘

Specifications:
- Height: Auto (expanded)
- Multiple detail lines
- Change diff display
- Multiple action buttons
```

### Notification-Style Feed

```
┌────────────────────────────────────────┐
│ 🔔 You have 3 new updates              │
├────────────────────────────────────────┤
│ ● 👤 Jane Smith mentioned you   5m ago │
│   "Can you review this patent?"        │
│                                        │
│ ● 📄 Patent #123 status changed 1h ago │
│   Draft → Filed                        │
│                                        │
│ ⚙️ Deadline approaching        2h ago  │
│   Patent filing due in 3 days          │
└────────────────────────────────────────┘

Features:
- Unread indicator (blue dot)
- Mark all as read
- Notification count
- Dismissible items
```

## Best Practices

### Do

- Group activities by time period for better scannability
- Show most recent items first (reverse chronological)
- Use consistent avatar styles (user vs system)
- Provide clear, action-oriented descriptions
- Link to related records when possible
- Show relative timestamps (2h ago) for recent items
- Include actor name for user actions
- Use icons to distinguish activity types
- Implement pagination or infinite scroll for performance
- Allow filtering by activity type
- Highlight real-time updates briefly

### Don't

- Overload with too much detail in main view
- Use technical or system-generated language
- Show absolute timestamps for recent items (use relative)
- Mix chronological order within a time group
- Auto-scroll user's position when new items arrive
- Require manual refresh to see new items
- Show system maintenance or internal events
- Use unclear or generic descriptions ("Updated item")
- Display overly verbose change details
- Clutter with unnecessary metadata

## Accessibility

### Keyboard Navigation

- `Tab` - Navigate between items
- `Enter` - Activate action links
- `Space` - Expand collapsed details
- Arrow keys - Navigate within feed (optional)
- `Home/End` - Jump to top/bottom

## Related Patterns

- **[Notification](../behaviours/notification.md)** - Temporary feedback vs persistent feed
- **[Modal](../behaviours/modal.md)** - Detail views from activity items
- **[Table](../behaviours/table.md)** - Alternative data view for bulk review
- **[Comments](TBD)** - Similar chronological pattern

## Examples

### Dashboard Feed

```
Recent Activity (Last 24 Hours)
┌────────────────────────────────────────┐
│ 👤 Jane Smith           30 minutes ago │
│    Filed patent US2024-12345           │
│    [View patent]                       │
│                                        │
│ 👤 John Doe             1 hour ago     │
│    Updated 5 contacts                  │
│    [View changes]                      │
│                                        │
│ ⚙️ System              2 hours ago     │
│    Generated monthly report            │
│    [Download report]                   │
│                                        │
│ [View all activity]                    │
└────────────────────────────────────────┘
```

### Record-Specific Feed

```
Patent Application #12345 - History
┌────────────────────────────────────────┐
│ 👤 Jane Smith           Today, 2:30 PM │
│    Changed status to "Filed"           │
│                                        │
│ 👤 John Doe             Today, 10:15 AM│
│    Added 3 attachments                 │
│    • patent-drawing-1.pdf              │
│    • patent-drawing-2.pdf              │
│    • claims.docx                       │
│                                        │
│ 👤 Jane Smith           Yesterday      │
│    Created patent application          │
│    Initial status: Draft               │
└────────────────────────────────────────┘
```

### Notification Feed

```
Notifications (3 unread)
┌────────────────────────────────────────┐
│ ● 👤 @Sarah mentioned you   5 min ago  │
│   "Please review the trademark filing" │
│   [View comment]                 [✕]   │
│                                        │
│ ● 📅 Deadline reminder      1 hour ago │
│   Patent filing due in 3 days          │
│   [View patent]              [✕]       │
│                                        │
│ ⚙️ Report ready            2 hours ago │
│   Monthly IP summary available         │
│   [Download]                 [✕]       │
│                                        │
│ [Mark all as read]                     │
└────────────────────────────────────────┘
```

## Technical Considerations

### Performance

- Limit initial load to 20-30 items
- Virtualize long feeds (1000+ items)
- Paginate or use infinite scroll
- Cache recent items client-side
- Debounce real-time updates (batch every 5-10s)

### Real-Time Updates

- WebSocket connection for live updates
- Fallback to polling (30-60 second interval)
- Visual indicator for new items
- User control: pause updates while reading
- Batch multiple updates to avoid flooding

### Filtering & Search

- Client-side filtering for loaded items
- Server-side for comprehensive search
- Filter by activity type
- Filter by date range
- Filter by actor
- Search descriptions

---

**Related Components:**
- [Avatar](/components/avatar.md)
- [Button](/components/button.md)
- [Badge](/components/badge.md)
- [Timeline](/components/timeline.md)
