function checkAdmin(req, res, next) {

    if (req.cookies.key === process.env.ADMIN_KEY) {
        next();
    } else {
        const pageCss = "error.css";
        return res.status(401).render("error", { code: 401, pageCss });
    }
}

module.exports = {
    checkAdmin
}