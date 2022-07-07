const Record = require("../database/Record.js");
const { v4: uuid } = require("uuid");

const getAllRecords = () => {
  try {
    const allRecords = Record.getAllRecords();
    return allRecords;
  } catch (error) {
    throw error;
  }
};
const getOneRecord = (recordId) => {
  try {
    const record = Record.getOneRecord(recordId);
    return record;
  } catch (error) {
    throw error;
  }
};
const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
const createNewRecord = (newRecord) => {
  const recordToInsert = {
    ...newRecord,
    id: uuid(),
    createdAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
  };
  try {
    const createdRecord = Record.createNewRecord(recordToInsert);
    return createdRecord;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRecordForWorkout,
  getAllRecords,
  getOneRecord,
  createNewRecord,
};
