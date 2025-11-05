# Design System Documentation Comparison

**Date:** November 5, 2025
**Purpose:** Compare OneDS documentation approach with industry-leading design systems
**Scope:** Component documentation structure, content strategy, and best practices (excluding color/theming)

---

## Executive Summary

OneDS documentation follows a **conversational, behavior-focused approach** with strong emphasis on real-world scenarios and accessibility integration. This analysis compares OneDS with four leading design systems to identify strengths, gaps, and opportunities for improvement.

**Key Findings:**
- ✅ OneDS excels at conversational tone and behavior documentation
- ✅ Strong accessibility integration throughout content
- ⚠️ Missing: Interactive code examples and API/Props tables
- ⚠️ Missing: Framework-specific implementation guidance
- ⚠️ Could improve: Section ordering and visual hierarchy
- ✅ Unique strength: Comprehensive "Uses" section with scenarios

---

## Design Systems Analyzed

| System | Organization | Focus | Documentation Style |
|--------|--------------|-------|-------------------|
| **Adobe Spectrum** | Adobe | Enterprise design | Prescriptive, hierarchy-focused |
| **GitLab Design** | GitLab | Developer tools | Strategic, accessibility-first |
| **Nord Health** | Healthcare | Medical/clinical | Technical, API-heavy |
| **eBay Playbook** | eBay | E-commerce | Visual, decision-framework |
| **OneDS** | (Current) | Patent management | Conversational, behavior-focused |

---

## Documentation Structure Comparison

### Section Organization

#### Adobe Spectrum (8 sections)
1. Anatomy
2. Options (variants, sizes, states)
3. Behaviors
4. Usage Guidelines
5. Content Standards
6. Internationalization
7. Keyboard Interactions
8. Theming

**Approach:** Linear, design-to-implementation flow

#### GitLab Design (5 sections)
1. Examples (interactive Storybook)
2. Structure (visual diagram)
3. Guidelines (comprehensive)
4. Code Reference
5. Related Components

**Approach:** Example-first, then theory

#### Nord Health (13 sections)
1. Overview
2. Examples (interactive CodePen)
3. Properties (API table)
4. Slots
5. Methods
6. CSS Properties
7. Dependencies
8. Usage Guidelines
9. Content Guidelines
10. Variants
11. Icon Usage
12. Accessibility
13. Integration

**Approach:** Technical API documentation with practical guidance

#### eBay Playbook (Tabbed)
1. **Design Tab:** Overview, Types, Choosing, Hierarchy, Placement
2. **Develop Tab:** Implementation code
3. **Motion Tab:** Animation specs
4. **Accessibility Tab:** Dedicated a11y guidance

**Approach:** Role-based tabs (Designer vs Developer)

#### OneDS (Current - 6 sections)
1. Description
2. Anatomy
3. Specification
4. Do / Don't
5. Uses
6. Behavior
7. Accessibility

**Approach:** Conversational narrative with practical examples

---

## Detailed Comparison

### 1. Opening Content

| System | Opening Approach | Strength |
|--------|------------------|----------|
| **Spectrum** | Short definition + use case | Clear, concise |
| **GitLab** | Interactive examples first | Show, then tell |
| **Nord Health** | Overview + when to use | Decision framework |
| **eBay** | Definition + button vs link distinction | Prevents misuse |
| **OneDS** | **Conversational description with metaphor** | Engaging, memorable |

**OneDS Example:**
> "Button is the workhorse of user interfaces—the primary way users trigger actions and make things happen."

**Analysis:**
✅ OneDS's conversational tone is unique and engaging
✅ Creates personality and brand voice
⚠️ Could add "When to use" decision framework earlier

---

### 2. Anatomy / Structure

| System | Approach | Detail Level |
|--------|----------|--------------|
| **Spectrum** | Visual diagrams with numbered labels | High - precise measurements |
| **GitLab** | SVG illustrations with 5 labeled parts | Medium - functional focus |
| **Nord Health** | Text list | Low - brief enumeration |
| **eBay** | Visual examples in context | High - situational |
| **OneDS** | **Numbered text list** | Medium - descriptive |

**OneDS Example:**
```
1. Container - Button background shape
2. Label - Text describing action
3. Icon - Visual indicator (optional)
```

**Analysis:**
✅ Clear and easy to scan
⚠️ Could benefit from visual diagrams (all other systems use them)
⚠️ Missing actual component structure/DOM hierarchy

**Recommendation:** Add visual anatomy diagrams similar to GitLab

---

### 3. Interactive Examples

