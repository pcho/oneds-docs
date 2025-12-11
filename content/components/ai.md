---
title: Ai
description: "Documentation for Ai component"
---

## Description

AI is your complete chat interface system for AI-powered conversations. Users can ask questions, get AI responses, and interact with smart features like tool calls, search history, and contextual actions. It supports everything from full chat interfaces to message bubbles, history panels, and dropdown menus.

Think of it as home base for your AI assistant—complete with chat bubbles, action buttons, thinking indicators, and conversation history. Built to make AI interactions feel natural.

## Anatomy

### Core Components

1. **AI Chat** - The main container that houses the entire AI experience
   - Header (gradient, default, or history variants)
   - Content area (chat, contacts, export, start, or history views)
   - Message bubbles for user and AI responses
   - Input field with multiple states

2. **AI Bubble** - Individual message containers
   - User bubble (rounded on all corners except bottom-right)
   - Response bubble (includes thinking state and actions)
   - Background color: `--bg-fill-lighter`
   - Border radius: `radius-default radius-default radius-extra-small radius-default`

3. **AI Actions** - Action button row
   - Edit (pencil icon)
   - Copy (copy icon)
   - Regenerate (arrows-rotate icon)
   - Thumbs up (feedback positive)
   - Thumbs down (feedback negative)
   - Icon size: `.75x` (15×15px)
   - Gap between icons: `4px`

4. **AI Thinking** - Loading indicator
   - Spinner icon (`.75x`)
   - "Thinking..." text in `Typography/Body/400/Small`
   - Text color: `--text-lighter`

5. **AI Input Field** - Message input with three states
   - Default: `--bg-fill-lighter` background
   - Hover: Same background with visual feedback
   - Active: AI gradient background
   - Border radius: `radius-default`
   - Padding: `spacing-1.5`

6. **AI Tool Calls** - Tool execution status display
   - Processing variant (loading state)
   - Finished variant (success state)
   - Error variant (error state)
   - Background: `--bg-surface-white`
   - Border: `--border-lighter`
   - Border radius: `radius-default`
   - Padding: `spacing-4`
   - Gap: `spacing-3`

7. **AI History** - Conversation history panel
   - Search input field at the top
   - Clickable history title items
   - Dividers between items
   - History title padding: `spacing-2`
   - Background: `--bg-surface-white`
   - Border radius: `radius-medium`

8. **AI Header** - Three header variants
   - Gradient: Linear gradient from `--bg-surface-white` to transparent
   - Default: `--bg-surface-white` background with bottom border
   - History: `--bg-surface-white` background with search functionality
   - Padding: `spacing-4 spacing-4 spacing-9` (gradient), `spacing-4` (history)

9. **AI Content** - Multiple content views
   - Chat view (conversational interface)
   - Contacts view (contact management)
   - Export view (export functionality)
   - Start view (getting started screen)
   - History view (conversation history)
   - Padding: `spacing-4`

10. **AI Dropdown Menu** - Contextual options menu
    - Background: `--bg-surface-white`
    - Dropdown items component

11. **AI Map** - Map integration feature
    - Vertical button arrangement
    - Map frame container
    - Gap: `spacing-4`

## Specification

### AI Chat Container
- **Dimensions**: `494px × 1045px`
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border radius**: `radius-default`
- **Shadow**: `shadow-floating`
- **Padding**: `spacing-4`
- **Gap**: `spacing-4`

### AI Bubble (User Message)
- **Width**: `400px` (auto height)
- **Background**: `--bg-fill-lighter`
- **Border**: `--border-lighter`
- **Border radius**: `radius-default radius-default radius-extra-small radius-default` (rounded except bottom-right)
- **Padding**: `spacing-3 spacing-4`
- **Alignment**: Right-aligned

### AI Bubble (Response)
- **Width**: `400px` (auto height)
- **Background**: Dynamic based on content
- **Gap**: `spacing-2` between elements
- **Includes**: Thinking indicator (when processing), content, action row

### AI Input Field
- **Width**: `480px` (auto height)
- **Padding**: `spacing-1.5`
- **Gap**: `spacing-2.5`
- **Border radius**: `radius-default`
- **Background**:
  - Default/Hover: `--bg-fill-lighter`
  - Active: AI gradient

### AI Actions
- **Layout**: Horizontal row
- **Gap**: `spacing-1`
- **Icon size**: `15×15px`
- **Icons**: Line variant, square spacing, `.75x` size

### AI Thinking
- **Layout**: Horizontal row
- **Gap**: Between icon and text (minimal)
- **Icon**: Spinner, solid variant, `.75x` size (18×18px)
- **Text**: "Thinking..." in `Typography/Body/400/Small`, color `--text-lighter`

