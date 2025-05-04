// variables
// all links are only document names, relative paths are constructed in the functions
travelElementList = [
    {
        name: "Zeilweekend",
        imgUrl: "boxer_sailing_2.jpg",
        pageUrl: "zeilweekend.html",
        flagUrl: "united_kingdom.jpg",
        country: "Verenigd Koninkrijk",
        startDate: "9 mei 2025",
        endDate: "11 mei 2025",
        maxReached: true
    },
    {
        name: "Zeilreis 2025",
        imgUrl: "boxer_sailing.jpg",
        pageUrl: "zeilreis.html",
        flagUrl: "croatia.jpg",
        country: "Kroatië",
        startDate: "20 september 2025",
        endDate: "27 september 2025",
        maxReached: true
    },
    {
        name: "Fietsweekend",
        imgUrl: "boxer_cycling.jpg",
        pageUrl: "fietsweekend.html",
        flagUrl: "belgium.jpg",
        country: "België",
        startDate: "volgt",
        maxReached: false
    }
]

// functions
const renderTravelArticle = (travelElement) => {
    const article = document.createElement("article");

    // title
    const h3 = document.createElement("h3");
    h3.innerHTML = travelElement.name;
    article.appendChild(h3);

    // image
    const figure = document.createElement("figure");
    let imgUrlPath = "./img/" + travelElement.imgUrl;
    let altDescription = "foto van boxerhond tijdens " + travelElement.name;
    figure.innerHTML = `<img src=${imgUrlPath} alt=${altDescription}>`;
    article.appendChild(figure);

    // text under image
    const countryParagraph = document.createElement("p");
    let flagUrlPath = "./img_flags/" + travelElement.flagUrl;
    let altDescriptionFlag = "vlag van " + travelElement.country;
    countryParagraph.innerHTML = `<img src=${flagUrlPath} alt=${altDescriptionFlag}>`;
    countryParagraph.innerHTML += travelElement.country
    article.appendChild(countryParagraph);

    const startDateParagraph = document.createElement("p");
    startDateParagraph.innerHTML = "Datum: " + travelElement.startDate;
    article.appendChild(startDateParagraph);

    if (travelElement.endDate) {
        const endDateParagraph = document.createElement("p");
        endDateParagraph.innerHTML = "Tot: " + travelElement.endDate;
        article.appendChild(endDateParagraph);
        // no mention "From: " when only one day trip
        startDateParagraph.innerHTML = "Van: " + travelElement.startDate
    }

    maxReachedParagraph = document.createElement("p");
    if (travelElement.maxReached === true) {
        maxReachedParagraph.classList.add("red");
        maxReachedParagraph.innerHTML = "Deze reis is volgeboekt."
    } else {
        maxReachedParagraph.classList.add("green");
        maxReachedParagraph.innerHTML = "Nog plaatsen beschikbaar!"
    }
    article.appendChild(maxReachedParagraph);

    // wrap everyting in a link
    const a = document.createElement("a");
    let pageUrlPath = "./reizen/" + travelElement.pageUrl;
    a.setAttribute("href", pageUrlPath)
    a.appendChild(article);

    return a;
}

const renderTravelGrid = () => {
    const travelGridSection = document.querySelector(".travel-grid");
    travelElementList.forEach(travelElement => {
        const article = renderTravelArticle(travelElement);
        travelGridSection.appendChild(article);
    });
}

// run code
renderTravelGrid();     