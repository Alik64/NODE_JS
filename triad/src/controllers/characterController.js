const characterSevice = require("../services/characterSevice.js");

const getAllCharacters = (req, res) => {
  const allCharacters = characterSevice.getAllCharacters();
  res.send({ status: "OK", data: allCharacters });
};

const getOneCharacter = (req, res) => {
  const character = characterSevice.getOneCharacter(req.params.characterId);
  res.send({ status: "OK", data: character });
};

const createNewCharacter = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.description ||
    !body.thumbnail ||
    !body.humanName ||
    !body.isLike
  ) {
    return;
  }

  const newCharacter = {
    name: body.name,
    description: body.description,
    thumbnail: body.thumbnail,
    humanName: body.humanName,
    isLike: body.isLike,
  };

  const createdCharacter = characterSevice.createNewCharacter(newCharacter);
  res.status(201).send({ status: "OK", data: createdCharacter });
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
