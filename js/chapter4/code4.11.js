function smallest(array) {
    return Math.min.apply(Math, array);
}

function largest(array) {
    return Math.max.apply(Math, array);
}

assert(smallest([0, 1, 2, 3]) == 0, "Located the smallest value.");
assert(largest([0, 1, 2, 3]) == 3, "Located the largest value.");