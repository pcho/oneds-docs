---
title: Ai Integration
description: "Documentation for Ai Integration component"
---

# AI Integration Pattern

## Overview

AI integration brings intelligent assistance right into your workflows—helping users draft content, analyze data, suggest actions, and automate tedious tasks. No context switching needed: AI becomes a natural part of the interface, providing help exactly when and where users need it.

This is an emerging pattern, so early standardization ensures consistency across all AI-powered features.

## When to Use

Use AI integration when:

- **Content generation** - Help users write descriptions, summaries, or documentation
- **Data analysis** - Provide insights from complex datasets
- **Suggestions** - Recommend next actions or improvements
- **Automation** - Simplify repetitive tasks with intelligent automation
- **Search enhancement** - Improve search with natural language queries
- **Translation** - Convert between languages or technical formats
- **Classification** - Auto-categorize or tag content
- **Validation** - Check for errors, inconsistencies, or compliance issues

## When Not to Use

Don't use AI when:

- Task is simple and doesn't benefit from AI
- Users need complete control and transparency
- AI suggestions would be more confusing than helpful
- Data privacy/security concerns override benefits
- Cost of AI processing exceeds value provided

## Anatomy

### 1. AI Trigger/Entry Point
- **Button** - "Ask AI" or "AI Assist" button
- **Icon** - Sparkle/star icon (✨) indicating AI
- **Inline** - AI suggestion appears inline contextually
- **Chat icon** - Opens AI assistant panel

### 2. AI Input Interface
- **Prompt field** - Text area for user input
- **Suggestions** - Example prompts or quick actions
- **Context selector** - What data to include
- **Settings** - Tone, length, style options

### 3. AI Response Display
- **Response container** - Shows AI-generated content
- **Streaming** - Text appears as it's generated
- **Formatting** - Markdown, code blocks, lists
- **Actions** - Copy, insert, regenerate, edit

### 4. Feedback Mechanism
- **Thumbs up/down** - Rate response quality
- **Report** - Flag inappropriate or incorrect content
- **Improve** - Provide corrections or feedback
- **History** - Access previous interactions

### 5. Loading States
- **Thinking indicator** - AI is processing
- **Progress** - Estimated time or progress
- **Streaming dots** - Text appearing gradually
- **Skeleton** - Placeholder while loading

## Specification

### AI Trigger Button

```
Dimensions:
- Height: 40px (standard button)
- Padding: spacing-2 spacing-4
- Gap: spacing-2 (icon to text)

Styles:
Primary (Call-to-action):
┌─────────────────┐
│ ✨ Ask AI       │
└─────────────────┘
Background: Purple gradient (#7B61FF → #9B7BFF)
Text: surface-white

Secondary (Subtle):
┌─────────────────┐
│ ✨ Ask AI       │
└─────────────────┘
Background: surface-white
Border: 1px solid purple (#7B61FF)
Text: Purple (#7B61FF)

Icon Only (Compact):
┌────┐
│ ✨ │
└────┘
Size: 40px × 40px
Border radius: radius-medium

AI Indicator:
- Icon: Sparkle ✨ or star ⭐
- Color: Purple (#7B61FF) or gradient
- Animation: Optional subtle pulse or shimmer
- Distinguishable from regular buttons
```

### AI Chat Panel (Side Panel)

```
Dimensions:
- Width: 400px (desktop), full screen (mobile)
- Height: Full viewport height
- Position: Right side (slides in)
- Background: surface-white
- Shadow: Large elevation

Layout:
┌─────────────────────────────────┐
│ ✨ AI Assistant            [×] │ ← Header
├─────────────────────────────────┤
│                                 │
│ [Conversation history...]       │
│                                 │ ← Scrollable
│ User: Help me draft a patent... │   conversation
│                                 │
│ AI: Here's a draft...           │
│                                 │
├─────────────────────────────────┤
│ ┌─────────────────────────────┐ │
│ │ Type your message...        │ │ ← Input area
│ └─────────────────────────────┘ │
│ [Suggestions] [Send]            │
└─────────────────────────────────┘

Header:
- Height: 64px
- Title: "AI Assistant" or feature-specific
- Close button: Right side
- Settings icon: Optional, access AI preferences

Conversation Area:
- Padding: spacing-4
- Max width: 100%
- Scroll: Auto (bottom-anchored)
- Gap: spacing-4 between messages
```

### AI Modal (Focused Task)

