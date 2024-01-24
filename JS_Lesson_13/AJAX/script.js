// AJAX
//

//

// Приклад 1.
{
    window.onload = function () {
        document.getElementById("buttonGet").onclick = function () {
            var xhr = new XMLHttpRequest();
            // время ожидания.
            var timeout = 2000;
            // запуск функции отмены запроса через указанный промежуток времени.
            // .abort() - відміняє setTimeout()
            var timer = setTimeout(function () { xhr.abort(); alert("aborted"); }, timeout);

            xhr.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    clearTimeout(timer); // отмена запуска abort() метода если пришел ответ от сервера.
                    document.getElementById("output").innerHTML = xhr.responseText;
                }
            }
            xhr.send();
        }
    }
}

//

// Приклад 2.
{
    window.onload = function () {
        // try-catch - використовується для коду, в якому потенційно може бути помилка, щоб проінформувати про помилки без зупинення коду. Зазвичай, коли виникають помилки в коді, js повністю завершує код, конструкція try-catch дозволяє уникнути цього
        try {
            // фунцикя для отображения индикатора загрузки.
            function show() {
                document.getElementById("loader").style.display = "block";
            }

            // фунцикя для удаления индикатора загрузки.
            function hide() {
                document.getElementById("loader").style.display = "none";
            }

            var xhr = new XMLHttpRequest();

            document.getElementById("buttonGet").onclick = function () {
                xhr.open("GET", "https://swapi.dev/api/films/1/");
                xhr.onreadystatechange = function () {

                    if (xhr.readyState == 4 && xhr.status == 200) {
                        setTimeout(function () {
                            hide(); // скрыть индикатор.
                            document.getElementById("output").innerHTML = xhr.responseText;
                        }, 3000)
                    }
                }
                xhr.send(); // відправка даних
                show(); // отобразить индикатор.
            }
        } catch (error) {
            throw new Error("text error")
            console.error(error)
        }

    }
}

//

// Приклад 3.
// JSON
{
    window.onload = function () {
        // фунцикя для отображения индикатора загрузки.
        function show() {
            document.getElementById("loader").style.display = "block";
        }

        // фунцикя для удаления индикатора загрузки.
        function hide() {
            document.getElementById("loader").style.display = "none";
        }
        var xhr = new XMLHttpRequest();

        document.getElementById("buttonGet").onclick = function () {

            xhr.open("GET", "https://swapi.dev/api/people/?page=1");

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // JSON.parse - преобразование в объект строки полученной с сервера.
                    var data = JSON.parse(xhr.responseText);
                    //localStorage.data = JSON.stringify(data);
                    console.log(data)
                    hide()
                }
            }
            xhr.send();
            show()

        }
    }
}