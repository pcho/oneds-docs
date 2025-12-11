---
title: Contextual Views
description: "Documentation for Contextual Views component"
---

# Contextual Views Pattern

Contextual views display data filtered or scoped to a specific parent entity. Also known as "In Context" or "Scoped Views," these patterns help users focus on relationships between entities without losing their place in the navigation.

## When to Use

- Showing entities related to a parent record (Documents in Patent, Contacts in Matter)
- Displaying scoped lists within a larger entity
- Managing relationships between records
- Providing focused views without full navigation
- Adding or removing items from a context

## Common Examples

- **Documents in Patent** - All documents related to Patent #12345
- **Contacts in Matter** - All contacts associated with Matter XYZ
- **Tasks in Project** - All tasks within a specific project
- **Users in Team** - Team members in a specific team
- **Files in Folder** - Files within a folder context

## Pattern Structure

### Basic Contextual View

```
┌──────────────────────────────────────────────────────────────┐
│ Home > Patents > US2024-12345 > Documents                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ Patent US2024-12345: AI-Powered Device                      │
│ Documents (24)                                               │
│                                                              │
│ [+ Add document] [Upload] [Remove selected]                 │
│                                                              │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ ☐ │ Name              │ Type      │ Date      │ Size   │  │
│ ├────────────────────────────────────────────────────────┤  │
│ │ ☐ │ Patent claims     │ PDF       │ Jan 15    │ 2.4MB  │  │
│ │ ☐ │ Technical drawing │ PDF       │ Jan 14    │ 5.1MB  │  │
│ │ ☐ │ Prior art search  │ Document  │ Jan 10    │ 850KB  │  │
│ └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

**Key Elements:**
1. **Breadcrumb** - Shows navigation path and context
2. **Context Header** - Parent entity information
3. **Scoped Title** - "Documents (24)" - what you're viewing
4. **Contextual Actions** - Add, remove, upload actions
5. **Scoped Data** - Only items in this context
6. **Selection** - Manage relationships (add/remove)

## Specification

### Context Header

```
Header Structure:
- Height: Auto (min 80px)
- Padding: spacing-6
- Background: surface-secondary
- Border bottom: 1px solid --bg-fill-light

Parent Info:
- Font size: text-base
- Font weight: font-weight-normal
- Color: txt-tertiary
- Format: "Entity Type #ID"

Title:
- Font size: 24px
- Font weight: font-weight-semibold
- Color: txt-primary
- Margin top: spacing-1

Count Badge:
- Font size: text-lg
- Font weight: font-weight-emphasized
- Color: txt-tertiary
- Format: "(24)" next to title
```

### Breadcrumb Navigation

```
Breadcrumb:
- Height: 48px
- Padding: 0 spacing-6
- Background: surface-white
- Border bottom: 1px solid --bg-fill-light

Breadcrumb Items:
- Font size: text-base
- Color: fill-accent (links), txt-primary (current)
- Separator: "/" or ">"
- Gap: spacing-2 between items
- Current page: Not a link, bold weight

Example:
Home > Patents > US2024-12345 > Documents
```

### Contextual Actions

```
Action Bar:
- Height: 64px
- Padding: spacing-4 spacing-6
- Background: surface-white
- Border bottom: 1px solid --bg-fill-light
- Sticky: Optional (stays visible on scroll)

Primary Action:
- Button: Primary style
- Icon: + (plus)
- Text: "Add [entity]" or "Upload"
- Position: Left side

Secondary Actions:
- Button: Default or text style
- Common: Remove, Export, Filter
- Position: Right side

Selection Actions:
- Show when items selected
- Replace action bar content
- Format: "X items selected [Actions]"
```

### Scoped Data Display

```
Table View (Common):
- Use standard table component
- First column: Selection checkbox
- Show only contextually relevant columns
- Actions: Context-specific (Remove, View, Edit)

Card View (Alternative):
- Use card layout for visual content
- Show relationship metadata
- Quick actions on hover
- Drag to reorder (optional)