| System | Interactive Examples | Format |
|--------|---------------------|--------|
| **Spectrum** | ❌ No | Static images |
| **GitLab** | ✅ Yes | Storybook embeds |
| **Nord Health** | ✅ Yes | 14+ CodePen embeds |
| **eBay** | ⚠️ Partial | Visual mockups |
| **OneDS** | ❌ **No** | Text-based ASCII art |

**OneDS Example:**
```
[Cancel]  [Submit Application]
          └─ Primary button
```

**Analysis:**
✅ ASCII examples are creative and lightweight
❌ Missing interactive code examples
❌ Can't test component behavior live
❌ No copy-paste code snippets

**Gap Identified:** OneDS lacks interactive examples entirely

**Recommendation:** Consider adding:
- Storybook integration (like GitLab)
- Or CodePen/CodeSandbox embeds (like Nord Health)
- Or at minimum, copyable code snippets

---

### 4. Technical Specifications

| System | Props/API Table | CSS Properties | Code Examples |
|--------|----------------|----------------|---------------|
| **Spectrum** | ✅ Yes (granular) | ✅ Yes (tokens) | ⚠️ Limited |
| **GitLab** | ✅ Yes (Vue props) | ❌ No | ✅ Yes (Vue) |
| **Nord Health** | ✅ **Yes (12 props table)** | ✅ **Yes (13 custom properties)** | ✅ Yes (Web Components) |
| **eBay** | ⚠️ In separate tab | ⚠️ In separate tab | ✅ Yes |
| **OneDS** | ❌ **Missing** | ❌ **Missing** | ❌ **Missing** |

**Nord Health Example Structure:**
```markdown
## Properties
| Property | Attribute | Description | Type | Default |
|----------|-----------|-------------|------|---------|
| variant | variant | Button visual style | 'primary' | 'secondary' | 'primary' |
| size | size | Button size | 'small' | 'medium' | 'large' | 'medium' |
| disabled | disabled | Disabled state | boolean | false |
```

**Analysis:**
❌ **Major Gap:** OneDS has no Props/API documentation
❌ Missing CSS custom properties/tokens reference
❌ No implementation code examples
⚠️ Specification section exists but different purpose (visual specs, not API)

**OneDS Current Specification Focus:**
- Visual measurements (height, padding, border radius)
- State descriptions (hover, active, disabled)
- Typography specs

**Gap:** Technical implementation details vs visual design specs

**Recommendation:** Add new section:
- **"API / Props"** - Component properties table
- **"Code Examples"** - Framework-specific snippets
- Keep existing "Specification" for visual design details

---

### 5. Usage Guidelines

| System | Format | Depth |
|--------|--------|-------|
| **Spectrum** | Prescriptive rules | Very detailed with rationale |
| **GitLab** | Strategic guidance | Context-focused |
| **Nord Health** | Do/Don't visual pairs | Visual + text |
| **eBay** | Decision framework | Choosing criteria |
| **OneDS** | **Do/Don't lists** | Concise bullet points |

**Spectrum Example:**
> "Use no more than 3 accent buttons in the same view. This helps establish a clear hierarchy by preventing conflicting actions."

**OneDS Example:**
```markdown
## Do
- Use action-oriented labels ("Save", "Delete", "Submit")
- Show loading state during async actions

## Don't
- Don't use vague labels like "OK" or "Click here"
- Don't have more than one primary button per section
```

**Analysis:**
✅ OneDS Do/Don't format is clear and scannable
✅ Action-oriented and practical
⚠️ Could add **rationale** for each guideline (why?)
⚠️ Could add **visual examples** for do/don't comparisons

**Opportunity:** Combine OneDS's concise format with rationale from Spectrum

---

### 6. Uses / When to Use

| System | Section Name | Approach |
|--------|--------------|----------|
| **Spectrum** | Options + Usage Guidelines | Integrated throughout |
| **GitLab** | Guidelines > Categories | Strategic context |
| **Nord Health** | When to Use | Brief list |
| **eBay** | Choosing a Button | Decision tree |
| **OneDS** | **Uses** | **Comprehensive scenarios** |

**OneDS Example:**
```markdown
## Uses

**Primary Use Cases:**
1. Form Submission - Save, Submit, Send
2. Confirmation - OK, Confirm, Accept
3. Deletion - Delete, Remove, Discard

**Example Scenarios:**
- Form Actions
- Danger Action
- Loading State
- Icon Button
- Button Group
```

**Analysis:**
✅ **Unique Strength:** OneDS has the most comprehensive "Uses" section
✅ Real-world scenarios with visual examples
✅ Covers multiple contexts and patterns
⚠️ Could organize as "When to use" + "When NOT to use"

