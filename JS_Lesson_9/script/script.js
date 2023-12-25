// Повторити про var (локальні/глобальні змінні)

// Регулярні вирази. Таймери. DHTML.

// За допомогою регулярних виразів ми можемо шукати якусь інформацію. Регулярні вирази потрібні для перевірки інформації і пошуку в строці, що вводить користувач.
// Регулярні вирази існують в багатьох мовах програмування і працюють однаково

// Приклад 1.
{
    // Определение регулярного выражения через литерал
    const pattern1 = /\d\d\d/;
       

    // Определение регулярного выражения через класс RegExp
    const pattern2 = new RegExp("\d\d\d");

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
    if(firstIndex === -1){
        throw new Error("Пошук без успіху :(") // throw - використовується для "викидання помилок", які ломають код
    }else if (firstIndex >= 0){
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
    
    window.onload = () => document.getElementById("root").insertAdjacentHTML("beforeend", `<div>${result}</div>`)

    // beforeend - виведе перед закриваючим тегом

    //insertAdjacentHTML() - метод вбудовування в html
}