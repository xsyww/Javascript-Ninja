function MyArray() { }
MyArray.prototype = new Array();

var mine = new MyArray();
mine.push(1, 2, 3);

assert(mine.length == 3, "All the items are in out sub-classed array.");
assert(mine instanceof Array, "verify that we implement Array functionality");