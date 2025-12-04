# Klasik Plus ERP System - Presentation Project Context

## Project Overview

This is a complete, production-ready **Reveal.js presentation** for an academic project management presentation about the Klasik Plus ERP System implementation. The presentation is designed for a 10-minute delivery covering a 70-day ERP implementation project.

### Project Details
- **Client**: Klasik Plus (Czech retail company - livestock & food)
- **Project Duration**: 70 working days (October 2, 2025 - January 7, 2026)
- **Budget**: €42,412 total (€38,731 base + €5,532 reserve)
- **Team Size**: 14 members across 5 departments
- **Current Status**: 4 of 7 phases complete
- **Presentation Duration**: ~10 minutes (15 slides, ~40 seconds per slide)

## Project Structure

```
presentation/
├── index.html                          # Main presentation file (15 slides)
├── css/
│   ├── custom-theme.css               # Custom blue theme with Cambria typography
│   └── custom.css                     # Component-specific styles
├── js/
│   └── custom.js                      # Progress bar, keyboard shortcuts, utilities
├── assets/                            # Visual assets (needs to be populated)
│   ├── logos/                         # [REQUIRED] Company logos
│   ├── diagrams/                      # [OPTIONAL] Project diagrams
│   └── wireframes/                    # [REQUIRED] UI wireframe screenshots
├── README.md                          # Setup and usage instructions
├── IMPLEMENTATION_SUMMARY.md          # Implementation completion status
├── ASSETS_GUIDE.md                    # Asset creation guidelines
└── claude.md                          # This context file

```

## Technical Stack

### Core Framework
- **Reveal.js 4.5.0** - Modern HTML presentation framework
- CDN-hosted for simplicity
- Configured for 16:9 aspect ratio (1920×1080)

### Styling
- **Custom Blue Theme**: Professional academic color palette
  - Primary Blue: #1E3A8A
  - Light Blue: #3B82F6
  - Sky Blue: #60A5FA
  - Deep Blue: #1E293B
  - Powder Blue: #DBEAFE
