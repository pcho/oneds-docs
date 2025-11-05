# Alert Component Comparison

**Date:** November 5, 2025
**Component:** Alert / Banner
**Systems Compared:** Adobe Spectrum (Alert Dialog), GitLab Design, Nord Health Design (Banner)
**Purpose:** Identify accessibility tips, best practices, and patterns we might have missed in OneDS

---

## What OneDS Currently Has ✅

Based on `/Users/pcho/Work/docs/components/alert.md`:

- Comprehensive anatomy (6 elements)
- Four alert types (info, success, warning, error)
- Detailed specifications (colors, spacing, borders)
- Do's and Don'ts
- Primary use cases with examples
- Dismissal guidance
- Content guidelines
- Stacking behavior
- Accessibility section with semantic HTML, ARIA, keyboard navigation
- Role="alert" vs role="status" distinction
- Screen reader support
- Focus management guidance
- Multiple alerts pattern

---

## Patterns/Tips in Other Systems We DON'T Have

### 1. **CRITICAL:** Three Screen Reader Announcement Patterns (GitLab)

**What they have:**
> **1. Informational (No Action Required):** Use `aria-live="polite"` with `aria-atomic="true"`
> **2. Requires User Action:** Place contextually and set keyboard focus on the alert
> **3. Critical/Time-Sensitive:** Use both `role="alert"` and `aria-live="assertive"` with `aria-atomic="true"`

**What OneDS has:**
```markdown
**ARIA Attributes:**
- `role="alert"` for urgent alerts (error, warning)
- `role="status"` for non-urgent (info, success)
- `aria-live="polite"` or `"assertive"` based on urgency
```

**Gap:**
✅ We have role and aria-live
⚠️ Missing pattern for setting focus on alerts requiring action
⚠️ No distinction between focus vs. announce-only strategies

**Worth considering:**
```markdown
**Screen Reader Announcement Strategies:**

**Pattern 1: Announce Only (Informational)**
- **Use for:** FYI messages, tips, non-critical info
- **Implementation:**
  ```html
  <div
    role="status"
    aria-live="polite"
    aria-atomic="true">
    <p>Your changes have been saved.</p>
  </div>
  ```
- **Behavior:** Announces at natural break, doesn't interrupt
- **No focus movement**
- **Examples:** Success confirmations, status updates

**Pattern 2: Focus Alert (Requires Action)**
- **Use for:** Alerts with action buttons, requires user decision
- **Implementation:**
  ```javascript
  const alert = document.querySelector('.alert-with-actions');
  alert.focus(); // Move focus to alert
  ```
  ```html
  <div
    role="alert"
    tabindex="-1"
    aria-labelledby="alert-title">
    <h4 id="alert-title">Confirm deletion</h4>
    <p>Are you sure you want to delete this patent?</p>
    <button>Cancel</button>
    <button>Delete</button>
  </div>
  ```
- **Behavior:** Announces immediately + moves keyboard focus
- **User ready to interact with buttons**
- **Examples:** Form validation errors with actions, confirmation prompts

**Pattern 3: Critical Interruption (Time-Sensitive)**
- **Use for:** Urgent system alerts, security issues, data loss warnings
- **Implementation:**
  ```html
  <div
    role="alert"
    aria-live="assertive"
    aria-atomic="true">
    <h4>Session expiring</h4>
    <p>Your session will expire in 2 minutes. Save your work.</p>
  </div>
  ```
- **Behavior:** Interrupts screen reader immediately
- **Consider moving focus** for immediate action access
- **Examples:** Session expiration, system errors, security alerts

**Decision Tree:**
```
Does alert require user action?
├─ Yes → Pattern 2 (Focus Alert)
│   └─ Has action buttons, requires decision
│
└─ No → Is it critical/urgent?
    ├─ Yes → Pattern 3 (Assertive + consider focus)
    │   └─ Time-sensitive, data loss risk
    │
    └─ No → Pattern 1 (Polite announcement)
        └─ Informational only
```
```

---

### 2. Alert Container Must Exist Before Mount (GitLab)

**What they have:**
> "Container must exist in initial HTML before Vue mounts"

**What OneDS has:**
- No guidance on when alert container is created

**Gap:**
❌ No technical guidance on alert container timing
❌ Important for aria-live to work properly

**Worth considering:**
```markdown
**Aria-Live Container Timing (Technical):**

**Critical Requirement:**
- Aria-live region MUST exist in initial HTML
- Before JavaScript framework mounts
- Before dynamic content loads

**Why:**
- Screen readers register aria-live regions on page load
- Dynamically added aria-live regions may not be recognized
- Announcements fail if region added after content

**Implementation:**

**Wrong (Don't Do This):**
```html
<!-- Alert added dynamically -->
<div id="app">
  <!-- Empty on load -->
