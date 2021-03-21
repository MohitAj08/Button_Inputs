basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        basic.showString("9x" + ("" + index) + "=")
        basic.showNumber(9 * index)
        basic.clearScreen()
    }
})
