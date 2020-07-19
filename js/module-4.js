
const btnIncrRef = document.querySelector("[data-action=increment]");
const btnDecRef = document.querySelector("[data-action=decrement]");

let counterValue = 0;

const counterRef = document.querySelector(`#value`);

btnDecRef.addEventListener(`click`, () => {
  counterRef.textContent = counterValue -= 1;
});

btnIncrRef.addEventListener(`click`, () => {
  counterRef.textContent = counterValue += 1;
});

