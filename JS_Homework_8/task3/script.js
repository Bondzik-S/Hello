/* Створіть багаторядкове поле для введення тексту та кнопки. Після натискання кнопки користувачем програма повинна згенерувати тег div з текстом, який був у багаторядковому полі. багаторядкове поле слід очистити після переміщення інформації */

const btn = document.getElementsByTagName("button")[0];
const textArea = document.getElementById("textInput");

btn.onclick = function () {
  const text = textArea.value;
  if (text.trim() !== "") {
    var newDiv = document.createElement("div");
    newDiv.textContent = text;

    document.body.appendChild(newDiv);

    textArea.value = "";

    textArea.remove();
    btn.remove();
  }
};
