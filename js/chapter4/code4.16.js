function addMethod(object, name, fn) {
    var old = object[name];
    object[name] = function () {
        if (fn.length == arguments.length)
            return fn.apply(this, arguments);
        else if (typeof old == 'function')
            return old.apply(this, arguments);
    };
}

var ninjas = {
    values: ["xu shuai", "zheng jinlong", "zhang yue"]
};

addMethod(ninjas, "find", function () {
    return this.values;
});

addMethod(ninjas, "find", function (name) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++)
        if (this.values[i].indexOf(name) == 0)
            ret.push(this.values[i]);
    
    return ret;
});
 
addMethod(ninjas, "find", function (first, last) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++)
        if (this.values[i] == (first + " " + last))
            ret.push(this.values[i]);
    
    return ret;
});

assert(ninjas.find().length == 3, "Found all ninjas.");
assert(ninjas.find("xu").length == 1, "Found ninja by first name.");
assert(ninjas.find("zhang", "yue").length == 1, "Found ninja by first and last name.");
assert(ninjas.find("zhang", "san", "feng") == null, "Found nothing.");