var StudentModel = require("../models/Student");

function readData(req, res) {
    StudentModel.find()
        .then(data => {
            res.json({ result: data });
        })
}

function addData(req, res) {
    StudentModel.create(req.body)
        .then(data => {
            res.json({ result: data });
        })
}

function updateData(req, res) {
    StudentModel.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(data => {
            res.json({ result: data });
        })
}

function deleteData(req, res) {
    StudentModel.findOneAndDelete({ _id: req.params.id })
        .then(data => {
            res.json({ result: data });
        })
}

module.exports = { readData, addData, updateData, deleteData };
