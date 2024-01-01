// DOM Level 2

//
// За допомогою DOM Level 2 можна записувати безліч однотипних подій на один і той самий елемент

//
// Приклад 1.
{
    // Для того, щоб скористатись DOM Level 2, маємо використати спеціальний метод .addEventListener.
    window.addEventListener('load', () => { // слухає завантаження сторінки
            

        // addEventListener(событие, обработичк, нужен_перехват_события)

        const btn1 = document.getElementById("button1");

     
            // Установка обработичка на событие click для кнопки с id button1
            btn1.addEventListener("click", // подія клік
                () => {
                    alert("Обработчик события нажатия кнопки");
                });
    });

   // object.addEventListener("event", alert)
}

//
// Приклад 2.
{
    //window.onload = function - X
    window.addEventListener('load', () => {
        const btn1 = document.getElementById("button1"),


            handler = () => {
                alert("Ваша знижка 50% ось промокод ХХХХХХХХ");
            },

            removeHandler = () => {
                // удаление обработчика handler с кнопки с id button1
                btn1.removeEventListener("click", handler, false);
            };


        // Функції запускаються по черзі

        btn1.addEventListener("click", handler); // 1
        btn1.addEventListener("click", removeHandler); // 2


    });
}

//
// Приклад 3.
{
    // В моделі DOM Level 2 події розповсюджуються за таким принципом:
    // На етапі ПЕРЕХВАТУ подія розповсюджується від Document вниз до цільового елемента управління.
    // Другий етап - ПОДІЯ В ЦІЛЬОВОМУ ВУЗЛІ.
    // На третьому етапі подія ВИРОСТАЄ від цільового елемента знову вгору до кореневого елемента.

    // Останній параметр у методі addEventListener - 
    // true - обробити подію на етапі ПЕРЕХВАТУ
    // false - обробити подію на етапі ЗРОСТАННЯ

    const isTunnel = false;

    // addEventListener(event, fn, e)

    window.addEventListener("load", function () {
        const e1 = document.getElementById("first");
        const e2 = document.getElementById("second");
        const e3 = document.getElementById("third");

        e1.addEventListener("click",
            function () {
                this.style.backgroundColor = "green";
                alert("Обробник DIV 1");
            },
            isTunnel
        );

        e2.addEventListener("click",
            function () {
                this.style.backgroundColor = "yellow";
                alert("Обробник DIV 2");
            },
            isTunnel
        );

        e3.addEventListener("click",
            function () {
                this.style.backgroundColor = "red";
                alert("Обробник DIV 3");
            },
            isTunnel
        );
    });

}

//
// Приклад 4.
{
    // DOMContentLoaded - подія, яка відповідає за завантаження дом-дерева, відмінність від load - DOMContentLoaded не чекає повного завантаження сторінки (стилі, методи, ф-ції, т.д.), він чекає тільки завантаження дом-дерева, тому працює швидше
    window.addEventListener("DOMContentLoaded", () => {

        // document.forms[0] - звернення до всіх форм на сторінці
        document.forms[0].addEventListener("submit", (e) => {
            
            if (document.getElementById("nameInput").value.length <= 2) {
                // Если поле ввода пустое отменить действие по умолчанию, которое связанно с событием.
                e.preventDefault(); // preventDefault() - відміна дії за замовчуванням
                document.forms[0].after("Введіть імя");
                document.getElementById("nameInput").classList.add("error")
            }

        }, false);

    }, false);
}

//
// Приклад 5.
{
    const isTunnel = false;

        window.onload = function () {
            const e1 = document.getElementById("first");
            const e2 = document.getElementById("second");
            const e3 = document.getElementById("third");

            e1.addEventListener("click",
                // e - параметр хранит объект с информацией о событии.
                function (e) {
                    
                    this.style.backgroundColor = "green";
                    alert("Обработчик DIV 1");
                    // прекращение дальнейшего маршрута события.
                    e.stopPropagation(); // stopPropagation() - зупинка розповсюдження події. Якщо ми використовуємо даний метод, то isTunnel обовʼязково має значення false
                },
            isTunnel);

            e2.addEventListener("click",
                function (e) {
                    this.style.backgroundColor = "yellow";
                    alert("Обработчик DIV 2");
                    e.stopPropagation();
                },
            isTunnel);

            e3.addEventListener("click",
                function (e) {
                    this.style.backgroundColor = "red";
                    alert("Обработчик DIV 3");
                    e.stopPropagation();
                },
            isTunnel);
        }
}

//
// Приклад 6.
{
    let text = ""

        window.addEventListener("DOMContentLoaded", function () {

            const guard = document.getElementById("guard");

            guard.addEventListener("keypress", (e) => { // keypress - подія, яка відповідає за те, що користувач моде натиснути будь-яку буквенне або числове значення
                console.dir(e)
                text += String.fromCharCode(e.charCode)
              
                // Можна записати тільки 2 або 4
                if (String.fromCharCode(e.charCode) != '2' // charCode - код кнопки
                    && String.fromCharCode(e.charCode) != '4') {
                    e.preventDefault();
                }

            }, true);

        }, false);
}