const mobileMenu = document.querySelector('.find-menu');
const hamburger = document.querySelector('.hamburger');
const xIcon = document.querySelector('.close');

function displayMenu() {
  mobileMenu.classList.toggle('mobile-menu');
}

hamburger.addEventListener('click', displayMenu);
xIcon.addEventListener('click', displayMenu);