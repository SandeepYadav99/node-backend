var jwt = require("jsonwebtoken");

function verifyValidUser(req, res, next) {
    console.log(req.cookies);
    // var token = req.headers["authorization"];
    var token = req.cookies["authorization"];
    console.log(token);
    try {
        jwt.verify(token, process.env.KEY);
        next();
    } catch (err) {
        res.status(401);
        res.json({ msg: "Unauthorized user" });
    }


}

module.exports = verifyValidUser;
