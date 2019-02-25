(function () {
    var initializing = false;
    var superPattern = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;

    Object.subClass = function (properties) {
        var _super = this.prototype;

        initializing = true;
        var proto = new this();
        initializing = false;

        for (var name in properties) {
            proto[name] = typeof properties[name] == "function" &&
                typeof _super[name] == "function" &&
                superPattern.test(properties[name]) ?
                (function (name, fn) {
                    return function () {
                        var tmp = this._super;                  // 保存旧 _super
                        this._super = _super[name];             // 替换_super
                        var ret = fn.apply(this, arguments);    // 执行替换后的_super
                        this._super = tmp;                      // 还原旧_super

                        return ret;
                    };
                })(name, properties[name]) :
                properties[name];
        };

        function Class() {
            // All construction is actually done in init method
            if (!initializing && this.init) // init 方法可能含有各种代价高昂的初始化功能，如果仅仅是创建一个实例作为原型的话，不需要执行init方法。
                this.init.apply(this, arguments);
        }

        Class.prototype = proto;
        Class.constructor = Class;
        Class.subClass = arguments.callee;

        return Class;
    };
})();

var Person = Object.subClass({
    init: function (isDancing) {
        this.dancing = isDancing;
    },
    dance: function () {
        return this.dancing;
    }
});

var Ninja = Person.subClass({
    init: function () {
        this._super(false);
    },
    dance: function () {
        // Ninja-specific stuff here
        return this._super();
    },
    swingSword: function () {
        return true;
    }
});

var person = new Person(true);
assert(person.dance(), "The person is dancing.");

var ninja = new Ninja();
assert(ninja.swingSword(), "The ninja is swinging sword.");
assert(!ninja.dance(), "The ninja is not dancing.");

assert(person instanceof Person, "person is a Person.");
assert(ninja instanceof Ninja && ninja instanceof Person, "ninja is a Ninja and a Person");