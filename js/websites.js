/* variables */
const websites = [
    {name: "Google", url: "https://www.google.com", screenshot: "./img/google_screenshot.jpg"}
];

/* functions */
const generateWebsiteOverview = (list) => {
    const websiteOverview = document.querySelector("#websites");
    list.forEach(item => {
        const website = createWebsiteElement(item);
        console.log(website);
        websiteOverview.appendChild(website);    
    });
};

const createWebsiteElement = (site) => {
    const element = document.createElement("article");
    element.innerHTML += `<h3>${site.name}</h3>`;
    element.innerHTML += `<a href="${site.url}"><img src="${site.screenshot}" alt="${site.name} screenshot"></a>`;
    return element;
};

/* run code */
generateWebsiteOverview(websites);