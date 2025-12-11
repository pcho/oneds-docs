---
title: Readme
description: "Documentation for Readme component"
---

# Design Patterns Overview

Welcome to OneDS Design Patterns! This is your go-to guide for building consistent, accessible interfaces across the IP management system.

## What Are Design Patterns?

Think of patterns as your design toolkit—proven solutions you'll use again and again. They give you:
- **Consistency** throughout the app
- **Best practices** for common interactions
- **Efficiency** from reusable solutions
- **Quality** through documented standards

## Pattern Categories

We've organized patterns into six categories to make them easy to find:

### Behaviours
How users interact with the interface—from clicking buttons to selecting items.

### Content
Ways to display and organize different types of content and data.

### Features
Specific feature implementations like AI assistance and document handling.

### Flows
Multi-step processes that guide users through complex tasks.

### Layouts
Structural patterns that organize content on the page.

### Navigation
How users move through and discover content in the app.

---

## Behaviour Patterns

### [Action Bar](./behaviours/action-bar.md)
A contextual toolbar that appears when users select items, perfect for bulk operations.

**Use when:** Users need to act on multiple selected items at once.

**Key features:**
- Selection counter
- Bulk actions (delete, export, assign)
- Confirmation patterns
- Mobile-responsive design

---

### [Common Actions](./behaviours/common.md)
Standard interaction patterns for buttons and actions used throughout the system.

**Covers:**
- Save, Create, Upload, Submit
- Add (Primary & Secondary)
- Cancel, Close, Clear
- Remove, Delete, Purge

**Use when:** Implementing any standard user action or button.

---

### [Drawer](./behaviours/drawer.md)
Side panel that slides in from the edge of the screen for secondary content.

**Use when:**
- Displaying filters
- Showing details without losing context
- Quick edits
- Mobile navigation

**Key features:**
- Slides from left or right
- Backdrop overlay
- Focus management
- Responsive behavior

---

### [Filtering](./behaviours/filtering.md)
Advanced filtering system for narrowing down large datasets.

**Use when:**
- Dataset has 20+ items
- Multiple filter criteria needed
- Users need to explore data by attributes

**Key features:**
- Filter panel/drawer
- Multiple filter types (text, date, select, range)
- Active filter display
- Filter persistence

---

### [Global Search](./behaviours/global-search.md)
System-wide search functionality accessible from anywhere.

**Use when:** Users need to quickly find content across the entire application.

**Key features:**
- Keyboard shortcut (Cmd/Ctrl+K)
- Autocomplete suggestions
- Recent searches
- Results across entities

---

### [Modal](./behaviours/modal.md)
Focused dialog that appears on top of content, requiring user attention.

**Use when:**
- Confirmation needed
- Critical information must be displayed
- Form input required
- User decision blocks workflow

**Key features:**
- Focus trap
- Backdrop click dismissal (optional)
- Escape key support

---

### [Notification](./behaviours/notification.md)
Temporary message providing feedback on user actions or system events.

**Use when:** Providing success, error, warning, or info feedback.

**Key features:**
- Auto-dismiss
- Action buttons
- Stack management
- Toast/snackbar styles

---

### [Table](./behaviours/table.md)
Data table pattern for displaying and managing records in list format.

**Use when:** Displaying structured data that users need to scan, sort, and act upon.

**Key features:**
- Sorting
- Selection
- Row actions
- Pagination
- Responsive (card view on mobile)

---

## Content Patterns

### [Activity Feed](./content/activity-feed.md)
Chronological list of actions, changes, and events.

**Use when:**
- Showing recent changes
- Displaying user actions
- Tracking audit trails
- Providing update streams

**Key features:**
- Time grouping
- Actor information
- Action types
- Real-time updates

---

### [Relationships](./content/relationships.md)
Display connections between entities (parent-child, associations, dependencies).

**Use when:**
- Showing patent families
- Displaying related IP rights
- Visualizing hierarchies
- Mapping dependencies

**Key features:**
- List, tree, card, and graph views
- Relationship type indicators
- Add/remove relationships
- Navigation between related items

---

### [Reporting](./content/reporting.md)
Report generation, customization, export, and scheduling patterns.

**Use when:**
- Generating portfolio summaries
- Exporting data
- Creating scheduled reports
- Building custom data extracts

**Key features:**
- Report builder
- Export formats (PDF, Excel, CSV)
- Scheduling
- Report history

---

## Feature Patterns

### [AI Integration](./features/ai-integration.md)
Patterns for integrating AI assistance features.

**Use when:** Adding AI-powered features like suggestions, generation, or analysis.

**Key features:**
- AI input panels
- Streaming responses
- Feedback mechanisms
- Loading states

---

### [Document Management](./features/document-management.md)
Comprehensive document handling patterns.

**Use when:** Implementing upload, preview, version control, or document organization.

**Key features:**
- Upload flows
- File type handling
- Document preview
- Version management
- Metadata display

---

## Flow Patterns

### [Multi-Step Creation](./flows/multi-step-creation.md)
Wizard pattern for complex, multi-step processes.

**Use when:**
- Form requires 8+ fields
- Information has logical grouping
- Sequential dependencies exist
- Process requires significant time

