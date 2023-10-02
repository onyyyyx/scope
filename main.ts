let _var4 = ""
basic.forever(function () {
    let mode = 0
    if (mode == 0) {
        _var4 = convertToText(input.rotation(Rotation.Roll))
    } else if (mode == 1) {
        _var4 = convertToText(input.rotation(Rotation.Pitch))
    }
    if (convertToText(_var4).length <= 2) {
        for (let index = 0; index <= 4; index++) {
            led.unplot(0, index)
        }
    } else if (_var4[0] == "1") {
        led.plot(0, 0)
    } else if ((0 as any) == ("2" as any)) {
        led.plot(2, 0)
    } else if ((0 as any) == ("3" as any)) {
        led.plot(4, 0)
    }
})
