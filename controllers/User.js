var UserModel = require("../models/User");
var bcrypt = require("bcrypt");
var generatePasswordHash = require("../utility/utility");

function signup(req, res) {
    UserModel.find({ email: req.body.email })
        .then(data => {
            if (data.length > 0) {
                res.json({ msg: "User already present in the system" })
            } else {
                var { email, name, password } = req.body;

                // var salt = bcrypt.genSaltSync(10);
                // var hash = bcrypt.hashSync(password, salt);
                var hash = generatePasswordHash(password);

                UserModel.create({ email: email, name: name, password: hash })
                    .then(data => {
                        res.json({ msg: "User created successfully" });
                    })
            }

        })

}

function login(req, res) {
    UserModel.find({ email: req.body.email })
        .then(data => {
            var userData = data[0];
            // var token = jwt.sign({ uid: userData._id }, process.env.KEY);
            var loginFlag = bcrypt.compareSync(req.body.password, userData.password);

            if (loginFlag) {
                var token = userData.generateToken()
                res.cookie("authorization", token, { httpOnly: true });
                // res.setHeader("Authorization", token);
                res.json({ msg: "User successfully logged in", token: token })
            } else {
                res.status(401);
                res.json({ msg: "Incorrect password." })
            }


        })
        .catch(err => {
            res.status(401);
            res.json({ msg: "User not present in the system." })
        })
}

function getUser(req, res) {
    UserModel.find()
        .then(data => {
            res.json({ data: data });
        })
        .catch(err => {
            res.json({ err: err });
        })
}

module.exports = { signup, login, getUser };
