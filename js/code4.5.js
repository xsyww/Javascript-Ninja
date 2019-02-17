var ninja = {
    chrip: function signal(n) {
        return n > 1 ? signal(n - 1) + "-chrip" : "chrip";
    }
};
assert(ninja.chrip(3) == "chrip-chrip-chrip", "Works as we would expect it to!");

var samurai = { chrip: ninja.chrip };
ninja = {};
assert(samurai.chrip(3) == "chrip-chrip-chrip", "The method correctly calls itself.");