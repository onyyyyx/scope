let _var4 = ""
function D (_var: number) {
	
}
function C (_var2: number) {
	
}
function U (_var3: number) {
    if (convertToText(_var3).length <= 2) {
        for (let index = 0; index <= 4; index++) {
            led.unplot(0, index)
        }
    } else if (true) {
        led.plot(0, 0)
    } else if ((0 as any) == ("2" as any)) {
        led.plot(2, 0)
    } else if ((0 as any) == ("3" as any)) {
        led.plot(4, 0)
    }
}
basic.forever(function () {
    let mode = 0
    if (mode == 0) {
        _var4 = convertToText(_var4)
    } else if (mode == 1) {
        _var4 = convertToText(_var4)
    }
    U(_var4)
})
