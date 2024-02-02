import {ScrollLock} from '../utils/scroll-lock.js';

const toggle = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-burger-menu]');
const body = document.querySelector('body');
const header = document.querySelector('header');
const sc = new ScrollLock();
const toggleMenu = () => {
  menu.classList.toggle('site-nav--closed');
  header.classList.toggle('header--show-menu');
};

const closeMenu = () => {
  menu.classList.add('site-nav--closed');
  header.classList.remove('header--show-menu');
};

export const toggleClickHandler = () => {
  toggle.addEventListener('click', () => {
    toggleMenu();
    if (body.classList.contains('scroll-lock')) {
      sc.enableScrolling();
    } else {
      sc.disableScrolling();
    }
  });

  menu.addEventListener('click', (evt) => {
    if (body.classList.contains('scroll-lock')) {
      if (evt.target.className === 'menu__link') {
        closeMenu();
        sc.enableScrolling();
      }
    }
  });
};

export const detectedScript = () => {
  menu.classList.remove('no-js');
  menu.classList.add('site-nav--closed');
};
