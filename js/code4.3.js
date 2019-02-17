function chrip(n) {
    return n > 1 ? chrip(n - 1) + "-chrip" : "chrip";
}
assert(chrip(3) == "chrip-chrip-chrip", "Calling the named function comes naturally");

var ninja = {
    chrip: function (n) {
        return n > 1 ? ninja.chrip(n - 1) + "-chrip" : "chrip"; // 这里匿名函数调用了ninja对象，当这个对象被重置时，这个方法就无效了
    }
}
assert(ninja.chrip(3) == "chrip-chrip-chrip", "An object property isn't too confusing, either.");

var samurai = { chrip: ninja.chrip };
ninja = {};

try {
    assert(samurai.chrip(3) == "chrip-chrip-chrip", "Is goning to work?");
}
catch (e) {
    assert(false, "It's not good! Where'd ninja.chrip go?");
}

var ninja2 = {
    chrip: function (n) {
        return n > 1 ? this.chrip(n - 1) + "-chrip" : "chrip";
    }
}
var samurai2 = { chrip: ninja2.chrip };
ninja2 = {};
assert(samurai2.chrip(3) == "chrip-chrip-chrip", "samurai2 chrip is working good!");