```
Dimensions:
- Width: 640px (desktop)
- Height: Auto, max 80vh
- Position: Centered
- Background: surface-white
- Border radius: radius-default
- Shadow: Extra large elevation

Layout:
┌──────────────────────────────────┐
│ ✨ AI Draft Assistant       [×] │
├──────────────────────────────────┤
│                                  │
│ What would you like to draft?   │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ Type your request...         │ │
│ │                              │ │
│ └──────────────────────────────┘ │
│                                  │
│ 💡 Suggestions:                  │
│ • Draft patent description       │
│ • Summarize claims               │
│ • Write inventor bio             │
│                                  │
├──────────────────────────────────┤
│ [Cancel]                [Generate]│
└──────────────────────────────────┘

Use: Single-purpose AI tasks
Example: Generate content, analyze data, get suggestions
```

### AI Message Bubble

```
User Message:
┌──────────────────────────────────┐
│ Help me draft a patent abstract  │ ← User
│ for a smart widget device        │
└──────────────────────────────────┘
Style:
- Align: Right
- Background: Light blue (#EDF1FF)
- Border radius: radius-default radius-default radius-extra-small radius-default
- Padding: spacing-3 spacing-4
- Max width: 80%
- Font size: text-base

AI Response:
┌──────────────────────────────────┐
│ ✨ Here's a draft abstract:      │ ← AI
│                                  │
│ A smart widget device configured │
│ to automatically adjust settings │
│ based on user preferences and... │
│                                  │
│ [👍] [👎] [↻ Regenerate] [Copy] │
└──────────────────────────────────┘
Style:
- Align: Left
- Background: surface-white
- Border: 1px solid --bg-fill-light
- Border radius: radius-default radius-default radius-default radius-extra-small
- Padding: spacing-3 spacing-4
- Max width: 90%
- Font size: text-base
- Shadow: Subtle (optional)

Actions:
- Position: Bottom of message
- Size: 32px × 32px (icon buttons)
- Hover: surface-secondary background
- Gap: spacing-2 between actions
```

### AI Prompt Input

```
Text Area:
- Min height: 48px (single line)
- Max height: 200px (expands as user types)
- Padding: spacing-3 spacing-4
- Border: 1px solid bdr-default
- Border radius: radius-medium
- Font size: text-base
- Placeholder: "Ask AI anything..." or context-specific

With Quick Actions:
┌────────────────────────────────────┐
│ Type your message...               │
│                                    │
└────────────────────────────────────┘
[💡Suggestions] [📎Attach] [⚙️Options] [Send]

Expanded:
┌────────────────────────────────────┐
│ Draft a patent abstract for a     │
│ smart widget that learns user     │
│ preferences...                     │
│                                    │
│                                [⟳]│ ← Character count
│ 245 / 2000                         │   or tokens remaining
└────────────────────────────────────┘
[Clear]                         [Send]
```

### Quick Prompts/Suggestions

```
Display: Before user types or as suggestions

Layout:
┌────────────────────────────────────┐
│ 💡 Try asking:                     │
│                                    │
│ [Draft patent abstract]            │
│ [Summarize prior art]              │
│ [Generate claims]                  │
│ [Check for compliance]             │
└────────────────────────────────────┘

Pill Style:
- Background: surface-secondary
- Padding: spacing-2 spacing-4
- Border radius: 20px (pill shape)
- Hover: Light blue (#EDF1FF)
- Click: Populate prompt input

Grid Layout:
- 2 columns (desktop)
- 1 column (mobile)
- Gap: spacing-2
- Max visible: 4-6 suggestions
```

### AI Loading States

**Thinking/Processing:**

```
While AI generates response:

┌────────────────────────────────────┐
│ ✨ AI is thinking...               │
│ ⋯⋯⋯                                │ ← Animated dots
└────────────────────────────────────┘

or

┌────────────────────────────────────┐
│ ✨ Generating response...          │
│ [████████────────] 60%             │ ← Progress bar
└────────────────────────────────────┘

or (Skeleton):
┌────────────────────────────────────┐
│ ✨                                  │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░      │
│ ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░      │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░      │
└────────────────────────────────────┘

Animation:
- Dots: Bounce or pulse (1s cycle)
- Progress bar: Smooth fill
- Skeleton: Shimmer effect
- Duration: Shows while waiting (no fixed time)
```

**Streaming Response:**

```
Text appears as it's generated (character by character or word by word):

┌────────────────────────────────────┐
│ ✨ A smart widget device that      │
│ automatically adjusts settings     │
│ based on user preferen█            │ ← Cursor blinks
└────────────────────────────────────┘

Cursor:
- Position: At end of current text
- Animation: Blink (500ms interval)
- Color: Purple (#7B61FF) or gray
- Removes when complete
```

