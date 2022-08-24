input.onButtonPressed(Button.A, function () {
    if (edad > 0) {
        edad += -1
    }
})
input.onButtonPressed(Button.B, function () {
    edad += 1
})
let edad = 0
edad = 17
basic.forever(function () {
    if (edad >= 18) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
