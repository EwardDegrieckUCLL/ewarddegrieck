/* variables */
const evenementen = [
    {naam: "Teambuilding met BackTrail", locatie: "Ardennen", land: "BE", startDatum: "2025-11-21", eindDatum: "2025-11-23", fotoURL: "teambuilding-backtrail.jpeg", link: "teambuilding-backtrail"},
    {naam: "REcycle2PARIS", locatie: "Parijs", land: "FR", startDatum: "2025-06-14", eindDatum: "2025-06-16", fotoURL: "recycle2paris.jpeg", link: "recycle2paris"},
    {naam: "Grenspalenklassieker Brabantse Wal", locatie: "Bergen op Zoom", land: "NL", startDatum: "2025-05-17", eindDatum: null, fotoURL: "gpk-brabantsewal.jpeg", link: "gpk-brabantse-wal"},
    {naam: "Dwars door Hasselt", locatie: "Hasselt", land: "BE", startDatum: "2024-10-06", eindDatum: null, fotoURL: "dwars-door-hasselt.jpg", link: "dwars-door-hasselt"
    },
    {naam: "Gravel4air", locatie: "Terziet", land: "NL", startDatum: "2025-06-19", eindDatum: "2025-06-21", fotoURL: "gravel4air.jpg", link: "gravel4air"},
    {naam: "Klimmen tegen MS", locatie: "Mont Ventoux", land: "FR", startDatum: "2025-06-09", eindDatum: null, fotoURL: "klimmen-tegen-MS.jpeg", link: "klimmen-tegen-MS"},
    {naam: "UVA Bochtenstage Ardennen", locatie: "Ardennen", land: "BE", startDatum: "2025-05-11", eindDatum: null, fotoURL: "bochtenstage-ardennen.jpeg", link: "bochtenstage-ardennen"},
    {naam: "Sporta - Mont Ventoux", locatie: "Mont Ventoux", land: "FR", startDatum: "2024-06-22", eindDatum: null, fotoURL: "sporta-mt-ventoux.jpg", link: "sporta-mont-ventoux"},
    {naam: "Gooische 200 - Gravelride", locatie: "Hilversum", land: "NL", startDatum: "2024-10)05", eindDatum: null, fotoURL: "gooische200.jpeg", link: "gooische200"},
    {naam: "Rijopleiding politie GLM", locatie: "Olen", land: "BE", startDatum: "2025-05-15", eindDatum: null, fotoURL: "rijopleiding-GLM.jpeg", link: "rijopleiding-GLM"},
    {naam: "Fietstocht politie Neteland", locatie: "Grobbendonk", land: "BE", startDatum: "2025-05-22", eindDatum: null, fotoURL: "fietstocht-neteland.jpeg", link: "fietstocht-neteland"},
    {naam: "Motorwijding Jette", locatie: "Jette", land: "BE", startDatum: "2025-05-29", eindDatum: null, fotoURL: "motorwijding.jpeg", link: "motorwijding-jette"},
    {naam: "De hel van Klimmen", locatie: "Heuvelland", land: "NL", startDatum: "2025-05-31", eindDatum: null, fotoURL: "hel-van-klimmen.jpeg", link: "hel-van-klimmen"},
    {naam: "LaCannibale", locatie: "Mont Ventoux", land: "FR", startDatum: "2025-06-28", eindDatum: null, fotoURL: "lacannibale-2025.jpeg", link: "la-cannibale-2025"},
    {naam: "LaCannibale", locatie: "Mont Ventoux", land: "FR", startDatum: "2026-06-26", eindDatum: "2026-06-26", fotoURL: "lacannibale-2026.jpg", link: "la-cannibale-2026"},
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

const sorteerPerJaarOmgekeerdAlsArray = (evenementenPerJaar) => {
    return Object.entries(evenementenPerJaar)
        .sort(([yearA], [yearB]) => yearB - yearA);
};

const genereerEvenement = (evenement) => {
    const linkContainer = document.createElement("a");
    linkContainer.href = `./evenementen/${evenement.link}.html`;

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
    
    const h4Div = document.createElement("div");
    h4Div.classList.add("h4");
    const h4 = document.createElement("h4");
    h4Div.appendChild(h4);
    h4.innerHTML = `${evenement.naam}`;
    evenementArticle.appendChild(h4Div);

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

const genereerEvenementenPerJaartalArray = (perJaarArray, htmlElement) => {
    for (const [year, events] of perJaarArray) {
        const h3 = document.createElement("h3");
        h3.innerHTML = year;
        htmlElement.appendChild(h3);

        const div = document.createElement("div");
        div.classList.add("evenementen-lijst");
        htmlElement.appendChild(div);

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
    const eventsPerYearReverse = sorteerPerJaarOmgekeerdAlsArray(eventsPerYear);
    genereerEvenementenPerJaartalArray(eventsPerYearReverse, div);
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