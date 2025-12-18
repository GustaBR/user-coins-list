async function loadData() {
    const playersRes = await fetch("/api/players");
    const players = await playersRes.json();
    const levelsRes = await fetch("/api/levels");
    const levels = await levelsRes.json();
    return { players, levels };
}

function renderCards(suggestionsData) {
    const type = suggestionsData[0].slice(0, -1);
    const data = suggestionsData[1];
    const suggestionsList = document.querySelector(`#${type}-suggestions`);
    suggestionsList.innerHTML = "";

    const selectedCards = {};

    data.forEach(entry => {
        const suggestionCard = document.createElement("div");
        suggestionCard.setAttribute(`data-${type}-id`, entry._id);
        suggestionCard.className = `form-card__suggestion`;
        suggestionCard.textContent = entry.name;
        suggestionsList.appendChild(suggestionCard);

        selectCard(suggestionCard, selectedCards, type);
    });
}

function selectCard(suggestionCard, selectedCards, type) {
    suggestionCard.addEventListener("click", () => {
        if (selectedCards[`${type}`]) {
            selectedCards[`${type}`].classList.remove(`form-card__suggestion--selected`);
            selectedCards[`${type}`] = null;
        }

        suggestionCard.classList.toggle(`form-card__suggestion--selected`);
        selectedCards[`${type}`] = suggestionCard;
    });
}

function handleSearch(suggestionsData) {
    const type = suggestionsData[0].slice(0, -1);
    const data = suggestionsData[1];
    const searchBar = document.querySelector(`#completion-${type}-input`);
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value;
        const filteredSuggestionsData = data.filter(entry => entry.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredSuggestions = [suggestionsData[0], filteredSuggestionsData];

        renderCards(filteredSuggestions);
    });
}

function showFormSubmissionMessage(message) {
    const alert = document.querySelector("#completion-form-alert");
    alert.textContent = message;  
}

async function main() {
    const resData = await loadData();
    const data = Object.entries(resData);
    data.forEach(suggestionsType => {
        renderCards(suggestionsType);
        handleSearch(suggestionsType);
    });
}

const completionFormBtn = document.querySelector("#completion-form-submit");

completionFormBtn.addEventListener("click", async () => {
    try {
        const formData = document.querySelectorAll(".form-card__suggestion--selected");
        
        if (formData.length !== 2) {
            return showFormSubmissionMessage("Select a player and a level.");
        }

        const player = formData[0].dataset.playerId;
        const level = formData[1].dataset.levelId;
        console.log(player, level)

        const res = await fetch("/admin/new-completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ player, level })
        });
        const data = await res.json();

        const alert = document.querySelector("#completion-form-alert");
        alert.textContent = data.message;

        console.log(res.status);

    } catch (err) {
        console.error(err);
    }
});

main();