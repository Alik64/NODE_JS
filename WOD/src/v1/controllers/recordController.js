const recordService = require("../services/recordService.js");

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
module.exports = { getRecordForWorkout };
