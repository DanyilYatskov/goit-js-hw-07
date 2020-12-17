const InputHandler = function (event) {
  const outputRef = document.querySelector('#name-output');
  outputRef.textContent =
    event.target.value === '' || event.target.value === ' '
      ? 'незнакомец'
      : event.target.value;
};
const inputRef = document.querySelector('#name-input');
inputRef.addEventListener('input', InputHandler);
