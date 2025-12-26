// caveat evenementHeader uses and copies functions of this file, adjust accordingly
/* variables */
const pageLinkArray = [
    ["Start", "index.html"],
    ["Diensten", "diensten.html"],
    ["Evenementen", "evenementen.html"],
    ["Contact", "contact.html"]
];

/* function */
const getCurrentLink = () => {
    const file = window.location.pathname.split('/').pop();
    return file === "" ? "index.html" : file;
};

const addScrollWatcher = (element) => {
    const div = document.createElement("div");
    div.classList.add("scroll-watcher");

    element.appendChild(div);
};

const addLogo = (element) => {
    const a = document.createElement("a");
    a.href = "./index.html";
    const div = document.createElement("div");
    div.classList.add("header-logo");
    a.appendChild(div);

    const img = document.createElement("img");
    img.src = "./img/curacare-logo.png";
    img.alt = "Curacare logo";
    const p = document.createElement("p");
    p.innerHTML = "Curacare";

    div.appendChild(img);
    div.appendChild(p);

    element.appendChild(a);
};

const genereerNav = (pageLinkArray) => {
    const navElement = document.createElement("nav");
    const div = document.createElement("div");
    div.classList.add("hamburger-menu");
    navElement.appendChild(div);
    for (let i=0; i < 3; i++) {
        const span = document.createElement("span");
        div.appendChild(span);
    };

    const ul = document.createElement("ul");
    for (const [page, link] of pageLinkArray) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link}">${page}</a>`;
        if (link === getCurrentLink()) {
            li.classList.add("current-page");
        };
        ul.appendChild(li);
    };
    navElement.appendChild(ul);

    return navElement;
};

const genereerHeader = () => {
    const headerElement = document.querySelector("header");
    
    addScrollWatcher(headerElement);
    addLogo(headerElement);

    const nav = genereerNav(pageLinkArray);
    headerElement.appendChild(nav);
};

/* run code */
genereerHeader();