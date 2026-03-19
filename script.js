/* script.js - Central logic for navigation and data */

// 1. Function to handle Sign In (from index.html)
function handleSignIn() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        // Store the user's name/email to use in main.html
        localStorage.setItem('userName', emailInput.value);
    }
    
    // Check if user has completed the first setup
    const isSetupDone = localStorage.getItem('setupDone');
    if (isSetupDone === 'true') {
        window.location.href = 'main.html';
    } else {
        window.location.href = 'setup.html';
    }
}

// 2. Function to complete Setup (from setup.html)
function finishSetup() {
    localStorage.setItem('setupDone', 'true');
    window.location.href = 'main.html';
}

// 3. Navigation Functions (for Buttons/Menu items)
function goToPage(pageName) {
    // pageName should be the filename like 'profile.html'
    window.location.href = pageName;
}

// 4. Hamburger Menu Toggle Logic (Shared across pages)
function toggleMenu() {
    const menu = document.getElementById('sideMenu') || document.getElementById('side-menu');
    const overlay = document.getElementById('overlay') || document.getElementById('menu-overlay');
    
    if (menu) {
        menu.classList.toggle('active');
        menu.classList.toggle('open'); // Support both class names we used before
    }
    if (overlay) {
        overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    }
}

// 5. Initialize Page Data (Runs when any page loads)
window.onload = function() {
    // Update [NAME] in main.html or profile.html
    const nameDisplay = document.getElementById('user-name') || document.querySelector('.greeting');
    const storedName = localStorage.getItem('userName');
    
    if (nameDisplay && storedName) {
        // If it's the greeting text, keep the "Hi " part
        if (nameDisplay.classList.contains('greeting')) {
            nameDisplay.innerText = `Hi ${storedName}!`;
        } else {
            nameDisplay.innerText = storedName;
        }
    }
};
