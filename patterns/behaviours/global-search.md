# Global Search Pattern

## Overview

Global search provides instant access to information across the entire system—one search box to find patents, contacts, documents, and more. Instead of navigating through multiple pages, users can jump directly to what they need with a few keystrokes.

Think of it as your system's command center: press a key, type what you're looking for, and get there instantly.

## When to Use

Use global search when:

- **Large system** - Multiple modules, entities, and data types
- **Quick navigation** - Users need fast access to specific items
- **Cross-entity search** - Search spans patents, contacts, documents, etc.
- **Power users** - Keyboard-first workflows benefit from Cmd+K shortcuts
- **Known-item search** - Users know what they're looking for (ID, name, etc.)
- **Command palette** - Search also triggers actions and navigation

## When Not to Use

Don't use global search when:

- Small, single-purpose applications
- Only one data type exists
- Local search within a page is sufficient
- Search would have limited value

Use regular search or filtering instead for page-specific searches.

## Anatomy

### 1. Search Trigger
- **Search input field** (in header/toolbar)
- **Keyboard shortcut** - Cmd+K (Mac) or Ctrl+K (Windows)
- **Icon** - Magnifying glass
- **Placeholder** - "Search or jump to..." with hint

### 2. Search Overlay/Modal
Full-screen or large centered modal that appears on activation
- **Search input** - Large, prominent search field
- **Suggestions** - Autocomplete as you type
- **Recent searches** - Quick access to previous searches
- **Categories/Scopes** - Filter by entity type
- **Results preview** - Show results inline

### 3. Search Input
- **Icon** - Magnifying glass (left side)
- **Text field** - Large, clear input
- **Keyboard hint** - "Cmd+K" badge
- **Clear button** - × to clear input
- **Loading indicator** - Spinner while searching

### 4. Results Display
- **Categorized results** - Grouped by entity type
- **Result items** - Title, description, metadata
- **Highlighted matches** - Keywords highlighted in results
- **Quick actions** - Icons or buttons per result
- **"View all" links** - See complete results for category

### 5. Empty/Zero States
- **No input** - Recent searches and suggestions
- **No results** - Helpful message and tips
- **Loading** - Skeleton or spinner

## Specification

### Search Trigger (Header Input)

```
Dimensions:
- Width: 240px (collapsed) → 320px (focused)
- Height: 40px
- Padding: 8px 12px
- Border radius: 8px
- Border: 1px solid #D1D6DB

States:
Default:
┌────────────────────────────────────┐
│ 🔍  Search or jump to...  [⌘K]   │
└────────────────────────────────────┘

Focused:
┌────────────────────────────────────┐
│ 🔍  |                        [×]   │
└────────────────────────────────────┘
(Wider, cursor visible, clear button appears)

Placeholder:
- Text: "Search or jump to..."
- Color: Gray (#7E8A96)
- Font size: 14px

Keyboard Hint Badge:
- Position: Right side
- Background: Light gray (#F0F0F0)
- Padding: 2px 6px
- Border radius: 4px
- Text: "⌘K" or "Ctrl+K"
- Font size: 12px
```

### Search Modal/Overlay

```
Dimensions:
- Width: 640px (desktop)
- Max height: 640px (scrollable results)
- Position: Centered on screen
- Top margin: 80px from top (not completely centered)
- Background: White (#FFFFFF)
- Border radius: 12px
- Shadow: Extra large elevation

Backdrop:
- Background: rgba(0, 0, 0, 0.4)
- Blur: Optional backdrop blur

Layout:
┌──────────────────────────────────────┐
│ 🔍  Search input field          [×] │
├──────────────────────────────────────┤
│                                      │
│ [Results or recent searches]         │
│                                      │
│ [Scrollable area]                    │
│                                      │
└──────────────────────────────────────┘

Search Input Area:
- Height: 64px
- Padding: 16px
- Border bottom: 1px solid #ECEEF0
- Input: Full width, 18px font size

Results Area:
- Padding: 16px
- Max height: 520px
- Overflow: Scroll
- Gap: 16px between categories
```

### Search Input (In Modal)

