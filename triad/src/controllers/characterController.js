const characterSevice = require("../services/characterSevice.js");

const getAllCharacters = (req, res) => {
  const allCharacters = characterSevice.getAllCharacters();
  res.send({ status: "OK", data: allCharacters });
};

const getOneCharacter = (req, res) => {
  //   console.log(req.params);
  const character = characterSevice.getOneCharacter(req.params.characterId);
  res.send({ status: "OK", data: character });
};

const createNewCharacter = (req, res) => {
  const createdCharacter = characterSevice.createNewCharacter();
  res.send("Create a new character");
};

const updateOneCharacter = (req, res) => {
  const updatedCharacter = characterSevice.updateOneCharacter();
  res.send("Update an existing character");
};

const deleteOneCharacter = (req, res) => {
  const deletedCharacter = characterSevice.deleteOneCharacter();
  res.send("Delete an existing character");
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createNewCharacter,
  updateOneCharacter,
  deleteOneCharacter,
};
