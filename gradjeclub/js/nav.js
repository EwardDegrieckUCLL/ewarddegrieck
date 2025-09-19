/* variables */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('nav ul');
const body = document.querySelector('body');

/* functions */

/* run code */
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navList.classList.toggle('active');
    body.classList.toggle('disable-scrolling');
});