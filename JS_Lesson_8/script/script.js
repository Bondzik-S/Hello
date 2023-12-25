// Дом - дерево (DOM - Document Object Model)
// Дом-дерево - це підключення Java Script до HTML сторінки

// Бажано не використовувати в обробниках подій (типу онклік) метод document.write, оскільки при виконанні коду, все, що було на сайті до цього - зникне.
// window - глобальний обʼєкт, тобто весь документ, який зберігає в собі всі дані та методи

// Код скріпту обовʼязково має бути перед закриваючим тегом body
// Але, якщо ми все таки хочемо написати скріпт в хеді, в такому випадку маємо використати подію, яка буде виконувати код лише після завантаження сторінки - window.onload = () => {}

//window.onload - метод (слухач), який чекає повного завантаження сторінки

// Перший приклад (getElementById)

{
  // чекає завантаження
  window.onload = () => {
    const paragraph = document.getElementById("output"); // Знаходимо елемент за його id. Нам повертається обʼєкт, якому ми надаємо змінну paragraph
    const hyperlink = document.getElementById("link");

    // innerHTML - текст между открывающим и закрывающим тегами.
    paragraph.innerText = "HELLO WORLD !!!"; // .innerText - метод, для присвоєння/зміни тексту в середині тегу
    hyperlink.textContent = "EDUCATION SITE !!!"; // .textContent - виконує ідентичну ф-цію до .innerText
  };
}

// Другий приклад (getElementsByTagName)

// getElementsByTagName() - метод, який шукає елементи за іх тегами і формує з них щось на кшталт масиву

// Оскільки передається псевдомасив, а не масив, щоб нам були доступні більшість функцій, маємо зробити із псевдлмасиву масив за допомогою деструктиризації [...]

{
  window.onload = () => {
    // получение всех элементов <p>
    const [...paragraphs] = document.getElementsByTagName("p");

    // На масиві paragraphs викликати для кожного елементу форіч та поміняти їх колір на червоний
    paragraphs.forEach((element) => {
      element.style.color = "red";
    });
  };
}

// Третій приклад ()

{
  window.onload = () => {
    // Знаходимо елемент за його id - answerButton та додаємо подію onclick
    document.getElementById("answerButton").onclick = (e) => {
      // Після обробки події знаходимо всі елементи із класом answer. Повертаються вони у вигляді масиву
      const [...radioButtons] = document.getElementsByClassName("answer");

      let res = "";

      // Перебираємо отримані radioButtons та в item будемо отримувати всі answer елементи
      // value - текст в імпуті (назва) (Да, Нет, Не знаю)
      // checked - чи було обрано елемент (true, false)
      radioButtons.forEach((item, i, a) => {
        res += `Перше вираження ${item.value} друге вираження ${item.checked} \r`;
      });

      alert(res);
    };
  };
}

// Четвертий приклад (getElementsByClassName)

{
  window.onload = () => {
    console.time("one"); // Визначає, скільки часу нам потрібно на обробку сторінки

    const paragraphs = document.getElementsByClassName("elements");

    // Спочатку всі елементи зазначені жовтим кольором. Ми зо допомогою циклу for задаємо їм зелений колір
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "green";
    }
    console.timeEnd("one");
  };
}

// Пʼятий приклад (querySelector)

window.onload = () => {
  console.time("time1");
  // получение всех элементов <p>

  // .querySelector() - знаходить елемент (один) за заданим параметром (можна вказувати як теги, так і класи)

  //const paragraphs = document.querySelector("div > div"); // Тут знаходить дів в діві

  // .querySelectorAll() - знаходить елементи (всі) за заданими параметрами (можна вказувати як теги, так і класи)
  // Даний спосіб працює швидше і потребує меншої кількості коду

  const [...paragraphs] = document.querySelectorAll(".elements");
  //paragraphs.style.backgroundColor = "green"

  //console.dir(paragraphs)
  //console.dir(document.querySelectorAll(".elements"))

  paragraphs.forEach((item) => {
    item.style.color = "green";
  });

  console.timeEnd("time1");
};

// dir використовується для виведення списку властивостей об'єкта або елементів каталогу в консоль. Це часто використовується для дослідження структури об'єктів або дерева каталогів та файлів
