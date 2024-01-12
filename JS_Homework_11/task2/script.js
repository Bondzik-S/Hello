/*
2.
Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. Скільки символів має бути в інпуті, зазначається в атрибуті data-length. Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.
*/

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("blur", function(){
      const inputValue = this.value;
      const length = parseInt(this.getAttribute("data-length"));

      if (inputValue.length === length) {
        this.classList.remove("wrong");
        this.classList.add("right");
      } else {
        this.classList.remove("right");
        this.classList.add("wrong");
      }
    });
  });
});
