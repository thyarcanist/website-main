window.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('monochrome');
    const text = textElement.textContent;
    const asciiBarElement = document.getElementById('asciiBar');
    const asciiArtElement = document.getElementById('asciiArt');

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
        const stylesheet = document.getElementById('stylesheet');
        if (asciiBarElement && stylesheet) {
            if (stylesheet.href.endsWith('defb.css')) {
                asciiBarElement.style.display = 'block';
            } else {
                asciiBarElement.style.display = 'none';
            }
        }
    }

    // Call the function to hide the ASCII bar on page load
    showAsciiBar();





    function showAsciiArt() {
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
        }
    }

    const themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', () => {
        const stylesheet = document.getElementById('stylesheet');
        if (stylesheet.href.endsWith('defb.css')) {
            stopTypingAnimation();
            startTypingAnimation();
            showAsciiBar();
        } else {
            stopTypingAnimation();
            showAsciiBar();
            const asciiArtElement = document.getElementById('asciiArt');
            if (asciiArtElement) {
                asciiArtElement.textContent = '';
            }
            asciiArtDisplayed = false;
            textElement.textContent = '';
        }
    });


    // Start the typing animation initially
    startTypingAnimation();
});
