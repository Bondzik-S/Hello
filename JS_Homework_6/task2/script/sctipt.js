/*
1. Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих днів).
2. Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
3. Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.
*/

function Worker(name, surname, rate, days) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
}

Worker.prototype.getSalary = function () {
  return this.rate * this.days;
};

const john = new Worker("John", "Jackson", 1300, 28);
const lely = new Worker("Lely", "Nilson", 800, 25);
// document.write(
//   `${john.name} ${john.surname} має зарплатню: ${john.getSalary()} грн`
// );

function main() {
  const worker = [john, lely];
  worker.forEach((element) =>
    document.write(
      `${element.name} ${element.surname} відпрацював(ла) <span>${
        element.days
      }  днів</span> за ставкою <span> ${
        element.rate
      }  грн</span> і має зарплатню: <span class = "salary"> ${element.getSalary()} грн. </span> </br>`
    )
  );
}
main();
