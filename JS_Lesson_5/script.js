// ОБ'ЄКТИ

// Об'єкти зручніші в використанні, ніж масиви. На відміну від масивів, в об'єктах ми створюємо певні ключі, що спрощують процес звернення до об'єкту.
// Для створення об'єктів використовуються фігурні дужки const  назва_об'єкту = { назва_властивості_1 : назва_правила_1, назва_властивості_2 : назва_правила_2, і т.д.};

const object = { property1: 111, property2: 222, userName: "" }; // Об'єкти можна сворювати як за допомогою звичайно записаного слова, так і за допомогою строчкового введення, це не має значення.

const milk = { name: "Бренд", widht: 200, price: "" }; // Завдяки такій конструкції, ми можемо звертатись до об'єкту за допомогою властивості

// Звернення до об'єкту за допомогою ключа
document.write(`<p>object.property1 = ${object.property1} </p>`);

// В об'єктах ми можемо замінювати властивості. Є два способи - за допомогою крапки і за допомогою квадратних дужок.
object.property1 = 333;
object["property2"] = 444;

// Щоб створити обяєкт в масиві достатньо записати його в квадратних дужках, тобто [{масив}]

// Конструктор об'єктів
const point = new Object();

// В такому випадку, при відсутності об'єкту, до якого ми звертаємося, він буде створений автоматично
point.x = 10;
point.y = 15;

// До об'єкту можна додавати ф-ції
point.f = function () {
  document.write("<p>x = " + point.x + "<p>y = " + point.y);
};

point.f(); // Для виклику таких ф-цій, треба вказувати назву об'єкту, з якого викликаємо, тому що дані ф-ції не існують в глобальному доступі.

// Для того, щоб спростити виведення об'єкту, ми можемо переписати метод toString() наступним чином. ВАЖЛИВО! Для того, щоб така реалізація спрацювала, потрібно створити в об'єкті властивість toString і додати туди функцію.
function toString() {
  return person.firstName + " " + person.lastName;
}

// Вкладені об'єкти
const human = {
  firstName: "Alex",
  secondName: "Jazun",
  age: 27,

  // Вкладений об'єкт
  occupation: {
    company: "Microsoft",
    position: "Web Developer",
  },
};

// Виклик вкладеного об'єкту
document.write("<p>Company: " + human.occupation.company + "</p>");

// Вкладені об'єкти можна також створювати за допомогою конструктора. Але зазвичай, конструктор не використовується для створення примітивних об'єктів.

// Вкладені функції в об'єктах

const human1 = {
  firstName: "Alex",
  secondName: "Jazun",
  age: 27,
  occupation: "Programmer",

  show: function () {
    document.write("<p> First name: " + this.firstName); // де this - звернення до батьківського об'єкта, тобто human1
  },

  changeWork: function (occupation1) {
    this.occupation = occupation1;
  },
};

human1.show();
human1.changeWork("Developer");

// Вкладені ф-ції за допомогою конструктора об'єктів
const buildier = new Object();

buildier.createFunction = function () {
  document.write("<p> Buildier");
};

buildier.createFunction();

// Констрікція for in
// Якщо виникає потреба перебирати кожен елемент в об'єкті, можемо скористатися конструкцією for in.
// Для цього створюємо цикл for і в ньому створюємо змінну, в якій все зберігатиметься і далі прописуємо об'єкт, в якому буде проходити операція, тобто
const house = {
  roof: "roof",
  secondFloor: "secondFloor",
  firstFloor: "firstFloor",
  basement: "basement",
  adress: "adress",
};

for (let props in house) {
  document.write(props); // Виводить назви властивостей

  // Якщо у нас приходить властивість у вигляді строки, то ми можемо звернутись до об'єкта за допомогою квадратних дужок
  document.write("<p>" + house[props] + "</p>");
}

// Для масивів існує інший оператор - of
for (let props of arr) {
  document.write(arr[props]);
}

// Ще є варіант простіше за допомогою методу keys()
document.write(Object().keys(house)); // Виводитиме масив із властивостями (ключами) об'єкту
document.write(Object().values(house)); // Виводитиме масив зі значеннями обʼєкту
document.write(Object().entries(house)); // Виводитиме масив із вкладеними масивами, де буде властивість - значення

// Видалення з обʼєкту
if ("secondFloor" in house) {
  delete house.secondFloor;
}

for (let element in house) {
  document.write(house[element]);
}

// Видалення за індексом
const array = new Array(0, 1, 2, 3, 4, 5, 6, 7);

document.write("<p>Масив до видалення:" + array.join(", "));

const index = prompt(
  "Оберіть індекс елементу, який треба видалити" + array.join(", ")
);

delete array[index];

document.write(`<p>Масив після видалення: ${array.join(", ")}`);
