'use strict';

const header = document.querySelector('.header-section');
const offer = document.querySelector('.what-we-offer');
const offerRect = offer.getBoundingClientRect();

// console.log('event-1', offerRect.y);

window.addEventListener('scroll', () => {
  // console.log('event', scrollY);
  // console.log('event-1', offerRect.top);

  if (scrollY > offerRect.y) {
    // console.log('entered');
    header.classList.add('header');
  } else {
    // console.log('exited');
    header.classList.remove('header');
  }
});

const taskInputBtn = document.querySelector('.create-task-btn');
taskInputBtn.addEventListener('click', () => {
  const taskInput = document.querySelector('.task-input');
  console.log('task-input: ', taskInput.value);
});
