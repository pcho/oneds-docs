## Description

The AI component is a comprehensive chat interface system designed for AI-powered interactions. It provides users with a conversational experience where they can ask questions, receive AI-generated responses, and interact with AI-assisted features like tool calls, search history, and contextual actions. The component supports multiple layouts including full chat interfaces, message bubbles, history panels, and contextual dropdowns.

Think of it as your AI assistant's home—complete with chat bubbles, action buttons, thinking indicators, and conversation history. It's built to make AI interactions feel natural and intuitive.

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
   - Background color: `#F4F6F8`
   - Border radius: `12px 12px 4px 12px`

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
   - Text color: `#6B7680`

5. **AI Input Field** - Message input with three states
   - Default: Light gray background (`#F4F6F8`)
   - Hover: Same background with visual feedback
   - Active: AI gradient background
   - Border radius: `12px`
   - Padding: `6px`

6. **AI Tool Calls** - Tool execution status display
   - Processing variant (loading state)
   - Finished variant (success state)
   - Error variant (error state)
   - Background: White (`#FFFFFF`)
   - Border: `1px solid #ECEEF0`
   - Border radius: `12px`
   - Padding: `16px`
   - Gap: `12px`

7. **AI History** - Conversation history panel
   - Search input field at the top
   - Clickable history title items
   - Dividers between items
   - History title padding: `8px`
   - Background: White (`#FFFFFF`)
   - Border radius: `8px`

8. **AI Header** - Three header variants
   - Gradient: Linear gradient from white to transparent
   - Default: White background with bottom border
   - History: White background with search functionality
   - Padding: `16px 16px 36px` (gradient), `16px` (history)

9. **AI Content** - Multiple content views
   - Chat view (conversational interface)
   - Contacts view (contact management)
   - Export view (export functionality)
   - Start view (getting started screen)
   - History view (conversation history)
   - Padding: `16px`

10. **AI Dropdown Menu** - Contextual options menu
    - White background (`#FFFFFF`)
    - Dropdown items component

11. **AI Map** - Map integration feature
    - Vertical button arrangement
    - Map frame container
    - Gap: `16px`

## Specification

### AI Chat Container
- **Dimensions**: `494px × 1045px`
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #D1D6DB`
- **Border radius**: `12px`
- **Shadow**: Floating shadow effect
- **Padding**: `16px`
- **Gap**: `16px`

### AI Bubble (User Message)
- **Width**: `400px` (auto height)
- **Background**: `#F4F6F8`
- **Border**: `1px solid #ECEEF0`
- **Border radius**: `12px 12px 4px 12px` (rounded except bottom-right)
- **Padding**: `12px 16px`
- **Alignment**: Right-aligned

### AI Bubble (Response)
- **Width**: `400px` (auto height)
- **Background**: Dynamic based on content
- **Gap**: `8px` between elements
- **Includes**: Thinking indicator (when processing), content, action row

### AI Input Field
- **Width**: `480px` (auto height)
- **Padding**: `6px`
- **Gap**: `10px`
- **Border radius**: `12px`
- **Background**:
  - Default/Hover: `#F4F6F8`
  - Active: AI gradient (45deg, `#FCF1EF` → `#FBEEF5` → `#F5EDF A` → `#F0EFFD` → `#E9F3FF`)

### AI Actions
- **Layout**: Horizontal row
- **Gap**: `4px`
- **Icon size**: `15×15px`
- **Icons**: Line variant, square spacing, `.75x` size

### AI Thinking
- **Layout**: Horizontal row
- **Gap**: Between icon and text (minimal)
- **Icon**: Spinner, solid variant, `.75x` size (18×18px)
- **Text**: "Thinking..." in `Typography/Body/400/Small`, color `#6B7680`

### AI Tool Calls
- **Width**: `439px` (auto height)
- **Layout**: Horizontal row
- **Padding**: `16px`
- **Gap**: `12px`
- **Background**: White (`#FFFFFF`)
- **Border**: `1px solid #ECEEF0`
- **Border radius**: `12px`

### AI History Title
- **Width**: Auto (auto height)
- **Padding**: `8px`
- **Background**: White (`#FFFFFF`)
- **Border radius**: `8px`
- **Typography**: `Typography/Body/400/Default`
- **Text color**: `#535D67`

### AI Header
- **Width**: `486px`
- **Gradient variant**:
  - Height: `125px`
  - Padding: `16px 16px 36px`
  - Background: Linear gradient (180deg, white 50% → transparent 100%)
- **Default variant**:
  - Height: `64px`
  - Padding: `16px 16px 36px`
  - Border bottom: `1px solid #ECEEF0`
- **History variant**:
  - Auto height
  - Padding: `16px`
  - Border bottom: `1px solid #ECEEF0`

### AI Content Views
- **Width**: `494px` (auto height for most)
- **Padding**: `16px`
- **Export view height**: `326px` (fixed)

### AI Dropdown Menu
- **Width**: `223px` (auto height)
- **Gap between items**: `2px`

### AI Map
- **Width**: `32px`
- **Height**: `312px`
- **Gap**: `16px` between buttons and map
- **Button padding**: `6px`
- **Button style**: Secondary, small, icon-only, link variant

## Do

- Use AI bubbles to clearly distinguish between user messages and AI responses
- Show the thinking indicator when AI is processing to provide feedback
- Provide action buttons (edit, copy, regenerate, feedback) after AI responses
- Display tool call status clearly with appropriate variants (processing, finished, error)
- Use the gradient header to create visual hierarchy and focus
- Maintain consistent spacing (8px gaps for related elements, 16px for sections)
- Show conversation history with search functionality for easy navigation
- Use appropriate content views (chat, contacts, export, start, history) based on context

## Don't

- Don't hide the thinking indicator—users need to know something is happening
- Don't make AI bubbles look identical to user bubbles
- Don't place action buttons on user messages (only on AI responses)
- Don't forget to show error states when tool calls fail
- Don't remove the gradient header's padding—it creates breathing room
- Don't mix different content views in the same container
- Don't overcrowd the history panel—use dividers for clarity
- Don't disable action buttons without visual indication

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

## Accessibility

**Keyboard Navigation:**
- `Tab` - Navigate through input field, buttons, and interactive elements
- `Enter` - Send message from input field
- `Escape` - Close dropdown menus
- `Arrow Keys` - Navigate history items and dropdowns

**Screen Reader Support:**
- All action buttons have clear aria-labels (e.g., "Edit message", "Copy response")
- Thinking indicator announces "AI is thinking" to screen readers
- Tool call status changes are announced
- History items include context (e.g., "Conversation: How do I file a patent")
- Input field has label "Message AI assistant"

**Color & Contrast:**
- Text meets WCAG AA standards (4.5:1 minimum)
- Thinking text (#6B7680) on white background: 5.5:1
- Message text (#535D67) on white background: 7.2:1
- Action icons have 3:1 contrast minimum
- Error states use color + icon for non-color indicators

**Focus Indicators:**
- Visible focus rings on all interactive elements
- AI gradient style integrated into focus states
- Focus order follows logical reading flow
- Skip links available for long conversations

**Motion & Animation:**
- Spinner animation can be disabled via prefers-reduced-motion
- Smooth scroll respects user preferences
- Thinking indicator uses CSS animation (can be disabled)
- No auto-playing animations without user control

**Alternative Text:**
- All icons have descriptive text alternatives
- Tool call results include text descriptions
- Map components have accessible labels
- Image previews include alt text
