const validationInputRef = document.querySelector('#validation-input');
const inputChangeHandler = function (event) {
  const validationText = event.target.value;
  if (validationText.length !== Number(validationInputRef.dataset.length)) {
    validationInputRef.classList.remove('valid');
    validationInputRef.classList.add('invalid');
    return;
  }
  validationInputRef.classList.remove('invalid');
  validationInputRef.classList.add('valid');
};
validationInputRef.addEventListener('change', inputChangeHandler);
