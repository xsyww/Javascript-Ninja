function Ninja() {
    this.swung = false;
    this.swingSword = function () {
        return !this.swung;
    };
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swung;
}

assert(ninja.swingSword(), "Instance method, not the prototype method.");