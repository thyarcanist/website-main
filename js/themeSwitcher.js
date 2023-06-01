function applyTheme(theme) {
    const stylesheet = document.getElementById('stylesheet');
    const contentContainer = document.getElementById('contentContainer');
    const asciiBarElement = document.getElementById('asciiBar');
    const asciiArtElement = document.getElementById('asciiArt');
    const boxElements = document.querySelectorAll('.box'); // Get all box elements

    let relativePath = '';

    if (window.location.pathname.includes('writings')) {
        relativePath = '../'; // Go up one level to reach the root folder
    } else if (window.location.pathname.includes('games')) {
        relativePath = '../'; // Go up one level to reach the root folder
    }

    if (theme === 'defb') {
        stylesheet.href = `${relativePath}css/defb.css`; // Construct the relative path to defb.css

        if (asciiBarElement) {
            asciiBarElement.style.display = 'none'; // Hide the ASCII bar
        }
        if (asciiArtElement) {
            asciiArtElement.textContent = '';
        }

        // Populate the text content of the boxes
        if (contentContainer) {
            const box1 = document.getElementById('box1');
            const box2 = document.getElementById('box2');
            const box3 = document.getElementById('box3');

            if (box1) {
                box1.innerHTML = '<p>Here\'s my considered opinion...\'<br /><a href="https://www.etsy.com/shop/terminusbynil/">TerminusByNil</a></p>';
            }

            if (box2) {
                box2.innerHTML = '<p>Here\'s my two cents...\'<br /><a href="https://www.etsy.com/shop/terminusbynil/">TerminusByNil</a></p>';
            }

            if (box3) {
                box3.innerHTML = '<p>Here\'s my fucks given...\'<br /><a href="https://www.etsy.com/shop/terminusbynil/">TerminusByNil</a></p>';
            }
        }
    } else {
        stylesheet.href = `${relativePath}css/defb.css`; // Construct the relative path to default.css

        if (asciiBarElement) {
            asciiBarElement.style.display = 'block'; // Show the ASCII bar
            asciiBarElement.innerHTML = '<div id="monochromeContainer"><p id="monochrome" class="typing-animation">|||██████████████████████████████████████████</p></div>'; // Restart the ASCII bar animation
        }
        if (asciiArtElement) {
            // Restore the ASCII art content
            asciiArtElement.textContent = '...'; // Replace '...' with the desired ASCII art content
        }

        // Remove the text content of the boxes
        if (contentContainer) {
            const box1 = document.getElementById('box1');
            const box2 = document.getElementById('box2');
            const box3 = document.getElementById('box3');

            if (box1) {
                box1.innerHTML = '';
            }

            if (box2) {
                box2.innerHTML = '';
            }

            if (box3) {
                box3.innerHTML = '';
            }
        }
    }
}
