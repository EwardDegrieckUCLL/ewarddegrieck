/* variables */
const email = "info@curacare.be";
const telefoon = "050 00 00 00";
const ondernemingsnummer = "BE99 9999 999";
const nieuwsbriefLink = "";

/* function */
const genereerSection = (title, stringArray) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.innerHTML = title;
    section.appendChild(h2);
    for (const string of stringArray) {
        const p = document.createElement("p");
        p.innerHTML = string;
        section.appendChild(p);
    }

    return section;
};

const genereerFooter = () => {
    const footerElement = document.querySelector("footer");
    const div = document.createElement("div");
    footerElement.appendChild(div);

    const title1 = "Nieuwsbrief";
    const stringArray1 = [
        `Wil je graag op de hoogte zijn van onze laatste nieuwtjes?`,
        `Klik dan <a href="${nieuwsbriefLink}">hier</a> om je in te schrijven voor onze nieuwsbrief.`
        ];
    const section1 = genereerSection(title1, stringArray1);
    div.appendChild(section1);

    const title2 = "Contactgegevens";
    const stringArray2 = [
        `<a href="mailto:${email}">${email}</a>`,
        `<a href="tel:${telefoon}">${telefoon}</a>`
        ];
    const section2 = genereerSection(title2, stringArray2);
    div.appendChild(section2);

    const title3 = "Ondernemingsnummer";
    const stringArray3 = [
        `${ondernemingsnummer}`
        ];
    const section3 = genereerSection(title3, stringArray3);
    div.appendChild(section3);

    const pCopyRight = document.createElement("p");
    pCopyRight.innerHTML = `&copy; 2026 - Curacare - All Rights Reserved.`;
    footerElement.appendChild(pCopyRight);
};

const genereerBackToTop = () => {
    const main = document.querySelector("main");
    const p = document.createElement("p");
    p.id = "back-to-top";
    p.innerHTML = "&#8617; Terug naar boven";
    main.appendChild(p);
};

/* run code */
genereerFooter();
genereerBackToTop();
const backToTop = document.querySelector("#back-to-top");
backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
    }
);