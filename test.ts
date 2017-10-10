// tests go here; this will not be compiled when this package is used as a library

let temp = 0
basic.forever(() => {
    temp = input.temperature()
    basic.showNumber(temp)
    basic.pause(500)
})
IoTNode.onCommand("hub_command", () => {
    basic.showString("x")
})
IoTNode.onVariableRequest("temp", () => {
    temp = input.temperature()
    // This block is hard to use with non-strings.
    //
    // Should we have 2 blocks, one for number and one for
    // strings?
    //
    IoTNode.sendVariable("hello_var", "" + temp)
})
IoTNode.onVariableChange("temp", () => {
    temp = parseInt(IoTNode.readVariable("temp"))
    basic.showNumber(temp)
})
IoTNode.sendName("Fred")
// Do we still want this block?
IoTNode.sendInterval(1000)
