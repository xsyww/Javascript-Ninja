function merge(root) {
    for (var i = 1; i < arguments.length; i++) {    // 就是要把除了第一个以外的参数属性合并到第一个上，所以下标从1开始，跳过第0个
        for (var key in arguments[i]) {
            root[key] = arguments[i][key];
        }
    }
    return root;            // 如果有多个参数被传入，其实是针对第一个参数错了处理，并返回了第一个参数
}

var merged = merge(
    { name: "Batou" },
    { city: "Niihama" }
)

assert(merged.name == "Batou", "The original name is intact");
assert(merged.city == "Niihama", "And the city has been copied over.");

var obj1 = {};
obj1.name = "obj1";
obj1.age = 16;

var obj2 = {};
obj2.class = "class1";
obj2.grade = "testing";

var merged2 = merge(obj1, obj2);
console.log(merged2);

function multiMax(multi) {
    return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
}
assert(multiMax(3, 1, 2, 3) == 9, "3*3=9, First arg, by largest.");

// 函数的length属性，不是aguments的length。。。
// 它是指函数定义的时候定义了需要几个参数，而 arguments.length是实际运行时，真正传入的参数有几个
function makeNinja(name) { };
function makeSamurai(name, rank) { };
assert(makeNinja.length == 1, "Only expecting a single argument");
assert(makeSamurai.length == 2, "Two arguments expected.");