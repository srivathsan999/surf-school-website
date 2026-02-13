/**
 * Theme Toggle Functionality
 */

const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;

// Get saved theme or system preference
const storedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = storedTheme || systemTheme;

// Apply theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcons(theme);
}

// Update both icons
function updateIcons(theme) {
    const iconHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

    if (themeToggle) themeToggle.innerHTML = iconHTML;
    if (themeToggleMobile) themeToggleMobile.innerHTML = iconHTML;
}

// Initial theme load
setTheme(initialTheme);

// Toggle function
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Desktop button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Mobile button
if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
}
