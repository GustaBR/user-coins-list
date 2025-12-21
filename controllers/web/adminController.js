const renderAdminPage = async (req, res) => {
    const pageCss = "admin.css";
    res.render("admin", { pageCss });
}

const renderAddCompletionPage = async (req, res) => {
    const pageCss = "completions.css";
    res.render("manage-completions", { pageCss });
}

module.exports = {
    renderAdminPage,
    renderAddCompletionPage,
}