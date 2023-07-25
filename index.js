const menuHamburger = document.querySelector('#menu-hamburger');
const linesMenu = document.querySelectorAll('#menu-hamburger > span');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
console.log(linesMenu);

menuHamburger.addEventListener('click', () => {
  linesMenu.forEach(element => {
    element.classList.toggle('open');
  });
  setTimeout(() => {
    main.classList.toggle('inactive');
  }, 200);
  setTimeout(() => {
    footer.classList.toggle('inactive');
  }, 300);
});