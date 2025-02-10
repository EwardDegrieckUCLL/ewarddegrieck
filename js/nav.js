/* variables */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('nav ul');

/* functions */

/* run code */
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navList.classList.toggle('active');
});