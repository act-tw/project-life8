var isRunning = true;
function test(value) {
    if (isRunning && value>document.body.scrollTop) {
        setTimeout(function() {
            document.body.scrollTop = value;
            console.log("[" + document.body.scrollTop + "," + value+"]");
            if (value>document.body.scrollTop) {
                setTimeout(arguments.callee,500);
            }
        },500);
        isRunning = false;
    }
}