const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middlewares/authMiddleware');
const { inviteUserController } = require('./invite.controller');

router.post(
  '/invite',
  authMiddleware('admin'),
  inviteUserController
);

module.exports = router;
