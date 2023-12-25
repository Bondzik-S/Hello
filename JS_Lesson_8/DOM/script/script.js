// DOM

// Для того, щоб можна було спілкуватися з елементами, які є поряд, дочірніми, батьківськими і т.д., ми можемо використовувати спеціальну роботу по вузлам дом-дерева

// Основні типи вузлів
// Вузли - це абсолютно всі елементи, які нам можуть зустрітись: тести, коментарі,
// Інтерфейс           | Константа nodeType            | Значення nodeType
// ------------------------------------------------------------------------
// Element             | Node.ELEMENT_NODE             | 1
// Text                | Node.TEXT_NODE                | 3
// Comment             | Node.COMMENT_NODE             | 8
// Document            | Node.DOCUMENT_NODE            | 9
// ------------------------------------------------------------------------

// Властивості для навігації по DOM

// childNodes - масив усіх дочірніх вузлів (використовується не часто, оскільки знаходит додатково всі коментарі, тексти і тому подібне)
// firstChild - перший дочірній вузол
// firstElementChild - перший елемент-дочірній елемент
// children - Всі дочірні елементи
// lastChild - останній дочірній вузол
// nextSibling - наступний вузол, розташований на одному рівні з поточним
// previousSibling - попередній вузол, розташований на одному рівні з поточним
// parentNode - батьківський вузол для поточного елемента

// Простір між html і head називається текстовим вузлом (nodeType 3 (Text))
// Коментарі (nodeType 8)
// Document - сам документ (nodeType 9)

//
//Приклад 1.

// Вузли передають не самі елементи, тобто теги, а і пробіли між ними (текстовий вузол)
// До текстових вузлів не можна додавати стилі.

// {
//   const [...ul] = document.querySelector("ul").children;
//   ul.forEach((el) => {
//     el.style.color = "red";
//     console.dir(el);
//   });
// }

//
// Приклад 2.

// Процес перефарбовування всіх елементів (стара логіка)

// {
//   window.onload = () => {
//     const e = document.querySelector("#list");
//     // childNodes - получение всех дочерних узлов.
//     for (let i = 0; i < e.childNodes.length; ++i) {
//       const temp = e.childNodes[i];

//       // если найденный узел не элемент то пропустить его
//       if (temp.nodeType != 1) {
//         continue;
//       }

//       e.childNodes[i].style.color = "red";
//     }
//   };
// }

//
// Приклад 3.

// Якщо ми хочемо отримати саме елемент, а не вузел, то нам потрібно вказувати Element, наприклад e.firstElementChild.style.color = "red";
// Якщо ми вкажемо просто firstChild, то отримаємо вузел

// {
//   window.onload = () => {
//     // Знаходимо елемент із id "p1"
//     const e = document.getElementById("p1");
//     // parentNode - получить родительский узел для узла 'e'
//     e.parentElement.style.border = "1px solid red";
//   };
// }

//
// Приклад 4.

// {
//   window.onload = () => {
//     const e = document.getElementsByTagName("li")[2]; // отримуємо елемент з індексом 2 ("Item 3")

//     // nextSibling - получение следующего узла, который находиться на одном уровне с текущим (узлы имеют общий родительский узел)
//     e.nextElementSibling.style.color = "red";

//     // previousSibling - получение предыдущего узла, который находиться на одном уровне с текущим.
//     e.previousElementSibling.style.color = "green";
//   };
// }

//
// Приклад 5.

// Методи для роботи з DOM
// old
// appendChild - додати дочірній елемент
// insertBefore - додати елемент перед вказаним
// removeChild - видалення елемента
// replaceChild - заміна одного елемента на інший
// *****

/*
node.append(...nodes or strings) – додає вузли або рядки в кінець node,
node.prepend(...nodes or strings) – вставляє вузли або рядки в початок node,
node.before(...nodes or strings) – вставляє вузли або рядки перед node,
node.after(...nodes or strings) – вставляє вузли або рядки після node,
remove - видалення елемента
node.replaceWith(...nodes or strings) – замінює node заданими вузлами або рядками.
https://learn.javascript.ru/modifying-document
*/

