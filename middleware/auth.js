function checkAdmin(req, res, next) {

    if (req.cookies.key === process.env.ADMIN_KEY) {
        next();
    } else {
        return res.status(401).send("Unauthorized");
    }
}

module.exports = {
    checkAdmin
}