### AI Response Actions

```
Action Bar:
[👍] [👎] [↻ Regenerate] [Copy] [Insert] [Edit]

Button Specifications:
- Size: 32px × 32px
- Border radius: radius-small
- Background: Transparent
- Hover: surface-secondary
- Active: Light blue (#EDF1FF)
- Gap: spacing-2 between buttons

Individual Actions:

👍 Thumbs Up:
- Tooltip: "Good response"
- Click: Marks as helpful, icon fills
- Color: fill-success when active

👎 Thumbs Down:
- Tooltip: "Bad response"
- Click: Opens feedback form
- Color: fill-danger when active

↻ Regenerate:
- Tooltip: "Try again"
- Click: Generates new response
- Loading: Spinner replaces icon

📋 Copy:
- Tooltip: "Copy to clipboard"
- Click: Copies text, shows "Copied!" toast
- Icon changes: 📋 → ✓ (brief confirmation)

⬇️ Insert:
- Tooltip: "Insert into document"
- Click: Inserts AI text at cursor position
- Context: Only shows when applicable

✏️ Edit:
- Tooltip: "Edit response"
- Click: Makes response editable
- Shows: Save/Cancel buttons
```

### AI Feedback Form

```
Trigger: Click thumbs down

Modal:
┌────────────────────────────────────┐
│ Help us improve AI              [×]│
├────────────────────────────────────┤
│ What was wrong with this response? │
│                                    │
│ ☐ Inaccurate information           │
│ ☐ Not helpful                      │
│ ☐ Inappropriate content            │
│ ☐ Formatting issues                │
│ ☐ Other                            │
│                                    │
│ Additional details (optional):     │
│ ┌────────────────────────────────┐ │
│ │                                │ │
│ └────────────────────────────────┘ │
│                                    │
├────────────────────────────────────┤
│            [Cancel]  [Submit]      │
└────────────────────────────────────┘

Behavior:
- Submit: Thanks user, closes form
- Feedback: Sent to AI training/review
- Privacy: Note about data usage (optional)
```

### Inline AI Suggestions

```
Context: AI suggests edits/improvements inline

Display:
This is a patent description.
           ✨ AI suggests: application

┌────────────────────────────────────┐
│ ✨ Suggested improvement:          │
│ "patent application" is more       │
│ accurate in this context           │
│                                    │
│ [Accept] [Dismiss]                 │
└────────────────────────────────────┘

Positioning:
- Appears near suggested text
- Popover or tooltip style
- Arrow pointing to relevant text
- Doesn't block content
```

### AI Settings Panel

```
Access: Settings icon in AI header

Options:
┌────────────────────────────────────┐
│ AI Preferences                     │
├────────────────────────────────────┤
│ Response Style:                    │
│ ○ Concise                          │
│ ● Balanced                         │
│ ○ Detailed                         │
│                                    │
│ Tone:                              │
│ [Formal ▼]                         │
│                                    │
│ Language:                          │
│ [English ▼]                        │
│                                    │
│ Context:                           │
│ ☑ Include current patent data     │
│ ☐ Include related documents        │
│                                    │
├────────────────────────────────────┤
│ [Reset]                     [Save] │
└────────────────────────────────────┘
```

## Behavior Patterns

### 1. Opening AI Assistant

**From Button Click:**

```
User Action:
1. User clicks "Ask AI" or AI icon
2. AI panel/modal opens
3. Focus moves to input field
4. Welcome message or suggestions shown

Animation:
- Duration: 300ms
- Panel: Slides in from right (panel) or fades in (modal)
- Backdrop: Fades in (if modal)
- Focus: Immediate to input

Welcome Message (Optional):
┌────────────────────────────────────┐
│ ✨ Hi! I'm your AI assistant.      │
│ How can I help you today?          │
│                                    │
│ 💡 Try asking:                     │
│ • Draft content                    │
│ • Analyze data                     │
│ • Get suggestions                  │
└────────────────────────────────────┘
```

**Contextual Trigger:**

```
Appears based on user action:

Example: User selects text in document
→ AI suggestion appears: "✨ Summarize selection"

Example: User creates new patent
→ AI badge appears: "✨ AI can help draft this"

Behavior:
- Unobtrusive (doesn't block content)
- Dismissible
- Contextually relevant
- Appears with slight delay (500ms) to avoid annoyance
```

