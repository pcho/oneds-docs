---
title: Date Picker
description: "Documentation for Date Picker component"
---

## Description

The Date Picker is a calendar-based input that transforms date selection from a typing chore into a visual, intuitive experience. Whether picking a single day, a range, or date-times, it's your time-traveling companion for navigating months and years to find exactly the right moment.

## Anatomy

1. **Input Field** - Text input showing selected date
2. **Calendar Icon** - Trigger to open picker
3. **Calendar Dropdown** - Popup calendar interface
4. **Month/Year Header** - Navigation controls
5. **Day Grid** - Selectable date cells
6. **Footer** - Quick actions (Today, Clear, OK) (optional)
7. **Time Picker** - Hour/minute selection for datetime variant (optional)

## Specification

**Input Field:**
- **Width**: `320px` (default, flexible)
- **Height**: `40px`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-small`
- **Padding**: `spacing-2 spacing-3`
- **Background**: `--bg-surface-white`
- **Font Size**: `text-base`
- **Placeholder Color**: `--text-placeholder`

**Calendar Dropdown:**
- **Width**: `280px` (standard calendar)
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border Radius**: `radius-medium`
- **Shadow**: `shadow-medium`
- **Padding**: `spacing-3`

**Calendar Header:**
- **Height**: `40px`
- **Layout**: Horizontal with navigation arrows
- **Gap**: `spacing-2`
- **Font Weight**: `font-weight-semibold` (month/year label)

**Date Cells:**
- **Size**: `32px × 32px`
- **Border Radius**: `radius-extra-small`
- **Gap**: `spacing-1` between cells
- **Font Size**: `text-base`

**Cell States:**
- **Default**: `--text-light`, transparent background
- **Hover**: `--bg-fill-lighter`
- **Selected**: `--bg-fill-brand-normal`, `--text-white`
- **Today**: `--border-brand-normal`
- **Disabled**: `--text-disabled`
- **Range**: `--bg-surface-brand-lighter` for dates in range

**Variants:**
- **Date Picker** - Single date selection
- **Date Range Picker** - Start and end date selection
- **Date Time Picker** - Date with time selection
- **Month Picker** - Month selection only
- **Year Picker** - Year selection only
- **Week Picker** - Week selection

## Do

- Highlight today's date clearly
- Allow keyboard input for faster entry
- Auto-validate date formats
- Provide quick shortcuts (Today, Last 7 days, etc.)
- Show clear visual feedback for selected dates
- Support both calendar selection and manual typing
- Display the expected date format in the placeholder
- Handle invalid dates gracefully with helpful errors

## Don't

- Force users to type complex date formats
- Hide the calendar icon trigger
- Forget to disable invalid date ranges
- Make past dates selectable when they shouldn't be
- Ignore timezone considerations
- Use tiny tap targets on mobile
- Show irrelevant dates (respect min/max boundaries)
- Forget to highlight today

## Uses

**Primary Use Cases:**

1. **Booking & Reservations** - Hotel dates, appointments
2. **Forms** - Birth dates, expiration dates
3. **Filtering** - Date range for reports
4. **Scheduling** - Event planning, deadlines
5. **Patent Filing** - Application dates, priority dates
6. **Analytics** - Date range selection for data
7. **Search** - Filter by date ranges
8. **Timesheets** - Work period selection

## Behavior

### Opening the Picker

1. User clicks input field or calendar icon
2. Calendar dropdown appears below input
3. Current month displayed (or month of existing value)
4. Today's date highlighted
5. Focus moves to calendar

### Selecting a Date

**Single Date:**
1. User clicks date cell
2. Date cell highlights in primary color
3. Input field updates with formatted date
4. Calendar closes automatically

**Date Range:**
1. User clicks start date
2. Start date highlights
3. User hovers over dates (range preview)
4. User clicks end date
5. Range highlights in light primary color
6. Both inputs update
7. Calendar closes

### Navigation

**Month Navigation:**
- Previous/Next arrows to move months
- Click month name to open month picker
- Click year to open year picker
- Keyboard arrows to move between dates

**Keyboard Shortcuts:**
- `Arrow keys` - Navigate dates
- `Enter` - Select focused date
- `Escape` - Close picker without selection
- `Space` - Select focused date
- `Home` - First day of month
- `End` - Last day of month
- `Page Up/Down` - Previous/next month

### States

**Input States:**
- **Empty** - Placeholder text visible
- **Filled** - Selected date displayed
- **Focus** - Border highlighted, calendar opens
- **Disabled** - Grayed out, not interactive
- **Error** - Red border, error message below
- **Valid** - Normal state or success indicator

**Calendar States:**
- **Open** - Visible dropdown
- **Closed** - Hidden
- **Loading** - Skeleton or spinner (for dynamic min/max dates)

### Validation

- Minimum date restrictions
- Maximum date restrictions
- Disabled dates (blackout dates)
- Required field validation
- Format validation for manual entry
- Range validation (end after start)

### Time Selection (DateTime variant)

- Hour/minute spinners or dropdowns
- AM/PM selector for 12-hour format
- 24-hour format option
- "Now" button to set current time
