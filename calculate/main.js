const values = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");

values.forEach((number) => {
  number.addEventListener("click", () => {
    const clickNumber = number.getAttribute("value");
    let num = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = num + clickNumber;
  });
});

const btncleanOne = document.querySelector(".cleanOne");
btncleanOne.addEventListener("click", () => {
  let num = document.querySelector(".tela").innerHTML;
  document.querySelector(".tela").innerHTML = num.substring(0, num.length - 1);
});

const btnClean = document.querySelector(".clean");
btnClean.addEventListener("click", () => {
  document.querySelector(".tela").innerHTML = "";
  document.querySelector(".result").innerHTML = "";
});

const simIgual = document.querySelector(".igual");
const total = document.querySelector(".total");
total.addEventListener("click", () => {
  let result = document.querySelector(".tela").innerHTML;

  if (result) {
    document.querySelector(".result").innerHTML = eval(result);
    simIgual.innerHTML = "=";
  }
});
