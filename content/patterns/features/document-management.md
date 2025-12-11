---
title: Document Management
description: "Documentation for Document Management component"
---

# Document Management Pattern

Document Management Systems (DMS) handle file storage, organization, versioning, and access control throughout a document's lifecycle. In IP management, this includes patent applications, drawings, correspondence, agreements, and evidence files.

## When to Use

- Uploading and storing patent documents and drawings
- Managing legal correspondence and agreements
- Organizing case files and evidence
- Version control for iterative documents
- Document approval workflows
- File sharing and access control
- Bulk document operations

## Core Features

### 1. Document Upload
### 2. Document Library/List
### 3. Document Preview
### 4. Version Management
### 5. Document Metadata
### 6. Folder Organization
### 7. Search & Filter
### 8. Bulk Operations

## 1. Document Upload Pattern

### Single Upload

```
┌────────────────────────────────────────────┐
│ Upload Document                            │
├────────────────────────────────────────────┤
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │                                        │ │
│ │        📁                              │ │
│ │                                        │ │
│ │   Drag and drop files here            │ │
│ │   or click to browse                   │ │
│ │                                        │ │
│ │   Supported: PDF, DOC, DOCX, XLS,     │ │
│ │   XLSX, JPG, PNG (Max 50MB)           │ │
│ │                                        │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ Document type:                             │
│ [Patent Application ▼]                     │
│                                            │
│ [Cancel]                        [Upload]   │
└────────────────────────────────────────────┘

Behavior:
1. Click or drag file
2. File validates (type, size)
3. Optional: Select document type
4. Upload with progress indicator
5. Success confirmation
6. Document appears in library
```

### Bulk Upload

```
┌────────────────────────────────────────────┐
│ Upload Documents                           │
├────────────────────────────────────────────┤
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │ Drag and drop multiple files           │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ Selected files (3):                        │
│ ├─ ✓ Patent-claims.pdf        [×]         │
│ ├─ ✓ Technical-drawing.pdf    [×]         │
│ └─ ⚠ Large-file.pdf (55MB)    [×]         │
│     File exceeds 50MB limit               │
│                                            │
│ Document type:                             │
│ [Patent Documents ▼]                       │
│                                            │
│ [Cancel]              [Upload 2 files]     │
└────────────────────────────────────────────┘

Features:
- Multiple file selection
- Individual file removal
- Validation before upload
- Show warnings/errors per file
- Upload valid files only
- Batch metadata assignment
```

### Upload Progress

```
Uploading documents (2/3)                     [×]
┌────────────────────────────────────────────┐
│ ✓ Patent-claims.pdf                        │
│ ████████████████████████ 100%              │
│                                            │
│ ⏳ Technical-drawing.pdf                    │
│ ████████████░░░░░░░░░░░░ 65%              │
│                                            │
│ ○ Agreement.docx                           │
│ ░░░░░░░░░░░░░░░░░░░░░░░░ Waiting...       │
└────────────────────────────────────────────┘

States:
- Queued: Gray, "Waiting..."
- Uploading: Blue progress bar, percentage
- Complete: Green checkmark, 100%
- Error: Red error icon, error message
- Cancelable: [×] button during upload
```

### Upload Specifications

```
Upload Area:
- Height: 200px (drop zone)
- Border: 2px dashed bdr-default
- Border radius: radius-medium
- Background: surface-secondary
- Hover: Border fill-accent, background #EDF1FF

Drag Active:
- Border: 2px solid fill-accent
- Background: #EDF1FF
- Show highlight

File Validation:
- Supported types: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, GIF, TXT
- Max file size: 50MB (configurable)
- Show validation errors clearly
- Allow retry or removal

Progress Indicator:
- Height: 8px
- Border radius: radius-extra-small
- Background: --bg-fill-light
- Fill: fill-accent
- Percentage: text-base, txt-secondary
```

## 2. Document Library Pattern

### List View

