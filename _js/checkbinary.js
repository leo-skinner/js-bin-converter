/*
This function checks and validates a digit typed into an input field.
*/
function checkDigits() {

    evt = window.event
    var digits = Number.parseInt(evt.key)
    console.log(typeof (digits))
    if (digits < 0 || digits > 1) {
        window.alert("Only 0 or 1 allowed! Please, try again.")
        evt.preventDefault()
        document.querySelector('#binary-id').innerHTML = ''

    }
}

function checkBinaryLength() {
    evt = window.event
    var binaryString = document.querySelector('#binary-id').value

    if (binaryString.length > 8) {
        window.alert("Please, insert only a 8 digit binary number!")
        evt.preventDefault()
        document.querySelector('#binary-id').innerHTML = ''
    }
}