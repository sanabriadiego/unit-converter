const inputNumberEl = document.getElementById("input-number")
const convertBtnEl = document.getElementById("convert-btn")
const mainNumberElements = document.getElementsByClassName("number")
const metersToFeetEl = document.getElementById("meters-to-feet")
const feetToMetersEl = document.getElementById("feet-to-meters")
const litersToGallonsEl = document.getElementById("liters-to-gallons")
const gallonsToLitersEl = document.getElementById("gallons-to-liters")
const kilosToPoundsEl = document.getElementById("kilos-to-pounds")
const poundsToKilosEl = document.getElementById("pounds-to-kilos")
let mainNumber

function metersToFeet(){
    const result = (mainNumber * 3.280839895).toFixed(3)
    return result
}

function feetToMeters(){
    const result = (mainNumber * 0.3048).toFixed(3)
    return result
}

function litersToGallons(){
    const result = (mainNumber * 0.264172).toFixed(3)
    return result
}

function gallonsToLiters(){
    const result = (mainNumber * 3.785412).toFixed(3)
    return result
}

function kilosToPounds(){
    const result = (mainNumber * 2.2046).toFixed(3)
    return result
}

function poundsToKilos(){
    const result = (mainNumber * 0.45359237).toFixed(3)
    return result
}

function convertUnits(){
    mainNumber = inputNumberEl.value
    for (let i=0; i<mainNumberElements.length; i++){
        mainNumberElements[i].innerHTML = mainNumber
    }
    metersToFeetEl.textContent = metersToFeet()
    feetToMetersEl.textContent = feetToMeters()
    litersToGallonsEl.textContent = litersToGallons()
    gallonsToLitersEl.textContent = gallonsToLiters()
    kilosToPoundsEl.textContent = kilosToPounds()
    poundsToKilosEl.textContent = poundsToKilos()
}

convertBtnEl.addEventListener("click", convertUnits)


