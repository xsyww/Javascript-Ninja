window.onload = function() {
    assert(true, 'power!');
}

var ninjia = {
    shout: function() {
        assert(false, 'ninjia!');
    }
};

var ninjia2 = {};
ninjia2.shout = function () {
    assert(true, "ninjia2 shout!");
}
ninjia.shout();
ninjia2.shout();

assert(ninjia.shout.name === "shout", "ninjia.shout has name 'shout'");
assert(ninjia2.shout.name === 'shout', "ninjia2.shout has name 'shout'");

setTimeout(() => {
    assert(true, ' Forever!');
}, 500);
