## Description

Date Picker is a calendar-based input control that lets users select dates with ease. Whether picking a single day, a range, or even date-times, this component transforms date selection from a typing chore into a visual, intuitive experience. It's the time-traveling companion that helps users navigate through months and years to find exactly the moment they need.

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
- **Border**: `1px solid #D1D6DB`
- **Border Radius**: `6px`
- **Padding**: `8px 12px`
- **Background**: White (`#FFFFFF`)
- **Font Size**: `14px`
- **Placeholder Color**: `#BFBFBF`

**Calendar Dropdown:**
- **Width**: `280px` (standard calendar)
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border Radius**: `8px`
- **Shadow**: Medium elevation
- **Padding**: `12px`

**Calendar Header:**
- **Height**: `40px`
- **Layout**: Horizontal with navigation arrows
- **Gap**: `8px`
- **Font Weight**: 600 (month/year label)

**Date Cells:**
- **Size**: `32px � 32px`
- **Border Radius**: `4px`
- **Gap**: `4px` between cells
- **Font Size**: `14px`

**Cell States:**
- **Default**: Gray text (`#535D67`), transparent background
- **Hover**: Light gray background (`#F5F5F5`)
- **Selected**: Primary color background (`#155EEF`), white text
- **Today**: Primary color border
- **Disabled**: Light gray text (`#D1D6DB`)
- **Range**: Light primary background for dates in range

**Variants:**
- **Date Picker** - Single date selection
- **Date Range Picker** - Start and end date selection
- **Date Time Picker** - Date with time selection
- **Month Picker** - Month selection only
- **Year Picker** - Year selection only
- **Week Picker** - Week selection

## Do

- Show current date/today highlighted
- Allow keyboard input for dates
- Validate date formats automatically
- Provide quick shortcuts (Today, Last 7 days, etc.)
- Show clear visual feedback for selected dates
- Support both calendar and manual input
- Display date format in placeholder
- Handle invalid dates gracefully

## Don't

- Don't make users type complex date formats
- Don't hide the calendar icon trigger
- Don't forget to disable invalid date ranges
- Don't make past dates selectable when inappropriate
- Don't forget timezone considerations
- Don't use tiny tap targets on mobile
- Don't show irrelevant dates (respect min/max dates)
- Don't forget to show which date is "today"

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

**Example Scenarios:**

**Single Date Selection:**
```
Filing Date: [MM/DD/YYYY] =�
             � Opens calendar
             � Select: January 15, 2024
             � Input shows: 01/15/2024
```

**Date Range Picker:**
```
Patent Search Range:
From: [01/01/2024] =�  To: [01/31/2024] =�
      � Select start date
      � Dates between highlighted
      � Select end date
```

**Quick Shortcuts:**
```
=� Date Range Picker

   Quick Ranges:
   " Today
   " Last 7 days
   " Last 30 days
   " This month
   " Last month
   " Custom range...
```

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

## Accessibility

**Semantic HTML:**
- Use `<input type="text">` with `role="combobox"`
- Calendar dropdown has `role="dialog"` or `role="grid"`
- Date cells use `role="button"` or `role="gridcell"`

**ARIA Attributes:**
```html
<div class="date-picker">
  <input
    type="text"
    role="combobox"
    aria-label="Select date"
    aria-expanded="false"
    aria-controls="calendar-dropdown"
    aria-describedby="date-format-hint"
    placeholder="MM/DD/YYYY">

  <button
    aria-label="Open calendar"
    aria-haspopup="dialog">
    =�
  </button>

  <div
    id="calendar-dropdown"
    role="dialog"
    aria-label="Choose date"
    aria-modal="true"
    hidden>
    <!-- Calendar grid -->
  </div>
</div>
```

**Keyboard Navigation:**
- `Tab` - Move to/from date picker
- `Enter/Space` - Open calendar
- `Arrow keys` - Navigate calendar dates
- `Page Up/Down` - Navigate months
- `Home/End` - First/last day of month
- `Escape` - Close calendar

**Screen Reader Support:**
- Announce selected date clearly
- Announce month/year when navigating
- Announce disabled dates and why
- Announce "Today" date
- Read date format hint
- Announce range selection (start and end)

**Focus Management:**
- Clear focus indicator on calendar
- Focus moves to calendar when opened
- Focus returns to input when closed
- Focus on selected date when calendar opens
- Focus trap within calendar modal

**Date Format:**
- Show date format clearly in placeholder or hint
- Support localized date formats
- Allow flexible input (e.g., "1/5/24" � "01/05/2024")
- Announce format to screen readers

**Color & Contrast:**
- Selected date meets 3:1 contrast (non-text)
- Text meets 4.5:1 minimum contrast
- Don't rely on color alone for states
- Today date uses both color and border
- Disabled dates distinguishable

**Touch Targets:**
- Minimum 44�44px for date cells on mobile
- Adequate spacing between dates
- Large enough navigation arrows
- Swipe gestures for month navigation (optional)

**Responsive:**
- Full-width input on mobile
- Calendar optimized for small screens
- Large touch targets
- Simplified navigation on mobile
- Consider native date pickers on mobile devices

**Time Zones:**
- Clearly indicate timezone if relevant
- Allow timezone selection if needed
- Display dates in user's local time
- Handle daylight saving time transitions
