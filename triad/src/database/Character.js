const DB = require("./db.json");

const getAllCharacters = () => {
  return DB.characters;
};

module.exports = { getAllCharacters };
