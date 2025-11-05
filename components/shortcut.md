## Description

Shortcut is a visual representation of keyboard commands—those magical key combinations that let power users fly through tasks. Displaying shortcuts like "⌘K" or "Ctrl+S" helps users discover and remember keyboard commands, transforming complex actions into simple keystrokes. They're the roadmap to efficiency.

## Anatomy

1. **Container** - Shortcut badge or chip
2. **Key Symbol** - Keyboard key representation
3. **Separator** - Plus or space between keys (optional)
4. **Background** - Subtle container background
5. **Border** - Optional outline

## Specification

**Shortcut Badge:**
- **Height**: `24px` (default)
- **Padding**: `4px 8px`
- **Border Radius**: `4px`
- **Background**: Light gray (`#F5F5F5`)
- **Border**: `1px solid #D1D6DB`
- **Font Size**: `12px`
- **Font Weight**: 500 (medium)
- **Font Family**: Monospace or system font
- **Color**: Primary text (`#262626`)
- **Gap**: `4px` (between multiple keys)

**Key Representation:**
- **Format**: Use platform symbols (⌘, ⌥, ⌃, ⇧ on Mac)
- **Alternative**: Text labels (Cmd, Ctrl, Alt, Shift)
- **Case**: Capitalize single letters (K, S, N)
- **Special Keys**: Enter, Tab, Esc, Space

**Separator:**
- **Symbol**: `+` or space between keys
- **Example**: `Cmd+K` or `Cmd K`
- **Padding**: `0 4px` around separator

**Sizes:**

**Small:**
- **Height**: `20px`
- **Padding**: `2px 6px`
- **Font Size**: `10px`

**Default (Medium):**
- **Height**: `24px`
- **Padding**: `4px 8px`
- **Font Size**: `12px`

**Large:**
- **Height**: `28px`
- **Padding**: `6px 10px`
- **Font Size**: `14px`

**Variants:**

**Inline:**
- Same line as text
- Subtle background
- Normal font weight

**Prominent:**
- Darker background (`#E8E8E8`)
- Stronger border
- Bold font weight

**Dark Mode:**
- **Background**: Dark gray (`#262626`)
- **Text**: Light gray (`#E8E8E8`)
- **Border**: Darker (`#404040`)

## Do

- Use platform-specific symbols (⌘ on Mac, Ctrl on Windows)
- Show shortcuts in tooltips and menus
- Use consistent formatting throughout
- Display shortcuts near related actions
- Use monospace font for clarity
- Group modifier keys + action key
- Test shortcuts work as displayed
- Document shortcuts in help section

## Don't

- Don't show fake shortcuts (that don't work)
- Don't use inconsistent formatting
- Don't forget platform differences
- Don't make shortcuts too small to read
- Don't use obscure key combinations
- Don't hide shortcuts for common actions
- Don't forget to show shortcuts in tooltips

## Uses

**Primary Use Cases:**

1. **Menu Items** - Show shortcuts next to menu commands
2. **Tooltips** - Display shortcuts in button tooltips
3. **Help Documentation** - Document keyboard shortcuts
4. **Onboarding** - Teach users keyboard commands
5. **Command Palette** - Show shortcuts in search results
6. **Forms** - Indicate submit shortcuts (Enter)
7. **Modal Dialogs** - Show close shortcut (Esc)
8. **Shortcut Reference** - Keyboard shortcut cheat sheet

**Example Scenarios:**

**Menu Item:**
```
File Menu:
┌─────────────────────────────┐
│ New File          ⌘N        │
│ Open File...      ⌘O        │
│ Save              ⌘S        │
│ Save As...        ⇧⌘S       │
└─────────────────────────────┘
```

**Button Tooltip:**
```
        [Search]
           ↓
    Search patents
      ⌘K or Ctrl+K
```

**Inline Documentation:**
```
Press ⌘K to open search, or ⌘P for quick actions.
```

**Shortcut Cheat Sheet:**
```
Keyboard Shortcuts

Navigation:
  ⌘K  Search
  ⌘P  Command palette
  ⌘/  Show shortcuts

Editing:
  ⌘S  Save
  ⌘Z  Undo
  ⇧⌘Z Redo
```

**Dialog:**
```
┌─────────────────────────────┐
│ Delete Patent Application?  │
│                             │
│ This action cannot be       │
│ undone.                     │
│                             │
│  [Cancel]   [Delete]    Esc │
└─────────────────────────────┘
```

## Behavior

### Display

**Static Display:**
- Always visible
- No interaction
- Visual reference only
- Not clickable

**Contextual Display:**
- Show in tooltips on hover
- Appear in menus
- Display in help overlays
- Context-sensitive

