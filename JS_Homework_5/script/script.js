const exchange = {
  date: "23.11.2023",
  bank: "PB",
  baseCurrency: 980,
  baseCurrencyLit: "UAH",
  exchangeRate: [
    {
      baseCurrency: "UAH",
      currency: "AUD",
      saleRateNB: 12.831925,
      purchaseRateNB: 12.831925,
      country: "Australia",
      flag: "58.1% 12.35%",
    },
    {
      baseCurrency: "UAH",
      currency: "CAD",
      saleRateNB: 13.21074,
      purchaseRateNB: 13.21074,
      saleRate: 15.0,
      purchaseRate: 13.0,
      country: "Canada",
      flag: "90.45% 19.9%",
    },
    {
      baseCurrency: "UAH",
      currency: "CZK",
      saleRateNB: 0.679695,
      purchaseRateNB: 0.679695,
      saleRate: 0.8,
      purchaseRate: 0.6,
      country: "Czech Republic",
      flag: "14.95% 72.7%",
    },
    {
      baseCurrency: "UAH",
      currency: "DKK",
      saleRateNB: 2.525893,
      purchaseRateNB: 2.525893,
      country: "Denmark",
      flag: "74.3% 27.1%",
    },
    {
      baseCurrency: "UAH",
      currency: "HUF",
      saleRateNB: 0.0612592,
      purchaseRateNB: 0.0612592,
      country: "Hungary",
      flag: "47.3% 42.5%",
    },
    {
      baseCurrency: "UAH",
      currency: "ILS",
      saleRateNB: 3.862738,
      purchaseRateNB: 3.862738,
      saleRate: 4.5,
      purchaseRate: 3.7,
      country: "Israel",
      flag: "95.85% 42.4%",
    },
    {
      baseCurrency: "UAH",
      currency: "JPY",
      saleRateNB: 0.1272593,
      purchaseRateNB: 0.1272593,
      saleRate: 0.15,
      purchaseRate: 0.12,
      country: "Japan",
      flag: "14.95% 50%",
    },
    {
      baseCurrency: "UAH",
      currency: "LVL",
      saleRateNB: 0.1272593,
      purchaseRateNB: 0.1272593,
      country: "Latvia",
      flag: "68.9% 50.02%",
    },
    {
      baseCurrency: "UAH",
      currency: "LTL",
      saleRateNB: 5.443385,
      purchaseRateNB: 5.443385,
      country: "Lithuania",
      flag: "90.45% 50.1%",
    },
    {
      baseCurrency: "UAH",
      currency: "NOK",
      saleRateNB: 2.160957,
      purchaseRateNB: 2.160957,
      saleRate: 2.6,
      purchaseRate: 2.1,
      country: "Norway",
      flag: "25.7% 64.9%",
    },
    {
      baseCurrency: "UAH",
      currency: "SKK",
      saleRateNB: 2.160957,
      purchaseRateNB: 2.160957,
      country: "Slovakia",
      flag: "14.95% 34.9%",
    },
    {
      baseCurrency: "UAH",
      currency: "SEK",
      saleRateNB: 2.028375,
      purchaseRateNB: 2.028375,
      country: "Sweden",
      flag: "52.69% 80.3%",
    },
    {
      baseCurrency: "UAH",
      currency: "CHF",
      saleRateNB: 15.638975,
      purchaseRateNB: 15.638975,
      saleRate: 17.0,
      purchaseRate: 15.5,
      country: "Switzerland",
      flag: "58.1% 80.3%",
    },
    {
      baseCurrency: "UAH",
      currency: "GBP",
      saleRateNB: 23.632491,
      purchaseRateNB: 23.632491,
      saleRate: 25.8,
      purchaseRate: 24.0,
      country: "United Kingdom",
      flag: "4.15% 72.65%",
    },
    {
      baseCurrency: "UAH",
      currency: "USD",
      saleRateNB: 15.056413,
      purchaseRateNB: 15.056413,
      saleRate: 15.7,
      purchaseRate: 15.35,
      country: "USA",
      flag: "36.5% 34.98%",
    },
    {
      baseCurrency: "UAH",
      currency: "BYR",
      saleRateNB: 0.00139,
      purchaseRateNB: 0.00139,
      country: "Belarus",
      flag: "9.6% 19.9%",
    },
    {
      baseCurrency: "UAH",
      currency: "EUR",
      saleRateNB: 18.79492,
      purchaseRateNB: 18.79492,
      saleRate: 20.0,
      purchaseRate: 19.2,
      country: "EU",
      flag: "4.3% 87.6%",
    },
    {
      baseCurrency: "UAH",
      currency: "GEL",
      saleRateNB: 8.150089,
      purchaseRateNB: 8.150089,
      country: "Georgia",
      flag: "85.1% 34.9%",
    },
    {
      baseCurrency: "UAH",
      currency: "PLZ",
      saleRateNB: 4.492201,
      purchaseRateNB: 4.492201,
      saleRate: 5.0,
      purchaseRate: 4.2,
      country: "Poland",
      flag: "90.45% 64.9%",
    },
  ],
};

function show(dataBase) {
  document.write(
    `<header>
        <div class = "header-box">
            <span>${exchange.date}</span>
            <span class="header">Exchange rate</span>
        </div>
        <table>
            <tr class = "title">
                <th colspan="2" class="center">Country</th>
                <th class="center">Currency</th>
                <th class="left">We buy at</th>
                <th class="left">We sell at</th>
            </tr>
        
     </header>`
  );

  exchange.exchangeRate.forEach((element) =>
    document.write(`
    <tr>
        <td class="center">
        <div class="image right" style="background-position: ${
          element.flag
        };" </div>
        </td>
        <td class="left">${element.country}
        </td>
        
        <td class="center weight-700">${element.currency}
        </td>
        
        <td class="red center weight-700">${element.purchaseRateNB.toFixed(2)}
        </td>
        
        <td class="red center weight-700">${element.saleRateNB.toFixed(2)}
        </td>
    </tr>`)
  );
  document.write(`</table>`);
}

show(exchange);

var button = document.createElement("button");
button.textContent = "Обміняти!";
button.addEventListener("click", function () {
  alert(
    "Через декілька хвилин з вами звʼяжеться наш оператор. Дякуємо, що залишаєтесь з нами."
  );
});
document.body.appendChild(button);
