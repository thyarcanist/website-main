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
    document.cookie = `theme=${theme}; path=/`; // Save the theme preference as a cookie
}

function getThemePreference() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'theme') {
            return value;
        }
    }
    return null;
}

function loadThemePreference() {
    const theme = getThemePreference();
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