```
Documents (247)                [Grid] [List] [+ Upload]
┌──────────────────────────────────────────────────────────────┐
│ [Search...] [All types ▼] [All dates ▼] [Sort: Date ▼]      │
├──────────────────────────────────────────────────────────────┤
│ ☐ │ Name                │ Type     │ Modified  │ Size  │ ⋮  │
├──────────────────────────────────────────────────────────────┤
│ ☐ │ 📄 Patent-claims    │ PDF      │ Jan 15    │ 2.4MB │ ⋮  │
│ ☐ │ 📄 Tech-drawing     │ PDF      │ Jan 14    │ 5.1MB │ ⋮  │
│ ☐ │ 📄 Agreement-v2     │ DOCX     │ Jan 10    │ 850KB │ ⋮  │
│ ☐ │ 📊 Claims-analysis  │ XLSX     │ Jan 09    │ 1.2MB │ ⋮  │
│ ☐ │ 🖼 Device-photo     │ JPG      │ Jan 05    │ 3.5MB │ ⋮  │
└──────────────────────────────────────────────────────────────┘
Showing 1-25 of 247                          [< 1 2 3 ... 10 >]

Actions (⋮ menu):
- View
- Download
- Preview
- Version History
- Share
- Move to folder
- Delete
```

### Grid View

```
Documents (247)                [Grid] [List] [+ Upload]
┌──────────────────────────────────────────────────────────────┐
│ ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│ │ 📄       │  │ 📄       │  │ 📄       │  │ 📊       │      │
│ │          │  │          │  │          │  │          │      │
│ │ Patent   │  │ Tech     │  │ Agreement│  │ Claims   │      │
│ │ claims   │  │ drawing  │  │ v2       │  │ analysis │      │
│ │          │  │          │  │          │  │          │      │
│ │ PDF      │  │ PDF      │  │ DOCX     │  │ XLSX     │      │
│ │ 2.4MB    │  │ 5.1MB    │  │ 850KB    │  │ 1.2MB    │      │
│ │ Jan 15   │  │ Jan 14   │  │ Jan 10   │  │ Jan 09   │      │
│ └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                               │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│ │ 🖼       │  │ 📁       │  │ 📄       │  │ 📄       │      │
│ │ Device   │  │ Drawings │  │ Evidence │  │ Letter   │      │
│ │ photo    │  │ (15)     │  │ doc      │  │ response │      │
│ └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
└──────────────────────────────────────────────────────────────┘

Card Specifications:
- Size: 160px × 180px
- Border: 1px solid --bg-fill-light
- Border radius: radius-medium
- Padding: spacing-4
- Hover: Border fill-accent, shadow
- Icon: 48px (centered)
- Title: text-base, 2 lines max
- Metadata: text-xs, txt-tertiary
```

## 3. Document Preview Pattern

### Preview Panel

```
┌────────────────────┬──────────────────────────────────────┐
│ Documents          │ Patent-claims.pdf                    │
│                    │ ──────────────────────────────────── │
│ ☑ Patent-claims    │                                      │
│ ○ Tech-drawing     │ ┌──────────────────────────────────┐ │
│ ○ Agreement-v2     │ │                                  │ │
│ ○ Claims-analysis  │ │   [PDF Preview Content]          │ │
│ ○ Device-photo     │ │                                  │ │
│                    │ │   Page 1 of 24                   │ │
│                    │ │                                  │ │
│                    │ └──────────────────────────────────┘ │
│                    │                                      │
│                    │ [Download] [Print] [Share] [Close]  │
└────────────────────┴──────────────────────────────────────┘

Features:
- Split view: List + preview
- Navigate between documents
- Page navigation for multi-page
- Zoom controls
- Download and print options
```

### Full-Screen Preview

```
┌────────────────────────────────────────────────────────────┐
│ Patent-claims.pdf                          [Download] [✕]  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                                                            │
│                                                            │
│                    [PDF Preview Content]                   │
│                                                            │
│                         Page 1 of 24                       │
│                                                            │
│                                                            │
│                                                            │
├────────────────────────────────────────────────────────────┤
│      [<] [>]  Page 1 of 24  [100% ▼]  [Fit] [Print]      │
└────────────────────────────────────────────────────────────┘

Controls:
- Previous/Next page
- Page number input
- Zoom dropdown (50%, 75%, 100%, 125%, 150%, 200%)
- Fit to width/height
- Print
- Download
- Close (ESC)
```

## 4. Version Management Pattern

### Version History

