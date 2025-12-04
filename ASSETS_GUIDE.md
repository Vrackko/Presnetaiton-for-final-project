# Assets Guide for Klasik Plus ERP Presentation

This guide explains what visual assets you need to create and where to place them.

## 📁 Required Directory Structure

Create these folders in your presentation directory:

```
assets/
├── logos/
├── diagrams/
└── wireframes/
```

You can create these with:
```bash
mkdir -p assets/logos assets/diagrams assets/wireframes
```

---

## 🏢 Logos (Required)

### Location: `assets/logos/`

You need two logos:

1. **DSD ERP Logo**
   - Filename: `dsd-erp-logo.svg` (or `.png`)
   - Used on: Slide 1 (title) and Slide 15 (final)
   - Recommended size: 200px width (title), 120px width (final)
   - Format: SVG preferred, PNG as fallback
   - Background: Transparent

2. **Klasik Plus Logo**
   - Filename: `klasik-plus-logo.svg` (or `.png`)
   - Used on: Slide 1 (title) and Slide 15 (final)
   - Recommended size: 180px width (title), 120px width (final)
   - Format: SVG preferred, PNG as fallback
   - Background: Transparent

### How to Add Logos:

If you have PNG instead of SVG, update `index.html`:

Replace:
```html
<img src="assets/logos/dsd-erp-logo.svg" alt="DSD ERP Logo">
```

With:
```html
<img src="assets/logos/dsd-erp-logo.png" alt="DSD ERP Logo">
```

---

## 📊 Diagrams (Optional but Recommended)

### Location: `assets/diagrams/`

These diagrams should be **remade** based on your project files (not copied directly):

### 1. Work Breakdown Structure (WBS)
- **Filename**: `wbs-diagram.svg`
- **Used on**: Slide 5
- **Content**: 
  - 7 phases as boxes
  - Color-coded by phase
  - Task breakdown under each phase
  - Tree/hierarchical layout
- **Style**: 
  - Blue color variations
  - Clean, minimalist
  - Text readable at distance

### 2. PERT Network Diagram
- **Filename**: `pert-network.svg`
- **Used on**: Slide 6
- **Content**:
  - Task nodes as rounded rectangles
  - Critical path highlighted in red/dark blue
  - Non-critical tasks in light blue/gray
  - Arrows showing dependencies
  - Duration labels
- **Style**:
  - Simplified, not overly detailed
  - Clear critical path distinction

### 3. Organizational Chart
- **Filename**: `org-chart.svg`
- **Used on**: Slide 4 (optional visual enhancement)
- **Content**:
  - 5 departments
  - Team members under each
  - Reporting structure
  - Color-coded by department
- **Style**:
  - Rectangular boxes
  - Hierarchical layout

### 4. Fishbone Diagram (Ishikawa)
- **Filename**: `fishbone-diagram.svg`
- **Used on**: Slide 9
- **Content**:
  - 6 main branches (categories):
    1. Data
    2. Tools & Resources
    3. Team
    4. Environment
    5. Communication
    6. Methods
  - Root causes on each branch
  - Problem/effect at right (fish head)
- **Style**:
  - Color-coded branches
  - Main spine in deep blue
  - Problem box in red

### How to Create Diagrams:

**Tools you can use:**
- **draw.io** (free, web-based): https://app.diagrams.net
- **Lucidchart** (online diagramming)
- **Microsoft Visio** (if available)
- **PowerPoint** (export as SVG)
- **Figma** (for modern designs)

**Export Settings:**
- Format: SVG (preferred) or PNG (minimum 1920px wide)
- Background: Transparent
- Aspect Ratio: 16:9 or maintain proportions

### If You Skip Diagrams:

The presentation has placeholder sections that say:
```
[Diagram will be displayed here]
```

You can either:
1. Create the diagrams later
2. Remove the placeholder divs
3. Use screenshots from your project files (though redesigning is recommended per design doc)

---

## 🖼️ Wireframes (Required for Slide 12)

### Location: `assets/wireframes/`

You need screenshots of your UI wireframes:

### 1. Inventory Module Wireframe
- **Filename**: `inventory-module.png`
- **Content**: Screenshot of inventory management interface
- **Format**: PNG, JPG, or WebP
- **Recommended size**: 1920×1080 or 1600×900
- **What to show**: Product list, categories, quantities, locations

### 2. Purchasing Module Wireframe
- **Filename**: `purchasing-module.png`
- **Content**: Screenshot of purchasing interface
- **Format**: PNG, JPG, or WebP
- **Recommended size**: 1920×1080 or 1600×900
- **What to show**: Add to pending order, select product, quantity, total price

### 3. Accounting Module Wireframe
- **Filename**: `accounting-module.png`
- **Content**: Screenshot of accounting interface
- **Format**: PNG, JPG, or WebP
- **Recommended size**: 1920×1080 or 1600×900
- **What to show**: Order details, product breakdown, pricing

### How to Add Wireframes:

Your project files mention wireframes in:
- `/mnt/project/Link_to_ERP_MVP_-_take_images.docx`

Take screenshots from those or your actual wireframe files and place them in `assets/wireframes/`.

### Display on Slide:

The wireframes are displayed on a dedicated section (Slide 12 or as part of module slide). The HTML is already set up to show three wireframes side by side or in a grid.

---

## 🎨 Creating Assets: Step-by-Step

### For Diagrams (using draw.io):

1. **Go to**: https://app.diagrams.net
2. **Create new diagram**
3. **Use shapes**:
   - Rectangles for boxes
   - Arrows for connections
   - Text for labels
4. **Apply colors**:
   - Use blue palette from design doc
   - Primary Blue: #1E3A8A
   - Light Blue: #3B82F6
   - Red for critical items: #EF4444
5. **Export**:
   - File → Export as → SVG
   - Check "Transparent Background"
   - Download

### For Wireframes:

1. **Locate your wireframes** in project files
2. **Take screenshot**:
   - Windows: Win + Shift + S
   - Mac: Cmd + Shift + 4
   - Or use Snipping Tool
3. **Save as PNG**
4. **Optimize**:
   - Use TinyPNG.com to compress
   - Ensure < 500KB per image
5. **Place in** `assets/wireframes/`

---

## 🔧 Quick Asset Setup Script

If you're on Linux/Mac, you can run this to set up directories:

```bash
#!/bin/bash
# Create asset directories
mkdir -p assets/logos
mkdir -p assets/diagrams
mkdir -p assets/wireframes

echo "Asset directories created!"
echo "Next steps:"
echo "1. Add logos to assets/logos/"
echo "2. Create/add diagrams to assets/diagrams/"
echo "3. Add wireframe screenshots to assets/wireframes/"
```

Save as `setup-assets.sh`, make executable with `chmod +x setup-assets.sh`, and run with `./setup-assets.sh`.

---

## ✅ Asset Checklist

Before presenting, verify you have:

### Must Have:
- [ ] DSD ERP logo (SVG or PNG)
- [ ] Klasik Plus logo (SVG or PNG)
- [ ] Inventory wireframe screenshot
- [ ] Purchasing wireframe screenshot
- [ ] Accounting wireframe screenshot

### Nice to Have:
- [ ] WBS diagram (SVG)
- [ ] PERT network diagram (SVG)
- [ ] Organizational chart (SVG)
- [ ] Fishbone diagram (SVG)

### File Size Check:
- [ ] All images optimized (< 500KB each)
- [ ] Logos are transparent background
- [ ] Wireframes are clear and readable

---

## 🚨 Troubleshooting Assets

### Problem: Logo not showing
**Check:**
1. Filename matches exactly (case-sensitive)
2. File is in correct folder (`assets/logos/`)
3. File format is supported (SVG, PNG, JPG)
4. Path in `index.html` is correct

### Problem: Diagram looks pixelated
**Solution:**
1. Use SVG format (scales infinitely)
2. If PNG, use at least 1920px width
3. Export at 2x resolution for retina displays

### Problem: Wireframe too large (slow loading)
**Solution:**
1. Compress with TinyPNG.com
2. Reduce resolution to 1600×900
3. Use JPG instead of PNG (smaller file size)
4. Optimize with ImageOptim (Mac) or similar

### Problem: Colors don't match design
**Solution:**
Use these exact colors from design doc:
- Primary Blue: `#1E3A8A`
- Light Blue: `#3B82F6`
- Sky Blue: `#60A5FA`
- Deep Blue: `#1E293B`
- Red (alert): `#EF4444`
- Green (success): `#10B981`
- Yellow (warning): `#F59E0B`

---

## 📊 Asset Dimensions Reference

| Asset Type | Recommended Size | Format | Usage |
|------------|------------------|--------|-------|
| Logos (large) | 200px width | SVG | Title slide |
| Logos (small) | 120px width | SVG | Final slide |
| Diagrams | 1600×900px | SVG | Content slides |
| Wireframes | 1920×1080px | PNG | Module demos |
| Icons | 48-64px | SVG/Font | Throughout |

---

## 💡 Tips for Best Results

1. **Consistency**: Use the same tool for all diagrams
2. **Colors**: Stick to the blue palette defined in design doc
3. **Simplicity**: Less is more - avoid clutter
4. **Readability**: Test visibility from 3 meters away
5. **File Size**: Keep total presentation under 10MB
6. **Backup**: Save source files for future edits

---

## 🆘 Need Help?

If you can't create certain assets:

1. **Skip optional diagrams** - presentation will work without them
2. **Use placeholders** - existing HTML has placeholder sections
3. **Use project file screenshots** - better than nothing
4. **Ask team members** - maybe someone has design skills

**Minimum Required:**
- 2 logos (can be simple text logos)
- 3 wireframe screenshots (can be rough mockups)

Everything else enhances but isn't critical for the presentation to work.

---

**Remember**: The presentation is designed to work with or without all assets. Add them progressively as you create them!