**What OneDS Does Better:** More practical scenario coverage than any other system

---

### 7. Behavior Documentation

| System | Behavior Coverage | Detail Level |
|--------|------------------|--------------|
| **Spectrum** | Dedicated "Behaviors" section | Medium (focus, tooltips, overflow) |
| **GitLab** | Integrated in Guidelines | Low (mentioned in context) |
| **Nord Health** | Methods section | Low (programmatic only) |
| **eBay** | Placement + hierarchy focus | Medium (visual patterns) |
| **OneDS** | **Dedicated "Behavior" section** | **High (comprehensive)** |

**OneDS Behavior Section Includes:**
- States (default, hover, active, focus, loading, disabled)
- Interactions (click, keyboard, touch)
- Button Groups (horizontal, vertical, segmented)
- Animations (hover, press, loading, reduced motion)

**Analysis:**
✅ **Unique Strength:** Most comprehensive behavior documentation
✅ Covers all interaction methods (click, keyboard, touch)
✅ Includes animation specifications
✅ Reduced motion accessibility consideration

**What OneDS Does Better:** Behavior documentation depth exceeds all analyzed systems

---

### 8. Accessibility

| System | Accessibility Approach | Integration |
|--------|----------------------|-------------|
| **Spectrum** | Dedicated Keyboard Interactions section + integrated | Throughout |
| **GitLab** | Accessibility subsection + integrated notes | Throughout |
| **Nord Health** | Dedicated Accessibility section | Separate + integrated |
| **eBay** | **Dedicated Accessibility tab** | Separate tab |
| **OneDS** | **Dedicated Accessibility section** | Comprehensive, separate |

**OneDS Accessibility Coverage:**
- Semantic HTML examples
- ARIA attributes with code
- Keyboard navigation
- Screen reader support
- Focus management
- Button labels guidance
- Icon-only buttons
- Color & contrast
- Touch targets
- Loading states
- Button vs Link semantic distinction
- Disabled button alternatives
- Responsive considerations

**Analysis:**
✅ **Strength:** Comprehensive accessibility coverage
✅ Code examples with proper ARIA
✅ Practical guidance on common issues
✅ Covers multiple modalities (keyboard, screen reader, touch)
✅ Similar depth to Nord Health

**What OneDS Does Well:** Accessibility is thorough and practical

---

### 9. Content Guidelines

| System | Content Guidance | Specificity |
|--------|------------------|-------------|
| **Spectrum** | Dedicated "Content Standards" section | Detailed (verb-based, sentence case) |
| **GitLab** | Integrated in Guidelines | Context-specific |
| **Nord Health** | "Content Guidelines" section | Rule-based (1-2 words, no plurals) |
| **eBay** | Not prominent | Minimal |
| **OneDS** | **Integrated in Do/Don't** | Brief mentions |

**Spectrum Example:**
> "Use verbs that describe the action, such as 'Share' rather than 'Sharing'. Enforce sentence case formatting."

**Nord Health Example:**
> "Button text should start with a verb. Use 1-2 words. Avoid plurals if possible."

**OneDS Current:**
```markdown
## Do
- Use action-oriented labels ("Save", "Delete", "Submit")
- Start labels with verbs when possible
```

**Analysis:**
⚠️ **Gap:** OneDS has less detailed content guidelines
⚠️ Missing: Character limits, capitalization rules, punctuation
⚠️ Missing: Examples of good vs bad button text

**Recommendation:** Add dedicated "Content Guidelines" section with:
- Label writing rules (verbs, length, capitalization)
- Examples of good/bad labels
- Localization considerations

---

### 10. Framework Integration

| System | Framework Support | Implementation Details |
|--------|------------------|----------------------|
| **Spectrum** | React (primary) | React-specific props |
| **GitLab** | Vue (primary) | Vue component examples |
| **Nord Health** | **Web Components** | Framework-agnostic |
| **eBay** | Multiple (tabs) | Framework-specific tabs |
| **OneDS** | **Framework-agnostic** | No code examples |

**Analysis:**
⚠️ **Gap:** OneDS has no framework integration guidance
⚠️ Missing implementation code
⚠️ Developers don't know how to use components

**Options:**
1. **Framework-agnostic** (like Nord Health): Web Components approach
2. **Framework-specific**: React/Vue/Angular examples
3. **Multi-framework**: Separate implementation guides

**Recommendation:** Add implementation section with code examples

---

## Section Ordering Comparison

### Industry Standard Order (Most Common)