```
Agreement.docx - Version History
┌────────────────────────────────────────────────────────────┐
│ Current Version: v3 (Jan 15, 2024)                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ ● v3 (Current)                              Jan 15, 2024  │
│   By: Jane Smith                                          │
│   "Final version with client edits"                       │
│   [Download] [Preview]                                    │
│                                                            │
│ ○ v2                                        Jan 10, 2024  │
│   By: John Doe                                            │
│   "Added compensation clause"                             │
│   [Download] [Preview] [Restore]                          │
│                                                            │
│ ○ v1                                        Jan 05, 2024  │
│   By: Jane Smith                                          │
│   "Initial draft"                                         │
│   [Download] [Preview] [Restore]                          │
│                                                            │
└────────────────────────────────────────────────────────────┘

Features:
- Version timeline
- Version notes/comments
- Author and timestamp
- Download any version
- Preview any version
- Restore to previous version
- Compare versions (advanced)
```

### Upload New Version

```
┌────────────────────────────────────────────┐
│ Upload New Version                         │
├────────────────────────────────────────────┤
│ Current version: v3 (Jan 15, 2024)         │
│                                            │
│ Upload new version:                        │
│ ┌────────────────────────────────────────┐ │
│ │ Drag file here or click to browse     │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ Version notes:                             │
│ ┌────────────────────────────────────────┐ │
│ │ Updated terms per client review...    │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ ☑ Notify document subscribers              │
│                                            │
│ [Cancel]                         [Upload]  │
└────────────────────────────────────────────┘
```

## 5. Document Metadata Pattern

### Metadata Display

```
Patent-claims.pdf
┌────────────────────────────────────────────────────────────┐
│ Details                                                    │
├────────────────────────────────────────────────────────────┤
│ Type:           Patent Application                         │
│ Size:           2.4 MB                                     │
│ Format:         PDF                                        │
│ Pages:          24                                         │
│ Created:        Jan 15, 2024 at 2:30 PM                   │
│ Created by:     Jane Smith                                 │
│ Modified:       Jan 15, 2024 at 4:15 PM                   │
│ Modified by:    John Doe                                   │
│ Version:        v2                                         │
│ Status:         Final                                      │
│                                                            │
│ Tags:           [Patent] [US] [AI Technology]  [+ Add]    │
│                                                            │
│ Related to:     Patent US2024-12345                        │
│                                                            │
│ [Edit metadata]                                            │
└────────────────────────────────────────────────────────────┘
```

### Edit Metadata

```
┌────────────────────────────────────────────┐
│ Edit Document Metadata                     │
├────────────────────────────────────────────┤
│ Document name:                             │
│ [Patent-claims________________]            │
│                                            │
│ Document type:                             │
│ [Patent Application ▼]                     │
│                                            │
│ Status:                                    │
│ [Final ▼]                                  │
│                                            │
│ Tags:                                      │
│ [Patent ×] [US ×] [AI Technology ×]       │
│ [Add tag...___________________]            │
│                                            │
│ Description:                               │
│ ┌────────────────────────────────────────┐ │
│ │ Patent claims document...              │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ [Cancel]                          [Save]   │
└────────────────────────────────────────────┘
```

## 6. Folder Organization Pattern

### Folder Structure

```
Documents
├── 📁 Patents (156)
│   ├── 📁 US Applications (89)
│   │   ├── 📄 Patent-12345-claims.pdf
│   │   ├── 📄 Patent-12345-drawings.pdf
│   │   └── 📄 Patent-12345-response.pdf
│   ├── 📁 EP Applications (45)
│   └── 📁 JP Applications (22)
├── 📁 Trademarks (64)
│   ├── 📁 US Trademarks (32)
│   └── 📁 EU Trademarks (32)
├── 📁 Agreements (21)
└── 📁 Correspondence (45)
```

### Folder Navigation

```
┌────────────────────┬──────────────────────────────────────┐
│ 📁 Documents       │ Patents > US Applications            │
│                    │ ──────────────────────────────────── │
│ └─ 📁 Patents      │                                      │
│    ├─ 📁 US Apps   │ [+ Upload] [New folder] [Move] [⋮]  │
│    ├─ 📁 EP Apps   │                                      │
│    └─ 📁 JP Apps   │ ☐ │ Name           │ Modified │ Size│
│ └─ 📁 Trademarks   │ ──────────────────────────────────── │
│ └─ 📁 Agreements   │ ☐ │ Patent-12345   │ Jan 15  │ 2.4MB│
│ └─ 📁 Correspond   │ ☐ │ Patent-12346   │ Jan 14  │ 5.1MB│
│                    │ ☐ │ Patent-12347   │ Jan 10  │ 850KB│
└────────────────────┴──────────────────────────────────────┘
```

