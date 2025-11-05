## Description

Chart is a flexible data visualization system that transforms complex data into clear, visual stories. It includes various chart types, legends, bubbles, arrows, and even a world map for geographic data. Whether you're showing trends, comparisons, distributions, or locations, the chart component makes data easy to understand at a glance.

Think of it as your data's visual translator—turning numbers into insights that anyone can grasp quickly.

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
  - Gap: `8px` between symbol and label
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
- **Gap**: `8px` between symbol and label
- **Sizing**: Auto width/height (hug content)

### Chart Placeholder
- **Component Set**: Empty states
- **Dimensions Container**: `1426px × 286px`
- **Use**: No data state, loading state
- **Content**: Message + optional icon/illustration

## Do

- Use consistent colors across chart and legend
- Provide clear axis labels and units
- Include legends when showing multiple data series
- Use appropriate chart type for your data (bars for comparison, lines for trends, etc.)
- Make charts responsive to container width
- Show tooltips on hover for detailed values
- Use placeholder states when data is loading or unavailable
- Keep legends near the chart they describe
- Use world map for geographic distribution data

## Don't

- Don't use too many colors—it becomes confusing
- Don't forget axis labels—unlabeled charts are meaningless
- Don't make charts too small to read
- Don't use 3D effects—they distort data perception
- Don't omit zero baseline on bar/column charts (misleading)
- Don't use pie charts for more than 5-6 categories
- Don't forget to show units (%, $, etc.)
- Don't make interactive elements unclear—show hover states

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

**Hover Behavior:**
- Tooltip appears near cursor/data point
- Related legend item highlights
- Data point emphasizes (larger, brighter, etc.)
- Crosshairs show exact position (optional)

**Selection:**
- Click data point to select
- Selected state persists
- Related data highlights across chart
- Can multi-select with Ctrl/Cmd+Click

**Legend Interaction:**
- Click legend item to show/hide series
- Hover legend item to highlight series
- Visual feedback shows enabled/disabled state

**Zoom & Pan:**
- Scroll to zoom in/out
- Drag to pan around zoomed view
- Reset button returns to default view
- Pinch gestures on touch devices

### Animations

- **Initial Load**: Data animates in smoothly
- **Data Update**: Smooth transitions between states
- **Hover**: Subtle scale or emphasis effect
- **Sort/Filter**: Animated reordering
- **Duration**: 300-500ms for most transitions
- **Respects**: prefers-reduced-motion setting

### Responsiveness

- Container-based sizing (uses available width)
- Font sizes scale with chart size
- Legend position adapts (bottom on narrow, side on wide)
- Touch-friendly targets on mobile (minimum 44px)
- Simplified view on very small screens

## Accessibility

**Keyboard Navigation:**
- `Tab` - Navigate between interactive elements
- `Arrow Keys` - Move between data points
- `Enter/Space` - Select focused data point
- `Escape` - Clear selection, close tooltips
- `+/-` - Zoom in/out (optional)
- `Home/End` - Jump to first/last data point

**Screen Reader Support:**
- Descriptive title announced first
- Axis labels and units clearly stated
- Data series described: "Sales data, 12 data points"
- Each data point announced with context: "January, $45,000"
- Legend items announced: "Revenue shown as blue line"
- Trend summary provided: "Overall trend: increasing 15% year over year"
- Alternative: Data table provided alongside chart

**ARIA Attributes:**
- `role="img"` on chart container
- `aria-label` describes chart content
- `aria-labelledby` links to chart title
- `aria-describedby` provides detailed description
- `aria-hidden="true"` on decorative elements
- Live regions announce dynamic updates

**Data Table Alternative:**
- Provide "View as Table" option
- Screen reader can access raw data
- Sortable and searchable table
- Download CSV option available

**Color & Contrast:**
- Don't rely on color alone—use patterns, shapes, labels
- Minimum 3:1 contrast for graphical elements
- Minimum 4.5:1 contrast for text labels
- Test in grayscale to verify readability
- Provide high contrast theme option

**Patterns & Textures:**
- Use different line styles (solid, dashed, dotted)
- Use different shapes for data points (circle, square, triangle)
- Add texture fills to distinguish areas
- Combine color with pattern for redundancy

**Focus Indicators:**
- Clear focus ring on interactive elements
- Focus visible on all data points when navigating
- Logical focus order follows visual layout
- Focus returns appropriately after interactions

**Motion & Animation:**
- Respect `prefers-reduced-motion`
- Provide instant render option (skip animations)
- Keep animations brief and purposeful
- Don't auto-play infinite animations

**Tooltips:**
- Keyboard accessible (show on focus)
- Persist long enough to read
- Can be dismissed without mouse
- Announced to screen readers
- Don't hide essential information in tooltips alone
