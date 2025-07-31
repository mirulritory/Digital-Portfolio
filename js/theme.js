// theme.js - Complete Fix
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');

  // Initialize theme
  let currentTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme);

  // Toggle function
  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateIcon(currentTheme);
    console.log('Theme changed to:', currentTheme); // Debug
  }

  // Update icon
  function updateIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }

  // Event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});