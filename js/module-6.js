const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener(`focus`, onFocus);
inputRef.addEventListener(`blur`, onBlur);

function onBlur() {
  const eventLength = event.target.value.length;
  const inputDataLength = inputRef.getAttribute(`data-length`);
  eventLength == inputDataLength? inputRef.classList.add(`valid`):inputRef.classList.add(`invalid`);
  }
  
function onFocus() {
  inputRef.classList.remove(`valid`, `invalid`);
}
