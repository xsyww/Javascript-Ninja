function Ninja() { }

var ninja = new Ninja();
var ninja2 = new ninja.constructor();

assert(ninja2 instanceof Ninja, "It's a Ninja!");
assert(ninja != ninja2, "But not the same Ninja!");