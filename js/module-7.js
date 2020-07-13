
const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputRef.addEventListener(`input`, () => {
  spanText.style.fontSize = `${inputRef.value / 3}px`;
});
