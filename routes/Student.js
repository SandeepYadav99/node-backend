var studentCtrl = require("../controllers/Student");
var router = require("express").Router();

router.get("/", studentCtrl.readData);
router.post("/", studentCtrl.addData);
router.put("/:id", studentCtrl.updateData);
router.delete("/:id", studentCtrl.deleteData);

module.exports = router;
