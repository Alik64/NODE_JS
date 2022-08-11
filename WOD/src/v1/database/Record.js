const RecordModel = require("../models/Record.js");

const getAll = async () => {
  try {
    const records = RecordModel.find().populate("user").exec();

    return records;
  } catch (error) {
    console.log(error);
    throw {
      status: error?.status || 500,
      message: "Impossible to get records",
    };
  }
};

const create = async (createdRecord) => {
  try {
    const newRecord = await createdRecord.save();
    return newRecord;
  } catch (error) {
    console.log(error);
    throw {
      status: error?.status || 500,
      message: "Impossible to create a record",
    };
  }
};

module.exports = {
  getAll,
  create,
};

// const getAllRecords = () => {
//   try {
//     return DB.records;
//   } catch (error) {
//     throw { status: error?.status || 500, message: error };
//   }
// };
// const getOneRecord = (recordId) => {
//   try {
//     const record = DB.records.find((record) => record.id === recordId);
//     if (!record) {
//       throw { status: 400, message: `Can't find a record with id ${recordId}` };
//     }
//     return record;
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };
// const getRecordForWorkout = (workoutId) => {
//   try {
//     const record = DB.records.filter((record) => record.workout === workoutId);
//     if (!record) {
//       throw {
//         status: 400,
//         message: `Can't find workout with id: ${workoutId} `,
//       };
//     }
//     return record;
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };

// const createNewRecord = (newRecord) => {
//   try {
//     const isAlreadyAdded =
//       DB.records.findIndex((record) => record.id === newRecord.id) > -1;
//     if (isAlreadyAdded) {
//       throw {
//         status: 400,
//         message: `Record with id : ${newRecord.id} is already exists`,
//       };
//     }
//     DB.records.push(newRecord);
//     saveToDatabase(DB);
//     return newRecord;
//   } catch (error) {}
// };

// const deleteOneRecord = (recordId) => {
//   try {
//     const indexForDeleting = DB.records.findIndex(
//       (record) => record.id === recordId
//     );
//     if (indexForDeleting === -1) {
//       throw {
//         status: 400,
//         message: `Can't find a record with id ${recordId}`,
//       };
//     }
//     DB.records.splice(indexForDeleting, 1);
//     saveToDatabase(DB);
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };
