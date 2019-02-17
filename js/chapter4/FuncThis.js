function creep() { return this; };
assert(creep() === window, "Creeping in window");

var sneak = creep;
assert(sneak() === window, "Sneaking in window");

var ninjia1 = {
    skulk: creep
}
assert(ninjia1.skulk() === ninjia1, "This 1st ninjia is skulking");

var ninjia2 = {
    skulk: creep
}
assert(ninjia2.skulk() === ninjia2, "The 2nd ninjia is skulking");


function Ninjia() {
    this.skulk = function () { return this; };
}

var n1 = new Ninjia();
var n2 = new Ninjia();
assert(n1.skulk() === n1, "n1 is skulking");
assert(n2.skulk() === n2, "n2 is skulking");
