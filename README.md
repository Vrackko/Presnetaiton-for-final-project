# Klasik Plus ERP System - Project Management Presentation

Modern, professional presentation built with Reveal.js for the Klasik Plus ERP project management academic presentation.

## 📋 Overview

- **Duration**: ~10 minutes
- **Slides**: 15 slides
- **Framework**: Reveal.js
- **Style**: Modern Professional Academic
- **Aspect Ratio**: 16:9 (1920×1080)

## 🚀 Quick Start

### Option 1: Simple Local Hosting (Recommended)

1. **Open the presentation:**
   - Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
   - Or use a local server (see Option 2)

2. **Navigate the presentation:**
   - Use **Arrow Keys** or **Space Bar** to advance slides
   - Press **Esc** or **O** for overview mode
   - Press **F** for fullscreen mode
   - Press **S** for speaker notes (opens in new window)

### Option 2: Local Web Server (Better Performance)

Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

Using Node.js (if installed):
```bash
npx http-server -p 8000
```

Then open: `http://localhost:8000`

## 📁 Project Structure

```
klasik-plus-presentation/
│
├── index.html                          # Main presentation file
│
├── css/
│   ├── custom-theme.css               # Custom blue theme
│   └── custom.css                     # Component styles
│
├── js/
│   └── custom.js                      # Progress bar & custom functionality
│
├── assets/
│   ├── logos/
│   │   ├── dsd-erp-logo.svg          # DSD ERP logo
│   │   └── klasik-plus-logo.svg      # Klasik Plus logo
│   │
│   ├── diagrams/                      # Create these from project files
│   │   ├── wbs-diagram.svg
│   │   ├── pert-network.svg
│   │   ├── org-chart.svg
│   │   └── fishbone-diagram.svg
│   │
│   └── wireframes/                    # Screenshots of UI designs
│       ├── inventory-module.png
│       ├── purchasing-module.png
│       └── accounting-module.png
│
└── README.md                          # This file
```

## 🎨 Features

### Custom Features
- ✅ **Progress Bar** - Top of screen, fills as presentation advances
- ✅ **Custom Blue Theme** - Professional blue color palette
- ✅ **Cambria Typography** - Academic serif font
- ✅ **Smooth Animations** - Subtle slide transitions, fragment reveals
- ✅ **Responsive Design** - Scales to different screen sizes
- ✅ **15 Slides** - Comprehensive project coverage

### Built-in Reveal.js Features
- 🎯 **Overview Mode** (Esc or O)
- 📝 **Speaker Notes** (S key)
- 🖨️ **PDF Export** (P key or ?print-pdf in URL)
- ⌨️ **Keyboard Navigation**
- 📱 **Touch/Swipe Support**
- 🔍 **Zoom** (Alt+Click)

## ⌨️ Keyboard Shortcuts

### Navigation
- `→` / `Space` - Next slide
- `←` - Previous slide
- `↑` / `↓` - Navigate vertical slides
- `Home` / `H` - First slide
- `End` / `E` - Last slide

### Views
- `Esc` / `O` - Overview mode (see all slides)
- `F` - Fullscreen mode
- `S` - Speaker notes view
- `?` - Help (show all shortcuts)

### Utilities
- `P` - Print/Export to PDF
- `A` - Toggle auto-play (30s per slide)
- **Double-click** - Toggle fullscreen

### Fragment Control
- `Space` / `→` - Next fragment/slide
- `Shift + ←` - Previous fragment

## 🎯 Usage Guide

### For Presenters

1. **Before Presentation:**
   - Test on the actual presentation computer
   - Ensure all assets are loaded
   - Check speaker notes (S key)
   - Practice timing (~10 minutes)

2. **During Presentation:**
   - Use **F** for fullscreen immediately
   - Use **Space Bar** for advancing
   - Use fragment animations to pace content
   - Monitor progress bar at top

3. **Tips:**
   - Slides are designed to be self-explanatory
   - Use speaker notes for detailed explanations
   - Timing: ~40-45 seconds per slide average
   - Focus slides: Risk Management (Slides 8-10)

### For Viewers

- **Online Viewing:** Open `index.html` in any modern browser
- **Offline Viewing:** All assets load from CDN but work offline if cached
- **Mobile Viewing:** Use touch/swipe gestures
- **Print Version:** Press `P` or add `?print-pdf` to URL

## 📊 Content Overview

