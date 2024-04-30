var changeState = function (state) {
    document.body.className = 'body-state'+ state;

    if (state == 2) {
        timer = setInterval(function () {
            document.getElementById('countdown').innerHTML = countdownNumber;
            countdownNumber = countdownNumber -1;
        }, 1000);   
    };
}