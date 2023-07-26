const menuHamburger = document.querySelector('#menu-hamburger');
const linesMenu = document.querySelectorAll('#menu-hamburger > span');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const menu = document.querySelector('.menu-nav');
const menuContainer = document.querySelector('#menu-container');
const logo = document.querySelector('.logo');

menuHamburger.addEventListener('click', () => {

  linesMenu.forEach(element => {
    element.classList.toggle('open');
  });

  main.classList.toggle('inactive');
  footer.classList.toggle('inactive');
  menuContainer.classList.toggle('inactive')
  menuContainer.classList.toggle('menu-container')
  menu.classList.toggle('inactive');
  logo.classList.toggle('inactive-opacity')

});