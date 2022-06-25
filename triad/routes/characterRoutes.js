const express = require("express");
const router = express.router();
const characterController = require("../controllers/characterController.js");

router.get("/", characterController.getAllCharacters);
router.get("/:characterId", characterController.getOneCharacter);
router.post("/", characterController.createNewCharacter);
router.patch("/characterId", characterController.updateOneCharacter);
router.delete("/characterId", characterController.deleteOneCharacter);

module.exports = router;
