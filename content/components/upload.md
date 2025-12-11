---
title: Upload
description: "Documentation for Upload component"
---

## Description

Make file uploads feel modern and effortless. Upload transforms the clunky system dialog into an intuitive experience with drag-and-drop zones, progress tracking, previews, and validation. Users get clear feedback at every step, making what could be stressful feel simple.

## Anatomy

1. **Upload Area** - Droppable zone or trigger button
2. **Icon** - Upload indicator (cloud, arrow up)
3. **Primary Text** - Main instruction ("Drag files here")
4. **Secondary Text** - Helper text or file requirements
5. **Browse Button** - Alternative file picker trigger
6. **File List** - Uploaded/uploading files display
7. **File Item** - Individual file with preview
8. **Progress Bar** - Upload progress indicator
9. **Remove Button** - Delete uploaded file
10. **Status Icon** - Success, error, or loading indicator

## Specification

**Upload Area (Dragger variant):**
- **Width**: `400px` (default, flexible)
- **Height**: `180px` (droppable area)
- **Border**: `2px dashed` `--border-lighter`
- **Border Radius**: `radius-medium`
- **Background**: `--bg-fill-lighter`
- **Padding**: `spacing-6`
- **Layout**: Vertical, centered

**Drag State:**
- **Border**: `2px dashed` `--bg-fill-brand-normal`
- **Background**: Primary light (`#E6F7FF`)
- **Cursor**: Copy cursor

**Upload Button Variant:**
- **Height**: `40px`
- **Padding**: `spacing-2` `spacing-4`
- **Button style**: Primary or default button
- **Icon**: Upload icon (↑)

**Upload Icon:**
- **Size**: `48px` (large area) or `16px` (button)
- **Color**: `--text-lighter`
- **Type**: Cloud upload, arrow up

**File List:**
- **Width**: Full width of upload area
- **Gap**: `spacing-2` between items
- **Layout**: Vertical stack

**File Item:**
- **Height**: `48px`
- **Padding**: `spacing-2` `spacing-3`
- **Border**: `1px solid` `--bg-fill-light`
- **Border Radius**: `radius-small`
- **Background**: `--bg-surface-white`
- **Layout**: Horizontal row

**File Item Structure:**
```
[Preview/Icon] [File Name] [File Size] [Progress/Status] [Remove]
    32px         auto         auto          80px           24px
```

**Progress Bar:**
- **Height**: `4px`
- **Width**: `80px` or full width
- **Background**: `--bg-fill-lighter`
- **Fill**: `--bg-fill-brand-normal`
- **Border Radius**: `2px`

**Status Icons:**
- **Success**: `--bg-fill-success-normal`
- **Error**: `--bg-fill-danger-normal`
- **Loading**: Spinner or animated dots
- **Size**: `16px`

**File Preview (image):**
- **Size**: `32px × 32px` (thumbnail)
- **Border Radius**: `radius-extra-small`
- **Object Fit**: Cover

## Do

- Show clear instructions for uploading
- Support both drag-and-drop and click-to-browse
- Display file size limits and allowed formats upfront
- Show upload progress with clear indicators
- Provide immediate success or error feedback
- Let users remove files before or after upload
- Preview images with thumbnails
- Validate files before uploading starts
- Handle errors with helpful, actionable messages

## Don't

- Hide file size or type restrictions until after selection
- Upload large files without confirmation
- Skip showing upload progress—users need to know
- Make drop zones too small to use comfortably
- Forget to validate file types and sizes
- Lose uploaded files on refresh without warning
- Show vague error messages
- Make removing files difficult or unclear

## Uses

**Primary Use Cases:**

1. **Document Submission** - Patent applications, forms
2. **Image Upload** - Profile pictures, photos
3. **File Attachments** - Email, messages
4. **Bulk Upload** - Multiple files at once
5. **Import Data** - CSV, Excel files
6. **Avatar Upload** - Profile images with crop
7. **Media Library** - Photo/video galleries
8. **Report Upload** - PDF, Word documents

**Example Scenarios:**

**Drag and Drop Area:**
```
TPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPW
Q           Upload               Q
Q                                  Q
Q   Drag files here or click       Q
Q   to browse                      Q
Q                                  Q
Q   [     Select Files     ]       Q
Q                                  Q
Q   Supports: PDF, DOCX, JPG       Q
Q   Max size: 10MB                 Q
ZPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP]
```

**File List with Progress:**
```
Uploaded Files:


 =� Patent_Application.pdf
    2.3 MB  [����������] 80%




 =� Claims.docx
    1.1 MB   Complete       [�]




 =� Diagram.jpg
    450 KB   Failed: Too large
    [Retry]

```

**Button Upload:**
```
[� Upload Files]

Uploaded: Resume.pdf (1.2 MB)  [�]
```

**Avatar Upload:**
```

              [Change Avatar]
   Photo
              JPG, PNG (max 5MB)

```

## Behavior

### File Selection

**Click to Browse:**
Click the upload area or button to open the native file picker. Select files, they're added to the queue, and upload starts (or waits for your confirmation).

**Drag and Drop:**
Drag files over the upload area and watch it highlight. The cursor changes to show you can drop. Release to add files to the queue and start uploading.

### Upload Process

**Single File:**
Validate the file (size, type), show a progress bar starting at 0%, upload while updating progress to 100%, display a success icon when complete, and add the file to the list.

**Multiple Files:**
Upload sequentially or in parallel. Show individual progress for each file, optionally display overall progress, and queue any remaining files.

**Chunked Upload (large files):**
Split large files into chunks for reliable uploading. Resume automatically on failure, show overall progress, and handle network interruptions gracefully.

### Validation

**Pre-Upload:**
Check file type (extension and MIME type), verify size limits, enforce file count limits, show errors immediately, and prevent invalid files from uploading.

**Post-Upload:**
Run server-side validation, virus scans, and content checks. Show results clearly to users so they know what happened.

### States

**Upload Area States:**
- **Default** - Dashed border, normal background
- **Hover** - Subtle background tint
- **Drag Over** - Highlighted, primary colors
- **Uploading** - Progress indicator
- **Disabled** - Grayed out, not droppable

**File Item States:**
- **Queued** - Waiting to upload
- **Uploading** - Progress bar active
- **Success** - Green checkmark, complete
- **Error** - Red X, error message
- **Paused** - Pause icon, can resume

### Interactions

**Remove File:**
- Click X button
- Confirmation for completed uploads (optional)
- Remove from list
- Cancel upload if in progress

**Retry Failed Upload:**
- Show retry button on error
- Re-attempt upload
- Update progress

**Preview Files:**
- Click file to preview/download
- Image preview modal
- Document viewer (optional)

### Animations

**Drag Over:**
- Border color transition (200ms)
- Background fade in
- Scale slightly (1.02)

**File Added:**
- Slide in from top
- Fade in
- Duration: 300ms

**Upload Progress:**
- Smooth progress bar fill
- Percentage updates
- Spinner rotation

**Success:**
- Checkmark scale in
- Green color fade
- Brief celebration (optional)
