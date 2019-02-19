function bind(context, name) {
    return function () {
        return context[name].apply(context, arguments);
    }
}

var button = {
    clicked: false,
    click: function () {
        this.clicked = true;
        assert(button.clicked, "Button is clicked");
        console.log(this);
    }
};

var elem = document.getElementById('test');
elem.addEventListener('click', bind(button, 'click'));    // 用这种方式来确定上下文
//elem.addEventListener('click', button.click.bind(button), false); // 或者用新版js自带的bind方法
