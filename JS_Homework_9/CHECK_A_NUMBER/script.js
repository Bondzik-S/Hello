const checkButton = document.querySelector(".button");
const input = document.querySelector(".input");
const errorMessage = document.querySelector("#error-message");

const phonePattern = /^0\d{9}$/;

const rightUnsver = () => {
  document.location.href =
    "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
};

checkButton.onclick = () => {
  if (phonePattern.test(input.value)) {
    // input.style.backgroundColor = "lightgreen";
    input.classList.remove("wrong");
    input.classList.add("right");
    errorMessage.textContent = "";
    setTimeout(rightUnsver, 3000);
  } else {
    // const errorMessage = querySelector("#error-message");
    errorMessage.textContent = "Не вірний формат номеру телефону";
    // input.style.backgroundColor = "red";
    input.classList.remove("right");
    input.classList.add("wrong");
  }
};
