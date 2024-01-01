// Таймери - створені для того, щою забезпечити можливість запуску ф-ції через певний час

// Приклад 1.
{
  window.onload = () => {
    //const showMessage = () => alert("Hello world");
    // setTimeout - планирует один запуск указанной функции через определенное количество миллисекунд
    // функция showMessage будет запущена через 5 секунд
    //?box-modal
    const boxModal = document.querySelector(".box-modal");
    /*
        1 спосіб
        setTimeout(()=>{
            boxModal.classList.add("active")
        }, 5000)
        */

    // 2 спосіб
    function fn() {
      boxModal.classList.add("active"); // клас active додає до box-modal значення display: flex;
    }

    setTimeout(fn, 1000);
  };
}

//
// Приклад 2.
{
  let counter = 0;

  const count = () => {
    counter++;
    document.querySelector("#output").textContent = counter;
  };

  // setInterval - планирование запуска указанной функции с заданным интервалом. Планирование и запуск будут происходить многократно.
  // запускать функцию Count с интервалом в 1 секунду
  setInterval(count, 100);
}

//
// Приклад 3.
{
  // Відміна таймеру
  let timer;

  const showMessage = () => {
    alert("Hello world");
    document.body.style.backgroundColor = "green";
  };

  window.onload = () => {
    timer = setTimeout(showMessage, 5000); // Запускає ф-цію showMessage() через 5 секунд
  };

  const cancel = () => {
    // Викликана в html коді ф-ція відміни таймеру
    // clearTimeout() отмена задержки, которая была установлена на строке 47
    clearTimeout(timer);
    document.body.style.backgroundColor = "red";
  };
}

//
// Приклад 4.
{
  let counter = 0,
  // Ми можемо створити змінну, яка буле використовуватись в коді не одразу, а при певній події, виконанні певної ф-ції. Її значення без використання - undefined
    intervalHandler;

  //const get = id => document.getElementById(id); // окрема ф-ція для знаходження елементу за його айді, щоб не писати багато разів
  const $All = (selector) => [...document.querySelectorAll(selector)];

  function $(selector) {
    return document.querySelector(selector); 
  }

  const count = () => {
    $("#output").innerHTML = "<span style='color:blue'>" + counter + "</span>";
    counter++;
  };

  $("#startButton").onclick = () => {
    // Використання ф-ції $, яка повертає селектор
    intervalHandler = setInterval(count, 5);
  };

  $("#stopButton").onclick = () => {
    // clearInterval() -  останавливаем таймер, по которому вызывается функция count
    clearInterval(intervalHandler);
  };

  // пользовательская функция для получения элементов страницы по id
}
