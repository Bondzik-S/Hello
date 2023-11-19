// Масиви

// Ми можемо додавати до масиву, як строкові значення, так і числові, але ми не можемо замінювати масив на щось інше.
// Для того, щоб перевірити тип даних елемента, можна скористатися ф-цією typeof
// Індекси в масиві починаються з 0

// Приклад 1

// const string = ['hello world'];

// string [1] = 4;

// console.log(string);


// Приклад 2

// const arr = []; // порожній масив

// for (let i = 0; arr.length <br 100; i++){
//     arr[i] = i+1;
// }


// Приклад 3 створення масиву через метод Array().

/* const arr1 = new Array();

console.log(arr);
console.log(arr1); */


// Приклад 4. Вкладені масиви
// В масивах можна створювати інші масиви. Для цього потрібно просто в батьківському масиві написати квадратні дужки і прописати масив з будь-яким типом даних.

// const uk = [[],[], 2, "", null, []];


// Приклад 5.
// Метод .join() обʼєднує всі елементи масиву в одну строку, дозволяє за допомогою нього різними методами виводити масив на екран.

// docunemt.write("<br>" + arr.join("")); Масив виводиться без роздільника (коми), можна використовувати спеціальні символи

{
    const arr = ["September", "October", "November", "December", "January", "Fabruary", "March", "April", "May", "June", "Jull", "August"];

    document.write("<ul> <li>"); // Створюється ліст

    var rez = arr.join("</li><li>"); // Генерується список із масиву
    document.write(rez);

    document.write("</li></ul>"); // Виводиться на екран
}


// Приклад 6.

{
    /* concat() - створює і повертає новий масив, який має елементи батьківського масиву, для якого був визваний метод concat(), і значення всіх аргументів передані методу concat().

    НЕ ПРАЦЮЄ НА ВКЛАДЕНИХ МАСИВАХ! Робить все одно один масив, виводячи вкладені в батьківський*/

    const a = [1, 2, 3];

    const b = a.concat(4, 5);
    document.write("<p>" + b );  // 1,2,3,4,5


    const c = b.concat(6, 7, [8, 9]);
    document.write("<p>" + c.join("&nbsp;"));  // 1,2,3,4,5,6,7,8,9
}


// Приклад 7.

{
    /* В JavaScript є метод  toString(). Для масиву, цей метод дозволяє відображати кожен елемент в строці (викликаючи необхідність в методі toString() елементів масиву) і виводити список цих строк через кому. 

    ВАЖЛИВО, що результат не включає квадратні дужки або інші розділювачі навколо значень масиву.*/

    var arr = [1,2,3].toString()            // Получается'1,2,3 'ToString 
    var arr2 = ["а","б", "в"]  // Получается'a, б, в' 
    var arr3 = [1 , [2, 'с']]   // Получается'1,2, с»
    console.log('arr : ' +arr +', arr2 : '+ arr2 +', arr3 : '+ arr3);
    var a = [1,2,["a","b"],3].toString();

    document.write(arr2);
}


// Приклад 8.

{
    /* reverse() - міняє порядок слідування елементів масиву на протилежний і повертає пересортований масив. */

    const arr = ["<div class='red'>hello</div>","<div class='blue'>World</div>", "<div>!</div>"];

    var a = new Array(1, 2, 3, 4, 5, 6, 7);

    a.reverse();  // Меняет порядок следования элементов массива на противоположный.

    document.write(a.join(" - "));
}


// Приклад 8.

{
    /* slice() - повертає фрагмент або підмасив вказаного елементу (робить його копію) */

    const a = [1, 2, 3, 4, 5, 6, 7];

    // slice (початковий індекс (включно), кінцевий індекс (не включно))
    let temp = a.slice(0, 4); // возвращает первые три элемента 1, 2, 3

    if(Array.isArray(Array)){ // метод isArray() перевіряє, чи прийшов до нього масив
        document.write("<p>" + temp);
    }else{
        console.error("Це не масив!")
    }
        

    // slice(початковий індекс); - повертає підмасив від вказаного індексу до кінця масиву.
    temp = a.slice(3); // 4, 5, 6, 7
    document.write("<p>" + temp);


    // Якщо аргумент відʼємний - він задає позицію відносно кінця масиву.
    temp = a.slice(1, -1); // 2, 3, 4, 5, 6 (з першого індексу до передостаннього (-1))
    document.write("<p>" + temp);
}


