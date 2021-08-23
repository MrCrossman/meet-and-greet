distance = 0

def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Move_Motor.stop()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global distance
    distance = Kitronik_Move_Motor.measure()
    if distance > 10:
        Kitronik_Move_Motor.sound_siren(Kitronik_Move_Motor.OnOffSelection.OFF)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 50)
    elif distance < 10:
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.sound_siren(Kitronik_Move_Motor.OnOffSelection.ON)
        basic.show_string("Pardon me!")
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 50)
        Kitronik_Move_Motor.sound_siren(Kitronik_Move_Motor.OnOffSelection.OFF)
        basic.show_string("Bye bye!")
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
basic.forever(on_forever)
