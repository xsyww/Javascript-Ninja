function isPrime(value) {
    if (!isPrime.answer) isPrime.answer = {};
    if (isPrime.answer[value] != null) {
        return isPrime.answer[value];
    }

    var prime = value != 1;
    for (var i = 2; i < value; i++) {
        if (value % i == 0) {
            prime = false;
            break;
        }
    }

    return isPrime.answer[value] = prime;
}

assert(isPrime(5), "5 is prime");
assert(isPrime.answer[5], "The answer was cached!");