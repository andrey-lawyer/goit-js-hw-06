const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
const arrayItemEl = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  itemEl.className = "item";
  console.log(itemEl);
  return itemEl;
});
// console.log(ingredients);
ingredientsEl.prepend(...arrayItemEl);
