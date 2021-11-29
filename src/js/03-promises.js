import Notiflix from "notiflix";

const formBlock = document.querySelector(".form");

formBlock.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const { delay, step, amount }  = event.currentTarget;

  let currentDelay = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountP = Number(amount.value);

  for (let position = 1; position <= amountP; position++) {
    createPromise(position, currentDelay);
    console.log("delayPromise", currentDelay, "position", position);
    currentDelay += stepNumber;
  };
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
  });

  promise
  .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};