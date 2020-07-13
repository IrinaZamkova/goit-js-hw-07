const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener(`focus`, onFocus);
inputRef.addEventListener(`blur`, onBlur);

function onBlur() {
  const eventLength = event.target.value.length;
  const inputDataLength = inputRef.getAttribute(`data-length`);
  if (eventLength == inputDataLength) {
    inputRef.classList.add(`valid`);
  } else inputRef.classList.add(`invalid`);
  console.log(inputRef);
}
function onFocus() {
  inputRef.classList.remove(`valid`, `invalid`);
  event.target.value = "";
}
