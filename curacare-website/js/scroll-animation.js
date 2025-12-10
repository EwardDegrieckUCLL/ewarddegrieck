document.addEventListener('DOMContentLoaded', () => {
    const scrollWatcher = document.querySelector('.scroll-watcher');

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