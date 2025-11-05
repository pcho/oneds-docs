# OneDS Color System Reference

**Source:** Foundations file - Colors canvas
**Extracted:** November 4, 2025

---

## Neutral (Grays)

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#F9FAFB` | Lightest background |
| `neutral-100` | `#F4F6F8` | Light background, table header |
| `neutral-200` | `#ECEEF0` | Borders, dividers |
| `neutral-300` | `#D1D6DB` | Borders, disabled states |
| `neutral-400` | `#9CA5AF` | Placeholder text |
| `neutral-500` | `#7E8A96` | Secondary text |
| `neutral-600` | `#6B7680` | Body text (light) |
| `neutral-700` | `#535D67` | Body text |
| `neutral-800` | `#2A353F` | Primary text, headings |
| `neutral-900` | `#1A242F` | Darkest text |
| `neutral-950` | `#131A21` | Maximum contrast |

## Blue (Primary)

| Token | Hex | Usage |
|-------|-----|-------|
| `blue-50` | `#F5F7FF` | Lightest blue background |
| `blue-100` | `#EDF1FF` | Light blue background |
| `blue-200` | `#D1E0FF` | Very light accent |
| `blue-300` | `#B2CCFF` | Light accent |
| `blue-400` | `#84ADFF` | Medium blue |
| `blue-500` | `#528BFF` | Default blue |
| `blue-600` | `#2970FF` | Primary blue |
| `blue-700` | `#155EEF` | **Primary action, required indicator** |
| `blue-800` | `#054FD3` | Dark blue |
| `blue-900` | `#033497` | Darker blue |
| `blue-950` | `#001F59` | Darkest blue |

## Purple (Brand/AI)

| Token | Hex | Usage |
|-------|-----|-------|
| `purple-50` | `#FCFAFF` | Lightest purple |
| `purple-100` | `#F9F5FF` | Light purple background |
| `purple-200` | `#F4EBFF` | Very light purple |
| `purple-300` | `#EBDCFC` | Light purple accent |
| `purple-400` | `#D6BBFB` | Medium purple |
| `purple-500` | `#B692F6` | Default purple |
| `purple-600` | `#9E77ED` | Primary purple |
| `purple-700` | `#7F56D9` | AI features, brand |
| `purple-800` | `#6941C6` | Dark purple |
| `purple-900` | `#42307D` | Darker purple |
| `purple-950` | `#2C1C5F` | Darkest purple |

## Green (Success)

| Token | Hex | Usage |
|-------|-----|-------|
| `green-50` | `#F6FEF9` | Lightest green |
| `green-100` | `#ECFDF3` | Light green background |
| `green-200` | `#DBFAE6` | Very light green |
| `green-300` | `#A9EFC5` | Light green accent |
| `green-400` | `#75E0A7` | Medium green |
| `green-500` | `#47CD89` | Default green |
| `green-600` | `#17B26A` | **Success state** |
| `green-700` | `#079455` | Dark green |
| `green-800` | `#067647` | Darker green |
| `green-900` | `#074D31` | Darkest green |
| `green-950` | `#053321` | Maximum green |

## Red (Error/Danger)

| Token | Hex | Usage |
|-------|-----|-------|
| `red-50` | `#FFFBFA` | Lightest red |
| `red-100` | `#FEF3F2` | Light red background |
| `red-200` | `#FEE4E2` | Very light red |
| `red-300` | `#FECDCA` | Light red accent |
| `red-400` | `#FDA29B` | Medium red |
| `red-500` | `#F97066` | Default red |
| `red-600` | `#F04438` | **Error state** |
| `red-700` | `#D92D20` | Dark red |
| `red-800` | `#B42318` | Darker red |
| `red-900` | `#7A271A` | Darkest red |
| `red-950` | `#55160C` | Maximum red |

## Yellow (Warning)

| Token | Hex | Usage |
|-------|-----|-------|
| `yellow-50` | `#FFFCF5` | Lightest yellow |
| `yellow-100` | `#FFFAEB` | Light yellow background |
| `yellow-200` | `#FEF0C7` | Very light yellow |
| `yellow-300` | `#FEDF89` | Light yellow accent |
| `yellow-400` | `#FEC84B` | Medium yellow |
| `yellow-500` | `#FDB022` | Default yellow |
| `yellow-600` | `#F79009` | **Warning state** |
| `yellow-700` | `#DC6803` | Dark yellow/orange |
| `yellow-800` | `#B54708` | Darker yellow |
| `yellow-900` | `#792E0D` | Darkest yellow |
| `yellow-950` | `#4E1D09` | Maximum yellow |

## Cyan (Info)

