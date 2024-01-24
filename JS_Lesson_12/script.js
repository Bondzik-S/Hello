/*
Створи клас, який буде створювати користувачів з ім'ям та прізвищем. 
Додати до класу метод для виведення імені та прізвища

Створи div висотою 400 пікселів і додай на нього подію наведення мишки. 
Під час наведення мишки виведіть текстом
координати, де знаходиться курсор мишки у тег title

Створи кнопки 1,2,3,4 і при натисканні на кнопку виведи інформацію про те, 
яка кнопка була натиснута
*/

// Практика

//

// Завдання 1.

class User{
    constructor (firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    showUserData(){
        return `Імʼя: ${this.firstName} Прізвище: ${this.secondName}`;
    }
}

// Завдання 2.
// Створи div висотою 400 пікселів і додай на нього подію наведення мишки. 
// Під час наведення мишки виведіть текстом
// координати, де знаходиться курсор мишки у тег title

const box = document.querySelector('.box');
const title = document.querySelector('title')

box.addEventListener('mousemove', (e) => {
    title.innerText = `X: ${e.offsetX} Y: ${e.offsetY}`;
})

// Завдання 3.
// Створи кнопки 1,2,3,4 і при натисканні на кнопку виведи інформацію про те, 
// яка кнопка була натиснута

const section = document.querySelector("section");

section.addEventListener('click', () => {
    if(event.target.localName === 'button'){ // Перевірка чи обʼєкт є кнопкою за назвою тегу
       alert(event.target.innerText); 
    }
    
})
