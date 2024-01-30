const toggle = document.querySelector('.site-nav__toggler');
const menu = document.querySelector('.site-nav');
const header = document.querySelector('.header');

export const toggleClickHandler = () => {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('site-nav--closed');
    header.classList.toggle('header--show-menu');
  });
};

export const detectedScript = () => {
  menu.classList.remove('no-js');
  menu.classList.add('site-nav--closed');
};
