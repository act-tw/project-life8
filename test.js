var isRunning = true;

function test(value) {
    if (isRunning) {
        console.log("test:" + document.body.scrollTop + "," + value);
        isRunning = false;
    }
}