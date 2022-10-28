const validationInputEl = document.querySelector("#validation-input");
// let counter = 0;
// validationInputEl.addEventListener(
//   "input",
//   (event) => {
//     if (event.currentTarget.value === "") {
//       counter = 0;
//     } else {
//       counter += 1;
//     }
//   },

validationInputEl.addEventListener("blur", () => {
  if (validationInputEl.value.length == validationInputEl.dataset.length) {
    // console.log(validationInputEl.value.length);
    validationInputEl.className = "valid";
  } else {
    validationInputEl.className = "invalid";
  }
});
