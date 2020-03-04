var btnConvert = document.querySelector('#btn-convert-id')

btnConvert.addEventListener("click", function (event) {
    event.preventDefault()

    var binaryTXT = document.querySelector('#binary-id').value

    retornaBinHex(binaryTXT)

})

function retornaBinHex(binaryTXT) {

    var decimal = parseInt(binaryTXT, 2)
    var hexadec = decimal.toString(16)

    document.querySelector('#h3-decimal-id').innerHTML = `Decimal: ${decimal}`
    document.querySelector('#h3-hexadecimal-id').innerHTML = `Hexadecimal: ${hexadec}`
}

/*function checkDigits() {

    evt = window.event
    var keys = evt.keyCode

    if (keys != 48 || keys != 49 || keys != 96 || keys != 97) {
        alert('Only 0 or 1 allowed')
        evt.preventDefault()
    }
}
*/