</div>

<script>
  // Later: Add alert with aria-live
  app.innerHTML = '<div role="alert">Message</div>';
  // ❌ May not announce (region created after page load)
</script>
```

**Right:**
```html
<!-- Alert container in initial HTML -->
<div id="alert-region" role="status" aria-live="polite" aria-atomic="true">
  <!-- Empty initially -->
</div>

<div id="app">
  <!-- App content -->
</div>

<script>
  // Later: Add content to existing region
  document.getElementById('alert-region').innerHTML =
    '<p>Your changes have been saved.</p>';
  // ✅ Announces correctly (region existed on load)
</script>
```

**Best Practice:**
- Include empty alert container in page template
- Container has aria-live attributes
- Dynamically populate content, not container
```

---

### 3. Alert Elements Lose Semantic Meaning (GitLab)

**What they have:**
> "Elements within live regions lose semantic meaning and read as plain text"

**What OneDS has:**
- No warning about semantic loss in live regions

**Gap:**
❌ No guidance on how elements are announced in alerts

**Worth considering:**
```markdown
**Semantic Elements in Alerts (Important Limitation):**

**Screen Reader Behavior:**
- Content inside `aria-live` regions reads as plain text
- Headings NOT announced as headings
- Buttons announced, but structure flattened
- Lists lose list semantics

**Example:**
```html
<div role="alert" aria-live="polite">
  <h4>Form errors</h4>  <!-- Not announced as heading -->
  <ul>
    <li>Email is required</li>  <!-- Not announced as list -->
    <li>Password too short</li>
  </ul>
</div>
```

**Screen reader announces:**
"Form errors. Email is required. Password too short."
(No "heading level 4", no "list 2 items", just text)

**Implications:**
- ✅ Keep alert content simple
- ✅ Write as plain, flowing text
- ❌ Don't rely on heading hierarchy
- ❌ Don't use complex nested structures

**Good Alert Structure:**
```html
<div role="alert">
  <p><strong>Form errors:</strong> Email is required. Password too short.</p>
</div>
```
Reads naturally as plain text

**Bad Alert Structure:**
```html
<div role="alert">
  <h4>Errors</h4>
  <section>
    <h5>Required Fields</h5>
    <ul><li>Email</li></ul>
  </section>
</div>
```
Complex structure lost in announcement
```

---

### 4. Sticky Position Focus Management (GitLab)

**What they have:**
> "Sticky positioning must not block access to focusable elements underneath"

**What OneDS has:**
```markdown
**Focus Management:**
- If sticky positioning is used, the user must still be able to access and view focusable elements the alert may be covering
```

**Gap:**
✅ We have this guidance
⚠️ Could expand with specific solutions

**Worth considering:**
```markdown
**Sticky Alert Positioning (Accessibility Consideration):**

**Problem:**
- Sticky alert at top of page
- May cover focusable content below
- Keyboard users can't access covered elements

**Solutions:**

**Option 1: Margin/Padding Compensation**
```css
body {
  padding-top: 0;
}

body.has-sticky-alert {
  padding-top: 80px; /* Height of sticky alert */
}
```
- Content shifts down when alert appears
- No overlap with focusable elements

**Option 2: Z-Index Management**
```css
.sticky-alert {
  position: sticky;
  top: 0;
  z-index: 100;
}

.main-content:focus-within .sticky-alert {
  pointer-events: none; /* Allow click-through */
  opacity: 0.3; /* Show it's there but faded */
}
```
- Alert fades when user focuses content
- Allows access to covered elements

**Option 3: Dismissible Requirement**
- If sticky alert covers content
- MUST be dismissible
- User can remove obstruction

**Test:**
1. Add sticky alert
2. Tab through page with keyboard
3. Can all focusable elements be reached?
4. Can all buttons be clicked?
5. If no: implement solution above
```

---

### 5. Alert vs Banner vs Toast Distinctions (GitLab)

**What they have:**
- "Toasts: For immediate action confirmations in the same view"
- "Banners: For feature promotions or feedback solicitation"

**What OneDS has:**
```markdown
## Don't
- Confirm user actions with a toast when they stay on the same view.
```

**Gap:**
⚠️ We mention don't use toast, but could clarify alternatives more

