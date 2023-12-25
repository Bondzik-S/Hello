/* Створіть 5 дів на сторінці потім використовуючи getElementsByTagName і forEach поміняйте дівам колір тіла. */

// div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%,50%)`;

const divs = document.getElementsByTagName("div");

Array.from(divs).forEach(function (div) {
  div.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 361
  )}, 100%,50%)`;
});
