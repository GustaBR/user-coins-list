const renderAdminPage = (req, res) => {
    const pageCss = "admin.css";
    return res.status(200).render("admin", { pageCss });
}

const renderManageCompletionsPage = (req, res) => {
    const pageCss = "admin-manage.css";
    return res.status(200).render("manage-completions", { pageCss });
}

const renderManagePlayersPage = (req, res) => {
    const pageCss = "admin-manage.css";
    return res.status(200).render("manage-players", { pageCss });
}

module.exports = {
    renderAdminPage,
    renderManageCompletionsPage,
    renderManagePlayersPage
}