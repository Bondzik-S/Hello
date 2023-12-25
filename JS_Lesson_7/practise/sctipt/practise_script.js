/* 
- Написати функцію `createNewUser()`, яка буде створювати та повертати об'єкт `newUser`.

- При виклику функція повинна запитати у користувача імя його  та прізвище.

- Використовуючи дані, введені користувачем, створити об'єкт `newUser` з властивостями `firstName` та `lastName`.

- Додати в об'єкт `newUser` метод `getLogin()`, який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі (наприклад, `Ivan Kravchenko → ikravchenko`).

- Створити користувача за допомогою функції createNewUser(). Викликати у користувача функцію `getLogin()`. Вивести у консоль результат виконання функції. 
*/

class CreateNewUser {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = this.getBirthday();
  }

  getBirthday() {
    let birthdayImput = prompt("Введіть дату народження в форматі dd.mm.yyyy");
    return birthdayImput;
  }

  getAge() {
    return new Date().getFullYear() - parseInt(this.birthday.split(".")[2]);
  }

  getLogin() {
    return (this.firstName[0] + this.lastName).toLocaleLowerCase(); // Повертає першу літеру імені + прізвище
  }

  // getAge() {
  //   return new Date().getFullYear() - this.birthday.split(".")[2];
  // }

  getPassword() {
    return (
      this.firstName[0].toUpperCase() +
      this.lastName.toLocaleLowerCase() +
      this.birthday.split(".")[2]
    );
  }
}

const newUser = new CreateNewUser("Ivan", "Budenko", "10.02.1998");
console.log(CreateNewUser);
console.log(newUser.getAge());
console.log(newUser.getPassword());

/* 
- Візьміть виконане домашнє завдання 1 (створена вами функція `createNewUser()`) та доповніть її наступним функціоналом:
   1. При виклику функція повинна запитати в дату народження (текст у форматі `dd.mm.yyyy`) і зберегти її в полі `birthday`.
   2. Створити метод `getAge()` який повертатиме скільки користувачеві років.
   3. Створити метод `getPassword()`, який повертатиме першу літеру імені користувача у верхньому регістрі, поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
- Вивести в консоль результат роботи функції `createNewUser()`, а також функцій `getAge()` та `getPassword()` створеного об'єкта.
 */

/*
- Написати функцію `filterBy()`, яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].

Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
https://storage.googleapis.com/www.examclouds.com/oop/car-ierarchy.png
 */
