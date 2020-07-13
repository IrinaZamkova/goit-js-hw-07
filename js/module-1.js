

const listUlRef = document.querySelectorAll(`.item`);
console.log(`В списке ${listUlRef.length} категории`);

listUlRef.forEach((element) =>
  console.log(` Категория: ${element.firstElementChild.textContent} 
 Количество элементов: ${element.childNodes[3].children.length}`),
);
