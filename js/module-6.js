const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener(`focus`, onFocus);
inputRef.addEventListener(`blur`, onBlur);

function onBlur() {
  event.target.value.length == inputRef.getAttribute(`data-length`)? inputRef.classList.add(`valid`):inputRef.classList.add(`invalid`);
  }
  
function onFocus() {
  inputRef.classList.remove(`valid`, `invalid`);
}
