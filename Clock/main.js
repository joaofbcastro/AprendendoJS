function updateDisplay() {
    let dt = new Date

    const display = document.querySelector(".display");

    var hora = dt.getHours();
    var minuto = dt.getMinutes();
    var segundo = dt.getSeconds();

    horsAtual = zero(hora) + ":" + zero(minuto) + ":" + zero(segundo);

    function zero(x) {
        if (x < 10) {
            x = '0' + x;
        } return x;
    }

    display.textContent = horsAtual
};

updateDisplay();
setInterval(updateDisplay, 1000);