**Worth considering:**
```markdown
**Alert vs Banner vs Toast vs Notification (Decision Guide):**

**Alert (Contextual, Persistent):**
- **Location:** Within page content, near relevant section
- **Persistence:** Stays until dismissed or resolved
- **Use for:**
  - Form validation errors
  - Section-specific warnings
  - Contextual success messages
- **Examples:**
  - "Form has 3 errors" (above form)
  - "This feature requires premium" (in settings panel)

**Banner (Global, Persistent):**
- **Location:** Top of page, full-width
- **Persistence:** Stays across page views
- **Use for:**
  - System-wide announcements
  - Feature promotions
  - Account-level issues
- **Examples:**
  - "Trial ends in 5 days"
  - "New feature available"
  - "Scheduled maintenance tonight"

**Toast/Notification (Temporary, Auto-Dismiss):**
- **Location:** Top-right corner (floating)
- **Persistence:** Auto-dismisses after 3-5 seconds
- **Use for:**
  - Action confirmations
  - Background task completion
  - Non-critical updates
- **Examples:**
  - "Patent saved successfully"
  - "Email sent"
  - "File uploaded"

**Decision Tree:**
```
Does message need to persist?
├─ Yes → Is it global or contextual?
│   ├─ Global → BANNER
│   └─ Contextual → ALERT
│
└─ No (temporary) → TOAST/NOTIFICATION
```
```

---

### 6. Alert Complements Validation Messages (GitLab)

**What they have:**
> "Alerts complement but remain separate from validation error messages. In this way an alert announces that there are validation errors and links a user to each instance."

**What OneDS has:**
```markdown
**Multiple Alerts:**
- An alert is separate from, but complementary to validation error messages
- In this way an alert announces that there are validation errors and links a user to each instance
```

**Gap:**
✅ We have this exactly as GitLab describes
⚠️ Could add example implementation

**Worth considering:**
```markdown
**Alert + Inline Error Pattern:**

**Use Both Together:**
- Alert (summary) at top of form
- Inline errors (specific) at each field

**Example Implementation:**
```html
<!-- Alert: Summary of errors -->
<div role="alert" class="alert-error">
  <h4>Please fix the following errors:</h4>
  <ul>
    <li><a href="#email-field">Email address is required</a></li>
    <li><a href="#password-field">Password must be 8+ characters</a></li>
  </ul>
</div>

<!-- Form with inline errors -->
<form>
  <div class="form-group">
    <label for="email-field">Email</label>
    <input
      id="email-field"
      type="email"
      aria-invalid="true"
      aria-describedby="email-error">
    <p id="email-error" class="error-message">
      Email address is required
    </p>
  </div>

  <div class="form-group">
    <label for="password-field">Password</label>
    <input
      id="password-field"
      type="password"
      aria-invalid="true"
      aria-describedby="password-error">
    <p id="password-error" class="error-message">
      Password must be 8+ characters
    </p>
  </div>
</form>
```

**Benefits:**
- Alert provides overview and quick navigation
- Inline errors show specific problems at each field
- Screen reader announces both
- Keyboard users can click links in alert to jump to fields
```

---

### 7. Maximum Two Action Buttons (GitLab + Spectrum)

**What they have:**
- **GitLab:** "Maximum two buttons—primary (confirm variant) and secondary (default variant), left-aligned"
- **Spectrum:** "An alert can display up to 3 buttons"

**What OneDS has:**
```markdown
5. **Actions** - Buttons for user response (optional)
```

**Gap:**
❌ No limit on number of action buttons
⚠️ Different systems have different limits (2 vs 3)

**Worth considering:**
```markdown
**Action Buttons in Alerts:**

**Limit: 2-3 Buttons Maximum**

**Two Buttons (Recommended):**
- Primary action (right)
- Secondary/Cancel (left)
- Example: [Cancel] [Delete]

**Three Buttons (Use Sparingly):**
- Tertiary (left) + Cancel + Primary (right)
- Example: [Learn More] [Cancel] [Confirm]
- Only when tertiary action is helpful (not required)

**Never More Than 3:**
- ❌ Four or more buttons overwhelming
- Alternative: Use dropdown for additional options

**Button Alignment:**
- Left-align button group
- Or right-align (context-dependent)
- Be consistent across application

**Example (Two Buttons):**
```html
<div role="alert">
  <h4>Delete patent application?</h4>
  <p>This action cannot be undone.</p>
  <div class="alert-actions">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-danger">Delete</button>
  </div>
</div>
```

**Example (Three Buttons):**
```html
<div role="alert">
  <h4>Update available</h4>
  <p>Version 2.0 is available with new features.</p>
  <div class="alert-actions">
    <button class="btn-link">View Changes</button>
    <button class="btn-secondary">Remind Me Later</button>
    <button class="btn-primary">Update Now</button>
  </div>
</div>
```
```

---

### 8. Move Focus to Banner (Nord Health)

**What they have:**
> "Move focus to the banner when relevant to current workflow"
> "Don't move focus to banner if it appears on page load"

**What OneDS has:**
- No specific guidance on when to move focus to alerts

**Gap:**
❌ No pattern for focus management timing

