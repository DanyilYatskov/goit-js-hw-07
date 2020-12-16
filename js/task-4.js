let counterValue = 0;
const decrement = () => (counterValue -= 1);
const increment = () => (counterValue += 1);
const counterRef = document.querySelector('#counter');
const decrementBtnRef = counterRef.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnRef = counterRef.querySelector(
  'button[data-action="increment"]',
);
const valueRef = counterRef.querySelector('#value');
decrementBtnRef.addEventListener(
  'click',
  () => (valueRef.textContent = decrement()),
);
incrementBtnRef.addEventListener(
  'click',
  () => (valueRef.textContent = increment()),
);
