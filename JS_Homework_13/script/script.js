/*
Створіть сайт з коментарями. 

Коментарі тут : https://jsonplaceholder.typicode.com/ 
Сайт має виглядати так : https://kondrashov.online/images/screens/120.png 

* На сторінку виводити по 10 коментарів, у низу сторінки зробити поле пагінації (перемикання сторінок)
* При перемиканні сторінок показувати нові коментарі.  
* З коментарів виводити :  "id": 1, "name" "email" "body":
*/

const comment = document.querySelector('.comment');
const pagination = document.querySelector('.pagination');
const itemsPerPage = 10; // Кількість коментарів на сторінці
let currentPage = 1;

function req(method = 'GET', url='', callback){

    const r = new XMLHttpRequest();

    r.open(method, url);
    r.send();
    r.addEventListener('readystatechange', () => {
        if(r.readyState === 4 && r.status >= 200 && r.status < 300) {
            callback(JSON.parse(r.responseText));
        } else if (r.readyState === 4) {
            console.error('Помилка з запитом');
        }
    })

}

function displayData(page, data){
    comment.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentPageData = data.slice(start, end);

    currentPageData.forEach((el) => {
        const currentDate = new Date();
        const randomDate = new Date(currentDate.getTime() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000);

        // Отримуємо компоненти дати (день, місяць, рік)
        const day = String(randomDate.getDate()).padStart(2, '0');
        const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Місяці в JavaScript нумеруються з 0, тому додаємо 1
        const year = randomDate.getFullYear();

        // Формуємо рядок для виведення рандомної дати
        const formattedRandomDate = `${day}.${month}.${year}`;

            const string = `
            <div class = 'main-block'>
            <span id = 'id'></span>
            <div class = 'head'>
                <span id = 'name'>${el.id}. ${el.name}</span> 
                <span>Дата коментарю: ${formattedRandomDate}</span>
            </div>
            </br>

            <span>${el.email}</span> </br>
            <span>${el.body}</span>

            <a href="">Відповісти</a>
            </div>`

            comment.insertAdjacentHTML('beforeend', string);
            
        }   
    );
    
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Додає плавність прокрутки
    });
}

function displayPagination(totalPages) {
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        li.addEventListener('click', function () {
            currentPage = i;
            displayData(currentPage, allComments);
            scrollToTop();  // Викликаємо функцію прокрутки на початок сторінки
        });
        pagination.appendChild(li);
    }
}

let allComments = [];

const show = (data = []) => {
    allComments = data;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    displayData(currentPage, data);
    displayPagination(totalPages);
    //data.forEach
}

req('GET', 'https://jsonplaceholder.typicode.com/comments', show);