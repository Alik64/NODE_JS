const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllCharacters = () => {
  return DB.characters;
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
