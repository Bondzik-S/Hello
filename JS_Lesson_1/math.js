let firstNumber = 10;
let secondNumber = 2;

// В JS  доступні всі звичайні математичні операції
console.log(firstNumber + secondNumber); // Додавання
console.log(firstNumber - secondNumber); // Віднімання
console.log(firstNumber * secondNumber); // Множення
console.log(firstNumber / secondNumber); // Ділення

console.log(firstNumber % secondNumber); // Залишок від ділення (остача)
console.log(11%2);
console.log(4%2);
console.log(6%3);

// Prompt - метод, який виводить текстову інформацію до діалогового вікна алерт
let firstUserValue = prompt('Введіть перше число');
let secondUserValue = prompt ('Введіть друге число');

// let result = +firstUserValue + +secondUserValue; // Поставивши плюс перед стрінговою змінною, ми перетворюємо її в числовий тип.

let result = parseInt(firstUserValue) + parseFloat(secondUserValue) // Більш зручний спосіб перетворення змінних типу стрінг до числового зн-ня. parseInt() - перетворює число до цілого типу (без збереження дробової частинки); parseFloat() - перетворює стрінг до числового типу із збереженням дробової частинки.

// Метод Number працює, як і передні, але конвертує повністю стрінг до числа із збереженням дробової частинки.
console.log(Number(firstUserValue));
console.log(Number(secondUserValue));

console.log("++ value");

let startValue = 1;
//Для того, щоб збільшити значення на 1, можемо використати "++". У випадку, коли ++ пишемо після змінної, попереднє значення на наступний виклик ще зберігається, а коли перед змінною, то значення збільшується на +1 вже в поточному виклику. Так само працює і в протилежному випадку, коли значення має зменшуватись на 1 з кожним викликом.

console.log(startValue); //1
console.log(startValue++); //1
console.log(startValue); //2
console.log(startValue++); //2
console.log(startValue); //3

console.log(startValue); //1
console.log(++startValue); //2
console.log(startValue); //2
console.log(++startValue); //3
console.log(startValue); //3

let myValue = 3;
myValue = myValue + 3;
// myValue += 3; // Скорочений варіант попереднього рядка
// myValue -= 3;
// myValue *= 3;
// myValue /= 3;

console.log('My value: ', myValue);