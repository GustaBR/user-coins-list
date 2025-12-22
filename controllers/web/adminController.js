const renderAdminPage = async (req, res) => {
    const pageCss = "admin.css";
    res.render("admin", { pageCss });
}

const renderManageCompletionsPage = async (req, res) => {
    const pageCss = "admin-manage.css";
    res.render("manage-completions", { pageCss });
}

const renderManagePlayersPage = async (req, res) => {
    const pageCss = "admin-manage.css";
    res.render("manage-players", { pageCss });
}

module.exports = {
    renderAdminPage,
    renderManageCompletionsPage,
    renderManagePlayersPage
}