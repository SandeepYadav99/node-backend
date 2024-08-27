//name, email, password
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

var Users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

Users.methods.generateToken = function () {
    var token = jwt.sign({ uid: this._id }, process.env.KEY);
    return token;
}

module.exports = mongoose.model("users", Users);
