const UserModel = require("../models/User.js");

const getMe = async (userId) => {
  try {
    const userMe = await UserModel.findById(userId);
    return userMe;
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ message: "Access denied" });
  }
};
module.exports = {
  // createNewUser,

  getMe,
};
