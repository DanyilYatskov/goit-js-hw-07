const fontSizeControlRef = document.querySelector('#font-size-control');
function fontSizeChangeHandler(event) {
  const sizeNumberRef = document.querySelector('.js-task-7 .font-size-number');
  const textRef = document.querySelector('.js-task-7 #text');
  const fontSizeValue = event.target.value;
  textRef.style['font-size'] = fontSizeValue + 'px';
  sizeNumberRef.textContent = fontSizeValue + 'px';
}
fontSizeControlRef.addEventListener('input', fontSizeChangeHandler);
