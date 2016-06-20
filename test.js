var isRunning = true;
function movingTo(value) {
    if (isRunning && value > document.body.scrollTop) {
        var step = 100;
        var i = 100;
        var max = 10000;
        setTimeout(function() {
            document.body.scrollTop = value;
            console.log("[" + document.body.scrollTop + "," + value + "]");
            if (value > document.body.scrollTop && i < max) {
                setTimeout(arguments.callee, step);
                i += step;
            }
        }, step);
        isRunning = false;
    }
}