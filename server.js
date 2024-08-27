var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var cors = require("cors");
var routes = require("./routes/index");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.static(__dirname + "/public"));

dotenv.config({ path: "./config/.env" });//process.env = {//.env}

mongoose.connect(process.env.DB_URL);


app.get("/", (req, res) => {
    res.json({ message: "Integration of node-react" });
});


app.use("/", routes);

app.use((req, res, next) => {
    res.status(404);
    res.json({ message: "Incorrect api endpoint." });
});



app.listen(process.env.PORT, () => {
    console.log(`App Started at ${process.env.PORT}`);
})

module.exports = app;