```
Dimensions:
- Height: 48px
- Width: 100% of modal
- Font size: 18px
- Padding: 12px 16px

Components:
┌──────────────────────────────────────────┐
│ 🔍  Patent application...         [⟳] [×]│
└──────────────────────────────────────────┘
   ↑         ↑                        ↑    ↑
 Icon     Input                    Load Clear

Icon: 20px, left side, gray
Input: Large, clear font
Loading: Spinner, 16px, appears while searching
Clear: × icon, 16px, removes all text

States:
- Empty: Placeholder text, no clear button
- Typing: Shows loading after debounce, clear button visible
- Results: Clear button visible
```

### Recent Searches

```
Display: When search input is empty

Layout:
┌──────────────────────────────────────┐
│ Recent                               │
│                                      │
│ 🕐  Patent US2024123456              │
│ 🕐  John Doe (Contact)               │
│ 🕐  Trademark registration           │
│ 🕐  Design patent drawings           │
│                                      │
│ [Clear recent searches]              │
└──────────────────────────────────────┘

Recent Item:
- Height: 40px
- Padding: 8px 16px
- Gap: 12px (icon to text)
- Hover: Light gray background (#F9FAFB)
- Clock icon: 16px, gray

Max shown: 5-8 recent searches
Action: "Clear recent searches" link at bottom
```

### Search Suggestions

```
Display: As user types (debounced 200ms)

Layout:
┌──────────────────────────────────────┐
│ Suggestions                          │
│                                      │
│ 💡 Patent applications               │
│ 💡 Contact: John Doe                 │
│ 💡 Search for "patent"               │
└──────────────────────────────────────┘

Suggestion Item:
- Height: 40px
- Padding: 8px 16px
- Icon: Lightbulb or entity icon
- Text: Suggested search term or entity
- Keyboard: Arrow keys to navigate, Enter to select
```

### Results Display (Categorized)

```
Layout:

Patents (3)                        [View all →]
┌──────────────────────────────────────────┐
│ 📄 US2024123456 - Advanced Widget System │
│    Filed: Jan 15, 2024 • Status: Active  │
├──────────────────────────────────────────┤
│ 📄 US2024123457 - Smart Device Method    │
│    Filed: Jan 20, 2024 • Status: Pending │
├──────────────────────────────────────────┤
│ 📄 US2024123458 - Integrated Circuit...  │
│    Filed: Feb 1, 2024 • Status: Review   │
└──────────────────────────────────────────┘

Contacts (2)                       [View all →]
┌──────────────────────────────────────────┐
│ 👤 John Doe                              │
│    john.doe@example.com • Inventor       │
├──────────────────────────────────────────┤
│ 👤 Jane Smith                            │
│    jane.smith@example.com • Attorney     │
└──────────────────────────────────────────┘

Category Header:
- Font size: 14px
- Font weight: 600
- Color: Gray (#535D67)
- Count: Shows number of results (in parentheses)
- "View all" link: Right-aligned, 14px

Result Item:
- Height: Auto (min 56px)
- Padding: 12px 16px
- Gap: 4px (title to metadata)
- Border radius: 6px
- Hover: Light gray (#F9FAFB)
- Selected (keyboard): Light blue (#EDF1FF)

Result Item Structure:
- Icon: 16px, entity type icon
- Title: 16px, font weight 500, highlighted matches
- Metadata: 14px, gray (#7E8A96), secondary info
- Actions: Right-aligned quick actions (optional)
```

### Result Item with Highlight

```
Display: Search term highlighted in results

Example:
┌──────────────────────────────────────────┐
│ 📄 US2024123456 - Advanced Widget System │
│    Filed: Jan 15, 2024 • Status: Active  │
└──────────────────────────────────────────┘
          ↑
    "Widget" highlighted if searching for "wid"

Highlight Style:
- Background: Yellow (#FFF7E6) or blue (#EDF1FF)
- Font weight: 600 (bold)
- No border
- Smooth transition
```

### Entity Type Icons

```
Icons by Entity:
- 📄 Patent - Document icon
- 👤 Contact - Person icon
- 📁 Document - Folder/file icon
- 🏷️ Trademark - Tag icon
- 🎨 Design - Palette icon
- ⚙️ Settings - Gear icon
- 📊 Report - Chart icon

Size: 16px × 16px
Color: Gray (#535D67) or entity-specific color
Position: Left side of result title
```

