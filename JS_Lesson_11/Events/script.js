// Події

//

// Приклад 1.
{
    document.querySelector('button')

    // contextmenu - подія натискання правої кнопки миші (виклик контекстного меню)
        .addEventListener('contextmenu', (e) => {
           // alert('Click');
            console.log(e);
            e.preventDefault();

            // preventDefault() - відмінити дію за замовчуванням, тобто відмінити відкриття контекстного меню
        });
}

//

// Приклад 2.
// Виклик кастомного контекстного меню
{
    //Отображение меню
    let menuDisplayed = false,
    menuBox = null;

    //const contextMenu = document.querySelector('p');

    document.querySelector('p')
        .addEventListener("contextmenu", (ev) => {
            let left = ev.clientX;
            let top = ev.clientY;
            // Відкриття менюшки відповідно до координат натиску ПКМ
            document.querySelector("section")
                .innerText = `left : ${left} \ top : ${top}`;

            menuBox = document.querySelector(".menu");
            menuBox.style.left = left + 5 + "px";
            menuBox.style.top = top + 5 + "px";
            menuBox.style.display = "block";

            ev.preventDefault();

            menuDisplayed = true;
        });

    window.addEventListener("click", (ev) => {
        if (menuDisplayed == true) {
            menuBox.style.display = "none";
            menuDisplayed = false;
        }
    });
}

//

// Приклад 3.
// Подія copy - копіювання
{
    document.querySelector('body').addEventListener('copy', (e) => {
        //alert('Копирование запрещено');
        const selection = document.getSelection() // getSelection() - повертає обʼєкт з тим, що вилілив користувач
        //console.log(getSelection())
        //console.log(selection)
        
        // clipboardData - відповідає за те, що ми можемо записати щось до буферу обміну
        // setData() - метод для позначення контенту, який ми будемо записувати, в даному випадку, до буферу обміну
        event.clipboardData.setData('text/plain', selection.toString().toUpperCase() + "Скопійовано з лекції 09/05/2023 : " + new Date())
        e.preventDefault();
    });
}

//

// Приклад 4.
// Контролювання вставки (заборонене вставлення тексту до текстареа)
{
    document.querySelector('textarea').addEventListener('paste', (ev) => {
        document.querySelector('div').innerText = 'Докажите что Вы не робот. Введите тескт. Вставка запрещена'
        ev.preventDefault();
        setTimeout(() => {
            document.querySelector('div').innerText = '';
        }, 3000);
    });
}