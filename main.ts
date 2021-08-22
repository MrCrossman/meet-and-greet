let distance = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
})
basic.forever(function () {
    distance = Kitronik_Move_Motor.measure()
    if (distance > 10) {
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    } else if (distance < 10) {
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
        basic.showString("Pardon me!")
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
        basic.showString("Bye bye!")
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
    }
})
