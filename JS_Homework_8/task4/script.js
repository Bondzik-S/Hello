/* Створіть картинку та кнопку з назвою "Змінити картинку" зробіть так щоб при завантаженні сторінки була картинка https://itproger.com/img/courses/1476977240.jpg При натисканні на кнопку вперше картинка замінилася на https://itproger.com/img/courses/1476977488.jpg при другому натисканні щоб картинка замінилася на https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png */

let imageIndex = 0;
const images = [
  "https://itproger.com/img/courses/1476977240.jpg",
  "https://itproger.com/img/courses/1476977488.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
];

const btn = document.getElementById("myBtn");
myImage.src = images[imageIndex];

btn.onclick = function () {
  const myImage = document.getElementById("myImage");

  myImage.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
};
