// ============================================
// LA MAISON REAL ESTATE - MAIN JAVASCRIPT
// ============================================
// This file contains only essential page functionality
// No alerts, no automatic card generation
// ============================================

// ---------- FUNCTION: SMOOTH SCROLL FOR NAVIGATION ----------
function setupSmoothScroll() {
    // Find A House link - smooth scroll to hero section
    const findHouseLink = document.querySelector('.nav-links a:last-child');
    if (findHouseLink && findHouseLink.textContent === 'Find A House') {
        findHouseLink.addEventListener('click', function(event) {
            event.preventDefault();
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ---------- FUNCTION: CHECK WHICH PAGE WE'RE ON ----------
function getCurrentPage() {
    const pagePath = window.location.pathname;
    const pageName = pagePath.split('/').pop();
    console.log(`Currently on: ${pageName || 'index.html'}`);
    return pageName;
}

// ---------- INITIALIZE WHEN PAGE LOADS ----------
document.addEventListener('DOMContentLoaded', function() {
    console.log('La Maison website loaded');
    
    // Setup smooth scrolling only
    setupSmoothScroll();
    
    // Log which page we're on
    getCurrentPage();
});