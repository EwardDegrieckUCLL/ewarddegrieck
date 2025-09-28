/* this file is run on every page; it blocks content for non-authorized users. This file starts from the unblocked version of the site. */
/* variables */
const logButton = document.querySelector("li.login");

/* functions */
const accessLocked = () => {
    /* user logged in -> false, else true*/
    return true;
};

const blockContent = () => {
    const navList = document.querySelector("nav ul");
    navList.innerHTML = ``;
    navList.appendChild(logButton);

    const main = document.querySelector("main");
    main.innerHTML = ``;

    const section = document.createElement("section");
    section.classList.toggle("flex-container");
    section.classList.toggle("img-right");
    main.appendChild(section);
    
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Sorry!"
    div.appendChild(h2);
    const p1 = document.createElement("p");
    p1.innerHTML = `Deze site is enkel toegankelijk voor geregistreerde gebruikers.`;
    const p2 = document.createElement("p");
    p2.innerHTML = `Klik <a href="./login.html">hier</a> om in te loggen.`;
    div.appendChild(p1);
    div.appendChild(p2);

    const figure = document.createElement("figure");
    figure.innerHTML = `<img class="locked-img" src="./img/warning.jpg" alt="warning sign lego">`

    section.appendChild(div);
    section.appendChild(figure);   
};

/* run code */
if (accessLocked()) {
    logButton.innerHTML = `<a href="./login.html">Log&nbsp;in</a>`;
    blockContent();
    console.log(accessLocked);
};