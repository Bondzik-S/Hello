// 1)Створити калькулятор знижок, отримати від користувача ціну товара і в консоль вивести інформацію про знижку при покупці 10 товарів ( знижка 3%) 
// інформацію при покупці 20 товарів ( знижка 5%)

let prise = prompt('Калькулятор знижок \n\nВведіть ціну товару');

let sellThree = prise * 3 / 100;
let sellFive = prise * 5 / 100;

alert(`Ви можете отримати наступні знижки: \n\nПри покупці 10 товарів, можете отримати знижку 3%, тобто ${sellThree} грн, \nа при покупці 20 таких товарів, знижка становитиме 5%, тобто ${sellFive} грн на кожну одиницю товару`);


// Для того, щоб виводити значення всередині повідомлення, треба поставити лапки-апострофи та записати назву змінної наступним чином ${назва_змінної}