'use strict';

const header = document.querySelector('.header-section');
const offer = document.querySelector('.what-we-offer');
const offerRect = offer.getBoundingClientRect();

console.log('event-1', offerRect.y);

window.addEventListener('scroll', () => {
  console.log('event', scrollY);
  console.log('event-1', offerRect.top);

  if (scrollY > offerRect.y) {
    console.log('entered');
    header.classList.add('header');
  } else {
    console.log('exited');
    header.classList.remove('header');
  }
});
