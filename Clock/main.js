function updateDisplay() {
    let dt = new Date

    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();

    horsAtual = zero(hours) + ":" + zero(minutes) + ":" + zero(seconds);

    function zero(x) {
        if (x < 10) {
            x = '0' + x;
        } return x;
    }

    const display = document.querySelector(".display");
    display.textContent = horsAtual
};

updateDisplay();
setInterval(updateDisplay, 500);
