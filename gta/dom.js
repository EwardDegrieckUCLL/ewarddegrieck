const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');
const languageOption = document.querySelector('.language-option');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    languageOption.classList.toggle('inactive');
    body.classList.toggle('disable-scrolling');
});