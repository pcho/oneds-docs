---
title: Shortcut
description: "Documentation for Shortcut component"
---

## Description

Show users the fast way to get things done. Shortcuts display keyboard commands like "⌘K" or "Ctrl+S", helping people discover and remember the key combinations that turn complex actions into instant results. They're your interface's secret menu—visible to all.

## Anatomy

1. **Container** - Shortcut badge or chip
2. **Key Symbol** - Keyboard key representation
3. **Separator** - Plus or space between keys (optional)
4. **Background** - Subtle container background
5. **Border** - Optional outline

## Specification

**Shortcut Badge:**
- **Height**: `24px` (default)
- **Padding**: `spacing-1 spacing-2`
- **Border Radius**: `radius-extra-small`
- **Background**: Light gray (`--bg-fill-lighter`)
- **Border**: `1px solid bdr-default`
- **Font Size**: `text-xs`
- **Font Weight**: `font-weight-emphasized`
- **Font Family**: Monospace or system font
- **Color**: Primary text (`--text-normal`)
- **Gap**: `spacing-1` (between multiple keys)

**Key Representation:**
- **Format**: Use platform symbols (⌘, ⌥, ⌃, ⇧ on Mac)
- **Alternative**: Text labels (Cmd, Ctrl, Alt, Shift)
- **Case**: Capitalize single letters (K, S, N)
- **Special Keys**: Enter, Tab, Esc, Space

**Separator:**
- **Symbol**: `+` or space between keys
- **Example**: `Cmd+K` or `Cmd K`
- **Padding**: `0 spacing-1` around separator

**Sizes:**

**Small:**
- **Height**: `20px`
- **Padding**: `2px 6px`
- **Font Size**: `10px`

**Default (Medium):**
- **Height**: `24px`
- **Padding**: `spacing-1 spacing-2`
- **Font Size**: `text-xs`

**Large:**
- **Height**: `28px`
- **Padding**: `6px 10px`
- **Font Size**: `text-base`

**Variants:**

**Inline:**
- Same line as text
- Subtle background
- Normal font weight

**Prominent:**
- Darker background (`--bg-fill-light`)
- Stronger border
- Bold font weight

**Dark Mode:**
- **Background**: Dark gray (`--text-normal`)
- **Text**: Light gray (`--bg-fill-light`)
- **Border**: Darker border

## Do

- Use platform-specific symbols (⌘ on Mac, Ctrl on Windows)
- Show shortcuts in tooltips and menus
- Keep formatting consistent throughout your interface
- Place shortcuts near their related actions
- Use monospace fonts for better readability
- Group modifier keys with action keys (⌘+K, not ⌘ K)
- Test that displayed shortcuts actually work
- Document all shortcuts in your help section

## Don't

- Show shortcuts that don't actually work
- Use inconsistent formatting across your interface
- Ignore platform differences (Mac vs Windows/Linux)
- Make shortcuts too small to read
- Choose obscure key combinations nobody will remember
- Hide shortcuts for frequently used actions
- Forget to include shortcuts in tooltips

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
Shortcuts appear as permanent visual references—always visible, never interactive, just there to remind users what's possible.

**Contextual Display:**
Shortcuts appear when needed: in tooltips on hover, within menus, or in help overlays. They adapt to context, showing up exactly when users might need them.

**Platform Detection:**
Automatically detect the user's platform and show the right symbols: ⌘ on macOS, Ctrl on Windows/Linux. No manual configuration needed.

### Focus

Shortcuts themselves aren't focusable—they're visual indicators only, with no tab stop or interaction. But when you focus their associated action (like a button), the shortcut appears in tooltips and screen readers announce it. The keyboard command works regardless of whether anything is focused.

### Dismissing

Shortcuts are permanent fixtures—they stay visible as long as their parent element does. The only exception: shortcuts in tooltips or help overlays disappear when those elements close.

### Keyboard Handling

When users press keys, the system captures the combination, matches it against registered shortcuts, executes the action, and prevents the browser's default behavior.

**How it works:**
User presses modifier keys (⌘, Ctrl, Shift) plus an action key → system detects the combination → action executes → visual feedback confirms it happened.
