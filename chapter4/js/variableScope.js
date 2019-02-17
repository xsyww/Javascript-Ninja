assert(true, "|-------- BEFORE OUTER --------|");
assert(typeof outer === 'function', "outer() is in scope");
assert(typeof inner === 'function', "inner() is in scope");
assert(typeof a === 'number', "a is in scope");
assert(typeof b === 'number', "b is in scope");
assert(typeof c === 'number', "c is in scope");

function outer() {
    assert(true, "|-------- INSIDE OUTER, BEFORE a --------|");
    assert(typeof outer === 'function', "outer() is in scope");
    assert(typeof inner === 'function', "inner() is in scope");
    assert(typeof a === 'number', "a is in scope");
    assert(typeof b === 'number', "b is in scope");
    assert(typeof c === 'number', "c is in scope");

    var a = 1;

    assert(true, "|-------- INSIDE OUTER, AFTER a --------|");
    assert(typeof outer === 'function', "outer() is in scope");
    assert(typeof inner === 'function', "inner() is in scope");
    assert(typeof a === 'number', "a is in scope");
    assert(typeof b === 'number', "b is in scope");
    assert(typeof c === 'number', "c is in scope");

    function inner() {}
    var b = 2;

    assert(true, "|-------- INSIDE OUTER, BEFORE inner() AND b --------|");
    assert(typeof outer === 'function', "outer() is in scope");
    assert(typeof inner === 'function', "inner() is in scope");
    assert(typeof a === 'number', "a is in scope");
    assert(typeof b === 'number', "b is in scope");
    assert(typeof c === 'number', "c is in scope");

    if (a == 1) {
        var c = 3;

        assert(true, "|-------- INSIDE OUTER, INSIDE if --------|");
        assert(typeof outer === 'function', "outer() is in scope");
        assert(typeof inner === 'function', "inner() is in scope");
        assert(typeof a === 'number', "a is in scope");
        assert(typeof b === 'number', "b is in scope");
        assert(typeof c === 'number', "c is in scope");
    }

    assert(true, "|-------- INSIDE OUTER, OUTSIDE if --------|");
    assert(typeof outer === 'function', "outer() is in scope");
    assert(typeof inner === 'function', "inner() is in scope");
    assert(typeof a === 'number', "a is in scope");
    assert(typeof b === 'number', "b is in scope");
    assert(typeof c === 'number', "c is in scope");
}

outer();

assert(true, "|-------- AFTER OUTER --------|");
assert(typeof outer === 'function', "outer() is in scope");
assert(typeof inner === 'function', "inner() is in scope");
assert(typeof a === 'number', "a is in scope");
assert(typeof b === 'number', "b is in scope");
assert(typeof c === 'number', "c is in scope");