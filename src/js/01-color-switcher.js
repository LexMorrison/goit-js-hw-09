const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

buttonStart.addEventListener('click', buttonOnStart);
buttonStop.addEventListener('click', buttonOnStop);
buttonStop.setAttribute('disabled', true);

function buttonOnStart(evt) {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');
}

function buttonOnStop(evt) {
  clearInterval(timerId);
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
