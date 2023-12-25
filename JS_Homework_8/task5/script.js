/* Створює на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав */

const paragraph = document.getElementsByClassName("paragraph");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 361
  )}, 100%,50%)`;

  paragraph[i].onclick = function () {
    this.remove();
  };
}
