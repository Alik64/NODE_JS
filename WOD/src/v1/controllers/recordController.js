const recordService = require("../services/recordService.js");

const getAllRecords = (req, res) => {
  try {
    const allRecords = recordService.getAllRecords();
    res.send({ status: "OK", data: allRecords });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneRecord = (req, res) => {
  const {
    params: { recordId },
  } = req;
  if (!recordId) {
    res.status(400).send({ status: "FAILED, data:" });
  }
  try {
    const record = recordService.getOneRecord(recordId);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (typeof workoutId === "undefined") {
    res.status(400).send({
      status: "FAILED",
      data: { error: 'Parameter ":workoutId" can not be empty.' },
    });
  }
  try {
    const record = recordService.getRecordForWorkout(workoutId);

    res.send({
      status: "OK",
      data: record,
    });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: error?.message || error });
  }
};

const createNewRecord = (req, res) => {
  const { body } = req;

  if (!body.workout || !body.record) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of following keys in request body is missing or is empty : 'workout','record",
      },
    });
    return;
  }

  const newRecord = {
    workout: body.workout,
    record: body.record,
  };

  try {
    const createdRecord = recordService.createNewRecord(newRecord);
    res.status(201).send({ status: "OK", data: createdRecord });
    console.log("newRecord : ", newRecord);
  } catch (error) {
    res
      .status(error?.status || error)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
module.exports = {
  getRecordForWorkout,
  getAllRecords,
  getOneRecord,
  createNewRecord,
};
