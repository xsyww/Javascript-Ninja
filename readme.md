# 我的《Javascript忍者秘籍》学习笔记
## 函数
### 函数的length属性
* 和`arruments.length`不同，`function`的`length`属性是指函数定义时，声明的需要的参数个数
* `arguments.length`则是函数具体执行时，真正被传入到函数中的参数个数。
### 作用域
* 函数的作用域是在它所定义的代码块中，所以只要在同一个代码块中，函数使用可以在函数定义之前。
* 相对应的，变量的作用域是从它被定义的地方开始，所以变量得先定义，之后的代码才能使用，*但特别的，变量的作用域结束于它所在的函数块，而不是代码块，所以，在if代码块中定义好的变量，在脱离if块以后的相同函数块内仍然是可以使用的*
``` javascript
    if (true) {
        var count = 3;
        // do something...
    }

    assert(count == 3, "count仍然可用“);
```