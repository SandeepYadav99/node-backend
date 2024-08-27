var router = require("express").Router();
var userCtrl = require("../controllers/User");
var verifyValidUser = require("../middleware/auth");


router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/getUsers", verifyValidUser, userCtrl.getUser);

module.exports = router;
