# PERT Network Diagram - Klasik Plus ERP

## Overview

This folder contains an interactive HTML/CSS PERT (Program Evaluation and Review Technique) network diagram for the Klasik Plus ERP project. The diagram visualizes the project's critical path, task dependencies, and timeline.

## Files

- `pert-network.html` - Main HTML file with the PERT diagram structure
- `pert-network.css` - Stylesheet matching the presentation's blue theme

## Features

- **Critical Path Visualization**: Red-colored tasks show the critical path (70 working days)
- **Non-Critical Tasks**: Blue-colored tasks with slack time
- **Milestones**: Diamond-shaped markers for key project milestones
- **Interactive Elements**: Hover effects on tasks and connections
- **Responsive Design**: Adapts to different screen sizes
- **Professional Styling**: Matches the Klasik Plus presentation theme

## How to Use

### Option 1: Standalone Viewing
1. Open `pert-network.html` in any modern web browser
2. The diagram will display with full interactivity

### Option 2: Embed in Presentation
Add this code to your `index.html` slide:

```html
<section>
    <h1>Critical Path & PERT Analysis</h1>
    <h3 class="section-subtitle">Project Schedule Network</h3>

    <div class="pert-diagram-container">
        <iframe src="diagrams/pert-network.html"
                width="100%"
                height="800px"
                frameborder="0"
                style="border-radius: 8px;">
        </iframe>
    </div>
</section>
```

### Option 3: Screenshot for Static Display
1. Open `pert-network.html` in browser
2. Take a screenshot or use browser's "Save as PDF" feature
3. Export as image: `pert-network.png`

## Diagram Legend

- **Red Boxes** → Critical Path Tasks (no slack time)
- **Blue Boxes** → Non-Critical Tasks (has slack time)
- **Red Arrows** → Critical path dependencies
- **Blue Arrows** → Non-critical dependencies
- **Diamond Shapes** → Project milestones

## Key Information Displayed

Each task box shows:
- **Task Name** - What needs to be done
- **Start-Finish Dates** - When the task occurs
- **Duration** - How long it takes (in days)
- **Task ID** - Reference number
- **Resource** - Who is responsible

## Critical Path Summary

The critical path consists of:
1. Appoint PM & Team → Define Goals
2. Analyze Existing → Budget Estimation
3. Project Initiation Milestone (10/10/25)
4. UI/UX Design
5. Purchasing Module Development
6. Bug Identification → Internal Testing
7. Deployment → User Testing
8. Functional Testing → Bug Fixing
9. Project Report → Evaluation → Close-out
10. Project Closed Milestone (1/7/26)

**Total Critical Path Duration**: 70 Working Days

## Color Scheme (Matching Presentation)

- Primary Blue: `#1E3A8A`
- Light Blue: `#3B82F6`
- Sky Blue: `#60A5FA`
- Critical Red: `#EF4444`
- Background: `#FFFFFF`
- Accent: `#DBEAFE`

## Customization

### To modify colors:
Edit the `:root` variables in `pert-network.css`:
```css
:root {
    --primary-blue: #1E3A8A;
    --critical-red: #EF4444;
    /* ... other colors ... */
}
```

### To add/remove tasks:
1. Add new `<rect>` element for task box
2. Add `<text>` elements for task details
3. Add connecting `<line>` with appropriate arrow marker

### To adjust layout:
Modify the `x` and `y` coordinates in the SVG elements

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Export Options

### As PNG/JPG:
1. Open in browser
2. Right-click → "Save image as"
3. Or use screenshot tool

### As PDF:
1. Open in browser
2. Press `Ctrl/Cmd + P`
3. Select "Save as PDF"
4. Print

### As SVG:
The diagram uses inline SVG, which can be extracted from the HTML file

## Integration with Presentation

### Slide 6: Critical Path & PERT
This diagram is designed for **Slide 6** of your presentation, which covers:
- Critical path identification
- PERT analysis
- Schedule dependencies
- Project timeline

### Display Options:
1. **Full iframe embed** - Interactive diagram
2. **Static screenshot** - Simple image display
3. **Link reference** - External browser window

## Tips for Presenting

1. **Zoom In**: Use browser zoom (Ctrl/Cmd +) to focus on specific sections
2. **Highlight Path**: Point out the red arrows showing the critical path
3. **Explain Slack**: Show blue tasks that have flexibility
4. **Milestones**: Emphasize the 4 key milestone markers
5. **Dependencies**: Trace arrows to show task relationships

## Technical Details

- **Format**: HTML5 + SVG
- **Styling**: CSS3
- **Responsive**: Yes
- **Interactive**: Hover effects
- **Print-friendly**: Yes
- **File Size**: ~15KB (HTML) + ~8KB (CSS)

## Troubleshooting

### Diagram not displaying:
- Check that both `.html` and `.css` files are in the same `diagrams/` folder
- Ensure CSS file path is correct in HTML

### Text too small:
- Adjust font-size values in CSS
- Use browser zoom feature

### Colors not matching:
- Verify CSS file is loaded
- Check color variables in `:root`

## Future Enhancements

Potential additions:
- [ ] JavaScript interactivity (click to highlight path)
- [ ] Task duration calculations
- [ ] Float/slack time display
- [ ] Gantt chart view toggle
- [ ] Export to project management tools

## Credits

- **Framework**: Pure HTML5 + CSS3 + SVG
- **Design**: Based on Klasik Plus ERP project
- **Style**: Matches Reveal.js presentation theme
- **Data**: From project PERT analysis PDF

## Version

- **Version**: 1.0
- **Created**: December 2025
- **Last Updated**: December 2025
- **Status**: Production Ready

---

**Need Help?** Refer to the main `README.md` in the parent directory for overall presentation guidance.
