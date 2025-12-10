/* variables */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('nav ul');
const body = document.querySelector('body');
const scrollWatcher = document.querySelector('.scroll-watcher');

/* functions */
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        // total scrollable height
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

        // current vertical scroll position
        const scrolled = window.scrollY;

        // percentage scrolled
        const scrollPercent = (scrolled / scrollableHeight) * 100;

        // width of the progress bar
        scrollWatcher.style.width = scrollPercent + '%';
    });
});

/* run code */
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navList.classList.toggle('active');
    body.classList.toggle('disable-scrolling');
});