# Semantic HTML Requirements

**Purpose:** Required HTML patterns for accessibility and proper structure in OneDS components.

---

## Overview

Semantic HTML ensures assistive technologies can properly interpret and announce content. Using the correct elements and attributes is critical for accessibility compliance.

---

## Table Requirements

### CRITICAL: `<th>` Elements Must Have `scope` Attribute

**Every table header cell MUST include the `scope` attribute.**

**✅ Correct:**
```html
<table>
  <caption>Patent Applications (January 2024)</caption>
  <thead>
    <tr>
      <th scope="col">Application ID</th>
      <th scope="col">Status</th>
      <th scope="col">Filed Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PA-2024-001</td>
      <td>Pending</td>
      <td>Jan 15, 2024</td>
    </tr>
  </tbody>
</table>
```

**❌ Incorrect:**
```html
<th>Application ID</th>
<!-- Missing scope attribute -->
```

**Why it matters:**
- Screen readers use `scope` to associate headers with data cells
- Without it, screen readers can't announce which header belongs to each cell
- WCAG Level A requirement

**Values:**
- `scope="col"` - Column header (vertical association)
- `scope="row"` - Row header (horizontal association)
- `scope="colgroup"` - Header for multiple columns
- `scope="rowgroup"` - Header for multiple rows

---

### REQUIRED: `<caption>` Element

**Every table MUST have a `<caption>` element as its first child.**

**✅ Correct:**
```html
<table>
  <caption>Patent Applications Submitted in January 2024</caption>
  <thead>
    <!-- headers -->
  </thead>
  <tbody>
    <!-- data -->
  </tbody>
</table>
```

**❌ Incorrect:**
```html
<h3>Patent Applications</h3>
<table>
  <!-- Using heading outside table -->
</table>
```

**Why it matters:**
- Screen readers announce caption when entering table
- Provides context for table's purpose
- Programmatically associated with table
- WCAG Level A requirement

**If caption needs to be visually hidden:**
```css
.visually-hidden-caption {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

### NEVER: Headings Inside `<th>` Elements

**Do not use `<h1>`-`<h6>` elements inside table header cells.**

**❌ Incorrect:**
```html
<th scope="col">
  <h4>Application ID</h4>
</th>
```

**✅ Correct:**
```html
<th scope="col">Application ID</th>
```

**Why:**
- Creates semantic conflict (header cell vs heading)
- Disrupts page heading hierarchy
- Confuses screen reader users
- Heading is announced twice

**If visual styling is needed:**
```html
<th scope="col">
  <span class="th-heading">Application ID</span>
</th>
```

---

### Table Formatting Standards

**Text alignment:**
- Text columns: left-aligned
- Number columns: right-aligned
- Dates: typically left-aligned (unless sorting as numbers)

**Missing values:**
- Use en dash (–) not hyphen (-) or "N/A"

```html
<td>–</td>  <!-- Missing value -->
```

**Numbers:**
- Use tabular figures (monospaced numbers) for alignment
- Add commas for thousands: 1,000 not 1000

---

## Form Control Groups

### REQUIRED: `name` Attribute for Checkbox/Radio Groups

**Checkbox and radio groups MUST have matching `name` attributes.**

**✅ Correct:**
```html
<fieldset>
  <legend>Notification preferences</legend>

  <label>
    <input type="checkbox" name="notifications" value="email">
    Email
  </label>

  <label>
    <input type="checkbox" name="notifications" value="sms">
    SMS
  </label>

  <label>
    <input type="checkbox" name="notifications" value="push">
    Push notifications
  </label>
</fieldset>
```

**❌ Incorrect:**
```html
<!-- Missing or mismatched name attributes -->
<input type="checkbox" value="email">
<input type="checkbox" value="sms">
```

**Why it matters:**
- Creates programmatic group relationship
- Screen readers announce group membership
- Form submission works correctly
- Required for radio button behavior (only one selected)

---

### REQUIRED: `<fieldset>` + `<legend>` for Groups

**Related form controls must be wrapped in `<fieldset>` with `<legend>`.**

**✅ Correct:**
```html
<fieldset>
  <legend>Shipping method</legend>

  <label>
    <input type="radio" name="shipping" value="standard" checked>
    Standard shipping
  </label>

  <label>
    <input type="radio" name="shipping" value="express">
    Express shipping
  </label>
</fieldset>
```

**❌ Incorrect:**
```html
<div>
  <p>Shipping method</p>
  <label><input type="radio" name="shipping"> Standard</label>
  <label><input type="radio" name="shipping"> Express</label>
