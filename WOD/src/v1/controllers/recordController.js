const RecordModel = require("../models/Record.js");

const getAll = async (req, res) => {
  try {
    const records = await RecordModel.find()
      .populate(["user", "workout"])
      .exec();
    res.json(records);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ message: "Impossible to get records" });
  }
};
const getOne = async (req, res) => {
  try {
    const recordId = req.params.id;
    const records = await RecordModel.findById(recordId);
    res.json(records);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to get record",
    });
  }
};
const create = async (req, res) => {
  try {
    const newRecord = new RecordModel({
      record: req.body.record,
      workout: req.body.workout,
      user: req.userId,
    });

    const record = await newRecord.save();
    res.json(record);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to create a record",
    });
  }
};

const remove = async (req, res) => {
  try {
    const recordId = req.params.id;
    RecordModel.findOneAndDelete(
      {
        _id: recordId,
      },
      (err, doc) => {
        if (err) {
          console.log("error : ", err);
          return res.status(500).json({
            message: "Impossible to delete record",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Record not found",
          });
        }
        res.json({ message: " success" });
      }
    );
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to delete record",
    });
  }
};
module.exports = {
  getAll,
  getOne,
  create,
  remove,
};