### 2. Entering Prompts

**Text Input:**

```
User Types:
1. User types in prompt field
2. Input expands as needed (up to max height)
3. Character count updates (if shown)
4. Send button becomes active when text entered

Auto-resize:
- Starts: Single line (48px height)
- Grows: As user types (up to 200px max)
- Scrolls: If exceeds max height

Quick Prompt Selection:
1. User clicks suggested prompt
2. Prompt populates input field
3. User can edit before sending
4. Or send immediately (configurable)
```

**Voice Input (Optional):**

```
Feature: Speak prompt instead of typing

UI:
[🎤 Speak]  [Type your message...]

Behavior:
1. User clicks microphone button
2. Permission request (first time)
3. Listening indicator appears
4. User speaks prompt
5. Speech-to-text converts to text
6. Text appears in input
7. User can edit before sending

Listening Indicator:
┌────────────────────────────────────┐
│ 🎤 Listening...                    │
│ ⋯⋯⋯ (animated)                     │
└────────────────────────────────────┘

Errors:
- No permission: "Microphone access required"
- No speech detected: "Please try again"
- Conversion error: "Couldn't understand. Please type instead."
```

### 3. AI Processing & Response

**Sending Prompt:**

```
User Action:
1. User clicks Send or presses Enter
2. Prompt sent to AI
3. User message appears in conversation
4. Loading indicator shows
5. Input field clears
6. Ready for next message

Immediate Feedback:
User message appears instantly
AI thinking indicator appears below
```

**Generating Response:**

```
Processing States:

1. Initial:
   ✨ AI is thinking...
   (0-2 seconds)

2. Generating:
   Text streams in character by character
   Cursor blinks at end
   User can see response forming

3. Complete:
   Full response visible
   Cursor disappears
   Action buttons appear

Streaming Example:
┌────────────────────────────────────┐
│ ✨ A smart widget device that      │
│ automatically adjusts settings█    │
└────────────────────────────────────┘
(Text continues to appear)

Duration:
- Depends on response length
- Typically 2-10 seconds
- User sees progress (streaming)
- Can stop/cancel (optional)
```

**Error Handling:**

```
If AI request fails:

┌────────────────────────────────────┐
│ ⚠️ Sorry, something went wrong     │
│                                    │
│ Unable to generate response.       │
│ Please try again.                  │
│                                    │
│ [Retry] [Dismiss]                  │
└────────────────────────────────────┘

Error Types:

Timeout:
"AI is taking longer than expected. Try again?"

Rate Limit:
"Too many requests. Please wait 30 seconds."

Content Policy:
"This request cannot be completed. Please rephrase."

Network Error:
"Connection lost. Check your internet and retry."

Behavior:
- Show friendly error message
- Provide retry option
- Don't lose user's prompt
- Log error for debugging
```

### 4. Interacting with Response

**Copying Response:**

```
User Action:
1. User clicks Copy button
2. Text copied to clipboard
3. Button shows checkmark briefly
4. Toast notification: "Copied to clipboard"

Button States:
Default: [📋 Copy]
Copying: [⟳]
Success: [✓ Copied] (2 seconds)
Back to: [📋 Copy]
```

**Inserting into Document:**

```
Context: User is editing document

User Action:
1. User clicks Insert button
2. AI response inserted at cursor position
3. Inserted text highlighted (brief)
4. AI panel remains open (or closes, configurable)
5. Toast: "Content inserted"

Behavior:
- Respects current formatting
- Maintains document state (undo/redo)
- Cursor moves to end of inserted text
- Optional: Show inline edit controls
```

**Regenerating Response:**

```
User Action:
1. User clicks Regenerate (↻)
2. Previous response dims or hides
3. Loading indicator shows
4. New response generates
5. Previous response available in history (optional)

Use Cases:
- User doesn't like first response
- Want different perspective
- Request was vague, want alternative

Behavior:
- Uses same prompt
- May apply different AI parameters
- Show "Attempt 2 of 3" indicator (optional)
- Limit regenerations to prevent abuse
```

**Editing Response:**

```
User Action:
1. User clicks Edit button
2. Response becomes editable textarea
3. User modifies text
4. Save/Cancel buttons appear
5. User saves → Updated text displayed
6. Or cancels → Original text restored

Edited State:
┌────────────────────────────────────┐
│ ✨ [Modified text...]              │
│                                    │
│ ✏️ Edited by you                   │
│ [👍] [👎] [Copy]                   │
└────────────────────────────────────┘
```

