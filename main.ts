let distance = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
    while (input.buttonIsPressed(Button.B) == false) {
        distance = Kitronik_Move_Motor.measure()
        if (distance > 10) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
        } else if (distance < 10) {
            Kitronik_Move_Motor.stop()
            basic.showString("Excuse me!")
            basic.pause(200)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
            basic.showString("Bye bye!")
            basic.pause(100)
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 50)
            basic.pause(100)
            Kitronik_Move_Motor.stop()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
})
basic.forever(function () {
	
})