### Keyboard Navigation Indicators

```
Display: Subtle indicator showing selected item

Selected Item:
┌──────────────────────────────────────────┐
│ 📄 US2024123456 - Advanced Widget System │ ← Selected
│    Filed: Jan 15, 2024 • Status: Active  │
└──────────────────────────────────────────┘

Style:
- Background: Light blue (#EDF1FF)
- Border left: 3px solid blue (#155EEF) (optional)
- Smooth transition on arrow key navigation

Keyboard hints (footer):
┌──────────────────────────────────────────┐
│ ↑↓ Navigate  ↵ Open  Esc Close         │
└──────────────────────────────────────────┘
Font size: 12px
Color: Gray (#7E8A96)
Padding: 8px 16px
Border top: 1px solid #ECEEF0
```

### Empty States

**No Input (Default):**
```
┌──────────────────────────────────────────┐
│ 🔍  Search input field              [×] │
├──────────────────────────────────────────┤
│                                          │
│ Recent                                   │
│ 🕐  Patent US2024123456                  │
│ 🕐  John Doe (Contact)                   │
│                                          │
│ Quick actions                            │
│ ⚡ Create patent application             │
│ ⚡ Add contact                            │
│ ⚡ Upload document                        │
└──────────────────────────────────────────┘
```

**No Results:**
```
┌──────────────────────────────────────────┐
│ 🔍  patent xyz123                   [×] │
├──────────────────────────────────────────┤
│                                          │
│              🔍                          │
│                                          │
│         No results found                 │
│                                          │
│ Try:                                     │
│ • Checking your spelling                 │
│ • Using different keywords               │
│ • Searching with fewer terms             │
│ • Using patent number format: US2024...  │
│                                          │
└──────────────────────────────────────────┘
```

**Loading:**
```
┌──────────────────────────────────────────┐
│ 🔍  patent application...        [⟳] [×]│
├──────────────────────────────────────────┤
│                                          │
│ Patents                                  │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
│                                          │
│ Contacts                                 │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
└──────────────────────────────────────────┘
Skeleton placeholders while loading
```

## Behavior Patterns

### 1. Opening Search

**Keyboard Shortcut:**

```
User Action:
1. User presses Cmd+K (Mac) or Ctrl+K (Windows)
2. Search modal opens instantly
3. Input is auto-focused
4. Recent searches displayed (if any)
5. Body scroll disabled

Behavior:
- Works from any page
- Interrupts current focus
- Overrides browser default (Cmd+K)
- Provides instant access

Animation:
- Duration: 150ms
- Modal: Fade in + slight scale up (0.95 → 1)
- Backdrop: Fade in
- Focus: Immediate to input field
```

**Click Search Field:**

```
User Action:
1. User clicks search field in header
2. Search modal opens
3. Input focused with existing text (if any)
4. If empty: Show recent searches

Behavior:
- Seamless transition from header to modal
- Preserve any typed text
- Smooth expansion animation
```

### 2. Search Input Behavior

**As User Types:**

```
Behavior:
1. User types character
2. Wait 200ms (debounce)
3. If still typing: Reset timer
4. After 200ms idle: Trigger search
5. Show loading spinner
6. Display results when ready

Debounce Logic:
- Purpose: Reduce API calls, improve performance
- Delay: 200-300ms (configurable)
- Cancel on new keystroke
- Cancel on input clear

States:
Empty → Typing → Debouncing → Loading → Results

Visual Feedback:
- Typing: No indicator yet
- Debouncing: No indicator (too brief)
- Loading: Spinner appears (⟳)
- Results: Spinner disappears, results shown
```

**Autocomplete/Suggestions:**

```
Behavior:
- Show suggestions as user types
- Based on:
  - Recent searches
  - Popular searches
  - Partial matches in database
  - Predicted queries

Display:
┌──────────────────────────────────────────┐
│ Input: "patent app"                      │
├──────────────────────────────────────────┤
│ 💡 patent application                    │ ← Autocomplete suggestion
│ 💡 patent approval                       │
│ 💡 patent appeals                        │
└──────────────────────────────────────────┘

Interaction:
- Arrow keys: Navigate suggestions
- Tab or Right arrow: Accept highlighted suggestion
- Enter: Search for suggestion
- Keep typing: Ignore suggestions
```

