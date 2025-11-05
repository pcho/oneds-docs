# OneDS Content Style Guide

**Purpose:** Establish consistent voice, tone, and formatting across all component documentation and UI text.

---

## Capitalization

### Use Sentence Case Everywhere

Capitalize only the first word and proper nouns. This applies to all UI text.

**✅ Correct:**
- "Email address"
- "Patent application status"
- "Save changes"
- "Enable notifications"

**❌ Incorrect:**
- "Email Address" (title case)
- "Patent Application Status" (title case)
- "Save Changes" (title case)

**Applies to:**
- All labels (form fields, switches, checkboxes, radios)
- All button text
- All headings in UI (not documentation)
- All titles (modals, drawers, sections)
- All legends (fieldsets)
- Help text and error messages

**Exception:** Proper nouns always capitalized (Microsoft, OneDS, GitHub, etc.)

---

## Button Labels

### Formula: {Verb} + {Noun}

Be specific about what the button does. Generic labels like "OK", "Submit", or "Delete" don't provide enough context.

**✅ Correct:**
- "Delete patent"
- "Export data"
- "Save changes"
- "Cancel request"
- "Add team member"
- "View details"

**❌ Incorrect:**
- "Delete" (what are we deleting?)
- "Export" (what are we exporting?)
- "Save" (saving what?)
- "Submit" (submitting what?)
- "OK" (okay to what?)

### Use Ellipsis for Dialog-Opening Actions

When a button opens a dialog or requires additional input, use ellipsis (…) to indicate more steps:

**✅ Correct:**
- "Save as…" (opens dialog to choose location)
- "Share…" (opens sharing options)
- "Export…" (opens format selection)

**❌ Incorrect:**
- "Save as..." (use ellipsis character, not three periods)
- "Export" (no indicator that dialog will open)

**Don't use ellipsis for:**
- Actions that complete immediately ("Save", "Delete")
- Navigation ("View details", "Edit")

### Primary vs Secondary Button Text

**Primary button (main action):**
- Active, specific verb
- "Save changes", "Create application", "Submit request"

**Secondary button (cancel/alternative):**
- "Cancel", "Go back", "Skip"
- Can be more generic since it's not the main action

---

## Error Messages

### Write Solutions, Not Problems

Error messages should tell users how to fix the issue, not just what went wrong.

**✅ Correct:**
```
Enter your email address in the format name@example.com
```

**❌ Incorrect:**
```
Invalid field
```

**✅ Correct:**
```
Password must be at least 8 characters and include one number
```

**❌ Incorrect:**
```
Invalid password
```

### Error Message Formula

1. State what's needed (optional: briefly state the problem)
2. Provide the solution or requirement
3. Give an example if helpful

**Template:**
```
[What's needed]. [Requirement]. [Example if helpful]
```

**Examples:**

**✅ Good:**
```
Enter a valid phone number. Use format: (555) 123-4567
```

**✅ Good:**
```
Select at least one notification method
```

**✅ Good:**
```
File size must be under 5 MB. Current file is 12 MB.
```

### Error Message Tone

- Be helpful, not judgmental
- No exclamation marks (avoid drama)
- No technical jargon
- No blame ("you entered", "you forgot")

**✅ Correct:**
```
Email address is required
```

**❌ Incorrect:**
```
You forgot to enter your email!
```

---

## Titles

### State Outcomes, Not "Are You Sure?"

Modal and dialog titles should clearly state what will happen, not ask vague confirmation questions.

**For Confirmations (Use Questions):**

**✅ Correct:**
- "Delete this patent application?"
- "Discard unsaved changes?"
- "Remove Sarah from the team?"

**❌ Incorrect:**
- "Are you sure?"
- "Confirm action"
- "Warning"

**For Information/Errors (Use Statements):**

**✅ Correct:**
- "Application submitted successfully"
- "Connection lost"
- "File uploaded"

**❌ Incorrect:**
- "Success!"
- "Error"
- "Done"

### Title Formatting

**Questions:**
- End with question mark (?)
- Sentence case
- Be specific about the action

**Statements:**
- No period at end
- Sentence case
- State the outcome or status

---

## Labels

### Keep Labels Concise

**Target length:** Under 60 characters

**✅ Correct:**
- "Email address"
- "Patent title"
- "Notification preferences"

**❌ Too long:**
- "Please enter your email address so we can contact you about your patent application"

**For longer explanations:** Use help text below the field, not in the label.

### No Colons at End

**✅ Correct:**
```
<label>Email address</label>
```

**❌ Incorrect:**
```
<label>Email address:</label>
```

**Reason:** Screen readers add pause after label automatically. Colons are visual-only convention and unnecessary.

### Switch Labels: Describe ON State

Switches should describe what happens when turned ON:

**✅ Correct:**
- "Enable notifications"
- "Show advanced options"
- "Make profile public"

**❌ Incorrect:**
- "Notifications" (ambiguous)
- "Advanced options" (is this turning them on or off?)
- "Profile visibility" (unclear state)

**Pattern:**
```
[Enable/Show/Make] + [what happens when ON]
```

---

## Help Text

### Use Full Sentences with Periods

Help text should be complete sentences that end with periods.

**✅ Correct:**
```
Your email will only be used for application updates.
```

**❌ Incorrect:**
```
Your email will only be used for application updates
(missing period)
```

**✅ Correct:**
```
Password must be at least 8 characters.
```

### Coordinate with Error Text

Both help text and error messages should contain essential information, since error messages replace help text temporarily.

**Help text:**
```
Password must be at least 8 characters and include one number.
```

