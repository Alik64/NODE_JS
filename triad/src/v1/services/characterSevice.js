const Character = require("../database/Character");
const { v4: uuid } = require("uuid");

const getAllCharacters = () => {
  try {
    const allCharacters = Character.getAllCharacters();
    return allCharacters;
  } catch (error) {
    throw error;
  }
};

const getOneCharacter = (characterId) => {
  try {
    const character = Character.getOneCharacter(characterId);
    return character;
  } catch (error) {
    throw error;
  }
};

const createNewCharacter = (newCharacter) => {
  const characterToInsert = {
    ...newCharacter,
    id: uuid(),
    createdAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
    updatedAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
  };
  try {
    const createdCharacter = Character.createNewCharacter(characterToInsert);
    return createdCharacter;
  } catch (error) {
    throw error;
  }
};

const updateOneCharacter = (characterId, changes) => {
  try {
    const updatedCharacter = Character.updateOneCharacter(characterId, changes);
    return updatedCharacter;
  } catch (error) {
    throw error;
  }
};

const deleteOneCharacter = (characterId) => {
  try {
    Character.deleteOneCharacter(characterId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createNewCharacter,
  updateOneCharacter,
  deleteOneCharacter,
};