**Clear Input:**

```
Trigger: User clicks × button or presses Escape (when input has text)

Behavior:
1. Input text cleared instantly
2. Clear button disappears
3. Loading cancelled (if in progress)
4. Results cleared
5. Show recent searches again
6. Focus remains in input

Animation:
- Text: Fade out (100ms)
- Results: Fade out (150ms)
- Recent searches: Fade in (150ms, after results fade)
```

### 3. Search Results Display

**Instant Results:**

```
Behavior:
- Results appear as user types (debounced)
- Update in real-time
- No "Search" button needed
- Immediate feedback

Categories:
- Show top 3-5 results per category
- Categories with results shown first
- Empty categories hidden or shown collapsed

Example Display Order:
1. Patents (5 results) - Expanded
2. Contacts (2 results) - Expanded
3. Documents (8 results) - Show 3, "View all 8 →"
4. Trademarks (0 results) - Hidden

Relevance Ranking:
- Exact matches first
- Title matches before description
- Recent items boosted
- Frequently accessed items boosted
```

**Categorized Results:**

```
Structure:

Category Header
├─ Result 1 (most relevant)
├─ Result 2
├─ Result 3
└─ "View all X results →" (if more exist)

Category Header:
- Entity type name (Patents, Contacts, etc.)
- Result count in parentheses
- "View all" link if results exceed preview limit

Collapsing (Optional):
- Categories can collapse/expand
- Click header to toggle
- Remember state during session
- Useful for focusing on specific entity types
```

**Highlighted Matches:**

```
Behavior:
- Search terms highlighted in results
- Multiple words: Highlight each occurrence
- Case-insensitive matching
- Highlight in title and description

Example:
Search: "widget"
Result: "Advanced Widget System"
           ↑ Highlighted

Implementation:
- Mark tag: <mark>widget</mark>
- Background: Yellow (#FFF7E6) or blue (#EDF1FF)
- Bold text (font weight 600)
- Accessible (screen reader reads normally)
```

### 4. Keyboard Navigation

**Arrow Key Navigation:**

```
Behavior:
↓ (Down Arrow):
- Move selection to next result
- Wrap to first result at bottom
- Cross category boundaries
- Scroll selected item into view

↑ (Up Arrow):
- Move selection to previous result
- Wrap to last result at top
- Cross category boundaries
- Scroll selected item into view

Visual:
- Selected item: Light blue background (#EDF1FF)
- Smooth transition between items
- Scroll container if needed

Initial Focus:
- On open: Input field focused, no result selected
- First down arrow: Select first result
- Typing: Deselect current result, focus returns to input
```

**Enter Key:**

```
Behavior:
- If result selected: Navigate to that result page
- If no result selected: Perform search with current query
- If suggestion highlighted: Accept suggestion

Navigation:
1. User presses Enter on selected result
2. Modal closes
3. Navigate to result detail page
4. Search query added to recent searches

Animation:
- Modal fade out (150ms)
- Page navigation (instant or loading state)
```

**Escape Key:**

```
Behavior:
First press (if input has text):
- Clear input text
- Show recent searches
- Keep modal open

Second press (if input is empty):
- Close search modal
- Return focus to previous element
- Backdrop fades out

Alternative:
- First Escape always closes modal
- Simplest behavior, matches user expectations
```

**Tab Key:**

```
Behavior:
- Tab through interactive elements in modal
- Input → Results → "View all" links → Close button
- Shift+Tab reverses direction

Focus Trap:
- Tab doesn't leave modal
- Focus cycles within modal
- Prevents focusing page behind modal
```

### 5. Selecting Results

**Click Result:**

```
User Action:
1. User clicks a result item
2. Modal closes (fade out, 150ms)
3. Navigate to result detail page
4. Add to recent searches
5. Loading state shown if needed

Behavior:
- Entire result item is clickable
- Hover: Background changes
- Active: Slight press effect
- Clear visual feedback
```

