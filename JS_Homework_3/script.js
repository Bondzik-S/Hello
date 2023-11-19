/* * Створіть масив styles з елементами «Джаз» та «Блюз».
Додайте "Рок-н-рол" в кінець.
Замініть значення всередині на «Класика». Ваш код для пошуку значення всередині повинен працювати для масивів з будь-якою довжиною.
Видаліть перший елемент масиву та покажіть його.
Вставте «Реп» та «Реггі» на початок масиву.<br>


* Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.



* Перепишіть функцію за допомогою оператора '?' або '||'
Наступна функція повертає true, якщо параметр age більше 18. В іншому випадку вона ставить запитання confirm і повертає його результат.
function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
} }
 */



// Задача 1.

document.write('Задача 1. </br>');
document.write(`<hr/>`);

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-рол');

document.write(styles.join(' * '));

var middleIndex = Math.floor(styles.length/2); //Знаходження середнього індексу
styles[middleIndex] = 'Класика'; // Заміна

document.write('<div>Заміна середнього елементу на "Класика" - ' + styles.join(' * ') + '</div>');

var deleteElement = styles.splice(0,1);
document.write('<div>Видалення першого елементу - ' + styles.join(' * ') + '</div>');
document.write('<div>Видалено елемент - ' + deleteElement);

styles.unshift('Реп', 'Реггі');
document.write('<div>Масив з додаванням на початок елементів - ' + styles.join(' * ') + '</div>');


// Задача 2.
document.write('</br>');
document.write('Задача 2. </br>');
document.write(`<hr/>`);

function map(fn, array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i]));
    }
    return result;
}


document.write('</br>');
document.write('Задача 3. </br>');
document.write(`<hr/>`);



function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}

let age = +prompt('Скільки вам років?');
let ansver;

document.write(checkAge(age));