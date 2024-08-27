function add(req, res) {
    console.log(req.body);
    if (req.body.num1 && req.body.num2) {
        var sum = Number(req.body.num1) + Number(req.body.num2);
        res.json({ result: sum });
    } else {
        res.status(400);
        res.json({ message: "num1 and num2 should be non empty." });
    }
}


function multiply(req, res) {
    console.log(req.body);
    if (req.body.num1 && req.body.num2) {
        var sum = Number(req.body.num1) * Number(req.body.num2);
        res.json({ result: sum });
    } else {
        res.status(400);
        res.json({ message: "num1 and num2 should be non empty." });
    }
}

function divide(req, res) {
    console.log(req.body);
    if (req.body.num1 && req.body.num2) {
        var sum = Number(req.body.num1) / Number(req.body.num2);
        res.json({ result: sum });
    } else {
        res.status(400);
        res.json({ message: "num1 and num2 should be non empty." });
    }
}

function sub(req, res) {
    console.log(req.body);
    if (req.body.num1 && req.body.num2) {
        var sum = Number(req.body.num1) - Number(req.body.num2);
        res.json({ result: sum });
    } else {
        res.status(400);
        res.json({ message: "num1 and num2 should be non empty." });
    }
}


module.exports = { add, multiply, divide, sub }
