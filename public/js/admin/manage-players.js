const state = {
    action: "add",
    players: [],
    playerSearch: "",
    selectedPlayer: null,
}

const headers = {
    add: {
        title: "Add player",
        description: "Add a new player"
    },
    edit: {
        title: "Edit player",
        description: "Rename an existing player"
    }
}

const pageHeaderTitle = document.getElementById("page-header-title");
const pageHeaderDescription = document.getElementById("page-header-description");
const playerLabel = document.getElementById("player-label");
const playerInput = document.getElementById("player-input");
const playerSuggestions = document.getElementById("player-suggestions");
const summaryPlayer = document.getElementById("summary-player");
const submitButton = document.getElementById("form-submit");
const formAlert = document.querySelector("#form-alert");

function matchPlayerSearch() {
    state.playerSearch = playerInput.value;
    return state.players.filter(player => player.name.toLowerCase().includes(state.playerSearch.toLowerCase()));
}

playerInput.addEventListener("input", () => {

    formAlert.textContent = "";

    if (state.selectedPlayer && !matchPlayerSearch().find(player => player._id == state.selectedPlayer)) {
        state.selectedPlayer = null;
    }

    switch (state.action) {
        case "add":
            summaryPlayer.innerHTML = `<span class="bold">Name:</span> ${playerInput.value}`;
            break;
        case "edit":
            renderPlayers();
        default:
            break;
    }
});

playerSuggestions.addEventListener("click", async (e) => {
    const selectedPlayer = e.target.closest(".form-card__suggestion");
    if (!selectedPlayer || (state.selectedPlayer && state.selectedPlayer === selectedPlayer.dataset.playerId)) return;

    formAlert.textContent = "";
    state.selectedPlayer = selectedPlayer.dataset.playerId;

    renderPlayers();
});

async function loadPlayers() {
    const playersRes = await fetch("/api/players");
    state.players = await playersRes.json();
}

function renderPlayers() {
    playerSuggestions.innerHTML = "";
    summaryPlayer.innerHTML = `<span class="bold">Player:</span> none`;
    const players = matchPlayerSearch();

    if (players.length > 0) {
        players.forEach(player => {
            const playerCard = document.createElement("div");
            playerCard.setAttribute(`data-player-id`, player._id);
            playerCard.classList.add("form-card__suggestion");
            if (state.selectedPlayer && player._id === state.selectedPlayer) {
                playerCard.classList.add("form-card__suggestion--selected");
                summaryPlayer.innerHTML = `<span class="bold">Player:</span> ${player.name}`;
            }
            playerCard.textContent = player.name;
            playerSuggestions.appendChild(playerCard);
        });
    } else {
        playerSuggestions.innerHTML = "No matching players.";
    }
}

function showFormSubmissionMessage(message) {
    formAlert.textContent = message;
}

const actionList = document.querySelectorAll(".admin-actions__action");
actionList.forEach((action) => {
    action.addEventListener("click", async () => {
        const selectedAction = document.getElementById("action-selected");
        selectedAction.removeAttribute("id");
        selectedAction.classList.remove("admin-actions__action--selected");
        action.setAttribute("id", "action-selected");
        action.classList.add("admin-actions__action--selected");

        state.action = action.dataset.action;
        state.selectedPlayer = null;
        submitButton.textContent = `${state.action} player`;
        formAlert.textContent = "";

        if (state.action === "edit") {

            if (state.players.length === 0) {
                await loadPlayers();
            }

            playerSuggestions.classList.remove("hidden");
            renderPlayers();
        } else {
            playerSuggestions.classList.add("hidden");
        }

        updatePageHeader();
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

        showFormSubmissionMessage(data.message);

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

        showFormSubmissionMessage(data.message);

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

    switch (state.action) {
        case "add":
            await addPlayer();
            break;
        case "edit":
            await editPlayer();
            break;
        default:
            showFormSubmissionMessage(`Invalid action: ${state.action}`);
            break;
    }
});