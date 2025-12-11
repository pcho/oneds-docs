---
title: Reporting
description: "Documentation for Reporting component"
---

# Reporting Pattern

Reporting puts data insights at your fingertips—letting users generate, customize, export, and schedule summaries and analytics. In IP management, this means tracking portfolio status, deadlines, costs, filing stats, and compliance metrics.

## When to Use

- Generating portfolio summaries and analytics
- Exporting data for external stakeholders
- Creating deadline and renewal reports
- Financial reporting (costs, fees, budgets)
- Compliance and audit reports
- Custom data extracts
- Scheduled recurring reports
- Executive dashboards

## Core Features

### 1. Report Generation
### 2. Report Parameters & Filters
### 3. Export Formats
### 4. Report Scheduling
### 5. Report History
### 6. Report Templates

## 1. Report Generation Pattern

### Basic Report Builder

```
┌────────────────────────────────────────────────────────────┐
│ Generate Report                                       [×]  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ Report type:                                               │
│ [Patent Portfolio Summary ▼]                               │
│                                                            │
│ Date range:                                                │
│ [Last 12 months ▼]                                         │
│ From: [Jan 1, 2024]  To: [Dec 31, 2024]                   │
│                                                            │
│ Include:                                                   │
│ ☑ Active patents                                           │
│ ☑ Pending applications                                     │
│ ☐ Abandoned applications                                   │
│ ☑ Cost summary                                             │
│                                                            │
│ Group by:                                                  │
│ [Jurisdiction ▼]                                           │
│                                                            │
│ Export format:                                             │
│ ○ PDF  ○ Excel  ○ CSV  ● PowerPoint                       │
│                                                            │
│ [Cancel]              [Generate Report]                    │
└────────────────────────────────────────────────────────────┘

Flow:
1. Select report type
2. Configure parameters
3. Choose filters
4. Select export format
5. Generate
6. Download or view
```

### Quick Reports

```
Reports
┌────────────────────────────────────────────────────────────┐
│ Quick Reports                         [Custom Report]      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ ┌──────────────────┐  ┌──────────────────┐               │
│ │ 📊 Portfolio     │  │ 📅 Upcoming      │               │
│ │    Summary       │  │    Deadlines     │               │
│ │                  │  │                  │               │
│ │ Current status   │  │ Next 90 days     │               │
│ │ of all IP rights │  │ deadlines        │               │
│ │                  │  │                  │               │
│ │ [Generate]       │  │ [Generate]       │               │
│ └──────────────────┘  └──────────────────┘               │
│                                                            │
│ ┌──────────────────┐  ┌──────────────────┐               │
│ │ 💰 Cost          │  │ 🌍 Geographic    │               │
│ │    Analysis      │  │    Distribution  │               │
│ │                  │  │                  │               │
│ │ YTD costs and    │  │ Patents by       │               │
│ │ projections      │  │ jurisdiction     │               │
│ │                  │  │                  │               │
│ │ [Generate]       │  │ [Generate]       │               │
│ └──────────────────┘  └──────────────────┘               │
└────────────────────────────────────────────────────────────┘

Usage:
- Pre-configured templates
- One-click generation
- Common use cases
- Fast access to frequent reports
```

## 2. Report Parameters & Filters Pattern

### Advanced Filter Panel

```
Custom Report Builder
┌────────────────────────────────────────────────────────────┐
│ ┌─ Data Source ──────────────────────────────────────────┐ │
│ │ ● Patents  ○ Trademarks  ○ Designs  ○ All IP Rights   │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌─ Filters ──────────────────────────────────────────────┐ │
│ │                                                        │ │
│ │ Status:                                                │ │
│ │ [Multiple...▼] Active, Pending, Granted               │ │
│ │                                                        │ │
│ │ Jurisdiction:                                          │ │
│ │ [Multiple...▼] US, EP, JP, CN                         │ │
│ │                                                        │ │
│ │ Date range:                                            │ │
│ │ [Custom range ▼]                                       │ │
│ │ From: [2024-01-01]  To: [2024-12-31]                  │ │
│ │                                                        │ │
│ │ Technology area:                                       │ │
│ │ [Select...____________]                                │ │
│ │                                                        │ │
│ │ [+ Add filter]                                         │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌─ Columns ──────────────────────────────────────────────┐ │
│ │ ☑ Application Number    ☑ Title                       │ │
│ │ ☑ Status                ☑ Filing Date                 │ │
│ │ ☑ Jurisdiction          ☐ Priority Date               │ │
│ │ ☑ Cost to Date          ☐ Inventors                   │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌─ Grouping & Sorting ───────────────────────────────────┐ │
│ │ Group by: [Jurisdiction ▼]                             │ │
│ │ Sort by:  [Filing Date ▼]  [Descending ▼]             │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ Preview: 247 records match criteria                        │
│                                                            │
│ [Save as template]  [Cancel]  [Generate Report]            │
└────────────────────────────────────────────────────────────┘
```

