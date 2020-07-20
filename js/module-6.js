const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener(`focus`, onFocus);
inputRef.addEventListener(`blur`, onBlur);

function onBlur() {
  if (event.target.value.length == inputRef.getAttribute(`data-length`)) {
    return inputRef.classList.add(`valid`);
  }
  return inputRef.classList.add(`invalid`);
}

function onFocus() {
  inputRef.classList.remove(`valid`, `invalid`);
}