**Key features:**
- Progress indicator
- Step navigation
- Data persistence
- Validation per step
- Draft saving

**Used in:** Patent creation, Design registration, Trademark filing

---

## Layout Patterns

### [Contextual Views](./layouts/contextual-views.md)
Display data filtered or scoped to a specific parent entity.

**Use when:**
- Showing documents in a patent
- Displaying contacts in a matter
- Managing items within context

**Key features:**
- Breadcrumb navigation
- Context header
- Scoped actions
- Add/remove from context

---

## Navigation Patterns

### [Header](./navigation/header.md)
Global navigation header appearing on every page.

**Use when:** Implementing top-level navigation and global actions.

**Key features:**
- Logo and branding
- Primary navigation
- User menu
- Global search access
- Notifications
- Responsive behavior

---

## Quick Reference

### When to Use What

#### Need to display data?
- **List format:** [Table](./behaviours/table.md)
- **Related items:** [Relationships](./content/relationships.md)
- **Recent activity:** [Activity Feed](./content/activity-feed.md)

#### Need user input?
- **Critical decision:** [Modal](./behaviours/modal.md)
- **Quick edit:** [Drawer](./behaviours/drawer.md)
- **Multi-step:** [Multi-Step Creation](./flows/multi-step-creation.md)

#### Need to filter or search?
- **Advanced filtering:** [Filtering](./behaviours/filtering.md)
- **System-wide search:** [Global Search](./behaviours/global-search.md)

#### Need user feedback?
- **Success/error:** [Notification](./behaviours/notification.md)
- **Confirmation:** [Modal](./behaviours/modal.md)

#### Need bulk operations?
- **Multiple item actions:** [Action Bar](./behaviours/action-bar.md)

---

## Pattern Relationships

Understanding how patterns work together:

```
Table → Selection → Action Bar → Confirmation (Modal) → Result (Notification)

List → Filtering (Drawer) → Table → Detail View (Modal/Drawer)

Search (Global) → Results (Table) → Row Action (Modal) → Feedback (Notification)

Multi-Step Wizard → Step 1-N (Modal) → Processing → Success (Notification)

Table → Row Delete → Confirmation (Modal) → Bulk Delete → Success (Notification)
```

---

## Implementation Guidelines

### 1. Start with the Right Pattern
- Review this overview to find appropriate patterns
- Consider user goals and context
- Check related patterns for better combinations

### 2. Follow the Documentation
- Read the full pattern documentation
- Understand anatomy and specifications
- Review behavior patterns carefully

### 3. Check Examples
- Look at use cases in each pattern
- Review visual specifications
- Study interaction flows

### 4. Test Thoroughly
- Use implementation checklists
- Check mobile responsiveness
- Validate against specifications

### 5. Maintain Consistency
- Follow established patterns exactly
- Don't create variations without discussion
- Document any necessary deviations
- Update patterns when improvements found

---

## Contributing

Found an issue or have a suggestion?
- Document the use case
- Propose improvements
- Submit for design review
- Update Figma and documentation together

---

## Resources

### Design System
- **Figma - Components:** [View file](https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components)
- **Figma - Foundations:** [View file](https://www.figma.com/design/rxq8Lwm6cvWfhsW03rM79v/Foundations)

### External References
For inspiration and comparison, see:
- [GitLab Design System](https://design.gitlab.com/)
- [Blueprint Design System](https://blueprintjs.com/docs/)
- [Carbon Design System](https://carbondesignsystem.com/)
- [Elastic UI](https://eui.elastic.co/)
- [Adobe Spectrum](https://spectrum.adobe.com/)

---

## Pattern Index

### By Category

**Behaviours:** [Action Bar](./behaviours/action-bar.md) · [Common Actions](./behaviours/common.md) · [Drawer](./behaviours/drawer.md) · [Filtering](./behaviours/filtering.md) · [Global Search](./behaviours/global-search.md) · [Modal](./behaviours/modal.md) · [Notification](./behaviours/notification.md) · [Table](./behaviours/table.md)

**Content:** [Activity Feed](./content/activity-feed.md) · [Relationships](./content/relationships.md) · [Reporting](./content/reporting.md)

**Features:** [AI Integration](./features/ai-integration.md) · [Document Management](./features/document-management.md)

**Flows:** [Multi-Step Creation](./flows/multi-step-creation.md)

**Layouts:** [Contextual Views](./layouts/contextual-views.md)

**Navigation:** [Header](./navigation/header.md)

### Alphabetical

[Action Bar](./behaviours/action-bar.md) · [Activity Feed](./content/activity-feed.md) · [AI Integration](./features/ai-integration.md) · [Common Actions](./behaviours/common.md) · [Contextual Views](./layouts/contextual-views.md) · [Document Management](./features/document-management.md) · [Drawer](./behaviours/drawer.md) · [Filtering](./behaviours/filtering.md) · [Global Search](./behaviours/global-search.md) · [Header](./navigation/header.md) · [Modal](./behaviours/modal.md) · [Multi-Step Creation](./flows/multi-step-creation.md) · [Notification](./behaviours/notification.md) · [Relationships](./content/relationships.md) · [Reporting](./content/reporting.md) · [Table](./behaviours/table.md)

---

**Last Updated:** November 2025
