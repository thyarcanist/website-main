// themeSwitcher.js

function applyTheme(theme) {
    const stylesheet = document.getElementById('stylesheet');
    const asciiBarElement = document.getElementById('asciiBar');
    const asciiArtElement = document.getElementById('asciiArt');

    let relativePath = '';

    if (window.location.pathname.includes('writings')) {
        relativePath = '../'; // Go up one level to reach the root folder
    } else if (window.location.pathname.includes('games')) {
        relativePath = '../'; // Go up one level to reach the root folder
    }

    if (theme === 'defb') {
        stylesheet.href = `${relativePath}css/defb.css`; // Construct the relative path to defb.css
        if (asciiBarElement) {
            asciiBarElement.textContent = '';
        }
        if (asciiArtElement) {
            asciiArtElement.textContent = '';
        }
    } else {
        stylesheet.href = `${relativePath}css/default.css`; // Construct the relative path to default.css
        showAsciiBar(); // Restore the ASCII bar
    }
}

function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function loadThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        applyTheme(theme);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeButton');
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            const stylesheet = document.getElementById('stylesheet');
            if (stylesheet.href.endsWith('defb.css')) {
                applyTheme('default');
                saveThemePreference('default');
            } else {
                applyTheme('defb');
                saveThemePreference('defb');
            }
        });
    }

    loadThemePreference();
});
