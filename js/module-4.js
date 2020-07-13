const btnDecRef = document.querySelector("[data-action=decrement]");
const btnIncrRef = document.querySelector("[data-action=increment]");

let counterValue = 0;

const counterRef = document.querySelector(`#value`);

btnDecRef.addEventListener(`click`, () => {
  counterRef.textContent = counterValue -= 1;
});

btnIncrRef.addEventListener(`click`, () => {
  counterRef.textContent = counterValue += 1;
});