// Приклад 9.

{
    /* Метод splice() - універсальний метод для вставки та видалення елементів із масиву.

    Основна відмінність від методу slice() полягає в тому, що даний метод вирізає елементи з масиву, тим самим змінюючи його і вирізані елементи зберігає окремо (копію) */

    var a = [1, 2, 3, 4, 5, 6, 7];
    document.write("<p>Исходный массив: " + a);

    // УДАЛЕНИЕ.
            
    var d = a.splice(1, 3);   // Починаючи з першого індексу, видалити 3 елементи, ящо другий аргумент не вказати (другу цифру), то видаляться всі елементи масиву, починаючи із вказаного.
    document.write("<p>Удалены: " + d);
    document.write("<p>Остались: " + a);

    // ВСТАВКА.       

    a.splice(1, 0,6, 2, 3, 150, 458, 8); // видалити всі елементи починаючи з першого індексу (1,0,...), і додати наступні (..., 6, 2, 3, 150, 458, 8)
    document.write("<p>После вставки: " + a);
}


// Приклад 10.

/* sort() - метод, який сортує елементи масиву в алфаівітному порядку (при необхідності перетворюючь елементи в строки для виконання порівняння). 

ВАЖЛИВО! даний метод не працює корентно для чисел, для цього потрібно вказувати додаткові ф-ції*/

{
    const a = [8,1, 100, 4, 11, 2, 9, 99, 5, 4, 3, 22,33, 4.56, 234, 2,75];

    a.sort();
    document.write(a.join("<p>"));


    document.write("<hr/>");


    const s = ["January", "February", "March", "April", "May", "A", "a"];

    s.sort();
    document.write(s.join("<p>"));
}


// Приклад 11.

/* push() - метод, який додає один або декілька елементів в кінець масиву і повертає його нову довжину (повертаюче значення - кількість елементів в новому масиві) */

{
    var stack = ["January", "February", "March"];
    document.write("<p>Исходный: " + stack.join(" "));
    document.write("<p>Размер массива: " + stack.length);

    document.write("<hr/>");

    var lenght = stack.push("April"); // додає April в кінець
    document.write("<p>После добавления: " + stack.join(" "));
    document.write("<p>Размер массива: " + lenght);

    document.write("<hr/>");

    lenght = stack.push("May", "June"); // додає May і June
    document.write("<p>После добавления: " + stack.join(" "));
    document.write("<p>Размер массива: " + lenght);
}


// Приклад 12.

/* pop() - видаляє останній елемент масиву, тим самим зменшуючи його розмір (лише один, не має аргументів) */
{
    var stack = ["January", "February", "March", "April", "May", "June"]; 
    document.write("<p>Исходный: " + stack.join(" "));
    document.write("<p>Размер массива: " + stack.length);

    document.write("<hr/>");

    var lenght = stack.pop();       
    document.write("<p>После pop: " + stack.join(" "));
    document.write("<p>Удаленный элемент: " + lenght);
    document.write("<p>Размер массива после удаления: " + stack.length);
}

// Приклад 13.

/* shift - видаляє перший елемент масиву, та зміщує попередні на початок */
{
    var arr = [1, 2, 3];

    document.write("<p>Исходный массив: " + arr.join(" "));
    document.write("<hr/>");

    var value = arr.shift();

    document.write("<p>Массив после сдвига: " + arr.join(" "));
    document.write("<p>Выдвинутое значение: " + value);
}

// Приклад 14.

/* unshift() - додає елементи (можна декілька) на початок масиву та зміщує наступні в сторону більших індексів, повертає нову довжину масиву */
{
    var arr = [1, 2, 3];
    document.write("<p>Исходный массив: " + arr.join(" "));

    document.write("<hr/>");

    arr.unshift(0);
    document.write("<p>Массив после сдвига: " + arr.join(" "));

    document.write("<hr/>");

    arr.unshift(-3, -2, -1);
    document.write("<p>Массив после сдвига: " + arr.join(" "));
}