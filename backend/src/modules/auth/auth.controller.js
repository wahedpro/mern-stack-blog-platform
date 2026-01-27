const User = require('./auth.services');
const Invite = require('../invite/invite.model');
const UserModel = require('./auth.model');

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


const registerWithInvite = async (req, res) => {
  try {
    const { token, name, password } = req.body;

    const invite = await Invite.findOne({ token, isUsed: false });

    if (!invite || invite.expiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired invite'
      });
    }

    const user = await UserModel.create({
      name,
      email: invite.email,
      password
    });

    invite.isUsed = true;
    await invite.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


module.exports = {
  createUserHandler,
  loginUserHandler,
  registerWithInvite,
};
