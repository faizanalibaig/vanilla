'use strict';

const header = document.querySelector('.header');
const extraSection = document.querySelector('.extra');

window.addEventListener('scroll', () => {
  const extraSectionDetails = extraSection.getBoundingClientRect();
  console.log(scrollY);
  console.log(extraSectionDetails.top);
  if (scrollY > extraSectionDetails.top) {
    console.log('entered');
    if (!header.classList.contains('main-header')) {
      header.classList.add('main-header');
    }
  }
});
