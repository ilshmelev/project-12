// відкриття та закриття мобільного вікна при натисненні на якірні посилання

const mobileBox = document.querySelector('.mobile-menu');
const closeAnchor1 = document.querySelector('[data-menu-about]');
const closeAnchor2 = document.querySelector('[data-menu-howismade]');
const closeAnchor3 = document.querySelector('[data-menu-products]');
const closeAnchor4 = document.querySelector('[data-menu-contacts]');

closeAnchor1.addEventListener('click', onAnchorClick);
closeAnchor2.addEventListener('click', onAnchorClick);
closeAnchor3.addEventListener('click', onAnchorClick);
closeAnchor4.addEventListener('click', onAnchorClick);

function onAnchorClick() {
  mobileBox.classList.remove('is-open');
}