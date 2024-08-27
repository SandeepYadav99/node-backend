var PhoneBookModel = require("../models/PhoneBook");

function readData(req, res) {
    PhoneBookModel.find()
        .then(data => {
            res.json({ result: data });
        })
        .catch(err => {
            res.status(500);
            res.json({ error: err });
        })
}

function addData(req, res) {
    PhoneBookModel.create(req.body)
        .then(data => {
            res.json({ result: data });
        })
        .catch(err => {
            res.status(500);
            res.json({ error: err });
        })
}

function updateData(req, res) {
    PhoneBookModel.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(data => {
            res.json({ result: data });
        })
        .catch(err => {
            res.status(500);
            res.json({ error: err });
        })
}

function deleteData(req, res) {
    PhoneBookModel.findOneAndDelete({ _id: req.params.id })
        .then(data => {
            res.json({ result: data });
        })
        .catch(err => {
            res.status(500);
            res.json({ error: err });
        })
}

module.exports = { readData, addData, updateData, deleteData };
