const jwt = require("jsonwebtoken");


function auth(req, res, next) {
    try {
        console.log(req.cookies.token);
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                errorMessage: "unauthorized"
            });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;


        next();



    } catch (error) {
        console.error(error);
        res.status(401).json({
            errorMessage: "unauthorized"
        });
    }
}


module.exports = auth;