var isRunning = true;
function movingTo(value) {
    if (isRunning && value>document.body.scrollTop) {
        setTimeout(function() {
            document.body.scrollTop = value;
            console.log("[" + document.body.scrollTop + "," + value+"]");
            if (value>document.body.scrollTop) {
                setTimeout(arguments.callee,100);
            }
        },100);
        isRunning = false;
    }
}