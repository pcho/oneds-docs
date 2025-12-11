---
title: Relationships
description: "Documentation for Relationships component"
---

# Relationships Pattern

Relationships show how entities connect—parent-child hierarchies, associations, dependencies, and networks. In IP management, this is essential since patents, trademarks, and other rights often form complex families and related asset networks.

## When to Use

- Displaying patent families and priority chains
- Showing related IP rights (parent, child, divisional)
- Visualizing organizational hierarchies
- Mapping trademark families across jurisdictions
- Displaying dependencies between records
- Showing associated or linked entities

## Common Relationship Types

### IP-Specific Relationships
- **Parent-Child** - Original and derivative patents
- **Priority Chain** - Priority claims across filings
- **Family Members** - Patents/trademarks in same family
- **Related Applications** - Divisionals, continuations, CIPs
- **Citations** - Prior art and cited references
- **Assignments** - Ownership transfers

### General Relationships
- **Associated Documents** - Linked files and attachments
- **Related Contacts** - Inventors, agents, assignees
- **Dependencies** - Blocking or dependent items
- **References** - External links and citations

## Pattern Structures

### 1. List View (Simple)

```
Related Patents (5)                          [+ Add relationship]
┌──────────────────────────────────────────────────────────────┐
│ 🔗 Parent                                                     │
│    US2023-11111 - Original Device Patent     [View] [Remove] │
│                                                               │
│ 🔗 Child                                                      │
│    US2024-22222 - Improved Device            [View] [Remove] │
│    US2024-33333 - Alternative Design         [View] [Remove] │
│                                                               │
│ 🔗 Related                                                    │
│    EP2024-44444 - European Equivalent        [View] [Remove] │
│    JP2024-55555 - Japanese Application       [View] [Remove] │
└──────────────────────────────────────────────────────────────┘

Usage: Simple associations, manageable count (< 20 items)
```

### 2. Tree View (Hierarchical)

```
Patent Family Tree
┌──────────────────────────────────────────────────────────────┐
│ └─ 📄 US2023-11111 (Priority)                                │
│    ├─ 📄 US2024-22222 (Continuation)                         │
│    │  ├─ 📄 US2024-33333 (Divisional)                        │
│    │  └─ 📄 EP2024-44444 (Foreign filing)                    │
│    └─ 📄 US2024-55555 (CIP)                                  │
│       └─ 📄 JP2024-66666 (PCT National Phase)                │
│                                                               │
│ [Expand all] [Collapse all] [Export tree]                    │
└──────────────────────────────────────────────────────────────┘

Usage: Complex hierarchies, parent-child chains
```

### 3. Card Grid (Visual)

```
Related IP Rights (12)                 [Grid] [List] [+ Add]
┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│ │ 🔗 Parent       │  │ 🔗 Child        │  │ 🔗 Related      ││
│ │ US2023-11111    │  │ US2024-22222    │  │ EP2024-44444    ││
│ │                 │  │                 │  │                 ││
│ │ Original Device │  │ Improved Device │  │ EP Equivalent   ││
│ │                 │  │                 │  │                 ││
│ │ ✓ Granted       │  │ ⏳ Pending      │  │ ⏳ Pending      ││
│ │ 2023-01-15      │  │ 2024-03-20      │  │ 2024-04-10      ││
│ │ [View]          │  │ [View]          │  │ [View]          ││
│ └─────────────────┘  └─────────────────┘  └─────────────────┘│
│                                                               │
│ ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│ │ 🔗 Child        │  │ 🔗 Related      │  │ 🔗 Related      ││
│ │ US2024-33333    │  │ JP2024-55555    │  │ CN2024-66666    ││
│ │ [View]          │  │ [View]          │  │ [View]          ││
│ └─────────────────┘  └─────────────────┘  └─────────────────┘│
└──────────────────────────────────────────────────────────────┘

Usage: Visual scan, many relationships, rich metadata
```

### 4. Network Graph (Complex)

```
Family Network
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│                    US2023-11111                               │
│                         ●                                     │
│                    ╱    │    ╲                                │
│                  ╱      │      ╲                              │
│               ●         ●         ●                           │
│         US2024-22222  US2024-55555  WO2024-77777             │
│            │                          │                       │
│            │                          │                       │
│            ●                          ●                       │
│       US2024-33333               EP2024-44444                │
│                                                               │
│ [Zoom in] [Zoom out] [Reset view] [Export]                   │
│                                                               │
│ Legend: ● Parent  ● Child  ● Related  ─ Link                 │
└──────────────────────────────────────────────────────────────┘

Usage: Complex networks, many interconnections, visualization needed
```

