---
title: Style Guide
description: "Documentation for Style Guide component"
---

# OneDS Content Style Guide

Consistent voice, tone, and formatting for all UI text.

---

## Capitalization

### Sentence Case Everywhere

Capitalize only the first word and proper nouns.

**Do:**
- "Email address"
- "Patent application status"
- "Save changes"

**Don't:**
- "Email Address"
- "Patent Application Status"
- "Save Changes"

**Applies to:** Labels, buttons, UI headings, titles, legends, help text, error messages.

**Exception:** Proper nouns (Microsoft, OneDS, GitHub)

---

## Button Labels

### Formula: {Verb} + {Noun}

Be specific. Generic labels lack context.

**Do:**
- "Delete patent"
- "Export data"
- "Save changes"
- "Add team member"

**Don't:**
- "Delete" — delete what?
- "Submit" — submit what?
- "OK" — okay to what?

### Ellipsis for Dialogs

Use ellipsis (…) when a button opens a dialog requiring more input.

**Do:** "Save as…", "Share…", "Export…"

**Don't:** Use three periods (...) instead of ellipsis (…)

**Skip ellipsis for:** Immediate actions ("Save") and navigation ("View details")

### Primary vs Secondary Buttons

**Primary:** Specific action verb — "Save changes", "Create application"

**Secondary:** Generic is fine — "Cancel", "Go back", "Skip"

---

## Error Messages

### Write Solutions, Not Problems

Tell users how to fix the issue, not just what went wrong.

**Do:** "Enter your email in the format name@example.com"

**Don't:** "Invalid field"

### Error Message Formula

1. State what's needed
2. Provide the requirement
3. Give an example if helpful

**Examples:**
- "Enter a valid phone number. Format: (555) 123-4567"
- "Select at least one notification method"
- "File must be under 5 MB. Current file is 12 MB."

### Tone

Be helpful, not judgmental. No exclamation marks, technical jargon, or blame.

**Do:** "Email address is required"

**Don't:** "You forgot to enter your email!"

---

## Titles

### State Outcomes, Not "Are You Sure?"

Modal titles should clearly state what will happen.

**Confirmations (questions):**
- "Delete this patent application?"
- "Discard unsaved changes?"

**Don't:** "Are you sure?", "Confirm action", "Warning"

**Information (statements):**
- "Application submitted successfully"
- "Connection lost"

**Don't:** "Success!", "Error", "Done"

### Formatting

**Questions:** End with ?, sentence case, be specific

**Statements:** No period, sentence case, state the outcome

---

## Labels

### Keep Labels Concise

Under 60 characters. Use help text for longer explanations.

**Do:** "Email address", "Patent title", "Notification preferences"

**Don't:** "Please enter your email address so we can contact you about your patent application"

### No Colons

Labels don't need colons.

**Do:** "Email address"

**Don't:** "Email address:"

### Switch Labels

Describe what happens when ON.

**Do:** "Enable notifications", "Show advanced options", "Make profile public"

**Don't:** "Notifications", "Advanced options" — ambiguous states

---

## Help Text

### Full Sentences with Periods

**Do:** "Your email will only be used for application updates."

**Don't:** "Your email will only be used for application updates" (missing period)

### Match Error Text

Error messages replace help text, so both should contain the same requirements.

**Do:**
- Help: "Password must be at least 8 characters with one number."
- Error: "Password must be at least 8 characters with one number."

**Don't:**
- Help: "Create a strong password."
- Error: "Password too weak." — user loses the requirements

---

## Punctuation Rules

| Element | Rule | Example |
|---------|------|---------|
| Tooltips (sentences) | Period | "This action cannot be undone." |
| Tooltips (fragments) | No period | "Delete patent application" |
| Labels | No punctuation | "Email address" |
| Buttons | No periods | "Save changes" |
| Headings | No periods | "Patent Application Details" |

---

## Required vs Optional Fields

### Mark the Minority

**Mostly required forms:** Mark only optional fields — "Phone number (optional)"

**Mostly optional forms:** Mark only required fields — "Email address *"

Asterisks mean "required" on the web. Never use them for optional fields.

---

## Voice and Tone

### Be Direct

**Do:** "Enter your email address"

**Too formal:** "Please be so kind as to enter your email address"

**Too casual:** "Drop your email here"

### Avoid Jargon

**Do:** "Connection lost. Check your internet connection."

**Don't:** "Network socket connection terminated. Error code: ECONNRESET"

### Be Helpful, Not Cute

**Do:** "No patents found. Try a different search term."

**Don't:** "Oops! No patents here!"

### Skip Exclamation Marks

**Do:** "Application submitted successfully"

**Don't:** "Application submitted successfully!"

---

## Numbers and Data

### Spell Out Small Numbers

In sentences: one through nine. Use numerals for 10+.

In tables/data: Always use numerals.

### Large Numbers

Use commas: 1,000 / 10,000 / 1,000,000

Exception: Years (2024, not 2,024)

### Missing Values

Use en dash (–) for missing data.

| Name  | Status |
| John  | Active |
| Sarah | –      |

Don't use: N/A, null, (empty), ---

---

## Common Words and Phrases

### Consistent Terminology

| Use | Not |
|-----|-----|
| Email address | email, e-mail |
| Sign in / Sign out | log in, login, log out |
| Username | user name, User Name |
| Set up (verb) | setup |
| Setup (noun) | set up |

### Phrases to Avoid

Skip these—they add no value and can sound condescending:

- "Please note that..."
- "Kindly..."
- "As you can see..."
- "Simply..."
- "Just..."
- "Obviously..."

---

## Quick Reference

Before publishing UI text:

- [ ] Sentence case?
- [ ] Button = verb + noun?
- [ ] Error explains how to fix?
- [ ] Label under 60 characters?
- [ ] Help text ends with period?
- [ ] Labels have no punctuation?
- [ ] Tone is helpful and direct?
- [ ] Terminology is consistent?

---

**When in doubt:** Is this clear, helpful, and consistent with OneDS voice?
