const fontSizeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
fontSizeInputEl.addEventListener("input", (event) => {
  //   console.log(fontSizeInputEl.value);
  textEl.style.fontSize = `${fontSizeInputEl.value}px`;
});
