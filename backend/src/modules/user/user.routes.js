const express = require('express');
const router = express.Router();
const sendEmail = require('../../utils/sendEmail');

const authMiddleware = require('../../middlewares/authMiddleware');

const {
  getAllUsersController,
  getSingleUserController,
  getMyProfileController
} = require('./user.controller');


router.get('/test-email', async (req, res) => {
  try {
    await sendEmail(
      '143wd.1w@gmail.com',
      'Test Email',
      'This is a test email from blog system'
    );

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

// Logged-in user → own profile
router.get('/me', authMiddleware('user'), getMyProfileController);

// Admin → get all users
router.get('/', authMiddleware('admin'), getAllUsersController);

// Admin → get single user by id
router.get('/:id', authMiddleware('admin'), getSingleUserController);


module.exports = router;
