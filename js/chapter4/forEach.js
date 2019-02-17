function for_each(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback.call(list[i], i);
    }
}

var weapons = ['shuriken', 'katana', 'nunchucks'];

for_each(weapons, function(index) {
    assert(this == weapons[index], "Got the expected value of " + weapons[index]);
});