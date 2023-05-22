window.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('monochrome');
    const text = textElement.textContent;
    textElement.textContent = '';

    let index = 0;
    let typingAnimation = null;
    let asciiArtDisplayed = false;

    function startTypingAnimation() {
        textElement.textContent = ''; // Clear the text before starting animation
        index = 0; // Reset the index to start from the beginning
        typingAnimation = setInterval(() => {
            textElement.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(typingAnimation);
                typingAnimation = null;
                const stylesheet = document.getElementById('stylesheet');
                if (stylesheet.href.endsWith('defb.css')) {
                    showAsciiArt();
                } else {
                    showAsciiBar();
                }
            }
        }, 100); // Adjust the typing speed (milliseconds)
    }

    function stopTypingAnimation() {
        if (typingAnimation) {
            clearInterval(typingAnimation);
            typingAnimation = null;
        }
    }

    function showAsciiBar() {
        const asciiBarElement = document.getElementById('asciiBar');
        if (asciiBarElement) {
            asciiBarElement.textContent = '||||██████████████████████████████████████████|';
        }
    }

    function showAsciiArt() {
        const asciiArtElement = document.getElementById('asciiArt');
        if (asciiArtElement && !asciiArtDisplayed) {
            asciiArtElement.textContent = `
____________________________________________________
|                                                  |
|                                                  |
|                   voidOS v1.0                    |
|__________________________________________________|
|                                                  |
|    Traversing the worlds,                        |
|               through aether and flesh.          |
|    $                                             |
|__________________________________________________|

      `;
            asciiArtDisplayed = true;
        } else if (!asciiArtElement && asciiArtDisplayed) {
            textElement.textContent = ''; // Clear the text if the ASCII art cannot be displayed
        }
    }

    function applyTheme(theme) {
        const stylesheet = document.getElementById('stylesheet');
        const currentLocation = window.location.href;
        const basePath = currentLocation.substring(0, currentLocation.lastIndexOf('/') + 1);

        if (theme === 'defb') {
            stylesheet.href = basePath + 'css/defb.css';
            startTypingAnimation();
        } else {
            stylesheet.href = basePath + 'css/default.css';
            stopTypingAnimation();
            const asciiBarElement = document.getElementById('asciiBar');
            if (asciiBarElement) {
                asciiBarElement.textContent = '';
            }
            const asciiArtElement = document.getElementById('asciiArt');
            if (asciiArtElement) {
                asciiArtElement.textContent = '';
            }
            asciiArtDisplayed = false;
            textElement.textContent = '';
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

    const themeButton = document.getElementById('themeButton');
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

    loadThemePreference();
});
