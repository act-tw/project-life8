var isRunning = true;
function test(value) {
    if (isRunning && value>document.body.scrollTop) {
        setTimeout(function() {
            if (value>document.body.scrollTop) {
                setTimeout(arguments.callee,500);
            }
            document.body.scrollTop = value;
            console.log("[" + document.body.scrollTop + "," + value+"]");
        },500);
        isRunning = false;
    }
}