let isDefault = true;

function swapStyleSheet() {
    const stylesheet = document.getElementById('stylesheet');
    if (isDefault) {
        stylesheet.href = 'glitch.css';
        isDefault = false;
    } else {
        stylesheet.href = 'default.css';
        isDefault = true;
    }
}