// Створіть обʼєкт заробітньої плати obj. Виведіть на екран зарплату Колі, Петі.
// Цей обʼєкт надано

{
  var obj = { Коля: "1000", Вася: "500", Петя: "200" };
  document.write(`ЗП Петі: ${obj.Петя}`);
  document.write(`</br>ЗП Колі: ${obj.Коля}`);
}

// Напишіть ф-цію isEmpty(obj), яка повертаж true, якщо обʼєкт не має властивостей, інакше false

{
  var obj = { Коля: "1000", Вася: "500", Петя: "200" };
  function isEmpty(obj) {
    // Перевірка, чи є обʼєктом
    if (typeof obj !== "object") {
      //return;
      throw new Error("Ми отримали не обʼєкт!");
    }

    for (el in obj) {
      return false;
    }
    return true;
  }
}

// Створіть обʼєкт - криптогаманець. У гаманці має зберігатися імʼя власника, кілька валют Bitcoin, Ethereum, Stellar і в кожній валюті є додатково імʼя валюти, логотип, кілька монет та курс на сьогоднішній день. Також в обʼєкті гаманець є метод, при виклику якого, він приймає імʼя валюти та виводить на сторінку інформацію: "Доброго дня, ...! На вашому балансі (назва валюти та логотип) залишилось N монет, якщо ви сьогодні продастае їх, то отримаєте ...грн."

{
  const infoCoin = prompt("Оберіть монету", "bitcoin, ethereum, stellar");

  const wallet = {
    userName: "Petro",
    bitcoin: {
      coinName: "Bitcoin",
      coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      coinQuantiti: 3.56748,
      coinExchange: 36585.11,
    },
    ethereum: {
      coinName: "Ethereum",
      coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      coinQuantiti: "4.34",
      coinExchange: 2022.84,
    },
    stellar: {
      coinName: "Stellar",
      coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
      coinQuantiti: "65.44556",
      coinExchange: 0.1165,
    },

    show: function (coin) {
      return `Доброго дня, ${this.userName}! На вашому балансі ${
        this[coin].coinName
      } <img src="${this[coin].coinLogo}" alt="${
        this[coin].coinName
      }"> залишилось ${
        this[coin].coinQuantiti
      } монет, якщо ви сьогодні продастае їх, то отримаєте ${(
        this[coin].coinQuantiti *
        this[coin].coinExchange *
        38
      )
        // .toFixed(2) - скорочення до певної к-ті знаків після коми
        .toFixed(2)}грн.`;
    },
  };

  document.write("</br>" + wallet.show(infoCoin));
}
