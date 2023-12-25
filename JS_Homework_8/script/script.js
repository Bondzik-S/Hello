/* Створіть 2 інпути та одну кнопку. Зробіть так, щоб інпути обмінювалися вмістом. */

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const btn = document.getElementById("btn");

btn.onclick = function () {
  const tempValue = input1.value;

  input1.value = input2.value;
  input2.value = tempValue;
};
