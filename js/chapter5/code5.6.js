function animateIt(elementId) {
    var elem = document.getElementById(elementId);
    var tick = 0;

    var timer = setInterval(function () {
        if (tick < 100) {
            elem.style.left = elem.style.top = tick + "px";
            tick++;
        }
        else {
            clearInterval(timer);
            assert(tick == 100, "Tick accessed via a closure.");
            assert(elem, "Element also accessed via a closure.");
            assert(timer, "Timer reference also obtained via a closure.");
        }
    }, 10);
}

animateIt('box');