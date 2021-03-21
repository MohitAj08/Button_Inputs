def on_forever():
    for index in range(11):
        basic.show_string("9x" + str(index) + "=")
        basic.show_number(9 * index)
        basic.clear_screen()
basic.forever(on_forever)
