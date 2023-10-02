_var4 = ""

def on_forever():
    global _var4
    mode = 0
    _var4=""
    if mode == 0:
        _var4 = convert_to_text(_var4)
    elif mode == 1:
        _var4 = convert_to_text(_var4)
    if len(convert_to_text(_var4)) <= 2:
        for index in range(5):
            led.unplot(0, index)
    elif _var4[0] == "1":
        led.plot(0, 0)
    elif (0) == ("2"):
        led.plot(2, 0)
    elif (0) == ("3"):
        led.plot(4, 0)
basic.forever(on_forever)
