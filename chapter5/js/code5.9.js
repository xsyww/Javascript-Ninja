Function.prototype.bind = function () {
    var fn = this;
    var args = Array.prototype.slice.call(arguments);
    var object = args.shift();

    return function () {
        return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    };
};

var myObject = {};
function myFunction() {
    return this == myObject;
}
assert(!myFunction(), "context is not set yet!");

var aFunction = myFunction.bind(myObject);
assert(aFunction(), "context is set properly");

Function.prototype.curry = function () {
    var fn = this;
    var args = Array.prototype.slice.call(arguments);

    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
}

/*
String.prototype.csv = String.prototype.split.curry("/,\s");
var results = ("Mugan, Jin, Fuu").csv();
assert(results[0] == "Mugan" &&
    results[1] == "Jin" &&
    results[2] == "Fuu",
    "The text value were split properly"
);
*/

Function.prototype.partial = function () {
    var fn = this;
    var args = Array.prototype.slice.call(arguments);

    return function () {
        var arg = 0;
        for (var i = 0; i < args.length && arg < arguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = arguments[arg++];
            }
        }

        return fn.apply(this, args);
    };
};

var delay = setTimeout.partial(undefined, 1000);
delay(function () {
    assert(true, "A call to this function will be delayed 1000 ms"); 
});

var bindClick = document.body.addEventListener.partial('click', undefined, false);
bindClick(function () {
    assert(true, "Click event bound via curried function");
});