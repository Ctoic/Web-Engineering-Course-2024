const usdToEur = 0.83; // Conversion rate example
const usdToGbp = 0.72; // Conversion rate example
const eurToUsd = 1 / usdToEur;
const eurToGbp = usdToGbp / usdToEur;
const gbpToUsd = 1 / usdToGbp;
const gbpToEur = usdToEur / usdToGbp;

function convertFromUSD() {
    let usd = parseFloat(document.getElementById("usd").value);
    if (!isNaN(usd)) {
        document.getElementById("eur").value = (usd * usdToEur).toFixed(2);
        document.getElementById("gbp").value = (usd * usdToGbp).toFixed(2);
    }
}

function convertFromEUR() {
    let eur = parseFloat(document.getElementById("eur").value);
    if (!isNaN(eur)) {
        document.getElementById("usd").value = (eur * eurToUsd).toFixed(2);
        document.getElementById("gbp").value = (eur * eurToGbp).toFixed(2);
        document.getElementById("pkr").value = (eur * eurToPkr).toFixed(2);
    }
}

function convertFromGBP() {
    let gbp = parseFloat(document.getElementById("gbp").value);
    if (!isNaN(gbp)) {
        document.getElementById("usd").value = (gbp * gbpToUsd).toFixed(2);
        document.getElementById("eur").value = (gbp * gbpToEur).toFixed(2);
        document.getElementById("pkr").value = (gbp * gbpToEur).toFixed(2);
    }

function convertFromPKR() {
    let pkr = parseFloat(document.getElementById("pkr").value);
    if (!isNaN(pkr)) {
        document.getElementById("usd").value = (pkr * pkrToUsd).toFixed(2);
        document.getElementById("eur").value = (pkr * pkrToEur).toFixed(2);
        document.getElementById("gbp").value = (pkr * pkrToGbp).toFixed(2);
    }
}

}