### 5. Feedback Collection

**Thumbs Up:**

```
User Action:
1. User clicks thumbs up (👍)
2. Icon fills/highlights (green)
3. Optional: Brief "Thanks!" message
4. Feedback recorded

Purpose:
- Indicates helpful response
- Trains AI model
- Tracks AI performance

Optional Follow-up:
┌────────────────────────────────────┐
│ Glad that helped! 🎉               │
│ What did you find most useful?     │
│ [Accuracy] [Speed] [Clarity]       │
└────────────────────────────────────┘
```

**Thumbs Down:**

```
User Action:
1. User clicks thumbs down (👎)
2. Feedback form opens
3. User selects issues and provides details
4. Submits feedback
5. Thanks message shown

Form: (See AI Feedback Form in Specification)

Importance:
- Identifies AI problems
- Improves future responses
- Flags policy violations
- Critical for AI quality
```

### 6. Conversation History

**Persistent Conversation:**

```
Behavior:
- Each AI session maintains history
- Scroll up to see previous messages
- New messages append to bottom
- Auto-scroll to latest message

Context Awareness:
- AI remembers conversation context
- Can reference previous messages
- "Building on my previous suggestion..."

Example:
User: "Draft a patent abstract"
AI: "Here's a draft abstract..."
User: "Make it more concise"
AI: "Here's a shorter version..." ← Knows context

Limits:
- Store last 10-20 messages
- Clear on panel close (or persist, configurable)
- "Start new conversation" button to clear
```

**Conversation History Panel:**

```
Feature: Access past AI conversations

UI:
┌────────────────────────────────────┐
│ ✨ AI Assistant            [⋮]    │ ← Menu
├────────────────────────────────────┤
│ [Menu ▼]                           │
│ • Current conversation             │
│ • View history                     │
│ • Start new                        │
│ • Settings                         │
└────────────────────────────────────┘

History View:
┌────────────────────────────────────┐
│ ← Back to chat                     │
├────────────────────────────────────┤
│ Conversation History               │
│                                    │
│ Today                              │
│ • Patent abstract draft - 2:30 PM  │
│ • Prior art analysis - 11:15 AM    │
│                                    │
│ Yesterday                          │
│ • Claims review - 4:45 PM          │
│ • Inventor bio - 9:00 AM           │
└────────────────────────────────────┘

Click conversation: Loads that history
```

### 7. AI Suggestions (Proactive)

**Trigger:**

```
AI suggests actions based on context:

Example: User viewing patent with incomplete fields
→ AI badge appears: "✨ AI can help complete this"

Example: User reading long document
→ Floating button: "✨ Summarize with AI"

Example: User typing description
→ Inline suggestion: "AI suggests: [better phrasing]"

Timing:
- Delay: 2-3 seconds after user action
- Avoids: Immediately interrupting workflow
- Dismissible: User can close without affecting work
```

**Inline Autocomplete:**

```
As user types, AI suggests completions:

User types: "The smart widget includes a proc"
AI suggests: "...essor configured to..."
                 ← Gray, italicized suggestion

Interaction:
- Tab or → to accept
- Keep typing to ignore
- Esc to dismiss

Visual:
User text: Normal weight, black
AI suggestion: Light weight, gray, italic
Blend seamlessly in-line
```

### 8. Closing AI Assistant

**Methods:**

```
1. Click × button in header
2. Press Escape key
3. Click backdrop (if modal)
4. Complete task and auto-close (configurable)

Animation:
- Duration: 250ms
- Panel: Slides out to right
- Modal: Fades out + scales down slightly
- Backdrop: Fades out

State:
- Conversation: Saved (or cleared, configurable)
- Input: Cleared
- Focus: Returns to trigger or previous focus
```

**Session Persistence:**

```
Option 1: Clear on close
- Conversation history lost
- Fresh start next time
- Use: Privacy-focused, temporary help

Option 2: Persist conversation
- Conversation saved
- Resume on next open
- Use: Ongoing tasks, multi-session work

Implementation:
- Store in session/local storage
- Or user account (server-side)
- "Clear conversation" option available
```

## Responsive Behavior

### Desktop (≥1024px)

```
Layout:
- Side panel: 400px width, slides from right
- OR Modal: 640px centered
- Full AI features available
- Keyboard shortcuts supported
```

### Tablet (768px - 1023px)

```
Layout:
- Side panel: 360px width
- OR Modal: 90% width
- Touch-friendly controls (44px minimum)
- Slightly simplified interface
```

### Mobile (<768px)

