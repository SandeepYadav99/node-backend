var router = require("express").Router();
var operationRoute = require("./operation");
var StudentRoute = require("./Student");
var UserRoute = require("../routes/User");
var PhoneBookRoute = require("../routes/PhoneBook");

router.use("/operation", operationRoute);
router.use("/student", StudentRoute);
router.use("/user", UserRoute);
router.use("/phonebook", PhoneBookRoute);

module.exports = router;
