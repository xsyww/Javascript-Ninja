Number.prototype.add = function (num) {
    return this + num;
}

var n = 5;

assert(n.add(3) == 8, "It works when the number is in a variable");
assert((5).add(3) == 8, "Also works if a number is wrapped in a parentheses");
//assert(5.add(3) == 8, "What about a single literal?");  // 这个语法不正确