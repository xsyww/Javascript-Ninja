Object.prototype.keys = function () {
    var keys = [];
    for (var p in this)
        if (this.hasOwnProperty(p)) // 这个用来判断是否是实例属性，原型定义的属性将跳过
            keys.push(p);
    return keys;
}

var obj = { a: 1, b: 2, c: 3 };

assert(obj.keys().length == 3, "There are three properties in this object");