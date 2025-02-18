'use strict';

const counter = document.querySelector('.counter');
const counterNumber = document.querySelector('.counter-number');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const increase = document.querySelector('.increase-count');
const currentCount = document.querySelector('.current-count');

// function count(){

// }

increment.addEventListener('click', function (e) {
  const current = Number.parseInt(currentCount.textContent) || 1;
  const counter = Number.parseInt(counterNumber.textContent);

  console.log(counter, current);

  counterNumber.textContent = counter + current;
});

decrement.addEventListener('click', function (e) {
  const current = Number.parseInt(currentCount.textContent) || 1;
  const counter = Number.parseInt(counterNumber.textContent);

  if (counter > 0) {
    counterNumber.textContent = parseInt(counterNumber.textContent) - current;
  }
});

increase.addEventListener('click', function (e) {
  const current = Number.parseInt(currentCount.textContent);
  currentCount.textContent = current + 1;
});
