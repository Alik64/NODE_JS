const Character = require("../database/Character");

const getAllCharacters = () => {
  const allCharacters = Character.getAllCharacters();
  return allCharacters;
};

const getOneCharacter = (id) => {
  const allCharacters = Character.getAllCharacters();
  const filtered = allCharacters.filter((character) => character.id === id);
  return filtered;
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
