// DHTML - це динамічно змінюючийся html.
// Раніше думали, що html буде статичним. DHTML дозволяє створювати базові не складні анімації, переходи і т.д. за допомогою лише коду html без використання сторонніх мов програмування

// Стилі, які ми можемо передбачити треба писати в css, а стилі, які ми не можемо передбачити, можемо вже записати до js

// Звертання до дом-дерева через js дуже затратне, тому при написанні коду важливо це враховувати, щоб уникнути довгого завандаження сторінки

//
// Приклад 1.

{
  // Если имя CSS аттрибута содержит дефисы, имя свойства объекта образуеться путем удаления
  // дефисов и перевода в верхний регистр буквы, непосредственно следующей за каждым из них.
  const button = document.querySelector("input");

  button.onclick = () => {
    const div = document.querySelector("div");

    // CSS атрибут background-color
    //div.style.backgroundColor = "green";
    div.classList.add("green"); // тут додали клас через стилі, а не за допомогою js
  };
}

//
// Приклад 2.
{
  let div;

  const firstButtonHandler = () => {
      // установка значения для атрибута class (присвоение CSS класса для элемента)
      div.classList.add("class1");
      div.classList.remove("class2"); // видалення класу
      div.classList.toggle("radius"); // toggle() - метод, який видалить клас/елемент, якщо його він є, або додатьсть, якщо його немає

      div.style.left = Math.floor(Math.random() * screen.width) + "px"; // показуватиме дів на випадковій позиції left відносно ширини екрану
    },
    secondButtonHandler = () => {
      div.classList.remove("class1");
      div.classList.add("class2");
      div.classList.toggle("radius");
    };

  document.getElementById("first").onclick = firstButtonHandler;
  document.getElementById("second").onclick = secondButtonHandler;
  div = document.getElementById("test-div");
}

//
// Приклад 3.
// Не можливо через js прочитати глобальні стилі, тобто ті, які створилися в style, для цього був створений Computed Styles
// Computed Styles

{
  window.onload = () => {
    const div1 = document.getElementById("first"),
      div2 = document.getElementById("second");

    document.getElementById("btn1").onclick = function () {
      alert("First div style - " + getStyle(div1, "backgroundColor"));
    };

    document.getElementById("btn2").onclick = function () {
      alert("Second div style - " + getStyle(div2, "backgroundColor"));
    };

    // getComputedStyle - метод позволяет получить доступ к вычисляемым стилям.

    function getStyle(element, styleName) {
      if (window.getComputedStyle) {
        console.dir(window.getComputedStyle(element));
        return window.getComputedStyle(element)[styleName]; // Знаходимо елемент (element - div1/div2) і серед переданого масиву шукаємо одну властивість класу (styleName - backgroundColor)
      }
    }
  };
}

//
// Приклад 4.
{
  const e = document.getElementById("rect");

  e.style.width = "100px";
  e.style.height = "100px";
  e.style.border = "solid black 5px";

  const colors = ["blue", "yellow", "orange", "red"];
  let nextColor = 0;

  // Вызов следующей функции каждые 500 миллисекунд для анимации цвета.
  setInterval(() => {
    e.style.backgroundColor = colors[nextColor++ % colors.length];
  }, 500);
}

//
// Приклад 5.
{
  /*
        function ToolTip () {
                this.tooltip = document.createElement("div"); // Создание div для тени
                this.tooltip.style.position = "absolute";     // Абсолютное позиционирование.
                this.tooltip.style.visibility = "hidden";
                this.tooltip.className = "tooltip";
        }

       ToolTip.prototype.show = function (text, x, y) {
        this.tooltip.innerHTML = text;             // Текст подсказки
                this.tooltip.style.left = x + "px";        // Координаты
                this.tooltip.style.top = y + "px";
                this.tooltip.style.visibility = "visible";

                // Добавление подсказки в документ если он еще не присутствует.
                if (this.tooltip.parentNode != document.body)
                    document.body.appendChild(this.tooltip);
       }
       */

  class Tooltip {
    constructor() {
      this.tooltip = document.createElement("div"); // Создание div для тени
      this.tooltip.style.position = "absolute"; // Абсолютное позиционирование.
      this.tooltip.style.visibility = "hidden";
      this.tooltip.className = "tooltip";
    }

    // Установка содержимого для подсказки и отображение
    show(text, x, y) {
      this.tooltip.innerHTML = text; // Текст подсказки
      this.tooltip.style.left = x + "px"; // Координаты
      this.tooltip.style.top = y + "px";
      this.tooltip.style.visibility = "visible";
      document.getElementById("index").innerHTML = `x: ${x}/ y: ${y} `;
      // Добавление подсказки в документ если он еще не присутствует.
      if (this.tooltip.parentNode != document.body)
        document.body.append(this.tooltip);
    }

    // Функция для скрытия подсказки
    hide() {
      this.tooltip.style.visibility = "hidden";
    }
  }

  const mouseMoveHandler = (e) => {
    debugger;
    if (!e) e = window.event;
    t.show(
      "Текст який ти бачиш!!! Сьогодні 19.11.22",
      e.clientX + 10,
      e.clientY + 10
    );
  };

  const mouseOutHandler = () => {
    t.hide();
  };
  window.onload = () => {
    const d = document.getElementById("test");

    d.onmousemove = mouseMoveHandler;
    d.onmouseout = mouseOutHandler;
  };

  const t = new Tooltip();
}

//
// Приклад 6.
{
  //  HSL Hue, Saturation, Lightness (Intensity) - Цветовая модель, в которой цветовымикоординатами является цвет, насыщенность и яркость.
  // http://ru.wikipedia.org/wiki/HSL
  const e = document.getElementById("rect");

  e.style.width = "100px";
  e.style.height = "100px";
  e.style.border = "solid black 1px";

  let color = 0;

  setInterval(() => {
    color = color + (1 % 360);
    e.style.backgroundColor = "hsl(" + color + ", 100%, 50%)"; // hsl(0, 100%, 50%)
  }, 50);
}

//
// Приклад 7.
{
  let div1,
    leftPos = 0;

  window.onload = () => {
    div1 = document.getElementById("div1");
    setInterval(animate, 100);
  };

  // transition - це властивість у CSS, яка дозволяє плавно змінювати значення властивостей стилів під час переходу між двома станами.

  const animate = () => {
    div1.style.left = leftPos + "px";
    leftPos += 10;
    if (leftPos > 800) {
      leftPos = 0;
    }
  };
}

//HW
// Передивитись приклади 5-8
// Що таке transition
// index.html
