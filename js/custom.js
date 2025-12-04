/**
 * Custom JavaScript for Klasik Plus ERP Presentation
 * Reveal.js configuration and progress bar functionality
 */

// Initialize Reveal.js
Reveal.initialize({
    // Display controls in the bottom right corner
    controls: false,
    
    // Display a presentation progress bar
    progress: false, // We use custom progress bar
    
    // Display the page number of the current slide
    slideNumber: false,
    
    // Push each slide change to the browser history
    history: true,
    
    // Enable keyboard shortcuts for navigation
    keyboard: true,
    
    // Enable the slide overview mode
    overview: true,
    
    // Vertical centering of slides
    center: true,
    
    // Enables touch navigation on devices with touch input
    touch: true,
    
    // Loop the presentation
    loop: false,
    
    // Change the presentation direction to be RTL
    rtl: false,
    
    // Turns fragments on and off globally
    fragments: true,
    
    // Flags if the presentation is running in an embedded mode
    embedded: false,
    
    // Flags if we should show a help overlay when the questionmark key is pressed
    help: true,
    
    // Number of milliseconds between automatically proceeding to the next slide
    // Disabled when set to 0 (manual control)
    autoSlide: 0,
    
    // Stop auto-sliding after user input
    autoSlideStoppable: true,
    
    // Enable slide navigation via mouse wheel
    mouseWheel: false,
    
    // Hide cursor if inactive
    hideInactiveCursor: true,
    
    // Time before cursor is hidden (in ms)
    hideCursorTime: 5000,
    
    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    
    // Transition speed
    transitionSpeed: 'default', // default/fast/slow
    
    // Transition style for full page slide backgrounds
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
    
    // Number of slides away from the current that are visible
    viewDistance: 3,
    
    // Display mode used to show slides
    display: 'block',
    
    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions
    width: 1920,
    height: 1080,
    
    // Factor of the display size that should remain empty around the content
    margin: 0.04,
    
    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 2.0,
    
    // PDF Export settings
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: true
});

// ===== CUSTOM PROGRESS BAR FUNCTIONALITY =====

/**
 * Update the progress bar based on current slide
 */
function updateProgressBar() {
    const progressFill = document.querySelector('.progress-bar-fill');
    
    if (!progressFill) return;
    
    // Get current slide information
    const indices = Reveal.getIndices();
    const totalSlides = Reveal.getTotalSlides();
    
    // Calculate progress percentage
    // Using horizontal index (indices.h) for linear progress
    const currentSlide = indices.h + 1;
    const percentage = (currentSlide / totalSlides) * 100;
    
    // Update progress bar width
    progressFill.style.width = percentage + '%';
}

/**
 * Initialize progress bar on load
 */
function initializeProgressBar() {
    // Wait for Reveal to be ready
    Reveal.on('ready', function() {
        updateProgressBar();
    });
    
    // Update on slide change
    Reveal.on('slidechanged', function() {
        updateProgressBar();
    });
    
    // Note: Fragment animations removed - using CSS animations instead
}

// Initialize progress bar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProgressBar);
} else {
    initializeProgressBar();
}

// ===== KEYBOARD SHORTCUTS =====

/**
 * Add custom keyboard shortcuts if needed
 */
Reveal.addKeyBinding({
    keyCode: 72, // 'H' key
    key: 'H',
    description: 'Go to first slide (Home)'
}, function() {
    Reveal.slide(0);
});

Reveal.addKeyBinding({
    keyCode: 69, // 'E' key  
    key: 'E',
    description: 'Go to last slide (End)'
}, function() {
    const totalSlides = Reveal.getTotalSlides();
    Reveal.slide(totalSlides - 1);
});

// ===== UTILITY FUNCTIONS =====

/**
 * Print/Export to PDF helper
 * Usage: Press 'P' key or add ?print-pdf to URL
 */
Reveal.addKeyBinding({
    keyCode: 80, // 'P' key
    key: 'P',
    description: 'Print/Export to PDF'
}, function() {
    // Add print-pdf parameter to URL
    const url = window.location.href;
    if (!url.includes('print-pdf')) {
        window.location.href = url + (url.includes('?') ? '&' : '?') + 'print-pdf';
    }
});

/**
 * Toggle overview mode with 'O' key (in addition to Esc)
 */
