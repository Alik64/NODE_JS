const createNewUser = async (createdUser) => {
  try {
    const newUser = await createdUser.save();
    return newUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  createNewUser,
};
