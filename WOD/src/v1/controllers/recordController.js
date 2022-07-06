const recordService = require("../services/recordService.js");

const getAllRecords = (req, res) => {
  try {
    const allRecords = recordService.getAllRecords();
    res.send({ status: "OK", data: allRecords });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: error?.message || error });
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
module.exports = { getRecordForWorkout, getAllRecords };
