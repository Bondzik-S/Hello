let firstValue = 5;
let secondValue = "5";

// == - перевіряє, чи дорівнює перше значення другому, при тому відбувається перетворення типів в один.
console.log(firstValue==secondValue);

// === - перевіряє, чи однакові типи даних
console.log(firstValue===secondValue);

let result = (firstValue + secondValue) + 100;

// Тут відбувається перетирання значень.
result = 100;
// console.log(result);

alert(result); // З алерт завжди отримуємо стрінг