| Token | Hex | Usage |
|-------|-----|-------|
| `cyan-50` | `#F5FBFF` | Lightest cyan |
| `cyan-100` | `#F0F9FF` | Light cyan background |
| `cyan-200` | `#E0F2FE` | Very light cyan |
| `cyan-300` | `#B9E6FE` | Light cyan accent |
| `cyan-400` | `#7CD4FD` | Medium cyan |
| `cyan-500` | `#00C3FF` | Default cyan |
| `cyan-600` | `#0BA5EC` | **Info state** |
| `cyan-700` | `#0086C9` | Dark cyan |
| `cyan-800` | `#026AA2` | Darker cyan |
| `cyan-900` | `#0B4A6F` | Darkest cyan |
| `cyan-950` | `#062C41` | Maximum cyan |

---

## Common Incorrect Values in Documentation

### ❌ What I Incorrectly Used:

| My Assumption | Actual OneDS Value | Token |
|---------------|-------------------|-------|
| `#262626` (text) | `#2A353F` | `neutral-800` |
| `#595959` (text) | `#535D67` or `#6B7680` | `neutral-700` or `neutral-600` |
| `#8C8C8C` (secondary) | `#7E8A96` or `#9CA5AF` | `neutral-500` or `neutral-400` |
| `#FAFAFA` (bg) | `#F9FAFB` or `#F4F6F8` | `neutral-50` or `neutral-100` |
| `#ECEEF0` (border) | `#ECEEF0` ✅ | `neutral-200` ✅ |
| `#D9D9D9` (border) | `#D1D6DB` | `neutral-300` |
| `#FFFFFF` (white) | `#FFFFFF` ✅ | White ✅ |
| `#1890FF` (primary) | `#2970FF` or `#155EEF` | `blue-600` or `blue-700` |
| `#E6F7FF` (light blue) | `#EDF1FF` or `#D1E0FF` | `blue-100` or `blue-200` |
| `#FF4D4F` (error/required) | `#F04438` or `#155EEF` (!) | `red-600` or `blue-700`! |
| `#52C41A` (success) | `#17B26A` | `green-600` |
| `#FAAD14` (warning) | `#F79009` | `yellow-600` |

---

## Semantic Color Usage

### Primary Actions
- **Primary button**: `blue-700` (#155EEF)
- **Primary hover**: `blue-800` (#054FD3)
- **Required indicator**: `blue-700` (#155EEF) ⚠️ **Not red!**

### Text Colors
- **Primary heading**: `neutral-800` (#2A353F)
- **Body text**: `neutral-700` (#535D67)
- **Secondary text**: `neutral-600` (#6B7680) or `neutral-500` (#7E8A96)
- **Placeholder**: `neutral-400` (#9CA5AF)
- **Disabled**: `neutral-300` (#D1D6DB)

### Background Colors
- **Page background**: `#FFFFFF` (white)
- **Card background**: `#FFFFFF` (white)
- **Hover background**: `neutral-50` (#F9FAFB)
- **Table header**: `neutral-100` (#F4F6F8)
- **Expanded container**: `neutral-50` (#F9FAFB)

### Border Colors
- **Default border**: `neutral-200` (#ECEEF0)
- **Subtle border**: `neutral-300` (#D1D6DB)
- **Input border**: `neutral-300` (#D1D6DB)
- **Focus border**: `blue-700` (#155EEF)

### Status Colors
- **Success**: `green-600` (#17B26A)
- **Success background**: `green-100` (#ECFDF3)
- **Error**: `red-600` (#F04438)
- **Error background**: `red-100` (#FEF3F2)
- **Warning**: `yellow-600` (#F79009)
- **Warning background**: `yellow-100` (#FFFAEB)
- **Info**: `cyan-600` (#0BA5EC) or `blue-700` (#155EEF)
- **Info background**: `cyan-100` (#F0F9FF) or `blue-100` (#EDF1FF)

### AI/Special Features
- **AI indicator**: `purple-700` (#7F56D9)
- **AI background**: `purple-100` (#F9F5FF)
- **AI button**: Purple gradient

---

## Critical Corrections Needed

### 1. Required Field Indicator
**WRONG:** `#FF4D4F` (red)
**CORRECT:** `#155EEF` (blue-700)
**Reason:** Design system uses blue for required, not red!

### 2. Primary Blue
**WRONG:** `#1890FF` (Ant Design default)
**CORRECT:** `#155EEF` (blue-700) or `#2970FF` (blue-600)
**Reason:** Custom blue, not Ant Design default

### 3. Text Colors
**WRONG:** `#262626`, `#595959`, `#8C8C8C`
**CORRECT:** `#2A353F`, `#535D67`, `#7E8A96`
**Reason:** Custom gray scale

### 4. Background Colors
**WRONG:** `#FAFAFA`
**CORRECT:** `#F9FAFB` (neutral-50) or `#F4F6F8` (neutral-100)
**Reason:** Specific to context - table header uses neutral-100

---

## Next Steps

1. ✅ Extracted complete color palette
2. ⏳ Find/replace incorrect colors across all documentation
3. ⏳ Verify each component's color usage against Figma
4. ⏳ Update pattern files with correct colors
5. ⏳ Create usage guidelines for each color

---

*This color system reference is the single source of truth for all color values in OneDS documentation.*