**Worth considering:**
```markdown
**When to Move Focus to Alert:**

**Move Focus When:**
- Alert appears after user action
- Alert requires user response
- Alert has action buttons
- Workflow interrupted by alert

**Example:**
```javascript
// User clicks "Delete" button
button.addEventListener('click', async () => {
  try {
    await deleteItem();
    // Don't focus success alert (informational only)
    showSuccessAlert('Item deleted');
  } catch (error) {
    // DO focus error alert (requires action)
    const alert = showErrorAlert('Cannot delete item. Try again?');
    alert.focus(); // Move focus to alert
  }
});
```

**Don't Move Focus When:**
- Alert appears on page load
- Background system notification
- Informational only (no action needed)
- User didn't trigger the alert

**Example:**
```html
<!-- Page loads with warning banner -->
<div role="status" aria-live="polite">
  <p>Scheduled maintenance tonight at 10 PM</p>
</div>
<!-- Don't move focus: User just loaded page -->
```

**Focus Management Pattern:**
```javascript
function showAlert(message, type, requiresAction = false) {
  const alert = createAlert(message, type);
  container.appendChild(alert);

  if (requiresAction) {
    // Alert has action buttons or requires decision
    alert.setAttribute('tabindex', '-1');
    alert.focus(); // Move focus
  }
  // Otherwise: announce via aria-live, no focus movement
}
```
```

---

### 9. Avoid "Are You Sure?" Titles (Adobe Spectrum)

**What they have:**
> "Titles should state outcomes, not pose questions like 'Are you sure?'"

**What OneDS has:**
- Content guidelines but no specific title format guidance

**Gap:**
❌ No guidance on alert title format

**Worth considering:**
```markdown
**Alert Title Guidelines:**

**State Outcomes, Not Questions:**

**Bad (Don't Use):**
- ❌ "Are you sure?"
- ❌ "Do you want to continue?"
- ❌ "Confirm action?"
- Problem: Vague, doesn't state what will happen

**Good (Clear Outcomes):**
- ✅ "Delete patent application?"
- ✅ "Discard unsaved changes?"
- ✅ "Permanently remove user access?"
- States exactly what action will occur

**For Informational Alerts:**
- ✅ "Form validation errors"
- ✅ "Session expiring soon"
- ✅ "Changes saved successfully"
- Clear, specific state or outcome

**Title Format:**
- **Questions:** For confirmations (include question mark)
- **Statements:** For info/errors/warnings
- **Sentence case** (not title case)
- **Concise** (one line, < 60 characters)
- **Specific** (avoid "Error", "Warning" alone)

**Examples:**

**Deletion Confirmation:**
- ❌ "Are you sure?"
- ✅ "Delete 5 patent applications?"

**Error Alert:**
- ❌ "Error"
- ✅ "Failed to save patent application"

**Warning Alert:**
- ❌ "Warning"
- ✅ "Session will expire in 5 minutes"
```

---

## Summary of Gaps

### Critical Additions to Consider

1. **Three Announcement Patterns** - Focus vs announce-only vs critical interruption
2. **Container Timing Requirement** - Aria-live region must exist before framework mounts
3. **Semantic Loss in Live Regions** - Elements read as plain text, not with semantic structure

### Medium Priority

4. **Sticky Position Focus Management** - Solutions for not blocking focusable content
5. **Alert vs Banner vs Toast** - Decision guide for choosing component type
6. **Alert + Inline Error Pattern** - Implementation example with links
7. **Action Button Limits** - 2-3 buttons maximum
8. **Focus Movement Timing** - When to move focus vs announce only
9. **Title Format Guidelines** - State outcomes, avoid "Are you sure?"

---

## Recommendations

### Add to OneDS Alert Documentation

1. **Enhanced Screen Reader Patterns**
   - Three announcement strategies
   - When to use each pattern
   - Focus movement decision guide

2. **Technical Implementation Requirements**
   - Alert container timing (before mount)
   - Semantic element limitations
   - Aria-live region setup

3. **Positioning Accessibility**
   - Sticky alert solutions
   - Focus management for covered content

4. **Component Decision Guide**
   - Alert vs Banner vs Toast
   - When to use each
   - Decision tree

5. **Enhanced Content Guidelines**
   - Title format (state outcomes)
   - Action button limits (2-3 max)
   - Button alignment patterns

---

## What OneDS Does Better

### Strengths to Keep

1. ✅ **Four Alert Types Clearly Defined** - Info, success, warning, error
2. ✅ **Dismissal Guidance** - When to make dismissible
3. ✅ **Multiple Alert Ordering** - By severity
4. ✅ **Role vs Status Distinction** - Already documented
5. ✅ **Validation + Alert Pattern** - Already mentioned

**Conclusion:** OneDS has solid alert documentation. Adding the three announcement patterns, container timing requirements, focus management guidance, and title format guidelines will make it industry-leading.
