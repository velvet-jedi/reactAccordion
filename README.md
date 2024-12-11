# Accessible React Accordion Component

## Project Overview

This React Accordion component demonstrates a fully accessible, keyboard-navigable UI component that allows users to expand and collapse content sections dynamically.

## Key Features

-   🌟 Single accordion open at a time
-   ♿ Full keyboard support
-   🔍 WCAG accessibility compliance
-   🎨 Responsive and smooth transitions
-   🧩 Modular component design

## Accessibility Challenges & Solutions

### 1. Semantic Accessibility

#### Problem

Many UI components misuse HTML elements, breaking accessibility standards.

#### Solution

-   Used semantic `<button>` for interactions instead of `<div>`
-   Implemented proper ARIA attributes to convey component state
-   Ensured keyboard operability for all interactions

### 2. State Management & Visibility

#### Problem

Dynamically showing/hiding content while maintaining proper screen reader context.

#### Solution

-   Implemented `aria-expanded` attribute to indicate current state
-   Used `aria-hidden` to explicitly control content visibility
-   Added `aria-controls` to link trigger buttons with content regions

### 3. Keyboard Navigation

#### Problem

Ensuring full keyboard accessibility without mouse interaction.

#### Solution

-   Added `tabIndex={0}` to focusable elements
-   Implemented focus management with `useRef` and `useEffect`
-   Created keyboard-friendly toggle mechanism

### 4. Dynamic Content Focus

#### Problem

Automatically focusing newly revealed content for screen reader users.

#### Solution

-   Used `useEffect` to focus content when expanded
-   Added `role="region"` for proper screen reader announcement
-   Implemented `aria-labelledby` for contextual linking

## Component Architecture

The accordion is composed of four key components:

1. **Parent Wrapper (`App.js`)**:

    - Manages global accordion state
    - Controls which accordion is currently expanded
    - Maps accordion data to individual components

2. **Accordion Component (`Accordion.js`)**:

    - Renders individual accordion sections
    - Handles local interaction and accessibility attributes
    - Receives expansion state from parent

3. **Heading Button**:

    - Triggers content expansion
    - Provides visual and semantic state indication
    - Manages ARIA attributes for accessibility

4. **Content Region**:
    - Dynamically shows/hides based on state
    - Ensures proper focus and screen reader behavior

## Styling Approach

### Flexbox Centering

```css
.app-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
```

### Transition Animations

-   Smooth max-height transitions
-   Opacity animations for content
-   Rotational icon indicator

## Accessibility ARIA Attributes Used

-   `aria-expanded`: Indicates current open/closed state
-   `aria-hidden`: Controls element visibility
-   `aria-controls`: Links trigger and content elements
-   `aria-labelledby`: Provides contextual labeling
-   `role="region"`: Defines content section for assistive technologies
