/* variables */
const maanden = [
    "jan.", "feb.", "mrt.", "apr.",
    "mei", "juni", "juli", "aug.",
    "sept.", "okt.", "nov.", "dec."
];

/* functions */
const getDatumText = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${maanden[date.getMonth()]} ${date.getFullYear()}`;
};

const genereerEvenementPagina = () => {
    const main = document.querySelector("main");

    const h1 = document.createElement("h1");
    h1.innerHTML = eventName;
    main.appendChild(h1);
    const img = document.createElement("img");
    img.src = `../img/evenementen/${imgURL}`;
    img.alt = `foto ${eventName}`
    main.appendChild(img);
    const pDate = document.createElement("p");
    pDate.classList.add("p-date");
    pDate.innerHTML = getDatumText(startDate);
    if (endDate) {
        pDate.innerHTML += ` &#8594; ${getDatumText(endDate)}`;
    }
    main.appendChild(pDate);

    addText(main, stringArray);

    if (youTubeEmbed.trim() !== "") {
        addYoutubeVideo(main, youTubeEmbed);
    }

    if (imgURLs.length > 0) {
        addPhotos(main, imgURLs);
    }
};

const addText = (element, stringArray) => {
    for (const string of stringArray) {
        const p = document.createElement("p");
        p.innerHTML = string;
        element.appendChild(p);
    };
}

const addYoutubeVideo = (element, youTubeEmbed) => {
    element.innerHTML += youTubeEmbed;
};

const addPhotos = (element, imgURLs) => {
    const div = document.createElement("div");
    div.classList.add("event-img");
    for (const [index, url] of imgURLs.entries()) {
        const img = document.createElement("img");
        img.src = `../img/eventImg/${url}`;
        img.alt = `foto ${eventName} ${index+1}`
        div.appendChild(img);
    }
    element.appendChild(div);
};

/* run code */
genereerEvenementPagina();