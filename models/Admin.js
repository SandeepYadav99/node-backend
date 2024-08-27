var mongoose = require("mongoose");

var Admin = new mongoose.Schema({
    roll: Number,
    name: String,
    phone: Number
});

module.exports = mongoose.model("admin", Admin);
