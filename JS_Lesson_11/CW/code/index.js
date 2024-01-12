// 1. Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить своє value в параграф з id="test"

// Коли ми натискаємо до прикладу на інпут, і він стає активним, цей стан елементу, називається фокус

/*
const input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.className = "" // очищення попередніх класів
    input.classList.add("focus") // додаємо клас фокус
})

// blur - подія втрати фокусу
input.addEventListener("blur", () => {
    input.className = "" // очищення попередніх класів
    input.classList.add("blur") // додавання класу blur
})

// change - подія, яка втрачає фокус і відслідковує зміни в елементі
input.addEventListener("change", () => {
    document.querySelector("#output").innerText = input.value // при введенні даних до інпута, вони копіюються в секшн
})

// input - подія, яка відповідає за введення даних
input.addEventListener("input", () => {
    document.querySelector("#output").innerText = input.value
})
*/

//

/* 
3.
Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні.
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - (Визначити код оператора та підтягувати логотип оператора. додатковл) 
Пошта, якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅

Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані 
*/

// Знаходимо всі елементи
const userName = document.querySelector("#user-name");
const userSurname = document.querySelector("#user-surname");
const userEmail = document.querySelector("#user-email");
const userCity = document.querySelector("#user-city");
const btn = document.querySelector("#btn");

// Віслудковуємо подію change
userName.addEventListener("change", (ev) => {
    const p = /^[а-яіґєї]{2,}$/i // перевірка регулярним виразом; {2,} - діапазон від 2 і більше символів; ^ - початок перевірки регулярним виразом; $ - кінець перевірки регулярним виразом; i - будь-який реєстр 
    // Перевірка по id
    if( p.test(ev.target.value) && ev.target.id === "user-name"){
        userData.name = ev.target.value; // записуємо інфомацію до userData поле name
        ev.target.className = "" // очищуємо клас 
    }else{
        ev.target.classList.add("error") // Виведення помилки
    }

})

userSurname.addEventListener("change", (ev) => {
    const p = /^[а-яіґєї]{2,}$/i 
    if(p.test(ev.target.value) && ev.target.id === "user-surname"){
        userData.surname = ev.target.value;
        ev.target.className = ""
    }else{
        ev.target.classList.add("error")
    }

})
userEmail.addEventListener("change", (ev) => {
   
    if(/^[a-z0-9_.]{3,}@[a-z.0-9]{2,}\.[a-z.]{2,10}$/i.test(ev.target.value) && ev.target.id === "user-email"){ // [a-z0-9_.] - від a до z, від 0 до 9, може містити _ і .; {3,} - 3+ символів; далі має бути @; далі теж від a до z, від 0 до 9 та 2+ символи; обовʼязково має бути крапочка, від a до z, може містити крапку, від 2 до 10 символів
        userData.email = ev.target.value;
        ev.target.className = ""
        document.querySelector("#email-valid").innerHTML = "✅" // додає в спан значок
    }else{
        ev.target.classList.add("error")
        document.querySelector("#email-valid").innerHTML = "❌"// додає в спан значок
    }
})
//userCity.addEventListener("change", inputEvent)

const userData = {

}