Reveal.addKeyBinding({
    keyCode: 79, // 'O' key
    key: 'O',
    description: 'Toggle overview mode'
}, function() {
    Reveal.toggleOverview();
});

// ===== SPEAKER NOTES WINDOW =====

/**
 * Open speaker notes in separate window
 * Default: Press 'S' key
 */
Reveal.on('ready', function() {
    console.log('Reveal.js is ready!');
    console.log('Total slides:', Reveal.getTotalSlides());
    console.log('Press S for speaker notes');
    console.log('Press O or Esc for overview mode');
    console.log('Press F for fullscreen');
    console.log('Press ? for help');
});

// ===== SLIDE NAVIGATION HELPERS =====

/**
 * Track slide changes for analytics or debugging
 */
let slideHistory = [];

Reveal.on('slidechanged', function(event) {
    const slideInfo = {
        indexh: event.indexh,
        indexv: event.indexv,
        previousSlide: event.previousSlide,
        currentSlide: event.currentSlide,
        timestamp: new Date().toISOString()
    };
    
    slideHistory.push(slideInfo);
    
    // Log for debugging (remove in production)
    console.log('Slide changed to:', event.indexh + 1);
});

// Fragment tracking removed - using CSS animations instead

// ===== AUTO-PLAY CONTROL (if needed) =====

/**
 * Toggle auto-play on/off with 'A' key
 */
let autoPlayEnabled = false;

Reveal.addKeyBinding({
    keyCode: 65, // 'A' key
    key: 'A',
    description: 'Toggle auto-play'
}, function() {
    if (autoPlayEnabled) {
        Reveal.configure({ autoSlide: 0 });
        autoPlayEnabled = false;
        console.log('Auto-play disabled');
    } else {
        // Auto-advance every 30 seconds
        Reveal.configure({ autoSlide: 30000 });
        autoPlayEnabled = true;
        console.log('Auto-play enabled (30s per slide)');
    }
});

// ===== PRESENTATION TIMER =====

let presentationStartTime = null;
let presentationTimer = null;

/**
 * Start presentation timer
 */
function startPresentationTimer() {
    if (!presentationStartTime) {
        presentationStartTime = new Date();
        console.log('Presentation started at:', presentationStartTime.toLocaleTimeString());
        
        // Update timer every second
        presentationTimer = setInterval(function() {
            const now = new Date();
            const elapsed = Math.floor((now - presentationStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            
            // Log to console (could display on screen if needed)
            if (seconds === 0) {
                console.log(`Presentation time: ${minutes} minutes`);
            }
        }, 1000);
    }
}

/**
 * Stop presentation timer
 */
function stopPresentationTimer() {
    if (presentationTimer) {
        clearInterval(presentationTimer);
        const endTime = new Date();
        const duration = Math.floor((endTime - presentationStartTime) / 1000);
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        
        console.log(`Presentation ended. Total duration: ${minutes}m ${seconds}s`);
        presentationTimer = null;
    }
}

// Start timer when first slide is shown
Reveal.on('ready', function() {
    startPresentationTimer();
});

// Optionally stop timer on last slide
Reveal.on('slidechanged', function(event) {
    const totalSlides = Reveal.getTotalSlides();
    if (event.indexh === totalSlides - 1) {
        // On last slide
        console.log('Reached final slide');
    }
});

// ===== FULLSCREEN HELPER =====

/**
 * Enter fullscreen mode programmatically
 */
function enterFullscreen() {
    const element = document.documentElement;
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

/**
 * Exit fullscreen mode
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Toggle fullscreen with double-click
document.addEventListener('dblclick', function() {
    if (!document.fullscreenElement) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
});

// ===== EXPORT FUNCTIONS FOR EXTERNAL USE =====

// Make utility functions available globally
window.presentationUtils = {
    updateProgressBar: updateProgressBar,
    startTimer: startPresentationTimer,
    stopTimer: stopPresentationTimer,
    enterFullscreen: enterFullscreen,
    exitFullscreen: exitFullscreen,
    getSlideHistory: function() {
        return slideHistory;
    }
};

// ===== INITIALIZATION COMPLETE =====

console.log('Klasik Plus ERP Presentation initialized');
console.log('Framework: Reveal.js');
console.log('Custom scripts loaded successfully');
