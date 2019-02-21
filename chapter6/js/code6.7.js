function Person() { }
Person.prototype.dance = function () { };

function Ninja() { }
Ninja.prototype = { dance: Person.prototype.dance };

var ninja = new Ninja();
assert(ninja instanceof Ninja,
    "ninja receives functionality from the Ninja prototype");
assert(ninja instanceof Person,
    "... and the Person prototype");    // 断言失败！不是Person
assert(ninja instanceof Object,
    "... and the Object prototype");