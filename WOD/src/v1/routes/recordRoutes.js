const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController.js");

router.get("/", recordController.getAllRecords);
// router.get("/:recordId", recordController.getOneRecord);

// router.post("/", recordController.createNewRecord);

// router.patch("/:recordId", recordController.updateOneRecord);

// router.delete("/:recordId", recordController.deleteOneRecord);

module.exports = router;
