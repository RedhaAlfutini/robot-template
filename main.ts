input.onButtonPressed(Button.A, function () {
    forward()
    basic.showIcon(IconNames.Happy)
})
function backwards () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.B, function () {
    backwards()
    basic.showIcon(IconNames.Angry)
})
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
basic.showIcon(IconNames.Ghost)
