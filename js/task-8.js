const controlsRef = document.querySelector('#controls');
const renderBtnRef = controlsRef.querySelector('button[data-action="render"]');
const destroyBtnRef = controlsRef.querySelector(
  'button[data-action="destroy"]',
);
const numberInputRef = controlsRef.querySelector('#number');
const boxesDivRef = document.querySelector('#boxes');
let size = 20;

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}
function createBoxes(amount) {
  let boxesToRender = [];
  for (let i = 1; i <= amount; i += 1) {
    const boxRef = document.createElement('div');
    size += 10;
    boxRef.style.width = size + 'px';
    boxRef.style.height = size + 'px';
    boxRef.classList.add('box');
    boxRef.style['background-color'] = randomColor();
    boxRef.style['margin'] = 5 + 'px';
    boxesToRender.push(boxRef);
  }
  return boxesToRender;
}
function destroyBoxes() {
  const boxesToRemove = boxesDivRef.querySelectorAll('.box');
  boxesToRemove.forEach(box => box.remove());
  size = 20;
}
function renderEventHandler(event) {
  const numberOfBoxes = numberInputRef.value;
  boxesDivRef.append(...createBoxes(numberOfBoxes));
}

renderBtnRef.addEventListener('click', renderEventHandler);
destroyBtnRef.addEventListener('click', event => destroyBoxes());
