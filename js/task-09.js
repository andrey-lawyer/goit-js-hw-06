function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColorEl = document.querySelector(".change-color");
const widgetEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");

const handleClick = () => {
  widgetEl.style.backgroundColor = getRandomHexColor();
  // console.log(getRandomHexColor());
  colorEl.textContent = getRandomHexColor();
};

buttonColorEl.addEventListener("click", handleClick);
