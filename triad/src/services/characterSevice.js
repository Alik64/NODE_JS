const Character = require("../../database/Character.js");

const getAllCharacters = () => {
  const allCharacters = Character.getAllCharacters();
  return allCharacters;
};

const getOneCharacter = () => {
  return;
};

const createNewCharacter = () => {
  return;
};

const updateOneCharacter = () => {
  return;
};

const deleteOneCharacter = () => {
  return;
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createNewCharacter,
  updateOneCharacter,
  deleteOneCharacter,
};
