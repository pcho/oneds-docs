---
title: Label
description: "Documentation for Label component"
---

## Description

Labels provide descriptive titles for form elements, giving essential context by linking each field to its name. Clear, concise labels are the foundation of accessible, user-friendly forms—guiding users through data entry with clarity and confidence.

## Anatomy

1. **Title Text** - Descriptive field name
2. **Required Indicator** - Asterisk (*) for required fields (optional)
3. **Optional Tag** - "(optional)" text for optional fields (optional)

## Specification

**Label:**
- **Font Size**: `text-base`
- **Font Weight**: `font-weight-emphasized`
- **Color**: `--text-normal`
- **Line Height**: `1.43` (20px / 14px)
- **Gap Below**: `radius-small` (space to next element)
- **Display**: Block (full width)

**Required Indicator:**
- **Symbol**: `*` (asterisk)
- **Color**: `--text-brand`
- **Font Size**: `text-lg`
- **Font Weight**: `font-weight-semibold`
- **Position**: After label text
- **Spacing**: `spacing-1` gap before asterisk

**Optional Tag:**
- **Text**: "(optional)"
- **Color**: `--text-lighter`
- **Font Weight**: `font-weight-normal`
- **Position**: After label text

## Do

- Keep labels concise—add extra details in Helper Text when needed
- Mark required fields with an asterisk (*)
- Keep labels short (1-3 words is ideal)
- Use sentence case
- Place labels above input fields
- Align labels with their inputs
- Use consistent labeling patterns across forms

## Don't

- Place icons before labels
- Use labels as standalone page elements
- Make label text excessively large—it hinders scanning
- Use labels as placeholders
- Hide required indicators
- Make labels too long
- Use unclear abbreviations

## Uses

**Primary Use Cases:**

1. **Form Fields** - Text inputs, selects, textareas
2. **Checkboxes** - Checkbox groups and individual checkboxes
3. **Radio Buttons** - Radio button groups
4. **File Uploads** - File input labels
5. **Date Pickers** - Date selection fields
6. **Switches** - Toggle switch labels

## Behavior

**Static Display:**
- Labels stay visible always
- Never disappear on focus
- Keep position above field
- Maintain clear relationship to input

**Required vs Optional:**
- Mark required fields with * (asterisk)
- Or mark optional fields with "(optional)"
- Stay consistent across the entire form
- Pick one approach—don't mark both
