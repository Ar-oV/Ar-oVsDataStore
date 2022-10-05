const rates = {};
const usd = document.querySelector('[data-value="USD"]');
const eur = document.querySelector('[data-value="EUR"]');
const gbp = document.querySelector('[data-value="GBP"]');
getCurrencies();
async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.GBP = result.Valute.GBP;
    console.log(rates);
    usd.textContent = rates.USD.Value.toFixed(2);
    eur.textContent = rates.EUR.Value.toFixed(2);
    gbp.textContent = rates.GBP.Value.toFixed(2);
    if(rates.USD.Value > rates.USD.Previos) {
        usd.classList.add('green');
    } else {usd.classList.add('red')};
    if(rates.EUR.Value > rates.EUR.Previos) {
        eur.classList.add('green');
    } else {eur.classList.add('red')};
    if(rates.GBP.Value > rates.GBP.Previos) {
        gbp.classList.add('green');
    } else {gbp.classList.add('red')};
}