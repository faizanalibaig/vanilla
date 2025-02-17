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
  const taskTitle = document.querySelector('.task-title');
  const box = document.querySelector('.block-of-offers');

  const boxChild = document.createElement('div');
  boxChild.classList.add('box');

  const title = document.createElement('h1');
  title.textContent = taskTitle.value;
  title.classList.add('task-heading');
  boxChild.appendChild(title);

  const paragraph = document.createElement('p');
  paragraph.textContent = taskInput.value;
  paragraph.classList.add('task-paragraph');
  boxChild.appendChild(paragraph);

  box.appendChild(boxChild);

  taskInput.value = '';
  taskTitle.value = '';

  console.log('task-input: ', taskInput.value, taskTitle.value);
  console.log('Box: ', box.children);
});
