# 我的《Javascript忍者秘籍》学习笔记
## 第四章 函数
### 函数的length属性
* 和`arruments.length`不同，`function`的`length`属性是指函数定义时，声明的需要的参数个数
* `arguments.length`则是函数具体执行时，真正被传入到函数中的参数个数。
### 全局函数
``` javascript
    // 这个函数可以用 window.func1 访问到
    function func1() {  
        console.log("Hello, world!");
    }

    // 特别的，这种定义 obj1将会成为window的属性，但func2不会
    // 也就是说 window.obj1()可以执行，但没有window.func2()
    var obj1 = function func2() {   
        console.log("Test message");
    }
```
### 作用域
* 函数的作用域是在它所定义的代码块中，所以只要在同一个代码块中，函数使用可以在函数定义之前。
* 相对应的，变量的作用域是从它被定义的地方开始，所以变量得先定义，之后的代码才能使用，*但特别的，变量的作用域结束于它所在的函数块，而不是代码块，所以，在if代码块中定义好的变量，在脱离if块以后的相同函数块内仍然是可以使用的*
``` javascript
    if (true) {
        var count = 3;
        // do something...
    }

    assert(count == 3, "count仍然可用");
```
### 判断一个object是不是个函数
``` javascript
    function isFunction(fn) {
        return Object.prototype.toString.call(fn) == "[Object Function]";
    }
```
## 第五章 闭包
闭包是一个函数在创建时允许该自身函数访问并操作该自身函数之外的变量时所创建的作用域。换句话说，闭包可以让函数访问所有的变量和函数，只要这些变量和函数存在于函数声明时的作用域内就行，哪怕当前调用该函数的位置已经远远脱离被调用函数被定义时的作用域了。
### 函数定义时生成的闭包，不仅和它定义的位置有关系，还和它被调用时的位置有关系
例如如下方法，尝试让内部的innerFunction访问定义在它之后的tooLate变量
``` javascript
    var later;

    function outerFunction() {
        function innerFunction() {
            assert(tooLate, "Inner can see the ronin");
        }
        later = innerFunction;
    }
    outerFunction();

    assert(!tooLate, "Outer can see the ronin");    // 外部当然访问不到，下面还没有定义

    var tooLate = 'ronin';

    later(); // innerFunction中的断言成功！！可以访问到tooLate变量
```
但是，把later()执行的方法放在tooLate定义之前，结果就不一样了
``` javascript
    later();    // 这种情况下，innerFunction中的断言就失败了！无法访问到tooLate变量
    var tooLate = 'ronin';
```