1. **Overview/Description** (What is it?)
2. **When to Use** (Decision framework)
3. **Examples** (Show it working)
4. **Anatomy** (What parts does it have?)
5. **Variants/Options** (What types exist?)
6. **Properties/API** (How to configure?)
7. **Behavior** (How does it work?)
8. **Content Guidelines** (What to write?)
9. **Accessibility** (How to make it accessible?)
10. **Code/Implementation** (How to build it?)

### OneDS Current Order

1. ✅ Description (What is it?)
2. ✅ Anatomy (What parts?)
3. ✅ Specification (Visual specs)
4. ✅ Do/Don't (Quick guidelines)
5. ✅ Uses (When to use - but later)
6. ✅ Behavior (How it works)
7. ✅ Accessibility (How to make accessible)

**Analysis:**
⚠️ "Uses" comes after Specification (should be earlier)
⚠️ Missing "Examples" early in flow
⚠️ Missing API/Props documentation
⚠️ Missing Code/Implementation

**Recommended OneDS Order:**

1. **Description** (Keep as is - engaging intro)
2. **When to Use** (Move "Uses" here, rename)
3. **Examples** (Add visual/interactive examples)
4. **Anatomy** (Keep - what parts)
5. **Variants** (Extract from Specification)
6. **Specification** (Visual design specs)
7. **Properties** (NEW - API/Props table)
8. **Behavior** (Keep - comprehensive)
9. **Content Guidelines** (NEW - button text rules)
10. **Do/Don't** (Keep - quick reference)
11. **Accessibility** (Keep - comprehensive)
12. **Code** (NEW - implementation examples)

---

## Writing Tone Comparison

### Tone Analysis

| System | Tone | Example |
|--------|------|---------|
| **Spectrum** | Prescriptive, formal | "Use no more than 3 accent buttons in the same view." |
| **GitLab** | Strategic, conversational | "Choose a category based on overall hierarchy on a given page, as well as individual contexts found within." |
| **Nord Health** | Technical, instructional | "announce the loading state to screen reader users" |
| **eBay** | Direct, action-oriented | "Use a single primary button for the most important action" |
| **OneDS** | **Conversational, engaging** | "Button is the workhorse of user interfaces—the primary way users trigger actions and make things happen." |

**Analysis:**
✅ **Unique Voice:** OneDS has the most personality
✅ Metaphors make concepts memorable
✅ Human-friendly language
⚠️ Some may prefer more formal tone

