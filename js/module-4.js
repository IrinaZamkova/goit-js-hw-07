const btnRef = document.querySelectorAll("[type=button]");
// const btnIncrRef = document.querySelector("[data-action=increment]");

let counterValue = 0;

const counterRef = document.querySelector(`#value`);

// btnDecRef.addEventListener(`click`, () => {
//   counterRef.textContent = counterValue -= 1;
// });

// btnIncrRef.addEventListener(`click`, () => {
//   counterRef.textContent = counterValue += 1;
// });
btnRef.addEventListener(`click`, (event) =>{
 event.currentTarget.dataset.value ==="increment"?
 counterRef.textContent = counterValue -= 1: counterRef.textContent = counterValue += 1})