1. **Title Slide** - Project introduction with logos
2. **Project Overview** - Timeline, budget, team
3. **Three Core Modules** - Purchasing, Inventory, Accounting
4. **Team Organization** - 14 members, 5 departments
5. **Work Breakdown Structure** - 7 phases, 44 tasks
6. **Critical Path & PERT** - Schedule analysis
7. **Budget Management** - €42K budget breakdown
8. **Risk Management Overview** - 12 risks identified
9. **Critical HIGH Priority Risk** - Misread user needs
10. **Top Medium Priority Risks** - Active management
11. **Competitive Positioning** - Market analysis
12. **Current Project Status** - 4 of 7 phases complete
13. **Key Success Metrics** - Performance dashboard
14. **Conclusion & Next Steps** - Path forward
15. **Q&A / Thank You** - Contact information

## 🎨 Customization

### Changing Colors

Edit `css/custom-theme.css`:
```css
:root {
    --primary-blue: #1E3A8A;  /* Change primary color */
    --light-blue: #3B82F6;    /* Change accent color */
    /* ... other colors ... */
}
```

### Adjusting Typography

Edit `css/custom-theme.css`:
```css
:root {
    --h1-size: 60px;    /* Slide titles */
    --body-size: 28px;  /* Body text */
    /* ... other sizes ... */
}
```

### Modifying Transitions

Edit `js/custom.js`:
```javascript
Reveal.initialize({
    transition: 'slide',  // Change to 'fade', 'zoom', etc.
    transitionSpeed: 'default',  // 'fast' or 'slow'
    /* ... other settings ... */
});
```

## 🖼️ Adding Assets

### Logos
Place logo files in `assets/logos/`:
- `dsd-erp-logo.svg` - DSD ERP logo
- `klasik-plus-logo.svg` - Klasik Plus logo

Formats: SVG (preferred) or PNG with transparent background

### Diagrams
Create diagrams from project files and save in `assets/diagrams/`:
- `wbs-diagram.svg` - Work Breakdown Structure
- `pert-network.svg` - PERT network with critical path
- `org-chart.svg` - Organizational hierarchy
- `fishbone-diagram.svg` - Root cause analysis

### Wireframes
Place wireframe screenshots in `assets/wireframes/`:
- `inventory-module.png`
- `purchasing-module.png`
- `accounting-module.png`

Recommended size: 1920×1080 or maintain 16:9 aspect ratio

## 📱 Export Options

### PDF Export

**Method 1: Print to PDF (Recommended)**
1. Press `P` key or add `?print-pdf` to URL
2. Open browser print dialog (Ctrl/Cmd + P)
3. Select "Save as PDF"
4. Choose "Landscape" orientation
5. Save

**Method 2: Using decktape (Advanced)**
```bash
npm install -g decktape
decktape reveal http://localhost:8000 presentation.pdf
```

### Static HTML Package
The presentation is self-contained and can be zipped:
```bash
zip -r presentation.zip index.html css/ js/ assets/ README.md
```

## 🐛 Troubleshooting

### Issue: Fonts not loading properly
**Solution:** Check internet connection (Google Fonts CDN) or add fonts locally

### Issue: Progress bar not updating
**Solution:** Check browser console (F12) for JavaScript errors

### Issue: Images not showing
**Solution:** Verify file paths in `index.html` and ensure assets folder exists

### Issue: Animations laggy
**Solution:** 
- Close other browser tabs
- Use Chrome or Firefox for best performance
- Reduce image file sizes

### Issue: Slides not advancing
**Solution:**
- Check if keyboard shortcuts are working
- Try clicking with mouse
- Refresh the page

## 💻 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Recommended:** Chrome or Firefox for best performance

## 📖 Additional Resources

### Reveal.js Documentation
- Official Site: https://revealjs.com
- Documentation: https://revealjs.com/documentation
- GitHub: https://github.com/hakimel/reveal.js

### Project Documentation
- `presentation_design_document.md` - Complete design specifications
- `Slides.md` - Slide-by-slide content breakdown
- `Presentation_Context_KlasikPlus_ERP.md` - Full presentation context

## 👥 Credits

**Project Team:**
- Danilo Vračar (Project Manager)
- Danilo Rogić (Project Supervision)
- Sergey Popov (System Analyst)

**Framework:**
- Reveal.js by Hakim El Hattab

**Icons:**
- Font Awesome 6.4.0

## 📄 License

This presentation is created for academic purposes for the Klasik Plus ERP project management course.

---

## 🎓 Presentation Checklist

Before presenting, ensure:

- [ ] All assets loaded correctly
- [ ] Logos displayed on slides 1 and 15
- [ ] Progress bar visible and updating
- [ ] All animations working smoothly
- [ ] Speaker notes prepared (press S)
- [ ] Tested on presentation computer
- [ ] Fullscreen mode working (press F)
- [ ] Timing rehearsed (~10 minutes)
- [ ] Backup USB drive prepared
- [ ] PDF backup created

**Last Updated:** December 2025  
**Version:** 1.0
