// Math.floor(random() * 19); - знаходження випадкового числа. Метод floor() округлює число до цілого.

// Задача 8.
{
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);

    document.write(arr);
}

// Задача 4.
{
    const arr = [1, 2, 3];
    arr.push(4, 5, 6);

    document.write('<div>' + arr);
}

// Задача 18.
{
    var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];

    // Ваш код 
    var str1 = vegetables.join(", ");

    document.write('<div>' + str1); // "Капуста, Ріпа, Редиска, Морковка"
}

// Задача 13.
{
    const arr = [1, 2, 3, 4, 5];
    const arr2 = new Array(1, 2, 3, 4, 5);

    document.write('<div>' + arr);
    document.write('<div>' + arr2);
}

// Задача 7.
{
    const arr = [1, 2, 3, 4, 5];

    let temp = arr.slice(0, 3);

    document.write('<div>' + temp);
}

// Задача 14.
{
    var arr = [
              ['блaкитний', 'червоний', 'зелений'],
              ['blue', 'red', 'green'],
            ];

    document.write('<div>' + arr[0][0] + ' ' + arr[1][0]);
}

// Задача 16, 17.
{
    const num = +prompt('Введіть кількість елементів масиву'); // +prompt - переводить дані в число

    const arr = new Array(num);

    for (let i=0; i<num; i++){
        if (i % 2 > 0){ // непарні
            document.write('<p>' + i + '</p>');
        }else{
            document.write('<span>' + i + "</span>");
        }

        // if (i % 2 === 0){ // парні
        //     document.write('<p>' + i);
        // }
        
        //arr.push(i); в даному випадку, оскілки сасив створений, кількість елементів дублюється і показує пусті індекси
        arr[i] = i;
    }

    document.write('<div>' + arr);
}