**Quick Actions:**

```
Display: Icons on right side of result (optional)

Example:
┌──────────────────────────────────────────┐
│ 📄 Patent US2024123456              [👁][⋯]│
│    Filed: Jan 15, 2024 • Status: Active  │
└──────────────────────────────────────────┘
                                      ↑   ↑
                                   View More

Actions:
- View: Quick preview without navigating
- Edit: Open edit modal
- More: Dropdown with additional actions

Interaction:
- Click action: Perform action, keep modal open (or close)
- Hover: Highlight action button
- Keyboard: Tab to focus actions
```

**"View All" Results:**

```
Trigger: Click "View all X results →" link

Behavior:
1. Modal closes
2. Navigate to full search results page
3. Page shows all results for that category
4. Search query and filters applied
5. User can refine further

Example:
Patents (8)                        [View all →]
                                       ↓
Navigate to: /patents?q=widget&view=search

Full page shows all 8 patent results with table view
```

### 6. Recent Searches

**Storing Recent Searches:**

```
Behavior:
- Save last 10-20 searches
- Store: Search query + timestamp + result type (optional)
- Storage: localStorage or user profile (server-side)
- Privacy: User can clear anytime

Trigger:
- User performs search (Enter or clicks result)
- User navigates to result
- Don't save: Partial typing, cleared searches

Format:
{
  query: "patent application",
  timestamp: "2024-02-15T10:30:00Z",
  type: "patent",
  resultCount: 5
}
```

**Displaying Recent Searches:**

```
When: Search modal opens with empty input

Display:
┌──────────────────────────────────────────┐
│ 🔍  Search input                    [×] │
├──────────────────────────────────────────┤
│ Recent                                   │
│                                          │
│ 🕐  Patent US2024123456                  │
│ 🕐  John Doe (Contact)                   │
│ 🕐  Widget trademark                     │
│ 🕐  Design patent drawings               │
│                                          │
│ [Clear recent searches]                  │
└──────────────────────────────────────────┘

Interaction:
- Click recent search: Perform that search again
- Hover: Highlight item
- Keyboard: Arrow keys to select, Enter to search

Metadata (optional):
- Time ago: "2 hours ago"
- Result count: "12 results"
- Entity type: "Patent" badge
```

**Clearing Recent Searches:**

```
Trigger: Click "Clear recent searches" link

Confirmation (Optional):
┌────────────────────────────────────┐
│ Clear recent searches?         [×] │
├────────────────────────────────────┤
│ This will remove all your recent   │
│ search history.                    │
├────────────────────────────────────┤
│         [Cancel]  [Clear]          │
└────────────────────────────────────┘

Behavior:
1. Confirmation modal appears
2. User confirms
3. All recent searches deleted
4. "Recent" section disappears or shows empty state
5. Storage cleared

Alternative:
- Individual × button on each recent search
- Remove one at a time without confirmation
```

### 7. Scoped Search

**Search Within Category:**

```
Feature: Filter results by entity type

UI:
┌──────────────────────────────────────────┐
│ 🔍  patent                          [×] │
│ [All] [Patents] [Contacts] [Documents]   │ ← Tabs/Pills
├──────────────────────────────────────────┤
│ Patents (5)                              │
│ ...results...                            │
└──────────────────────────────────────────┘

Behavior:
- Default: "All" categories
- Click category: Show only that type
- Active category: Highlighted pill
- Results update immediately
- URL updated: ?scope=patents

Quick Filters:
- All: Show everything
- Patents: Patent applications only
- Contacts: People and organizations
- Documents: Files and attachments
- Trademarks: Trademark registrations
- Designs: Design patents
```

**Advanced Filters:**

```
Feature: Filter icon opens filter panel within search

UI:
┌──────────────────────────────────────────┐
│ 🔍  patent                    [🔽] [×] │ ← Filter icon
├──────────────────────────────────────────┤
│ ┌──────────────────────────────────────┐ │
│ │ Status: ☐ Active ☐ Pending ☐ Expired│ │ ← Filter panel
│ │ Date: [Last 30 days ▼]               │ │
│ └──────────────────────────────────────┘ │
│                                          │
│ Patents (5)                              │
│ ...results...                            │
└──────────────────────────────────────────┘

Behavior:
- Click filter icon: Toggle filter panel
- Apply filters: Results update immediately
- Active filters: Badge on filter icon "🔽 (2)"
- Clear filters: "Clear" button in filter panel
```

