var btnConvert = document.querySelector('#btn-convert-id')

btnConvert.addEventListener("click", function (event) {
    event.preventDefault()

    var binaryTXT = document.querySelector('#binary-id').value

    checkBinaryLength()
    returnBinHex(binaryTXT)

})

function returnBinHex(binaryTXT) {

    var decimal = parseInt(binaryTXT, 2)
    var hexadec = decimal.toString(16)

    document.querySelector('#h3-decimal-id').innerHTML = `Decimal: ${decimal}`
    document.querySelector('#h3-hexadecimal-id').innerHTML = `Hexadecimal: ${hexadec}`
}