</div>
```

**Why it matters:**
- Groups related controls semantically
- Legend provides group label
- Screen readers announce legend before each control
- WCAG Level A requirement for groups

**Important:** Keep legends concise (<10 words) since screen readers announce them before EACH control in the group.

---

## Card Semantics

### Use `<div>` by Default (Not `<article>`)

**Cards are typically generic containers, not semantic articles.**

**✅ Correct:**
```html
<div class="card">
  <h2>Patent Application #12345</h2>
  <p>Utility Patent - Pending Review</p>
  <button>View details</button>
</div>
```

**❌ Incorrect (usually):**
```html
<article class="card">
  <!-- Most cards aren't independent articles -->
</article>
```

**When to use `<article>`:**
Only when card contains truly independent, self-contained content that could be:
- Syndicated (RSS feed)
- Reused in different contexts
- Understood completely on its own

**Examples of valid `<article>` use:**
- Blog post cards
- News article previews
- Forum posts
- Product listings (debatable)

**Most dashboard cards, setting cards, info cards:** Use `<div>`

---

### Card Collections Need `<ul>` Wrapper

**When displaying multiple cards, wrap in unordered list for accessibility.**

**✅ Correct:**
```html
<ul class="card-grid">
  <li>
    <div class="card">
      <h2>Patent #001</h2>
      <!-- content -->
    </div>
  </li>
  <li>
    <div class="card">
      <h2>Patent #002</h2>
      <!-- content -->
    </div>
  </li>
</ul>
```

**❌ Incorrect:**
```html
<div class="card-grid">
  <div class="card"><!-- content --></div>
  <div class="card"><!-- content --></div>
</div>
```

**Why it matters:**
- Screen readers announce count: "List, 5 items"
- Users can navigate by list
- Clear semantic structure
- Easier to scan with assistive technology

**CSS to remove list styling:**
```css
.card-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}
```

---

### Heading Hierarchy Must Respect Page Context

**Card headings must fit into the page's heading structure, not start fresh.**

**❌ Incorrect:**
```html
<!-- Page -->
<h1>Patent Dashboard</h1>

<!-- Each card starts with h1 -->
<div class="card">
  <h1>Application #001</h1>
</div>

<div class="card">
  <h1>Application #002</h1>
</div>
```

**✅ Correct:**
```html
<!-- Page -->
<h1>Patent Dashboard</h1>
<h2>Recent Applications</h2>

<!-- Cards use h3 to continue hierarchy -->
<div class="card">
  <h3>Application #001</h3>
</div>

<div class="card">
  <h3>Application #002</h3>
</div>
```

**Why it matters:**
- Screen reader users navigate by heading level
- Heading hierarchy reveals content structure
- Skipping levels is confusing
- WCAG Level A requirement

**Rule:** Never skip heading levels (h1 → h3). Always increment by one (h1 → h2 → h3).

---

## Button vs Link

### When to Use `<button>`

**Use button for:**
- Actions that change state
- Form submissions
- Opening modals/drawers
- Toggling visibility
- Triggering operations
- Any action that doesn't navigate

**Examples:**
```html
<button>Save changes</button>
<button>Delete patent</button>
<button>Show more</button>
<button type="submit">Submit application</button>
```

---

### When to Use `<a>` (Link)

**Use link for:**
- Navigation to different pages
- Navigation to different sections (anchor links)
- Downloading files
- Opening external URLs

**Examples:**
```html
<a href="/patents/12345">View patent details</a>
<a href="#section-2">Jump to section 2</a>
<a href="/documents/patent.pdf" download>Download PDF</a>
```

---

### Security: URL Sanitization for Links

**When using link styled as button, sanitize URLs to prevent XSS:**

**✅ Secure:**
```jsx
// React example
const sanitizeUrl = (url) => {
  // Block javascript: and data: protocols
  if (url.match(/^(javascript|data):/i)) {
    return '#';
  }
  return url;
};

<a href={sanitizeUrl(userProvidedUrl)} className="button">
  View details
</a>
```

**❌ Vulnerable:**
```jsx
<a href={userProvidedUrl} className="button">
  View details
</a>
```

**Dangerous URLs to block:**
```
javascript:alert('XSS')
data:text/html,<script>alert('XSS')</script>
```

---

## Landmark Regions

### Use Semantic HTML5 Elements

**Use semantic landmark elements to structure pages:**

```html
<header>
  <!-- Site header, logo, main nav -->
</header>

<nav aria-label="Main navigation">
  <!-- Primary navigation -->
