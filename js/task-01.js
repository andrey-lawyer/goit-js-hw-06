const categoryEl = document.querySelector("#categories");
const itemCategoryEl = categoryEl.querySelectorAll(".item");

console.log(`Number of categories: ${itemCategoryEl.length}`);

itemCategoryEl.forEach((el) => {
  //   console.log(el);
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
