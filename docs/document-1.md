# Documentation — Frontend changes (2026-04-10)

## Goal
- Move the **Labs/isometric campus map UI** into **Dashboard**
- Remove the separate **Labs window/page**
- Make the map fit in a **single frame** (no scrolling/dragging)
- Fix **Campus404 logo** not appearing
- Make the **Home page** look more **gaming/awesome** and remove the old banner image

## Summary of changes

### 1) Dashboard shows the campus map
- **What**: `Dashboard` now renders the same UI that was previously under the `Labs` page.
- **Result**: Clicking **Dashboard** takes you directly to the campus map.
- **File**: `client/src/pages/Dashboard.jsx`

### 2) Removed the “Labs window” by redirecting `/labs`
- **What**: The `/labs` route no longer shows its own page; it redirects to `/dashboard`.
- **Result**: Old links to `/labs` still work but land on **Dashboard**.
- **File**: `client/src/App.jsx`

### 3) Navigation updated (no Labs tab)
- **What**: Header navigation no longer shows a separate “Labs” link.
- **Result**: Users navigate using **Dashboard** for the map.
- **File**: `client/src/components/Header.jsx`

### 4) Home buttons route to Dashboard
- **What**: Home “Enter Campus” routes to `/dashboard`.
- **File**: `client/src/pages/Home.jsx`

### 5) Campus map: single-frame scaling (no scroll)
- **What**:
  - Map container uses viewport height under the header and disables scrolling.
  - Map is wrapped in a “stage” that auto-scales to fit the frame.
- **Files**:
  - `client/src/pages/Labs.jsx`
  - `client/src/pages/CampusWorld.css`

### 6) Map link cleanup
- **What**: The “battle” building link was changed from `/labs` → `/dashboard`.
- **File**: `client/src/pages/Labs.jsx`

### 7) Logo fix in header
- **Issue**: `logo.svg` was imported correctly, but styles for `.logo` / `.logo-container` were not active because older styles existed in a CSS file that wasn’t applied.
- **Fix**: Added `.logo-container` and `.logo` styles into the active global stylesheet.
- **File**: `client/src/index.css`

### 8) Home page redesign (gaming style)
- **What**:
  - Removed the old banner image section.
  - Replaced Home with a cyber/gaming landing hero: neon grid background, glow orbs, scanline/noise overlays, feature panels, and CTAs.
  - Scoped `Home.css` to avoid overriding global `body` styles.
- **Files**:
  - `client/src/pages/Home.jsx`
  - `client/src/pages/Home.css`

## Files changed today (complete list)
- `client/src/App.jsx`
- `client/src/components/Header.jsx`
- `client/src/pages/Dashboard.jsx`
- `client/src/pages/Home.jsx`
- `client/src/pages/Home.css`
- `client/src/pages/Labs.jsx`
- `client/src/pages/CampusWorld.css`
- `client/src/index.css`

## Notes
- `/labs/:labId` (lab details/modules) routes were **kept** as-is.
- The project was built successfully after changes using `npm run build` in `client/`.

