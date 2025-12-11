---
title: Chart
description: "Documentation for Chart component"
---

## Description

Transform data into visual stories people actually understand. Chart is a flexible visualization system with multiple types: columns, bubbles, arrows, legends, and even a world map for geographic data. Whether you're showing trends, comparisons, distributions, or locations, charts make complex data instantly graspable.

Your data's visual translator—turning numbers into insights at a glance.

## Anatomy

### Core Components

1. **Chart Container** - Main canvas for visualization
2. **Chart Columns** - Vertical bars for comparing values
3. **Bubbles** - Circular data points with varying sizes
4. **Arrows** - Directional indicators for trends or connections
5. **World Map** - Geographic visualization surface (1221.38×602px)
6. **Legend** - Key explaining what colors/symbols mean
7. **Legend Symbol** - Visual marker (line, circle, square, etc.)
8. **Legend Item** - Symbol + label combination
9. **Chart Placeholder** - Empty state when no data exists

### Legend Components

- **Legend Symbol** - Various shapes and styles to match chart elements
- **Legend Item** - Horizontal layout with symbol + text label
  - Layout: Row, center-aligned
  - Gap: `spacing-2` between symbol and label
  - Sizing: Hug content (auto width/height)

## Specification

### World Map
- **Dimensions**: `1221.38px × 602px`
- **Use**: Geographic data visualization
- **Style**: Vector-based, scalable

### Chart Columns
- **Component Set**: Multiple column variants
- **Dimensions Container**: `680px × 978px`
- **Use**: Bar charts, histograms, comparisons
- **Variants**: Different heights, colors, states

### Bubbles
- **Component Set**: Various sizes
- **Dimensions Container**: `340px × 650px`
- **Use**: Scatter plots, bubble charts
- **Sizing**: Variable based on data value

### Arrows
- **Component Set**: Directional indicators
- **Dimensions Container**: `73px × 273px`
- **Use**: Trends, connections, flow diagrams
- **Variants**: Different directions and styles

### Legend
- **Component Set**: Multiple layout options
- **Dimensions Container**: `388px × 190px`
- **Layout**: Flexible arrangement
- **Variants**: Horizontal, vertical, wrapped

### Legend Symbol
- **Component Set**: Various shapes
- **Dimensions Container**: `50px × 74px`
- **Shapes**: Line, circle, square, diamond, etc.
- **Colors**: Match chart data series

### Legend Item
- **Layout**: Horizontal row
- **Alignment**: Center-aligned
- **Gap**: `spacing-2` between symbol and label
- **Sizing**: Auto width/height (hug content)

### Chart Placeholder
- **Component Set**: Empty states
- **Dimensions Container**: `1426px × 286px`
- **Use**: No data state, loading state
- **Content**: Message + optional icon/illustration

## Do

- Keep colors consistent between charts and legends
- Label axes clearly with units (%, $, etc.)
- Include legends for multiple data series
- Choose the right chart type (bars for comparison, lines for trends)
- Make charts responsive to their container
- Show detailed tooltips on hover
- Display placeholder states while loading
- Position legends near their charts
- Use the world map for geographic data

## Don't

- Use too many colors—it confuses people
- Skip axis labels—unlabeled charts are meaningless
- Make charts too small to read comfortably
- Add 3D effects—they distort data perception
- Truncate the zero baseline on bar charts—that's misleading
- Use pie charts for more than 5-6 categories
- Forget units—always show %, $, or whatever applies
- Hide hover states—make interaction obvious

## Uses

**Primary Use Cases:**

1. **Trend Analysis** - Line charts showing changes over time
2. **Comparisons** - Bar/column charts comparing categories
3. **Distributions** - Scatter plots, bubble charts showing correlations
4. **Geographic Data** - World map for location-based metrics
5. **Part-to-Whole** - Showing proportions and percentages
6. **Flow Visualization** - Arrows showing processes or connections
7. **Dashboard Widgets** - Multiple small charts showing KPIs

**Example Scenarios:**

**Patent Analytics:**
- Column chart: Patent applications per year
- World map: Geographic distribution of patents
- Bubble chart: Innovation clusters (size = number of patents, position = technology area)
- Line chart: Patent approval rate trends over time
- Arrows: Patent citation flow between companies

**Business Metrics:**
- Column chart: Quarterly revenue comparison
- Legend: Different product lines with color coding
- Placeholder: "No data available for this period"
- Bubble chart: Customer segments (size = revenue, axes = satisfaction × retention)

**Research Data:**
- Scatter plot with bubbles: Research output by institution
- World map: Collaboration networks across countries
- Column chart: Publications by category
- Legend: Different research areas with symbols

## Behavior

### States

**Chart States:**
- **Loading** - Skeleton or placeholder with spinner
- **Empty** - Placeholder with "No data" message
- **Populated** - Full chart with data
- **Hover** - Interactive elements respond to pointer
- **Selected** - Clicked data point highlighted
- **Filtered** - Subset of data shown based on filters

**Interactive Elements:**
- **Hover**: Tooltip appears with detailed values
- **Click**: Data point selects/highlights
- **Legend Click**: Toggle series visibility
- **Zoom**: Pan and zoom for detailed inspection

### Interactions

**Hover:**
Tooltips appear near the cursor showing detailed values. Related legend items highlight, data points emphasize (larger, brighter), and optional crosshairs show exact positions.

**Selection:**
Click data points to select them. The selection persists, related data highlights across the chart, and you can multi-select with Ctrl/Cmd+Click.

**Legend:**
Click legend items to show/hide entire series. Hover to highlight series. Visual feedback clearly shows enabled/disabled states.

**Zoom & Pan:**
Scroll to zoom, drag to pan when zoomed. A reset button returns to default view. Touch devices support pinch gestures.

### Animations

Data animates in smoothly on initial load. Updates transition between states gracefully. Hover adds subtle scale or emphasis. Sorting and filtering animate the reordering. Most transitions take 300-500ms and respect the prefers-reduced-motion setting.

### Responsiveness

Charts size to their container width. Font sizes scale proportionally. Legend position adapts—bottom on narrow screens, side on wide ones. Touch targets are minimum 44px on mobile. Very small screens get simplified views.

