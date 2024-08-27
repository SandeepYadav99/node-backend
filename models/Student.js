var mongoose = require("mongoose");

var Student = new mongoose.Schema({
    roll: Number,
    name: String,
    phone: Number
});

module.exports = mongoose.model("student", Student);
