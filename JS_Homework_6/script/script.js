// void() - метод, який нічого не повертає

/*
HW 
(Клас - конструктор)

1. + Створити конструток Animal та розширюючі його конструктори Dog, Cat, Horse.
2. + Клас Animal містить змінні food, location і методи makeNoise, eat, sleep.
3. + Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
4. + Dog, Cat, Horse перевизначають методи makeNoise, eat.
5. + Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
6. + Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) treatAnimal(Animal animal)
7. + Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
8. У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
9. У циклі надсилайте їх на прийом до ветеринара.
*/

function Animal(food, location) {
  this.food = food;
  this.location = location;
}

Animal.prototype.makeNoise = function (name) {
  console.log(`${name} спить.`);
};
Animal.prototype.eat = function (name, food) {
  console.log(`${name} їсть такий продукт: ${food}`);
};
Animal.prototype.sleep = function () {
  console.log("Тваринка спить");
};

function Dog(animal, nameAnimal, food) {
  this.animal = animal;
  this.nameAnimal = nameAnimal;
  this.food = food;
}

Dog.prototype = new Animal();

Dog.prototype.makeNoise = function () {
  console.log(`${this.nameAnimal} спить`);
};

Dog.prototype.eat = function () {
  console.log(`${this.animal} ${this.nameAnimal} їсть: ${this.food}`);
};

const dog = new Dog("Собака", "Сірко", "мʼясо, корм");
dog.makeNoise();
dog.eat();

function Cat(animal, nameAnimal, food) {
  this.animal = animal;
  this.nameAnimal = nameAnimal;
  this.food = food;
}

Cat.prototype = new Animal();

Cat.prototype.makeNoise = function () {
  console.log(`${this.nameAnimal} спить`);
};

Cat.prototype.eat = function () {
  console.log(`${this.animal} ${this.nameAnimal} їсть: ${this.food}`);
};

const cat = new Cat("Кіт", "Мурчик", "мʼясо, корм, котяча мʼята");
cat.makeNoise();
cat.eat();

function Horse(animal, nameAnimal, food) {
  this.animal = animal;
  this.nameAnimal = nameAnimal;
  this.food = food;
}

Horse.prototype = new Animal();

Horse.prototype.makeNoise = function () {
  console.log(`${this.nameAnimal} спить`);
};

Horse.prototype.eat = function () {
  console.log(`${this.animal} ${this.nameAnimal} їсть: ${this.food}`);
};

const horse = new Horse("Кінь", "Ласик", "сіно, морква");
horse.makeNoise();
horse.eat();

// 6. Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) treatAnimal(Animal animal)

function Veterinar() {}
Veterinar.prototype.void = function () {};
Veterinar.prototype.treatAnimal = function (animal) {
  return `Пацієнт: ${animal.animal}; Імʼя: ${animal.nameAnimal}; Їжа: ${animal.food};`;
};

const clinic = new Veterinar();
clinic.treatAnimal(horse);

// 8. У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас.

function main() {
  const animalArray = [dog, cat, horse];
  for (const animal of animalArray) {
    document.write(
      `${animal.nameAnimal} прибув на прийом. <br> ${clinic.treatAnimal(
        animal
      )}. <br><br>`
    );
    // clinic.treatAnimal(animal);
    // console.log("\n");
  }
}
main();
