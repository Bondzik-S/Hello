// onmousemov - подія наведення на обʼєкт миші
// onmouseout - подія виходу із наведення на обʼєкт миші
// .clientX(Y) - метод, який відповідає за позицію курсора відносно осі X i Y.

// ПОДІЇ

// Переглянути документ Events.html і роздрукувати

// Навʼязливий Java Script - код js, який пишеться всередині документу html. Ним краще не користуватись, а писати код в самому документі Java Script

//
// DOM Level 0

//
// Приклад 1.

{
  const validate = () => {
    // проверка формы.
    alert("validate");
  };
}

//
// Приклад 2.

{
  const loadHandler = () => {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");

    // обработичк как анонимная функция.
    p1.onclick = () => alert("hello"); // Ненавязчивый JS

    // обработчик как другая функция из этого сценария.
    p2.onclick = clickHandler; // В таких варіантах запису подій варто памʼятати, що не потрібно записувати круглі дужки при виклику, оскільки в такому випадку ф-ція запуститься одразу

    function clickHandler() {
      p1.innerText = p2.textContent;
    }
  };

  window.onload = loadHandler; // на завантаженій сторінці запуститься ф-ція loadHandler()
}

//
// Приклад 3.

{
    function loadHandler() {
        const e = document.getElementById("input1");
        e.onclick =  function () {
            // так как дання функция является значением свойства onclick, ключевое слово this
            // ссылается на тот элемент, который выдал событие.
            this.value = "clicked!";
        };
    }
}

//
// Приклад 4.

{
    window.onload = () => {
        const [...pArr] = document.getElementsByTagName("p");

       pArr.forEach(function (element) {
           element.onclick = function () {
               //style.backgroundColor = "red";
               this.classList.toggle("red")
           }        
       })
   }
}