**Error message (should include same requirements):**
```
Password must be at least 8 characters and include one number.
```

**Don't do this:**

**Help text:**
```
Create a strong password.
```

**Error message:**
```
Password too weak.
```

(User loses the requirement information when error shows)

---

## Punctuation Rules

### Tooltips

**Use periods for complete sentences:**

**✅ Correct:**
```
This action cannot be undone.
```

**❌ Incorrect:**
```
This action cannot be undone
(missing period for sentence)
```

**No periods for fragments:**

**✅ Correct:**
```
Delete patent application
```

**❌ Incorrect:**
```
Delete patent application.
(fragment doesn't need period)
```

**Multiple sentences:**

**✅ Correct:**
```
This will delete the application permanently. This action cannot be undone.
```

### Labels

**Never use punctuation:**

**✅ Correct:**
```
Email address
Patent title
Notification preferences
```

**❌ Incorrect:**
```
Email address.
Patent title:
Notification preferences!
```

### Buttons

**Never use periods:**

**✅ Correct:**
```
Save changes
Delete patent
Export data
```

**❌ Incorrect:**
```
Save changes.
Delete patent.
```

### Headings

**No periods:**

**✅ Correct:**
```
# Patent Application Details
## Upload Documents
```

**❌ Incorrect:**
```
# Patent Application Details.
## Upload Documents.
```

---

## Required vs Optional Fields

### Mark the Minority

**If most fields are required:** Mark only the optional ones.
```
Email address (optional)
Phone number (optional)
```

**If most fields are optional:** Mark only the required ones.
```
Email address *
Password *

* Required field
```

### Never Use Asterisks for Optional

**❌ Incorrect:**
```
Email address
Phone number (optional) *

* Optional field
```

This is confusing. Asterisks universally mean "required" on the web.

---

## Voice and Tone

### Be Direct and Clear

**✅ Correct:**
```
Enter your email address
```

**❌ Too formal:**
```
Please be so kind as to enter your email address
```

**❌ Too casual:**
```
Drop your email here
```

### Avoid Jargon

**✅ Correct:**
```
Connection lost. Check your internet connection.
```

**❌ Too technical:**
```
Network socket connection terminated. Error code: ECONNRESET
```

### Be Helpful, Not Cute

**✅ Correct:**
```
No patents found. Try a different search term.
```

**❌ Too cute:**
```
Oops! No patents here! 🙈
```

### No Exclamation Marks (Generally)

**✅ Correct:**
```
Application submitted successfully
```

**❌ Incorrect:**
```
Application submitted successfully!
```

**Exception:** Very rare positive moments (major milestone achievements)

---

## Numbers and Data

### Spell Out Small Numbers in Text

**In sentences:**
- One, two, three, four, five, six, seven, eight, nine
- 10, 11, 12, etc.

**In data/tables:**
- Always use numerals: 1, 2, 3, etc.

### Use Commas in Large Numbers

**✅ Correct:**
- 1,000
- 10,000
- 1,000,000

**❌ Incorrect:**
- 1000
- 10000

**Exception:** Years (2024, not 2,024)

### Use En Dash for Missing Values

**✅ Correct:**
```
| Name  | Status |
| John  | Active |
| Sarah | –      |
```

**❌ Incorrect:**
```
N/A
null
(empty)
---
```

**Reason:** En dash is the typographic standard for missing data.

---

## Common Words and Phrases

### Consistent Terminology

**Use consistently:**
- "Email address" (not "email", "e-mail", or "email address")
- "Sign in" (not "log in", "login", "sign-in")
- "Sign out" (not "log out", "logout", "sign-out")
- "Username" (not "user name", "User Name")
- "Set up" (verb, two words)
- "Setup" (noun, one word)

### Avoid These Phrases

**❌ Don't use:**
- "Please note that..."
- "Kindly..."
- "As you can see..."
- "Simply..."
- "Just..."
- "Obviously..."

**These phrases:**
- Add no value
- Can sound condescending
- Make text longer without helping

---

## Examples

### Complete Form Example

```html
<form>
  <label for="name">Patent applicant name</label>
  <input type="text" id="name" required>

  <label for="email">Email address</label>
  <input
    type="email"
    id="email"
    required
    aria-describedby="email-help">
  <span id="email-help">
    Used for application updates only.
  </span>

  <label for="phone">Phone number (optional)</label>
  <input type="tel" id="phone">

  <label>
    <input type="checkbox" required>
    Enable notifications
  </label>

  <button type="submit">Submit application</button>
  <button type="button">Cancel</button>
</form>
```

### Complete Modal Example

```html
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Delete this patent application?</h2>
  <p>
    This will permanently delete Patent #12345.
    This action cannot be undone.
  </p>
  <button>Delete patent</button>
  <button>Cancel</button>
</div>
```

### Complete Error Message Examples

```
Enter your email address in the format name@example.com

Password must be at least 8 characters and include one number

Select at least one notification method

File size must be under 5 MB. Current file is 12 MB.

This username is already taken. Try a different username.
```

---

## Quick Reference Checklist

**Before publishing any UI text, check:**

- [ ] Is it sentence case? (First word only)
- [ ] Do button labels use {verb} + {noun}?
- [ ] Do error messages explain how to fix?
- [ ] Are labels under 60 characters?
- [ ] Does help text end with period?
- [ ] Are labels punctuation-free?
- [ ] Is the tone helpful and direct?
- [ ] Is terminology consistent?
- [ ] Will screen reader users understand it?
- [ ] Would I understand it without visual context?

---

**When in doubt, ask:** "Is this clear, helpful, and consistent with OneDS voice?"
