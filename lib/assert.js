var results;
var queue = [];
var paused = false;

function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));

    if (results === undefined)
        results = document.getElementById("results");
    
    results.appendChild(li);
    if (!value) {
        li.parentNode.parentNode.className = "fail";
    }
    return li;
};

function test(name, fn) {
    results = document.getElementById("results");
    results = assert(true, name).appendChild(document.createElement("ul"));
    fn();
};

function pause() {
    paused = true;
};

function resume() {
    paused = false;
    setTimeout(runTest, 1);
};

function runTest() {
    if (!paused && queue.length) {
        queue.shift()();
        if (!paused) {
            resume();
        }
    }
};

function testAsync(name, fn) {
    queue.push(function () {
        results = document.getElementById("results");
        results = assert(true, name).appendChild(document.createElement("ul"));
        fn();
    });

    runTest();
};