### 8. Closing Search

**Methods:**

```
1. Escape Key:
   - Press Escape
   - Modal closes
   - Return to previous page state

2. Click Backdrop:
   - Click dark area outside modal
   - Modal closes
   - Return to previous page state

3. Click Close Button:
   - Click × in top-right
   - Modal closes
   - Return to previous page state

4. Select Result:
   - Click or Enter on result
   - Modal closes
   - Navigate to result page

5. Navigation:
   - Browser back button (if URL-based)
   - Modal closes
   - Return to previous page
```

**Close Animation:**

```
Animation:
- Duration: 150ms
- Easing: Ease-in
- Modal: Fade out + slight scale down (1 → 0.95)
- Backdrop: Fade out
- Body scroll: Re-enabled

Focus Management:
- Return focus to trigger element (search field in header)
- Or return to last focused element before search opened
- Announce to screen reader: "Search closed"
```

## Responsive Behavior

### Desktop (≥1024px)

```
Layout:
- Modal: 640px wide, centered
- Height: Max 640px, scrollable
- Results: Show 3-5 per category
- Quick actions: Visible on hover

Keyboard Shortcuts:
- Cmd+K / Ctrl+K: Open search
- Works from any page
```

### Tablet (768px - 1023px)

```
Layout:
- Modal: 90% viewport width, centered
- Height: Max 600px
- Results: Show 3 per category
- Touch-friendly targets (44px minimum)
```

### Mobile (<768px)

```
Layout:
- Full-screen modal
- Search input: Full width
- Results: Full width
- Simplified categories
- No quick actions on results (tap to open)

Search Input:
┌────────────────────────────┐
│ [←] 🔍 Search         [×] │
└────────────────────────────┘
Back button added for mobile

Keyboard:
- Virtual keyboard opens immediately
- Search on typing (no Enter needed)
- Close button prominent

Categories:
- Stack vertically
- Show 2-3 results per category
- "View all" links more prominent
```

## Accessibility

### Keyboard Navigation

**Full Keyboard Support:**

```
Cmd+K / Ctrl+K - Open search (from anywhere)
Tab - Navigate interactive elements
Shift+Tab - Navigate backwards
↑↓ - Navigate results
←→ - Move cursor in input
Enter - Select result or search
Escape - Clear input (first press) or close (second press)
```

**Focus Management:**

```
Opening:
1. Modal opens
2. Focus moves to search input immediately
3. Focus trap activated
4. Body scroll disabled

Navigating:
1. Input always reachable (focus returns on typing)
2. Results navigable with arrows
3. "View all" links tabbable
4. Close button tabbable

Closing:
1. Focus returns to trigger (search field in header)
2. Focus trap released
3. Body scroll re-enabled
4. Announce closure to screen readers
```

### Screen Reader Support

**ARIA Attributes:**

```html
<!-- Search Modal -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="search-title"
  aria-describedby="search-description">

  <h2 id="search-title" class="sr-only">Search</h2>
  <p id="search-description" class="sr-only">
    Search across all patents, contacts, and documents
  </p>

  <!-- Search Input -->
  <div role="search">
    <label for="search-input" class="sr-only">Search query</label>
    <input
      id="search-input"
      type="search"
      aria-autocomplete="list"
      aria-controls="search-results"
      aria-expanded="true"
      aria-activedescendant="result-item-1"
      placeholder="Search or jump to..." />
  </div>

  <!-- Results -->
  <div
    id="search-results"
    role="listbox"
    aria-label="Search results">

    <!-- Category -->
    <div role="group" aria-labelledby="patents-heading">
      <h3 id="patents-heading">Patents (5 results)</h3>

      <!-- Result Item -->
      <div
        id="result-item-1"
        role="option"
        aria-selected="true"
        tabindex="-1">
        <a href="/patents/123">
          Patent US2024123456 - Advanced Widget System
        </a>
      </div>

    </div>
  </div>
</div>
```

