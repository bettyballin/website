// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme based on saved preference or system preference
  initTheme();
  
  // Add event listeners to theme toggle button
  setupThemeToggle();
});

// Initialize theme based on saved preference or system preference
function initTheme() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Set initial theme
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  
  // Make sure the correct icon is displayed initially
  updateThemeIcon(currentTheme);
}

// Add event listeners to theme toggle button
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (!themeToggle) {
    console.error('Theme toggle button not found');
    return;
  }
  
  // Add click event listener
  themeToggle.addEventListener('click', function(e) {
    console.log('Theme toggle clicked');
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  });
  
  // Add touch event listener for mobile devices
  themeToggle.addEventListener('touchend', function(e) {
    console.log('Theme toggle touched');
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  });
}

// Toggle theme between light and dark
function toggleTheme() {
  console.log('Toggling theme');
  let theme;
  
  // If the current theme is dark, switch to light
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    theme = 'light';
    console.log('Switched to light theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    theme = 'dark';
    console.log('Switched to dark theme');
  }
  
  // Update the icon to match the new theme
  updateThemeIcon(theme);
  
  // Save the preference
  localStorage.setItem('theme', theme);
}

// Update the theme icon based on current theme
function updateThemeIcon(theme) {
  const lightIcon = document.querySelector('.theme-icon.theme-icon-light');
  const darkIcon = document.querySelector('.theme-icon.theme-icon-dark');
  
  if (!lightIcon || !darkIcon) {
    console.error('Theme icons not found');
    return;
  }
  
  if (theme === 'dark') {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  } else {
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
  }
}