## 7. Search & Filter Pattern

```
Search Documents
┌────────────────────────────────────────────────────────────┐
│ [Search by name, content, or tags...______] [🔍]          │
│                                                            │
│ Filters:                                                   │
│ Document type:    [All types ▼]                           │
│ Date range:       [Last 30 days ▼]                        │
│ File type:        [All formats ▼]                         │
│ Tags:             [Select tags..._______________]          │
│ Status:           [All statuses ▼]                        │
│ Size:             [< 10MB ▼]                              │
│                                                            │
│ [Clear filters]                                            │
├────────────────────────────────────────────────────────────┤
│ Results: 24 documents                                      │
│                                                            │
│ 📄 Patent-claims.pdf                         Jan 15, 2024 │
│    ...patent claims for AI-powered device...              │
│    Tags: Patent, US, AI Technology                        │
│                                                            │
│ 📄 Tech-drawing.pdf                          Jan 14, 2024 │
│    ...technical drawings showing the device architecture...│
│    Tags: Patent, US, Drawings                             │
└────────────────────────────────────────────────────────────┘

Features:
- Full-text search (when supported)
- Filter by multiple criteria
- Tag-based filtering
- Date range selection
- File type filtering
- Search result highlighting
- Save search queries (advanced)
```

## 8. Bulk Operations Pattern

```
Documents (3 selected)            [Download all] [Move] [Delete]
┌──────────────────────────────────────────────────────────────┐
│ ☑ │ Name                │ Type     │ Modified  │ Size  │ ⋮  │
├──────────────────────────────────────────────────────────────┤
│ ☑ │ 📄 Patent-claims    │ PDF      │ Jan 15    │ 2.4MB │ ⋮  │
│ ☑ │ 📄 Tech-drawing     │ PDF      │ Jan 14    │ 5.1MB │ ⋮  │
│ ☐ │ 📄 Agreement-v2     │ DOCX     │ Jan 10    │ 850KB │ ⋮  │
│ ☑ │ 📊 Claims-analysis  │ XLSX     │ Jan 09    │ 1.2MB │ ⋮  │
│ ☐ │ 🖼 Device-photo     │ JPG      │ Jan 05    │ 3.5MB │ ⋮  │
└──────────────────────────────────────────────────────────────┘

Bulk Actions:
- Download as ZIP
- Move to folder
- Add tags
- Change document type
- Delete
- Share/set permissions
```

## Best Practices

### Do

- Allow drag-and-drop upload
- Show upload progress clearly
- Validate file types and sizes before upload
- Provide document preview without download
- Support version history
- Enable bulk operations
- Use clear file type icons
- Show file metadata (size, date, author)
- Allow folder organization
- Provide search and filter
- Enable document tagging
- Show file status (draft, final, archived)
- Allow download in original format
- Provide print functionality

### Don't

- Force manual file-by-file uploads for bulk needs
- Upload without validation feedback
- Make users download files to preview
- Lose document history when updating
- Require complex permissions for basic viewing
- Show technical error messages
- Use confusing file icons
- Hide important metadata
- Force flat document structure
- Make search slow or limited
- Allow duplicate uploads without warning
- Delete documents without confirmation
- Forget to notify stakeholders of updates

## Accessibility

**Keyboard Navigation:**
- Tab through documents
- Enter to open/preview
- Space to select multiple
- Arrow keys in grid view

**Screen Readers:**
- Announce file name, type, and size
- Read upload status and progress
- Describe folder structure
- Announce version information

## Related Patterns

- **[Upload](/components/upload.md)** - Upload component
- **[Table](../behaviours/table.md)** - Document list display
- **[Modal](../behaviours/modal.md)** - Document preview
- **[Contextual Views](../layouts/contextual-views.md)** - Documents in context

---

**Related Components:**
- [Upload](/components/upload.md)
- [Table](/components/table.md)
- [Button](/components/button.md)
- [Modal](/components/modal.md)
- [Progress](/components/progress.md)
