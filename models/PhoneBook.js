var mongoose = require("mongoose");

var PhoneBook = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("phonebook", PhoneBook);
