radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == password) {
        basic.showIcon(IconNames.No)
    }
})
let password = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
password = 9
