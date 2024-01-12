// Події клавіатури

//

// Приклад 1.
{
    window.onload = () => {
        const main = document.getElementById("main");


        // onkeydown - відповідає за натиск на будь-яку клавішу клавіатури
        main.onkeydown = ()  => {
            print("onkeydown event </br>");
        };

        // onkeyup - відповідає за відпуск будь-якої клавіші клавіатури
        main.onkeyup = function () {
            print("onkeyup event  </br>");
        };

        // onkeypress - відповідає за натиск лише на буквенні клавіші клавіатури + ПРОБІЛ + SHIFT
        main.onkeypress = function () {
            print("onkeypress event  </br>");
        };

        function print(message) {
            document.querySelector("output").innerHTML += message;
        }
    }
}

//

// Приклад 2.
{
    window.onload = function () {
        const main = document.getElementById("main");

        // onkeydown - событие подходит для обработки функциональных клавиш.
        main.addEventListener("keydown", (e) => {
            clear();
            print("alt = " + e.altKey);
            print("ctrl = " + e.ctrlKey);
            print("shift = " + e.shiftKey);
            print("charCode = " + e.keyCode); // код символа (передается при событии keypress)
            // код кнопки для всех клавиатур
            //  print("keyCode = " + e.keyCode);
            console.dir(e)
        })
    }

    function print(message) {
        document.getElementById("output").insertAdjacentHTML("beforeend", `<span>${message}</span><br>`);
    }

    function clear() {
        document.getElementById("output").innerHTML = ""
    }
}

//

// Приклад 3.
{
    window.addEventListener("DOMContentLoaded", () => {
        // Событие onkeypress используется для обработки клавиш с печатными символами.
        document.getElementById("main").addEventListener("keydown", (e) => {
            clear();
            print("alt = " + e.altKey);
            print("ctrl = " + e.ctrlKey);
            print("shift = " + e.shiftKey);
            print(`charCode = ${String.fromCharCode(e.charCode)}`);
            print(`charCode = ${e.keyCode}`);// код символа (передается при событии keypress)
            print(`code = ${e.code}`) // код кнопки для всех клавиатур
            print(`key = ${event.key}`)  
        })
      
    })

    const print = (message) => {
        document.getElementById("output").innerHTML += message + "<br />";
    }

    const clear = () => {
        document.getElementById("output").innerHTML = "";
    }
}