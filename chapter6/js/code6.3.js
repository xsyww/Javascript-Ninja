function Ninja() {
    this.swung = true;
}

var ninja = new Ninja();

// 在此处调用就没有定义
//assert(ninja.swingSword(), "Method exists, even out of order"); 

Ninja.prototype.swingSword = function () {
    return this.swung;
}

assert(ninja.swingSword(), "Method exists, even out of order");