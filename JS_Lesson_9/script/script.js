// Повторити про var (локальні/глобальні змінні)

// Регулярні вирази. Таймери. DHTML.

// За допомогою регулярних виразів ми можемо шукати якусь інформацію. Регулярні вирази потрібні для перевірки інформації і пошуку в строці, що вводить користувач.
// Регулярні вирази існують в багатьох мовах програмування і працюють однаково

// Приклад 1.
{
  // Определение регулярного выражения через литерал
  const pattern1 = /\d\d\d/;

  // Определение регулярного выражения через класс RegExp
  const pattern2 = new RegExp("ddd");

  // \d - метасимвол, заменяющий любой числовой символ від 0 до 9
  // \d\d\d - соответствует подстроке из трех чисел.
}

//
// Приклад 2.
{
  // search() - возвращает индекс первого найденного символа подстроки по шаблону или -1 если подстрока не найдена
  const text = "Строка 123 для тестирования 123 примера.";

  const pattern = /\d\d\d/; // Змінна яка має обʼєкт регулярного виразу
  const firstIndex = text.search(pattern);

  // Якщо знаходиться в змінній значення регулярного виразу, то він повертає його індекс. Якщо ні, то повертає значення -1
  if (firstIndex === -1) {
    throw new Error("Пошук без успіху :("); // throw - використовується для "викидання помилок", які ломають код
  } else if (firstIndex >= 0) {
    console.log(`Подстрока найдена по индексу  ${firstIndex}`);
  }
}

//
// Приклад 3.
{
  // replace() -  производит операцию поиска с заменой.

  const text = "Строка для 123тести456рования при789мера.",
    pattern = /\d\d\d/g, // g - глобальный поиск - все вхождения, а не только первое.
    result = text.replace(pattern, "<span></span>");

  window.onload = () =>
    document
      .getElementById("root")
      .insertAdjacentHTML("beforeend", `<div>${result}</div>`);

  // beforeend - виведе перед закриваючим тегом

  //insertAdjacentHTML() - метод вбудовування в html
}

//
// Приклад 4.
{
  // match() - принимает регулярное выражение и возвращает массив с результатами поиска.
  const text = "34 плюс 67 равно 4";
  const res = text.match(/\d/g); // возвращает массив ['3', '4', '6', '7', '4']. Це відбувається за рахунок використання глобального пошуку. При глобальному пошуку компʼютор не сприймає двоцифрові числа за одне число, а сприймає як дві окремі цифри
  document.write(res);

  const text2 = "Текст 123 для тестирования 12.7 примера";
  const res2 = text2.match(/\d\d\d/g);

  document.write(`<br />res2 =  ${res2}`);
}

//
// Приклад 5.
{
  // split() - разбивает строку на массив подстрок в соответствии с регулярным выражением.
  const text = "test-А123test-B123test-C111test-D567";
  const res = text.split(/\d\d\d/); // возвращает массив ['test-A', 'test-B', 'test-C', 'test-D']
  document.write(res);
}

//
// Приклад 6.
{
  // Метод exec работает точно так же как и метод match типа данных string.
  // Но всегда возвращает только одно значение или null
  // При глобальном поиске (флаг g) метод возвращает найденную подстроку и продолжает поиск далее по строке, тобто продовжується робота циклу, допоки він не отримає значення null і не вийде із циклу
  const test =
    "Строка №2 для тестирования пр8имера с регулярными выражениями в файле 6_RegExMethods_exec.htm";
  const pattern = /\d/g;

  let res;
  while ((res = pattern.exec(test)) != null) {
    alert(`Найдено ${res} в позиции ${res.index}  Следующий поиск 
            начнется с индекса ${pattern.lastIndex}`);
  }
}

//
// Приклад 7.
{
  // Метод test возвращает true если метод exec возвращает не null;
  const pattern = /\d\d\d/;

  let input = "hello 12 1 11 world";
  if (pattern.test(input)) {
    // Повертає false, оскільки не відповідає паттерну
    document.write(`Строка ${input} соответствует шаблону<br />`);
  } else {
    document.write(`Строка  ${input}  НЕ соответствует шаблону<br />`);
  }

  input = "nkjsbgilvfjdgkvjre123";
  if (pattern.test(input)) {
    // Повертає true
    document.write(`Строка ${input} соответствует шаблону<br />`);
  } else {
    document.write(`Строка ${input} НЕ соответствует шаблону<br />`);
  }
}

//
//
// Приклад 8.
{
  // Метасимволы.
  // За допомогою метасимволыв ми можемо робити перевірку регулярних виразів
  //
  //
  // \w Любой алфавитно-цифровой символ в верхнем и нижнем регистре и символ подчеркивания(тоже самое, что и [a-zA-Z0-9_]).
  // \W Любой символ не являющийся подчеркиванием и не относящийся к алфавитно-цифровым
  // \s любой пробельный символ (тоже самое, что [\r\n\f\v\t])
  // \S Любой не пробельный символ (тоже самое, что [^\r\n\f\v\t])
  // \d любая цифра (digit)
  // \D любой не цифровой символ (тоже самое, что [^0-9])
  //
  //
  // Наборы символов
  // [RrGgBb] - Соответствие указанным символам
  // [a-z] Соответствие символам английского алфавита в нижнем регистре
  // [0-9] Соответствие указанным цифрам
  // [^0-9] Соответствие с чем угодно кроме цифр заданного диапазона
  //
  //
  // Квантификатор (Кванторы)
  // + Один или несколько символов
  // * ноль и более символов
  // ? ноль или одно вхождение
  //
  //
  // Интервалы
  // {3} точное количество совпадений
  // {2,3} диапазон
  // {3,} не менее
  // {,3}  не более
  //
  //
  // Якорные символы
  // ^  Начало строки
  // $  Конец строки
  // \b соответствует границе слова
  //
  //
  // Флаги
  // i выполнение поиска не чувствительного к регистру. /[a-z]/ig
  // g выполнение глобального поиска.

  //
  //
  // Сайт для перевірки, чи працюють регулярні вирази: regexr.com 
}

//
// Приклад 9.
{
    let pattern = /\d{1,2}-\d{1,2}-\d{4}/; // 
        let text = "01-02-1194";
        document.write(text + " -> " + pattern.test(text) + "<br />");

       
        pattern = /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
        text = "+38 (093) 238-25-55";
        document.write(text + " -> " + pattern.test(text) + "<br />");

        // Иванов Иван 
        pattern = /[а-яА-Я]+[А-я]+/;
        text = "Иванов  Иванов";
        document.write(text + " -> " + pattern.test(text) + "<br />");

        // ivanov.ivan@example.com
        pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi;   
        text = "ivanov.ivan@example.com";
        document.write(text + " -> " + pattern.test(text) + "<br />");
}