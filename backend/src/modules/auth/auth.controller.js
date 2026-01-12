const User = require('./auth.services');

// register user controller
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

// login user controller
const loginUserHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await User.loginUser(data);
    // success response
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
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
  loginUserHandler,
};
