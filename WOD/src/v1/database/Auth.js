const createNewUser = async (createdUser) => {
  const newUser = await createdUser.save();
  return newUser;
};

module.exports = {
  createNewUser,
};
