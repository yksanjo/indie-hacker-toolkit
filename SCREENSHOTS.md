# 📸 Screenshot Guide

This guide will help you capture all the screenshots needed for the README files.

## Prerequisites

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Required Screenshots

### Landing Page
- **File:** `screenshots/landing/landing-page.png`
- **URL:** `http://localhost:3000`
- **What to capture:** Full page view showing all 5 tool cards

### Brutal Feedback Exchange
- **File:** `screenshots/brutal-feedback/feedback-main.png`
- **URL:** `http://localhost:3000/brutal-feedback`
- **What to capture:** Main page with stats and feedback list

- **File:** `screenshots/brutal-feedback/feedback-request.png`
- **URL:** `http://localhost:3000/brutal-feedback` (click "Request" tab)
- **What to capture:** Request feedback form

- **File:** `screenshots/brutal-feedback/feedback-display.png`
- **URL:** `http://localhost:3000/brutal-feedback` (click "Receive" tab)
- **What to capture:** Feedback cards with ratings

- **File:** `screenshots/brutal-feedback/feedback-stats.png`
- **URL:** `http://localhost:3000/brutal-feedback`
- **What to capture:** Stats dashboard at the top

### Ship It or Kill It
- **File:** `screenshots/ship-or-kill/ship-or-kill-main.png`
- **URL:** `http://localhost:3000/ship-or-kill`
- **What to capture:** Main page with idea cards and voting

- **File:** `screenshots/ship-or-kill/idea-submission.png`
- **URL:** `http://localhost:3000/ship-or-kill` (scroll to bottom)
- **What to capture:** Submit idea form

- **File:** `screenshots/ship-or-kill/voting-interface.png`
- **URL:** `http://localhost:3000/ship-or-kill`
- **What to capture:** Voting buttons and percentage bars

- **File:** `screenshots/ship-or-kill/stats-dashboard.png`
- **URL:** `http://localhost:3000/ship-or-kill`
- **What to capture:** Stats cards at the top

### Public Building Tracker
- **File:** `screenshots/building-tracker/tracker-main.png`
- **URL:** `http://localhost:3000/building-tracker`
- **What to capture:** Main dashboard with stats and projects

- **File:** `screenshots/building-tracker/update-form.png`
- **URL:** `http://localhost:3000/building-tracker`
- **What to capture:** Daily update form

- **File:** `screenshots/building-tracker/project-dashboard.png`
- **URL:** `http://localhost:3000/building-tracker`
- **What to capture:** Project cards section

- **File:** `screenshots/building-tracker/stats-dashboard.png`
- **URL:** `http://localhost:3000/building-tracker`
- **What to capture:** Stats cards (streak, days, leaderboard)

### Revenue Transparency Hub
- **File:** `screenshots/revenue-hub/revenue-main.png`
- **URL:** `http://localhost:3000/revenue-hub`
- **What to capture:** Main page with revenue entries

- **File:** `screenshots/revenue-hub/revenue-entry.png`
- **URL:** `http://localhost:3000/revenue-hub`
- **What to capture:** Single revenue entry card in detail

- **File:** `screenshots/revenue-hub/filtering.png`
- **URL:** `http://localhost:3000/revenue-hub`
- **What to capture:** Filter buttons and sorting dropdown

- **File:** `screenshots/revenue-hub/stats-dashboard.png`
- **URL:** `http://localhost:3000/revenue-hub`
- **What to capture:** Stats cards at the top

### Copy the Playbook
- **File:** `screenshots/copy-playbook/playbook-main.png`
- **URL:** `http://localhost:3000/copy-playbook`
- **What to capture:** Main page with playbook list and details

- **File:** `screenshots/copy-playbook/playbook-steps.png`
- **URL:** `http://localhost:3000/copy-playbook`
- **What to capture:** Step-by-step playbook view

- **File:** `screenshots/copy-playbook/step-details.png`
- **URL:** `http://localhost:3000/copy-playbook` (expand a step)
- **What to capture:** Expanded step with details

- **File:** `screenshots/copy-playbook/stats-dashboard.png`
- **URL:** `http://localhost:3000/copy-playbook`
- **What to capture:** Stats cards at the top

## Screenshot Tools

### Browser Extensions (Recommended)
- **Full Page Screen Capture** (Chrome) - Captures entire page
- **Awesome Screenshot** (Chrome/Firefox) - Full page + annotations
- **Fireshot** (Firefox) - Full page capture

### Native Tools
- **macOS:** 
  - `Cmd + Shift + 3` - Full screen
  - `Cmd + Shift + 4` - Select area
  - `Cmd + Shift + 4 + Space` - Window capture
- **Windows:**
  - `Windows + Shift + S` - Snipping Tool
  - `PrtScn` - Full screen

### Online Tools
- Screenshot.guru
- BrowserStack Screenshots
- LambdaTest Screenshots

## Best Practices

1. **Resolution:** Use 1920x1080 or 1440x900 for consistency
2. **Format:** PNG for UI screenshots (better quality)
3. **File Size:** Keep under 500KB (compress if needed)
4. **Browser:** Use Chrome or Firefox for consistency
5. **Theme:** Ensure dark theme is active
6. **Scroll:** For full-page screenshots, scroll to show key content
7. **Clean State:** Use fresh browser session (no extensions visible)

## Image Optimization

Before committing, optimize images:

```bash
# Using ImageOptim (macOS)
# Download from: https://imageoptim.com/

# Using TinyPNG (Online)
# Visit: https://tinypng.com/

# Using CLI tools
npm install -g imagemin-cli imagemin-pngquant
imagemin screenshots/**/*.png --out-dir=screenshots --plugin=pngquant
```

## Verification Checklist

- [ ] All 21 screenshots captured
- [ ] Files named exactly as specified
- [ ] Images optimized (under 500KB)
- [ ] All README files reference correct paths
- [ ] Screenshots show key features clearly
- [ ] Dark theme is consistent across all screenshots

## Quick Capture Script

You can use this browser console script to help organize:

```javascript
// Run in browser console to get current page info
console.log({
  url: window.location.href,
  title: document.title,
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight
  }
});
```

## Notes

- Screenshots should be taken in a clean browser window
- Hide browser extensions if possible
- Use consistent viewport size (1920x1080 recommended)
- Ensure all mock data is visible
- Capture the "best" state of each page