## Specification

### List View Specifications

```
Section Header:
- Height: 48px
- Padding: spacing-3 spacing-4
- Background: surface-secondary
- Font size: text-base
- Font weight: font-weight-semibold
- Color: txt-primary
- Border bottom: 1px solid --bg-fill-light

Relationship Item:
- Height: Auto (min 56px)
- Padding: spacing-3 spacing-4
- Border bottom: 1px solid --bg-fill-light
- Hover: Background surface-secondary

Relationship Type Badge:
- Height: 24px
- Padding: spacing-1 spacing-2
- Border radius: radius-extra-small
- Font size: text-xs
- Font weight: font-weight-emphasized
- Background varies by type:
  - Parent: #EDF1FF (light blue)
  - Child: #ECFDF3 (light green)
  - Related: surface-secondary
  - Priority: #F4EBFF (light purple)

Item Content:
- ID: text-base, font-weight-semibold, fill-accent (link)
- Title: text-base, txt-primary
- Metadata: text-xs, txt-tertiary
- Gap: spacing-1 between lines
```

### Card View Specifications

```
Card:
- Width: 240px (fixed) or flex-basis: 30%
- Height: Auto (min 180px)
- Padding: spacing-4
- Border: 1px solid --bg-fill-light
- Border radius: radius-medium
- Background: surface-white
- Hover: Border fill-accent, shadow medium

Card Header:
- Badge: Relationship type (top)
- ID: text-base, font-weight-semibold, txt-primary
- Gap: spacing-2

Card Body:
- Title: text-base, txt-secondary, max 2 lines
- Status: Badge component
- Date: text-xs, txt-tertiary
- Gap: spacing-3 between elements

Card Footer:
- Action button: Secondary style
- Position: Bottom
```

### Tree View Specifications

```
Tree Container:
- Padding: spacing-4
- Background: surface-white
- Border: 1px solid --bg-fill-light
- Border radius: radius-medium

Tree Node:
- Height: 40px
- Padding: spacing-2 spacing-3
- Indent: spacing-6 per level
- Expand/collapse icon: 16px, left

Node Content:
- Icon: 16px (document, folder)
- ID: text-base, fill-accent (link)
- Title: text-base, txt-secondary
- Badge: Status or type
- Gap: spacing-2 between elements

Connection Lines:
- Color: bdr-default
- Width: 1px
- Style: Solid or dashed
```

## Behavior

### Adding Relationships

```
Flow 1: Search & Add
┌────────────────────────────────────┐
│ Add Related Patent                 │
├────────────────────────────────────┤
│ Relationship type:                 │
│ [Parent ▼]                         │
│                                    │
│ Search patents:                    │
│ [_________________________] [🔍]   │
│                                    │
│ Results:                           │
│ ○ US2023-11111 - Original Device   │
│ ○ US2023-22222 - Similar Patent    │
│ ○ US2023-33333 - Related Tech      │
│                                    │
│ [Cancel]              [Add]        │
└────────────────────────────────────┘

Steps:
1. Click "+ Add relationship"
2. Select relationship type
3. Search for entity
4. Select entity from results
5. Add relationship
6. View updates with new item

Flow 2: Quick Add from Context
- Right-click entity
- Select "Add relationship"
- Choose relationship type
- Entity added immediately
```

### Removing Relationships

```
Confirmation:
┌────────────────────────────────────┐
│ Remove Relationship?               │
├────────────────────────────────────┤
│ Remove US2024-22222 from this      │
│ patent's family?                   │
│                                    │
│ This will remove the relationship  │
│ but won't delete the patent.       │
│                                    │
│ [Cancel]              [Remove]     │
└────────────────────────────────────┘

Steps:
1. Click "Remove" on item
2. Confirm in dialog
3. Item removed from view
4. Relationship deleted
5. Success notification

Note: Remove relationship ≠ Delete entity
```

### Navigating Relationships

```
From List/Card:
- Click ID link → Navigate to related entity
- Click "View" button → Open in modal or new tab
- Hover → Show quick preview tooltip
- Right-click → Context menu (View, Remove, Edit)

From Tree:
- Click expand/collapse → Show/hide children
- Click node → Select (highlight)
- Double-click → Navigate to entity
- Drag nodes → Reorder (if applicable)

From Graph:
- Click node → Show details panel
- Double-click → Navigate to entity
- Hover → Highlight connected nodes
- Zoom/pan → Navigate large graphs
```

