/* variables */
const evenementen = [
    {naam: "Teambuilding met BackTrail", locatie: "Ardennen", land: "BE", startDatum: "2025-11-21", eindDatum: "2025-11-23", fotoURL: "teambuilding-backtrail.jpeg", link: "teambuilding-backtrail"},
    {naam: "REcycle2PARIS", locatie: "Parijs", land: "FR", startDatum: "2025-06-14", eindDatum: "2025-06-16", fotoURL: "recycle2paris.jpeg", link: "recycle2paris"},
    {naam: "Grenspalenklassieker Brabantse Wal", locatie: "Bergen op Zoom", land: "NL", startDatum: "2025-05-17", eindDatum: null, fotoURL: "gpk-brabantsewal.jpeg", link: "gpk-brabantse-wal"},
    {naam: "Dwars door Hasselt", locatie: "Hasselt", land: "BE", startDatum: "2024-10-06", eindDatum: null, fotoURL: "dwars-door-hasselt.jpg", link: "dwars-door-hasselt"
    }
];

const maanden = [
    "jan.", "feb.", "mrt.", "apr.",
    "mei", "juni", "juli", "aug.",
    "sept.", "okt.", "nov.", "dec."
];

/* functions */
const getVorigeEvenementen = (evenementen) => {
    const today = new Date();
    return evenementen.filter(el => new Date(el.startDatum) < today);
};

const getVolgendeEvenementen = (evenementen) => {
    const today = new Date();
    return evenementen.filter(el => new Date(el.startDatum) >= today);
};

const sorteerChronologisch = (evenementen) => {
    return evenementen.sort((a,b) => new Date(b.startDatum) <= new Date(a.startDatum));
};

const getDatumText = (date) => {
    return `${date.getDate()} ${maanden[date.getMonth()]}`;
};

const getJaartal = (evenement) => {
    const date = new Date(evenement.startDatum);
    return date.getFullYear();
};

const getEvenementenPerJaar = (evenementen) => {
    /* maak een lijst van key jaartal en value lijst van evenementen */
    const result = {};
    const sortedEvents = sorteerChronologisch(evenementen);
    for (const evenement of sortedEvents) {
        const year = getJaartal(evenement);

        if (!result[year]) {
            result[year] = [];
        }
        result[year].push(evenement);
    };

    return result;
};

const genereerEvenement = (evenement) => {
    const linkContainer = document.createElement("a");
    linkContainer.href = `./evenementen/${evenement.link}`;

    const evenementArticle = document.createElement("article");
    linkContainer.appendChild(evenementArticle);

    const dataDiv = document.createElement("div");
    dataDiv.classList.add("data");
    const startDate = new Date(evenement.startDatum);
    dataDiv.innerHTML = `<p>${getDatumText(startDate)}</p>`;
    if ( evenement.eindDatum != null) {
        const endDate = new Date(evenement.eindDatum);
        dataDiv.innerHTML += `<p>&#8594;</p>`
        dataDiv.innerHTML += `<p>${getDatumText(endDate)}</p>`;
    } else {
        dataDiv.classList.add("single-date");
    };
    evenementArticle.appendChild(dataDiv);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.innerHTML += `<img src="./img/evenementen/${evenement.fotoURL}" alt="foto ${evenement.naam}">`;
    evenementArticle.appendChild(imgContainer);

    const h4 = document.createElement("h4");
    h4.innerHTML = `${evenement.naam}`;
    evenementArticle.appendChild(h4);

    const locatieDiv = document.createElement("div");
    locatieDiv.classList.add("locatie");
    locatieDiv.innerHTML = `<img src="./img/vlaggen/${evenement.land}.jpeg" alt="vlag ${evenement.land}">`;
    locatieDiv.innerHTML += `<p>${evenement.locatie}</p>`;
    evenementArticle.appendChild(locatieDiv);

    return linkContainer;
};

const genereerEvenementenPerJaartal = (evenementenPerJaar, htmlElement) => {
    /* voeg toe aan bepaald HTML-element naar keuze */
    for (const year in evenementenPerJaar) {
        const h3 = document.createElement("h3");
        h3.innerHTML = `${year}`;
        htmlElement.appendChild(h3);

        const div = document.createElement("div");
        div.classList.add("evenementen-lijst");
        htmlElement.appendChild(div);

        const events = evenementenPerJaar[year];
        for (const event of events) {
            const evenementElement = genereerEvenement(event);
            div.appendChild(evenementElement);
        }
    }
};

const genereerVorigeEvenementen = () => {
    const div = document.querySelector("#vorige-evenementen");
    const pastEvents = getVorigeEvenementen(evenementen);
    const eventsPerYear = getEvenementenPerJaar(pastEvents);
    genereerEvenementenPerJaartal(eventsPerYear, div);
};

const genereerVolgendeEvenementen = () => {
    const div = document.querySelector("#volgende-evenementen");
    const nextEvents = getVolgendeEvenementen(evenementen);
    const eventsPerYear = getEvenementenPerJaar(nextEvents);
    genereerEvenementenPerJaartal(eventsPerYear, div);
};

/* run code */
genereerVorigeEvenementen();
genereerVolgendeEvenementen();