**Announcements:**

```
On Open:
"Search dialog opened. Type to search across all content."

While Typing:
"5 results found in patents. 2 results found in contacts."
(Use aria-live="polite" region)

On Result Selection:
"Selected: Patent US2024123456, Advanced Widget System. Press Enter to open."

On No Results:
"No results found for 'patent xyz'. Try different keywords."

On Close:
"Search dialog closed."
```

### Live Regions

```html
<!-- Results Count -->
<div role="status" aria-live="polite" aria-atomic="true">
  <span class="sr-only">
    5 results found in patents, 2 results in contacts
  </span>
</div>

<!-- Loading State -->
<div role="status" aria-live="polite" aria-busy="true">
  <span class="sr-only">Searching...</span>
</div>
```

### Color & Contrast

**Contrast Requirements:**
- All text: 4.5:1 minimum (WCAG AA)
- Selected item background: Clear distinction
- Highlighted search terms: Don't rely on color alone (use bold)
- Icons: 3:1 contrast minimum

**Focus Indicators:**
- Visible focus ring on all interactive elements
- 3:1 contrast ratio for focus indicator
- Clear, consistent focus style

## Best Practices

### Do

- **Make it globally accessible** - Cmd+K works from any page
- **Show recent searches** - Help users quickly repeat common searches
- **Categorize results** - Group by entity type (Patents, Contacts, etc.)
- **Highlight matches** - Make search terms stand out in results
- **Provide autocomplete** - Suggest searches as users type
- **Debounce input** - Wait 200-300ms before searching
- **Show result counts** - "5 results in Patents"
- **Enable keyboard navigation** - Full arrow key support
- **Display metadata** - Show relevant info in results (date, status, etc.)
- **Include quick actions** - Preview, edit without leaving search
- **Support scoped search** - Filter by category
- **Handle empty states** - Helpful messages for no results
- **Preserve recent searches** - Store across sessions
- **Close on selection** - Navigate immediately after choosing result

### Don't

- **Don't require exact matches** - Support partial, fuzzy matching
- **Don't search on every keystroke** - Use debouncing
- **Don't hide categories** - Show all types with results
- **Don't forget mobile** - Full-screen modal on small screens
- **Don't lose context** - User should know where they are
- **Don't make results hard to distinguish** - Clear separation between items
- **Don't forget keyboard shortcuts** - Cmd+K is essential
- **Don't ignore loading states** - Show feedback during search
- **Don't limit result types** - Search across all entities
- **Don't forget to clear** - Easy way to clear input and results

## Related Patterns

- **[Filtering](./filtering.md)** - Advanced filtering within search results
- **[Header](../navigation/header.md)** - Where search trigger typically lives
- **[Modal](./modal.md)** - Search overlay implementation
- **[Table](./table.md)** - Full search results page often shows tables
- **[Common Actions](./common.md)** - Close, Clear behaviors

## Implementation Checklist

- [ ] Cmd+K / Ctrl+K keyboard shortcut works globally
- [ ] Search input in header is accessible
- [ ] Modal opens and closes smoothly
- [ ] Input is auto-focused when modal opens
- [ ] Search debounces after 200-300ms
- [ ] Loading spinner shows during search
- [ ] Results categorized by entity type
- [ ] Search terms highlighted in results
- [ ] Keyboard navigation (arrows, Enter, Escape) works
- [ ] Recent searches stored and displayed
- [ ] Clear input button functions
- [ ] "View all" links navigate to full results
- [ ] Empty states handled (no input, no results)
- [ ] Scoped search / category filters work (if implemented)
- [ ] Quick actions on results (if implemented)
- [ ] Close methods work (Escape, backdrop, × button)
- [ ] Focus returns to trigger on close
- [ ] ARIA attributes properly implemented
- [ ] Screen reader announces results count
- [ ] Screen reader announces loading state
- [ ] Mobile full-screen modal responsive
- [ ] Touch targets meet minimum size (44px)

---

*Pattern identified from Features file analysis showing global search as a system-wide feature. This pattern ensures consistent, powerful search functionality across the entire IP management system.*
