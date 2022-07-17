const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllCharacters = (filterParams) => {
  const { length, page, isLike } = filterParams;

  try {
    let characters = DB.characters;

    if (length) {
      return characters.slice(0, length);
    }
    if (page) {
      let pageSize = 3;
      let firstElementOnPage = (page - 1) * pageSize;
      return characters.slice(
        firstElementOnPage,
        firstElementOnPage + pageSize
      );
    }
    if (isLike) {
      const bool = JSON.parse(isLike);
      return characters.filter((character) => character.isLike === bool);
    }
    let pageSize = 10;
    let firstElementOnPage = 0;
    return characters.slice(firstElementOnPage, firstElementOnPage + pageSize);
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneCharacter = (characterId) => {
  try {
    const character = DB.characters.find(
      (character) => character.id === characterId
    );
    if (typeof character === "undefined") {
      throw {
        status: 400,
        message: `Can't find a character with id ${characterId}`,
      };
    }
    return character;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};
const createNewCharacter = (newCharacter) => {
  try {
    const isAlreadyAdded =
      DB.characters.findIndex(
        (character) => character.name === newCharacter.name
      ) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 409,
        message: `Character with the name ${newCharacter.name} already exist.`,
      };
      return;
    }

    DB.characters.push(newCharacter);
    saveToDatabase(DB);

    return newCharacter;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneCharacter = (characterId, changes) => {
  try {
    const indexForUpdate = DB.characters.findIndex(
      (character) => character.id === characterId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find a character with id : ${characterId}`,
      };
    }
    const updatedCharacter = {
      ...DB.characters[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("fr-Fr", {
        timeZone: "Europe/Paris",
      }),
    };
    DB.characters[indexForUpdate] = updatedCharacter;
    saveToDatabase(DB);
    return updatedCharacter;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
const deleteOneCharacter = (characterId) => {
  try {
    const indexForDeleting = DB.characters.findIndex(
      (character) => character.id === characterId
    );
    if (indexForDeleting === -1) {
      throw {
        status: 400,
        message: `Can't find character with id : ${characterId}`,
      };
    }
    DB.characters.splice(indexForDeleting, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createNewCharacter,
  updateOneCharacter,
  deleteOneCharacter,
};

/**
 * @openapi
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: e8223af3-f6c7-48d9-97fd-78c159a6cc2d
 *         name:
 *           type: string
 *           example: Capitan Marvel
 *         description:
 *           type: string
 *           example: Dr. Bruce Banner lives a life etc...
 *         thumbnail:
 *           type: object
 *           properties:
 *            path:
 *               type: string
 *               example: https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-marvel.png?alt=media&token=fb83366e-4902-4541-a732-2efbb55147e5
 *         humanName:
 *           type: string
 *           example: John Doe
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM

 */
