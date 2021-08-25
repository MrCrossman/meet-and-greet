let distance = 0
basic.forever(function () {
    basic.showString("Hello!")
    distance = Kitronik_Move_Motor.measure()
    if (distance > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 200)
    } else if (distance < 10) {
        Kitronik_Move_Motor.stop()
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
    }
})
