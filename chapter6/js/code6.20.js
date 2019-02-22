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
                        var tmp = this._super;
                        this._super = _super[name];

                        var ret = fn.apply(this, arguments);
                        this._super = tmp;

                        return ret;
                    };
                })(name, properties[name]) :
                properties[name];
        };

        function Class() {
            // All construction is actually done in init method
            if (!initializing && this.init)
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