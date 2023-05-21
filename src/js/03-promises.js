import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector('[name=delay]');
const delayStep = document.querySelector('[name=step]');
const counter = document.querySelector('[name=amount]');
const submit = document.querySelector('.form');

submit.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  let delay = +firstDelay.value;
  let step = +delayStep.value;
  let amount = +counter.value;
  let position = 0;
  delay = delay - step;
  submit.reset();
  for (let i = 0; i < amount; i += 1) {
    position = i + 1;
    delay += step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
