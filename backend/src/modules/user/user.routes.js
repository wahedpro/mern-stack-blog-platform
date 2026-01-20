const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middlewares/authMiddleware');

const {
  getAllUsersController,
  getSingleUserController,
  getMyProfileController
} = require('./user.controller');

// Logged-in user → own profile
router.get('/me', authMiddleware('user'), getMyProfileController);

// Admin → get all users
router.get('/', authMiddleware('admin'), getAllUsersController);

// Admin → get single user by id
router.get('/:id', authMiddleware('admin'), getSingleUserController);

module.exports = router;
