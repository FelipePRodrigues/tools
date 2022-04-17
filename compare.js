const SIZE_1 = "size1"
const PRICE_1 = "price1"
const SIZE_2 = "size2"
const PRICE_2 = "price2"

const INPUTS = [
    SIZE_1,
    PRICE_1,
    SIZE_2,
    PRICE_2
]

function handleInput(input) {
    console.log("Comparando")

    if (!input.value){
        checkFill()
    }
    else {
        validInput = validateInput(input.value)
        if (validInput) {
            setBorder("yellow")
            compare()
        }
        else {
            setBorder("red", input.id)
        }
    }
}

function clean() {
    for (inputName of INPUTS){
        let input = document.getElementById(inputName)
        input.style.borderColor = "#f0f0f0"
        input.value = ""
    }
}

function setBorder(color, id=undefined) {
    if (id) {
        document.getElementById(id).style.borderColor = color
    }
    else {
        for (inputName of INPUTS){
            document.getElementById(inputName).style.borderColor = color
        }
    }
}

function checkFill(){
    someText = false

    for (inputName of INPUTS){
        let input = document.getElementById(inputName)
        if (input.value) someText = true
    }

    if (!someText) {
        setBorder("#f0f0f0")
    }
}

function validateInput(value) {
    let valid = parseFloat(value)
    if (valid) return true
    else return false
}

function compare() {
    let size1 = parseFloat(document.getElementById(SIZE_1).value)
    let price1 = parseFloat(document.getElementById(PRICE_1).value)
    let size2 = parseFloat(document.getElementById(SIZE_2).value)
    let price2 = parseFloat(document.getElementById(PRICE_2).value)

    if (size1 && size2) {
        console.log("Calculando...")
        if (price1) {
            let samePrice = ((size2 * price1) / size1).toFixed(2).toString()
            document.getElementById(PRICE_2).value = samePrice
        }
        else if (price2) {
            let samePrice = ((size1 * price2) / size2).toFixed(2).toString()
            document.getElementById(PRICE_1).value = samePrice
        }
    }
}