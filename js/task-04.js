let counterValue = 0;
const buttonClickEl = document.querySelectorAll("[data-action]");
const valueEl = document.querySelector("#value");
// const buttonIncrementEl = document.querySelector("increment");

const handleClickAdd = () => {
  counterValue += 1;
  buttonClickEl[1].textContent = counterValue;
  // buttonClickEl[0].textContent = counterValue;
  valueEl.textContent = counterValue;
  console.log("Button was clicked");
};
const handleClickSub = () => {
  counterValue -= 1;
  buttonClickEl[0].textContent = counterValue;
  // buttonClickEl[1].textContent = counterValue;
  valueEl.textContent = counterValue;
  console.log("Button was clicked");
};

buttonClickEl[1].addEventListener("click", handleClickAdd);
buttonClickEl[0].addEventListener("click", handleClickSub);
