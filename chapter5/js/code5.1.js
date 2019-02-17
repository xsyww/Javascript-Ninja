var outerValue = 'ninja';
var later;

function outerFunction() {
    var innerValue = 'samurai';

    function innerFunction(paramValue) {
        assert(outerValue == 'ninja', "Inner can see the ninja");
        assert(innerValue == 'samurai', "Inner can cee the samurai");

        assert(paramValue, "Inner can see the wakizashi");
        assert(outer1, "Inner can see the outer1"); // 成功
        assert(!outer2, "Inner can't see the outer2"); // 无法访问outer2
    }

    later = innerFunction;
}

assert(!outer1, "Outer can't see the outer1");

outerFunction();

var outer1 = '1';

later('wakizashi'); // 在这里，

var outer2 = '2';

