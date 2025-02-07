'use strict';

const header = document.querySelector('.header');
const extraSection = document.querySelector('.extra');
const btn = header.children[1].childNodes;
const finalBtn = btn[1].childNodes[7];

finalBtn.addEventListener('click', e => {
  console.log('Button clicked');
  // e.stopPropagation();
});

header.addEventListener(
  'click',
  e => {
    console.log('Actual Element: ', e.target);
    console.log(e, 'Click: ', e.currentTarget);
  },
  true
);

window.addEventListener('scroll', () => {
  const extraSectionDetails = extraSection.getBoundingClientRect();
  console.log('extra section details: ', extraSectionDetails);
  console.log('Y: ', scrollY);

  console.log('top: ', extraSectionDetails.top);
  if (scrollY > extraSectionDetails.top + scrollY) {
    console.log('entered');
    if (!header.classList.contains('main-header')) {
      header.classList.add('main-header');
    }
  } else {
    header.classList.remove('main-header');
  }
});
