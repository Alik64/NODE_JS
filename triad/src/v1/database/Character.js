const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllCharacters = () => {
  try {
    return DB.characters;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const createNewCharacter = (newCharacter) => {
  const isAlreadyAdded =
    DB.characters.findIndex((character) => character.id === newCharacter.id) >
    -1;

  if (isAlreadyAdded) {
    return "This workout is already exist";
  }

  DB.characters.push(newCharacter);
  saveToDatabase(DB);

  return newCharacter;
};

module.exports = { getAllCharacters, createNewCharacter };
