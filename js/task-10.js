function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let counter = 0;
let array = [];
const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");
console.log(inputEl);

const createBoxes = (amount) => {
  let widthEl = 30;
  let heightEl = 30;
  let arrayDiv = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    arrayDiv.push(divEl);
    if (i === 0) {
      divEl.style.width = `${widthEl}px`;
      divEl.style.height = `${heightEl}px`;
    } else {
      divEl.style.width = `${(widthEl += 10)}px`;
      divEl.style.height = `${(heightEl += 10)}px`;
    }
    divEl.style.backgroundColor = getRandomHexColor();
    console.log(arrayDiv[i]);
  }
  divBoxesEl.prepend(...arrayDiv);
};
const destroyBoxes = () => {
  const divEl = divBoxesEl.querySelectorAll("div");
  console.log(divEl);
  divEl.forEach((el) => el.remove());

  // divBoxesEl.childNodes.forEach((el) => el.remove());
};
const event1 = inputEl.addEventListener("change", (event) => {
  counter = inputEl.value;
});

buttonCreateEl.addEventListener("click", (event) => {
  destroyBoxes();
  createBoxes(counter);
});
buttonDestroyEl.addEventListener("click", (event) => {
  destroyBoxes();
  inputEl.value = 0;
});
