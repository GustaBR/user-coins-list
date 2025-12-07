// Adds trophy icon to every leaderboard entry according to the position of the player
document.querySelectorAll(".player-card__info").forEach((el) => {
    const trophyPrefix = "../images/trophy"
    const rank = el.dataset.rank;
    const icon = el.querySelector(".player-card__icon");

    function getTrophy(rank) {
        if (rank > 15)
            return 7;
        if (rank > 10)
            return 6;
        if (rank > 6)
            return 5;
        if (rank > 3)
            return 4;
        return rank;
    }

    icon.src = `${trophyPrefix}${getTrophy(rank)}.png`;
})