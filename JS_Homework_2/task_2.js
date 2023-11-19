// Переписати код зі спеціальним знаком "?"

var message;

var login = prompt('Введите логин');

// if (login == 'Вася') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

message = login == 'Вася' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
        login == '' ? 'Нет логина' : '';

console.log(message);