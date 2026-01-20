const User = require('../auth/auth.model');

// Get all users (Admin)
const getAllUsers = async () => {
  const users = await User.find().select('-password');
  return users;
};

// Get single user by id (Admin)
const getSingleUserById = async (id) => {
  const user = await User.findById(id).select('-password');

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

// Get logged-in user profile
const getMyProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  return user;
};

module.exports = {
  getAllUsers,
  getSingleUserById,
  getMyProfile
};
