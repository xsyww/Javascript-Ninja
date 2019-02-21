function Ninja() { }

Ninja.prototype.swingSword = function () {
    return true;
}

var ninja = Ninja();
assert(ninja === undefined,
    "No instance of Ninja created");

var ninja2 = new Ninja();
assert(ninja2 &&
    ninja2.swingSword &&
    ninja2.swingSword(),
    "Instance exists and method is callable");