</nav>

<main>
  <!-- Main page content -->

  <article>
    <!-- Independent content -->
  </article>

  <aside>
    <!-- Sidebar, related content -->
  </aside>
</main>

<footer>
  <!-- Site footer -->
</footer>
```

**Screen reader users navigate by landmarks:**
- Makes page structure clear
- Allows jumping to sections quickly
- Required for WCAG AA compliance

---

### `<nav>` Should Have Label

**When using multiple `<nav>` elements, provide distinct labels:**

```html
<nav aria-label="Main navigation">
  <!-- Primary site navigation -->
</nav>

<nav aria-label="Secondary navigation">
  <!-- Utility navigation -->
</nav>

<nav aria-label="Breadcrumb">
  <!-- Breadcrumb navigation -->
</nav>
```

**Why it matters:**
- Screen readers announce: "Main navigation, navigation landmark"
- Helps users distinguish between multiple nav regions

---

## Lists

### When to Use Lists

**Use `<ul>` for:**
- Unordered items
- Navigation menus
- Card grids
- Tag collections

**Use `<ol>` for:**
- Ordered steps
- Rankings
- Procedures
- Sequential items

**Use `<dl>` (definition list) for:**
- Key-value pairs
- Metadata
- Term definitions

**Example definition list:**
```html
<dl>
  <dt>Application ID</dt>
  <dd>PA-2024-001</dd>

  <dt>Status</dt>
  <dd>Pending Review</dd>

  <dt>Filed Date</dt>
  <dd>January 15, 2024</dd>
</dl>
```

---

## Common Mistakes

### ❌ Divitis

**Using `<div>` for everything:**
```html
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>
```

**✅ Use semantic elements:**
```html
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
```

---

### ❌ Wrong Element Type

```html
<div onclick="submit()">Submit</div>
<!-- Inaccessible: not keyboard accessible, wrong role -->
```

**✅ Correct:**
```html
<button type="submit">Submit</button>
```

---

### ❌ Skipping Heading Levels

```html
<h1>Dashboard</h1>
<h3>Recent Items</h3>  <!-- Skipped h2 -->
```

**✅ Correct:**
```html
<h1>Dashboard</h1>
<h2>Recent Items</h2>
```

---

### ❌ Multiple `<main>` Elements

**Only one `<main>` per page (or one visible if using SPA):**

```html
<main>
  <!-- All main content here -->
</main>
```

Not multiple `<main>` sections.

---

## Framework Considerations

### Ant Design (OneDS Base)

**Ant Design components handle much of this automatically:**

```jsx
// Table with proper structure
<Table
  columns={columns}
  dataSource={data}
  caption="Patent Applications"
/>
// Renders <table> with <caption>, <th scope>, etc.

// Form with proper labels
<Form.Item label="Email address" name="email">
  <Input />
</Form.Item>
// Renders <label> properly associated
```

**Still verify:**
- Custom HTML renders correctly
- Table captions are provided
- Heading hierarchy is logical
- Cards use appropriate wrappers

---

## Testing

### Automated Testing

**Use these tools to catch semantic issues:**
- axe DevTools: Detects missing scope, caption, etc.
- WAVE: Highlights semantic problems
- Lighthouse: Checks heading structure

### Manual Testing

**Screen reader testing:**
1. Navigate by landmarks (header, nav, main, footer)
2. Navigate by headings (H key in NVDA/JAWS)
3. Navigate by lists (L key)
4. Verify table headers announced correctly

**Keyboard testing:**
1. Tab reaches all interactive elements
2. Buttons activate with Enter or Space
3. Links activate with Enter

---

## Quick Reference

**Tables:**
- [ ] `<th scope="col">` or `<th scope="row">` on all headers
- [ ] `<caption>` as first child
- [ ] No `<h1>`-`<h6>` inside `<th>`

**Forms:**
- [ ] `name` attribute on checkbox/radio groups
- [ ] `<fieldset>` + `<legend>` for groups
- [ ] Keep legends concise (<10 words)

**Cards:**
- [ ] Use `<div>` by default (not `<article>`)
- [ ] Wrap collections in `<ul>`
- [ ] Respect page heading hierarchy

**Buttons vs Links:**
- [ ] Button for actions, Link for navigation
- [ ] Sanitize URLs for links styled as buttons

**Page Structure:**
- [ ] One `<main>` per page
- [ ] Semantic landmarks (header, nav, aside, footer)
- [ ] No skipped heading levels
- [ ] Labels on multiple `<nav>` elements

---

**Related Resources:**
- [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