### Filtering & Sorting

```
Filters:
- Relationship type (Parent, Child, Related, etc.)
- Status (Granted, Pending, Abandoned)
- Jurisdiction (US, EP, JP, etc.)
- Date range
- Custom metadata

Sort Options:
- By type (grouped)
- By date (newest/oldest)
- By status
- Alphabetically by ID or title

Example:
[All types ▼] [All statuses ▼] [All jurisdictions ▼]

Results: 12 of 45 relationships
```

## Relationship Type Indicators

### Visual Encoding

```
Icons:
└─ Parent (hierarchy up)
┌─ Child (hierarchy down)
🔗 Related (association)
➜ Dependency (directional)
↔ Mutual (bi-directional)
⚠ Conflict (warning)

Colors:
Parent:     fill-accent
Child:      fill-success
Related:    txt-tertiary
Priority:   Purple (#7F56D9)
Dependent:  fill-warning
Conflict:   fill-danger

Badges:
- Type name in badge
- Icon + text
- Color-coded background
```

## Empty States

### No Relationships

```
┌────────────────────────────────────┐
│                                    │
│        🔗                          │
│                                    │
│   No related patents yet           │
│                                    │
│   Add parent, child, or related    │
│   patents to build the family tree.│
│                                    │
│   [+ Add relationship]             │
│                                    │
└────────────────────────────────────┘
```

### Filtered with No Results

```
┌────────────────────────────────────┐
│                                    │
│        🔍                          │
│                                    │
│   No matching relationships        │
│                                    │
│   Try adjusting your filters.      │
│                                    │
│   [Clear filters]                  │
│                                    │
└────────────────────────────────────┘
```

## Best Practices

### Do

- Use clear relationship type labels (Parent, Child, Priority)
- Visualize hierarchy direction (arrows, indentation)
- Show relationship metadata (type, date created)
- Allow filtering by relationship type
- Provide quick navigation to related entities
- Use icons and colors to distinguish types
- Show relationship count prominently
- Confirm before removing relationships
- Allow bulk relationship management
- Provide export functionality for complex networks
- Show relationship status (active, historical)

### Don't

- Use vague relationship labels ("Related item 1")
- Mix different relationship paradigms in same view
- Make it difficult to distinguish relationship directions
- Delete entities when removing relationships
- Show overly technical relationship internals
- Overwhelm with too many relationship types
- Hide important relationship metadata
- Allow circular dependencies without warning
- Make navigation between related items difficult
- Forget to update counts when adding/removing
- Use graph visualizations for simple lists

## Complex Scenarios

### Patent Family Example

```
Priority Patent: US2023-11111
┌──────────────────────────────────────────────────────────────┐
│ Family Tree (8 members)                    [Export] [+ Add]   │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ 📄 US2023-11111 (Priority - Jan 15, 2023) ✓ Granted          │
│ ├─ 📄 US2024-22222 (Continuation - Mar 20, 2024) ⏳ Pending  │
│ │  ├─ 📄 US2024-33333 (Divisional - Jun 10, 2024) ⏳ Pending │
│ │  └─ 📄 EP2024-44444 (EP National - Jul 15, 2024) ⏳ Pending│
│ ├─ 📄 WO2024-55555 (PCT - Jan 15, 2024) ⏳ International     │
│ │  ├─ 📄 JP2024-66666 (JP National - Jul 15, 2024) ⏳ Pending│
│ │  └─ 📄 CN2024-77777 (CN National - Jul 15, 2024) ⏳ Pending│
│ └─ 📄 US2024-88888 (CIP - Sep 01, 2024) ⏳ Pending           │
│                                                               │
└──────────────────────────────────────────────────────────────┘

Metadata Panel:
- Total family members: 8
- Jurisdictions: US (4), EP (1), JP (1), CN (1), WO (1)
- Status: 1 granted, 7 pending
- Priority date: Jan 15, 2023
```

## Related Patterns

- **[Contextual Views](../layouts/contextual-views.md)** - Related entities in context
- **[Table](../behaviours/table.md)** - List view of relationships
- **[Tree](/components/tree.md)** - Hierarchical relationships
- **[Card](/components/card.md)** - Card-based relationship display

---

**Related Components:**
- [Tree](/components/tree.md)
- [Card](/components/card.md)
- [Badge](/components/badge.md)
- [Button](/components/button.md)
