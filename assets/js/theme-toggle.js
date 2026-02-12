/**
 * Theme Toggle Functionality
 * Handles Light/Dark mode switching with localStorage persistence
 */

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');

// Check localStorage or system preference
const storedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = storedTheme || systemTheme;

// Apply theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
}

function updateIcon(theme) {
    if (!themeToggle) return;

    // Simple text based toggle for now, usually you'd toggle classes on icons
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        // Or if using specific icon elements
        if (iconSun) iconSun.style.display = 'block';
        if (iconMoon) iconMoon.style.display = 'none';
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (iconSun) iconSun.style.display = 'none';
        if (iconMoon) iconMoon.style.display = 'block';
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// Initial set
setTheme(initialTheme);

// Event Listener
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}