**Platform Detection:**
- Show ⌘ on macOS
- Show Ctrl on Windows/Linux
- Detect platform automatically
- Use correct symbols

### Focus

**Shortcuts are not focusable:**
- Visual indicators only
- No tab stop
- Not interactive
- Keyboard shortcuts work regardless

**Associated Action Focus:**
- When button focused, tooltip shows shortcut
- Screen reader reads shortcut
- Shortcut works when element focused

### Dismissing

**Shortcuts don't dismiss:**
- Static visual elements
- Always visible when parent visible
- Tooltip shortcuts dismiss with tooltip
- Help overlays close with overlay

### Keyboard Handling

**Shortcut Detection:**
- Capture key combination
- Match against registered shortcuts
- Execute associated action
- Prevent default if matched

**Key Sequence:**
1. User presses modifier key(s)
2. User presses action key
3. System detects combination
4. Action executes
5. Visual feedback provided

## Accessibility

**Semantic HTML:**
```html
<button aria-label="Search (Command K or Control K)">
  Search
  <kbd class="shortcut">
    <kbd>⌘</kbd>
    <kbd>K</kbd>
  </kbd>
</button>
```

**With Aria:**
```html
<!-- Menu item -->
<button
  role="menuitem"
  aria-keyshortcuts="Meta+K">
  <span>Search</span>
  <span class="shortcut" aria-hidden="true">⌘K</span>
</button>
```

**ARIA Attributes:**
- `aria-keyshortcuts` on actionable element
- Format: "Meta+K", "Control+S", "Alt+Shift+D"
- `aria-hidden="true"` on visual shortcut display (read in label instead)
- `aria-label` includes shortcut in natural language

**Screen Reader Support:**
- Read shortcut as part of button/menu item label
- Announce in natural language: "Search, Command K"
- Don't just read symbols: "Command K" not "symbol K"
- Include platform-specific instructions

**Keyboard Shortcuts:**
```html
<div aria-label="Press Command K to search">
  <kbd aria-hidden="true">⌘K</kbd>
</div>
```

**Platform Announcements:**
- macOS: "Command Option Shift K"
- Windows: "Control Alt Shift K"
- Detect platform, announce correctly

**Focus Management:**
- Shortcuts themselves not focusable
- Parent element remains focusable
- Shortcut works from anywhere (usually)
- Global vs. local shortcuts

**Documentation:**
- Provide shortcut reference sheet
- Accessible via keyboard
- Searchable shortcuts list
- Screen reader friendly help

**Visual + Text:**
- Symbol displayed visually (⌘)
- Text read by screen readers ("Command")
- Both methods supported

**Key Symbol Mapping:**
```
Visual → Screen Reader
⌘      → Command (macOS)
⌃      → Control
⌥      → Option (macOS) / Alt
⇧      → Shift
⏎      → Enter
⎋      → Escape
⇥      → Tab
```

**Color & Contrast:**
- Shortcut text meets 4.5:1 contrast
- Background provides sufficient contrast
- Don't rely on color alone
- Clear separation from surrounding text

**Touch Devices:**
- Shortcuts less relevant on touch
- Hide shortcuts on mobile (optional)
- Show only when physical keyboard detected
- Provide touch alternatives

**Conflicting Shortcuts:**
- Avoid browser/OS shortcut conflicts
- Document conflicts clearly
- Provide alternatives
- Allow customization (advanced)

**Shortcut Scope:**
- Global shortcuts work anywhere
- Local shortcuts work in context
- Announce scope to users
- Clear documentation

**Custom Shortcuts:**
- Allow users to customize (optional)
- Save preferences
- Reset to defaults option
- Validation for conflicts

**Help Dialog:**
```html
<dialog aria-labelledby="shortcuts-title">
  <h2 id="shortcuts-title">Keyboard Shortcuts</h2>

  <section>
    <h3>Navigation</h3>
    <dl>
      <dt>Search</dt>
      <dd>
        <kbd>⌘K</kbd>
        <span class="sr-only">Command K</span>
      </dd>

      <dt>Quick Actions</dt>
      <dd>
        <kbd>⌘P</kbd>
        <span class="sr-only">Command P</span>
      </dd>
    </dl>
  </section>

  <button>Close</button>
</dialog>
```

**Responsive:**
- Smaller shortcuts on mobile
- Hide in tight spaces
- Show in tooltips instead
- Prioritize important shortcuts

**Internationalization:**
- Keyboard layouts vary
- Document shortcuts clearly
- Consider QWERTY vs others
- Provide alternatives

**Consistency:**
- Use same format throughout app
- Match platform conventions
- Follow OS guidelines
- Consistent separator (+ vs space)