### Date Range Options

```
Date range:
[Last 12 months ▼]
├─ Today
├─ Yesterday
├─ Last 7 days
├─ Last 30 days
├─ Last 90 days
├─ Last 12 months
├─ This year
├─ Last year
├─ Quarter to date
├─ Year to date
└─ Custom range...

Custom Range:
┌────────────────────────────┐
│ From: [📅 2024-01-01]     │
│ To:   [📅 2024-12-31]     │
│                            │
│ [Cancel]          [Apply]  │
└────────────────────────────┘
```

## 3. Export Formats Pattern

### Format Selection

```
Export format:

○ PDF (.pdf)
  Formatted report with charts and tables
  Best for: Sharing, presentations, archiving

○ Excel (.xlsx)
  Editable spreadsheet with formulas
  Best for: Analysis, manipulation, calculations

○ CSV (.csv)
  Plain text data file
  Best for: Data import, integrations, bulk processing

○ PowerPoint (.pptx)
  Presentation with charts and summaries
  Best for: Executive presentations, board meetings

○ Word (.docx)
  Formatted document
  Best for: Reports, documentation
```

### Export Options by Format

```
PDF Options:
┌────────────────────────────────────┐
│ ☑ Include cover page               │
│ ☑ Include table of contents        │
│ ☑ Include page numbers             │
│ ☑ Include charts and graphs        │
│ ☐ Password protect                 │
│                                    │
│ Orientation: ○ Portrait ● Landscape│
│ Page size: [A4 ▼]                  │
└────────────────────────────────────┘

Excel Options:
┌────────────────────────────────────┐
│ ☑ Include summary sheet            │
│ ☑ Separate sheet per group         │
│ ☑ Include formulas                 │
│ ☑ Include charts                   │
│ ☑ Auto-size columns                │
│ ☐ Freeze header row                │
└────────────────────────────────────┘
```

## 4. Report Scheduling Pattern

### Schedule Report

```
Schedule Report
┌────────────────────────────────────────────────────────────┐
│ Report: Patent Portfolio Summary                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ Frequency:                                                 │
│ ○ Daily                                                    │
│ ○ Weekly                                                   │
│ ● Monthly                                                  │
│ ○ Quarterly                                                │
│ ○ Annually                                                 │
│                                                            │
│ Run on:                                                    │
│ [1st ▼] of every month at [9:00 AM ▼]                     │
│                                                            │
│ Start date: [2024-01-01]                                   │
│ End date:   [No end date ▼]                                │
│                                                            │
│ Recipients:                                                │
│ [john.doe@company.com ×]                                   │
│ [jane.smith@company.com ×]                                 │
│ [Add recipient...___________________]                      │
│                                                            │
│ Email subject:                                             │
│ [Monthly Patent Portfolio Summary - {date}]                │
│                                                            │
│ Email message:                                             │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ Please find attached the monthly patent portfolio     │ │
│ │ summary report...                                      │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ ☑ Attach report as PDF                                     │
│ ☐ Attach report as Excel                                   │
│ ☐ Send notification if report generation fails            │
│                                                            │
│ [Cancel]              [Schedule Report]                    │
└────────────────────────────────────────────────────────────┘
```

### Scheduled Reports List

```
Scheduled Reports (4)                         [+ Schedule New]
┌────────────────────────────────────────────────────────────┐
│ ☑ Patent Portfolio Summary                                 │
│   Monthly on 1st at 9:00 AM                                │
│   Next run: Feb 1, 2024 at 9:00 AM                         │
│   Recipients: 2 people                                     │
│   [Edit] [Run Now] [Pause] [Delete]                        │
│                                                            │
│ ☑ Upcoming Deadlines                                       │
│   Weekly on Monday at 8:00 AM                              │
│   Next run: Jan 29, 2024 at 8:00 AM                        │
│   Recipients: 5 people                                     │
│   [Edit] [Run Now] [Pause] [Delete]                        │
│                                                            │
│ ⏸ Cost Analysis Report (Paused)                            │
│   Monthly on 1st at 10:00 AM                               │
│   Last run: Jan 1, 2024 at 10:00 AM                        │
│   Recipients: 3 people                                     │
│   [Edit] [Run Now] [Resume] [Delete]                       │
│                                                            │
│ ☑ Geographic Distribution                                  │
│   Quarterly on 1st at 9:00 AM                              │
│   Next run: Apr 1, 2024 at 9:00 AM                         │
│   Recipients: 1 person                                     │
│   [Edit] [Run Now] [Pause] [Delete]                        │
└────────────────────────────────────────────────────────────┘
```

