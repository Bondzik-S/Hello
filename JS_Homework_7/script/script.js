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

class FilterBy {
  constructor(arr) {
    this.arr = arr;
  }

  // Фільтрування
  whatTypeOfData(dataType) {
    return this.arr.filter((item) => typeof item != dataType); // Використовуємо метод filter та стрілкову ф-цію яка перевіряє тип даних
  }
}

const imputArray = ["hello", "world", 23, "23", null];
const filterInstance = new FilterBy(imputArray);
const filteredArray = filterInstance.whatTypeOfData("string"); // Перезаписуємо масив

console.log(filteredArray);

/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
 */

class Engine {
  constructor(power, maker) {
    this.power = power;
    this.maker = maker;
  }
}

class Driver {
  constructor(driverName, howLong) {
    this.driverName = driverName;
    this.howLong = howLong;
  }
}

class Car extends Driver {
  constructor(markaCar, classCar, weightCar, driverName, power) {
    super(driverName);
    this.markaCar = markaCar;
    this.classCar = classCar;
    this.weightCar = weightCar;
    this.power = new Engine(power);
  }

  start() {
    console.log("Поїхали");
  }

  stop() {
    console.log("Зупиняємося");
  }

  turnRight() {
    console.log("Поворот праворуч");
  }

  turnLeft() {
    console.log("Поворот ліворуч");
  }

  toString() {
    return `Автомобіль: ${this.markaCar}; Клас автомобіля: ${this.classCar}; Вага автомобіля: ${this.weightCar} кг; Імʼя водія: ${this.driverName}; Мотор: ${this.power.power}`;
  }
}

class Lory extends Car {
  constructor(markaCar, classCar, weightCar, driverName, power, waightPower) {
    super(markaCar, classCar, weightCar, driverName, power);
    this.waightPower = waightPower;
  }
}

class SportCar extends Car {
  constructor(markaCar, classCar, weightCar, driverName, power, maxSpeed) {
    super(markaCar, classCar, weightCar, driverName, power);
    this.maxSpeed = maxSpeed;
  }

  toStringSportCar() {
    return `Автомобіль: ${this.markaCar}; Клас автомобіля: ${this.classCar}; Вага автомобіля: ${this.weightCar} кг; Імʼя водія: ${this.driverName}; Мотор: ${this.power.power}; Гранична швидкість: ${this.maxSpeed} км/год`;
  }
}

const myCar = new Car("Toyota", "C - class", 2132, "Василь", "200");
const mySportCar = new SportCar(
  "Lamborgini",
  "A - class",
  2132,
  "Василь",
  "500",
  350
);

console.log(myCar.toString());
console.log(mySportCar.toStringSportCar());
