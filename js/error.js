const d = document.getElementsByClassName("m");


var button = document.getElementById("u"),
    count = 0;
button.onclick = function() {
    count += 1;

    if (count == 7) {
        window.close();
        function moveD() {
            let id = null;
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
                if (pos == 350) {
                    clearInterval(id);
                }
                else {
                    pos++;
                    d.style.top = pos + 'px';
                    d.style.left = pos + 'px';
                }
            }
        }
    }
}