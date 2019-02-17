function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }

    this.result = result;
}

var ninjia1 = {};
var ninjia2 = {};

juggle.apply(ninjia1, [1, 2, 3, 4]);
juggle.call(ninjia2, 5, 6, 7, 8);

assert(ninjia1.result === 10, "juggled via apply");
assert(ninjia2.result === 26, "juggled via call");