### AI Tool Calls
- **Width**: `439px` (auto height)
- **Layout**: Horizontal row
- **Padding**: `spacing-4`
- **Gap**: `spacing-3`
- **Background**: `--bg-surface-white`
- **Border**: `--border-lighter`
- **Border radius**: `radius-default`

### AI History Title
- **Width**: Auto (auto height)
- **Padding**: `spacing-2`
- **Background**: `--bg-surface-white`
- **Border radius**: `radius-medium`
- **Typography**: `Typography/Body/400/Default`
- **Text color**: `--text-light`

### AI Header
- **Width**: `486px`
- **Gradient variant**:
  - Height: `125px`
  - Padding: `spacing-4 spacing-4 spacing-9`
  - Background: Linear gradient (180deg, `--bg-surface-white` 50% → transparent 100%)
- **Default variant**:
  - Height: `64px`
  - Padding: `spacing-4 spacing-4 spacing-9`
  - Border bottom: `--border-lighter`
- **History variant**:
  - Auto height
  - Padding: `spacing-4`
  - Border bottom: `--border-lighter`

### AI Content Views
- **Width**: `494px` (auto height for most)
- **Padding**: `spacing-4`
- **Export view height**: `326px` (fixed)

### AI Dropdown Menu
- **Width**: `223px` (auto height)
- **Gap between items**: `spacing-0.5`

### AI Map
- **Width**: `32px`
- **Height**: `312px`
- **Gap**: `spacing-4` between buttons and map
- **Button padding**: `spacing-1.5`
- **Button style**: Secondary, small, icon-only, link variant

## Do

- Clearly distinguish user messages from AI responses with different bubble styles
- Show the thinking indicator while AI processes
- Include action buttons (edit, copy, regenerate, feedback) after responses
- Display tool call status clearly (processing, finished, error)
- Use the gradient header to create visual hierarchy
- Maintain consistent spacing (8px for related elements, 16px for sections)
- Provide searchable conversation history
- Use appropriate content views based on context

## Don't

- Hide the thinking indicator—users need feedback
- Make AI bubbles identical to user bubbles
- Add action buttons to user messages (only AI responses need them)
- Skip error states when tool calls fail
- Remove the gradient header's padding
- Mix different content views in the same container
- Overcrowd the history panel (use dividers)
- Disable buttons without showing why

## Uses

**Primary Use Cases:**

1. **AI Chat Interfaces** - Full conversational experiences with AI assistants
2. **Patent/Legal Assistant** - AI helping with patent applications, searches, and guidance
3. **Document Analysis** - AI analyzing and providing insights on documents
4. **Search & Discovery** - AI-powered search with contextual results
5. **Tool Integration** - AI executing tools and displaying results
6. **Conversation History** - Browsing and revisiting past AI conversations
7. **Export Functionality** - AI-assisted data export and formatting

**Example Scenarios:**

- "How do I file a new patent application?" - AI provides step-by-step guidance
- "What are the key steps to search for prior art?" - AI shows tool calls and results
- "Explain the patent renewal process" - AI generates detailed explanation with actions
- Browsing conversation history to find previous patent searches
- Using AI to generate custom reports on patent portfolio analytics

## Behavior

### States

**AI Input Field:**
- **Default** - Ready for user input, light gray background
- **Hover** - Visual feedback on hover
- **Active** - AI gradient background indicates focus/activity

**AI Tool Calls:**
- **Processing** - Shows loading indicator, tool is executing
- **Finished** - Shows success state, tool completed
- **Error** - Shows error state with details

**AI Thinking:**
- Displays rotating spinner icon with "Thinking..." text
- Appears between user message and AI response
- Automatically hides when response begins

### Interactions

**Message Sending:**
1. User types message in input field
2. Input field shows active state (gradient background)
3. Message appears as user bubble (right-aligned)
4. AI thinking indicator appears
5. AI response bubble appears with content
6. Action buttons become available

**Action Buttons:**
- **Edit** - Allows user to modify their message
- **Copy** - Copies AI response to clipboard
- **Regenerate** - Requests new AI response
- **Thumbs Up/Down** - Provides feedback on response quality

**History Navigation:**
- Search field filters conversation titles
- Clicking title loads that conversation
- Dividers separate different conversations
- Scroll for long history lists

**Tool Calls:**
- Display inline with AI response
- Show real-time status (processing → finished/error)
- Expandable to show details

### Focus

- Input field receives focus on component mount
- Focus ring follows AI gradient style when active
- Tab navigation moves through action buttons
- History items receive focus on keyboard navigation
- Dropdown menu traps focus when open

### Scrolling

- Chat container scrolls vertically
- Auto-scrolls to bottom on new messages
- History panel scrolls independently
- Smooth scroll animation for better UX

### Responsiveness

- Chat container maintains fixed width (494px) by default
- Bubbles max width 400px to prevent overly wide messages
- Content views adapt to container width
- Mobile considerations: Full-width bubbles, stacked actions

