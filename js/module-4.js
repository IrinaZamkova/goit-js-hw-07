
// const btnIncrRef = document.querySelector("[data-action=increment]");
// const btnDecRef = document.querySelector("[data-action=decrement]");

// let counterValue = 0;

// const counterRef = document.querySelector(`#value`);

// btnDecRef.addEventListener(`click`, () => {
//   counterRef.textContent = counterValue -= 1;
// });

// btnIncrRef.addEventListener(`click`, () => {
//   counterRef.textContent = counterValue += 1;
// });

// это вариант чтоб не использовать однообразную функцию посмотрите пожалуйста 

 const refs = {
  tags: document.querySelector("#counter"),
};
refs.tags.addEventListener(`click`, counterClick);

const counterRef = document.querySelector(`#value`);
let counterValue = 0;
function counterClick(event) {
  if (event.target.nodeName !== `BUTTON`) {
    return;
  }

  event.target.dataset.action === "increment"
    ? (counterRef.textContent = counterValue += 1)
    : (counterRef.textContent = counterValue -= 1);
}
