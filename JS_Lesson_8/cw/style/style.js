const input = document.createElement("input");

input.placeholder = "Введіть кількість елементів ...";
const btn = document.createElement("button");
btn.innerText = "Намалювати";

document.body.append(input, btn);

btn.onclick = function () {
  const num = parseInt(input.value);

  if (num < 10) {
    alert("Введіть число більше 10");
    return;
  }
  divCreated(num);
  btn.remove();
  input.remove();
};

function divCreated(quantity) {
  for (let i = 0; i < quantity; i++) {
    const div = document.createElement("div");
    div.innerText = `#${i + 1}`;

    div.style.backgroundColor = `hsl(${Math.floor(
      Math.random() * 361
    )}, 100%,50%)`;
    document.querySelector(".screen").append(div);

    div.onclick = function () {
      div.remove();
    };
  }
}
