const User = require('./auth.services');

const createUserHandler   = async (req, res) => {
  try {
    const data = req.body;
    const result = await User.createUser(data);

    // success response
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: result,
    });

  } catch (error) {
    // error response
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUserHandler,
};
