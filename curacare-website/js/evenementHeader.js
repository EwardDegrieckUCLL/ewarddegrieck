// caveat this file is (largely) based on header.js, consider changing this file when header.js is adjusted
/* variables */

/* function */
const addScrollWatcher = (element) => {
    const div = document.createElement("div");
    div.classList.add("scroll-watcher");

    element.appendChild(div);
};

const addLogo = (element) => {
    const a = document.createElement("a");
    a.href = "../index.html";
    const div = document.createElement("div");
    div.classList.add("header-logo");
    a.appendChild(div);

    const img = document.createElement("img");
    img.src = "../img/curacare-logo.png";
    img.alt = "Curacare logo";
    const p = document.createElement("p");
    p.innerHTML = "Curacare";

    div.appendChild(img);
    div.appendChild(p);

    element.appendChild(a);
};

const genereerNav = () => {
    const navElement = document.createElement("nav");
    const div = document.createElement("div");
    div.classList.add("hamburger-menu");
    navElement.appendChild(div);
    for (let i=0; i < 3; i++) {
        const span = document.createElement("span");
        div.appendChild(span);
    };

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = `<a href="../evenementen.html">&#8617; Terug naar evenementen</a>`;
    ul.appendChild(li);
    navElement.appendChild(ul);

    return navElement;
};

const genereerHeader = () => {
    const headerElement = document.querySelector("header");
    
    addScrollWatcher(headerElement);
    addLogo(headerElement);

    const nav = genereerNav();
    headerElement.appendChild(nav);
};

/* run code */
genereerHeader();