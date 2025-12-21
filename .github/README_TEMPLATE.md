# Screenshot Guide

To add screenshots to your README files, follow these steps:

## Screenshot Locations

Place screenshots in the following directories:

```
screenshots/
├── landing/
│   └── landing-page.png
├── brutal-feedback/
│   ├── feedback-main.png
│   ├── feedback-request.png
│   ├── feedback-display.png
│   └── feedback-stats.png
├── ship-or-kill/
│   ├── ship-or-kill-main.png
│   ├── idea-submission.png
│   ├── voting-interface.png
│   └── stats-dashboard.png
├── building-tracker/
│   ├── tracker-main.png
│   ├── update-form.png
│   ├── project-dashboard.png
│   └── stats-dashboard.png
├── revenue-hub/
│   ├── revenue-main.png
│   ├── revenue-entry.png
│   ├── filtering.png
│   └── stats-dashboard.png
└── copy-playbook/
    ├── playbook-main.png
    ├── playbook-steps.png
    ├── step-details.png
    └── stats-dashboard.png
```

## Taking Screenshots

1. Run the development server: `npm run dev`
2. Navigate to each page
3. Take full-page screenshots (use browser dev tools or screenshot tools)
4. Save with the exact filenames listed above
5. Recommended size: 1920x1080 or 1440x900

## Screenshot Tools

- **macOS**: Cmd + Shift + 4 (select area) or Cmd + Shift + 3 (full screen)
- **Windows**: Windows + Shift + S (Snipping Tool)
- **Browser Extensions**: 
  - Full Page Screen Capture (Chrome)
  - Fireshot (Firefox)
- **Online Tools**: 
  - Screenshot.guru
  - Awesome Screenshot

## Image Optimization

Before committing, optimize images:
- Use PNG for UI screenshots
- Compress with tools like TinyPNG or ImageOptim
- Keep file sizes under 500KB when possible

## Markdown Format

Use this format in README files:

```markdown
![Description](./screenshots/folder-name/image-name.png)
```

