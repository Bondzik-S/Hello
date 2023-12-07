/* 
1. Реалізуйте конструктор MyString, який матиме такі методи:
2. Метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, 
3. Метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
4. Та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/

function MyString(string) {
  this.string = string;
}

/* Додає метод reverse до прототипу MyString.
Використовує split("") для розбиття рядка на масив символів.
reverse() обертає порядок елементів у масиві.
join("") з'єднує символи назад у рядок. */
MyString.prototype.reverse = function () {
  return this.string.split("").reverse().join("");
};

/* Додає метод ucFirst до прототипу MyString.
charAt(0) повертає перший символ рядка.
toUpperCase() перетворює перший символ у верхній регістр.
slice(1) повертає частину рядка, починаючи з другого символу. */
MyString.prototype.ucFirst = function () {
  return this.string.charAt(0).toUpperCase() + this.string.slice(1);
};

/* Додає метод ucWords до прототипу MyString.
split(" ") розбиває рядок на масив слів за пробілами.
map() застосовує функцію до кожного слова, зроблюючи першу літеру кожного слова великою.
join(" ") з'єднує слова назад у рядок за допомогою пробілів. */
MyString.prototype.ucWords = function () {
  return this.string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Приклад використання
const myStringInstance = new MyString("hello world");
const reversedString = myStringInstance.reverse();
const ucFirstString = myStringInstance.ucFirst();
const ucWordsString = myStringInstance.ucWords();

console.log(reversedString); // Виводить: dlrow olleh
console.log(ucFirstString); // Виводить: Hello world
console.log(ucWordsString); // Виводить: Hello World
