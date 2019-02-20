// ====== code5.13 ======

Function.prototype.memorized = function (key) {
    this._values = this._values || {};
    return this._values[key] !== undefined ?
        this._values[key] :
        this._values[key] = this.apply(this, arguments);
};

function isPrime(num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    return prime;
}

assert(isPrime.memorized(5), "The function works, 5 is prime");
assert(isPrime._values[5], "the answer is cached.");

// ====== code5.14 ======

Function.prototype.memorize = function () {
    var fn = this;
    return function () {
        return fn.memorized.apply(fn, arguments);
    }
}

var isPrimeEx = (function (num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}).memorize();

assert(isPrimeEx(17), "17 is prime");