## 5. Report History Pattern

### Report History List

```
Report History                    [Search...] [All types ▼]
┌────────────────────────────────────────────────────────────┐
│ Name                  │ Generated     │ Format │ Size  │   │
├────────────────────────────────────────────────────────────┤
│ Portfolio Summary     │ Jan 15, 9:00  │ PDF    │ 2.4MB │ ⋮ │
│ Upcoming Deadlines    │ Jan 15, 8:00  │ Excel  │ 850KB │ ⋮ │
│ Cost Analysis         │ Jan 14, 10:00 │ PDF    │ 1.8MB │ ⋮ │
│ Geographic Dist.      │ Jan 10, 9:00  │ Excel  │ 450KB │ ⋮ │
│ Portfolio Summary     │ Jan 1, 9:00   │ PDF    │ 2.3MB │ ⋮ │
└────────────────────────────────────────────────────────────┘
Showing 1-10 of 156                           [< 1 2 3 ... >]

Actions (⋮):
- Download
- View
- Re-run with same parameters
- Delete
- Share
```

### Report Detail View

```
Patent Portfolio Summary - Jan 15, 2024
┌────────────────────────────────────────────────────────────┐
│ Generated: Jan 15, 2024 at 9:00 AM                         │
│ By: john.doe@company.com                                   │
│ Format: PDF (2.4MB)                                         │
│ Status: ✓ Completed                                        │
│                                                            │
│ Parameters:                                                │
│ • Report type: Patent Portfolio Summary                    │
│ • Date range: Last 12 months                               │
│ • Jurisdiction: All                                        │
│ • Status: Active, Pending, Granted                         │
│ • Group by: Jurisdiction                                   │
│                                                            │
│ Results: 247 records                                       │
│                                                            │
│ [Download] [View] [Re-run] [Share] [Delete]                │
└────────────────────────────────────────────────────────────┘
```

## 6. Report Templates Pattern

### Template Library

```
Report Templates                              [+ New Template]
┌────────────────────────────────────────────────────────────┐
│ My Templates (3)                                           │
├────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐    │
│ │ 📊 Monthly Portfolio Summary                        │    │
│ │ Portfolio overview grouped by jurisdiction          │    │
│ │ Used 12 times • Last used: Jan 15, 2024             │    │
│ │ [Use template] [Edit] [Duplicate] [Delete]          │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                            │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ 📅 Weekly Deadline Report                           │    │
│ │ Upcoming deadlines for next 90 days                 │    │
│ │ Used 45 times • Last used: Jan 15, 2024             │    │
│ │ [Use template] [Edit] [Duplicate] [Delete]          │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                            │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ 💰 Quarterly Cost Analysis                          │    │
│ │ Financial summary by matter and jurisdiction        │    │
│ │ Used 4 times • Last used: Jan 1, 2024               │    │
│ │ [Use template] [Edit] [Duplicate] [Delete]          │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                            │
│ Shared Templates (5)                                       │
├────────────────────────────────────────────────────────────┤
│ [View shared templates...]                                 │
└────────────────────────────────────────────────────────────┘
```

### Save as Template

```
┌────────────────────────────────────┐
│ Save as Template                   │
├────────────────────────────────────┤
│ Template name:                     │
│ [Monthly Portfolio Summary]        │
│                                    │
│ Description:                       │
│ ┌────────────────────────────────┐ │
│ │ Portfolio overview grouped by  │ │
│ │ jurisdiction with cost summary │ │
│ └────────────────────────────────┘ │
│                                    │
│ Share with:                        │
│ ○ Only me                          │
│ ○ My team                          │
│ ○ Everyone in organization         │
│                                    │
│ [Cancel]            [Save]         │
└────────────────────────────────────┘
```

## Report Generation States

### Generating Report

