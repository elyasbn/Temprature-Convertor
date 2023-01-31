const fInput = document.getElementById("farenhite");
const cInput = document.getElementById("centigrade");
const kInput = document.getElementById("kelvin");
const ftoc = document.getElementById("ftoc");
const ftok = document.getElementById("ftok");
const ctof = document.getElementById("ctof");
const ctok = document.getElementById("ctok");
const ktoc = document.getElementById("ktoc");
const ktof = document.getElementById("ktof");
const resetButton = document.getElementById("reset");

fInput.addEventListener("input", function () {
    let fValue = fInput.value;
    let farenhiteToCentigrade = Math.round(((fValue -32) * (5/9)) * 100) / 100 ;
    let farenhiteToKelvin = Math.round(((fValue -32) * (5/9) + 273.15) * 100) / 100 ;
    if (fValue != "") {
        cInput.value = farenhiteToCentigrade;
        kInput.value = farenhiteToKelvin;
    } else {
        cInput.value = "";
        kInput.value = "";
    }
});

cInput.addEventListener("input", function () {
    let cValue = cInput.value;
    let centigradeToFarenhite = Math.round(((cValue * 1.8) + 32) * 100) / 100 ;
    let centigradeToKelvin = Math.round((Number(cValue) + 273.15) * 100) / 100 ;
    if (cValue != "") {
        fInput.value = centigradeToFarenhite;
        kInput.value = centigradeToKelvin;
    } else {
        fInput.value = "";
        kInput.value = "";
    }
});

kInput.addEventListener("input", function () {
    let kValue = kInput.value;
    let kelvinToCentigrade = Math.round(((Number(kValue)  - 273.15 )) * 100) / 100 ;
    let kelvinToFarenhite = Math.round(((Number(kValue) - 273.15) * (9/5) + 32) * 100) / 100 ;
    if (kValue != "") {
        cInput.value = kelvinToCentigrade;
        fInput.value = kelvinToFarenhite; 
    } else {
        cInput.value = "";
        fInput.value = ""; 
    }
});

resetButton.addEventListener("click", function () {
    fInput.value = "";
    cInput.value = "";
    kInput.value = "";
    ftoc.innerHTML = 0;
    ftok.innerHTML = 0;
    ctof.innerHTML = 0;
    ctok.innerHTML = 0;
    ktoc.innerHTML = 0;
    ktof.innerHTML = 0;
})