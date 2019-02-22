function User(first, last) {
    if (!(this instanceof arguments.callee)) {
        return new User(first, last);
    }
    this.name = first + " " + last;
}

var name = "Rukia";
var user = User('xu', 'shuai');
assert(user instanceof User, "User instantiated");  // user is undefined
assert(name == "Rukia", "name is correct.");
assert(user.name == "xu shuai", "User name is correct!");
//assert(user.name == "xu shuai", "User name is correct."); // exception: user is undefined

function Test() {
    return this instanceof arguments.callee;
}

assert(!Test(), "We didn't instantiate, so it returns false");
assert(new Test(), "We did instantiate, returning true");