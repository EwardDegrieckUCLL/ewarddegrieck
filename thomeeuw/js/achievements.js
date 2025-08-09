/* variables */
const statistics = new Map();
statistics.set('Totale turnover', '€0');
statistics.set('Maximale winst','€0');
statistics.set('Totaal bedrag geïnvesteerd','€0');
statistics.set('Totaal geïnvesteerd','€0');
statistics.set('Datum eerste meeting','2025-07-30');
statistics.set('Datum eerste factuur','n.v.t.');

const achievements = [
    {title: "100 EUR winst", img_url: "./img/100-EUR-winst", type: "geld", achieved: false},
    {title: "Achievement website", img_url: "./img/achievement-website", type: "groei", achieved: true},
    {title: "250 EUR turnover", img_url: "./img/250-EUR-turnover", type: "geld", achieved: false},
    {title: "Eerste logo", img_url: "./img/eerste-logo", type: "branding", achieved: false},
    {title: "Eerste naam", img_url: "./img/eerste-naam", type: "branding", achieved: false},
];

/* functions */
const generateStatisticsTable = (list) => {
    const statisticsTable = document.querySelector("#statistics-table")
    list.forEach((value, key) => {
        statisticsTable.appendChild(generateTwoCellRow(key, value));
    })
}

const generateTwoCellRow = (stringX, stringY) => {
    const row = document.createElement("tr");
    row.innerHTML += `<td>${stringX}</td><td>${stringY}</td>`;
    return row;
}

const generateAchievementOverview = (list) => {
    const earnedAchievements = list.filter(function (el) {
        return el.achieved
    });
    const lockedAchievements = list.filter(function (el) {
        return !(el.achieved)
    });
    
    const achievementSection = document.querySelector("#achievements");

    if (earnedAchievements) {
        achievementSection.innerHTML += `<h3>Earned achievements</h3>`
        const earnedAchievementsDiv = document.createElement("div")
        earnedAchievementsDiv.classList.add("achievement-list") 
        achievementSection.appendChild(earnedAchievementsDiv);

        earnedAchievements.forEach(item => {
        const achievement = createAchievementElement(item);
        earnedAchievementsDiv.appendChild(achievement);    
    });

    }

    if (lockedAchievements) {
        achievementSection.innerHTML += `<h3>Locked achievements</h3>`
        const lockedAchievementsDiv = document.createElement("div")
        lockedAchievementsDiv.classList.add("achievement-list") 
        achievementSection.appendChild(lockedAchievementsDiv);

        lockedAchievements.forEach(item => {
        const achievement = createAchievementElement(item);
        lockedAchievementsDiv.appendChild(achievement);    
    });
    }
};

const createAchievementElement = (achievement) => {
    const element = document.createElement("article");
    let className = achievement.achieved ? "earned" : "locked";

    element.innerHTML += `<p>${achievement.type}</p>`
    element.innerHTML += `<img src="${achievement.img_url}.jpg" class="${className}" alt="${achievement.title} icon">`;
    element.innerHTML += `<h4>${achievement.title}</h4>`;
    return element;
};

/* run code */
generateStatisticsTable(statistics);
generateAchievementOverview(achievements);