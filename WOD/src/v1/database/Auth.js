const UserModel = require("../models/User.js");

const createNewUser = async (createdUser) => {
  try {
    const newUser = await createdUser.save();
    return newUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const login = async (email) => {
  try {
    const authUser = UserModel.findOne({ email: email });
    return authUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

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
  createNewUser,
  login,
  getMe,
};
