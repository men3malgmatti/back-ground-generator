var main = document.querySelector("#main");
var firstInput = document.querySelector("#first-input");
var secondInput = document.querySelector("#second-input");
var h3 = document.querySelector("h3");
var btn = document.querySelector("button");

function changeColor() {
  main.style.background =
    "linear-gradient(to right," +
    firstInput.value +
    "," +
    secondInput.value +
    ")";
  updateH3();
}
function updateH3() {
  h3.textContent =
    "linear-gradient(to right," +
    firstInput.value +
    "," +
    secondInput.value +
    ")";
}

document.addEventListener("DOMContentLoaded", updateH3);

firstInput.addEventListener("input", changeColor);

secondInput.addEventListener("input", changeColor);

btn.addEventListener("click", () => {
  firstInput.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  secondInput.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  changeColor();
  updateH3();
});
