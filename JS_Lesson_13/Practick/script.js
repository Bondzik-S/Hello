//  Створіть запит на API НБУ та виведіть курс валют на екран. Остилізуйте таблицю
// Для того, щоб отримати дані про актуальний курс валют на нбу, нам потрібно зайти на сайт нбу та знайти API для розробників. Там буде два варіанти отримання даних: за допомогою xml (щось схоже на html, але з вигаданими тегами), або json (найчастіше використовується). Для додавання даних потрібно скопіювати ПОСИЛАННЯ, а не самі дані на сайті

// Коли ми використовуємо аякс, потрібно уникнути використання ретурн, осільки подія буде повертати значення до свого виконання. Замість цього маємо передати колбек, який прийме дані та викличе ф-цію
// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json



function req(method = "GET", url = "", callback) {
    document.querySelector(".box-loader").classList.add("active") // завантаження анімація
    const r = new XMLHttpRequest();

    r.open(method, url);
    r.send();
    r.addEventListener("readystatechange", () => {
        if (r.readyState === 4 && r.status >= 200 && r.status < 300) {
            setTimeout(() => {
                callback(JSON.parse(r.responseText)) // JSON - строковий тип даних, тому для його подальшого використання, маємо перетворити його в обʼєкт за допомогою parse
                document.querySelector(".box-loader").classList.remove("active")
            }, 1500)
        } else if (r.readyState === 4) {
            console.error("Помилка з запитом")
        }
    })
}

const show = (data = []) => {
    const tbody = document.querySelector("tbody");
    console.log(data);
    data.forEach((el, i) => {
        const string = `
       <tr>
       <td>${i+1}</td>
       <td>${el.txt}</td>
       <td>${el.rate.toFixed(2)}</td> 
       </tr>
       `
       // toFixed(2) - округлення до 2 знаків піля коми
       tbody.insertAdjacentHTML("beforeend", string) // .insertAdjacentHTML - надає можливість додати теги через строку
       //tbody.append(string)
    })
}


req("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", show)

// Пагінація - кнопки переходу по сторінці (1, 2, 3, ...)