**Recommendation:** Keep conversational tone (it's a strength) but ensure technical accuracy

---

## Unique Approaches

### What Each System Does Uniquely Well

#### Adobe Spectrum
- **Hierarchical thinking**: Clear guidance on limiting accent buttons
- **Internationalization**: Dedicated RTL/localization section
- **Behavioral states**: Tooltip + focus interaction coverage

#### GitLab Design
- **Storybook integration**: Interactive examples first
- **Alignment philosophy**: F-pattern vs Z-pattern reading considerations
- **Deprecated guidance**: Documents what NOT to use anymore

#### Nord Health
- **Web Components approach**: Framework-agnostic
- **CSS Properties table**: 13 customizable CSS custom properties
- **Methods documentation**: Programmatic API (focus(), blur(), click())
- **Dependency mapping**: Shows which components it uses

#### eBay Playbook
- **Tabbed organization**: Separates Design/Develop/Motion/Accessibility
- **Decision framework**: "Choosing a button" section
- **Semantic distinction**: "Buttons take action, links navigate"

#### OneDS (Current Strengths)
- **Conversational tone**: Most engaging personality
- **Comprehensive "Uses"**: Best scenario coverage
- **Behavior depth**: Most detailed interaction documentation
- **Accessibility integration**: Thorough practical guidance
- **ASCII art examples**: Creative lightweight visualization

---

## Gap Analysis

### What OneDS is Missing

| Gap | Priority | Found In |
|-----|----------|----------|
| **Interactive code examples** | High | GitLab, Nord Health |
| **Props/API documentation** | High | Nord Health, Spectrum, GitLab |
| **Code implementation examples** | High | All systems |
| **Visual anatomy diagrams** | Medium | Spectrum, GitLab, eBay |
| **CSS custom properties** | Medium | Nord Health |
| **Content guidelines section** | Medium | Spectrum, Nord Health |
| **"When NOT to use" framework** | Low | Nord Health, eBay |
| **Framework-specific guidance** | Low | All except Nord Health |
| **Deprecated variants tracking** | Low | GitLab |

---

## Recommendations for OneDS

### Immediate Additions (High Priority)

1. **Add API/Props Section**
   - Create table with component properties
   - Include types, defaults, descriptions
   - Reference design tokens

2. **Add Code Examples**
   - HTML markup examples
   - React/Vue snippets (if applicable)
   - Or Web Components approach

3. **Add Interactive Examples**
   - Consider Storybook integration
   - Or embed CodePen/CodeSandbox
   - Minimum: More visual examples

### Content Improvements (Medium Priority)

4. **Visual Anatomy Diagrams**
   - Add SVG/PNG diagrams with labels
   - Show component parts visually
   - Include measurements

5. **Content Guidelines Section**
   - Dedicated button text rules
   - Examples of good/bad labels
   - Character limits, capitalization

6. **Reorganize Section Order**
   - Move "Uses" earlier (rename to "When to Use")
   - Add "Examples" near the top
   - Group related sections

### Optional Enhancements (Low Priority)

7. **When NOT to Use**
   - Add anti-patterns
   - Common mistakes
   - Alternative components

8. **CSS Custom Properties**
   - Document themeable properties
   - Show token integration

9. **Framework Integration**
   - Choose approach (agnostic vs specific)
   - Add implementation guides

---

## What OneDS Does Better

### OneDS Strengths to Maintain

1. **Conversational Tone** ✅
   - Most engaging documentation
   - Memorable metaphors
   - Human-friendly language
   - **Keep this unique voice**

2. **Comprehensive "Uses" Section** ✅
   - Best scenario coverage across all systems
   - Real-world examples
   - Multiple use case categories
   - **Industry-leading**

3. **Behavior Documentation Depth** ✅
   - Most detailed interaction patterns
   - Covers all input methods
   - Animation specifications
   - Reduced motion considerations
   - **More thorough than competitors**

4. **Integrated Accessibility** ✅
   - Throughout documentation
   - Practical code examples
   - Multiple modalities covered
   - **On par with best systems**

5. **ASCII Art Examples** ✅
   - Creative visualization
   - Lightweight and fast
   - Easy to understand
   - **Unique approach**

---

## Implementation Priority Matrix

### Priority 1: Critical Gaps (Do First)

```
┌─────────────────────────────────────────────┐
│ ⚠️  HIGH IMPACT, HIGH EFFORT                │
├─────────────────────────────────────────────┤
│ • Add Props/API documentation               │
│ • Add code implementation examples          │
│ • Add interactive examples (Storybook)      │
└─────────────────────────────────────────────┘
```

### Priority 2: Quality Improvements (Do Next)

```
┌─────────────────────────────────────────────┐
│ ✅ MEDIUM IMPACT, MEDIUM EFFORT             │
├─────────────────────────────────────────────┤
│ • Add visual anatomy diagrams               │
│ • Create Content Guidelines section         │
│ • Reorganize section order                  │
│ • Add "When NOT to use" guidance            │
└─────────────────────────────────────────────┘
```

### Priority 3: Nice to Have (Do Later)

```
┌─────────────────────────────────────────────┐
│ 💡 LOW IMPACT, LOW EFFORT                   │
├─────────────────────────────────────────────┤
│ • Document CSS custom properties            │
│ • Add framework-specific examples           │
│ • Track deprecated variants                 │
│ • Add internationalization guidance         │
└─────────────────────────────────────────────┘
```

---

## Conclusion

OneDS has **strong foundations** with its conversational tone, comprehensive behavior documentation, and excellent "Uses" section. However, it's missing **critical technical documentation** that developers need: Props/API tables, code examples, and interactive demos.

### Strategic Approach

**Keep:**
- Conversational, engaging tone
- Comprehensive behavior documentation
- Thorough accessibility guidance
- ASCII art examples (supplement, don't replace)

**Add:**
- Props/API documentation (like Nord Health)
- Code implementation examples (like GitLab)
- Interactive examples (like Nord Health/GitLab)
- Visual anatomy diagrams (like Spectrum/GitLab)

**Improve:**
- Section organization (follow industry standards)
- Content guidelines (learn from Spectrum)
- "When to use" positioning (earlier in doc)

### Next Steps

1. Review this comparison with team
2. Prioritize additions based on user needs (designers vs developers)
3. Create templates for new sections
4. Gradually enhance existing component docs
5. Maintain OneDS's unique voice while adding technical depth

---

**Systems Analyzed:**
- ✅ Adobe Spectrum
- ✅ GitLab Design
- ✅ Nord Health
- ✅ eBay Playbook
- ✅ OneDS (Current)

**Not Analyzed:**
- Carbon Design System (content not accessible via WebFetch)
- Elastic UI (content not accessible via WebFetch)
- Blueprint JS (content not accessible via WebFetch)
- Wise Design (content not accessible via WebFetch)
