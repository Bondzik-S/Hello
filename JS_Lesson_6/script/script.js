// Якщо нам необхідно створити багато однакових елементів, використовують конструктори, які повертають обʼєкти.
// В конструкторі медтоди додаються через прототип.

// Реалізувати інтернет магазин товарів які будуть виводитись на сторінку з артикулом, назва, опис, картинка, ціна. Реалізувати через методи перебору масивів та конструктори. Файл з даними, які потрібно обробити знаходяться в файлі data.json

// Створіть клас Phone, який містить змінні number, model i weight.
// Стоворіть три екземпляри цього класу.
// Виведіть на консоль значення їх змінних.
// Додати в клас Phone методи: receiveCall, має один параметр - імʼя. Виводить на консоль повідомлення "Телефонує"

// task 1; #catalog

//console.log(data);

/*
{
    productCode : "XXXXXXX",
    name: "",
    img : "",
    desc : "",
    productPrice : "", 
}
*/

// Рандомне число для коду товару
// function randomArticle() {
//   return Math.floor(Math.random() * 100000);
// }

// function NewProduct(productCode, name, img, desc, productPrice) {
//   //this === {} === new
//   this.productCode = productCode();
//   this.name = name;
//   this.img = img;
//   this.desc = desc;
//   this.productPrice = productPrice;
// }

// const catalogProducts = data.map(function (element) {
//   return new NewProduct(
//     randomArticle,
//     element.title,
//     element.image,
//     element.description,
//     element.price
//   );
// });

// function showProductCard(arg) {
//   if (!Array.isArray(arg)) return;

//   arg.forEach(function (elementArr) {
//     console.log(elementArr);
//     const card = `
//     <div class = "card">
//     <img src = "${elementArr.img}" alt="${elementArr.name}">
//     <div class = "card-name">${elementArr.name}</div>
//     <div class = "card-desc">${elementArr.desc}c</div>
//     <div class = "card-price">${elementArr.productPrice}</div>
//     <span class = "art">${elementArr.productCode}</span>
//     </div>
//     `;

//     // getElementById() - метод для звернення в html до елементу за його id
//     // getElementByClassName() - метод для звернення в html до елементу за його class
//     document.getElementById("catalog").innerHTML = card; // .innerHTML - це внутрішня частина обʼєкту, до якого ми попередньо звернулись, тобто все між відкриваючими та закриваючими тегами
//   });
// }

// function showProductCard(arg) {
//   if (!Array.isArray(arg)) return;

//   //productCode, name, img, desc, productPrice;
//   arg.forEach(function (elementArr) {
//     console.log(elementArr);
//     const card = `
//     <div class="card">
//        <img src="${elementArr.img}" alt="${elementArr.name}">
//        <div class="card-name">${elementArr.name}</div>
//        <p class="card-desc">${elementArr.desc}</p>
//        <div class="card-price">${elementArr.productPrice}</div>
//        <span class="art">${elementArr.productCode}</span>
//     </div>
//     `;

//     // getElementById() - метод для звернення в html до елементу за його id
//     // getElementByClassName() - метод для звернення в html до елементу за його class
//     document.getElementById("catalog").innerHTML += card; // .innerHTML - це внутрішня частина обʼєкту, до якого ми попередньо звернулись, тобто все між відкриваючими та закриваючими тегами
//   });
// }

//showProductCard(catalogProducts);
// Метод map
//const arr = [1, 2, 3, 4, 55, 66545, 4334];

//arr.forEach(callbackFunction)// Перебирає масив за вказаними правилами. В круглі дужки має прийняти функцію. Запускається для кожного елементу масиву (скільки елементів, стільки разів буде запускатись), приймає три аргументи. Основна проблема - не вміє повертати дані, тобто, не працює return
// arr.forEach(function (one, two, three) {
//   console.log(one + " element"); // Виведе самі елементи (1, 2, 3, 4, 55, 66545, 4334)
//   console.log(two); // Виведе індекси (0, 1, 2, 3, 4, 5, 6)
//   console.log(three); // Виведе повністю весь масив стільки разів, якільки елементів 7 * [1, 2, 3, 4, 55, 66545, 4334]
// });

// На відміну від методу forEach(), метод map() може повертати значення. Так само, як і forEach(), він приймає три агрументи, які працюють ідентично
// arr.map(function () {});

//task 2
// Створіть клас Phone, який містить змінні number, model i weight.
// Стоворіть три екземпляри цього класу.
// Виведіть на консоль значення їх змінних.
// Додати в клас Phone методи: receiveCall, має один параметр - імʼя. Виводить на консоль повідомлення "Телефонує {name}". Метод getNumber() - повертає номер телефону. Викликати ці методи кожного з обʼєктів.
// Кожен телефон окрім 3-го (3-ій з кар.дач) має наслідувати цей клас. Створимо клас store, який маэ мати метод getStore() - він буде виводити рекламу магазину, в якому купувати телефон

function Store() {}

Store.prototype.getStore = function () {
  console.log(`${this.model} Був куплений у магазині біля дому`);
};

function Phone(model, number, weight) {
  this.model = model;
  this.number = number;
  this.weight = weight;
}

Phone.prototype = new Store(); // наслідування

Phone.prototype.receiveCall = function (name) {
  console.log(`Телефонує ${name}`);
};

Phone.prototype.getNumber = function () {
  return this.number;
};

const iphone = new Phone("6s", 0957747382, 400);
const nokia = new Phone("3410", 0996578473, 540);
const motorolla = new Phone("34h", 0996435483, 210);

nokia.getStore = function () {
  // перевизнаяення методу для nokia
  return "hello nokia";
};

function forOfInstanse(object) {
  console.group();
  for (let element in object) {
    console.log(element + " : " + object[element]);
  }
  console.groupEnd();
}

forOfInstanse(iphone);
forOfInstanse(nokia);
forOfInstanse(motorolla);

nokia.getStore(); // синтаксис виклику перевизначеного методу

// Почитати про наслідування
// Поліморфізм - зміна методу який наслудується для всіх (пересапис)
// void() - метод, який нічого не повертає

/*
HW 
(Клас - конструктор)

Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.
*/
