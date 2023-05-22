document.addEventListener('DOMContentLoaded', function () {
    let isDefault = true;

    function swapCSS() {
        const stylesheet = document.getElementById('stylesheet');
        if (isDefault) {
            stylesheet.href = 'css/defb.css';
            isDefault = false;
        } else {
            stylesheet.href = 'css/default.css';
            isDefault = true;
        }

    }

    document.getElementById('themeButton').addEventListener('click', swapCSS);
});
