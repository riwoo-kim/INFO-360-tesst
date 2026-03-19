/* script.js - Central logic for navigation and data (Unified Version) */

// 1. Function to handle Sign In (from index.html)
function handleSignIn() {
    const emailInput = document.getElementById('email');
    if (emailInput && emailInput.value) {
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

// 3. Navigation Functions
function goToPage(pageName) {
    // Navigate to the specific file
    window.location.href = pageName;
}

function goBack() {
    // Go to the previous page in history
    window.history.back();
}

// 4. Save Profile Data (For profile.html)
function saveProfile() {
    const nameInput = document.getElementById('profileName');
    if (nameInput && nameInput.value) {
        localStorage.setItem('userName', nameInput.value);
        alert("Profile Saved!");
        window.location.href = 'main.html';
    } else {
        alert("Please enter a name.");
    }
}

// 5. Hamburger Menu Toggle Logic
function toggleMenu() {
    const menu = document.getElementById('sideMenu') || document.getElementById('side-menu');
    const overlay = document.getElementById('overlay') || document.getElementById('menu-overlay');
    
    if (menu) {
        menu.classList.toggle('active');
        menu.classList.toggle('open');
    }
    if (overlay) {
        overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    }
}

// 6. Initialize Page Data (Runs when any page loads)
window.onload = function() {
    // Update Greeting or Name display
    const nameDisplay = document.getElementById('user-name') || document.querySelector('.greeting') || document.getElementById('profileName');
    const storedName = localStorage.getItem('userName');
    
    if (nameDisplay && storedName) {
        // If it's an input field (like in profile.html)
        if (nameDisplay.tagName === 'INPUT') {
            nameDisplay.value = storedName;
        } 
        // If it's a greeting text (like in main.html)
        else if (nameDisplay.classList.contains('greeting')) {
            nameDisplay.innerText = `Hi ${storedName}!`;
        } 
        // Regular text display
        else {
            nameDisplay.innerText = storedName;
        }
    }
};
