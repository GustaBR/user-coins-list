const state = {
    action: "add",
    players: [],
    playerSearch: "",
    levels: [],
    levelSearch: "",
    selectedPlayer: null,
    selectedLevel: null
}

const headers = {
    add: {
        title: "Add completion",
        description: "Add a new completion"
    },
    delete: {
        title: "Delete completion",
        description: "Delete an existing completion"
    }
}

const pageHeaderTitle = document.getElementById("page-header-title");
const pageHeaderDescription = document.getElementById("page-header-description");
const playerInput = document.getElementById("player-input");
const levelInput = document.getElementById("level-input");
const playerSuggestions = document.getElementById("player-suggestions");
const levelSuggestions = document.getElementById("level-suggestions");

function matchPlayerSearch() {
    state.playerSearch = playerInput.value;
    return state.players.filter(player => player.name.toLowerCase().includes(state.playerSearch.toLowerCase()));
}

function matchLevelSearch() {
    state.levelSearch = levelInput.value;
    return state.levels.filter(level => level.name.toLowerCase().includes(state.levelSearch.toLowerCase()));
}

playerInput.addEventListener("input", () => {

    if (state.selectedPlayer && !matchPlayerSearch().find(player => player._id == state.selectedPlayer)) {
        state.selectedPlayer = null;
    }

    renderPlayers();
});

levelInput.addEventListener("input", () => {
    
    if (state.selectedLevel && !matchLevelSearch().find(level => level._id == state.selectedLevel)) {
        state.selectedLevel = null;
    }

    renderLevels();
});

playerSuggestions.addEventListener("click", async (e) => {
    const selectedPlayer = e.target.closest(".form-card__suggestion");
    if (!selectedPlayer || (state.selectedPlayer && state.selectedPlayer === selectedPlayer.dataset.playerId)) return;

    state.selectedPlayer = selectedPlayer.dataset.playerId;

    renderPlayers();
    await loadLevels();
    renderLevels();
});

levelSuggestions.addEventListener("click", async (e) => {
    const selectedLevel = e.target.closest(".form-card__suggestion");

    if (state.selectedLevel && state.selectedLevel === selectedLevel) {
        return;
    }

    state.selectedLevel = selectedLevel.dataset.levelId;

    renderLevels();
});

async function loadPlayers() {
    const playersRes = await fetch("/api/players");
    state.players = await playersRes.json();
}

async function loadLevels() {
    let levelsRes;

    switch (state.action) {
        case "add":
            levelsRes = await fetch(`/api/players/${state.selectedPlayer}/uncompleted-levels`);
            break;
        case "delete":
            levelsRes = await fetch(`/api/completions?player=${state.selectedPlayer}`);
            break;
    }
    state.levels = await levelsRes.json();
}

function renderPlayers() {
    playerSuggestions.innerHTML = "";

    matchPlayerSearch().forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.setAttribute(`data-player-id`, player._id);
        playerCard.classList.add("form-card__suggestion");
        if (state.selectedPlayer && player._id === state.selectedPlayer) {
            playerCard.classList.add("form-card__suggestion--selected");
        }
        playerCard.textContent = player.name;
        playerSuggestions.appendChild(playerCard);
    });
}

function renderLevels() {    
    levelSuggestions.innerHTML = "";

    matchLevelSearch().forEach(level => {
        const levelCard = document.createElement("div");
        levelCard.setAttribute(`data-level-id`, level._id);
        levelCard.classList.add("form-card__suggestion");
        if (state.selectedLevel && level._id === state.selectedLevel) {
            levelCard.classList.add("form-card__suggestion--selected")
        }
        levelCard.textContent = level.name;
        levelSuggestions.appendChild(levelCard);
    });

}

function showFormSubmissionMessage(message) {
    const alert = document.querySelector("#form-alert");
    alert.textContent = message;  
}

const actionList = document.querySelectorAll(".admin-actions__action");
actionList.forEach((action) => {
    action.addEventListener("click", () => {
        const selectedAction = document.getElementById("action-selected");
        selectedAction.removeAttribute("id");
        selectedAction.classList.remove("admin-actions__action--selected");
        action.setAttribute("id", "action-selected");
        action.classList.add("admin-actions__action--selected");

        state.action = action.dataset.action;
        state.selectedPlayer = null;
        state.levels = [];
        state.selectedLevel = null;
        updatePageHeader();
        renderPlayers();
        renderLevels();
    });
});

function updatePageHeader() {
    pageHeaderTitle.textContent = headers[state.action].title;
    pageHeaderDescription.textContent = headers[state.action].description;
}

async function addCompletion() {
    try {
        const player = state.selectedPlayer;
        const level = state.selectedLevel;

        const res = await fetch("/api/admin/add-completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ player, level })
        });
        const data = await res.json();

        const alert = document.querySelector("#form-alert");
        alert.textContent = data.message;

        console.log(res.status);

    } catch (err) {
        console.error(err);
    }
}

async function deleteCompletion() {
    try {
        const completionId = state.selectedLevel;

        const res = await fetch(`/api/admin/delete-completion/${completionId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        const alert = document.querySelector("#form-alert");
        alert.textContent = data.message;

        console.log(res.status);

    } catch (err) {
        console.error(err);
    }
}


const completionFormBtn = document.querySelector("#form-submit");
completionFormBtn.addEventListener("click", async () => {
       
    if (!state.selectedPlayer || !state.selectedLevel) {
        return showFormSubmissionMessage("Select a player and a level.");
    }

    const action = document.getElementById("action-selected").dataset.action;
    switch (action) {
        case "add":
            await addCompletion();
            break;
        case "delete":
            await deleteCompletion();
            break;
        default:
            console.log("No selected action (probably impossible)");
            break;
    }
});

async function main() {
    await loadPlayers();
    renderPlayers();
}

main();