const Record = require("../database/Record.js");
const RecordModel = require("../models/Record.js");

const getAll = async (req, res) => {
  try {
    const records = await Record.getAll();
    res.json(records);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const create = async (req, res) => {
  try {
    const doc = new RecordModel({
      record: req.body.record,
      workout: req.body.workout,
      user: req.userId,
    });

    const record = await Record.create(doc);
    res.json(record);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
module.exports = {
  create,
  getAll,
};
