const DB = require("./db.json");

const getAllRecords = () => {
  try {
    return DB.records;
  } catch (error) {
    throw { status: error?.status || 500, message: error };
  }
};

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with id: ${workoutId} `,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
module.exports = { getRecordForWorkout, getAllRecords };
