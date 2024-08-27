var phoneBookCtrl = require("../controllers/PhoneBook");
var router = require("express").Router();

router.get("/", phoneBookCtrl.readData);
router.post("/", phoneBookCtrl.addData);
router.put("/:id", phoneBookCtrl.updateData);
router.delete("/:id", phoneBookCtrl.deleteData);

module.exports = router;
