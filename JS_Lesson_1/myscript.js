// alert('Hello users!');

// Java Script чутливий до регістру.Java.

//Створення змінних в JS відбувається за допомогою let, var, const. Синтаксис:
let variableName = '#333'; 
var oldVariable = 'Arial';
const USERAPIKEY = 'secretPassword'; // Використовується для значень, які не змінюються

// Варіанти запису змінних в JS
let userName = "Max";
let USERNAME = 'Tom';
let user_name = 'Bob';
let UserName = "Lara";

let husbandName = 'Tom';
let wifeName = 'Mary';

let stringNumbers = "123456"; // Має стpiнгове зн-ня (строка)
console.log("This value from stringNumbers ", stringNumbers); // Виведення інформації х додатковим повідомленням. Синтаксис: повідомлення - кома - назва змінної.


alert(wifeName); //Ще один метод виведення інформації, але вже не в консоль, а в віконце при відкритті сайту, де треба натиснути "Гаразд" або "Відміна".

// Щоб задачи числове значення, а не строкове, маємо вказувати числа без лапок. Можна вводити, як цілі значення, так і дробові
let firstMumber = 1;
let secondNumber = 1.3;

// Метод виводу даних на консоль - console.log()
// В залежності від тпу даних, інформація в консолі підсвічується різними кольорами. Числове значення - фіолетовий, стрінгове - сірий.
console.log(firstMumber);
console.log(stringNumbers);

// Існують ще такі типи даних в JS:
// 1. Boolean - віддає зн-ня True або False

let trueValue = true;
let falseValue = false;

// 2. Null - відсутнє обʼєктне значення

let noValue = null;

// 3. Underfined - зн-ня відсутнє. Немає навіть згадки про елемент в коді.

let noFind = undefined;

// 4. NaN (not a number) - не число

let noNumber = NaN;

// 5. Infinity - значення, яке буде отримуватись при нескінченності.

let infinityValue = Infinity;