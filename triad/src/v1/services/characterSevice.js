const Character = require("../database/Character");
const { v4: uuid } = require("uuid");

const getAllCharacters = () => {
  const allCharacters = Character.getAllCharacters();
  return allCharacters;
};

const getOneCharacter = (id) => {
  const allCharacters = Character.getAllCharacters();
  const filtered = allCharacters.filter((character) => character.id === id);
  return filtered;
};

const createNewCharacter = (newCharacter) => {
  const characterToInsert = {
    ...newCharacter,
    id: uuid(),
    createdAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
    updatedAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
  };

  const createdCharacter = Character.createNewCharacter(characterToInsert);
  return createdCharacter;
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