List View (Simple):
- Compact single-line items
- Quick scan of many items
- Minimal metadata shown
```

## Behavior

### Entering Context

```
User Flow:
1. User views parent entity (Patent #12345)
2. Clicks "Documents" tab or link
3. Navigate to contextual view
4. Breadcrumb updates: ...> US2024-12345 > Documents
5. URL updates: /patents/12345/documents
6. Page shows only documents in this patent

State:
- Parent context preserved
- Filters default to "in context"
- Actions scoped to context
- Back button returns to parent
```

### Adding to Context

```
Flow 1: Add Existing Entity
┌────────────────────────────────────┐
│ Add Document to Patent US2024-12345│
├────────────────────────────────────┤
│ Search documents:                  │
│ [_________________________] [🔍]   │
│                                    │
│ ☐ Patent claims.pdf                │
│ ☐ Technical spec.docx              │
│ ☐ Prior art analysis.pdf           │
│                                    │
│ Selected: 0 documents              │
│                                    │
│ [Cancel]             [Add selected]│
└────────────────────────────────────┘

Steps:
1. Click "Add document" button
2. Modal/drawer opens
3. Search or browse available entities
4. Select one or more items
5. Click "Add selected"
6. Modal closes
7. Table refreshes with new items
8. Success notification shown

Flow 2: Create New Entity in Context
┌────────────────────────────────────┐
│ Upload New Document                │
├────────────────────────────────────┤
│ Drag files here or click to browse│
│                                    │
│ [📎 Choose files]                  │
│                                    │
│ This document will be added to:    │
│ Patent US2024-12345                │
│                                    │
│ [Cancel]                  [Upload] │
└────────────────────────────────────┘

Steps:
1. Click "Upload" or "Create new"
2. Modal/drawer opens
3. Upload/create entity
4. Entity automatically linked to context
5. Appears in contextual view immediately
```

### Removing from Context

```
Single Item:
1. Hover over row
2. Click "Remove" action
3. Confirmation dialog appears:
   "Remove document from Patent US2024-12345?"
4. Confirm or cancel
5. Item removed from view
6. Success notification

Bulk Removal:
1. Select multiple items (checkboxes)
2. Action bar shows "X items selected"
3. Click "Remove from patent" button
4. Confirmation: "Remove 5 documents?"
5. Confirm or cancel
6. Items removed from view
7. Success notification

Note: Removal breaks relationship but doesn't delete entity
```

### Switching Context

```
Scenario: User viewing Documents in Patent A
User wants to view Documents in Patent B

Option 1: Full Navigation
1. Click breadcrumb "Patents"
2. Navigate to Patent B
3. Click "Documents" tab
4. View Patent B documents

Option 2: Context Switcher (Advanced)
┌────────────────────────────────┐
│ Patent: US2024-12345      [▼]  │
│ ├─ US2024-12345 (current)     │
│ ├─ US2024-12346               │
│ ├─ US2024-12347               │
│ └─ [View all patents...]      │
└────────────────────────────────┘

1. Click context dropdown
2. Select different parent
3. View updates to new context
4. Breadcrumb and URL update
```

## Variants

### Tab-Based Context

```
┌──────────────────────────────────────────────────────┐
│ Patent US2024-12345: AI-Powered Device               │
├──────────────────────────────────────────────────────┤
│ [Details] [Documents] [Contacts] [History] [Tasks]   │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Documents (24)                     [+ Add document]  │
│                                                      │
│ [Document list table...]                             │
│                                                      │
└──────────────────────────────────────────────────────┘

Usage:
- Multiple related contexts
- Horizontal navigation
- Common in detail pages
- Easy context switching
```

### Sidebar Context

```
┌───────────┬───────────────────────────────────────┐
│ Matter    │ Documents in Matter XYZ               │
│ XYZ       │                                       │
│           │ [+ Add]  [Upload]  [Remove selected]  │
│ Details   │                                       │
│ Documents │ ☐ Agreement.pdf          Jan 15       │
│ Contacts  │ ☐ Evidence.docx          Jan 12       │
│ Timeline  │ ☐ Filing.pdf             Jan 10       │
│ Tasks     │                                       │
│           │                                       │
└───────────┴───────────────────────────────────────┘

Usage:
- Persistent context navigation
- Vertical navigation
- Common in detail pages
- Sidebar shows all available contexts
```

### Embedded Context

```
┌────────────────────────────────────────────────┐
│ Patent US2024-12345                            │
│                                                │
│ [Details section...]                           │
│                                                │
│ Related Documents (4)            [View all >]  │
│ ┌──────────────────────────────────────────┐  │
│ │ Patent claims.pdf          Jan 15, 2024  │  │
│ │ Technical drawing.pdf      Jan 14, 2024  │  │
│ │ Prior art search.doc       Jan 10, 2024  │  │
│ └──────────────────────────────────────────┘  │
│                                                │
│ [More sections...]                             │
└────────────────────────────────────────────────┘

Usage:
- Preview of contextual data
- Limited items shown (3-5)
- "View all" expands to full context
- Embedded within parent view
```

## Best Practices

### Do

- Show clear breadcrumbs indicating current context
- Display parent entity information prominently
- Use contextual language ("Add to Patent #12345")
- Show item count in context ("Documents (24)")
- Provide easy way to return to parent
- Make "Add" and "Remove" actions obvious
- Use confirmations for destructive actions (remove)
- Preserve context when navigating away and back
- Update counts in real-time as items added/removed
- Allow bulk operations (add/remove multiple)
- Show empty state with call-to-action

### Don't

- Mix contextual and global views without clear indication
- Allow accidental deletion of entities (remove ≠ delete)
- Hide the context (always show parent info)
- Use generic language ("Add document" vs "Add to Patent")
- Require navigation away to add items
- Make it difficult to return to parent
- Show overwhelming metadata in contextual lists
- Forget to update counts after changes
- Skip confirmation for bulk removal
- Allow adding same entity twice to context
- Navigate away from context without saving changes

## Empty States

### No Items in Context

```
┌────────────────────────────────────┐
│                                    │
│        📄                          │
│                                    │
│   No documents yet                 │
│                                    │
│   Add existing documents or        │
│   upload new ones to this patent.  │
│                                    │
│   [+ Add document]  [Upload]       │
│                                    │
└────────────────────────────────────┘
```

### No Results After Search/Filter

```
┌────────────────────────────────────┐
│                                    │
│        🔍                          │
│                                    │
│   No documents match your search   │
│                                    │
│   Try adjusting your filters or    │
│   search terms.                    │
│                                    │
│   [Clear search]                   │
│                                    │
└────────────────────────────────────┘
```

## Accessibility

### Screen Readers

- Announce context when entering view
- Read parent entity information clearly
- Announce item count ("24 documents in this patent")
- Identify contextual actions ("Add to Patent US2024-12345")
- Announce relationship changes ("Document added to patent")

### Keyboard Navigation

- `Tab` through breadcrumb links
- `Enter` to navigate breadcrumb
- Standard table/list keyboard navigation
- `Escape` to close add/remove modals
- Focus management when adding/removing items

## Related Patterns

- **[Breadcrumb](/components/breadcrumb.md)** - Navigation hierarchy
- **[Table](../behaviours/table.md)** - Data display in context
- **[Modal](../behaviours/modal.md)** - Add/remove dialogs
- **[Tabs](/components/tabs.md)** - Multiple contexts in tabs
- **[Relationships](../content/relationships.md)** - Related data patterns

## Technical Considerations

### URL Structure

```
Global view:     /documents
Parent view:     /patents/12345
Contextual view: /patents/12345/documents
```

### State Management

- Preserve parent entity data
- Track current context
- Handle navigation history
- Sync URL with context
- Cache contextual data
- Invalidate cache on changes

### Performance

- Paginate contextual lists
- Lazy load related data
- Cache parent entity info
- Debounce search/filter
- Optimize relationship queries

---

**Related Components:**
- [Breadcrumb](/components/breadcrumb.md)
- [Table](/components/table.md)
- [Tabs](/components/tabs.md)
- [Button](/components/button.md)
- [Modal](/components/modal.md)
