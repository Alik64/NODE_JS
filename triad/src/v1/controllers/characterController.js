const characterSevice = require("../services/characterSevice.js");

const getAllCharacters = (req, res) => {
  try {
    const allCharacters = characterSevice.getAllCharacters();
    res.send({ status: "OK", data: allCharacters });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneCharacter = (req, res) => {
  const {
    params: { characterId },
  } = req;
  if (typeof characterId === "undefined") {
    res.status(400).send({
      status: "FAILED",
      data: { error: 'Parameter ":characterId" can not be empty' },
    });
  }
  try {
    const character = characterSevice.getOneCharacter(characterId);
    res.send({ status: "OK", data: character });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the folowing keys in request body is missing or empty : 'name', 'description','thumbnail', 'humanName', 'isLiked'",
      },
    });
  }
  const newCharacter = {
    name: body.name,
    description: body.description,
    thumbnail: body.thumbnail,
    humanName: body.humanName,
    isLike: body.isLike,
  };

  try {
    const createdCharacter = characterSevice.createNewCharacter(newCharacter);
    res.status(201).send({ status: "OK", data: createdCharacter });
  } catch (error) {
    res
      .status(error?.status || error)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneCharacter = (req, res) => {
  const {
    params: { characterId },
    body,
  } = req;
  if (typeof characterId === "undefined") {
    res.status(400).send({
      status: "FAILED",
      data: { error: 'Parameter ":characterId" can not be empty. ' },
    });
  }
  try {
    const updatedCharacter = characterSevice.updateOneCharacter(
      characterId,
      body
    );
    res.send({ status: "OK", data: updatedCharacter });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneCharacter = (req, res) => {
  const {
    params: { characterId },
  } = req;
  if (typeof characterId === "undefined") {
    res.status(400).send({
      status: "FAILED",
      data: { error: 'Parameter "characterId" can not be empty' },
    });
  }
  try {
    characterSevice.deleteOneCharacter();
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createNewCharacter,
  updateOneCharacter,
  deleteOneCharacter,
};
