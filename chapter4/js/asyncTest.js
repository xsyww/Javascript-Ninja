test("ddd", function () {
    assert(true, "yes!");
})

testAsync("A test", function () {
    pause();
    setTimeout(() => {
        assert(true, "First test done!");
        resume();
    }, 1000);
})

testAsync("B test", function () {
    pause();
    setTimeout(() => {
        assert(true, "Second test done!");
        resume();
    }, 1000);
})