// {
//   window.onload = () => {
//     const div1 = document.getElementById("div1"),
//       p1 = document.createElement("p"); // Створюємо параграф
//     p1.textContent = "Параграф 1"; // В параграф записуємо "Параграф 1"
//     p1.classList.add("Імʼя-класу"); // Додаємо клас до параграфу
//     div1.append(p1); // Додаємо p1 до div перед закриваючим тегом (в кінець)

//     const p2 = document.createElement("header"); // Створюємо header
//     p2.textContent = "Заголовок 2"; // Записуємо в нього текст "заголовок 2"

//     document.body.prepend(p2); // Вставляємо header на початок body
//   };
// }

//
// Приклад 6.
// Зміна значень атрибутів

// {
//   window.onload = () => {
//     const a1 = document.querySelector("#a1"),
//       a2 = document.querySelector("#a2"),
//       a3 = document.querySelector("#a3");

//     // .setAttribute() - додавання атрибута синтаксис: .setAttribute(назва атрибута, значення)
//     a1.setAttribute("href", "https://prog.kiev.ua/");

//     // removeAttribute() - видалення атрибута
//     a2.removeAttribute("href");

//     // getAttribute - читання атрибута
//     //alert(a3.getAttribute("href"));

//     // Додавання картинки до img
//     document.querySelector("img").src =
//       "https://nodejs.org/static/images/logo.svg";
//   };
// }

//
// Приклад 7.
// Методи строк

{
  // split - Разбивает строку на подстроки по указанному разделителю и возвращает массив подстрок.
  let str = "Строка для тестирования примера";
  const substrs = str.split(" ");
  document.write(substrs.join("<br />"));

  // charAt - возвращает символ по указанной позиции.
  const firstChar = str.charAt(0);
  str[5];
  const lastChar = str.charAt(str.length - 1);
  document.write(
    `<br /> первый символ -  ${firstChar}  последний символ - ${lastChar} <br />`
  );

  // includes - повертає значення true, якщо в обʼєкті є вказаний елемент, якщо ні - повертає false
  str = "hello world";

  // Змінні, перед якими ставиться нижнє підкреслення (_firstDash) - використовують між собою розробники, щоб показати, що ця змінна використовується тільки в цьому коді, в інших місцях вони можуть себе поводити інакше
  const _firstDash = str.includes("world");
  document.write(`includes : ${_firstDash} <br>`);

  // indexOf - возвращает индекс первого встречающегося в строке указанного символа.
  str = "ab-cd-ef-gh-ij";
  const firstDash = str.indexOf("-");
  document.write(
    `Индекс первого символа - в строке  ${str} =  ${firstDash} </br>`
  );

  // lastIndexOf - возвращает индекс последнего встречающегося в строке указанного символа.
  str = "ab-cd-ef-gh-ij";
  const lastDash = str.lastIndexOf("-");
  document.write(
    `Индекс последнего символа - в строке ${str} =  ${lastDash} </br>`
  );

  // toLowerCase() - перевод всех символов в нижний регистр, toUpperCase() - перевод всех символов в верхний регистр.
  str = "Hello World!!!";
  str = str.toLowerCase();
  document.write(`toLowerCase ${str} <br />`);

  str = str.toUpperCase();
  document.write(`toUpperCase ${str} <br />`);

  // substring -  возвращает строку между двумя указанными индексами, не включая индексы.
  str = "Hello, world!";
  substr = str.substring(6, 12);
  document.write(substr);

  // substr - возвращает строку начиная с указанного индекса, указанной длины (кількість символів).
  str = "Hello, world!";
  substr = str.substr(0, 5);
  document.write("<br />" + substr);
}
