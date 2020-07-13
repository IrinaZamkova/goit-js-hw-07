
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const itemListRef = document.querySelector(`#ingredients`);

for (const ingredient of ingredients) {
  const itemRef = document.createElement(`li`);
  itemRef.textContent = ingredient;
  itemListRef.appendChild(itemRef);
}