```
Layout:
- Full-screen modal/panel
- Bottom sheet (alternative)
- Input at bottom (like chat app)
- Larger touch targets
- Simplified suggestions (fewer shown)

Mobile-Specific:
- Virtual keyboard opens immediately
- Voice input more prominent
- Swipe down to close
- Native app feel
```

## Accessibility

### Keyboard Navigation

```
Tab - Navigate interactive elements
Enter - Send message, activate buttons
Escape - Close AI panel/modal
Cmd+K - Open AI assistant (if global shortcut)
Arrow up - Edit last message (optional)
Arrow down - Navigate suggestions
```

### Focus Management

```
Opening:
1. AI panel opens
2. Focus moves to input field immediately
3. Screen reader announces panel

Navigating:
1. Tab through interactive elements
2. Messages not focusable (text content)
3. Action buttons focusable

Closing:
1. Focus returns to trigger button
2. Or previous focused element
3. Screen reader announces closure
```

### Color & Contrast

**Contrast Requirements:**
- All text: 4.5:1 minimum
- Icons: 3:1 minimum
- AI indicator (purple): Distinguishable from primary blue
- Focus indicators: 3:1 contrast, clear visibility

**Don't Rely on Color:**
- AI vs user messages: Position + label, not just color
- Loading state: Animation + text, not just spinner
- Feedback: Icons + text ("Thumbs up" not just 👍)
- Success/error: Icons + text + color

## Best Practices

### Do

- **Make AI optional** - Never force users to use AI
- **Show loading states** - Streaming, thinking indicators
- **Provide feedback mechanisms** - Thumbs up/down, report
- **Be transparent** - Label AI content clearly
- **Allow editing** - Users can modify AI suggestions
- **Give context** - Explain what AI can/can't do
- **Handle errors gracefully** - Clear messages, retry options
- **Respect privacy** - Clear about data usage
- **Test thoroughly** - AI can be unpredictable
- **Provide examples** - Quick prompts, sample queries
- **Support keyboard** - Full keyboard navigation
- **Make it discoverable** - Clear AI entry points
- **Save conversation** - History for reference (optional)

### Don't

- **Don't trust AI blindly** - Always allow user review/editing
- **Don't hide AI usage** - Disclose when content is AI-generated
- **Don't block workflows** - AI should assist, not obstruct
- **Don't forget errors** - Handle failures gracefully
- **Don't overwhelm** - Limit proactive suggestions
- **Don't use tiny text** - AI responses must be readable
- **Don't forget mobile** - Adapt interface for touch
- **Don't ignore feedback** - Act on user ratings and reports
- **Don't generate sensitive data** without safeguards
- **Don't make it mandatory** - Users should have choice
- **Don't forget loading states** - Always show progress
- **Don't lose user input** - Preserve prompts on errors

## Related Patterns

- **[Modal](../behaviours/modal.md)** - AI modal implementation
- **[Drawer](../behaviours/drawer.md)** - AI side panel
- **[Notification](../behaviours/notification.md)** - AI success/error feedback
- **[Global Search](../behaviours/global-search.md)** - AI-enhanced search

## Implementation Checklist

- [ ] AI trigger button clearly labeled and discoverable
- [ ] AI indicator (sparkle icon) consistently used
- [ ] Panel/modal opens and closes smoothly
- [ ] Input field auto-focuses on open
- [ ] Quick prompt suggestions provided
- [ ] Loading state shows while AI processes
- [ ] Response streams in (appears gradually) or shows skeleton
- [ ] Action buttons (copy, regenerate, etc.) functional
- [ ] Thumbs up/down feedback mechanism works
- [ ] Feedback form captures detailed input
- [ ] Error states handled with clear messages
- [ ] Retry option available on errors
- [ ] Conversation history maintained (if applicable)
- [ ] Settings panel allows customization
- [ ] Inline suggestions dismissible
- [ ] Voice input works (if implemented)
- [ ] Keyboard navigation fully supported
- [ ] Escape key closes AI panel
- [ ] ARIA attributes properly implemented
- [ ] Screen reader announces AI responses
- [ ] Focus management handles open/close
- [ ] Mobile responsive (full screen or bottom sheet)
- [ ] Touch targets meet 44px minimum
- [ ] Privacy/data usage disclosed
- [ ] AI-generated content clearly labeled

---

*Emerging pattern identified from Features file analysis. Early standardization ensures consistency as AI features are implemented across the IP management system. This pattern will evolve as AI capabilities expand and user feedback is collected.*
