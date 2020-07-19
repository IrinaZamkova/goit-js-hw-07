const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const itemListRef = document.querySelector(`#ingredients`);

const item = ingredients.map((ingredient) => {
  const itemRef = document.createElement(`li`);
  itemRef.textContent = ingredient;
  return itemRef;
});

itemListRef.append(...item);
