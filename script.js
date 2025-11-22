const PROTOCOL = "http://";
const ADDRESS = "localhost:3000";
const URLprefix = `${PROTOCOL}${ADDRESS}`;

async function loadLevels() {
    try {
        const res = await fetch(`${URLprefix}/levels`);

        if (!res.ok) {
            throw new Error("Network response was not ok.");
        }

        const levels = await res.json();
        return levels;

    } catch (err) {
        console.error("Could not fetch levels:", err);
        return [];
    }
}

async function renderLevels() {
    const listElement = document.querySelector("#list");
    const levels = await loadLevels();

    levels.forEach(level => {
        const levelCard = document.createElement("div");
        levelCard.classList.add("level");
        
        
        const levelTitle = document.createElement("h2");
        const levelPoints = document.createElement("span");
        levelPoints.textContent = level.Points;
        levelPoints.classList.add("level-points");
        
        levelTitle.textContent = `${level.Position}. ${level.Level}`;
        levelTitle.appendChild(levelPoints);

        const levelCreator = document.createElement("p");
        levelCreator.textContent = level.Creator;

        levelCard.appendChild(levelTitle);
        levelCard.appendChild(levelCreator);
        listElement.appendChild(levelCard);
    });
}

renderLevels();