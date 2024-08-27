var router = require("express").Router();
var operationCtrl = require("../controllers/operation");

router.post("/add", operationCtrl.add);
router.post("/divide", operationCtrl.divide);
router.post("/multiply", operationCtrl.multiply);
router.post("/sub", operationCtrl.sub);

module.exports = router;
