# Component Specification Audit

**Date:** November 4, 2025
**Purpose:** Verify all component documentation matches Figma specifications exactly
**Issue:** Documentation contained assumed values instead of verified Figma specs

---

## Audit Status

| Component | Status | Issues Found | Fixed |
|-----------|--------|--------------|-------|
| Label | ✅ Audited | 5 spec errors | ✅ Yes |
| Tag | ✅ Audited | 6 spec errors | ✅ Yes (earlier) |
| Modal | ✅ Audited | 2 spec errors | ✅ Yes (earlier) |
| Table | ⏳ In Progress | TBD | - |
| Tabs | ⏳ In Progress | TBD | - |
| Tooltip | ⏳ In Progress | TBD | - |
| Breadcrumbs | ⏳ In Progress | TBD | - |
| Drawer | ⏳ In Progress | TBD | - |
| Notification | ⏳ In Progress | TBD | - |
| Action Bar | ⏳ In Progress | TBD | - |

---

## Label Component - FIXED ✅

**Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1369-61918

### Issues Found:

1. ❌ **Label text color**
   - Documented: `#262626`
   - Actual: `#2A353F`
   - **Fixed:** ✅

2. ❌ **Line height**
   - Documented: `1.5`
   - Actual: `1.43` (1.4285714285714286)
   - **Fixed:** ✅

3. ❌ **Gap below label**
   - Documented: `4px` margin bottom
   - Actual: `6px` gap
   - **Fixed:** ✅

4. ❌ **Required asterisk color** (CRITICAL)
   - Documented: `#FF4D4F` (red)
   - Actual: `#155EEF` (blue)
   - **Fixed:** ✅

5. ❌ **Asterisk font size**
   - Documented: `14px` (same as label)
   - Actual: `16px`
   - **Fixed:** ✅

6. ❌ **Asterisk font weight**
   - Documented: Not specified
   - Actual: `600` (semi-bold)
   - **Fixed:** ✅

### Verified Correct:
- ✅ Label font size: `14px`
- ✅ Label font weight: `500`
- ✅ Asterisk spacing: `4px` gap

---

## Tag Component - FIXED ✅

**Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1335-105041

### Issues Found (Fixed Earlier):

1. ❌ Border radius: `4px` → Should be `6px` ✅
2. ❌ Default height: `24px` → Should be `32px` ✅
3. ❌ Default padding: `4px 8px` → Should be `6px` ✅
4. ❌ Small height: `20px` → Should be `24px` ✅
5. ❌ Small padding: `2px 6px` → Should be `4px` ✅
6. ❌ Had non-existent "Large" size → Removed ✅

---

## Modal Component - FIXED ✅

**Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1825-161022

### Issues Found (Fixed Earlier):

1. ❌ Border radius: `8px` → Should be `12px` ✅
2. ❌ Footer padding: `16px 24px` → Should be `24px` ✅

---

## Components Requiring Audit

### Table - AUDITING ⏳
- **File:** `/components/table.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1343-105298
- **Status:** Issues found
- **Priority:** High (complex component)

**Issues Found:**

1. ❌ **Table Header Background**
   - Documented: `#FAFAFA`
   - Actual: `#F4F6F8`
   - **Status:** Needs fix

2. ⚠️ **Hover/Selected States**
   - Documented: Hover `#FAFAFA`, Selected `#E6F7FF`
   - Actual: Not found in Figma spec (need to verify state styles)
   - **Status:** Needs verification

3. ❌ **Expanded Container Background**
   - Documented: Not mentioned
   - Actual: `#F9FAFB`
   - **Status:** Missing from documentation

**Verified Correct:**
- ✅ Border: `#ECEEF0`
- ✅ Background: `#FFFFFF`
- ✅ Cell padding: `12px` (16px in row includes 12px cell padding)
- ✅ Row height: `64px` (matches Figma)

### Tabs
- **File:** `/components/tabs.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1335-105153
- **Status:** Needs verification
- **Priority:** High

### Tooltip
- **File:** `/components/tooltip.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1335-105043
- **Status:** Needs verification
- **Priority:** Medium

### Breadcrumbs
- **File:** `/components/breadcrumbs.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1335-105155
- **Status:** Needs verification
- **Priority:** Medium

### Drawer
- **File:** `/components/drawer.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=15422-250
- **Status:** Needs verification
- **Priority:** High (complex component)

### Notification
- **File:** `/components/notification.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=1357-65940
- **Status:** Needs verification
- **Priority:** High

### Action Bar
- **File:** `/components/action-bar.md`
- **Figma:** https://www.figma.com/design/aNfMKOVqeyNQZEHshrL1BE/Components?node-id=7974-20972
- **Status:** Needs verification
- **Priority:** High

---

## Pattern Files to Review

Pattern files may contain color specifications that need verification:

- `/patterns/behaviours/common.md` - Button colors, action colors
- `/patterns/behaviours/table.md` - Table colors
- `/patterns/behaviours/action-bar.md` - Action bar colors
- `/patterns/behaviours/modal.md` - Modal colors
- `/patterns/behaviours/drawer.md` - Drawer colors
- `/patterns/behaviours/notification.md` - Notification type colors
- `/patterns/behaviours/filtering.md` - Filter UI colors
- `/patterns/behaviours/global-search.md` - Search UI colors
- `/patterns/navigation/header.md` - Header colors
- `/patterns/flows/multi-step-creation.md` - Stepper colors
- `/patterns/features/ai-integration.md` - AI UI colors

---

## Common Color Issues Found

Based on audits so far, common mistakes include:

1. **Text Colors**
   - Using `#262626` instead of actual color
   - Assuming standard Ant Design colors

2. **Semantic Colors**
   - Assuming red (`#FF4D4F`) for required/error
   - Actual may be blue (`#155EEF`) or other colors

3. **Grays**
   - Using assumed values like `#8C8C8C`, `#595959`
   - Need to verify each usage

4. **Primary Blue**
   - Using `#1890FF` (Ant Design default)
   - Actual may be different

5. **Backgrounds**
   - Using assumed values for hover/active states
   - Need verification from Figma

---

## Audit Process

For each component:

1. ✅ Read current documentation
2. ✅ Extract component node ID from Figma URL
3. ✅ Use MCP to get actual Figma specifications
4. ✅ Compare documented values vs actual values
5. ✅ Document all discrepancies
6. ✅ Fix incorrect values
7. ✅ Mark as audited

---

## Next Steps

1. Continue auditing remaining components (Table, Tabs, Tooltip, etc.)
2. Extract color palette from Foundations file
3. Create color token reference document
4. Update all pattern files with correct colors
5. Create verification checklist for future documentation

---

*This audit is critical to ensure implementation matches design specifications exactly.*