- **Typography**: Cambria serif font (via Google Fonts)
- **Font Sizes**: 60px (h1), 48px (h2), 36px (h3), 28px (body)
- **Status Colors**: Green (#10B981), Yellow (#F59E0B), Red (#EF4444)

### Features Implemented
- ✅ Custom progress bar (top of screen)
- ✅ Smooth slide transitions and fragment animations
- ✅ Keyboard navigation with custom shortcuts
- ✅ Speaker notes capability
- ✅ PDF export functionality
- ✅ Overview mode (Esc or O key)
- ✅ Presentation timer (console logging)
- ✅ Responsive design
- ✅ Touch/swipe support for mobile
- ✅ Fullscreen mode (F key or double-click)

## Presentation Content (15 Slides)

1. **Title Slide** - Project introduction with logos, team names
2. **Project Overview** - Timeline, budget, team size, status
3. **Three Core Modules** - Purchasing, Inventory, Accounting with icons
4. **Team Organization** - 14 members across 5 departments
5. **Work Breakdown Structure** - 7 phases, 44 tasks, status indicators
6. **Critical Path & PERT** - Schedule analysis, critical path identification
7. **Budget Management** - €42K breakdown by category
8. **Risk Management Overview** - 12 risks identified and categorized
9. **Critical HIGH Priority Risk** - Focus on "Misread User Needs"
10. **Top Medium Priority Risks** - Active risk management table
11. **Competitive Positioning** - Market analysis and differentiators
12. **Current Project Status** - Phase completion and timeline
13. **Key Success Metrics** - Performance dashboard (6 metrics)
14. **Conclusion & Next Steps** - Summary and future roadmap
15. **Q&A / Thank You** - Contact information and closing

## Project Phases

The ERP implementation follows 7 phases:

1. **Initiation** (3 days) - ✅ Complete
2. **Planning** (15 days) - ✅ Complete
3. **Analysis** (10 days) - ✅ Complete
4. **Design** (8 days) - ✅ Complete
5. **Development** (20 days) - 🔄 In Progress
6. **Testing** (10 days) - ⏳ Upcoming
7. **Deployment** (4 days) - ⏳ Upcoming

## Three Core ERP Modules

### 1. Purchasing Module
- Automated supplier catalog integration
- Purchase order processing
- Invoice and payment workflows
- Supplier system integration

### 2. Inventory Management
- Real-time stock tracking
- Automated pricing
- Warehouse operations
- Multi-location visibility

### 3. Accounting Module
- Financial transaction recording
- Automated journal entries
- Real-time reporting
- IFRS/Czech GAAP compliance

## Team Structure (5 Departments)

- **Project Management** - Danilo Vračar (PM), Danilo Rogić (Supervision)
- **Business Analysis** - Sergey Popov (Lead Analyst), 1 BA
- **Software Development** - 5 developers
- **Quality Assurance** - 2 testers
- **IT Operations** - 3 specialists

## Risk Management

### Identified Risks (12 total)
- **HIGH Priority** (1): Misread user needs
- **MEDIUM Priority** (4): Scope creep, system integration, delays, resistance
- **LOW Priority** (7): Various operational risks

### Mitigation Strategies
- Proactive stakeholder engagement
- Iterative requirements validation
- Regular sprint reviews
- Change management process

## Keyboard Shortcuts

### Navigation
- `→` / `Space` - Next slide/fragment
- `←` - Previous slide
- `Home` / `H` - First slide
- `End` / `E` - Last slide

### Views
- `Esc` / `O` - Overview mode
- `F` - Fullscreen mode
- `S` - Speaker notes
- `?` - Help menu

### Utilities
- `P` - Print/Export to PDF
- `A` - Toggle auto-play (30s per slide)
- `Double-click` - Toggle fullscreen

## What's Missing (Required Assets)

### CRITICAL - Must Add Before Presenting:
1. **Logos** (2 files):
   - `assets/logos/dsd-erp-logo.svg` (or .png)
   - `assets/logos/klasik-plus-logo.svg` (or .png)

2. **Wireframes** (3 files):
   - `assets/wireframes/inventory-module.png`
   - `assets/wireframes/purchasing-module.png`
   - `assets/wireframes/accounting-module.png`

### OPTIONAL - Enhances Presentation:
3. **Diagrams** (4 files):
   - `assets/diagrams/wbs-diagram.svg` - Work Breakdown Structure
   - `assets/diagrams/pert-network.svg` - PERT network with critical path
   - `assets/diagrams/org-chart.svg` - Organizational hierarchy
   - `assets/diagrams/fishbone-diagram.svg` - Root cause analysis

See `ASSETS_GUIDE.md` for detailed instructions on creating these assets.

## How to Use This Presentation

### Quick Start
1. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
2. Press `F` for fullscreen mode
3. Press `Space` to advance through slides
4. Press `Esc` to see overview of all slides

### Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### PDF Export
1. Press `P` key (adds `?print-pdf` to URL)
2. Use browser print dialog (Ctrl/Cmd + P)
3. Select "Save as PDF"
4. Choose "Landscape" orientation

## File Descriptions

### Core Files
- **index.html** (41KB) - All slide content, fully structured and populated
- **css/custom-theme.css** - Base theme: colors, typography, spacing
- **css/custom.css** - Component layouts: cards, tables, grids, timelines
- **js/custom.js** - Progress bar updates, keyboard shortcuts, timer

### Documentation
- **README.md** - Complete setup and usage guide
- **IMPLEMENTATION_SUMMARY.md** - Implementation status and next steps
- **ASSETS_GUIDE.md** - Visual asset creation instructions

## Design Philosophy

### Minimalist Professional
- Maximum 5 bullet points per slide
- Clean white background with blue accents
- Generous spacing and margins
- Focus on readability from distance

### Typography Hierarchy
- **Slide Titles** (60px, bold) - Deep blue, centered
- **Section Subtitles** (32px, regular) - Gray, centered
- **Body Text** (28px, regular) - Dark gray, left-aligned
- **Small Text** (22px, regular) - Medium gray, notes

### Color Usage
- **Blues** - Primary brand colors, headers, accents
- **Green** - Completed tasks, success metrics
- **Yellow** - In-progress tasks, warnings
- **Red** - Critical items, high priority risks
- **Grays** - Upcoming tasks, secondary text

## Dependencies (CDN)

All external dependencies are loaded from CDNs:
- Reveal.js 4.5.0 - Core presentation framework
- Font Awesome 6.4.0 - Icons
- Google Fonts - Cambria typography

**Note**: Presentation works offline if assets are cached.

## Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Recommended**: Chrome or Firefox for best performance.

## Development Context

### Created For
- **Course**: Project Management
- **Institution**: Mendelu University, Brno
- **Presentation Date**: December 2025
- **Purpose**: Academic final project presentation

### Project Team
- **Danilo Vračar** - Project Manager
- **Danilo Rogić** - Project Supervision
- **Sergey Popov** - System Analyst

## Common Tasks

### Adding New Slides
Edit `index.html` and add a new `<section>` block:
```html
<section>
    <h1>Slide Title</h1>
    <h3 class="section-subtitle">Optional Subtitle</h3>
    <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
    </ul>
</section>
```

### Changing Colors
Edit `css/custom-theme.css`, lines 11-28:
```css
:root {
    --primary-blue: #1E3A8A;  /* Change this */
    --light-blue: #3B82F6;
    /* ... other colors ... */
}
```

### Modifying Progress Bar
Edit `js/custom.js`, function `updateProgressBar()` (lines 100-116)

### Adjusting Timing
Edit `js/custom.js`, line 49:
```javascript
autoSlide: 0,  // Change to 30000 for 30s auto-advance
```

## Troubleshooting

### Issue: Progress bar not showing
- Check browser console (F12) for JavaScript errors
- Ensure `js/custom.js` is loaded
- Refresh with Ctrl+F5

### Issue: Images not displaying
- Verify file paths in `index.html`
- Check that assets folders exist
- Ensure file extensions match (svg vs png)

### Issue: Fonts look different
- Check internet connection (Google Fonts CDN)
- Clear browser cache
- Try incognito/private browsing mode

### Issue: Animations are choppy
- Close other browser tabs
- Use Chrome or Firefox
- Reduce image file sizes

## Pre-Presentation Checklist

Before presenting, ensure:
- [ ] All required assets added (logos, wireframes)
- [ ] Tested on actual presentation computer
- [ ] Progress bar visible and updating
- [ ] All animations working smoothly
- [ ] Fullscreen mode tested (F key)
- [ ] Speaker notes reviewed (S key)
- [ ] Timing rehearsed (~10 minutes)
- [ ] PDF backup created (P key)
- [ ] USB drive prepared with files
- [ ] Internet connection available (for CDN resources)

## Project Statistics

- **Total Lines of Code**: ~1,500 lines
  - HTML: ~800 lines (index.html)
  - CSS: ~550 lines (both CSS files)
  - JavaScript: ~370 lines (custom.js)
- **Total File Size**: ~50KB (without assets)
- **With Assets**: ~5-10MB (estimated)
- **Slides**: 15
- **Target Duration**: 10 minutes
- **Average Per Slide**: 40 seconds

## Version Information

- **Version**: 1.0
- **Last Updated**: December 2025
- **Status**: Production Ready (pending assets)
- **Framework**: Reveal.js 4.5.0

## Additional Resources

### Reveal.js Documentation
- Official Site: https://revealjs.com
- Documentation: https://revealjs.com/documentation
- GitHub: https://github.com/hakimel/reveal.js

### Tools for Asset Creation
- **draw.io** - Free diagramming: https://app.diagrams.net
- **Lucidchart** - Online diagramming
- **Figma** - Modern design tool
- **TinyPNG** - Image compression: https://tinypng.com

## Notes for Claude/AI Assistants

### When Working With This Project:

1. **Modifying Content**: Always read `index.html` before making changes to slides
2. **Styling Changes**: Check both `custom-theme.css` (theme) and `custom.css` (components)
3. **Adding Features**: Extend `js/custom.js` - it has utility functions exported globally
4. **Asset Paths**: All asset references use relative paths from project root
5. **Testing**: Always test changes by opening `index.html` in a browser

### Project Constraints:
- Maximum 5 bullets per slide (design principle)
- Blue color palette must be maintained
- Cambria font for academic formality
- 16:9 aspect ratio (1920×1080)
- ~10 minute presentation duration

### What Can Be Modified:
- ✅ Slide content (index.html)
- ✅ Colors and fonts (custom-theme.css)
- ✅ Component layouts (custom.css)
- ✅ JavaScript functionality (custom.js)
- ✅ Keyboard shortcuts (js/custom.js)

### What Should NOT Be Modified:
- ❌ Reveal.js CDN version (affects compatibility)
- ❌ Overall slide count (optimized for 10 minutes)
- ❌ Progress bar HTML structure (JavaScript depends on it)
- ❌ File structure (paths are hard-coded)

## Current Status

**Implementation**: 95% Complete

**Ready for**:
- ✅ Content review
- ✅ Styling customization
- ✅ Functionality testing
- ⏳ Asset addition (logos, wireframes)
- ⏳ Presentation delivery

**Next Immediate Steps**:
1. Create `assets/` directories (logos, diagrams, wireframes)
2. Add 2 required logos
3. Add 3 required wireframes
4. Test presentation end-to-end
5. Practice delivery (~10 minutes)

---

*This context file provides comprehensive information for understanding, maintaining, and extending the Klasik Plus ERP presentation project.*