```
Generating Report...                              [Cancel]
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    ⟳                                       │
│                                                            │
│              Generating Patent Portfolio Summary           │
│                                                            │
│              Processing 247 records...                     │
│                                                            │
│              This may take a few moments.                  │
│                                                            │
└────────────────────────────────────────────────────────────┘

Progress Stages:
1. Fetching data...
2. Processing records...
3. Generating charts...
4. Creating document...
5. Finalizing...
```

### Report Ready

```
┌────────────────────────────────────────────┐
│ Report Ready!                         [×]  │
├────────────────────────────────────────────┤
│                                            │
│        ✓                                   │
│                                            │
│   Patent Portfolio Summary                 │
│   PDF • 2.4MB • 247 records                │
│                                            │
│   [Download]              [View]           │
│                                            │
└────────────────────────────────────────────┘
```

### Report Error

```
┌────────────────────────────────────────────┐
│ Report Generation Failed             [×]  │
├────────────────────────────────────────────┤
│                                            │
│        ⚠                                   │
│                                            │
│   Unable to generate report                │
│                                            │
│   The selected date range contains too     │
│   many records. Please narrow your         │
│   filters and try again.                   │
│                                            │
│   [Adjust filters]         [Try again]     │
│                                            │
└────────────────────────────────────────────┘
```

## Specifications

### Report Builder

```
Modal/Page:
- Width: 800px (modal) or full page
- Padding: spacing-6
- Background: surface-white
- Border radius: radius-default (modal)

Sections:
- Gap: spacing-6 between sections
- Label: text-base, font-weight-semibold, txt-primary
- Description: text-xs, txt-tertiary

Form Fields:
- Standard form components
- Validation on submit
- Clear error messages

Action Buttons:
- Primary: "Generate Report"
- Secondary: "Cancel", "Save as template"
- Position: Bottom right
```

### Quick Report Cards

```
Card:
- Width: 240px (or flex)
- Height: 180px
- Padding: 20px
- Border: 1px solid --bg-fill-light
- Border radius: radius-medium
- Hover: Border fill-accent, shadow

Icon:
- Size: 48px
- Position: Top
- Color: Varies by type

Title:
- Font size: text-lg
- Font weight: font-weight-semibold
- Color: txt-primary
- Margin top: spacing-3

Description:
- Font size: text-base
- Color: txt-tertiary
- Line height: 1.5

Button:
- Position: Bottom
- Full width or auto
```

## Best Practices

### Do

- Provide quick report templates for common needs
- Allow customization of report parameters
- Support multiple export formats
- Show report generation progress
- Allow report scheduling for recurring needs
- Keep report history with re-run capability
- Enable template saving and sharing
- Provide clear parameter descriptions
- Show record count before generating
- Allow preview before export
- Include export date and parameters in reports
- Provide email delivery options
- Allow batch report generation
- Support data filtering and grouping

### Don't

- Generate reports without showing progress
- Hide report parameters in generated output
- Make users rebuild reports from scratch
- Limit export format options unnecessarily
- Generate reports synchronously for large datasets
- Allow scheduling without validation
- Forget to clean up old reports
- Make report history difficult to access
- Complicate simple report needs
- Ignore performance for large datasets
- Lock users into proprietary formats
- Require downloads for simple previews

## Empty States

### No Reports Generated

```
┌────────────────────────────────────┐
│                                    │
│        📊                          │
│                                    │
│   No reports yet                   │
│                                    │
│   Generate your first report to    │
│   analyze your IP portfolio.       │
│                                    │
│   [Generate Report]                │
│                                    │
└────────────────────────────────────┘
```

### No Scheduled Reports

```
┌────────────────────────────────────┐
│                                    │
│        📅                          │
│                                    │
│   No scheduled reports             │
│                                    │
│   Schedule reports to receive      │
│   regular updates automatically.   │
│                                    │
│   [Schedule Report]                │
│                                    │
└────────────────────────────────────┘
```

## Related Patterns

- **[Filtering](../behaviours/filtering.md)** - Report parameter filtering
- **[Table](../behaviours/table.md)** - Report data display
- **[Modal](../behaviours/modal.md)** - Report builder interface
- **[Notification](../behaviours/notification.md)** - Report completion alerts

---

**Related Components:**
- [Button](/components/button.md)
- [Select](/components/select.md)
- [Date Picker](/components/date-picker.md)
- [Checkbox](/components/checkbox.md)
- [Modal](/components/modal.md)
- [Progress](/components/progress.md)
